// lib/blog-posts.ts
// Single source of truth for blog post metadata. Used by the blog listing,
// the RSS feed, and per-post pages. Ordered newest first; posts[0] is the
// featured article on /blog.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;      // listing excerpt + feed description
  datePublished: string;    // YYYY-MM-DD
  dateModified: string;     // YYYY-MM-DD — bump when a post is materially updated
  displayDate: string;      // human-readable, e.g. "July 20, 2026"
  readTime: string;
  image: string;            // site-relative path under /public
  articleSection: string;
  keywords: string[];
  listed?: boolean;         // default true; false = live route but not on /blog
}

export const blogPosts: BlogPost[] = [
  {
    slug: "2027-rpm-proposed-rule",
    title: "2027 RPM Proposed Rule: Initiating Visits, Employed Staff, and What Could Change",
    description:
      "CMS has proposed material RPM and RTM policy changes for 2027, including an initiating-visit requirement and limits on contracted clinical staff. See what is proposed, what remains current law, and what practices should review before the September 14 comment deadline.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    displayDate: "July 30, 2026",
    readTime: "9 min read",
    image: "/images/healthcare-administrator-desk.png",
    articleSection: "CMS Billing & Compliance",
    keywords: [
      "2027 RPM proposed rule",
      "CMS 2027 RPM",
      "remote patient monitoring 2027",
      "RPM initiating visit",
      "RPM employed clinical staff",
      "CMS-1848-P",
    ],
  },
  {
    slug: "why-rpm-programs-fail",
    title: "Why RPM Programs Fail: Four Operational Problems and How to Fix Them",
    description:
      "RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point with structured, automated patient outreach.",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    displayDate: "July 20, 2026",
    readTime: "6 min read",
    image: "/images/why-rpm-programs-fail.jpg",
    articleSection: "RPM & CCM Operations",
    keywords: [
      "why RPM programs fail",
      "RPM patient engagement",
      "RPM patient adherence",
      "remote patient monitoring challenges",
      "RPM enrollment strategies",
      "automated patient outreach",
    ],
  },
  {
    slug: "2026-rpm-cpt-codes",
    title: "RPM Billing in 2026: CPT Codes, Requirements and Reimbursement",
    description:
      "The CY 2026 Physician Fee Schedule added two new RPM codes — 99445 and 99470 — creating billable pathways for shorter transmission and treatment-management periods. Learn what each code covers and how to keep documentation defensible.",
    datePublished: "2026-07-12",
    dateModified: "2026-07-12",
    displayDate: "July 12, 2026",
    readTime: "12 min read",
    image: "/images/2026-rpm-cpt-codes-billing-guide.png",
    articleSection: "CMS Billing & Compliance",
    keywords: [
      "RPM billing 2026",
      "CPT 99445",
      "CPT 99454",
      "CPT 99457",
      "CPT 99458",
      "CPT 99470",
      "remote patient monitoring reimbursement",
    ],
  },
  {
    slug: "ccm-billing-2026-cpt-codes-guide",
    title: "CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489",
    description:
      "The CY 2026 Physician Fee Schedule raised rates across all four staff-directed CCM codes. Learn what each code covers, how to choose non-complex vs. complex CCM, and how to keep documentation audit-defensible.",
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
    displayDate: "July 2, 2026",
    readTime: "12 min read",
    image: "/images/ccm-billing-2026-guide.png",
    articleSection: "CMS Billing & Compliance",
    keywords: [
      "CCM billing 2026",
      "CPT 99490",
      "CPT 99439",
      "CPT 99487",
      "CPT 99489",
      "chronic care management reimbursement",
    ],
  },
  {
    slug: "ai-companions-for-senior-loneliness-and-caregiver-stress",
    title: "Can AI Companions Help Seniors and Caregivers?",
    description:
      "Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.",
    datePublished: "2025-07-05",
    dateModified: "2025-07-05",
    displayDate: "July 5, 2025",
    readTime: "8 min read",
    image: "/images/ai-companion-senior-wellness.png",
    articleSection: "Senior Wellness",
    keywords: [
      "AI companions for seniors",
      "senior loneliness",
      "caregiver stress",
      "AI wellness calls",
    ],
  },
  {
    slug: "senior-sleep-health-fall-prevention-wellness-monitoring",
    title: "Why Sleep Quality Is Critical for Senior Safety & Health",
    description:
      "Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.",
    datePublished: "2025-06-27",
    dateModified: "2025-06-27",
    displayDate: "June 27, 2025",
    readTime: "8 min read",
    image: "/images/senior-sleep-safety-bedroom.png",
    articleSection: "Senior Wellness",
    keywords: [
      "senior sleep health",
      "fall prevention",
      "wellness monitoring",
      "elderly sleep quality",
    ],
  },
  {
    slug: "importance-of-checking-in-care-communities",
    title: "The Importance of Checking In: Ensuring Seniors in Care Communities Receive Proper Attention",
    description:
      "While care communities strive to provide quality service, regular check-ins are crucial for ensuring seniors receive consistent, individualized attention and maintaining their well-being.",
    datePublished: "2025-03-17",
    dateModified: "2025-03-17",
    displayDate: "March 17, 2025",
    readTime: "8 min read",
    image: "/images/senior-care-family-visit.png",
    articleSection: "Senior Care",
    keywords: [
      "senior care communities",
      "checking in on seniors",
      "assisted living care quality",
    ],
  },
  {
    slug: "maintaining-social-connections",
    title: "Maintaining Social Connections in Senior Years",
    description:
      "Social connections play a vital role in maintaining mental and physical health as we age. Learn effective strategies to help seniors stay socially active and engaged.",
    datePublished: "2025-03-10",
    dateModified: "2025-03-10",
    displayDate: "March 10, 2025",
    readTime: "8 min read",
    image: "/images/senior-social-connections.png",
    articleSection: "Senior Wellness",
    keywords: [
      "senior social connections",
      "senior isolation",
      "aging and mental health",
    ],
  },
  {
    slug: "senior-phone-check-ins-mental-health-safety-benefits",
    title: "7 Ways Phone Check-ins Help Senior Mental Health",
    description:
      "Discover how regular phone check-ins improve senior mental health and safety, providing proven benefits for aging in place and caregiver peace of mind.",
    datePublished: "2025-01-25",
    dateModified: "2025-01-25",
    displayDate: "January 25, 2025",
    readTime: "8 min read",
    image: "/images/senior-phone-check-in.png",
    articleSection: "Senior Wellness",
    keywords: [
      "senior phone check-ins",
      "senior mental health",
      "aging in place",
    ],
  },
  {
    slug: "role-of-technology-in-senior-care",
    title: "The Role of Technology in Senior Care",
    description:
      "How AI-powered tools and telehealth are transforming senior care delivery, improving patient outcomes, and helping providers scale wellness monitoring.",
    datePublished: "2025-01-25",
    dateModified: "2025-01-25",
    displayDate: "January 25, 2025",
    readTime: "8 min read",
    image: "/images/senior-talking-on-the-phone1.webp",
    articleSection: "Senior Care",
    keywords: [
      "technology in senior care",
      "telehealth for seniors",
      "AI in elder care",
    ],
    listed: false,
  },
];

export const featuredPost = blogPosts[0];
export const listedPosts = blogPosts.filter((p) => p.listed !== false);
export const gridPosts = listedPosts.slice(1);
