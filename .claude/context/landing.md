# Landing Page Brief: Standalone Dark

## Identity

- **Product:** GridForesight -- ML-powered energy forecasting platform that turns messy real-world energy data into production-grade predictions.
- **Audience:** Technical buyers -- data scientists, ML engineers, and energy analysts who evaluate tools by their pipeline architecture, not their marketing copy. They understand RMSE, know what a training loop looks like, and want to see the system before they trust it.
- **Tone:** Precise, technical, understated. The confidence of a well-documented API. No hype, no hand-waving. Let the data and the pipeline speak.
- **Aesthetic direction:** "Bloomberg Terminal meets Linear" -- dark UI canvas with glowing data visualizations, monospace accents for metrics, the information density of a monitoring dashboard paired with the spatial precision of Linear's design language.

## Positioning

GridForesight stands alone. This page makes no reference to gridforesight.ca, any university, or any research lab. The product is the entire story: what it does, how it works, and why it's credible. The brand identity is original -- a text-based logo, its own color system, its own voice.

## Design Tokens

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-deep` | `#020617` (slate-950) | Page background, darkest surfaces |
| `--color-bg-base` | `#0f172a` (slate-900) | Card backgrounds, section alternation |
| `--color-bg-elevated` | `#1e293b` (slate-800) | Elevated cards, hover states |
| `--color-bg-subtle` | `#334155` (slate-700) | Borders, dividers, muted elements |
| `--color-primary` | `#3b82f6` (blue-500) | Primary accent -- CTAs, active states, links |
| `--color-primary-glow` | `#3b82f6` at 20% opacity | Glow effects behind primary elements |
| `--color-primary-hover` | `#60a5fa` (blue-400) | Hover state for primary elements |
| `--color-secondary` | `#10b981` (emerald-500) | Secondary accent -- energy/sustainability signal, success states |
| `--color-secondary-glow` | `#10b981` at 15% opacity | Glow effects behind secondary elements |
| `--color-text-primary` | `#e2e8f0` (slate-200) | Headings, primary body text |
| `--color-text-secondary` | `#94a3b8` (slate-400) | Supporting text, descriptions, captions |
| `--color-text-muted` | `#64748b` (slate-500) | Tertiary text, labels, metadata |
| `--color-text-on-primary` | `#020617` (slate-950) | Text on primary-colored buttons |

### Neutral Scale (slate)

50: `#f8fafc`, 100: `#f1f5f9`, 200: `#e2e8f0`, 300: `#cbd5e1`, 400: `#94a3b8`, 500: `#64748b`, 600: `#475569`, 700: `#334155`, 800: `#1e293b`, 900: `#0f172a`, 950: `#020617`

### Typography

| Token | Value | Fallback |
|-------|-------|----------|
| `--font-display` | `"JetBrains Mono"` | `ui-monospace, "Cascadia Code", "Fira Code", monospace` |
| `--font-body` | `"Geist"` | `"Inter", ui-sans-serif, system-ui, sans-serif` |

- **Headings (H1-H3):** JetBrains Mono -- establishes technical credibility immediately. The monospace treatment signals "this is a tool built by engineers, for engineers."
- **Body text and UI:** Geist -- clean geometric sans-serif for readability on dark backgrounds.
- **Metric callouts and data labels:** JetBrains Mono at smaller sizes with tabular-nums for alignment.

### Spacing & Layout

| Token | Value |
|-------|-------|
| Base spacing unit | 4px |
| Section vertical padding | 96px desktop / 64px mobile |
| `--radius-sm` | 6px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| Max content width | 1280px |
| Content container padding | 24px mobile / 32px tablet / 0 desktop (centered) |

### Effects

- **Glow:** `box-shadow: 0 0 60px -12px var(--color-primary-glow)` on key cards and hero visual.
- **Secondary glow:** Same pattern with `--color-secondary-glow` on energy/sustainability elements.
- **Border treatment:** 1px borders using `--color-bg-subtle` with subtle gradient borders (top edge lighter) on elevated cards.
- **Backdrop:** Semi-transparent cards with `backdrop-filter: blur(12px)` for header and select overlays.
- **Shimmer:** CSS-only linear gradient animation (white at 5% opacity, 3s duration, 5s delay between loops) on section headings and hero headline. Respect `prefers-reduced-motion`.

