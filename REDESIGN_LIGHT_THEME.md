# Light Theme Redesign Tracker — LOGS Protocol

> **Direction:** Warm-paper coding terminal / application status page aesthetic.  
> **Date:** 2026-05-09  
> **Status:** 🟢 COMPLETE (v1.0 — Light Theme Deployed)

---

## 0. Core Decisions (Resolved Ambiguities)

| #   | Topic             | Decision                                                                                                                                                                                                                                        |
| --- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Mode**          | Light-only. No dark mode. Warm-paper base, never pure white.                                                                                                                                                                                    |
| 2   | **Fonts**         | Headings: JetBrains Mono (bold/extrabold). Body: Inter. Labels/Metadata: JetBrains Mono. Rationale: "Coding-page feel" — mono-forward, IDE/terminal-inspired, cohesive with `///` convention and bracket timestamps. Eliminates Hanken Grotesk. |
| 3   | **LOGS rename**   | Full conceptual rename. Nav label `LOGS`, route `/logs`, page titles, components, file names. Old `/writing` redirects to `/logs`.                                                                                                              |
| 4   | **Timeline**      | Vertical timeline with year-branch nodes and connectors on LOGS listing page.                                                                                                                                                                   |
| 5   | **Code blocks**   | Dark-background code panels (`#18181B` bg, white text, red top accent bar) — contrast element on light page. Matches updated stitch writings-detail.html.                                                                                       |
| 6   | **Radius**        | Zero radius on structural elements (borders, panels, buttons, inputs). Subtle rounding (`0.25rem`) OK on: tag chips, status badges, avatar containers, inline code spans.                                                                       |
| 7   | **Missing pages** | Journey, Workspace, Bookmarks — migrate to light theme following new conventions.                                                                                                                                                               |

---

## 1. Design Direction (Locked)

### Atmosphere

- **Density:** 6/10 — Cockpit-adjacent. Dense metadata grids but airy prose sections.
- **Variance:** 7/10 — Offset asymmetric. Left-aligned headers over centered content, mixed-width grids.
- **Motion:** 4/10 — Fluid CSS transitions. No cinema. Subtle hover shifts, active feedback, scroll-driven progress.

### Identity

The entire website is framed as an **application status page** for a system operator named `EI-01`. Every page reports on some facet of the system — logs, specs, stack inventory, activity feed.

```
EI-01                   /// CORE_SYSTEM
STATUS / ONLINE
SYS / STABLE
UNIT / EI-01
```

### Color Palette

| Token                | Value                          | Role                                                                      |
| -------------------- | ------------------------------ | ------------------------------------------------------------------------- |
| `--background`       | `#FAF9F6` (warm-paper)         | Page substrate. Never pure white.                                         |
| `--surface`          | `#FFFFFF` (pure-surface)       | Elevated panels, cards, code block text                                   |
| `--foreground`       | `#18181B` (architectural-ink)  | Primary text, headings                                                    |
| `--muted-foreground` | `#6B6B6B` (graphite-secondary) | Secondary text, labels, metadata                                          |
| `--border`           | `#E5E0DA` (hairline-rule)      | All borders, dividers, rules                                              |
| `--accent`           | `#D41515` (signal-red)         | **ONLY accent.** Active nav, hover states, progress bars, code accent bar |
| `--status-green`     | `#2D8C4A`                      | System status indicators only                                             |
| `--subtle-bg`        | `#F0EDE8` (cool-steel)         | Hover states, active nav backgrounds                                      |
| `--code-bg`          | `#18181B`                      | Code block background (dark contrast panel)                               |
| `--code-fg`          | `#FFFFFF`                      | Code block text                                                           |
| `--radius`           | `0px`                          | Default. Structural elements.                                             |
| `--radius-sm`        | `0.25rem`                      | Tag chips, badges only                                                    |

**Banned patterns:**

