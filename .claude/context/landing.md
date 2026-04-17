# Landing Page Brief: Standalone Minimal

## Identity

- **Product:** GridForesight -- ML-powered energy forecasting platform that helps energy operators predict demand, optimize renewables, and reduce operational costs.
- **Audience:** Energy managers, grid operators, renewable portfolio managers, and data teams at utilities, IPPs, and energy retailers. Technical enough to appreciate ML, pragmatic enough to care about accuracy and speed.
- **Tone:** Confident, precise, understated. Speaks like a principal engineer presenting at an industry conference -- authoritative without posturing, technically grounded without jargon walls.
- **Aesthetic direction:** "Vercel meets Stripe" -- geometric precision, generous whitespace, confident typography. A light-mode page that feels expensive through restraint. Every element earns its place. No decoration for decoration's sake.
- **Positioning:** Standalone commercial product. No reference to gridforesight.ca, no lab affiliation, no university branding. GridForesight is an independent company shipping production software.

## Visual Identity

GridForesight's visual identity for this variant is original and independent:

- **Logo:** Text wordmark "GridForesight" in the display font (Satoshi Bold), or a simple geometric SVG mark -- a minimal grid/node motif suggesting interconnected energy points. Not the bubble-G logo from gridforesight.ca. The mark should be reproducible as a single-color SVG at 24px height.
- **Logo variants:** Dark text on light backgrounds (default), white text on dark backgrounds (footer, if applicable).

## Design Tokens

```
Mode:               Light
Primary:            #2563eb  (blue-600 — trust, reliability, intelligence)
Primary hover:      #1d4ed8  (blue-700)
Accent:             #0d9488  (teal-600 — innovation, forward-thinking)
Accent hover:       #0f766e  (teal-700)

Neutral scale (slate):
  50:   #f8fafc
  100:  #f1f5f9
  200:  #e2e8f0
  300:  #cbd5e1
  400:  #94a3b8
  500:  #64748b
  600:  #475569
  700:  #334155
  800:  #1e293b
  900:  #0f172a
  950:  #020617

Background:         #ffffff (page), #f8fafc (alternating sections)
Text primary:       #0f172a (slate-900)
Text secondary:     #475569 (slate-600)
Text muted:         #94a3b8 (slate-400)
Border:             #e2e8f0 (slate-200)

Display font:       "Satoshi", system-ui, sans-serif
Body font:          "Inter", system-ui, sans-serif
Monospace:          "JetBrains Mono", ui-monospace, monospace (for metric callouts)

Base spacing unit:  8px (all spacing is a multiple: 8, 16, 24, 32, 48, 64, 96, 128)
Border radius:      10px (cards, buttons, inputs — consistent everywhere)
Max content width:  1280px
Body line height:   1.6
Heading line height: 1.15
Heading letter spacing: -0.02em
```

### Tailwind v4 @theme Definition

All tokens above must be defined in a CSS `@theme` block inside `src/styles/global.css`. No `tailwind.config.js` file. The `@theme` block is the single source of truth for all design tokens. Example shape:

```css
@import "tailwindcss";

@theme {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-accent: #0d9488;
  --color-accent-hover: #0f766e;
  /* ... full neutral scale, fonts, radii, spacing ... */
  --font-display: "Satoshi", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --radius-default: 10px;
  --width-content: 1280px;
}
```

## Typography Scale

Use a 1.25 modular ratio from a 16px base:

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| H1 (hero) | 64px | 36px | 700 | Satoshi |
| H2 (section headings) | 40px | 28px | 600 | Satoshi |
| H3 (subsection / card titles) | 24px | 20px | 600 | Satoshi |
| Body | 18px | 16px | 400 | Inter |
| Body small / captions | 14px | 14px | 400 | Inter |
| CTA button text | 16px | 16px | 600 | Inter |
| Metric numbers | 48px | 32px | 700 | JetBrains Mono |

- Maximum line width for body text: 680px (roughly 65 characters).
- Headings: tighten letter spacing to -0.02em.
- Body: default letter spacing.
- Never go below 14px for any text element.

