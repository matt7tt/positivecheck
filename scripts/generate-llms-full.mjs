#!/usr/bin/env node
// Generate public/llms-full.txt — full text of the site's evergreen reference
// pages in one crawl-friendly markdown file (llms.txt convention companion).
//
// Usage: node scripts/generate-llms-full.mjs
// Re-run after materially updating any of the pages listed below, then commit
// the regenerated public/llms-full.txt.

import { writeFileSync } from "node:fs";

const SITE = "https://www.positivecheck.com";

const PAGES = [
  "/resources/billing-guide",
  "/resources/compare/rpm-vs-ccm-medicare-billing",
  "/resources/compare/tcm-and-ccm-combined-month-billing",
  "/solutions/remote-patient-monitoring/cpt-99457-billing-guide",
  "/solutions/remote-patient-monitoring/interactive-communication-requirement",
  "/solutions/remote-patient-monitoring/patient-selection",
  "/solutions/chronic-care-management/cpt-99490-billing-guide",
  "/solutions/chronic-care-management/2-chronic-conditions-requirement",
  "/solutions/chronic-care-management/20-minutes-monthly-requirement",
  "/solutions/post-discharge-follow-up/cpt-99495-billing-guide",
  "/solutions/post-discharge-follow-up/30-day-readmission-reduction",
  "/solutions/post-discharge-follow-up/post-discharge-contact-timing",
  "/blog/2026-rpm-cpt-codes",
  "/blog/ccm-billing-2026-cpt-codes-guide",
  "/blog/why-rpm-programs-fail",
  "/faq",
  "/about/clinical-standards",
];

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2019;/g, "’")
    .replace(/&#x201[cd];/gi, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

function htmlToText(html) {
  let h = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");

  const main = h.match(/<main[\s\S]*?<\/main>/i);
  if (main) h = main[0];

  h = h
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n# ${strip(t)}\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n## ${strip(t)}\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n### ${strip(t)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${strip(t)}\n`)
    .replace(/<(p|tr)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, t) => `${strip(t)}\n`)
    .replace(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi, (_, t) => `${strip(t)} | `);

  return decode(
    h
      .replace(/<[^>]+>/g, " ")
      .split("\n")
      .map((l) => l.replace(/\s+/g, " ").replace(/(\s\|\s)+$/, "").trim())
      .filter((l, i, arr) => l && l !== arr[i - 1])
      .join("\n")
  );
}

const strip = (s) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

let out = `# Positive Check — full reference content (llms-full.txt)

> Companion to https://www.positivecheck.com/llms.txt containing the full text
> of Positive Check's evergreen billing, compliance, and program reference
> pages. Positive Check LLC provides AI-powered patient wellness calls for
> healthcare providers running Medicare RPM, CCM, and TCM programs.
> Site: ${SITE} · Contact: info@positivecheck.com

`;

for (const path of PAGES) {
  const url = `${SITE}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`SKIP ${path} (HTTP ${res.status})`);
    continue;
  }
  const text = htmlToText(await res.text());
  out += `\n---\nSource: ${url}\n\n${text}\n`;
  console.log(`ok ${path} (${text.length} chars)`);
}

writeFileSync("public/llms-full.txt", out);
console.log(`\nWrote public/llms-full.txt (${out.length} chars, ${PAGES.length} pages)`);