- ❌ Purple/blue AI gradients
- ❌ Multiple accent colors (signal-red only)
- ❌ Warm + cool gray mixing (warm-paper family only)
- ❌ Pure `#000000`
- ❌ Box shadows (borders only)

### Typography Rules

| Token            | Font           | Weight  | Size                     | Use                        |
| ---------------- | -------------- | ------- | ------------------------ | -------------------------- |
| `--font-heading` | JetBrains Mono | 700-800 | `clamp(2rem, 5vw, 4rem)` | Page titles, section heads |
| `--font-body`    | Inter          | 400     | `16px` / `1.6`           | Prose paragraphs           |
| `--font-label`   | JetBrains Mono | 400-500 | `13px` / `1.4`           | Nav, metadata, timestamps  |
| `--font-mono`    | JetBrains Mono | 400     | `13px` / `1.5`           | Code blocks, data          |

**Rules:**

- Headings: Uppercase or sentence case depending on context. Tight tracking `-0.02em`. Line-height `1.1`.
- Labels/Nav: Uppercase, tracking `0.03em`.
- Body: Max-width `65ch`. Line-height `1.6`.
- Code blocks: JetBrains Mono, no syntax highlighting on light bg panels; white text on dark `#18181B` panels.
- Numbers: Tabular figures via `font-variant-numeric: tabular-nums`.

### Global Patterns

| Pattern         | Implementation                                                          |
| --------------- | ----------------------------------------------------------------------- |
| Section headers | `/// LABEL` — mono-label, secondary color, trailing horizontal rule     |
| Timestamps      | `[HH:MM:SS]` or `[YEST]` — mono-label, secondary color                  |
| Status badges   | `[ STABLE ]`, `[ EXPERIMENTAL ]`, `[ MIGRATING ]` — bordered mono chips |
| CTAs            | `>>> ACTION` — mono-label, architectural-ink, red hover                 |
| Dividers        | 1px `hairline-rule` borders only. No shadows.                           |

---

## 2. Files to Modify

### Core Infrastructure

| File                                  | Task                                                                                                                                                     | Status                   |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `app/app.css`                         | Rewrite CSS variables for light theme. Replace dark brutalist tokens with warm-paper palette. Remove CRT/noise overlays. Add light-theme variables.      | ⬜ TODO                  |
| `app/root.tsx`                        | Remove dark-only HTML class. Remove CRT overlay component. Switch font imports (Inter + JetBrains Mono). Add warm-paper body class.                      | ⬜ TODO                  |
| `app/components/layout/sidebar.tsx`   | Light sidebar: warm-paper bg, hairline borders, EI-01 header, mono labels, UNIT/SYS metadata footer. Active nav: signal-red left border + cool-steel bg. | ⬜ TODO                  |
| `app/components/reading-progress.tsx` | Thin signal-red bar. Zero radius.                                                                                                                        | ⬜ TODO (keep, re-theme) |
| `app/lib/post-content.tsx`            | Remove brutalist classes. Use light-theme prose spacing, bordered code blocks.                                                                           | ⬜ TODO                  |

### UI Components (Shadcn)

| File                             | Task                                                                                                                               | Status  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `app/components/ui/button.tsx`   | Light theme: architectural-ink border, warm-paper bg, mono label, red hover state. Zero radius. `active:-translate-y-px` feedback. | ⬜ TODO |
| `app/components/ui/card.tsx`     | Light theme: pure-surface bg, hairline-rule border. Zero radius. No shadows.                                                       | ⬜ TODO |
| `app/components/ui/progress.tsx` | Thin signal-red bar. `h-1`. Zero radius.                                                                                           | ⬜ TODO |

### Brutalist Components → Re-theme

