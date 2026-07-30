#!/usr/bin/env node

/**
 * Validate the SEO-critical output of a completed Next.js production build.
 *
 * This intentionally checks rendered HTML instead of maintaining a manual route
 * allowlist. Run `npm run build` (which invokes this script automatically), or
 * run `npm run check:seo` against the most recent `.next` output.
 */

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const APP_BUILD = path.join(ROOT, ".next", "server", "app");
const PUBLIC = path.join(ROOT, "public");
const SITE_ORIGIN = "https://www.positivecheck.com";

const errors = [];
const warnings = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function routeFromHtml(file) {
  const relative = path.relative(APP_BUILD, file).replace(/\\/g, "/");
  const withoutExtension = relative.replace(/\.html$/, "");
  return withoutExtension === "index" ? "/" : `/${withoutExtension}`;
}

function normalizeRoute(value) {
  if (!value) return null;
  const decoded = decodeHtml(value);
  if (
    decoded.startsWith("#") ||
    decoded.startsWith("mailto:") ||
    decoded.startsWith("tel:") ||
    decoded.startsWith("javascript:")
  ) {
    return null;
  }

  let url;
  try {
    url = decoded.startsWith("http")
      ? new URL(decoded)
      : new URL(decoded, SITE_ORIGIN);
  } catch {
    return null;
  }

  if (url.origin !== SITE_ORIGIN) return null;
  let pathname = decodeURIComponent(url.pathname).replace(/\/+$/, "");
  if (!pathname) pathname = "/";
  return pathname;
}

function publicFileForUrl(value) {
  const route = normalizeRoute(value);
  if (!route || route === "/") return null;
  const candidate = path.join(PUBLIC, route);
  return candidate.startsWith(PUBLIC) ? candidate : null;
}

if (!fs.existsSync(APP_BUILD)) {
  console.error("SEO check requires a completed Next.js build. Run `npm run build`.");
  process.exit(1);
}

const htmlFiles = walk(APP_BUILD).filter(
  (file) => file.endsWith(".html") && !file.endsWith("_not-found.html")
);
const pages = new Map(
  htmlFiles.map((file) => [routeFromHtml(file), fs.readFileSync(file, "utf8")])
);
const routes = new Set(pages.keys());

// Include redirect sources as valid internal destinations.
const nextConfig = fs.readFileSync(path.join(ROOT, "next.config.mjs"), "utf8");
const redirectRoutes = new Set(
  [...nextConfig.matchAll(/source:\s*['"]([^'"]+)['"]/g)]
    .map((match) => match[1])
    .filter((route) => !route.includes(":") && !route.includes("*"))
);

function routeExists(route) {
  if (!route) return true;
  if (routes.has(route) || redirectRoutes.has(route)) return true;
  const publicFile = path.join(PUBLIC, route);
  return publicFile.startsWith(PUBLIC) && fs.existsSync(publicFile);
}

const indexableRoutes = new Set();
const titles = new Map();
const descriptions = new Map();
let linkCount = 0;
let imageCount = 0;
let schemaCount = 0;

