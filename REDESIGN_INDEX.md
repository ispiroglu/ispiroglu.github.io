# Brutalist Redesign Tracker — Tactical Telemetry

> **Direction:** Dark military terminal / aerospace HUD aesthetic.  
> **Date:** 2026-05-09  
> **Status:** 🟢 COMPLETE (v1.0 — Finalized)

---

## 1. Design Direction (Locked)

| Token              | Value                      | Usage                                   |
| ------------------ | -------------------------- | --------------------------------------- |
| `--background`     | `#0A0A0A`                  | CRT deactivated, avoid pure `#000`      |
| `--foreground`     | `#EAEAEA`                  | White phosphor primary text             |
| `--accent`         | `#E61919`                  | Aviation/hazard red — **ONLY accent**   |
| `--terminal-green` | `#4AF626`                  | Single status indicator only (optional) |
| `--border`         | `#333333`                  | Visible compartment borders             |
| `--muted`          | `#666666`                  | Secondary / disabled text               |
| `--font-header`    | Inter Extra Bold / Black   | Macro-typography, uppercase             |
| `--font-mono`      | IBM Plex Mono / Space Mono | All metadata, nav, data, labels         |
| `--font-body`      | Inter Regular              | Body prose (sparingly)                  |
| `--radius`         | `0px`                      | Zero border-radius everywhere           |
| `--shadow`         | none                       | No shadows. Solid borders only.         |

### Typography Rules

- **Headers:** Uppercase, negative tracking `-0.03em` to `-0.05em`, line-height `0.85–0.95`, fluid `clamp(4rem, 10vw, 15rem)`
- **Labels/Nav:** Monospace, uppercase, tracking `0.05em–0.1em`, `10px–14px`
- **Body:** Inter, `1.4` line-height, max-width `65ch`

### Global Effects

- [x] CRT scanline overlay (`.crt-overlay` in CSS, component in root)
- [x] Subtle mechanical noise filter (SVG data-uri in CSS, component in root)
- [x] Phosphor glow on text (`.phosphor-glow` utility class)

---

## 2. Files to Modify

### Core Infrastructure

| File                                  | Task                                                                | Status  |
| ------------------------------------- | ------------------------------------------------------------------- | ------- |
| `app/app.css`                         | Rewrite CSS variables, remove shadows/radius, add CRT/noise effects | ✅ Done |
| `app/root.tsx`                        | Update font imports, add CRT overlay, dark-only HTML                | ✅ Done |
| `app/components/layout/sidebar.tsx`   | Rigid panel, square avatar, monospace nav, unit metadata, dark-only | ✅ Done |
| `app/components/reading-progress.tsx` | Thin red bar, zero radius, transition-none                          | ✅ Done |
| `app/lib/post-content.tsx`            | Removed prose/rounded-lg classes from inline MDX content            | ✅ Done |

### UI Components (Shadcn)

| File                             | Task                                                          | Status  |
| -------------------------------- | ------------------------------------------------------------- | ------- |
| `app/components/ui/button.tsx`   | Zero radius, monospace labels, border styles only, no shadows | ✅ Done |
| `app/components/ui/card.tsx`     | Zero radius, solid borders, no shadow, raw utilitarian        | ✅ Done |
| `app/components/ui/progress.tsx` | Thin red bar `h-1`, zero radius, transition-none              | ✅ Done |

### MDX / Content

| File                                    | Task                                                                                      | Status  |
| --------------------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| `app/components/mdx/mdx-components.tsx` | No rounded code blocks, raw `<pre>` with border, uppercase headers, red blockquote border | ✅ Done |

### Routes

| File                                 | Task                                                                          | Status  |
| ------------------------------------ | ----------------------------------------------------------------------------- | ------- |
| `app/routes/_index.tsx`              | Hero: massive uppercase name, grid metadata, technical framing                | ✅ Done |
| `app/routes/about.tsx`               | Dense monospace data, grid layout, SectionHeader/DataRow/TechMarker           | ✅ Done |
| `app/routes/projects.tsx`            | Bordered compartments, monospace links, TechMarker tags                       | ✅ Done |
| `app/routes/writing._index.tsx`      | Tabular data grid with YEAR/DATE/TITLE/VIEWS, monospace, red hover            | ✅ Done |
| `app/routes/writing.$slug.tsx`       | Terminal header, bordered metadata grid, TechMarker tags, nav                 | ✅ Done |
| `app/routes/stack.tsx`               | Bordered tool list from generatedTools, >>> arrows                            | ✅ Done |
| `app/routes/journey.tsx`             | Timeline as bordered compartments, monospace dates, SectionHeader year labels | ✅ Done |
| `app/routes/workspace.tsx`           | Compartment/SectionHeader bordered sections for hardware/tools/productivity   | ✅ Done |
| `app/routes/bookmarks._index.tsx`    | Bordered category grid with >>> arrows and TechMarker count                   | ✅ Done |
| `app/routes/bookmarks.$category.tsx` | Bordered bookmark rows, TechMarker tags, >>> VISIT links, empty state         | ✅ Done |
| `app/routes/home.tsx`                | Redirects to `/` via loader, /home registered in routes.ts                    | ✅ Done |

---

## 3. New Files to Create

