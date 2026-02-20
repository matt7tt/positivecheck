# Positive Check

AI-powered patient wellness call platform for healthcare providers. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Development Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Production build (ESLint errors ignored)
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend email service API key (required for contact/demo forms) |
| `CONTACT_EMAIL` | Recipient for form submissions (default: `hello@positivecheck.com`) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe public key |
| `NEXT_PUBLIC_*` | Any client-side env vars |

## Site Structure

### Pages & Routes

All pages live in `/app`. Each page typically imports a component from `/components` that contains the actual page content.

| Route | File | Component | Description |
|-------|------|-----------|-------------|
| `/` | `app/page.tsx` | Self-contained | Homepage — hero, testimonials, admin console tabs, FAQs, contact form |
| `/about` | `app/about/page.tsx` | Self-contained | Company mission, vision, provider info |
| `/how-it-works` | `app/how-it-works/page.tsx` | `components/how-it-works.tsx` | 4-step process breakdown with HowTo structured data |
| `/platform` | `app/platform/page.tsx` | `components/platform.tsx` | Deep-dive marketing page — 7 sections covering AI, dashboard, analytics, enterprise |
| `/contact` | `app/contact/page.tsx` | `components/contact.tsx` | Contact form (uses `contact-form.tsx` internally) |
| `/demo` | `app/demo/page.tsx` | `components/demo.tsx` | Demo request page |
| `/blog` | `app/blog/page.tsx` | Self-contained | Blog listing with featured article + grid |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | `components/blog-posts/[slug].tsx` | Individual blog posts (see Blog section below) |
| `/sign-in` | `app/sign-in/page.tsx` | Self-contained | Provider sign-in form |
| `/provider-login` | `app/provider-login/page.tsx` | Self-contained | Alternative login route |
| `/forgot-password` | `app/forgot-password/page.tsx` | `components/forgot-password.tsx` | Password recovery |
| `/reset-password` | `app/reset-password/page.tsx` | `components/reset-password.tsx` | Password reset (with token) |
| `/my-account` | `app/my-account/page.tsx` | `components/my-account.tsx` | Protected dashboard — call reports, wellness tracking, PDF export |
| `/privacy` | `app/privacy/page.tsx` | Self-contained | Privacy policy |
| `/terms` | `app/terms/page.tsx` | `components/terms.tsx` | Terms of service |
| `/providers` | `app/providers/page.tsx` | — | Redirect to `/` |

### Blog Posts

Each blog post is a static route under `/app/blog/` with a matching component in `/components/blog-posts/`:

| Slug | Component File |
|------|---------------|
| `ai-companions-for-senior-loneliness-and-caregiver-stress` | `components/blog-posts/ai-companions-for-senior-loneliness-and-caregiver-stress.tsx` |
| `importance-of-checking-in-care-communities` | `components/blog-posts/importance-of-checking-in-care-communities.tsx` |
| `maintaining-social-connections` | `components/blog-posts/maintaining-social-connections.tsx` |
| `role-of-technology-in-senior-care` | `components/blog-posts/role-of-technology-in-senior-care.tsx` |
| `senior-sleep-health-fall-prevention-wellness-monitoring` | `components/blog-posts/senior-sleep-health-fall-prevention-wellness-monitoring.tsx` |
| `senior-phone-check-ins-mental-health-safety-benefits` | `components/blog/senior-phone-check-ins-mental-health-safety-benefits.tsx` |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form submission — sends email via Resend |
| `/api/request-demo` | POST | Demo request — sends email via Resend (used by `RequestDemoModal`) |

Both routes send from `Positive Check <info@contact.positivecheck.com>` to the `CONTACT_EMAIL` env var.

## Component Architecture

### Layout Components (`/components/shared`)

| Component | Purpose |
|-----------|---------|
| `public-header.tsx` | Sticky nav bar — links to Home, About, How It Works, Blog, Contact, Sign In + Request Demo modal. Takes `currentPage` prop for active highlighting. |
| `public-footer.tsx` | 4-column footer (Service, Resources, Company, Account) with legal links |
| `breadcrumb.tsx` | Breadcrumb navigation |

### Page Components (`/components`)

These are the main content components imported by page routes:

| Component | Used By |
|-----------|---------|
| `landing-page.tsx` | Alternative homepage (supports A/B variant prop) — not currently used by `app/page.tsx` |
| `how-it-works.tsx` | `/how-it-works` |
| `platform.tsx` | `/platform` |
| `contact.tsx` / `contact-form.tsx` | `/contact` |
| `demo.tsx` | `/demo` |
| `my-account.tsx` | `/my-account` |
| `terms.tsx` | `/terms` |
| `forgot-password.tsx` | `/forgot-password` |
| `reset-password.tsx` | `/reset-password` |
| `request-demo-modal.tsx` | Used in header/footer — modal dialog that posts to `/api/request-demo` |
| `structured-data.tsx` | JSON-LD schemas (Organization, MedicalService, FAQ, HowTo, Breadcrumbs) |
| `performance-monitor.tsx` | Web vitals tracking, included in root layout |
| `FacebookPixel.tsx` | Facebook Pixel component (pixel loaded inline in layout instead) |
| `blog-post.tsx` | Reusable blog post template |

### UI Components (`/components/ui`)

shadcn/ui primitives (Radix UI + Tailwind): `alert`, `button`, `card`, `checkbox`, `dialog`, `dropdown-menu`, `input`, `label`, `progress`, `select`, `textarea`

### Payment Components (`/components/payment`)

| Component | Purpose |
|-----------|---------|
| `PaymentForm.tsx` | Stripe payment form |
| `PaymentWrapper.tsx` | Stripe Elements provider wrapper |

## Layout & Middleware

### Root Layout (`app/layout.tsx`)

Wraps all pages. Provides:
- `AuthProvider` context
- Vercel `Analytics` and `SpeedInsights`
- `PerformanceMonitor`
- Facebook Pixel (inline script, pixel ID: `2093713827815363`)
- Google Analytics (inline script, ID: `G-C6J8097SY5`)
- Font loading (Inter, Space Grotesk, Raleway)
- Resource preloading and DNS prefetching

### Nested Layouts

Several pages have their own `layout.tsx` for metadata: `/about`, `/blog`, `/contact`, `/privacy`, `/providers`, `/sign-in`, `/provider-login`, `/terms`

### Middleware (`middleware.ts`)

- **A/B testing**: Assigns `ab_test_variant` cookie (A or B, 50/50 split) on homepage visits
- **Auth protection**: Redirects `/my-account` to `/sign-in` if no `auth_token` cookie
- **API forwarding**: Passes auth token to API route headers

## Shared Utilities (`/lib`)

| File | Purpose |
|------|---------|
| `auth-context.tsx` | React Context — provides `isAuthenticated` state + setter. Client-side only. |
| `utils.ts` | Utility functions (clsx/tailwind-merge helpers) |

## Static Assets (`/public`)

- `/public/images/` — 110+ images: admin console screenshots, senior care photos, dashboard mockups, branding (`positive-logo.png`)
- `/public/audio/Positive_Check_Greeting.mp3` — Lola's voice greeting
- `/public/robots.txt`, `sitemap.xml`, `sitemap-images.xml` — SEO files
- `/public/llms.txt` — LLM metadata

## Analytics & Tracking

| Service | ID/Config | Dashboard |
|---------|-----------|-----------|
| Google Analytics | `G-C6J8097SY5` | Google Analytics console |
| Facebook Pixel | `2093713827815363` | Meta Events Manager |
| Vercel Analytics | `@vercel/analytics` | Vercel project dashboard |
| Vercel Speed Insights | `@vercel/speed-insights` | Vercel project dashboard |

## Key Technologies

- **Next.js 15.2.6** with App Router
- **React 18**
- **TypeScript** (strict mode)
- **Tailwind CSS** with `tailwindcss-animate`
- **shadcn/ui** (Radix UI primitives)
- **Stripe** (`@stripe/react-stripe-js`)
- **Resend** for transactional email
- **Lucide React** for icons
- **Jest** + Testing Library for tests

## Brand & Design

- Primary gradient: purple (`#e879f9` to `#d946ef`)
- Text color: navy (`#1a2642`)
- Fonts: Inter (body), Space Grotesk & Raleway (headings/display)
- Mobile-responsive with hamburger menu
- Card-based layouts throughout
