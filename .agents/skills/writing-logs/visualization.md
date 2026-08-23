# Visualization

Act 2 technical spine. Two sources. Do not mix them.

| Layer | Follow | Do not follow |
|-------|--------|----------------|
| **Look** (paint, type, geometry) | This website: `STYLE_SOURCE` | `ANTI_REFERENCE_DIR` (Conway tldraw) |
| **Rhetoric** (what the figure argues) | PlanetScale architecture walks | Whiteboard sketches, decorative art, product screenshots |

PlanetScale is the diagram teacher. This site is the paint. Conway SVGs are an anti-reference.

## Constants

```text
STYLE_SOURCE = app/app.css
ANTI_REFERENCE_DIR = public/assets/conways-law/
RHETORIC_EXAMPLE_1 = https://planetscale.com/blog/massively-parallel-postgres-backups
RHETORIC_EXAMPLE_2 = https://planetscale.com/blog/faster-backups-with-sharding

SVG_WIDTH = 960
SVG_HEIGHT = 540
CANVAS_FILL = none
COLOR_BACKGROUND = #FAF9F6
COLOR_FOREGROUND = #18181B
COLOR_CARD = #FFFFFF
COLOR_BORDER = #E5E0DA
COLOR_MUTED = #6B6B6B
COLOR_SECONDARY = #F0EDE8
COLOR_ACCENT = #D41515
COLOR_IDLE = #B0ACA6
COLOR_OK = #2D8C4A
FONT_LABEL = JetBrains Mono, ui-monospace, monospace
FONT_SIZE_LABEL = 12
FONT_SIZE_TITLE = 14
STROKE_WIDTH = 1.5
STROKE_WIDTH_HOT = 2.5
RADIUS = 0
ASSET_DIR = public/assets/<slug>/
ASSET_URL = /assets/<slug>/
FRAME_NAME = NN-<state-kebab>.svg
ALT_PREFIX = Architecture diagram:
```

`NN` is zero-padded from `00`. `state-kebab` matches the Act 2 `h2` slug.

Do not open files in `ANTI_REFERENCE_DIR` for color, font, composition, or "how diagrams look here". Those files are tldraw exports: rainbow fills, `@font-face` woff, huge viewBoxes, 100kb+. Historical. Not the house style.

## Look — this website

Paint from `STYLE_SOURCE` only.

- Canvas: `CANVAS_FILL`. No full-bleed `rect`. No `fill` on the root `<svg>`. Site `body` already paints warm paper plus a 1px `COLOR_BORDER` dot grid (`background-size: 24px 24px` in `STYLE_SOURCE`). Transparent canvas lets those dots show through and stay aligned with the page. Do not redraw the dots inside the SVG. Do not fill the viewBox with `COLOR_BACKGROUND` or `COLOR_CARD`.
- Nodes: `rect`, `RADIUS` 0, fill `COLOR_CARD`, stroke `COLOR_BORDER`. Opaque nodes only. Gutters stay transparent.
- Type: `FONT_LABEL` at `FONT_SIZE_LABEL` / `FONT_SIZE_TITLE`. Micro labels. Not display type. Not Inter. Not Spline in the SVG.
- Accent: `COLOR_ACCENT` on the hot path only. One red. Not a rainbow.
- Depth: borders only. No shadows. No gradients. No rounded `rx`.

Tells you copied Conway / tldraw — rewrite the file:

- Fills `#ae3ec9` `#4263eb` `#f76707` `#099268` or any sibling rainbow
- `@font-face`, `tldraw_draw`, embedded woff
- `FONT_SIZE` above 16 on node labels
- viewBox in the thousands, file over ~20kb for a simple topology
- Sketchy / hand-drawn stroke

## Motion — animated figures

Three pieces, deliberately NOT an Astro island:

1. **Shell** — `app/components/embeds/log-figure.tsx` exports `LogFigure({ id, title, desc })`. It renders a plain `<log-figure scene="<slug>/<id>" role="img">` custom element. Server-rendered only; no hooks, no hydration.
2. **Engine** — `app/scripts/log-figure.ts`. Vanilla custom element: Canvas 2D, DPR sizing, IntersectionObserver play gate, `prefers-reduced-motion` static final frame. Exposes `seekTo(t)` for tests and future scroll-linked scrubbing.
3. **Boot** — one hoisted `<script> import "~/scripts/log-figure";</script>` in the log route page. Never import the engine from frontmatter (it runs during SSR and dies on `HTMLElement`).

Scenes are registered per `<slug>/<id>` in `app/components/embeds/figures.ts`.

Embed from MDX (NO `client:` directive):