| File                                          | Task                                                                                                                                         | Status  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `app/components/brutalist/section-header.tsx` | Light theme: `/// LABEL` in mono-label graphite-secondary, trailing hairline-rule. Keep SectionHeader, DataRow, Compartment — just re-theme. | ⬜ TODO |
| `app/components/brutalist/ascii-frame.tsx`    | Light theme: TechMarker becomes bordered mono chip with light bg. Keep structure, re-theme.                                                  | ⬜ TODO |
| `app/components/brutalist/crt-overlay.tsx`    | **Remove.** No CRT/noise effects in light theme.                                                                                             | ⬜ TODO |

### MDX / Content

| File                                    | Task                                                                                                                                                                                                                                                       | Status  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `app/components/mdx/mdx-components.tsx` | Light theme code blocks: dark `#18181B` background panel, white text, signal-red top accent bar, `/// IMPLEMENTATION_EXAMPLE` header, COPY_CODE button. Inline code: mono, subtle cool-steel bg, `0.25rem` radius. No rounded corners on block-level code. | ⬜ TODO |

### Routes

| File                                                           | Task                                                                                                                                                                                                                                                                    | Status        |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `app/routes/_index.tsx`                                        | Light home: `/// CORE_SYSTEM` header, `/// IDENTIFICATION` hero with massive title, `/// LATEST_ACTIVITY` terminal feed with `[TIMESTAMP]` rows, `/// SYSTEM_STATE` sidebar (uptime, load, memory), `/// CORE_STACK` tech tags with status badges. Asymmetric 8+4 grid. | ⬜ TODO       |
| `app/routes/about.tsx`                                         | Light about: `/// BIO` section with proper heading font (JetBrains Mono bold) and Inter body. `/// EXPERIENCE` timeline with bordered rows (date                                                                                                                        | role          | company). `/// CONTACT` sidebar. Fix bio paragraph and experience fonts.                                                                                                 | ⬜ TODO |
| `app/routes/projects.tsx`                                      | Light projects: 2-column grid of bordered project cards. Version badges (`v2.1.4_STABLE`, `ARCHIVED`, `ACTIVE_DEV`). `>>> VIEW SOURCE` links. Tech stack chip row per card. Commit count footer.                                                                        | ⬜ TODO       |
| `app/routes/writing._index.tsx` → `app/routes/logs._index.tsx` | **Rename + redesign.** Vertical timeline with year-branch nodes connected by lines. Each entry: date → title → excerpt → tags. `[ LOAD PREVIOUS LOGS ]` button. Header: `/// LOGS ARCHIVE`.                                                                             | ⬜ TODO       |
| `app/routes/writing.$slug.tsx` → `app/routes/logs.$slug.tsx`   | **Rename + redesign.** Article with: `/// METADATA` grid (date, reading time, tags), image with `FIG 1.0` caption layer, dark-background code blocks, styled lists with colored state dots, `PREVIOUS_ENTRY` / `NEXT_ENTRY` nav. Side scroll progress indicator.        | ⬜ TODO       |
| `app/routes/stack.tsx`                                         | Light stack: `/// SPECIFICATION_DOCUMENT` header. Bordered rows: `TECH_NAME`                                                                                                                                                                                            | `DESCRIPTION` | `[ STATUS ]` badge. Sections: `/// 01_LANGUAGES`, `/// 02_DATABASES`, `/// 03_INFRASTRUCTURE`, `/// 04_HARDWARE`. Comfort indicators (`[ STABLE ]`, `[ EXPERIMENTAL ]`). | ⬜ TODO |
| `app/routes/journey.tsx`                                       | Light journey: `/// JOURNEY_LOG` header. Vertical timeline with year-section headers. Each entry: bordered row with date, event, description.                                                                                                                           | ⬜ TODO       |
| `app/routes/workspace.tsx`                                     | Light workspace: Compartment sections for hardware, tools, productivity. Bordered panels with section headers.                                                                                                                                                          | ⬜ TODO       |
| `app/routes/bookmarks._index.tsx`                              | Light bookmarks index: `>>> CATEGORY_NAME` rows with count badges. Bordered category grid.                                                                                                                                                                              | ⬜ TODO       |
| `app/routes/bookmarks.$category.tsx`                           | Light bookmarks category: bordered rows with `>>> VISIT` links. TechMarker tags. Empty state.                                                                                                                                                                           | ⬜ TODO       |
| `app/routes/home.tsx`                                          | **Remove.** Current redirect to `/`. After redesign, `/` _is_ home. Ensure this doesn't conflict.                                                                                                                                                                       | ⬜ TODO       |

