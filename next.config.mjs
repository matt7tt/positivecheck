/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [],
        unoptimized: false,
        loader: 'default',
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react'],
    },
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    httpAgentOptions: {
        keepAlive: true,
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/index',
                destination: '/',
                permanent: true,
            },
            {
                source: '/providers',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blog/checking-in-on-seniors',
                destination: '/blog/importance-of-checking-in-care-communities',
                permanent: true,
            },
            {
                source: '/provider-login',
                destination: 'https://provider.positivecheck.com/admin-new/login',
                permanent: true,
            },
            {
                source: '/sign-in/providers',
                destination: 'https://provider.positivecheck.com/admin-new/login',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://api.stripe.com; frame-src https://js.stripe.com;",
                    },
                ],
            },
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/image',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400',
                    },
                ],
            },
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
