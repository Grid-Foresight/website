# Landing Page Brief: Standalone Dashboard

## Identity

- **Product:** GridForesight -- ML-powered energy forecasting platform that lets operators see predictions at a glance, upload data with drag-and-drop, train models in one click, and monitor real-time forecast accuracy.
- **Audience:** Energy industry decision-makers (grid operators, portfolio managers, energy traders) who evaluate tools visually. They want to SEE the product working before committing. Mid-to-senior level, comfortable with dashboards but not ML internals. Arrive via direct search, paid ads, or referrals.
- **Tone:** Product-forward, quietly confident, technically grounded. Not salesy. Let the dashboard do the talking.
- **Aesthetic direction:** "Notion meets Retool" -- the product IS the hero. A large, detailed dashboard mockup dominates the page. Clean, airy surroundings frame the product without competing. Think Figma's hero (massive product preview, minimal text above it) crossed with Retool's use-case-driven sections.

### Positioning Rules

This variant is a **standalone product page**. It has its own identity:

- NO reference to gridforesight.ca, no lab affiliation, no university connection, no research origins.
- NO "bubble-G" logo from gridforesight.ca. The logo is a clean text wordmark: "GridForesight" in Plus Jakarta Sans Bold.
- The page stands alone as a commercial SaaS product. It could belong to any well-funded startup.
- All credibility comes from the product itself (the dashboard mockup) and social proof -- not institutional backing.

---

## Design Tokens

Define these in `src/styles/global.css` via Tailwind v4 `@theme`:

```
Mode:               Light (page chrome). Dashboard mockup in dark mode for contrast.
Background:         #ffffff (primary) → #f8fafc (alternating sections)
Primary accent:     #4f46e5 (Indigo 600 -- product/app feel)
Secondary accent:   #f59e0b (Amber 500 -- energy/warmth signal)
Text (primary):     #1e293b (Slate 800) on light backgrounds
Text (secondary):   #64748b (Slate 500) for supporting copy
Text (on dark):     #f1f5f9 (Slate 100) inside the dashboard mockup
Border:             #e2e8f0 (Slate 200)
Surface:            #f8fafc (Slate 50) for cards and alternating sections
Dashboard bg:       #0f172a (Slate 900) for the mockup interior

Display font:       "Plus Jakarta Sans", system-ui, sans-serif  (weights: 600, 700, 800)
Body font:          "DM Sans", system-ui, sans-serif  (weights: 400, 500)

Base spacing unit:  8px (all spacing as multiples: 8, 16, 24, 32, 48, 64, 96)
Border radius:      12px (cards, buttons, mockup frame)
Max content width:  1280px
Section padding:    96px vertical (desktop), 64px vertical (mobile)
```

### Neutral Scale (Slate)

| Token | Hex | Usage |
|-------|-----|-------|
| 50 | #f8fafc | Alternating section bg, card bg |
| 100 | #f1f5f9 | Dashboard mockup light text |
| 200 | #e2e8f0 | Borders, dividers |
| 300 | #cbd5e1 | Disabled states |
| 400 | #94a3b8 | Placeholder text |
| 500 | #64748b | Secondary text, captions |
| 600 | #475569 | Body text (secondary) |
| 700 | #334155 | Body text (primary alternate) |
| 800 | #1e293b | Primary text, headings |
| 900 | #0f172a | Dashboard mockup bg |
| 950 | #020617 | Deepest dark |

---

## Sections (in order)

### 1. Header

