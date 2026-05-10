# Design System: Evren Ispiroglu — Light Mode

## 1. Visual Theme & Atmosphere

A precision-instrument interface with architectural restraint. The mood is a quiet drafting studio at dawn — warm paper surfaces, hairline structural grids, and deliberate asymmetry. Density at 3 (airy, gallery-like), variance at 6 (asymmetric but never chaotic), motion at 4 (subtle CSS fluidity). The terminal brutality of the original dark theme translates into calm Swiss-industrial clarity: blueprint precision without the glow, command-line logic rendered in ink on paper. Every element is measured, placed, and justified. No decoration survives audit.

## 2. Color Palette & Roles

- **Warm Paper** (#FAF9F6) — Primary background, warm off-white. The canvas.
- **Pure Surface** (#FFFFFF) — Elevated cards, data containers, surface contrast.
- **Architectural Ink** (#18181B) — Primary text. Zinc-900 depth, never pure black.
- **Graphite Secondary** (#6B6B6B) — Descriptions, metadata, captions, muted data.
- **Hairline Rule** (#E5E0DA) — 1px structural borders, grid lines, dividers.
- **Signal Red** (#D41515) — Single accent. CTAs, active nav, focus rings, data highlights. Kept at 85% saturation — intentional, never screaming.
- **Status Green** (#2D8C4A) — Online indicators, availability markers. Muted, credible.
- **Cool Steel** (#F0EDE8) — Hover states, secondary surfaces, subtle depth.

## 3. Typography Rules

- **Display:** Satoshi Bold — Track-tight (-0.03em). Controlled scale hierarchy. Weight drives contrast, not size alone. Used for page headers and primary headlines.
- **Body:** Satoshi Regular — 1.6 leading, 65ch max-width. Graphite secondary for descriptions.
- **Mono:** JetBrains Mono — Code blocks, data labels, timestamps, grid coordinates, /// comment-style metadata, tech tags. This carries the terminal DNA into light mode.
- **Banned:** Inter (overused AI default), generic serif fonts (Times New Roman, Georgia), any display font that reads as "startup marketing."

## 4. Component Stylings

- **Buttons:** Sharp corners (0px radius). Tactile -1px translateY on active press. Signal Red fill for primary actions. Ink outline/ghost for secondary. Monospace labels inside buttons (`>>> VIEW PROJECTS`). No outer glow. No custom cursors. No rounded pills.
- **Cards:** Zero border radius. 1px Hairline Rule border. Elevated via subtle Cool Steel background shift, never shadow. Used only when information hierarchy demands separation.
- **Data Rows:** Horizontal rules between label-value pairs. Label in monospace graphite left, value in body ink right. The signature information-display pattern.
- **Section Headers:** `/// LABEL` prefix in monospace graphite, followed by a 1px hairline rule extending to the edge. The visual signature of the system.
- **Tech Tags:** 1px bordered chips, monospace 10px type. Graphite border + graphite text for default, Signal Red border + red text for primary, Status Green for active indicators.
- **Inputs:** Label above in monospace, input with 1px border, focus ring in Signal Red at 2px offset. Error text below in Signal Red. No floating labels.
- **Navigation:** Sidebar with active-state left border accent (2px Signal Red). Monospace labels. Collapsible to icon-only. Active item receives Signal Red left-border + subtle accent background tint.
- **Loaders:** Skeletal shimmer matching exact grid dimensions. Monospace progress: `[ LOADING... ]`.
- **Empty States:** Terminal-style stamps: `[ NO DATA AVAILABLE ]` in monospace, centered, inside bordered container.

## 5. Layout Principles

- CSS Grid-first. No flexbox `calc()` hacks. No percentage math for layout.
- Asymmetric split for major sections — never fully centered. Content anchors to a structural grid with deliberate offsets.
- Max-width containment: 1200px for content, full-bleed structural lines extending to viewport edges.
- Full-height sections: `min-h-[100dvh]` — never `h-screen` (iOS Safari collapse).
- Section vertical spacing: `clamp(4rem, 10vw, 8rem)` — generous, even, breathing.
- Sidebar: fixed left, 256px expanded / 64px collapsed. Content area right-offset accordingly.
- Sharp borders define spatial zones. No overlapping elements. Every element has clear spatial boundaries.

## 6. Motion & Interaction

- Spring physics: stiffness 130, damping 24 — crisp, architectural rebound. No linear easing.
- Staggered cascade reveals on lists and grids (25ms delay per item). Content materializes with intention.
- Sidebar collapse/expand: spring-driven width transition. Icons center-align smoothly.
- Hover states: instant background shift to Cool Steel. No transition delays on hover — responsive, not sluggish.
- Accent elements: subtle opacity pulse on Signal Red indicators (85% → 100%, 4s cycle). Understated, not distracting.
- Animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`. Hardware-accelerated only.
- Page transitions: none. This is a tool, not a cinema. Content appears. No fade-in-page nonsense.

## 7. Anti-Patterns (Banned)

- No rounded corners anywhere — zero radius. Every edge is architectural.
- No emojis. This is a precision instrument, not a chat message.
- No Inter font. Overused AI default. Satoshi carries the identity.
- No serif fonts. This is an engineering portfolio, not a literary journal.
- No pure black (#000000). Architectural Ink (#18181B) is the darkest value.
- No neon/outer glow shadows. No box-shadow at all — elevation is structural.
- No gradients on text, buttons, or backgrounds. Flat, honest materials.
- No custom mouse cursors. The OS cursor is fine.
- No overlapping elements. Clean spatial separation always.
- No centered Hero sections. Asymmetric offset or stacked-left.
- No 3-column equal card layouts. Asymmetric grids or single-column data rows.
- No glassmorphism, blur effects, or frosted glass. Zero.
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
- No filler UI text ("Scroll to explore", scroll arrows, bouncing chevrons).
- No fake metrics or round numbers. Real data or nothing.
- No generic placeholder names ("John Doe", "Acme").
- No purple/blue AI aesthetic. Signal Red and Status Green only.
- No carousels, sliders, or auto-rotating content. Static, deliberate information.

## 8. Structural Identity

The system is a calibrated instrument. Hairline rules divide space like a machinist's caliper. Monospace labels annotate every section like blueprint callouts (`/// WRITING ARCHIVE`, `[ NAVIGATION ]`). The sidebar carries unit metadata — UNIT / EI-01, STATUS / ONLINE, REV 2.6.1 — treating the site as a deployed system, not a decorated page.

This is a backend engineer's portfolio. It communicates not through decoration but through precision, structure, and the confidence to let information breathe. Warm paper makes it human. Hairline rules and mono labels make it credible. Signal Red makes it decisive. Nothing is accidental.