## Sections (in order)

### 1. Header

- **Layout:** Full-width, sticky on scroll. White background with subtle bottom border (`slate-200`) that appears after scrolling past the hero.
- **Left:** GridForesight logo (text wordmark or geometric mark + wordmark).
- **Center/right nav items (4 max):** Features, How It Works, Testimonials, Pricing (placeholder anchor links).
- **Right CTA button:** "Go to App" -- primary color, solid fill, border-radius 10px. Links to `https://app.gridforesight.com`.
- **Mobile (<768px):** Logo left, hamburger menu right. Menu opens as a full-height slide-in panel with nav items stacked vertically plus the CTA button at the bottom.
- **Behavior:** Nav is transparent over the hero on initial load (text color adapts), transitions to white + border on scroll. Use CSS `position: sticky` and a scroll sentinel -- no JS required if using `backdrop-filter` approach.

### 2. Hero

- **Layout:** Centered, single column. Content sits in the middle of the viewport with generous vertical padding (128px top, 96px bottom on desktop; 80px/64px on mobile).
- **Headline (5-8 words):** "Predict energy demand before it satisfies demand" -- or use the formula: [Action verb] + [what] + [before/better than] + [current state]. Concrete alternatives:
  - "Forecast energy with machine learning precision"
  - "Accurate energy forecasts, powered by ML"
  - Whichever is chosen, it must be benefit-driven, under 8 words, and avoid buzzword soup.
- **Subheadline (15-25 words):** "GridForesight combines automated data ingestion with advanced ML models to deliver forecasts that energy operators actually trust." -- or similar. Must answer "so what?" and name the audience.
- **Primary CTA:** "Go to App" -- solid primary-color button, large (padding 14px 32px), links to `https://app.gridforesight.com`.
- **Secondary CTA:** "See It in Action" -- ghost button (outline, primary color text + border) or text link with arrow. Placeholder destination (scrolls to features or opens a modal in a future iteration).
- **Visual:** Below the CTA pair, render an abstract geometric visualization suggesting a forecasting chart -- think a minimal SVG composition of: a subtle grid of fine lines, a smooth curve (forecast line) in the primary blue, confidence interval bands in teal at low opacity, and a few data point nodes. This is NOT a screenshot and NOT a stock image. It is a hand-crafted SVG illustration or CSS-drawn element that reinforces the "precision" aesthetic. Dimensions: full content width (max 1280px) x ~400px. On mobile, scale proportionally and reduce complexity.
- **Background:** Pure white. No gradients, no blurred orbs, no decorative circles. The typography and spacing do the work.

### 3. Social Proof Bar

- **Layout:** Horizontal strip with soft top/bottom border or a `slate-50` background band to visually separate it from the hero.
- **Content:** "Trusted by energy companies across North America" as a centered label in `slate-400` small text above a row of 5-6 placeholder company logos.
- **Logos:** Grayscale, uniform height (28-32px). Use clearly labeled SVG placeholders: `[Energy Co. A]`, `[Utility Corp B]`, `[Renewables Inc C]`, etc. Do not invent real-sounding company names. Each placeholder should be a simple rectangle with the text inside, styled in `slate-300` with `slate-400` text.
- **Mobile:** Logos wrap to 2 rows of 3, or use a slow horizontal scroll (CSS `overflow-x: auto` with `scroll-snap`). No JS carousel.
- **Spacing:** 48px vertical padding.

### 4. Features Bento Grid

- **Section heading:** "Everything you need to forecast with confidence"
- **Section subheading (15-25 words):** "From raw data to production forecasts, GridForesight handles the entire pipeline so your team focuses on decisions, not data wrangling."
- **Layout:** Bento grid with mixed card sizes. Desktop: 3-column grid. Suggested arrangement:
  - Row 1: one 2-column-span card + one 1-column card
  - Row 2: one 1-column card + one 2-column-span card
  - Row 3: two 1-column cards (or one full-width card if a 6th feature is added)