**Layout:** Sticky top bar, white background with subtle bottom border (#e2e8f0). Full-width with max-width 1280px centered content.

**Left:** Text logo "GridForesight" in Plus Jakarta Sans Bold (700), 20px, Slate 800. No icon, no symbol -- text only. The word "Grid" in Slate 800, "Foresight" in Indigo 600. This creates a simple two-tone wordmark without needing a graphic.

**Center nav items (desktop only, hidden behind hamburger on mobile):**
- Features
- Use Cases
- How It Works
- Pricing (anchor link to placeholder or external)

Keep to 4 items maximum. Sentence case. DM Sans Medium (500), 15px, Slate 600. Hover: Slate 800.

**Right:**
- Secondary: "Watch Demo" -- ghost button (indigo outline, transparent fill). Placeholder `href="#"`.
- Primary: "Go to App" -- solid Indigo 600 button, white text. Links to `https://app.gridforesight.com`.

**Mobile (below 768px):** Logo left, hamburger icon right. "Go to App" button visible in nav drawer.

---

### 2. Hero

**Layout:** Centered text above a large dashboard mockup. The mockup is the hero -- it should occupy 60-70% of the hero section's visual weight. No split layout, no side-by-side. Text stacks above the product.

**Headline (centered, max-width 720px):**
> See your energy forecasts at a glance

Plus Jakarta Sans, 56px desktop / 36px mobile, weight 800, Slate 800. Letter-spacing -0.02em. Line-height 1.1.

**Subheadline (centered, max-width 560px):**
> Upload your data, train a model, and get production-ready predictions -- no ML expertise required.

DM Sans, 18px desktop / 16px mobile, weight 400, Slate 500. Line-height 1.6.

**CTA row (centered, inline on desktop, stacked on mobile):**
- Primary: "Go to App" -- Indigo 600 bg, white text, 16px DM Sans Semibold. Links to `https://app.gridforesight.com`. Hover: Indigo 700.
- Secondary: "Watch a Demo" -- ghost button (Indigo 600 text + border, transparent bg). Placeholder `href="#"`. Hover: Indigo 50 bg.
- Below buttons, small text: "Setup in under 5 minutes. No credit card required." -- DM Sans, 14px, Slate 400.

**Dashboard mockup (the main visual):**

A CSS-only static mockup of a forecast dashboard. This is NOT a screenshot image -- build it entirely in HTML and CSS for crispness at all resolutions and zero image payload. It sits in a rounded container (border-radius 12px) with a subtle shadow (`shadow-2xl`) and a Slate 900 (#0f172a) background. Slight perspective tilt optional (3-5 degrees via CSS `transform: perspective(1200px) rotateX(2deg)`) for depth -- but subtle, not dramatic.

**Dashboard mockup contents (all static, decorative, aria-hidden):**

- **Top bar:** "GridForesight" text logo (small, Slate 400) left, a simulated user avatar circle right, a time range selector showing "Last 30 Days" with a dropdown chevron.
- **Left sidebar (narrow, ~200px):** Section label "Assets" with a list of 4-5 asset names: "Wind Farm Alpha", "Solar Park Beta", "Grid Node 7", "Battery Storage A", "Hydro Station C". "Wind Farm Alpha" is highlighted (Indigo 500 left border + Indigo 500/10 background). Each has a small colored dot (green for active).
- **Main content area:**
  - **Metrics row:** Three stat cards in a row:
    - "Forecast Accuracy" -- "94.2%" in large text (Indigo 400), small "vs 91.8% baseline" below
    - "Next 24h Prediction" -- "847 MW" in large text (white), small "Updated 3 min ago" below
    - "Data Quality" -- a horizontal bar at ~92% fill (green), "92% complete" text
  - **Forecast chart area:** The largest element. A rectangular area with a faint grid background (Slate 800 lines). Two "lines" represented by colored CSS shapes:
    - Actual line (Slate 400, dashed or dotted) -- use a series of small dots or a gradient strip
    - Predicted line (Indigo 500, solid) -- a slightly different path, diverging into a "future" shaded area (Indigo 500 at 10% opacity)
    - X-axis labels: "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
    - Y-axis labels: "0", "250", "500", "750", "1000" (MW)
    - Legend: small circles + "Actual" and "Predicted" labels
  - **Below the chart:** A small data table with 4-5 rows showing "Timestamp", "Actual (MW)", "Predicted (MW)", "Error (%)" with realistic values.

The entire mockup is decorative. Use `aria-hidden="true"` on the container. The "chart lines" can be represented using CSS gradients, SVG paths, or absolutely positioned divs with border tricks. They do NOT need to be accurate -- they need to LOOK like a real chart at a glance.

On mobile (below 768px): The mockup scales down and loses the sidebar (show main content area only). The mockup should still be recognizable but can be simplified.

**Animation:** Subtle fade-in-up on page load. The mockup can have a very slow shimmer effect (a diagonal gradient highlight that sweeps across once on load, 2 seconds, then stops). Respect `prefers-reduced-motion`.

---

### 3. Social Proof Bar

**Layout:** Horizontal strip on Slate 50 (#f8fafc) background. Centered content.

**Heading text:** "Trusted by energy teams across North America" -- DM Sans, 14px, Slate 400, uppercase, letter-spacing 0.05em.

**Logos:** 5-6 placeholder company logos. Since we have no real logos, render them as gray text-only placeholders in a monospace or sans-serif font:
- "Acme Energy"
- "NorthGrid"
- "SolarCo"
- "Pacific Power"
- "WindStream"
- "GridWorks"

Style: Slate 300 color, 14px, DM Sans Medium. Evenly spaced in a horizontal row. On mobile, wrap to two rows or use a slow horizontal scroll.

These are explicitly placeholders. Do NOT design elaborate fake logos.

---

### 4. Use-Case Section

**Section heading (centered):**
> Built for every energy role

DM Sans, 14px, Slate 400, uppercase, letter-spacing 0.05em. Below it:

> One platform, from grid dispatch to trading desk.

Plus Jakarta Sans, 36px desktop / 28px mobile, weight 700, Slate 800.

**Layout:** 3 cards in a horizontal row (desktop). Stack vertically on mobile. Cards sit on white bg with Slate 200 border, 12px radius, 32px padding. Subtle hover: translate Y -4px, shadow increase.

**Card 1: For Grid Operators**
- Icon: Lucide `Zap` (24x24, Indigo 600)
- Title: "For Grid Operators" -- Plus Jakarta Sans, 20px, weight 600, Slate 800
- Description (max 25 words): "Monitor real-time demand forecasts across your network. Anticipate peak loads before they happen and dispatch generation with confidence."
- Small link: "See how it works" with right arrow icon -- Indigo 600, DM Sans 14px. Anchor to How It Works section.

**Card 2: For Renewable Portfolios**
- Icon: Lucide `Sun` (24x24, Amber 500)
- Title: "For Renewable Portfolios"
- Description: "Forecast solar and wind output across every asset in your fleet. Optimize storage schedules and reduce curtailment with accurate predictions."
- Small link: "See how it works"

**Card 3: For Energy Traders**
- Icon: Lucide `TrendingUp` (24x24, Indigo 600)
- Title: "For Energy Traders"
- Description: "Turn forecast accuracy into trading alpha. Get hourly price-relevant predictions and quantify uncertainty before every position."
- Small link: "See how it works"

---

### 5. Features with Inline Product Previews

**Section background:** White (#ffffff).

**Section heading (centered):**
> Everything you need to forecast with confidence

Plus Jakarta Sans, 36px desktop / 28px mobile, weight 700, Slate 800.

**Layout:** Alternating rows. Each feature is a two-column layout: text on one side, a small dashboard excerpt (product preview) on the other. Alternate left/right placement. On mobile, stack with text above preview.

**Feature 1: Visual Forecast Dashboard (text left, preview right)**
- Title: "Forecasts you can actually read" -- Plus Jakarta Sans, 24px, weight 600, Slate 800
- Description (max 30 words): "Every prediction displayed as an interactive chart with confidence intervals, actual-vs-predicted overlays, and exportable data. No spreadsheet archaeology required."
- Preview: A smaller version of the chart area from the hero mockup. Dark bg (Slate 900), showing the forecast line chart with the shaded prediction zone. 12px radius, shadow-lg.

**Feature 2: Drag-and-Drop Data Upload (text right, preview left)**
- Title: "Upload data in seconds"
- Description: "Drag your CSV or connect to an API. GridForesight validates, cleans, and maps your time series automatically. Bad data gets flagged before it reaches a model."
- Preview: A small mockup of an upload zone -- a dashed-border rectangle with an upload icon (Lucide `Upload`), "Drop files here or browse" text, and a progress bar at 73% with a file name "wind_farm_alpha_2024.csv".

**Feature 3: One-Click Model Training (text left, preview right)**
- Title: "Train models without writing code"
- Description: "Select your target variable, pick a training window, and hit train. GridForesight handles feature engineering, model selection, and validation automatically."
- Preview: A small mockup of a training configuration panel -- a dropdown labeled "Target: Power Output (MW)", a date range selector "Jan 2024 -- Dec 2024", and a button "Start Training" with a small progress indicator.

**Feature 4: Asset Management (text right, preview left)**
- Title: "All your assets, one view"
- Description: "Wind farms, solar parks, batteries, grid nodes -- every asset with its own forecast pipeline, data quality score, and prediction history in a single sidebar."
- Preview: A small version of the sidebar from the hero mockup, showing the asset list with status dots and the highlighted "Wind Farm Alpha" item.

---

### 6. How It Works

**Section background:** Slate 50 (#f8fafc).

**Section heading (centered):**
> From raw data to predictions in three steps

Plus Jakarta Sans, 36px desktop / 28px mobile, weight 700, Slate 800.

**Layout:** 3 steps in a horizontal row with connecting lines/arrows between them. On mobile, stack vertically with a vertical line connecting them.

**Step 1: Connect Your Data**
- Number: "1" in a 48px circle (Indigo 600 bg, white text)
- Title: "Connect your data" -- Plus Jakarta Sans, 20px, weight 600
- Description (max 20 words): "Upload CSVs or connect a live data feed. GridForesight auto-detects timestamps, measurements, and metadata."
- Small icon below: Lucide `Database` (Slate 400, 20px)

**Step 2: Train a Model**
- Number: "2" in a 48px circle
- Title: "Train a model"
- Description: "Pick your target and time range. One click starts automated feature engineering, model training, and cross-validation."
- Small icon: Lucide `Brain` (Slate 400, 20px)

**Step 3: Get Predictions**
- Number: "3" in a 48px circle
- Title: "Get predictions"
- Description: "View forecasts on your dashboard in real time. Export to CSV, connect downstream systems, or just watch the charts."
- Small icon: Lucide `LineChart` (Slate 400, 20px)

---

### 7. Testimonials

**Section background:** White (#ffffff).

**Section heading (centered):**
> Teams ship forecasts faster with GridForesight

Plus Jakarta Sans, 36px desktop / 28px mobile, weight 700, Slate 800.

**Layout:** 3 testimonial cards in a horizontal row. Stack on mobile. White bg, Slate 200 border, 12px radius, 24px padding.

**Testimonial 1:**
- Quote: "We went from manual spreadsheet forecasts to automated ML predictions in a single afternoon. The drag-and-drop upload alone saved us a week of data wrangling."
- Name: "Sarah Chen" -- Plus Jakarta Sans, 16px, weight 600, Slate 800
- Role: "Director of Grid Operations, NorthGrid" -- DM Sans, 14px, Slate 500
- Avatar: Slate 300 circle with initials "SC" (CSS-generated, no image)

**Testimonial 2:**
- Quote: "The forecast accuracy improvement was immediate -- 94% on our wind portfolio within the first training run. Our traders now have numbers they actually trust."
- Name: "James Park"
- Role: "Head of Energy Trading, Pacific Power"
- Avatar: "JP"

**Testimonial 3:**
- Quote: "I'm not an ML engineer and I don't need to be. GridForesight handles the complexity. I just pick my assets, hit train, and check the dashboard next morning."
- Name: "Maria Torres"
- Role: "Portfolio Analyst, SolarCo"
- Avatar: "MT"

**Note:** These are realistic placeholder testimonials. They are clearly fictional -- do not present them as real customer quotes. They exist to demonstrate the testimonial card layout and copy tone.

---

### 8. Final CTA

**Section background:** Indigo 600 (#4f46e5), full-width. White text throughout.

**Layout:** Centered text with a smaller dashboard mockup below.

**Headline:**
> Start forecasting in minutes

Plus Jakarta Sans, 40px desktop / 28px mobile, weight 700, white.

**Supporting text:**
> Upload your first dataset, train a model, and see predictions -- all before your coffee gets cold.

DM Sans, 18px, Indigo 100 (light, slightly transparent feel).

**CTA buttons (centered, inline):**
- Primary: "Go to App" -- white bg, Indigo 600 text, 16px DM Sans Semibold. Links to `https://app.gridforesight.com`. Hover: Slate 50 bg.
- Secondary: "Watch a Demo" -- ghost button (white border, transparent bg, white text). Placeholder `href="#"`.

**Smaller dashboard preview:** A scaled-down (60-70% size), slightly faded version of the hero dashboard mockup. Positioned below the CTA. This reinforces the "product-led" message one final time. Apply a subtle fade-out at the bottom edges so it doesn't need a hard boundary. Use `opacity: 0.85` and a bottom gradient mask.

---

### 9. Footer

**Background:** Slate 900 (#0f172a). Light text.

**Layout:** 4-column grid on desktop, stacked on mobile.

**Column 1: Brand**
- Text logo: "GridForesight" (Plus Jakarta Sans Bold, 18px, white with "Foresight" in Indigo 400)
- Tagline: "ML-powered energy forecasting" -- DM Sans, 14px, Slate 400
- Copyright: "(c) 2026 GridForesight. All rights reserved." -- DM Sans, 13px, Slate 500

**Column 2: Product**
- Dashboard (placeholder `#`)
- Features (anchor to features section)
- Pricing (placeholder `#`)
- Changelog (placeholder `#`)

**Column 3: Resources**
- Documentation (placeholder `#`)
- API Reference (placeholder `#`)
- Status Page (placeholder `#`)
- Blog (placeholder `#`)

**Column 4: Company**
- About (placeholder `#`)
- Careers (placeholder `#`)
- Contact (placeholder `#`)
- Privacy Policy (placeholder `#`)
- Terms of Service (placeholder `#`)

Link style: DM Sans, 14px, Slate 400. Hover: white.

**Bottom bar:** Full-width divider (Slate 800), then a row with "Privacy Policy" and "Terms of Service" links left-aligned, and placeholder social icons (Lucide: `Twitter`, `Linkedin`, `Github` -- Slate 500, 20px) right-aligned.

---

## Technical Requirements

- **Stack:** Astro 5 + Tailwind CSS v4 + Biome
- **Output:** Static (`output: 'static'` in astro.config). No SSR.
- **Zero client JS** unless an interactive island is justified (none should be needed for this variant).
- **Lighthouse:** All four categories 95+. Target 98+ for Performance (static site with no images and no JS).
- **WCAG 2.2 AA** compliance.
- **Responsive:** 320px to 1920px. Mobile-first CSS with Tailwind responsive prefixes.
- **Fonts:** Load Plus Jakarta Sans (600, 700, 800) and DM Sans (400, 500) via Google Fonts or self-hosted WOFF2. Preload in `<head>`. Use `font-display: swap`.
- **Icons:** Lucide icons only. Inline SVG (no icon font, no external requests). Consistent 24x24 for inline, 20x20 for small, 40x40 for feature icons.
- **Tailwind v4:** Configure all design tokens via `@theme` in CSS. No `tailwind.config.js` file.
- **Biome:** Formatting and linting. No Prettier, no ESLint. Tabs for indentation.
- **Animations:** CSS only. `@keyframes` and `transition`. No JS animation libraries. All behind `prefers-reduced-motion` checks.
- **SEO:** `<html lang="en">`, single `<h1>`, sequential heading hierarchy, `<meta>` description, Open Graph tags, Twitter Card tags, canonical URL, sitemap.xml, robots.txt.
- **Page title:** "GridForesight | ML-Powered Energy Forecasting Dashboard" (under 55 characters)
- **Meta description:** "See your energy forecasts at a glance. Upload data, train ML models, and get production-ready predictions -- no expertise required." (under 155 characters)

### File Structure

```
src/
  layouts/
    BaseLayout.astro          # <html>, <head>, fonts, global styles, <slot />
  components/
    Header.astro              # Nav + CTA + mobile hamburger
    Hero.astro                # Headline + CTA + dashboard mockup
    DashboardMockup.astro     # The full dashboard mockup (reusable, used in hero + final CTA)
    SocialProofBar.astro      # Logo/placeholder bar
    UseCases.astro            # 3 use-case cards
    Features.astro            # Alternating feature rows with previews
    FeaturePreview.astro      # Individual feature preview mockup component
    HowItWorks.astro          # 3-step process
    Testimonials.astro        # 3 testimonial cards
    FinalCTA.astro            # Final CTA section with mini dashboard
    Footer.astro              # 4-column footer
  pages/
    index.astro               # Composes layout + all sections in order
  styles/
    global.css                # @import "tailwindcss"; @theme { ... }
public/
  favicon.svg                 # Simple "GF" text or grid icon in Indigo 600
  favicon.ico                 # Fallback
  robots.txt                  # Allow all
  og-image.png                # 1200x630, Indigo background with "GridForesight" text + mini dashboard graphic
```

---

## Explicitly DO NOT

### Visual
- Do NOT use the bubble-G logo from gridforesight.ca. Text wordmark only.
- Do NOT reference gridforesight.ca, the lab, or any university affiliation anywhere on the page.
- Do NOT use stock photos of any kind. All visuals are the dashboard mockup (HTML/CSS) and icons.
- Do NOT use generic abstract illustrations (floating orbs, gradient blobs, grid patterns behind the hero). The dashboard IS the visual.
- Do NOT use Inter font. The fonts are Plus Jakarta Sans and DM Sans.
- Do NOT use a purple-to-blue gradient hero background. The hero background is white.
- Do NOT add more than 2 font families.
- Do NOT use Lorem ipsum or placeholder filler text anywhere. All copy is real and final.
- Do NOT create a dark-mode page. The page is light mode. Only the dashboard mockup interior is dark.
- Do NOT add decorative floating shapes, animated particles, or background noise textures.

### Technical
- Do NOT create a `tailwind.config.js`. Tailwind v4 uses `@theme` in CSS.
- Do NOT import React, Vue, Svelte, or any framework components. Use `.astro` files only.
- Do NOT add `client:load` or any client directive unless explicitly justified.
- Do NOT use Prettier or ESLint. Biome handles both.
- Do NOT use icon fonts (Font Awesome, etc.). Inline Lucide SVGs only.
- Do NOT use `!important` in CSS.
- Do NOT use inline styles. Use Tailwind classes.
- Do NOT add JavaScript animation libraries (GSAP, Framer Motion, etc.). CSS animations only.
- Do NOT Base64-encode any images or inline data URIs for large assets.
- Do NOT use external image URLs (Unsplash, Pexels). All assets are local or CSS-generated.

### Content
- Do NOT use buzzword soup ("next-generation AI-powered scalable enterprise leveraging cutting-edge...").
- Do NOT describe features without business outcomes. Lead with the benefit.
- Do NOT use superlatives without evidence ("best-in-class", "world-leading").
- Do NOT use "Learn More" as CTA text. Use specific action language.
- Do NOT invent real company names for social proof. Use the clearly-placeholder names listed above.

---

## Assets Provided

No pre-made image assets. Everything is generated:

- **Logo:** CSS text wordmark ("Grid" in Slate 800 + "Foresight" in Indigo 600, Plus Jakarta Sans Bold). No image file needed.
- **Dashboard mockup:** Entirely HTML/CSS. No screenshots, no images, no canvas.
- **Feature previews:** Smaller HTML/CSS excerpts of dashboard elements.
- **Icons:** Lucide inline SVGs. Specific icons named per section above.
- **Customer logos:** CSS text placeholders (gray text on light background).
- **Testimonial avatars:** CSS circles with initials (no images).
- **OG image:** Generate a simple 1200x630 PNG or SVG -- Indigo 600 background, white "GridForesight" text centered, optional faint grid lines for texture. This is the one asset that may need to be a real image file.
- **Favicon:** Simple SVG -- the letters "GF" in Indigo 600 on transparent background, or a small grid/chart icon.

---

## Reference Sites

| Site | What to take |
|------|-------------|
| **notion.so** | Product-as-hero approach. The template gallery IS the pitch. Notice how the hero text is short and the product preview is massive, taking 60%+ of the hero viewport. Copy this ratio. |
| **retool.com** | Showing the product in context with use-case-driven sections. Each use case has its own product screenshot demonstrating relevant functionality. Apply this to the Features section -- each feature shows a piece of the dashboard. |
| **figma.com** | Large product preview dominating the hero area, clean and airy surrounding. The product float above a minimal background. The product visual has subtle depth (shadow, slight perspective). Copy the spatial relationship between headline and product preview. |
| **framer.com** | Product workflow preview showing what you can build, not just what the product is. The "how it works" section shows a sequence of product states. Apply this to the 3-step How It Works section. |

---

## Placeholder Metrics

Use these specific numbers throughout the page. They are realistic placeholders:

| Metric | Value | Where to use |
|--------|-------|-------------|
| Setup time | "Under 5 minutes" | Hero supporting text, How It Works |
| Energy assets | "200+" | Social proof bar, features |
| Prediction refresh | "Real-time" | Features, dashboard mockup |
| Forecast accuracy | "94.2%" | Dashboard mockup metric card, testimonial |
| Data quality threshold | "92%" | Dashboard mockup metric card |
| Next 24h prediction | "847 MW" | Dashboard mockup metric card |

---

## Content Voice Examples

To calibrate the agent's writing tone, here are approved/rejected copy pairs:

| Approved | Rejected | Why |
|----------|----------|-----|
| "See your energy forecasts at a glance" | "Revolutionary AI-powered energy forecasting platform" | Benefit-first, no hype |
| "Upload data in seconds" | "Seamlessly ingest multi-format time series data" | Plain language, specific |
| "Train models without writing code" | "Leverage automated ML pipelines for model optimization" | Outcome over mechanism |
| "94% accuracy on first training run" | "Best-in-class forecasting accuracy" | Specific over superlative |
| "No ML expertise required" | "Democratizing machine learning for the energy sector" | Direct over grandiose |
| "From raw data to predictions in three steps" | "Streamlined end-to-end workflow" | Concrete over abstract |

---

## Quality Checklist

Before considering the page complete, verify:

### Lighthouse
- [ ] Performance: 95+ (target 98+)
- [ ] Accessibility: 95+ (target 100)
- [ ] Best Practices: 95+ (target 100)
- [ ] SEO: 95+ (target 100)

### Responsive
- [ ] 320px: Nothing overflows, text readable, CTAs tappable, dashboard mockup simplified
- [ ] 375px: Comfortable single-column layout
- [ ] 768px: Two-column grids begin, full nav visible
- [ ] 1024px: Full layout with feature alternating rows
- [ ] 1280px: Max-width container active, centered
- [ ] 1920px: No stretching, content stays centered and capped

### Accessibility
- [ ] All images have appropriate `alt` (empty for decorative mockup elements)
- [ ] Color contrast >= 4.5:1 for all text
- [ ] Keyboard navigation works for all interactive elements
- [ ] Visible focus indicators
- [ ] Heading hierarchy: single `<h1>`, sequential `<h2>`-`<h4>`
- [ ] `<main>` landmark present
- [ ] `prefers-reduced-motion` respected
- [ ] Skip-to-content link as first focusable element
- [ ] Dashboard mockup is `aria-hidden="true"` (it's decorative)

### Content
- [ ] No Lorem ipsum anywhere
- [ ] No broken anchor links
- [ ] Consistent sentence case throughout
- [ ] All CTA buttons have specific action language
- [ ] Testimonials have name + role + company
- [ ] No superlatives without supporting metrics

### Technical
- [ ] `astro build` completes with zero errors
- [ ] Biome lint passes with zero errors
- [ ] No `tailwind.config.js` file (v4 CSS-first)
- [ ] Zero client-side JavaScript shipped
- [ ] Fonts preloaded in `<head>`
- [ ] `<html lang="en">` set
- [ ] OG tags render correctly
- [ ] All external links use `rel="noopener noreferrer"`
- [ ] sitemap.xml generated
- [ ] robots.txt present