for (const [route, html] of pages) {
  const title = decodeHtml((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const description = decodeHtml(
    (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || ""
  ).trim();
  const robots = (
    html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i) || []
  )[1] || "";
  const canonical = (
    html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) || []
  )[1];
  const noindex = robots.toLowerCase().includes("noindex");

  if (!title) errors.push(`${route}: missing <title>`);
  if (!description) errors.push(`${route}: missing meta description`);

  if (!noindex) {
    indexableRoutes.add(route);
    if (!canonical) {
      errors.push(`${route}: indexable page is missing a canonical URL`);
    } else {
      const canonicalRoute = normalizeRoute(canonical);
      if (canonicalRoute !== route) {
        errors.push(`${route}: canonical resolves to ${canonicalRoute || canonical}`);
      }
    }
  }

  if (title) {
    const prior = titles.get(title);
    if (prior && !noindex) errors.push(`${route}: duplicate title also used by ${prior}`);
    else if (!noindex) titles.set(title, route);
  }
  if (description) {
    const prior = descriptions.get(description);
    if (prior && !noindex) {
      errors.push(`${route}: duplicate description also used by ${prior}`);
    } else if (!noindex) {
      descriptions.set(description, route);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
    const linkedRoute = normalizeRoute(match[1]);
    if (!linkedRoute) continue;
    linkCount += 1;
    if (!routeExists(linkedRoute)) {
      errors.push(`${route}: broken internal link ${linkedRoute}`);
    }
  }

  // Next/Image URLs are encoded in rendered HTML; decoding the complete HTML
  // exposes their original /images/... source paths.
  const decodedHtml = decodeHtml(html);
  const imagePaths = new Set(
    [...decodedHtml.matchAll(/\/images\/[A-Za-z0-9_().%+\-\u2011\u2013\u2014/ ]+\.(?:avif|gif|jpe?g|png|svg|webp)/gi)]
      .map((match) => decodeURIComponent(match[0]))
  );
  for (const imagePath of imagePaths) {
    imageCount += 1;
    const publicFile = path.join(PUBLIC, imagePath);
    if (!publicFile.startsWith(PUBLIC) || !fs.existsSync(publicFile)) {
      errors.push(`${route}: missing image ${imagePath}`);
    }
  }

  for (const match of html.matchAll(
    /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )) {
    schemaCount += 1;
    let schema;
    try {
      schema = JSON.parse(decodeHtml(match[1]));
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
      continue;
    }

    const inspect = (value) => {
      if (Array.isArray(value)) {
        value.forEach(inspect);
        return;
      }
      if (value && typeof value === "object") {
        Object.values(value).forEach(inspect);
        return;
      }
      if (typeof value !== "string" || !value.startsWith(SITE_ORIGIN)) return;

      const schemaRoute = normalizeRoute(value);
      if (!schemaRoute) return;
      if (schemaRoute.startsWith("/images/")) {
        const imageFile = publicFileForUrl(value);
        if (!imageFile || !fs.existsSync(imageFile)) {
          errors.push(`${route}: JSON-LD references missing image ${schemaRoute}`);
        }
      } else if (!routeExists(schemaRoute)) {
        errors.push(`${route}: JSON-LD references missing URL ${schemaRoute}`);
      }
    };
    inspect(schema);
  }
}

const sitemapSource = fs.readFileSync(path.join(ROOT, "app", "sitemap.ts"), "utf8");
const sitemapRoutes = new Set(
  [...sitemapSource.matchAll(/\bpath:\s*"([^"]+)"/g)].map((match) => match[1])
);
const sitemapImages = new Set(
  [...sitemapSource.matchAll(/"(\/images\/[^"]+)"/g)].map((match) => match[1])
);

for (const route of indexableRoutes) {
  if (!sitemapRoutes.has(route)) errors.push(`${route}: indexable route missing from sitemap`);
}
for (const route of sitemapRoutes) {
  if (!indexableRoutes.has(route)) errors.push(`${route}: sitemap route is missing or noindex`);
}
for (const imagePath of sitemapImages) {
  if (!fs.existsSync(path.join(PUBLIC, imagePath))) {
    errors.push(`sitemap: missing image ${imagePath}`);
  }
}

if (warnings.length) {
  console.warn("\nSEO warnings:");
  warnings.forEach((warning) => console.warn(`  - ${warning}`));
}

if (errors.length) {
  console.error(`\nSEO validation failed with ${errors.length} issue(s):`);
  [...new Set(errors)].forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log(
  `SEO validation passed: ${indexableRoutes.size} indexable routes, ` +
    `${linkCount} internal links, ${imageCount} image references, ` +
    `${schemaCount} JSON-LD blocks.`
);
