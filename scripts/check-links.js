const fs = require('fs');
const path = require('path');

// List of all internal pages that should exist
const expectedPages = [
  '/',
  '/about',
  '/how-it-works',
  '/contact',
  '/blog',
  '/phoenix',
  '/sign-in',
  '/onboarding-wizard',
  '/privacy',
  '/terms',
  '/my-account',
  '/forgot-password',
  '/reset-password',
  '/blog/caregiver-relief',
  '/blog/understanding-caregiver-burnout',
  '/blog/signs-loved-one-needs-caregiver-check-in',
  '/blog/tips-for-long-distance-caregiving',
  '/blog/how-many-adults-live-far-from-aging-parents',
  '/blog/checking-in-on-seniors',
  '/blog/maintaining-social-connections',
  '/blog/importance-of-checking-in-care-communities',
  '/blog/when-should-families-check-in',
  '/blog/role-of-technology-in-senior-care'
];

// Function to check if a page file exists
function checkPageExists(pagePath) {
  const appDir = path.join(__dirname, '../app');
  const componentsDir = path.join(__dirname, '../components');
  
  // Check app router pages
  const appPagePath = path.join(appDir, pagePath === '/' ? 'page.tsx' : `${pagePath}/page.tsx`);
  if (fs.existsSync(appPagePath)) {
    return { exists: true, location: appPagePath };
  }
  
  // Check component files
  const componentPath = path.join(componentsDir, `${pagePath.replace('/', '')}.tsx`);
  if (fs.existsSync(componentPath)) {
    return { exists: true, location: componentPath };
  }
  
  return { exists: false, location: null };
}

// Function to extract links from a file
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linkRegex = /href=["']([^"']+)["']/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const link = match[1];
      // Only check internal links (starting with / but not //)
      // Ignore image links, mailto links, tel links, and external links
      if (link.startsWith('/') && 
          !link.startsWith('//') && 
          !link.includes('.') && // Ignore file extensions (images, etc.)
          !link.startsWith('mailto:') && 
          !link.startsWith('tel:')) {
        // Remove trailing slashes for consistency
        const cleanLink = link.endsWith('/') && link !== '/' ? link.slice(0, -1) : link;
        links.push(cleanLink);
      }
    }
    
    return links;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

// Main function to check all links
function checkAllLinks() {
  console.log('🔍 Checking internal links...\n');
  
  const issues = [];
  const allFiles = [];
  
  // Collect all TypeScript/JavaScript files
  function collectFiles(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        collectFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        allFiles.push(filePath);
      }
    });
  }
  
  collectFiles(path.join(__dirname, '../app'));
  collectFiles(path.join(__dirname, '../components'));
  
  // Check each file for broken links
  allFiles.forEach(filePath => {
    const links = extractLinksFromFile(filePath);
    links.forEach(link => {
      // Remove query parameters and fragments
      const cleanLink = link.split('?')[0].split('#')[0];
      
      if (!expectedPages.includes(cleanLink)) {
        issues.push({
          file: path.relative(path.join(__dirname, '..'), filePath),
          link: link,
          issue: 'Link not found in expected pages list'
        });
      }
    });
  });
  
  // Check if all expected pages exist
  expectedPages.forEach(pagePath => {
    const result = checkPageExists(pagePath);
    if (!result.exists) {
      issues.push({
        page: pagePath,
        issue: 'Expected page does not exist'
      });
    } else {
      console.log(`✅ ${pagePath} - Found at ${path.relative(path.join(__dirname, '..'), result.location)}`);
    }
  });
  
  // Report issues
  if (issues.length > 0) {
    console.log('\n❌ Issues found:');
    issues.forEach(issue => {
      if (issue.file) {
        console.log(`   ${issue.file}: ${issue.link} - ${issue.issue}`);
      } else {
        console.log(`   ${issue.page} - ${issue.issue}`);
      }
    });
  } else {
    console.log('\n✅ No broken internal links found!');
  }
  
  console.log(`\n📊 Summary: Checked ${expectedPages.length} expected pages, found ${issues.length} issues`);
}

// Run the check
checkAllLinks(); 