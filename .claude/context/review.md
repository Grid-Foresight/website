# UI/UX Review: Lab-Backed Outcomes Landing Page

> Reviewed against the design brief (`landing.md`) and UI/UX best-practices research (`ui-ux-best-practices.md`).
> Date: 2026-03-09

---

## Scorecard

| Criteria | Score | Notes |
|----------|:-----:|-------|
| Visual clarity | 7 | Hierarchy is strong in the hero (metric dominates, staggered animation guides the eye). Below the fold, sections blend together because every section uses the same centered-heading + subtitle + grid pattern. No single section has a visual "anchor" that breaks the rhythm. You can scan the hero in 3 seconds; the middle 5 sections feel interchangeable at a glance. |
| Typography | 8 | Font choices (Manrope display, Inter body, JetBrains Mono metrics) are well-executed and the three-family system is internally consistent. `clamp()` for responsive sizing is correct. Deductions: body text in some sections defaults to `text-base` (16px) without explicit `leading-relaxed`, making certain paragraphs feel tighter than others. The "UCalgary" string in Research Credibility uses `font-display text-5xl` -- it reads as a metric rather than a name, which is slightly confusing at speed-scan. |
| Color usage | 7 | The palette follows the brief and the dark/light alternation creates rhythm. However, the page uses five accent colors (primary red, secondary blue, success green, metric amber, metric-warm orange) which dilutes the 10% accent rule. The metrics strip uses amber, features use four different icon colors, case study uses three different metric colors. The result is a rainbow effect in the mid-page. Reducing to two accent colors (primary red + one secondary) would sharpen focus. |
| Layout & spacing | 7 | Consistent max-width (1280px), consistent `px-6` horizontal padding, and `py-20 lg:py-28` vertical padding create rhythm. But that very consistency makes sections feel monotonous -- every section is `centered heading -> subtitle -> grid of items`. The case study section breaks this pattern nicely with its two-column asymmetric layout. The hero's `min-h-screen` is appropriate. The ROI calculator feels spacious. Deductions for insufficient visual separation between BeforeAfter (white bg) and Features (near-white `#f8fafc` bg) -- the difference is imperceptible on most monitors. |
| CTA effectiveness | 6 | "Go to App" appears in the header, hero, final CTA, and footer -- good repetition. But the label itself is weak for a landing page aimed at conversion. "Go to App" assumes the visitor already has an account. For first-time visitors (the target audience of a landing page), this doesn't communicate what happens next. A label like "Start Forecasting" or "Try GridForesight" would set clearer expectations. The secondary CTAs ("See the Research", "Explore the Lab") send traffic away from conversion. The "Talk to Us About Your Portfolio" CTA on the ROI section is the strongest label on the page but it is buried 70% down. |
| Content quality | 8 | Copy is specific, metric-backed, and avoids buzzword soup. The before/after bullets are concrete and credible. The case study narrative reads authentically. The testimonials include inline metrics. The subheadline in the hero is tight and well-constructed. Deductions: all three testimonials are placeholder/fictional (acknowledged in the brief), and the case study is also fictional -- a visitor may sense this. The ROI calculator section headline says "Calculate" but nothing is interactive, which could create a trust gap. |
| Mobile readiness | 7 | Responsive breakpoints are handled: the hero uses `clamp()` for type, grids collapse to single column, hamburger menu appears below `md`. The CTA group stacks vertically on mobile via `sm:flex-row`. However, the hero's `min-h-screen` on small viewports may push the first scroll-worthy content (metrics strip) far below the fold if the browser chrome is small. The footer's 3-column grid collapsing is handled. The testimonials grid does not convert to a carousel on mobile (they stack, which means 3 full cards to scroll through). No sticky mobile CTA is present, which the research recommends for complex products. |
| Simplicity | 5 | This is where the page loses the most points. 11 sections is too many. The research recommends 5-8 sections for optimal conversion. Several sections are doing overlapping work: MetricsStrip repeats "40%" from the hero; Research Credibility repeats "50+" and "10+" from MetricsStrip; the Case Study repeats "38%" (a near-duplicate of the hero's "40%"); the ROI Calculator shows "$2.4M" which was already cited in the case study; FinalCTA repeats "40% More Accurate" from the hero. The page tells you the same numbers five different ways. The testimonials section (all fictional) adds length without adding trust. |
| Overall impression | 7 | The page feels professional and credible. The dark hero with massive metric is bold and on-brand. The academic credibility angle is unique and well-executed. The page would build trust with a decision-maker. But it overstays its welcome -- by section 8 or 9, a visitor has seen the same proof points recycled. The overall impression shifts from "authoritative" to "padding." A tighter page with the same core message would convert better. |

**Composite: 6.9 / 10** -- a solid foundation with clear identity, but too many sections and too much repetition dilute the impact.

---

## Detailed Findings

### What Works Well

1. **Hero execution is strong.** The "40%" metric as visual centerpiece is exactly the Datadog-style approach the brief calls for. The staggered `animation-delay` creates a natural reveal cadence. The grid-pattern SVG overlay is tasteful at 4% opacity.

2. **Technical implementation is clean.** Tailwind v4 CSS-first config via `@theme`, Astro `<Image />` for assets, `clamp()` for fluid type, CSS `animation-timeline: view()` for scroll reveals (with `@supports` guard), `prefers-reduced-motion` handling in global CSS, skip-to-content link, semantic HTML, proper `aria-label` on hamburger button. This is well-engineered.

3. **BeforeAfter component is effective.** The red/green side-by-side comparison with icon-differentiated bullet lists is the strongest persuasion element on the page after the hero. It names pain concretely.

4. **Case Study layout breaks the grid monotony.** The two-column asymmetric layout (metrics left, narrative right) is the most visually interesting section below the fold.

5. **Design token system is well-organized.** The `global.css` cleanly separates theme tokens, keyframes, base styles, and scroll-reveal logic.

### What Needs Attention

1. **Section count exceeds research recommendations.** 11 sections (header through footer) where research says 5-8 optimal. The page has three separate "proof" sections (MetricsStrip, ResearchCredibility, CaseStudy) that could be one, and two "trust" sections (Testimonials, ROI Calculator) that could be cut or merged.

2. **"40%" is stated 4 times.** Hero metric, MetricsStrip first item, Features Card 1 headline, FinalCTA callback. By the fourth repetition, the number loses its punch. Once in the hero and once in the close is sufficient.

3. **Five accent colors create visual noise.** Red (`#ed4834`), blue (`#3b82f6`), green (`#22c55e`), amber (`#f59e0b`), orange (`#f06d38`). The Features section alone uses all four non-orange accents, one per card icon. This works against the 60-30-10 rule. The research specifically warns that red for CTAs "can signal danger in energy contexts."

4. **No logo bar / partner logos.** The research ranks "Customer logos" as a high-conversion-impact social proof type and recommends placing them "immediately below hero." The page has no logos section. Even university/journal logos (IEEE, Elsevier, University of Calgary seal) would strengthen the academic credibility angle.

5. **CTA label "Go to App" is weak for acquisition.** Landing pages target new visitors. "Go to App" is a retention label (it assumes the visitor is already a user). The research says personalized/specific CTAs perform 202% better than generic ones.

6. **ROI Calculator pretends to be interactive.** The styled "inputs" showing "2,400 MW" and "$48M" look like form fields but are static divs. A visitor will try to click/type in them and feel deceived. Either make it honestly static (remove the input styling, just show the numbers as text) or make it actually interactive.

7. **BeforeAfter and Features have nearly identical background colors.** `bg-bg-light` (#ffffff) followed by `bg-bg-light-alt` (#f8fafc) -- a 1.6% lightness difference. These sections will appear to merge on most displays, breaking the visual separation the brief's "Section background pattern" intended.

8. **No FAQ section.** The research's recommended flow includes FAQ for objection handling. Energy decision-makers evaluating an ML platform will have questions about data security, integration complexity, model explainability, and pricing. An FAQ section would address these without requiring a sales call.

---

## Simplification Suggestions

The goal is fewer sections, stronger impact. Each suggestion preserves the core concept while removing redundancy.

### 1. Remove MetricsStrip -- merge into Hero

**What to remove:** `MetricsStrip.astro` (the 4-metric horizontal strip below the hero).

**Why it is unnecessary:** Three of its four metrics (40%, 10+, 50+) are restated verbatim in ResearchCredibility. The fourth (1M+ Predictions Served) is the only unique data point. The metrics strip adds a full viewport of scrolling before the visitor reaches the persuasion content (BeforeAfter).

**What stays:** Move "1M+ Predictions Served" into the hero's micro social proof line, e.g.: "From the Grid Foresight Lab at the University of Calgary -- 1M+ predictions served." The other three numbers live in their dedicated sections.

### 2. Remove Testimonials section

**What to remove:** `Testimonials.astro` (3 fictional testimonial cards).

**Why it is unnecessary:** All three testimonials are placeholder content with fictional names and companies. Fictional testimonials actively damage trust with sophisticated B2B buyers who will Google "Maria Chen Pacific Energy Partners" and find nothing. The Case Study section already serves the social proof function with a more detailed (and more believable) narrative. The research says 2-3 testimonials increase conversion by 34% -- but only if they are real. Fictional ones do the opposite.

**What stays:** When real testimonials become available, reintroduce them. Until then, the Case Study section carries the social proof load. Alternatively, embed a single short quote within the Case Study section itself.

### 3. Remove ROI Calculator -- merge CTA into Case Study

**What to remove:** `RoiCalculator.astro` (static calculator mockup).

**Why it is unnecessary:** The "calculator" is not interactive. It shows the same $2.4M savings figure that the Case Study already cites. A static mockup of an interactive tool sets expectations it cannot meet. The section adds ~1 full viewport of scroll without introducing new information.

**What stays:** Move the "Talk to Us About Your Portfolio" CTA (the strongest CTA label on the page) into the Case Study section as a bottom CTA. This pairs the strongest proof (case study metrics) with the strongest action label.

### 4. Consolidate Features from 4 cards to 3

**What to simplify:** In `Features.astro`, merge the "Accuracy" card into the overall page narrative (the hero already makes the accuracy claim) and keep Speed, Cost Reduction, and Reliability.

**Why:** Card 1 ("40% More Accurate Forecasts") literally restates the hero headline. It adds no new information. Three cards also fit a cleaner single-row layout on desktop, eliminating the 2x2 grid that creates an awkward "which do I read first" scanning pattern.

**What stays:** 3 feature cards in a single row on desktop: Speed, Cost Reduction, Reliability. Each introduces a genuinely new claim.

### 5. Reduce accent colors to 2

**What to simplify:** Use only `--color-primary` (red) and `--color-metric` (amber) as accents. Drop blue, green, and orange from accent usage.

**Why:** Five accent colors violate 60-30-10 and create a "startup color salad" impression. The brief's brand identity centers on the gridforesight.ca red-orange palette. Blue and green are generic SaaS colors that dilute the brand.

**What stays:** Red for CTAs and primary highlights. Amber for metric numbers (the JetBrains Mono large-number treatment). The before/after section can keep its red/green icons for semantic meaning (bad/good), but feature card icons should all use a single neutral or primary color.

### 6. Make the BeforeAfter-to-Features transition visible

**What to simplify:** Change Features background from `bg-bg-light-alt` (#f8fafc) to `bg-bg-dark` and restyle the cards for dark mode, OR add a visible divider element between the two sections.

**Why:** The current ~1.6% lightness difference is invisible on most monitors. The brief specified distinct backgrounds to create visual rhythm, but the implementation lost that contrast.

**What stays:** Both sections and their content remain. Only the background treatment changes to create perceptible separation.

---

## Proposed Simplified Structure

After applying suggestions 1-4, the page reduces from 11 sections to 7:

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | Header | Transparent/dark | Navigation + "Go to App" CTA |
| 2 | Hero | Dark | "40%" metric + headline + CTA pair + micro proof |
| 3 | BeforeAfter | Light | Pain/solution comparison -- the persuasion engine |
| 4 | Features (3 cards) | Dark | Speed, Cost, Reliability outcomes |
| 5 | Research Credibility | Light | 50+ pubs, 10+ years, UCalgary -- academic authority |
| 6 | Case Study + CTA | Light alt | Proof in production + "Talk to Us About Your Portfolio" |
| 7 | Final CTA | Dark | "40% More Accurate" callback + dual CTAs |
| 8 | Footer | Dark | Links, contact, legal |

This removes ~40% of scroll depth while preserving every unique proof point. The dark/light alternation becomes more pronounced (dark-light-dark-light-light-dark-dark), and each section earns its place by introducing new information.

---

## Priority Ranking

| Priority | Action | Impact |
|----------|--------|--------|
| P0 | Rename "Go to App" CTA to acquisition-focused label | Direct conversion lift |
| P0 | Remove Testimonials (fictional content hurts trust) | Trust improvement |
| P1 | Remove MetricsStrip (redundant with hero + research) | Reduces scroll, sharpens focus |
| P1 | Remove ROI Calculator (static mockup, redundant data) | Removes trust gap from fake interactivity |
| P1 | Reduce accent colors to 2 (red + amber) | Visual cohesion |
| P2 | Consolidate Features to 3 cards | Cleaner scanning, removes hero repetition |
| P2 | Fix BeforeAfter/Features background contrast | Perceptible section separation |
| P3 | Add FAQ section when content is available | Objection handling for enterprise buyers |
| P3 | Add logo bar (IEEE, Elsevier, UCalgary) when assets ready | Instant credibility signal |