---

## 3. New Files to Create

| File                                     | Purpose                                                                                                                | Status  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| `app/components/light/status-badge.tsx`  | `StatusBadge` — bordered mono chip with color variants (stable=green, experimental=gray, migrating=gray, critical=red) | ⬜ TODO |
| `app/components/light/timeline-node.tsx` | `TimelineNode` — year label + vertical line connector + content slot. For LOGS listing and Journey pages.              | ⬜ TODO |
| `app/components/light/code-panel.tsx`    | `CodePanel` — dark background code block with accent top bar, section header, copy button.                             | ⬜ TODO |
| `app/components/light/activity-feed.tsx` | `ActivityFeed` — bordered panel with `[TIMESTAMP] TYPE message` rows. For home page LATEST_ACTIVITY.                   | ⬜ TODO |

---

## 4. Implementation Phases

### Phase 1 — Foundation (CSS + Layout) ✅ COMPLETE

- [x] Rewrite `app.css` with light-theme variables (warm-paper palette, remove dark-only tokens)
- [x] Remove CRT overlay and noise effects from `app/root.tsx`
- [x] Switch font imports: JetBrains Mono (headings + labels) + Inter (body)
- [x] Restructure sidebar as warm-paper fixed panel with EI-01 branding
- [x] Update `routes.ts`: add `/logs` routes, keep `/writing` as redirects

### Phase 2 — UI Components ✅ COMPLETE

- [x] Redesign Button, Card, Progress for light theme
- [x] Re-theme SectionHeader, DataRow, Compartment, TechMarker
- [x] Redesign MDX components (code blocks, inline code, blockquotes, lists)
- [x] Create new light components: StatusBadge, TimelineNode, CodePanel, ActivityFeed

### Phase 3 — Routes ✅ COMPLETE

**High-impact pages:**

- [x] `_index.tsx` — Home with activity feed, system state, core stack
- [x] `logs._index.tsx` — Vertical timeline with LOGS entries
- [x] `logs.$slug.tsx` — Article detail with metadata, code blocks, image captions
- [x] `about.tsx` — BIO + EXPERIENCE with corrected fonts

**Secondary pages:**

- [x] `projects.tsx` — Project cards grid
- [x] `stack.tsx` — Specification document with status badges

**Tertiary pages:**

- [x] `journey.tsx` — Timeline migration
- [x] `workspace.tsx` — Compartment layout migration
- [x] `bookmarks._index.tsx` — Category grid migration
- [x] `bookmarks.$category.tsx` — Bookmark rows migration

### Phase 4 — Polish ✅ COMPLETE

- [ ] Optical alignment pass (icon centering, button text vertical adjustment)
- [x] Hover + active state audit on all interactive elements
- [x] Empty states: no-bookmarks view (bookmarks.$category.tsx)
- [ ] Loading skeletons
- [x] Meta tags audit (titles, descriptions on all routes)
- [x] Route redirects: `/writing` → `/logs`, `/writing/:slug` → `/logs/:slug` (301)
- [x] `scroll-behavior: smooth` on html (in app.css)

---

## 5. Route Migration Map