- **Gap:** 16px between cards.
- **Card design:** White background, `slate-200` border (1px), border-radius 10px, padding 32px. Each card contains:
  1. A Lucide icon (24x24, primary color or accent color).
  2. Feature title (H3, 3-5 words).
  3. Feature description (15-25 words, benefit-first).
- **Hover state:** Subtle border color shift to `slate-300` and faint shadow. Transition 200ms ease-out.

**The 6 features (icon suggestions from Lucide in parentheses):**

| # | Title | Description | Icon |
|---|-------|-------------|------|
| 1 | Demand Forecasting | Predict load curves hours to weeks ahead. Reduce imbalance costs and improve scheduling accuracy. | `TrendingUp` |
| 2 | Renewable Prediction | Forecast solar and wind output using weather-aware ML models tuned to your specific assets. | `Sun` |
| 3 | Automated Data Ingestion | Connect SCADA, meters, and weather feeds. GridForesight cleans, validates, and stores your data automatically. | `DatabaseZap` |
| 4 | Custom Model Training | Train forecasting models on your historical data with guided workflows. No ML expertise required. | `BrainCircuit` |
| 5 | Real-Time Monitoring | Track forecast accuracy and model drift in real time. Get alerts before performance degrades. | `Activity` |
| 6 | Portfolio Analytics | Aggregate forecasts across assets for portfolio-level visibility into generation, demand, and risk. | `BarChart3` |

