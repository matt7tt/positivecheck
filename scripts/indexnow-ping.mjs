#!/usr/bin/env node
// Submit URLs to IndexNow (Bing, and by extension ChatGPT search's index).
//
// Usage:
//   node scripts/indexnow-ping.mjs                    # submit every URL in the live sitemap
//   node scripts/indexnow-ping.mjs /blog/my-new-post  # submit specific paths or absolute URLs
//
// Run after each production deploy that adds or updates public pages.

const HOST = "www.positivecheck.com";
// Key registered in Bing Webmaster Tools; served from public/<KEY>.txt
const KEY = "8765cdc6f92c48a1ac9b8eb36e23daa2";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((a) => (a.startsWith("http") ? a : `https://${HOST}${a}`))
  : await urlsFromSitemap();

if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow → HTTP ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