| Old Route              | New Route              | Action                                      |
| ---------------------- | ---------------------- | ------------------------------------------- |
| `/`                    | `/`                    | Redesign in place (home page)               |
| `/home`                | —                      | Remove (redirect to `/`)                    |
| `/writing`             | `/logs`                | Rename + redesign with timeline             |
| `/writing/:slug`       | `/logs/:slug`          | Rename + redesign with metadata/code panels |
| `/about`               | `/about`               | Redesign in place (fonts fix)               |
| `/projects`            | `/projects`            | Redesign in place (card grid)               |
| `/stack`               | `/stack`               | Redesign in place (spec doc)                |
| `/journey`             | `/journey`             | Redesign in place (timeline)                |
| `/workspace`           | `/workspace`           | Redesign in place (compartment)             |
| `/bookmarks`           | `/bookmarks`           | Redesign in place                           |
| `/bookmarks/:category` | `/bookmarks/:category` | Redesign in place                           |

---

## 6. Font Decision Record

**Problem:** User dislikes Hanken Grotesk on writings headings/body and about page bio/experience. Wants "coding-page feel."

**Decision:** Two-font system.

| Role                | Font           | Weights                     | Rationale                                                                                                                                         |
| ------------------- | -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Headings**        | JetBrains Mono | 700 (Bold), 800 (ExtraBold) | Mono-forward. IDE/terminal aesthetic. Pairs with `///` convention and bracket timestamps. Bold weight gives command presence despite monospacing. |
| **Body**            | Inter          | 400 (Regular), 500 (Medium) | Best-in-class readability. Neutral, pairs well with JetBrains Mono. Widely available.                                                             |
| **Labels/Nav/Data** | JetBrains Mono | 400 (Regular), 500 (Medium) | Cohesive with headings. The "coding" feel comes from mono saturation across the UI.                                                               |

**What changes:**

- Hanken Grotesk removed entirely
- Headings switch from sans-serif to monospace bold
- Body remains sans-serif (Inter) for long-form readability
- All metadata, labels, nav, timestamps, status badges use JetBrains Mono

**Trade-offs acknowledged:**

- Monospace headings are unconventional for marketing pages but align perfectly with the "application status page" framing
- Inter is widely used but chosen deliberately for its pairing properties with JetBrains Mono, not as a default

---

## 7. Key Design Patterns (Reference from stitch-generations)

### Home Page Layout

```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR          │ /// CORE_SYSTEM          [⚙] [🔔]│
│                  │                                   │
│ EI-01            │ /// IDENTIFICATION                │
│ STATUS / ONLINE  │                                   │
│                  │ [Massive headline here]           │
│ ■ HOME           │ [Subtitle paragraph]              │
│   LOGS           │                      [Current Node]│
│   PROJECTS       │                      [us-west-2a] │
│   TECHSTACK      │                      [● ACTIVE]   │
│   ABOUT          │                                   │
│                  │ /// LATEST_ACTIVITY ───────────── │
│ >>> CONTACT      │ ┌────────────────────────────────┐│
│                  │ │ [14:32:01] COMMIT Optimized... ││
│ UNIT / EI-01     │ │ [09:15:44] DEPLOY v2.4.1...    ││
│ SYS / STABLE     │ │ [08:00:00] SYSTEM Backup...    ││
│                  │ │ [YEST]     MERGE  auth-refactor││
│                  │ └────────────────────────────────┘│
│                  │                                   │
│                  │ /// SYSTEM_STATE ──── /// CORE_STACK
│                  │ Uptime    99.99%    [Golang]      │
│                  │ Load Avg  0.14...   [PostgreSQL]  │
│                  │ Memory    32/64GB   [Kubernetes]  │
└─────────────────────────────────────────────────────┘
```

### LOGS Listing (Timeline)

```
/// LOGS ARCHIVE ──────────────────────────────────────

 ● 2023 ──────────────────────────────────────────────
 │
 ├── 2023.10.24  Architectural Patterns in Modern...
 │   An exploration of resilience engineering...
 │   [SYSTEMS] [ARCHITECTURE]
 │
 ├── 2023.08.12  The Illusion of Statelessness
 │   Why true statelessness is a myth...
 │   [BACKEND] [THEORY]
 │
 ● 2022 ──────────────────────────────────────────────
 │
 ├── 2022.11.05  Event Sourcing in Practice
 │   ...content...
 │
 [ LOAD PREVIOUS LOGS ]
```