```mdx
import { LogFigure } from "~/components/embeds/log-figure";

<LogFigure id="<slug>/<scene>" title="..." desc="..." />
```

Why no island: islands nested inside another island's children (MDX content passed into a `client:load` page component) gate hydration on the parent's `astro:hydrate` event and can deadlock. The custom element needs no Astro machinery at all.

Contract:

- Scene = a pure `(ctx, t)` draw function. `t` loops 0→1 over ~3–4s, brief hold before wrap. No library. Hand-written Canvas 2D + rAF only — this is exactly what PlanetScale does inside iframes; we use a self-booting custom element instead.
- Logical space 960×540 (`SVG_WIDTH` / `SVG_HEIGHT`), DPR-scaled.
- IntersectionObserver gates the loop when off-screen. `prefers-reduced-motion: reduce` renders the static final frame.
- Transparent canvas over the page dot grid. Same paint law as Look: site tokens, `FONT_LABEL`, radius 0, borders only, one red accent.

Banned for post figures: three.js, WebGL, p5, Lottie, GSAP, mermaid, raster images.

Static SVG remains ONLY for the optional Act 1 spatial figure and the optional hero banner. Everything in the SVG contract below applies to those two cases.


## Rhetoric — PlanetScale

Steal the walk from `RHETORIC_EXAMPLE_1` and `RHETORIC_EXAMPLE_2`. Do not steal PlanetScale orange, product UI shots, tweets, or backup-console screenshots. Those are not Act 2 frames.

PlanetScale figures are architecture arguments:

1. **Baseline topology first.** Named boxes in layers. Example: traffic → coordinator → sibling nodes → store. Caption: `Architecture diagram: an unsharded cluster handling reads`.
2. **Same scene mutates.** Next section adds the backup node, WAL arrows, or parallel shards. Positions stay. The reader should recognize frame `N` inside frame `N+1`.
3. **Diagram is the argument.** Prose before the figure sets the live system ("here is N shards, happily serving traffic"). Prose after is one implication. Do not re-explain the boxes in a paragraph.
4. **Siblings when the point is skew or parallel.** Identical node rects. One of them goes hot (`COLOR_ACCENT`, `STROKE_WIDTH_HOT`) or many of them run the same step at once.
5. **Arrows are this section's operation.** Replication, restore, routing. Not every possible edge.
6. **Labels are component names.** `primary`, `shard-0`, `S3`, `_routing`. Not "Service A" / "Blob".

Do not use PlanetScale as a color reference. Their brand orange is not `COLOR_ACCENT`.

## Cadence

**Gate:** Do not invent the Act 2 walk. SKILL.md must lock the state list with the user first (h2 names, which states get a figure). Then write one state per turn: facts → prose → one figure scene. Do not emit a folder of scenes in one shot.

Act 2 is a walk of states. Each `h2` is the name of a state (`Replaying the WAL`, `Traffic sticks to one shard`), not a textbook heading.

For each `h2`:

1. One or two paragraphs: what is true in this state, using only sourced facts. PlanetScale beat: name the live system before the figure.
2. If the system changed since the previous `h2`, write the next figure scene (animated by default; static SVG only if the state has no motion worth showing). Embed it immediately after that prose.
3. One sentence after the figure: the implication (why this state matters).
4. Code only if this state needs a real artifact (query, mapping, config, command) from the brief.

If the `h2` is commentary with no state change, write no figure.

Act 1 already used 0–1 figure for the broken scene. Scene `00` of Act 2 is the PlanetScale baseline in site paint, then mutate.

## Sequential mutation

Frame `N+1` is frame `N` with a small set of diffs. Keep positions, labels, and count of nodes stable unless the state itself adds or removes a node.

Allowed diffs:

- Accent stroke on the hot path (`COLOR_ACCENT`, `STROKE_WIDTH_HOT`)
- Idle fill on nodes that are out of play (`COLOR_SECONDARY`, `COLOR_IDLE` labels)
- One new node or arrow the state introduces
- A title label in the figure that matches the `h2`
- A motion diff on MOTION variants of the same scene: a ray lights up vs stays idle, a bar scans fast vs crawls, a corner count label ticks with the motion

Disallowed diffs:

- New layout
- New metaphor (teams become clouds become funnels)
- Recoloring everything
- Adding a legend that the previous frame did not need unless a new symbol appeared

## SVG contract — Act 1 spatial figure and hero only

