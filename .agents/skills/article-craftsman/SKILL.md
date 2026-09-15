---
name: article-craftsman
description: "Crafts high-converting, visually stunning, magazine-grade editorial articles for the Marinios IPTV blog. Transforms plain text into rich, interactive layouts with callouts, pros/cons cards, comparison tables, step-by-step guides, stat blocks, and CTA banners."
---

# Article Craftsman Skill — Magazine-Grade Editorial Engine

This skill transforms article ideas into visually captivating, highly readable, and conversion-optimized articles for **Marinios IPTV**. It prevents boring walls of text and ensures that every published post has rich visual anchors, interactive cards, and high-converting calls-to-action.

---

## 1. Editorial Philosophy & Golden Rules

1. **No Walls of Text**: Never write more than 3 consecutive standard paragraphs without introducing a visual break (Callout, Comparison Grid, Step Card, or Stat Box).
2. **Scannability**: 80% of readers scan headings, bold terms, and badges first. Every major point must have an executive summary or visual badge.
3. **Internal Linking**: Every article must include at least 2 internal links to commercial pages:
   - Free Trial: `<a href="/iptv-free-trial" class="text-brand-primary font-bold underline">24-Hour Free Trial</a>`
   - Pricing: `<a href="/pricing" class="text-brand-primary font-bold underline">Marinios IPTV Pricing Plans</a>`
4. **Editorial Voice**: Authoritative, confident, tech-savvy, and cinematic ("Curated Intelligence", "Buffer-Free Architecture").

---

## 2. Visual Component Library (HTML Snippets)

Use these exact HTML elements inside the article's `contentHtml`:

### A. Pro-Tip & Key Takeaway Callouts
Use for critical warnings, expert advice, or summary takeaways:

```html
<div class="article-callout tip">
  <div class="article-callout-header">
    <span>💡</span> Pro-Tip for Curators
  </div>
  <p>Always hardwire your Android TV box with an Ethernet cable rather than relying on Wi-Fi during peak 4K live sports events to eliminate packet loss.</p>
</div>
```

```html
<div class="article-callout takeaway">
  <div class="article-callout-header">
    <span>📌</span> Key Takeaway
  </div>
  <p>Xtream Codes API uses server-side processing, loading 20,000+ channels and EPG data up to 10x faster than traditional M3U playlist URLs.</p>
</div>
```

```html
<div class="article-callout warning">
  <div class="article-callout-header">
    <span>⚠️</span> Warning
  </div>
  <p>ISPs actively throttle IPTV streams during major Champions League or PPV fights. Running a trusted VPN prevents deep packet inspection.</p>
</div>
```

---

### B. Two-Column Pros & Cons Grid
Use for device reviews, app comparisons, or feature breakdowns:

```html
<div class="article-grid-2">
  <div class="article-card-pro">
    <h4><span>✅</span> The Advantages</h4>
    <ul>
      <li>Dedicated Ethernet port for zero-lag streaming</li>
      <li>4GB+ RAM prevents app freezing during heavy EPG loads</li>
      <li>Full support for Tivimate and advanced IPTV players</li>
    </ul>
  </div>
  <div class="article-card-con">
    <h4><span>❌</span> The Trade-offs</h4>
    <ul>
      <li>Higher initial hardware investment than a stick</li>
      <li>Requires dedicated space near your television</li>
    </ul>
  </div>
</div>
```

---

### C. Step-by-Step Installation Cards
Use for setup tutorials, troubleshooting guides, and how-tos:

```html
<div class="article-step">
  <div class="article-step-num">01</div>
  <div class="article-step-body">
    <h4>Download Your Preferred IPTV Player</h4>
    <p>Install Tivimate, IPTV Smarters Pro, or XCIPTV on your Firestick or Android TV via the official app store or Downloader app.</p>
  </div>
</div>

<div class="article-step">
  <div class="article-step-num">02</div>
  <div class="article-step-body">
    <h4>Select "Login with Xtream Codes API"</h4>
    <p>Choose the API login method to enable instant server-side syncing rather than loading a bulky raw M3U playlist.</p>
  </div>
</div>

<div class="article-step">
  <div class="article-step-num">03</div>
  <div class="article-step-body">
    <h4>Enter Your Marinios IPTV Credentials</h4>
    <p>Paste the Server URL, Username, and Password received in your welcome WhatsApp message and click Add User.</p>
  </div>
</div>
```

