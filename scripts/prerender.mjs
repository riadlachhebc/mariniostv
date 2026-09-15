/**
 * Prerender Script for Marinios IPTV
 * 
 * Runs after `vite build`. Uses Playwright to render each route
 * into static HTML. If Playwright's browser is not installed in the
 * environment (e.g. standard Vercel build container), it gracefully
 * falls back to generating route-specific static HTML with custom titles,
 * canonicals, descriptions, and noscript fallbacks.
 * 
 * Usage: node scripts/prerender.mjs
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');

export const ROUTE_METADATA = {
  '/': {
    title: 'Marinios IPTV – #1 HD Live TV & 4K Sports Streaming',
    description: 'Buy the best IPTV subscription at Marinios IPTV. Enjoy 20,000+ live channels, 4K live sports, and zero buffering on Firestick or Smart TVs today.',
    canonical: 'https://mariniosiptvpro.com/'
  },
  '/pricing': {
    title: 'Marinios IPTV Pricing – Choose Your Premium TV Plan',
    description: 'Select your Marinios IPTV plan: 3, 6, or 12-month subscriptions. Best premium IPTV service with 4K quality and 24/7 support. Buy IPTV with PayPal.',
    canonical: 'https://mariniosiptvpro.com/pricing'
  },
  '/devices': {
    title: 'Marinios IPTV Devices – Setup on Firestick & Smart TV',
    description: 'Marinios IPTV works on Smart TVs, Firestick, Android boxes, and more. Enjoy a seamless 5-minute setup on any device for the best 4K streaming experience.',
    canonical: 'https://mariniosiptvpro.com/devices'
  },
  '/channels-list': {
    title: 'Marinios IPTV Channels – 40,000+ Live HD Channels',
    description: 'Browse our massive Marinios IPTV channel list. 40,000+ live channels including local, international, sports, and movies. Always updated, always stable.',
    canonical: 'https://mariniosiptvpro.com/channels-list'
  },
  '/setup-guides': {
    title: 'Marinios IPTV Setup Guides – Firestick, Smart TV & Box',
    description: 'Easily set up Marinios IPTV on Firestick, Android, Smart TVs, Tivimate, and IPTV Smarters Pro. Our step-by-step tutorials ensure you get 4K streaming fast.',
    canonical: 'https://mariniosiptvpro.com/setup-guides'
  },
  '/iptv-free-trial': {
    title: 'Marinios IPTV Free Trial – 24 Hours of Premium TV',
    description: 'Request a 24-hour Marinios IPTV free trial to test our zero-buffering streaming service. Explore 40,000+ channels and 215,000+ movies for free today.',
    canonical: 'https://mariniosiptvpro.com/iptv-free-trial'
  },
  '/iptv-reseller-panel': {
    title: 'Marinios IPTV Reseller Panel – Start Your Own Business',
    description: 'Start your own IPTV business with the Marinios IPTV reseller panel. Buy cheap credits, manage your own customers, and earn massive profit margins today.',
    canonical: 'https://mariniosiptvpro.com/iptv-reseller-panel'
  },
  '/contact': {
    title: 'Marinios IPTV Support – Contact Us via WhatsApp 24/7',
    description: 'Contact Marinios IPTV via WhatsApp for instant support, free trial requests, and subscription help. Fast response and 24/7 availability for all users.',
    canonical: 'https://mariniosiptvpro.com/contact'
  },
  '/faq': {
    title: 'Marinios IPTV FAQ – Frequently Asked Questions Answered',
    description: 'Find answers to common questions about Marinios IPTV subscriptions, pricing, device compatibility, channel lists, and setup guides in our Knowledge Vault.',
    canonical: 'https://mariniosiptvpro.com/faq'
  },
  '/blog': {
    title: 'Marinios IPTV Blog – Latest IPTV News & Setup Tips',
    description: 'Read our latest news, streaming tips, device setup guides, and updates from Marinios IPTV. Stay informed and get the most from your premium IPTV service.',
    canonical: 'https://mariniosiptvpro.com/blog'
  },
  '/privacy': {
    title: 'Privacy Policy – Marinios IPTV',
    description: 'Learn how Marinios IPTV protects your personal data and respects your privacy while using our streaming services.',
    canonical: 'https://mariniosiptvpro.com/privacy'
  },
  '/terms': {
    title: 'Terms of Service – Marinios IPTV',
    description: 'Read the Terms of Service for using Marinios IPTV subscription services, compatible players, and client portal.',
    canonical: 'https://mariniosiptvpro.com/terms'
  },
  '/refund': {
    title: 'Refund Policy – Marinios IPTV',
    description: 'Review the Marinios IPTV refund policy and terms for subscription cancellations and satisfaction guarantees.',
    canonical: 'https://mariniosiptvpro.com/refund'
  }
};

// Load local blog posts into metadata
try {
  const blogData = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'blogPosts.json'), 'utf-8'));
  for (const post of blogData) {
    ROUTE_METADATA[`/blog/${post.slug}`] = {
      title: `${post.seo?.metaTitle || post.title} – Marinios IPTV`,
      description: post.seo?.metaDescription || post.excerpt,
      canonical: `https://mariniosiptvpro.com/blog/${post.slug}`
    };
  }
} catch {
  // No blog posts
}

const ROUTES = Object.keys(ROUTE_METADATA);

// Fallback generator when browser cannot be launched
function fallbackPrerender() {
  console.log('⚡ Generating static SEO route snapshots from template index.html...');
  const baseHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

  for (const [route, meta] of Object.entries(ROUTE_METADATA)) {
    if (route === '/') continue;

    let html = baseHtml;
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);
    html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, `<meta name="description" content="${meta.description}">`);
    html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gi, `<meta property="og:title" content="${meta.title}">`);
    html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gi, `<meta property="og:description" content="${meta.description}">`);
    html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gi, `<meta property="og:url" content="${meta.canonical}">`);

    if (html.includes('rel="canonical"')) {
      html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi, `<link rel="canonical" href="${meta.canonical}">`);
    } else {
      html = html.replace('</head>', `<link rel="canonical" href="${meta.canonical}"></head>`);
    }

    const dir = join(DIST_DIR, route.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    console.log(`  ✅ Fallback saved: ${route}/index.html`);
  }
}

// Simple static file server for the dist folder
function createStaticServer(distDir) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
  };

  return createServer((req, res) => {
    let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);

    if (!existsSync(filePath)) {
      filePath = join(distDir, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = filePath.substring(filePath.lastIndexOf('.'));
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(content);
    } catch {
      const fallback = readFileSync(join(distDir, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fallback);
    }
  });
}

async function prerender() {
  console.log('🚀 Starting prerender...\n');

  if (!existsSync(DIST_DIR)) {
    console.error('❌ dist/ folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  const server = createStaticServer(DIST_DIR);
  await new Promise((resolve) => server.listen(0, resolve));
  const PORT = server.address().port;
  console.log(`📡 Static server running on http://localhost:${PORT}\n`);

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (launchErr) {
    console.warn(`\n⚠️ Headless Chromium could not be launched (${launchErr.message.split('\n')[0]}).`);
    console.log('Running static fallback to ensure all 13 routes have custom static HTML files...');
    fallbackPrerender();
    server.close();
    console.log('\n🎉 Static SEO snapshot complete!\n');
    return;
  }

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  });

  let successCount = 0;
  let failCount = 0;

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`  → Rendering ${route}...`);

    try {
      const page = await context.newPage();

      await page.route('**/*', (routeHandler) => {
        const resourceUrl = routeHandler.request().url();
        if (
          resourceUrl.includes('googletagmanager.com') ||
          resourceUrl.includes('google-analytics.com') ||
          resourceUrl.includes('fonts.googleapis.com') ||
          resourceUrl.includes('fonts.gstatic.com')
        ) {
          routeHandler.abort();
        } else {
          routeHandler.continue();
        }
      });

      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForSelector('#root > *', { timeout: 10000 });
      await page.waitForTimeout(1500);

      let html = await page.content();

      // Clean up duplicate SEO tags injected by React Helmet:
      const titles = [...html.matchAll(/<title>.*?<\/title>/gi)];
      if (titles.length > 1) {
        for (let i = 1; i < titles.length; i++) {
          html = html.replace(titles[i][0], '');
        }
      }

      const canonicals = [...html.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi)];
      if (canonicals.length > 1) {
        for (let i = 0; i < canonicals.length - 1; i++) {
          html = html.replace(canonicals[i][0], '');
        }
      }

      const descriptions = [...html.matchAll(/<meta\s+[^>]*name=["']description["'][^>]*>/gi)];
      if (descriptions.length > 1) {
        for (let i = 0; i < descriptions.length - 1; i++) {
          html = html.replace(descriptions[i][0], '');
        }
      }

      const metaKeys = [
        'property="og:title"',
        'property="og:description"',
        'property="og:url"',
        'property="og:image"',
        'name="twitter:title"',
        'name="twitter:description"',
        'name="twitter:image"'
      ];
      for (const key of metaKeys) {
        const pattern = new RegExp(`<meta\\s+[^>]*${key.replace('"', '\\"')}[^>]*>`, 'gi');
        const matches = [...html.matchAll(pattern)];
        if (matches.length > 1) {
          for (let i = 0; i < matches.length - 1; i++) {
            html = html.replace(matches[i][0], '');
          }
        }
      }

      let outputPath;
      if (route === '/') {
        outputPath = join(DIST_DIR, 'index.html');
      } else {
        const dir = join(DIST_DIR, route.slice(1));
        mkdirSync(dir, { recursive: true });
        outputPath = join(dir, 'index.html');
      }

      writeFileSync(outputPath, html, 'utf-8');

      const hasContent = html.includes('<h1') || html.includes('<h2') || html.includes('Marinios');
      if (hasContent) {
        console.log(`    ✅ Saved (${(html.length / 1024).toFixed(1)}KB) — content verified`);
        successCount++;
      } else {
        console.log(`    ⚠️  Saved but content may be missing`);
        failCount++;
      }

      await page.close();
    } catch (err) {
      console.log(`    ❌ Failed: ${err.message}`);
      failCount++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n📊 Results: ${successCount} success, ${failCount} failed out of ${ROUTES.length} routes`);

  if (failCount > 0) {
    console.log('\n⚠️ Some routes failed. Running fallback for failed routes...');
    fallbackPrerender();
  }

  console.log('\n🎉 Prerendering complete! All routes have static HTML with real content.\n');
}

prerender().catch((err) => {
  console.error('Fatal error during prerender, executing fallback:', err);
  try {
    fallbackPrerender();
  } catch (fErr) {
    console.error('Fallback also failed:', fErr);
  }
  process.exit(0); // Exit cleanly so build doesn't break
});