## Sections (in order)

### 1. Header

- **Logo:** Text-based "GridForesight" in JetBrains Mono, weight 700. No icon, no symbol. The wordmark IS the logo. Optionally add a subtle blue underline or glow on the "Grid" portion for differentiation.
- **Nav items (4 max):** Features, How It Works, Integrations, Docs (placeholder `#` links).
- **CTA button:** "Go to App" -- primary style, links to `https://app.gridforesight.com`. Solid `--color-primary` background, `--color-text-on-primary` text.
- **Behavior:** Semi-transparent (`--color-bg-deep` at 80% opacity) with `backdrop-filter: blur(12px)`. Fixed/sticky on scroll. On mobile (<768px), collapse nav items into hamburger menu; keep CTA button always visible.
- **Height:** 64px desktop, 56px mobile.

### 2. Hero

- **Headline (5-8 words):** "Predict energy demand before it satisfies" -- or workshop one of these: "Energy forecasts that outperform the grid" / "ML-powered forecasting for energy operators" / "Production-grade energy predictions, automated"
- **Subheadline (15-25 words):** "Ingest raw energy data. Train forecasting models. Serve sub-minute predictions. Monitor everything. One platform, no glue code."
- **Primary CTA:** "Go to App" button -- same style as header CTA. Links to `https://app.gridforesight.com`.
- **Secondary CTA:** "Explore the Platform" -- ghost button (1px `--color-primary` border, transparent background, `--color-primary` text). Links to `#features` anchor.
- **Hero visual:** A stylized data visualization occupying the right half (desktop) or below the text (mobile). Concept: a time-series forecast chart rendered in SVG showing actual demand (slate-400 line) vs. predicted demand (blue-500 line) with a confidence interval band (blue at 10% opacity). The chart should have a subtle grid background (slate-800 lines) and axis labels in JetBrains Mono. Below the chart, a small "pipeline status" bar showing: `Ingest [done] -> Train [done] -> Predict [live]` in monospace with green/blue status dots. This visual communicates the product at a glance -- not an abstract illustration, but a representation of what the platform actually produces.
- **Background:** Subtle radial gradient centered behind the hero visual -- `--color-primary-glow` fading to transparent. Optional: faint dot-grid pattern (slate-800 dots on slate-950) across the full hero for depth.
- **Layout:** Split layout on desktop (text left, visual right). Stacked on mobile (text top, visual below). Text block vertically centered against the visual.
- **Spacing:** 120px top padding (accounting for fixed header), 96px bottom.

### 3. Metrics Strip

- **Layout:** Horizontal row of 4 metrics, evenly spaced. Full-width background in `--color-bg-base` to create visual separation from hero.
- **Metrics (use JetBrains Mono for numbers, Geist for labels):**

| Number | Label |
|--------|-------|
| 99.2% | Uptime |
| < 30s | Prediction latency |
| 5B+ | Data points processed |
| 40% | Lower forecast error |

- **Styling:** Large numbers (36-48px desktop, 28-32px mobile) in `--color-text-primary`. Labels (14px) in `--color-text-secondary`. Each metric separated by a 1px vertical divider in `--color-bg-subtle`.
- **Mobile:** 2x2 grid instead of 4-across.
- **Animation:** Numbers count up from 0 on scroll-into-view using CSS `@keyframes` (no JS). Respect `prefers-reduced-motion` -- show final values immediately.

### 4. Features Section

- **Section heading:** "What GridForesight does" in H2. Subtext (1 sentence): "End-to-end ML forecasting -- from raw meter data to production predictions."
- **Layout:** Alternating left/right rows. Each feature has a text block on one side and a data-visualization illustration on the other. 3 rows total.
- **Feature 1 -- Demand Forecasting:**
  - Title: "Forecast demand at any resolution"
  - Description (15-25 words): "Hourly, 15-minute, or sub-minute predictions. GridForesight adapts its models to your data resolution and generates calibrated uncertainty bands."
  - Visual: Small SVG chart showing multi-resolution forecast lines (1h, 15m, 1m) converging, with confidence bands.
  - Text left, visual right.