- **Mobile (<768px):** Stack to single column. All cards are full width.
- **Tablet (768-1024px):** 2-column grid, all cards equal width.
- **Scroll animation:** Cards fade in and translate up 16px as they enter the viewport. Use CSS `@keyframes` + `animation-timeline: view()` (scroll-driven animations) or a lightweight Intersection Observer island. Respect `prefers-reduced-motion` -- disable animation entirely.
- **Section background:** `slate-50` (#f8fafc) to differentiate from the white hero above.
- **Section padding:** 96px vertical on desktop, 64px on mobile.

### 5. How It Works

- **Section heading:** "From raw data to reliable forecasts in three steps"
- **Layout:** Three-step horizontal flow on desktop, vertical stack on mobile. Each step is a numbered card or column.
- **Step connector:** A thin horizontal line or subtle arrow between steps on desktop. On mobile, vertical line or numbered sequence.
- **Step design:** Each step has:
  1. Step number in a circle (40x40px, primary color background, white text, border-radius full).
  2. Step title (H3, 3-5 words).
  3. Step description (10-20 words).

| Step | Title | Description |
|------|-------|-------------|
| 1 | Connect Your Data | Link your meters, SCADA systems, and weather feeds. We handle ingestion and validation. |
| 2 | Train Your Models | Select your target variable and training period. GridForesight builds ML models tailored to your assets. |
| 3 | Forecast and Monitor | Deploy forecasts to production. Track accuracy in real time and retrain when conditions change. |

- **Section background:** White (#ffffff).
- **Section padding:** 96px vertical on desktop, 64px on mobile.
- **Max width for this section's content:** 960px (narrower than the bento grid for visual variety).

### 6. Testimonials

- **Section heading:** "Trusted by energy operators who need to get it right"
- **Layout:** 2-3 testimonial cards in a row on desktop, stacked on mobile. Cards should feel distinct from the feature cards -- perhaps a slightly larger border-radius, or a `slate-50` background with no border.
- **Card content:**
  1. Quote text (under 60 words, includes a specific metric).
  2. Attribution: full name, role, company.
  3. Optional: small avatar placeholder (48x48 circle, `slate-200` background with initials).

**Placeholder testimonials (clearly realistic but fictional):**

> "We replaced our statistical models with GridForesight six months ago. Forecast error dropped 40% on our wind portfolio, and the ops team actually trusts the numbers now."
>
> -- **Sarah Chen**, Director of Grid Operations, *[Placeholder Energy Co.]*

> "The automated data pipeline alone saved us 20 hours a week. We used to spend more time cleaning data than analyzing forecasts."
>
> -- **Marcus Rivera**, Senior Data Analyst, *[Placeholder Utility Corp.]*

> "GridForesight handles 200+ assets across our portfolio. The accuracy at scale is something we couldn't build in-house without a dedicated ML team."
>
> -- **Priya Patel**, VP of Portfolio Analytics, *[Placeholder Renewables Inc.]*

- **Section background:** `slate-50` (#f8fafc).
- **Section padding:** 96px vertical on desktop, 64px on mobile.

### 7. Final CTA Section

- **Layout:** Centered, single column. This is the "last chance" conversion point.
- **Headline (5-8 words):** "Ready to forecast with confidence?"
- **Supporting text (10-20 words):** "Join the energy operators already using GridForesight to make faster, more accurate decisions."
- **Primary CTA:** "Go to App" -- same styling as hero CTA. Links to `https://app.gridforesight.com`.
- **Secondary CTA:** "See It in Action" -- ghost/outline button or text link.
- **Background:** White with a subtle top gradient from `slate-50` to white, or a thin top border. Keep it simple -- the copy and button do the work.
- **Metric strip (optional, above the CTA):** Three numbers in a horizontal row to reinforce scale:
  - "40% more accurate" -- with label "forecast improvement"
  - "200+" -- with label "energy assets monitored"
  - "5B+" -- with label "data points processed"
  - Use JetBrains Mono for the numbers, Inter for the labels. Numbers in `slate-900`, labels in `slate-500`.
- **Section padding:** 128px vertical on desktop, 80px on mobile.

### 8. Footer

- **Layout:** Full-width, `slate-900` background, white/light text. Four columns on desktop, stacked on mobile.
- **Column 1 -- Brand:** GridForesight logo (white variant), one-sentence tagline ("ML-powered energy forecasting"), and copyright: "(c) 2026 GridForesight Inc. All rights reserved."
- **Column 2 -- Product:** Features, How It Works, Pricing (placeholder).
- **Column 3 -- Company:** About (placeholder), Blog (placeholder), Careers (placeholder), Contact (placeholder).
- **Column 4 -- Legal:** Privacy Policy (placeholder), Terms of Service (placeholder).
- **Bottom bar:** Below the columns, a thin `slate-700` top border with "Built in Canada" or similar subtle origin note on the left, and social media icon links on the right (LinkedIn, Twitter/X -- Lucide icons, `slate-400` color, 20x20px).
- **Mobile:** Stack columns vertically. Consider collapsible accordion for column groups, or simply stack all links.
- **Padding:** 64px vertical on desktop, 48px on mobile.

## Color Application Rules

Follow the 60-30-10 rule:
- **60% dominant:** White and `slate-50` backgrounds.
- **30% secondary:** `slate` neutrals for text, borders, subtle backgrounds.
- **10% accent:** Primary blue for CTAs, links, active states, icons. Teal for secondary highlights, hover accents, or to differentiate a second category of elements.

Specific rules:
- Primary blue (`#2563eb`) is reserved for: CTA buttons, links, active nav items, icon accents, and the hero visualization's main curve.
- Teal (`#0d9488`) is used for: secondary badges, the visualization's confidence bands, testimonial card accents, or hover states where blue is already used.
- Never place blue text on a blue background. Never place teal text on a teal background.
- CTA buttons: white text on primary blue background. Hover: primary-hover blue. Focus ring: 2px offset, primary blue at 50% opacity.
- Ghost/secondary buttons: primary blue border + text on white background. Hover: `slate-50` fill.
- All body text: `slate-900` on white, or `slate-50` on `slate-900` (footer). Check contrast.

## Animation & Motion

This variant uses restraint. Animations exist to guide attention, not to impress.

- **Page load:** Hero elements (headline, subheadline, CTAs, visualization) fade in with a staggered delay (0ms, 80ms, 160ms, 240ms). Opacity 0 to 1, translateY 12px to 0. Duration: 500ms. Easing: ease-out.
- **Scroll entrance:** Feature cards fade in + translateY(16px) as they enter the viewport. Duration: 400ms. Stagger: 60ms between cards. Trigger: when element is 20% visible.
- **Hover:** Buttons scale(1.02) + color shift. Cards get a subtle shadow + border color change. Duration: 200ms ease-out.
- **No animation:** No parallax, no shimmer effects, no background animations, no floating elements, no gradient animations. The minimal aesthetic means zero ambient motion.
- **Reduced motion:** Wrap all animations in `@media (prefers-reduced-motion: no-preference)`. When reduced motion is preferred, all elements appear instantly with no transform or opacity transition.
- **Implementation:** Prefer CSS `@keyframes` and `animation-timeline: view()` for scroll-driven animations. If browser support for scroll-driven animations is insufficient, a tiny Intersection Observer script in an Astro `<script>` tag (not an island) is acceptable. No animation libraries.

## Technical Requirements

- **Stack:** Astro 5 (static output, `output: 'static'`), Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js`), Biome (formatting + linting, no Prettier, no ESLint).
- **Zero client JS** unless an interactive island is explicitly justified. The page described here requires no client JS -- all animations are CSS-only. If an Intersection Observer fallback is needed for scroll animations, it must be a vanilla `<script>` tag under 500 bytes, not a framework island.
- **Lighthouse targets:** Performance 95+, Accessibility 95+, Best Practices 95+, SEO 95+. A static Astro site with optimized images should hit 98-100 across the board.
- **WCAG 2.2 AA compliance.** See Accessibility section below.
- **Responsive:** 320px to 1920px. Mobile-first breakpoints using Tailwind's `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px) prefixes. Content never exceeds 1280px; centered with auto margins on larger screens.
- **Icons:** Lucide exclusively. All icons inline SVG with `currentColor` for color control. Feature icons: 24x24. Footer social icons: 20x20. No icon fonts, no other icon libraries.
- **Images:** Use Astro's `<Image />` component for all raster images (handles WebP/AVIF conversion, width/height inference, lazy loading). Decorative SVGs are inline. All `<img>` elements must have explicit `width` and `height` attributes.
- **Fonts:** Self-host Satoshi, Inter, and JetBrains Mono. Preload the most critical weights (Satoshi Bold, Inter Regular) in `<head>` via `<link rel="preload">`. Use `font-display: swap`.

### File Structure

```
src/
  layouts/
    BaseLayout.astro          # <html>, <head>, meta, font preloads, global.css, <slot />
  components/
    Header.astro
    Hero.astro
    SocialProof.astro
    Features.astro
    HowItWorks.astro
    Testimonials.astro
    FinalCTA.astro
    Footer.astro
    icons/                    # Individual Lucide icon .astro components (inline SVG)
  pages/
    index.astro               # Composes BaseLayout + all section components in order
  styles/
    global.css                # @import "tailwindcss", @theme block, font-face declarations, base styles
  assets/
    images/                   # Any raster images (processed by Astro)
    fonts/                    # Self-hosted font files (woff2)
public/
  favicon.svg                 # Simple geometric mark matching the logo
  favicon.ico                 # Fallback
  apple-touch-icon.png        # 180x180
  og-image.png                # 1200x630 — white background, GridForesight wordmark centered, minimal
  robots.txt                  # Allow all crawling
```

### Head & Meta

- `<html lang="en">`
- `<meta charset="utf-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<title>` -- "GridForesight -- ML-Powered Energy Forecasting" (under 55 characters).
- `<meta name="description">` -- "Predict energy demand and renewable output with machine learning. Automated data ingestion, custom model training, and real-time forecast monitoring." (under 155 characters).
- Canonical URL.
- Open Graph: `og:title`, `og:description`, `og:image` (1200x630), `og:url`, `og:type=website`.
- Twitter Card: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.
- Favicon set (svg, ico, apple-touch-icon).
- Theme color: `#ffffff` (matches light background).
- Sitemap via `@astrojs/sitemap`.

## Accessibility Requirements

- **Skip-to-content link** as the first focusable element. Visually hidden until focused, then appears at top of page.
- **Semantic landmarks:** `<header>`, `<nav>`, `<main>`, `<section>` (each with `aria-labelledby` pointing to its heading), `<footer>`.
- **Single `<h1>`** on the page (the hero headline). All section headings are `<h2>`. Card titles are `<h3>`. No skipped heading levels.
- **Color contrast:** All text meets 4.5:1 minimum against its background. Large text (18px+ or 14px+ bold) meets 3:1 minimum. Verify: `slate-600` (#475569) on white = 7.1:1 (passes). `slate-400` (#94a3b8) on white = 3.7:1 (fails for normal text -- use only for decorative/non-essential labels or bump to `slate-500` #64748b = 5.4:1). Primary blue (#2563eb) on white = 4.6:1 (passes for normal text, comfortable for large text).
- **Focus indicators:** Visible 2px outline in primary blue, 2px offset. Never `outline: none` without a replacement. All focusable elements (links, buttons, inputs) must show a clear focus ring.
- **Touch targets:** Minimum 44x44px for all interactive elements (buttons, links, hamburger menu toggle).
- **Alt text:** Descriptive alt for meaningful images. Empty `alt=""` for decorative SVG illustrations and background elements.
- **Link text:** Descriptive. "Go to App" not "Click here". "See It in Action" not "Learn more".
- **Reduced motion:** All CSS animations wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **No information conveyed by color alone.** Icons accompany colored elements. Status is indicated by text + color.
- **Text resizable to 200%** without content loss or horizontal scroll.

## Explicitly DO NOT

### Visual
- Use the bubble-G logo from gridforesight.ca.
- Reference gridforesight.ca, the university, or the lab anywhere on the page.
- Use purple/blue gradient backgrounds (the #1 AI-generated-website fingerprint).
- Add decorative blurred orbs, floating circles, or random gradient blobs (another AI fingerprint).
- Use stock photos of any kind -- people, offices, control rooms. This page uses typography, whitespace, and one crafted SVG illustration.
- Use more than the two specified font families (Satoshi + Inter) plus the monospace accent (JetBrains Mono).
- Use dark mode or dark backgrounds for any section except the footer.
- Add parallax, scroll hijacking, or 3D transforms.
- Use auto-playing video or animated GIFs.
- Create hero images so large they push the headline and CTA below the fold on mobile.

### Technical
- Create a `tailwind.config.js` file. Tailwind v4 uses `@theme` in CSS.
- Import React, Vue, Svelte, or any framework for non-interactive components. Use `.astro` files exclusively.
- Use `client:load` on any island. If an island is truly needed, use `client:visible` or `client:idle`.
- Add Prettier, ESLint, or any formatter/linter besides Biome.
- Use icon fonts (Font Awesome, etc.). Use inline SVG via Lucide.
- Base64-encode images in HTML.
- Serve unoptimized images from `public/` -- always use Astro's `<Image />`.
- Use `!important` in any CSS.
- Use inline styles. Use Tailwind utility classes.
- Add animation libraries (GSAP, Framer Motion, etc.). CSS only.
- Use external image URLs (Unsplash, Pexels) at build time.

### Content
- Use Lorem ipsum or any placeholder text. All copy must be real and final-quality.
- Use buzzword soup ("AI-powered next-generation scalable enterprise platform leveraging cutting-edge machine learning").
- Use superlatives without proof ("best-in-class", "world-leading", "industry-first").
- List features without stating the benefit. "Uses LSTM networks" means nothing. "Forecasts demand 40% more accurately" does.
- Use generic CTA text ("Submit", "Sign Up", "Learn More", "Get Started", "Click Here").
- Invent real-sounding company names for social proof. Use clearly labeled placeholders.

## Assets to Generate

Since this is a standalone identity, the following SVG assets must be created:

1. **Logo wordmark:** "GridForesight" in Satoshi Bold. Simple, no effects. Provide as an inline SVG component.
2. **Logo mark (optional):** A minimal geometric symbol -- a small grid of nodes (3x3 dots connected by thin lines) or a stylized "G" made of grid lines. Must work at 24px height. If the mark doesn't look good at that size, skip it and use the wordmark alone.
3. **Hero visualization:** Abstract SVG composition suggesting a forecast chart. Smooth blue curve, teal confidence bands at low opacity, fine grid lines in `slate-200`, a few circular data point nodes. No axes labels, no numbers -- purely abstract and decorative. Must be a single inline SVG, not an image file.
4. **Placeholder company logos (5-6):** Simple rounded rectangles in `slate-100` with `slate-400` text labels: "[Energy Co.]", "[Utility Corp.]", "[Grid Ops Ltd.]", "[Renewables Inc.]", "[Power Analytics]", "[Clean Energy Co.]".
5. **OG image (1200x630):** White background, GridForesight wordmark centered, tagline below in lighter weight. This can be a static PNG in `public/`.
6. **Favicon:** Simplified version of the logo mark as an SVG. If using wordmark only, use the letter "G" in Satoshi Bold within a rounded square.

## Reference Sites

| Site | What to take | What to leave |
|------|-------------|---------------|
| **vercel.com** | Whitespace confidence. Typography does the heavy lifting. Hero is text-centered with minimal visual. Precise spacing system. Sticky nav treatment. | Dark mode. The Geist font (we use Satoshi). Product-specific deployment UI. |
| **stripe.com** | Gradient accents used sparingly on a light background. Feature section layout with alternating emphasis. How the metric numbers are presented (large, monospace, confident). | The complexity of their gradient animations. Multi-page depth. Payment-specific content. |
| **linear.app** | Spacing precision down to the pixel. The confidence of letting a single heading carry a section. Subtle entrance animations. Card design restraint. | Dark mode entirely. Purple palette. Shimmer effects. The density of their feature sections. |

## Content Summary

All copy on the page should pass this test: a VP of Grid Operations at a mid-size utility should read it and think "these people understand my world" -- not "this is a tech startup trying to sell me AI."

### Key messages in priority order:
1. GridForesight delivers more accurate energy forecasts using ML.
2. It automates the painful parts (data ingestion, cleaning, model training).
3. It works at portfolio scale (200+ assets).
4. It is already trusted by real energy operators (social proof).
5. Getting started is easy (three steps, go to the app).

### Metrics to use (placeholder but realistic):
- "40% more accurate forecasts" (compared to statistical baselines)
- "200+ energy assets monitored"
- "5B+ data points processed"
- "20 hours/week saved on data preparation" (from testimonial)

### CTA destinations:
- Primary ("Go to App"): `https://app.gridforesight.com`
- Secondary ("See It in Action"): placeholder -- can be an anchor link to the features section or a future demo video modal.

## Quality Checklist

Before considering the page complete, verify:

- [ ] `astro build` completes with zero errors and zero warnings
- [ ] Biome lint passes with zero errors
- [ ] Lighthouse: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 95+
- [ ] No console errors or warnings in browser dev tools
- [ ] HTML validates (no duplicate IDs, proper nesting, no skipped heading levels)
- [ ] Single `<h1>` on the page
- [ ] All interactive elements reachable via keyboard (Tab, Enter, Escape)
- [ ] Visible focus indicators on all focusable elements
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] No horizontal scroll at any viewport from 320px to 1920px
- [ ] Hero headline and primary CTA visible above the fold on iPhone SE (320px)
- [ ] Touch targets minimum 44x44px on mobile
- [ ] All images have `alt` attributes (descriptive or empty)
- [ ] Color contrast >= 4.5:1 for all normal text, >= 3:1 for large text
- [ ] OG image renders correctly (test with a social preview tool)
- [ ] Sitemap.xml generated and accessible
- [ ] robots.txt present and allows crawling
- [ ] All external links use `rel="noopener noreferrer"` with `target="_blank"`
- [ ] No placeholder text anywhere (no Lorem ipsum, no "Company Name Here")
- [ ] No `tailwind.config.js` file exists
- [ ] Zero client-side JavaScript (or justified exception under 500 bytes)
- [ ] Font files preloaded in `<head>`
- [ ] `font-display: swap` on all `@font-face` declarations
- [ ] Consistent border-radius (10px) across all cards, buttons, and interactive elements
- [ ] Consistent spacing using 8px base unit multiples
- [ ] No unused dependencies in `package.json`
