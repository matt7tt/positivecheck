// RSS 2.0 feed for the blog, generated from lib/blog-posts.ts.
// Statically rendered at build time; rebuilds on every deploy.

import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/schema";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = blogPosts
    .slice()
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(`${post.datePublished}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.articleSection)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const newest = blogPosts.reduce(
    (max, p) => (p.dateModified > max ? p.dateModified : max),
    blogPosts[0].dateModified
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Positive Check Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Insights on AI-powered patient check-in calls, RPM and CCM billing, senior wellness, and healthcare operations from Positive Check.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(`${newest}T12:00:00Z`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