- **Feature 2 -- Automated Pipelines:**
  - Title: "Pipelines that handle messy data"
  - Description: "Automated ingestion, validation, and gap-filling. Upload CSVs, connect APIs, or stream data. The pipeline handles the rest."
  - Visual: A simplified pipeline diagram: three nodes (`Ingest -> Validate -> Store`) connected by lines, with status indicators (green dots). Rendered in SVG with blue and emerald accents.
  - Visual left, text right.

- **Feature 3 -- Model Training & Evaluation:**
  - Title: "Train, evaluate, and compare models"
  - Description: "Configure training periods, select features, run experiments. Compare model performance with built-in evaluation metrics and visual diagnostics."
  - Visual: A stylized training dashboard card showing a loss curve (decreasing) and a small metrics table (RMSE, MAE, MAPE) in monospace.
  - Text left, visual right.

- **Card styling:** Each row is a full-width container. Text and visual blocks sit within `max-w-[1280px]`. Subtle horizontal divider between rows in `--color-bg-subtle`.
- **Mobile:** Stack vertically (text on top, visual below) for all rows.

### 5. Technical Showcase

- **Section heading:** "How the pipeline works" in H2. Subtext: "Four stages. Fully automated. Observable end to end."
- **Layout:** Horizontal pipeline diagram on desktop, vertical on mobile. Four connected stages with lines/arrows between them.
- **Stages:**

| Stage | Icon concept | Label | Description (10-20 words) |
|-------|-------------|-------|--------------------------|
| 1 | Upload/database icon | Ingest | Raw energy data flows in -- CSVs, APIs, or streaming sources. Validated on arrival. |
| 2 | Brain/neural network icon | Train | Models learn from historical patterns. Configure features, periods, and evaluation splits. |
| 3 | Lightning bolt icon | Predict | Trained models serve forecasts on demand. Sub-minute latency, calibrated confidence intervals. |
| 4 | Eye/monitor icon | Monitor | Track prediction accuracy in real time. Detect drift. Retrain when performance degrades. |

- **Visual treatment:** Each stage is a card (`--color-bg-base`, `--radius-md` border, 1px `--color-bg-subtle` border). Active/highlighted stage (Predict) has a `--color-primary-glow` border glow. Connecting lines between cards are dashed, `--color-bg-subtle`, with small directional arrows.
- **Animation:** Stages fade in sequentially (200ms stagger) on scroll-into-view. A subtle pulse animation on the "Predict" stage glow (3s cycle) to suggest liveness. CSS-only. Respect `prefers-reduced-motion`.
- **Background:** `--color-bg-deep` with a faint radial gradient behind the pipeline.

### 6. Integrations & Data Sources

- **Section heading:** "Connects to your data" in H2. Subtext: "Bring any energy data source. GridForesight handles format detection, timezone normalization, and gap resolution."
- **Layout:** Centered grid of data source cards (3 columns desktop, 2 tablet, 1 mobile).
- **Data sources to show (6 cards):**

| Source | Icon concept | Label |
|--------|-------------|-------|
| CSV/Excel uploads | File icon | File Uploads |
| REST API | Plug/connection icon | REST API |
| ISO/RTO market data | Chart-bar icon | Market Data Feeds |
| SCADA/meter systems | Gauge icon | SCADA & Meters |
| Weather data | Cloud-sun icon | Weather Services |
| Custom sources | Code icon | Custom Integrations |

- **Card styling:** Small cards (equal size), `--color-bg-base` background, `--radius-md`, 1px `--color-bg-subtle` border. Icon (24x24, `--color-text-secondary`) centered above the label. On hover: border transitions to `--color-primary` at 50% opacity, subtle glow.
- **Below the grid:** A single line of text in `--color-text-muted`: "Time-series data in any resolution. Automatic timezone detection and UTC normalization."

### 7. Testimonials

- **Section heading:** "Trusted by energy teams" in H2.
- **Layout:** 3 testimonial cards in a row (desktop), stacked (mobile). Cards are `--color-bg-base` with `--radius-md` and 1px `--color-bg-subtle` border.
- **Testimonial content (clearly marked as placeholders -- replace with real testimonials when available):**

