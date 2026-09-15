/**
 * Static Sitemap Generator for Marinios IPTV
 * 
 * Generates a complete sitemap.xml with all known routes.
 * Runs as part of the build process.
 * 
 * Usage: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const SITE_URL = 'https://mariniosiptvpro.com';

const today = new Date().toISOString().split('T')[0];

// All static routes with their priority and change frequency
const ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/iptv-free-trial', priority: '0.9', changefreq: 'monthly' },
  { path: '/channels-list', priority: '0.8', changefreq: 'weekly' },
  { path: '/devices', priority: '0.8', changefreq: 'monthly' },
  { path: '/setup-guides', priority: '0.8', changefreq: 'monthly' },
  { path: '/iptv-reseller-panel', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'daily' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/refund', priority: '0.3', changefreq: 'yearly' },
];

// Load local blog posts if available
let blogRoutes = [];
try {
  const blogData = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'blogPosts.json'), 'utf-8'));
  blogRoutes = blogData.map(post => ({
    path: `/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.updatedAt ? post.updatedAt.split('T')[0] : today
  }));
} catch {
  // No blog posts found
}

function generateSitemap() {
  const allRoutes = [...ROUTES, ...blogRoutes];
  const urls = allRoutes.map(({ path, priority, changefreq, lastmod }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod || today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

  const publicPath = join(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(publicPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap written to public: ${publicPath}`);

  if (existsSync(DIST_DIR)) {
    const distPath = join(DIST_DIR, 'sitemap.xml');
    writeFileSync(distPath, sitemap, 'utf-8');
    console.log(`✅ Sitemap written to dist: ${distPath}`);
  }
  console.log(`   ${ROUTES.length} URLs included, dated ${today}`);
}

generateSitemap();