---

### D. Metric & Stat Highlight Grid
Use to showcase speeds, channel counts, uptime, or benchmark numbers:

```html
<div class="article-stat-grid">
  <div class="article-stat-box">
    <div class="article-stat-num">40,000+</div>
    <div class="article-stat-label">Live Channels</div>
  </div>
  <div class="article-stat-box">
    <div class="article-stat-num">99.9%</div>
    <div class="article-stat-label">Uptime SLA</div>
  </div>
  <div class="article-stat-box">
    <div class="article-stat-num">&lt; 50ms</div>
    <div class="article-stat-label">Zapping Speed</div>
  </div>
</div>
```

---

### E. Spec / Comparison Table
Use for comparing devices, plans, apps, or configurations:

```html
<div class="article-table-wrap">
  <table class="article-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Firestick 4K Max</th>
        <th>Nvidia Shield Pro</th>
        <th>Smart TV Internal App</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>RAM</strong></td>
        <td>2 GB</td>
        <td>3 GB / Tegra X1+</td>
        <td>1 GB (Typical)</td>
      </tr>
      <tr>
        <td><strong>Network</strong></td>
        <td>Wi-Fi 6</td>
        <td>Gigabit Ethernet</td>
        <td>Slow 100Mbps Ethernet</td>
      </tr>
      <tr>
        <td><strong>4K 60FPS Sports</strong></td>
        <td><span class="article-badge purple">Good</span></td>
        <td><span class="article-badge green">Flawless</span></td>
        <td>Occasional Stutters</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### F. In-Article Conversion Call-To-Action (CTA) Box
Always insert one mid-article or at the end of every tutorial:

```html
<div class="article-cta-box">
  <h3>Ready for Buffer-Free Streaming?</h3>
  <p>Test our ultra-fast 10Gbps servers on your device with zero commitment. Access 40,000+ channels and 215,000+ movies instantly.</p>
  <a href="/iptv-free-trial" class="article-cta-btn">
    Claim 24-Hour Free Trial ⚡️
  </a>
</div>
```

---

## 3. Step-by-Step Publishing Procedure

When requested to write and publish an article:

1. **Craft the Article Content**:
   - Write an engaging title, meta description, and 1-sentence excerpt.
   - Assemble `contentHtml` using the visual components above.
   - Choose 3-5 tags and categories.
2. **Append to Local Database**:
   - Open [src/data/blogPosts.json](file:///c:/Users/Ryad/Downloads/Mariontv/src/data/blogPosts.json).
   - Prepend the new post object to the top of the array:
     ```json
     {
       "_id": "generate-random-hex-id",
       "title": "Article Title Here",
       "slug": "url-friendly-slug-here",
       "excerpt": "Compelling 1-2 sentence hook.",
       "contentHtml": "<h1>...</h1><p>...</p>",
       "featuredImage": {
         "url": "https://images.unsplash.com/... or public image",
         "alt": "Descriptive image alt text"
       },
       "featuredImageAlt": "Descriptive image alt text",
       "authorName": "Marinios Editorial Team",
       "tags": ["Tutorials", "Guides"],
       "categories": ["Category Name"],
       "seo": {
         "metaTitle": "SEO Title (under 60 chars)",
         "metaDescription": "SEO Description with keywords (under 160 chars)",
         "schemaType": "BlogPosting"
       },
       "publishedAt": "YYYY-MM-DDTHH:mm:ss.000Z",
       "updatedAt": "YYYY-MM-DDTHH:mm:ss.000Z"
     }
     ```
3. **Build & Verify**:
   - Run `npm run build`.
   - Ensure the new route `/blog/[slug]` prerenders and appears in `sitemap.xml`.
4. **Deploy**:
   - Commit and push to `origin main` to trigger automatic Vercel deployment.