**Card 1:**
> "We replaced three separate tools with GridForesight. Forecast error dropped 35% in the first month."
- **[Placeholder Name]**, Senior Data Scientist, **[Energy Company A]**
- Metric badge: "35% error reduction"

**Card 2:**
> "The automated pipeline saved our team 20 hours per week on data wrangling alone. We focus on analysis now, not plumbing."
- **[Placeholder Name]**, ML Engineer, **[Energy Company B]**
- Metric badge: "20 hrs/week saved"

**Card 3:**
> "Sub-minute prediction latency with calibrated uncertainty. That changed how we operate."
- **[Placeholder Name]**, Energy Analyst, **[Utility Company C]**
- Metric badge: "< 30s latency"

- **Card structure:** Quote text in `--color-text-primary` (italic Geist, 16px). Attribution below: name and title in `--color-text-secondary`. Metric badge: small pill shape (`--color-bg-elevated` background, `--color-secondary` text, JetBrains Mono, 13px).
- **No photos.** Use initials in a small circle (`--color-bg-elevated`, `--color-text-secondary`) as avatar placeholder.

### 8. Final CTA Section

- **Background:** Gradient from `--color-bg-base` to `--color-bg-deep`, with a centered radial glow combining `--color-primary-glow` and `--color-secondary-glow` (very subtle, layered).
- **Headline (H2):** "Start forecasting with production-grade ML"
- **Supporting text (10-20 words):** "Ingest your data, train models, and serve predictions. No infrastructure to manage."
- **Primary CTA:** "Go to App" -- larger button variant (18px text, extra padding). Same primary style. Links to `https://app.gridforesight.com`.
- **Secondary CTA:** "See the Data" -- ghost button style. Placeholder link.
- **Layout:** Centered text, buttons side by side (desktop) or stacked (mobile).
- **Spacing:** 120px vertical padding.

### 9. Footer

- **Background:** `--color-bg-deep` (same as page, no visual break -- separated by a 1px `--color-bg-subtle` top border).
- **Layout:** 3 columns desktop, stacked mobile.

| Column 1 (Brand) | Column 2 (Product) | Column 3 (Legal) |
|---|---|---|
| "GridForesight" text logo (JetBrains Mono, smaller) | Features (anchor link) | Privacy Policy (placeholder) |
| One-liner: "ML-powered energy forecasting" in `--color-text-muted` | How It Works (anchor link) | Terms of Service (placeholder) |
| | Integrations (anchor link) | |
| | Docs (placeholder) | |

- **Bottom bar:** Full-width, separated by 1px border. Copyright text: "(c) 2026 GridForesight. All rights reserved." in `--color-text-muted`, 13px, centered.
- **No social media icons** (no accounts exist for this standalone brand).

## Technical Requirements

- **Stack:** Astro 5 (static output) + Tailwind CSS v4 (`@theme` in CSS, no `tailwind.config.js`) + Biome (formatting and linting, no Prettier or ESLint).
- **Output:** `output: 'static'` in `astro.config.mjs`. No SSR.
- **Zero client JavaScript** unless a specific interactive island is justified with a written rationale. CSS `@keyframes` for all animations.
- **Lighthouse targets:** Performance 95+, Accessibility 95+, Best Practices 95+, SEO 95+.
- **WCAG 2.2 AA compliance.** Dark mode contrast is critical: 4.5:1 minimum for body text (`#e2e8f0` on `#0f172a` = 11.07:1, passes), 3:1 minimum for large text and UI components.
- **Responsive:** 320px to 1920px. Mobile-first CSS. Content capped at 1280px and centered on large screens.
- **Fonts:** Self-host JetBrains Mono and Geist via `@font-face` in the global CSS. Preload the primary weights (400, 600, 700) in `<head>`. Use `font-display: swap`.
- **Icons:** Lucide icons exclusively. Inline SVG (enables `currentColor`). Consistent sizing: 20x20 for inline, 24x24 for cards, 40x40 for feature illustrations.
- **Images:** Use Astro `<Image />` component for any raster images. SVG for all illustrations and decorative graphics. All images must have explicit `width` and `height`. Decorative images use `alt=""`.
- **SEO:** `<html lang="en">`, single `<h1>`, sequential heading hierarchy, canonical URL, sitemap via `@astrojs/sitemap`.
- **Meta tags:**
  - Title: "GridForesight -- ML-Powered Energy Forecasting" (under 55 chars)
  - Description: "Production-grade demand forecasting and renewable energy prediction. Automated data pipelines, model training, and real-time monitoring." (under 155 chars)
  - OG image: 1200x630px, dark background with the text logo and a stylized forecast chart. Provide as `public/og-image.png`.
  - Theme color: `#0f172a`