Hand-authored SVG. Lean. Transparent canvas (`CANVAS_FILL`). Text in `FONT_LABEL`. Boxes are `rect` with `RADIUS` 0. Act 2 state figures do NOT use this format — see Motion above.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540" role="img" aria-labelledby="title desc">
  <title id="title">Steady traffic across three shards</title>
  <desc id="desc">Coordinator fans traffic to three equal shards.</desc>
  <text x="48" y="48" font-family="JetBrains Mono, ui-monospace, monospace" font-size="14" fill="#18181B">00 — STEADY</text>
  <rect x="400" y="80" width="160" height="56" fill="#FFFFFF" stroke="#E5E0DA" stroke-width="1.5"/>
  <text x="480" y="114" text-anchor="middle" font-family="JetBrains Mono, ui-monospace, monospace" font-size="12" fill="#18181B">coordinator</text>
  <line x1="480" y1="136" x2="160" y2="200" stroke="#18181B" stroke-width="1.5"/>
  <line x1="480" y1="136" x2="480" y2="200" stroke="#18181B" stroke-width="1.5"/>
  <line x1="480" y1="136" x2="800" y2="200" stroke="#18181B" stroke-width="1.5"/>
  <rect x="80" y="200" width="160" height="80" fill="#FFFFFF" stroke="#E5E0DA" stroke-width="1.5"/>
  <text x="160" y="246" text-anchor="middle" font-family="JetBrains Mono, ui-monospace, monospace" font-size="12" fill="#18181B">shard-0</text>
  <rect x="400" y="200" width="160" height="80" fill="#FFFFFF" stroke="#E5E0DA" stroke-width="1.5"/>
  <text x="480" y="246" text-anchor="middle" font-family="JetBrains Mono, ui-monospace, monospace" font-size="12" fill="#18181B">shard-1</text>
  <rect x="720" y="200" width="160" height="80" fill="#FFFFFF" stroke="#E5E0DA" stroke-width="1.5"/>
  <text x="800" y="246" text-anchor="middle" font-family="JetBrains Mono, ui-monospace, monospace" font-size="12" fill="#18181B">shard-2</text>
</svg>
```

Frame `01` copies that file. Change only the hot path: `shard-0` stroke `#D41515` `stroke-width="2.5"`, the two idle fan-out strokes to `COLOR_IDLE`, title `01 — STICKY ROUTING`. Do not redraw from scratch.

File path: `ASSET_DIR/00-steady.svg`. Markdown:

```mdx
![Architecture diagram: three shards share traffic evenly](/assets/<slug>/00-steady.svg)
```

`alt` = `ALT_PREFIX` plus the state in one sentence. Never `alt text`.

Banned in post figures: three.js, WebGL, p5, Lottie, GSAP, mermaid, raster PNG/WebP/JPEG in Act 2, tldraw, `@font-face`, embedded woff, drop shadows, gradients, rounded `rx`, decorative hero illustrations used as state frames, a new metaphor per section, PlanetScale UI screenshots as frames, full-bleed canvas fills (`#FAF9F6`, white, or a fake dot field).

## Caption

The markdown alt is the caption. Do not add a second italic caption line unless the figure has a symbol the prose has not named yet.

## Code artifacts

Use a fenced block in MDX only for a sourced artifact this state needs. No `hello world`. No uncommented dumps. Trim to the fields that prove the state.

## Hero

Optional `banner.svg` in `ASSET_DIR`. Wide, sparse, site tokens, transparent canvas, no fake screenshot of a product UI. Hero is not frame `00` unless the user says the banner is the broken scene. Hero still uses `STYLE_SOURCE`. Not Conway tldraw. Not PlanetScale marketing art.

## Common mistakes

| Excuse | Reality |
|--------|---------|
| "Match the Conway post diagrams" | `ANTI_REFERENCE_DIR` is tldraw history. Paint from `STYLE_SOURCE`. |
| "PlanetScale uses orange and app screenshots" | Steal the topology walk. Paint with site tokens. No UI shots in Act 2. |
| "Bigger labels read better" | `FONT_SIZE_LABEL` is 12. Huge type is tldraw. |
| "New picture, new metaphor" | Copy the previous scene, diff the state. |
| "Paint the canvas paper so it matches the site" | Paper and dots live on `body`. Canvas stays `CANVAS_FILL`. |
| "Draw the dot grid in the SVG" | Dots will drift off the page grid. Leave gutters empty. |
| "Rainbow makes shards distinct" | Ink, paper, border, one red hot path. Siblings stay identical until one is hot. |
| "Figure then a wall of theory" | Implication is one sentence, then the next `h2`. |
| "Numbers not in the brief" | Delete the number or stop and ask. |
| "Frame for every h2 including recap" | Recap has zero figures. |
| "I'll draw all frames now" | One agreed state, one scene. Then stop. |
