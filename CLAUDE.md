# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (note: ESLint errors are ignored during builds)

## Architecture Overview

This is a Next.js 15 App Router application for Positive Check, a senior wellness call service.

### Key Technologies
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components (Radix UI primitives)
- Stripe for payments
- Vercel Analytics & Speed Insights

### Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable components organized by feature
  - `/components/ui` - shadcn/ui base components
  - `/components/shared` - Common layout components (header, footer, breadcrumb)
  - `/components/blog-posts` - Individual blog post components
  - `/components/payment` - Stripe payment components
- `/lib` - Utilities and contexts (auth-context, utils)
- `/public` - Static assets (images, audio files)

### Authentication System
- Simple token-based auth using cookies (`auth_token`)
- AuthProvider context manages global auth state
- Middleware protects `/my-account` routes and forwards tokens to API routes
- Authentication state is client-side only (no server-side session management)

### Component Architecture
- Uses shadcn/ui design system with customizable variants
- PublicHeader component handles navigation with mobile menu support
- Page components follow a pattern of importing corresponding components from `/components`
- Blog posts are individual components in `/components/blog-posts`

### Performance Optimizations
- Image optimization with WebP/AVIF support
- Resource hints and DNS prefetching in layout
- Critical CSS inlined for above-the-fold content
- Font optimization with local Geist fonts and Google Fonts (Space Grotesk, Raleway)
- Comprehensive caching headers for images

### Analytics & Tracking
- Facebook Pixel integration for marketing
- Google Analytics (G-C6J8097SY5)
- Vercel Analytics and Speed Insights
- Performance monitoring component

### Payment Integration
- Stripe integration with React Stripe.js
- Payment components in `/components/payment`

### Content Strategy
- Extensive blog content about senior care and caregiving
- SEO-optimized with comprehensive metadata
- Static sitemap and robots.txt