- **Structured HTML:** `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">` for each content section, `<footer>`. Skip-to-content link as first focusable element.
- **Smooth scroll:** `scroll-behavior: smooth` on `<html>` for anchor links.
- **Selection color:** `::selection` with `--color-primary` background at 30% opacity.
- **Font rendering:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`.

## File Structure

```
src/
  layouts/
    BaseLayout.astro          # <html>, <head>, meta tags, font preloads, global styles, <slot />
  components/
    Header.astro              # Sticky nav + CTA
    Hero.astro                # Headline, subheadline, CTAs, forecast chart SVG
    MetricsStrip.astro        # 4 key numbers
    Features.astro            # Alternating feature rows
    TechnicalShowcase.astro   # Pipeline diagram
    Integrations.astro        # Data source grid
    Testimonials.astro        # 3 testimonial cards
    CTASection.astro          # Final conversion section
    Footer.astro              # Links + legal
  pages/
    index.astro               # Composes BaseLayout + all sections
  styles/
    global.css                # @import "tailwindcss"; @theme { ... }; @font-face declarations
  assets/
    icons/                    # Lucide SVGs if not inlined directly
public/
  favicon.svg                 # "GF" monogram in JetBrains Mono, blue on transparent
  favicon.ico                 # Fallback
  og-image.png                # 1200x630, dark with logo + chart
  robots.txt                  # Allow all
