# Performance Optimization Guide

## Current Status
Based on your Lighthouse report, here are the key metrics:
- **Performance Score**: 50-89 range (needs improvement)
- **First Contentful Paint (FCP)**: 0.7s ✅ (Good)
- **Largest Contentful Paint (LCP)**: 1.3s ✅ (Good)
- **Total Blocking Time (TBT)**: 230ms ⚠️ (Needs improvement)
- **Cumulative Layout Shift (CLS)**: 0 ✅ (Perfect)
- **Speed Index**: 1.6s ✅ (Good)

## Implemented Optimizations

### 1. ✅ Next.js Configuration (`next.config.ts`)
- **Image Optimization**: Enabled AVIF and WebP formats for better compression
- **Compression**: Enabled Gzip/Brotli compression
- **Security Headers**: Added CSP, X-Frame-Options, COOP, and other security headers
- **Modern JavaScript**: Configured to remove console logs in production
- **Cache Control**: Set minimum cache TTL for images

### 2. ✅ Font Loading Optimization (`app/layout.tsx`)
- **Removed Unused Fonts**: Removed Geist and Geist_Mono fonts
- **Preload Strategy**: Set `preload: true` for Inter and Poppins (primary fonts)
- **Lazy Load**: Set `preload: false` for Italiana, Inria Serif, and Hurricane (secondary fonts)
- **DNS Prefetch**: Added preconnect links for Google Fonts and Prismic CDN
- **SEO Improvements**: Enhanced metadata with proper title, description, and Open Graph tags

### 3. ✅ Image Optimization
- **Hero Image**: Reduced quality from 100 to 85 (optimal balance)
- **Lazy Loading**: Added `loading="lazy"` to below-fold images
- **Responsive Sizes**: Added appropriate `sizes` attributes for better image selection
- **Priority Loading**: Used `priority` and `loading="eager"` for above-fold content

### 4. ✅ Accessibility Fixes
- **Link Labels**: Added `aria-label` to all icon-only links
- **Image Optimization**: Added `sizes` attributes to all images
- **Social Media Links**: Added descriptive aria-labels

## Additional Recommendations

### 1. 🔧 Reduce Main Thread Work (Currently 2.4s)

#### A. Code Splitting
Add dynamic imports for heavy components:

```tsx
// Instead of:
import HeavyComponent from './HeavyComponent';

// Use:
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

#### B. Optimize Third-Party Scripts
Move Prismic scripts to load asynchronously:

```tsx
// In app/layout.tsx
<Script
  src="https://static.cdn.prismic.io/prismic.js"
  strategy="lazyOnload"
/>
```

### 2. 🔧 Reduce JavaScript Bundle Size

#### A. Install and Configure Bundle Analyzer
```bash
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:
```bash
ANALYZE=true npm run build
```

#### B. Tree Shaking
Ensure you're importing only what you need:
```tsx
// Bad
import * as Icons from 'lucide-react';

// Good
import { Menu, X, ChevronDown } from 'lucide-react';
```

### 3. 🔧 Optimize CSS

#### A. Remove Unused CSS
Use PurgeCSS or Tailwind's built-in purge:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of config
}
```

#### B. Critical CSS
Extract critical CSS for above-fold content.

### 4. 🔧 Implement Service Worker for Caching

Create `public/sw.js`:
```javascript
const CACHE_NAME = 'therapy-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

### 5. 🔧 Optimize Prismic Queries

#### A. Use GraphQL Fragments
```typescript
// prismicio.ts
export const client = createClient({
  routes: [
    // Define routes
  ],
  fetchOptions: {
    next: { revalidate: 3600 }, // Cache for 1 hour
  },
});
```

#### B. Implement Incremental Static Regeneration (ISR)
```tsx
// In your page components
export const revalidate = 3600; // Revalidate every hour
```

### 6. 🔧 Reduce Third-Party Impact

#### A. Self-Host Google Fonts
Use `next-google-fonts` or download fonts locally:

```bash
npm install @next/font
```

#### B. Lazy Load Prismic Slice Machine
Only load when needed in development.

### 7. 🔧 Implement Resource Hints

Add to `app/layout.tsx`:
```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://images.prismic.io" />
  <link rel="preload" as="image" href="/hero-image.webp" />
</head>
```

### 8. 🔧 Optimize Long Tasks

#### A. Use Web Workers for Heavy Computations
```typescript
// worker.ts
self.addEventListener('message', (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
});

// In component
const worker = new Worker('/worker.js');
worker.postMessage(data);
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};
```

#### B. Debounce and Throttle
```typescript
import { debounce } from 'lodash';

const handleScroll = debounce(() => {
  // Heavy scroll handler
}, 100);
```

### 9. 🔧 Implement Lazy Loading for Slices

```tsx
// slices/index.ts
import dynamic from 'next/dynamic';

export const components = {
  hero_with_bg_image: dynamic(() => import('./HeroWithBgImage')),
  expertise_overview: dynamic(() => import('./ExpertiseOverview')),
  testimonial_carousel: dynamic(() => import('./TestimonialCarousel')),
  // ... other slices
};
```

### 10. 🔧 Monitor Performance

#### A. Add Web Vitals Reporting
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

#### B. Custom Performance Monitoring
```typescript
// lib/performance.ts
export function reportWebVitals(metric: any) {
  console.log(metric);
  // Send to analytics
  if (metric.label === 'web-vital') {
    // Track FCP, LCP, CLS, FID, TTFB
  }
}
```

## Testing Checklist

- [ ] Run Lighthouse audit again
- [ ] Test on mobile devices
- [ ] Test on slow 3G connection
- [ ] Check bundle size with analyzer
- [ ] Verify all images are optimized
- [ ] Test accessibility with screen reader
- [ ] Verify all security headers are present
- [ ] Check Core Web Vitals in production

## Expected Improvements

After implementing all optimizations:
- **Performance Score**: 90+ (from 50-89)
- **TBT**: <100ms (from 230ms)
- **Main Thread Work**: <1.5s (from 2.4s)
- **JavaScript Bundle**: 20-30% reduction
- **Image Delivery**: 50-70% reduction in size

## Quick Wins (Immediate Impact)

1. ✅ **Image Optimization** - Already implemented
2. ✅ **Font Loading** - Already implemented
3. ✅ **Security Headers** - Already implemented
4. 🔧 **Bundle Analysis** - Run `ANALYZE=true npm run build`
5. 🔧 **Dynamic Imports** - Implement for heavy components
6. 🔧 **ISR/SSG** - Add revalidation to pages

## Resources

- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
- [Core Web Vitals](https://web.dev/vitals/)