| File                                          | Purpose                               | Status                           |
| --------------------------------------------- | ------------------------------------- | -------------------------------- |
| `app/components/brutalist/crt-overlay.tsx`    | Global CRT scanline + noise overlay   | ✅ Done                          |
| `app/components/brutalist/ascii-frame.tsx`    | AsciiFrame / TechMarker / DataLabel   | ✅ Done                          |
| `app/components/brutalist/section-header.tsx` | SectionHeader / DataRow / Compartment | ✅ Done                          |
| `public/assets/noise.svg`                     | SVG noise texture for overlay         | ✅ Done (inline data-uri in CSS) |

---

## 4. Implementation Phases

### Phase 1 — Foundation (CSS + Layout)

- [x] Rewrite `app.css` with brutalist variables
- [x] Add CRT overlay component to root
- [x] Restructure sidebar as rigid fixed panel
- [x] Update font imports

### Phase 2 — UI Components

- [x] Redesign Button, Card, Progress
- [x] Redesign MDX components
- [x] Create brutalist utility components (ASCII frame, data-grid, section-header)

### Phase 3 — Routes

- [x] `_index.tsx` — Hero redesign
- [x] `writing._index.tsx` — Writing list
- [x] `writing.$slug.tsx` — Article reader
- [x] `projects.tsx` — Projects list
- [x] `about.tsx` — About page
- [x] `stack.tsx` — Stack inventory
- [x] `journey.tsx` — Journey timeline
- [x] `workspace.tsx` — Workspace
- [x] `bookmarks._index.tsx` — Bookmarks index
- [x] `bookmarks.$category.tsx` — Category bookmarks
- [x] `home.tsx` — Redirect to `/`

### Phase 4 — Polish

- [x] Verify no `border-radius` remains anywhere
- [x] Verify no shadows remain anywhere
- [x] Verify all animations are rigid (no soft transitions)
- [x] Test dark-mode-only consistency (enforced via `className="dark"` on `<html>`)
- [x] Run typecheck and build ✅ (0 errors)

---

## 5. Design Audit Checklist (from Skills)

### Typography

- [ ] Replace serif body font with heavy sans-serif headers + mono body
- [ ] Headlines at massive scale with negative tracking
- [ ] Limit body width to ~65ch
- [ ] Use Medium (500) / SemiBold (600) for hierarchy
- [ ] Monospace for all data/metadata with `font-variant-numeric: tabular-nums`
- [ ] Negative tracking on large headers, positive on small caps/labels
- [ ] All labels uppercase monospace

### Color and Surfaces

- [ ] Background: `#0A0A0A` (not pure black)
- [ ] One accent only: `#E61919` red
- [ ] No gradients
- [ ] No soft shadows — solid borders only
- [ ] Tinted shadows removed entirely
- [ ] Consistent lighting (N/A — no shadows)

### Layout

- [ ] Break symmetry where possible
- [ ] Use CSS Grid for rigid compartmentalization
- [ ] Max-width container for content
- [ ] Visible borders (`1px` or `2px solid`) between zones
- [ ] Zero border-radius everywhere
- [ ] No overlap/depth via negative margins (keep flat, rigid)
- [ ] Dense data clusters + vast negative space framing

### Interactivity

- [ ] Hover states: color shift or border accent (not scale/shadow)
- [ ] Active/pressed: subtle `translateY(1px)`
- [ ] Focus ring: visible, red-tinted
- [ ] No soft transitions — instant or 100ms max
- [ ] Scroll-behavior: auto (no smooth scroll in terminal)

### Component Patterns

- [ ] No generic card look — bordered boxes only
- [ ] No pill badges — square or bracketed labels
- [ ] No carousel testimonials
- [ ] Simplify footer to minimal links

### Iconography

- [ ] Standardize Lucide to one stroke weight
- [ ] No rounded avatars — square crop

### Code Quality

- [ ] Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<data>`, `<samp>`
- [ ] No inline styles
- [ ] No arbitrary z-index values

---

## 6. Notes / References

- **Skill:** `industrial-brutalist-ui` — loaded for design rules
- **Skill:** `redesign-existing-projects` — loaded for audit patterns
- **Framework:** React Router v7 + Tailwind CSS v4 + Cloudflare Workers
- **Content:** MDX-based blog (1 post) + stack inventory (5 tools)

---

## 7. Final Sign-off

> **FIRST REDESIGN FINALIZED — 2026-05-09**  
> All routes, components, CSS, and build verified.  
> Zero radius. Zero shadows. Zero errors.  
> Tactical telemetry aesthetic enforced across 11 routes, 6 components, and 3 brutalist utilities.

---

**Next possible iterations:**

- Mobile sidebar drawer (currently `MobileSidebar` returns null)
- ASCII section artwork / decorative elements
- Terminal green status indicator (`4AF626`) usage on specific elements
- Additional CRT phosphor glow refinement
- Light/dark toggle removal cleanup (theme-toggle.tsx left in place but unused)

### ASCII Framing Reference

```
[ NAVIGATION ]       /// SYSTEM STATUS: ONLINE
>>> HOME             REV 2.6.1
>>> WRITING          UNIT / EI-01
>>> PROJECTS
```

### Border Pattern Reference

```
┌─────────────────────────────────────┐
│ SECTION HEADER                      │
├─────────────────────────────────────┤
│ Content compartment with 1px border │
│ between all zones                   │
└─────────────────────────────────────┘
```