```

## Explicitly DO NOT

- **No `tailwind.config.js`.** Tailwind v4 uses `@theme` in CSS.
- **No React, Vue, or Svelte components.** Everything is `.astro` files.
- **No client-side JavaScript** for animations, counters, or scroll effects. CSS `@keyframes` and `animation-timeline: view()` (with fallback) only.
- **No Inter font.** JetBrains Mono for display, Geist for body. This is a deliberate departure from the default AI aesthetic.
- **No purple/blue gradient on white background.** This is dark mode only. No light mode toggle.
- **No generic stock photos.** All visuals are SVG illustrations, data visualizations, or abstract graphics built with the design tokens.
- **No Lorem ipsum or placeholder body copy.** Every text element must be real. Testimonial names/companies are the only acceptable placeholders (clearly marked with brackets).
- **No floating decorative blobs, orbs, or circles.** Background texture is limited to dot-grids and subtle radial gradients.
- **No icon fonts** (Font Awesome, etc.). Inline SVG only.
- **No `!important` overrides.**
- **No inline styles.** Use Tailwind classes.
- **No auto-playing video or audio.**
- **No scroll hijacking or parallax heavier than 10-20px offset.**
- **No references to gridforesight.ca, any university, any research lab, or the bubble-G logo.** This brand stands alone.
- **No buzzword soup.** Write copy like an engineer explaining their system to a peer, not a marketer selling a dream.
- **No Base64-encoded images in HTML.**
- **No unoptimized images served directly from `public/`.** Use Astro `<Image />`.

## Assets Provided

No pre-made assets. Generate the following:

- **Logo:** SVG text wordmark "GridForesight" in JetBrains Mono Bold. Consider a subtle treatment: "Grid" in `--color-text-primary`, "Foresight" in `--color-primary`. Or unified in `--color-text-primary` with a small blue accent element (underline, cursor blink, etc.).
- **Favicon:** SVG, "GF" lettermark in JetBrains Mono Bold, `--color-primary` on transparent background.
- **Hero chart:** Inline SVG time-series forecast visualization. Actual vs. predicted lines with confidence band. Dark theme using design tokens.
- **Pipeline diagram:** Inline SVG for the technical showcase. Four connected stages with icons.
- **Feature illustrations:** Small inline SVGs per feature (chart, pipeline nodes, training dashboard).
- **Integration icons:** Use Lucide icons for each data source type.
- **OG image (1200x630):** Must be generated or assembled. Dark background (`--color-bg-deep`), "GridForesight" wordmark centered top, stylized forecast chart below, tagline "ML-Powered Energy Forecasting" in `--color-text-secondary`. This can be a static PNG placed in `public/`.

## Reference Sites

| Site | What to take |
|------|-------------|
| **hex.tech** | Dark mode elegance, the feeling of a data notebook -- clean dark surfaces, subtle borders, monospace data labels. The way technical content is presented as beautiful, not cluttered. |
| **wandb.ai** | ML platform positioning for technical buyers. How they show experiment tracking and model evaluation without dumbing it down. The hero combines visualization with explanation. |
| **linear.app** | Spatial precision on dark backgrounds. The shimmer animation technique. How glow effects create depth without feeling decorative. The discipline of a tight neutral palette with 1-2 accent colors. |
| **datadoghq.com** | Metric-heavy social proof done right. Dashboard preview patterns. How monitoring products show credibility through data density, not marketing fluff. |

## Contrast Verification

Critical dark-mode contrast checks (all must pass WCAG AA):

| Foreground | Background | Ratio | Passes |
|------------|------------|-------|--------|
| `#e2e8f0` (body text) | `#0f172a` (base bg) | 11.07:1 | AA + AAA |
| `#e2e8f0` (body text) | `#020617` (deep bg) | 13.23:1 | AA + AAA |
| `#94a3b8` (secondary text) | `#0f172a` (base bg) | 4.81:1 | AA |
| `#94a3b8` (secondary text) | `#020617` (deep bg) | 5.74:1 | AA |
| `#64748b` (muted text) | `#0f172a` (base bg) | 2.87:1 | FAILS for body text -- use only for large text (18px+) or decorative labels |
| `#3b82f6` (primary accent) | `#0f172a` (base bg) | 4.23:1 | AA for large text, borderline for body -- use at 18px+ or pair with `#60a5fa` for smaller text |
| `#60a5fa` (primary hover) | `#0f172a` (base bg) | 5.74:1 | AA |
| `#10b981` (secondary accent) | `#0f172a` (base bg) | 5.09:1 | AA |
| `#020617` (text on primary btn) | `#3b82f6` (primary btn bg) | 7.38:1 | AA + AAA |

**Action items from contrast audit:**
- `--color-text-muted` (`#64748b`) must NOT be used for body-size text. Reserve for labels >= 18px, decorative metadata, or icons with text alternatives.
- `--color-primary` (`#3b82f6`) as text on dark backgrounds: use only at 18px+ bold. For smaller interactive text (links, labels), use `--color-primary-hover` (`#60a5fa`) instead.

## Animation Specification

All animations are CSS-only. Every animation must be wrapped in a `prefers-reduced-motion: no-preference` media query.

| Animation | Trigger | Duration | Timing | Property |
|-----------|---------|----------|--------|----------|
| Hero headline shimmer | Page load, then loops | 3s animation, 5s delay between | `linear` | `background-position` on gradient text |
| Metrics counter | Scroll into view | 1.5s | `ease-out` | CSS counter + `@keyframes` |
| Feature rows fade-in | Scroll into view | 500ms | `ease-out` | `opacity` + `transform: translateY(12px)` |
| Pipeline stages stagger | Scroll into view | 400ms each, 200ms stagger | `ease-out` | `opacity` + `transform: translateY(8px)` |
| Predict stage pulse | Continuous after entrance | 3s loop | `ease-in-out` | `box-shadow` intensity |
| Integration card hover | Hover | 200ms | `ease-out` | `border-color` + `box-shadow` |
| CTA button hover | Hover | 150ms | `ease-out` | `background-color` + `transform: scale(1.02)` |

**Reduced motion fallback:** All elements appear in their final state immediately. No transforms, no fades, no shimmer. Static and fully readable.