### LOGS Detail

```
/// METADATA ─────────────────────────────────────────
┌─────────────────────────────────────────────────────┐
│ DATE PUBLISHED    EST. READING TIME                  │
│ 2023.10.24        08 MIN                            │
│                                                     │
│ TAGS  [SYSTEMS] [ARCHITECTURE] [CRITICAL]           │
└─────────────────────────────────────────────────────┘

[Title in JetBrains Mono Bold]

[Introduction in larger Inter, graphite-secondary]

┌─────────────────────────────────────────────────────┐
│ [Image - grayscale, hover → color]                  │
│ FIG 1.0          DEPENDENCY GRAPH VISUALIZATION     │
└─────────────────────────────────────────────────────┘

[Body paragraphs in Inter]

[Code block - dark panel with red accent top bar]
┌─────────────────────────────────────────────────────┐
│ /// IMPLEMENTATION_EXAMPLE              COPY_CODE   │
│ func ProcessOrder(ctx context.Context, ...) error { │
│     inStock, err := inventoryClient.Check(...)      │
│     ...                                             │
└─────────────────────────────────────────────────────┘

[Styled list with state dots]
│ ● STATE: CLOSED - Normal operation.
│ ● STATE: OPEN - Threshold exceeded.
│ ● STATE: HALF-OPEN - Testing recovery.

◄ PREVIOUS_ENTRY                    NEXT_ENTRY ►
```

### About Page

```
/// BIO ──────────────────────────────────────────────

[Headline in JetBrains Mono Bold]
[Bio paragraph in Inter - the fix]

/// EXPERIENCE ────────────────────────────────────────

┌──────────────────────────────────────────────────────┐
│ 2021 — PRESENT  │ Senior Systems Engineer            │
│                 │ Nexus Core Technologies             │
├──────────────────────────────────────────────────────┤
│ 2018 — 2021     │ Full-Stack Developer               │
│                 │ Obelisk Frameworks                  │
└──────────────────────────────────────────────────────┘

/// CONTACT ───────────────────────────────────────────
┌──────────────────────────────────────────────────────┐
│ LOC    SAN FRANCISCO, CA                             │
│ MAIL   SYS@EI-01.NET                                │
│ PGP    0x8F9B2C1A                                    │
│                                                      │
│ [ >>> SEND MESSAGE ]                                 │
└──────────────────────────────────────────────────────┘
```

---

## 8. Anti-Pattern Checklist (Audit After Implementation)

- [ ] No Inter as heading font (JetBrains Mono only for headings)
- [ ] No Hanken Grotesk anywhere
- [ ] No pure `#000000` or `#ffffff` as page background (warm-paper only)
- [ ] No purple/blue gradients
- [ ] No box shadows (borders only)
- [ ] No rounded corners on structural elements
- [ ] No `height: 100vh` (use `min-height: 100dvh`)
- [ ] No centered hero sections
- [ ] No 3-equal-card feature rows
- [ ] No generic circular spinners (skeleton loaders)
- [ ] No AI copywriting cliches
- [ ] No Lorem Ipsum
- [ ] No missing hover/active/focus states

---

## 9. Success Criteria

1. Every page reads as an application status panel, not a marketing website
2. `/// SECTION_HEADER` convention used consistently across all pages
3. JetBrains Mono headings + Inter body produces cohesive "coding page" feel
4. Signal-red is the only accent color anywhere
5. All borders use hairline-rule warm gray; zero shadows
6. LOGS timeline renders as connected vertical nodes with year branches
7. Code blocks are dark contrast panels with red accent bar
8. Image captions follow `FIG X.0 — DESCRIPTION` format
9. `/writing` routes redirect cleanly to `/logs`
10. No dead links, no missing states, no accessibility gaps
