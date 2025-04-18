# Next.js 15.2.3+ Upgrade Guide

This guide outlines the steps to upgrade from Next.js 15.1.4 to Next.js 15.2.3 or later with minimal impact to the existing application.

## Pre-Upgrade Checklist

1. **Backup Your Project**: Create a full backup of your project before starting.
2. **Check Node.js Version**: Ensure you're using Node.js 18.17 or later (recommended).
   ```bash
   node -v
   ```
   
3. **Git Branch**: Create a new branch for the upgrade.
   ```bash
   git checkout -b upgrade-next-15.2.3
   ```

## Step 1: Update Dependencies

1. **Update package.json**: Update Next.js and related packages.
   - Update `next` to version `^15.2.3`
   - Update `eslint-config-next` to version `15.2.3`

2. **Install Updated Dependencies**: 
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Step 2: Code Compatibility Checks

The upgrade from 15.1.4 to 15.2.3+ is a minor version update but has some linting changes that may affect deployment. Check the following areas:

1. **Middleware**: No changes needed to the current middleware implementation.

2. **App Router**: The App Router architecture already in use is compatible with 15.2.3+.

3. **Image Component**: Verify that next/image imports and usage remain compatible.

4. **API Routes**: No changes needed to the API route structure.

5. **HTML Anchor Tags**: Replace all HTML anchor (`<a>`) tags with Next.js `<Link>` components for internal navigation:
   ```jsx
   // Before
   <a href="/some-page">Link Text</a>

   // After
   import Link from 'next/link'
   <Link href="/some-page">Link Text</Link>
   ```

6. **ESLint Configuration**: Update ESLint configuration to handle stricter rules:
   ```json
   // .eslintrc.json
   {
     "extends": "next/core-web-vitals",
     "rules": {
       "@typescript-eslint/no-unused-vars": "warn",
       "@next/next/no-img-element": "warn",
       "react-hooks/exhaustive-deps": "warn"
     }
   }
   ```

7. **Next.js Configuration**: Temporarily disable ESLint during builds if needed:
   ```javascript
   // next.config.mjs
   const nextConfig = {
     // ...other settings
     eslint: {
       // Warning: This allows production builds to successfully complete even if
       // your project has ESLint errors.
       ignoreDuringBuilds: true,
     }
   };
   ```

## Step 3: Testing

1. **Development Server**: Start the development server to test the application.
   ```bash
   npm run dev
   # or 
   yarn dev
   # or
   pnpm dev
   ```

2. **Test Key Functionality**:
   - Test authentication flow
   - Test the Phoenix landing page
   - Test the dashboard section
   - Test all form submissions
   - Verify API interactions

3. **Check for Console Errors**: Monitor the browser console and server logs for any errors.

## Step 4: Build and Deployment

1. **Build the Application**: Verify the build process works correctly.
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Check for Build Warnings**: Address any ESLint warnings that appear during the build process:
   - Replace `<img>` elements with Next.js `<Image>` components
   - Fix unused variable warnings
   - Update dependency arrays in React hooks

3. **Run Production Build Locally**: Test the production build locally before deploying.
   ```bash
   npm run start
   # or
   yarn start
   # or
   pnpm start
   ```

## Common Deployment Errors

If you encounter build failures during deployment with errors like:

```
./pages/404.js
Error: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead.
```

Follow these steps:
1. Replace all HTML anchor tags with Next.js Link components
2. Update ESLint configuration to downgrade warnings
3. Set `eslint.ignoreDuringBuilds: true` in next.config.mjs for immediate deployment

## Potential Issues and Solutions

1. **Experimental Features**: If you encounter issues with experimental features, check the updated syntax in Next.js 15.2.3+.

2. **Middleware Changes**: If middleware behavior has changed, verify the redirection logic still works as expected.

3. **Image Optimization**: If images aren't displaying correctly, check the Image component props and configuration.

## Rollback Plan

If you encounter significant issues:

1. **Revert package.json**: Revert to the previous versions of Next.js and related dependencies.

2. **Clear Cache**: Clear npm/yarn cache and node_modules.
   ```bash
   rm -rf node_modules
   rm -rf .next
   npm cache clean --force
   # then reinstall
   npm install
   ```

3. **Use Git**: If you created a branch for the upgrade, you can easily revert to the previous state.
   ```bash
   git checkout main
   ```

## Next.js 15.2.3+ Release Notes

The release includes minor bug fixes and performance improvements over 15.1.4, but also stricter linting rules. For a full list of changes, refer to the [official Next.js release notes](https://github.com/vercel/next.js/releases). 