# Landing Page Brief: Lab-Backed Outcomes

## Identity

- **Product:** GridForesight -- ML-powered energy forecasting platform proven by 10+ years of university research at the Grid Foresight Lab (University of Calgary).
- **Audience:** Business decision-makers in energy operations who care about ROI, proven results, and risk mitigation. They need numbers, not promises. They trust peer-reviewed research over marketing claims.
- **Tone:** Bold, authoritative, conversion-focused. Lead with outcomes, back with evidence. Confident without being hype-y. Every claim has a number attached.
- **Aesthetic direction:** "Datadog meets research paper" -- bold metrics in massive type like datadoghq.com, with the academic authority and credibility of a university research lab. The visual identity connects directly to gridforesight.ca (the lab site).
- **Positioning:** This is the commercial platform born from the Grid Foresight Lab. The lab's research is the proof; the platform is the product. Every section reinforces: "This isn't another ML startup -- this is a decade of university research, productized."

## Visual Connection to gridforesight.ca

**MANDATORY:** Before building, the agent MUST use WebFetch to study https://gridforesight.ca/ and understand the lab's current visual identity. The landing page must feel like a natural commercial extension of that site -- same DNA, elevated for conversion.

Key elements to carry forward from the lab site:
- The bubble-G logo (assets provided -- see below)
- The dark background palette (#1a1c20)
- The orange-red accent (#ed4834)
- The tagline spirit: "Tomorrow's Grid Today" / "Solutions for Tomorrow's Grid, Today!"
- The university partnership credibility (University of Calgary)
- Professional energy infrastructure imagery style (solar panels, wind turbines, grid infrastructure)

What to elevate beyond the lab site:
- Bolder typography with massive metric callouts
- Stronger conversion focus (CTAs throughout, not just informational)
- More structured visual hierarchy with clear sections
- A commercial product feel layered on top of academic credibility

## Design Tokens

```css
@theme {
  /* --- Colors --- */

  /* Primary accent: gridforesight.ca's signature orange-red */
  --color-primary: #ed4834;
  --color-primary-hover: #d93c2a;

  /* Secondary accent: electric blue for technical elements */
  --color-secondary: #3b82f6;
  --color-secondary-hover: #2563eb;

  /* Metric highlight: amber for large numbers */
  --color-metric: #f59e0b;
  --color-metric-warm: #f06d38;

  /* Dark backgrounds (matching gridforesight.ca) */
  --color-bg-dark: #0f172a;
  --color-bg-dark-alt: #1a1c20;
  --color-bg-dark-card: #1e293b;

  /* Light backgrounds */
  --color-bg-light: #ffffff;
  --color-bg-light-alt: #f8fafc;
  --color-bg-light-subtle: #f1f5f9;

  /* Neutral scale */
  --color-neutral-50: #f8fafc;
  --color-neutral-100: #f1f5f9;
  --color-neutral-200: #e2e8f0;
  --color-neutral-300: #cbd5e1;
  --color-neutral-400: #94a3b8;
  --color-neutral-500: #64748b;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1e293b;
  --color-neutral-900: #0f172a;
  --color-neutral-950: #020617;

  /* Semantic */
  --color-text-on-dark: #f8fafc;
  --color-text-on-dark-muted: #94a3b8;
  --color-text-on-light: #0f172a;
  --color-text-on-light-muted: #475569;

  /* --- Typography --- */

  /* Display: bold geometric sans for headlines and metrics */
  --font-display: "Manrope", "Satoshi", system-ui, sans-serif;

  /* Body: clean readable sans */
  --font-body: "Inter", "DM Sans", system-ui, sans-serif;

  /* Metrics: tabular monospace for numbers */
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* --- Spacing --- */
  --spacing-unit: 8px;

  /* --- Borders --- */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* --- Layout --- */
  --max-width: 1280px;
  --max-width-narrow: 768px;
}
```

### Typography Scale

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| Hero metric number | 96-128px | 56-72px | 800 (ExtraBold) | Manrope |
| H1 (hero headline) | 56-72px | 36-44px | 700 (Bold) | Manrope |
| H2 (section title) | 40-48px | 28-32px | 700 (Bold) | Manrope |
| H3 (subsection/card) | 24-28px | 20-24px | 600 (SemiBold) | Manrope |
| Body large | 18-20px | 16-18px | 400 (Regular) | Inter |
| Body | 16px | 16px | 400 (Regular) | Inter |
| Caption/label | 14px | 13px | 500 (Medium) | Inter |
| Metric numbers | 48-64px | 32-40px | 700 (Bold) | JetBrains Mono |
| Metric labels | 14-16px | 13-14px | 500 (Medium) | Inter |
| CTA button | 16-18px | 16px | 600 (SemiBold) | Manrope |

### Color Application Rules

- **Dark sections** (hero, metrics strip, research credibility, final CTA): Background #0f172a to #1a1c20. Text #f8fafc. Accent #ed4834 or #f59e0b for metric highlights.
- **Light sections** (features, before/after, case study, ROI calculator): Background #ffffff or #f8fafc. Text #0f172a. Accent #ed4834 for CTAs, #3b82f6 for technical elements.
- **CTA buttons:** Primary -- #ed4834 background with white text. Hover darkens to #d93c2a. Secondary -- ghost/outline style with #ed4834 border and text.
- **Card backgrounds on dark:** #1e293b with subtle border (#334155).
- **Card backgrounds on light:** #ffffff with subtle shadow and #e2e8f0 border.
- **Metric numbers:** Always in accent color (#ed4834, #f59e0b, or #f06d38) -- never in body text color. Use JetBrains Mono for visual weight and alignment.
- **Links on light:** #3b82f6 with underline on hover. Links on dark: #94a3b8 or #f8fafc with underline on hover.

## Mode

Mixed -- dark hero with bold metrics transitioning to light sections for detail, returning to dark for the final CTA. This creates natural visual rhythm and separation.

Section background pattern:
1. Header -- transparent over dark hero
2. Hero -- DARK (#0f172a gradient to #1a1c20)
3. Metrics strip -- DARK (#1a1c20, slightly lighter than hero)
4. Before/after -- LIGHT (#ffffff)
5. Features -- LIGHT ALT (#f8fafc)
6. Research credibility -- DARK (#0f172a)
7. Case study -- LIGHT (#ffffff)
8. ROI calculator -- LIGHT ALT (#f8fafc)
9. Testimonials -- LIGHT (#ffffff)
10. Final CTA -- DARK (#0f172a)
11. Footer -- DARK (#0f172a, darker than CTA via border-top separation)

---

## Sections (in order)

### 1. Header

**Background:** Transparent, positioned over the dark hero. Add subtle backdrop-blur and dark background (#0f172a/80%) on scroll.

**Layout:** Full-width bar, content constrained to max-width (1280px). Logo left, nav center or right, CTA button far right.

**Logo:** Use the bubble-G small logo (`bubble-G-small.png`, 92x91px). Display at ~36px height in the header. Link to the current page (homepage).

**Nav items (4 max):**
- "Platform" (anchor to features section)
- "Research" (anchor to research credibility section)
- "Results" (anchor to case study section)
- "ROI" (anchor to ROI calculator section)

**CTA button:** "Go to App" -- solid #ed4834 background, white text, pill-shaped (border-radius: 9999px). Links to https://app.gridforesight.com

**Mobile (<768px):** Hamburger menu. Logo + hamburger only. CTA moves inside the mobile menu as the first item.

**Sticky behavior:** Fixed to top on scroll with backdrop-blur transition.

### 2. Hero

**Background:** Dark gradient from #0f172a (top) to #1a1c20 (bottom). Optional: very subtle grid pattern overlay at 3-5% opacity to hint at "grid" without being distracting.

**Layout:** Centered, single column. Massive metric number as the visual centerpiece.

**Content (top to bottom):**

1. **Eyebrow tag** (above headline):
   - Text: "Backed by 10+ Years of University Research"
   - Style: Small caps or uppercase, 14px, letter-spacing 0.05em, color #94a3b8, with a small icon (Lucide `flask-conical` or `graduation-cap`) to the left.

2. **Hero metric (THE centerpiece):**
   - Text: "40%"
   - Style: 96-128px on desktop, 56-72px on mobile. ExtraBold (800). Color #ed4834. Font: Manrope. This number must dominate the viewport.
   - Below the number: "More Accurate Forecasts" in 40-56px, Bold (700), white (#f8fafc). Same line or immediately below the percentage.
   - Combined visual: The "40%" and "More Accurate Forecasts" together form one massive statement that reads as a single thought.

3. **Subheadline:**
   - Text: "GridForesight turns a decade of peer-reviewed grid research into production ML models that outperform industry-standard forecasting methods."
   - Style: 18-20px, Regular (400), color #94a3b8. Max-width 640px, centered. Line-height 1.6.

4. **CTA group (centered, horizontal on desktop, stacked on mobile):**
   - Primary: "Go to App" -- solid #ed4834, white text, pill shape, 16px semibold. Links to https://app.gridforesight.com. Include a right-arrow icon (Lucide `arrow-right`).
   - Secondary: "See the Research" -- ghost button, #ed4834 border and text, transparent background. Anchors to the research credibility section. Include Lucide `scroll-text` icon.

5. **Micro social proof (below CTAs):**
   - Text: "From the Grid Foresight Lab at the University of Calgary"
   - Style: 14px, color #64748b. Optional: small University of Calgary text reference or "est. 2014" badge.

**Animation:** Staggered fade-in-up on load. Metric number fades in first (0ms), headline second (150ms), subheadline third (300ms), CTAs fourth (450ms). Duration 500ms each, ease-out. Respect `prefers-reduced-motion`.

**Word counts:** Eyebrow: 7 words. Metric + headline: 5 words. Subheadline: ~22 words. Micro proof: ~10 words.

### 3. Metrics Strip

**Background:** Dark (#1a1c20). Separated from hero by a subtle 1px border-top (#334155) or a slight background shift.

**Layout:** 4 metrics in a horizontal row on desktop (equal width). 2x2 grid on tablet. Single column (stacked) on mobile.

**Metrics (each has: big number + label):**

| Number | Label | Icon (Lucide) |
|--------|-------|---------------|
| 40% | Lower Forecast Error | `trending-down` |
| 1M+ | Predictions Served | `zap` |
| 10+ | Years of Grid Research | `calendar-clock` |
| 50+ | Peer-Reviewed Publications | `file-text` |

**Number style:** 48-64px, Bold (700), JetBrains Mono, color #f59e0b (amber). Tabular numbers (`font-variant-numeric: tabular-nums`).

**Label style:** 14-16px, Medium (500), Inter, color #94a3b8. Below the number.

**Icon style:** 24px, color #64748b. Above or to the left of the number. Lucide icons.

**Optional enhancement:** Subtle count-up animation on scroll-into-view (CSS counter or minimal JS island with `client:visible`). If JS is not justified, static numbers are fine.

**Spacing:** Generous vertical padding (80px top, 80px bottom). Each metric card has subtle vertical dividers between them on desktop (1px #334155).

### 4. Before/After Comparison

**Background:** Light (#ffffff).

**Section headline:**
- Text: "The Forecasting Gap"
- Style: H2, centered, color #0f172a.
- Supporting text: "See what changes when peer-reviewed ML models replace legacy forecasting."
- Style: 18px, color #475569, max-width 640px, centered.

**Layout:** Two-column side-by-side on desktop (each column ~50%). Stacked on mobile (before on top, after below).

**Left column: "Without GridForesight"**
- Header: Red-tinted label or badge with Lucide `x-circle` icon. Text color #ef4444 (red).
- Background: Light card (#f8fafc) with subtle red-tinted left border (4px #fecaca).
- Bullet points (4-5 items, each with `x` or `minus` icon in #ef4444):
  - "Statistical models plateau at 15-20% error rates"
  - "Manual feature engineering takes weeks per model"
  - "No systematic approach to weather-grid interactions"
  - "Retraining requires data science team intervention"
  - "Forecast degradation goes undetected for months"

**Right column: "With GridForesight"**
- Header: Green-tinted label or badge with Lucide `check-circle` icon. Text color #22c55e (green).
- Background: Light card (#f8fafc) with subtle green-tinted left border (4px #bbf7d0).
- Bullet points (4-5 items, each with `check` icon in #22c55e):
  - "ML models achieve 40% lower forecast error consistently"
  - "Automated pipeline deploys models in hours, not weeks"
  - "Research-proven feature sets capture grid dynamics"
  - "Continuous retraining adapts to seasonal patterns"
  - "Real-time monitoring flags accuracy degradation instantly"

**Bottom connector:** A centered arrow or transition element between the comparison and the next section. Optional: a single-line callout: "The difference? A decade of research, productized." in italic, color #475569.

**Word counts:** Section headline: 3 words. Supporting text: ~14 words. Each bullet: 8-12 words. Bottom callout: 7 words.

### 5. Features (Outcomes-First)

**Background:** Light alt (#f8fafc).

**Section headline:**
- Text: "Outcomes, Not Features"
- Style: H2, centered, color #0f172a.
- Supporting text: "Every capability maps to a measurable business result."
- Style: 18px, color #475569, centered.

**Layout:** 2x2 bento grid on desktop (uniform cards). 2-column on tablet. Single column on mobile. Cards have white (#ffffff) backgrounds, subtle shadow, 8px border-radius.

**Cards (4 total -- each card = Outcome + How):**

**Card 1: Accuracy**
- Icon: Lucide `target` (48px, color #ed4834)
- Outcome headline: "40% More Accurate Forecasts"
- Description: "Research-proven ML architectures trained on grid-specific features outperform traditional statistical methods across load, solar, and wind forecasting."
- Metric badge: "40% ↓ forecast error" -- small pill badge in #ed4834/10% background with #ed4834 text.

**Card 2: Speed**
- Icon: Lucide `rocket` (48px, color #3b82f6)
- Outcome headline: "Models Deploy in Hours, Not Weeks"
- Description: "Automated pipelines handle data ingestion, feature engineering, training, and validation. Your team configures; the platform executes."
- Metric badge: "60% ↑ deployment speed"

**Card 3: Cost Reduction**
- Icon: Lucide `piggy-bank` (48px, color #22c55e)
- Outcome headline: "25% Lower Operational Costs"
- Description: "Better forecasts mean fewer imbalance penalties, optimized reserves, and reduced manual intervention. The savings compound across your portfolio."
- Metric badge: "25% ↓ operational costs"

**Card 4: Reliability**
- Icon: Lucide `shield-check` (48px, color #f59e0b)
- Outcome headline: "Sub-Minute Predictions at Scale"
- Description: "Production-grade infrastructure delivers forecasts on demand. Continuous monitoring ensures models stay accurate as grid conditions evolve."
- Metric badge: "< 60s prediction latency"

**Card structure:** Icon top-left. Outcome headline (H3, 24px, Bold, #0f172a). Description (16px, Regular, #475569, line-height 1.6). Metric badge bottom of card (inline-block pill). Padding 32px.

**Word counts:** Section headline: 3 words. Supporting text: 8 words. Card headline: 4-7 words. Card description: 20-30 words.

### 6. Research Credibility

**Background:** Dark (#0f172a).

**Section headline:**
- Text: "Built on a Foundation of Published Research"
- Style: H2, centered, color #f8fafc.
- Supporting text: "GridForesight's algorithms aren't just tested in production. They're peer-reviewed, published, and validated by the academic community."
- Style: 18px, color #94a3b8, max-width 640px, centered.

**Layout:** Three-column on desktop. Stacked on mobile.

**Column 1: Publications**
- Large number: "50+" in JetBrains Mono, 64px, Bold, color #f59e0b.
- Label: "Peer-Reviewed Publications" in 16px, Medium, #94a3b8.
- Supporting: "Published in IEEE, Elsevier, and top energy journals. Covering load forecasting, renewable prediction, and grid optimization."
- Icon: Lucide `book-open` (32px, #64748b).

**Column 2: Lab History**
- Large number: "10+" in JetBrains Mono, 64px, Bold, color #f59e0b.
- Label: "Years of Grid Research" in 16px, Medium, #94a3b8.
- Supporting: "The Grid Foresight Lab at the University of Calgary has been advancing energy forecasting since 2014. GridForesight is the commercial embodiment of that work."
- Icon: Lucide `microscope` (32px, #64748b).

**Column 3: University Partnership**
- Large number: "UCalgary" in Manrope, 36px, Bold, color #f59e0b.
- Label: "Research Partnership" in 16px, Medium, #94a3b8.
- Supporting: "Ongoing collaboration with the Schulich School of Engineering ensures GridForesight stays at the frontier of energy forecasting methodology."
- Icon: Lucide `graduation-cap` (32px, #64748b).

**Bottom element:** A centered link: "Explore the Grid Foresight Lab" with right-arrow icon, linking to https://gridforesight.ca/. Style: #ed4834, 16px, semibold. This is the primary connection point to the lab site.

**Word counts:** Section headline: 8 words. Supporting text: ~20 words. Each column supporting: 20-30 words.

### 7. Case Study Placeholder

**Background:** Light (#ffffff).

**Section headline:**
- Text: "Results in Production"
- Style: H2, centered, color #0f172a.

**Layout:** Single featured case study card spanning full width. On desktop: left side has metrics, right side has narrative. On mobile: stacked (metrics on top, narrative below).

**Case study card:**
- Card background: #f8fafc, 8px border-radius, subtle shadow.
- Top label: "CASE STUDY" in uppercase, 13px, letter-spacing 0.05em, color #64748b.

**Left/top section (metrics cluster):**
- Company placeholder: "Regional Power Cooperative" (fictional but realistic).
- Portfolio: "2.4 GW across 12 generation assets"
- Three key metrics in large type:
  - "38%" / "reduction in forecast error" (number in #ed4834, JetBrains Mono 48px)
  - "$2.4M" / "annual savings from reduced imbalance penalties" (number in #22c55e, JetBrains Mono 48px)
  - "3 weeks" / "from data upload to production forecasts" (number in #3b82f6, JetBrains Mono 48px)

**Right/bottom section (narrative):**
- Headline: "From Legacy Models to Research-Grade Forecasting"
- Body (60-80 words): "A regional power cooperative managing 2.4 GW of mixed generation was losing $6M+ annually to imbalance penalties driven by inaccurate load and renewable forecasts. After deploying GridForesight's ML pipeline, their forecast error dropped by 38% within the first quarter. The platform's automated retraining adapted to seasonal shifts that had previously required manual model updates every few months."
- Attribution: "-- Operations Director, Regional Power Cooperative" (placeholder, clearly realistic)

**Bottom CTA:** "See More Results" ghost button, anchors to a placeholder or future case studies page. Style: #ed4834 border, #ed4834 text, pill shape.

### 8. ROI Calculator (Static Mockup)

**Background:** Light alt (#f8fafc).

**Section headline:**
- Text: "Calculate Your Potential Savings"
- Style: H2, centered, color #0f172a.
- Supporting text: "Energy portfolios using research-grade forecasting models see measurable returns within the first quarter."
- Style: 18px, color #475569, centered.

**Layout:** Centered card (max-width 800px), white background, 8px radius, shadow.

**Card content (static mockup -- no actual calculator logic):**

**Input area (visual only, non-functional):**
- Label: "Your Portfolio Size"
- Styled input field showing placeholder: "2,400 MW" in a bordered input box.
- Below: "Average annual energy spend" with placeholder "$48M" in another styled input.
- These are purely visual -- styled to look like inputs but are static elements.

**Output area (displayed as if calculated):**
- Divider line.
- "Your Estimated Annual Savings" label above.
- Large number: "$2.4M" in JetBrains Mono, 64px, Bold, color #22c55e.
- Below: "based on 25% reduction in imbalance costs for a 2.4 GW portfolio" in 14px, color #475569.
- Disclaimer: "* Estimates based on published case study results. Actual savings depend on portfolio composition, market conditions, and current forecasting baseline." in 13px, color #94a3b8, italic.

**Bottom CTA:** "Talk to Us About Your Portfolio" -- solid #ed4834, white text, pill shape. Links to mailto:info@gridforesight.ca or a contact anchor.

**Note to agent:** This is a STATIC MOCKUP only. No JavaScript required. Style the inputs and output as visual elements. The goal is to create the visual impression of an interactive tool to prime conversion intent, while the actual engagement happens through the CTA.

### 9. Testimonials with Metrics

**Background:** Light (#ffffff).

**Section headline:**
- Text: "What Operators Say"
- Style: H2, centered, color #0f172a.

**Layout:** 3 testimonial cards in a row on desktop. Carousel/swipe on mobile (or stacked -- agent's choice for best mobile UX).

**Card design:** White (#ffffff) background, 8px radius, subtle shadow. Top: large opening quotation mark in #ed4834/15% opacity as a decorative element.

**Testimonials (placeholder content -- realistic but fictional):**

**Testimonial 1:**
- Quote: "We replaced three separate forecasting tools with GridForesight. Our MAPE dropped from 12% to 7.2% in the first month. The research foundation behind the models makes all the difference."
- Metric highlight: "7.2% MAPE" styled as a bold inline badge (#ed4834).
- Attribution: "Maria Chen, VP Operations" / "Pacific Energy Partners" (placeholder)

**Testimonial 2:**
- Quote: "The platform paid for itself in the first quarter. Fewer imbalance penalties, better reserve optimization, and our team spends zero time on model maintenance."
- Metric highlight: "First-quarter ROI" styled as a bold inline badge (#22c55e).
- Attribution: "James Okafor, Head of Grid Analytics" / "Midwest Renewable Co." (placeholder)

**Testimonial 3:**
- Quote: "I've published with the Grid Foresight Lab. Seeing those methods in a production platform that our operations team can actually use -- that's the bridge the industry needed."
- Metric highlight: "Research to production" styled as a bold inline badge (#3b82f6).
- Attribution: "Dr. Sarah Lindqvist, Chief Scientist" / "Nordic Grid Solutions" (placeholder)

**Card structure:** Quote (16px, Regular, #334155, line-height 1.6, max 60 words). Metric badge (inline pill). Divider. Attribution: Name (16px, SemiBold, #0f172a) + Role/Company (14px, Regular, #64748b).

### 10. Final CTA

**Background:** Dark (#0f172a). Full-width section.

**Layout:** Centered, single column. Generous vertical padding (120px top and bottom).

**Content:**

1. **Repeated metric (callback to hero):**
   - Text: "40% More Accurate."
   - Style: 48-64px, Bold (700), Manrope, color #ed4834.

2. **Headline:**
   - Text: "Ready to see what research-grade forecasting does for your grid?"
   - Style: 32-40px, Bold (700), Manrope, color #f8fafc.

3. **CTA group (centered):**
   - Primary: "Go to App" -- solid #ed4834, white text, pill shape. Links to https://app.gridforesight.com. Include right-arrow icon.
   - Secondary: "Explore the Lab" -- ghost button, #ed4834 border and text. Links to https://gridforesight.ca/.

4. **Trust line (below CTAs):**
   - Text: "From the Grid Foresight Lab -- 50+ publications, 10+ years, one production platform."
   - Style: 14px, color #64748b.

**Word counts:** Metric callback: 3 words. Headline: ~13 words. Trust line: ~12 words.

### 11. Footer

**Background:** Dark (#0f172a), separated from final CTA section by a subtle 1px border-top (#1e293b).

**Layout:** 3-column on desktop. Stacked on mobile.

**Column 1: Brand**
- Logo: Use `bubble-G-logo-footer.png` (250x130px). Display at ~120px width.
- Below logo: "ML-powered energy forecasting, proven by university research."
- Style: 14px, color #64748b, max-width 280px.

**Column 2: Links**
- "Platform" section:
  - "Go to App" (https://app.gridforesight.com)
  - "Platform Features" (anchor to features section)
  - "ROI Calculator" (anchor to ROI section)
- "Research" section:
  - "Grid Foresight Lab" (https://gridforesight.ca/) -- REQUIRED link
  - "Publications" (https://gridforesight.ca/ -- publications section)
- Style: 14px, color #94a3b8. Section labels in 13px, uppercase, letter-spacing 0.05em, color #64748b.

**Column 3: Contact**
- "Contact" label.
- Email: info@gridforesight.ca (mailto link)
- Address: "University of Calgary, Calgary, Alberta"
- LinkedIn: link to Grid Foresight Lab LinkedIn (icon + text).

**Bottom bar (below columns):**
- Left: "© 2026 GridForesight. All rights reserved."
- Right: "Privacy Policy" + "Terms of Service" (placeholder links).
- Style: 13px, color #64748b. Separated by a 1px border-top (#1e293b).

---

## Technical Requirements

- **Stack:** Astro 5 + Tailwind CSS v4 + Biome
- **Output:** Static (`output: 'static'`). No SSR.
- **Client JS:** Zero unless an interactive island is justified (e.g., metric count-up animation via `client:visible`). The ROI calculator section is a STATIC MOCKUP -- no JS.
- **Lighthouse:** All four categories 95+. Astro static should reach 98-100 on Performance.
- **WCAG 2.2 AA:** Full compliance. Semantic HTML, contrast ratios verified, alt text on all images, keyboard navigation, skip-to-content link, `prefers-reduced-motion` support.
- **Responsive:** Mobile-first. Tested from 320px to 1920px. Breakpoints at 640px (sm), 768px (md), 1024px (lg), 1280px (xl).
- **SEO:**
  - Page title: "GridForesight -- ML-Powered Energy Forecasting, Proven by Research" (under 55 chars: "GridForesight | Research-Backed Energy Forecasting")
  - Meta description: "40% more accurate energy forecasts powered by 10+ years of university research. ML models for load, solar, and wind forecasting." (under 155 chars)
  - Open Graph image: 1200x630px (provide or generate)
  - Canonical URL set
  - Structured heading hierarchy (single H1)
  - Sitemap.xml via `@astrojs/sitemap`
  - robots.txt
- **Icons:** Lucide exclusively. Inline SVG, `currentColor` for color inheritance. Consistent sizing: 20-24px inline, 32-48px feature cards.
- **Fonts:** Self-host Manrope, Inter, and JetBrains Mono. Preload critical font files. Use `font-display: swap`.
- **Images:** Use Astro `<Image />` component for all raster images. Explicit width/height. Lazy loading below fold. Preload hero LCP image if applicable.
- **Tailwind v4:** CSS-first configuration via `@theme` block. No `tailwind.config.js`. Design tokens defined in global CSS.
- **Biome:** Handles all formatting and linting. No Prettier, no ESLint. Indent: tabs. Line width: 100.

## File Structure

```
src/
  layouts/
    BaseLayout.astro        # <html>, <head>, meta, fonts, @theme, <slot />
  components/
    Header.astro
    Hero.astro
    MetricsStrip.astro
    BeforeAfter.astro
    Features.astro
    ResearchCredibility.astro
    CaseStudy.astro
    RoiCalculator.astro
    Testimonials.astro
    FinalCta.astro
    Footer.astro
  pages/
    index.astro             # Composes layout + all sections in order
  styles/
    global.css              # @import "tailwindcss", @theme tokens, base styles
  assets/
    images/
      bubble-G-small.png
      bubble-G-logo-full.png
      bubble-G-logo-footer.png
public/
  favicon.svg              # Bubble-G as favicon
  favicon.ico
  og-image.png             # 1200x630 OG image
  robots.txt
```

## Assets Provided

| Asset | Path | Usage |
|-------|------|-------|
| Full logo | `.claude/context/assets/bubble-G-logo-full.png` (2305x1200px) | Hero or about section if needed |
| Header icon | `.claude/context/assets/bubble-G-small.png` (92x91px) | Header nav logo |
| Footer logo | `.claude/context/assets/bubble-G-logo-footer.png` (250x130px) | Footer brand column |

Copy these into `src/assets/images/` and use Astro's `<Image />` component to serve them optimized.

**Do NOT use external image URLs.** All images must be local.

**Generate SVG illustrations for:**
- Subtle grid pattern for hero background (abstract node-and-line pattern suggesting an electrical grid, 5% opacity)
- Decorative quotation mark for testimonial cards (large, accent-colored, low opacity)

## Explicitly DO NOT

### Visual
- Do NOT use generic stock photos of people in meetings, shaking hands, or pointing at screens.
- Do NOT use purple/blue gradient on white background (the #1 "AI-generated website" fingerprint).
- Do NOT add decorative floating circles, random gradient orbs, or blurred background blobs.
- Do NOT use more than the 3 font families specified (Manrope, Inter, JetBrains Mono).
- Do NOT use Inter for headlines. Manrope is the display font.
- Do NOT make the hero image-heavy -- the METRIC NUMBER is the hero visual.
- Do NOT use Lorem ipsum or any placeholder text. All copy is provided in this brief.

### Technical
- Do NOT create a `tailwind.config.js` file. Tailwind v4 uses CSS-first `@theme`.
- Do NOT import React, Vue, or Svelte components. Use `.astro` files for everything.
- Do NOT use `client:load` on any island. Prefer `client:visible` or `client:idle`.
- Do NOT add Prettier or ESLint. Biome handles formatting and linting.
- Do NOT use inline styles. Use Tailwind utility classes.
- Do NOT use `!important`.
- Do NOT add animation libraries (GSAP, Framer Motion, etc.). CSS `@keyframes` and transitions only.
- Do NOT base64-encode images or use icon fonts.
- Do NOT serve unoptimized images from `public/`. Use `src/assets/` + `<Image />`.

### Content
- Do NOT use buzzword soup: "AI-powered next-generation scalable enterprise platform." Write like a human.
- Do NOT describe features without business outcomes. Every feature claim must connect to a measurable result.
- Do NOT use superlatives without backing them: no "best-in-class" or "world-leading."
- Do NOT invent company names for testimonials beyond the placeholders provided. If adding more, mark them clearly as "[Placeholder]."

## Reference Sites

| Site | What to study | What to borrow |
|------|--------------|----------------|
| [gridforesight.ca](https://gridforesight.ca/) | Visual identity, brand colors, logo, tone, lab credibility | Color palette, logo assets, university partnership framing, "Tomorrow's Grid Today" spirit |
| [datadoghq.com](https://datadoghq.com/) | Metric-heavy hero, bold outcome numbers, integration logos | How they make numbers the star of the page, the visual weight of metric callouts |
| [stripe.com](https://stripe.com/) | Before/after comparison sections, enterprise credibility signals | Clean comparison layout, how they layer trust through design quality |
| [retool.com](https://retool.com/) | ROI-focused messaging, use-case driven approach | How they frame value in business terms, not technical terms |

---

## Animation Specifications

All animations must respect `prefers-reduced-motion: reduce` -- when this media query matches, disable all animations and show content immediately.

### Hero entrance
- Elements fade in from 20px below, opacity 0 to 1.
- Stagger: metric number (0ms) -> headline (150ms) -> subheadline (300ms) -> CTAs (450ms).
- Duration: 500ms each. Easing: ease-out.

### Scroll-triggered sections
- Each section fades in from 20px below when it enters the viewport.
- Trigger: when section is 15-20% visible.
- Duration: 400ms. Easing: ease-out.
- Use CSS `@keyframes` with `animation-play-state` controlled by an IntersectionObserver (minimal JS) or a pure CSS approach using `animation-timeline: view()` if browser support is sufficient.

### Metric numbers (optional)
- Count-up from 0 to final value over 1.5 seconds when the metrics strip enters the viewport.
- If implementing: use a minimal Astro island with `client:visible`. Keep the JS under 1KB.
- If not implementing: static numbers are acceptable.

### Hover states
- Buttons: brightness increase to 110%, subtle shadow expansion. Transition 200ms ease-out.
- Cards: subtle translateY(-2px) + shadow increase. Transition 200ms ease-out.
- Links: underline appears. Transition 150ms ease-out.

---

## Content Summary (Quick Reference)

| Element | Exact text |
|---------|-----------|
| Page title | "GridForesight \| Research-Backed Energy Forecasting" |
| Hero eyebrow | "Backed by 10+ Years of University Research" |
| Hero metric | "40%" |
| Hero headline | "More Accurate Forecasts" |
| Hero subheadline | "GridForesight turns a decade of peer-reviewed grid research into production ML models that outperform industry-standard forecasting methods." |
| Primary CTA | "Go to App" |
| Secondary CTA (hero) | "See the Research" |
| Before/after headline | "The Forecasting Gap" |
| Features headline | "Outcomes, Not Features" |
| Research headline | "Built on a Foundation of Published Research" |
| Case study headline | "Results in Production" |
| ROI headline | "Calculate Your Potential Savings" |
| Testimonials headline | "What Operators Say" |
| Final CTA metric | "40% More Accurate." |
| Final CTA headline | "Ready to see what research-grade forecasting does for your grid?" |
| Lab link text | "Explore the Grid Foresight Lab" |
| Lab URL | https://gridforesight.ca/ |
| App URL | https://app.gridforesight.com |
| Contact email | info@gridforesight.ca |
