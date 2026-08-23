// Canvas 2D figure runtime — house paint + shared draw helpers + Act 2 scenes.
// Palette and type rules mirror .agents/skills/writing-logs/visualization.md.
// Canvas background stays transparent; the page's warm paper + dot grid shows through.

export const INK = "#18181B";
export const BORDER = "#E5E0DA";
export const CARD = "#FFFFFF";
export const MUTED = "#6B6B6B";
export const SECONDARY = "#F0EDE8";
export const ACCENT = "#D41515";
export const IDLE = "#B0ACA6";

const FONT_STACK = "JetBrains Mono, ui-monospace, monospace";
const SIZE_LABEL = 12;
const SIZE_TITLE = 14;
const STROKE = 1.5;
const STROKE_HOT = 2.5;

export const VIEW_W = 960;
export const VIEW_H = 540;

type Ctx = CanvasRenderingContext2D;
type Pt = { x: number; y: number };
type Rect = { x: number; y: number; w: number; h: number };

// ---------------------------------------------------------------- easing ----

export const clamp01 = (v: number): number => (v < 0 ? 0 : v > 1 ? 1 : v);
/** Progress of t within window [a,b], clamped to [0,1]. */
export const seg = (t: number, a: number, b: number): number =>
  clamp01((t - a) / (b - a));
export const easeOut = (p: number): number => 1 - Math.pow(1 - p, 3);
export const easeInOut = (p: number): number =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

// ----------------------------------------------------------------- paint ----

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgba(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

export function mixHex(from: string, to: string, p: number): string {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * clamp01(p)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

type TextOpts = {
  size?: number;
  color?: string;
  align?: CanvasTextAlign;
  baseline?: CanvasTextBaseline;
  alpha?: number;
};

export function mono(
  ctx: Ctx,
  text: string,
  x: number,
  y: number,
  o: TextOpts = {},
): void {
  ctx.save();
  ctx.globalAlpha = o.alpha ?? 1;
  if (o.alpha !== undefined && o.alpha <= 0) {
    ctx.restore();
    return;
  }
  ctx.font = `${o.size ?? SIZE_LABEL}px ${FONT_STACK}`;
  ctx.fillStyle = o.color ?? INK;
  ctx.textAlign = o.align ?? "left";
  ctx.textBaseline = o.baseline ?? "middle";
  ctx.fillText(text, x, y);
  ctx.restore();
}

/** Figure title, top-left: `NN — NAME`. */
export function figureTitle(ctx: Ctx, text: string): void {
  mono(ctx, text, 48, 48, { size: SIZE_TITLE, color: INK });
}

/** Corner annotation, bottom-left. */
export function corner(ctx: Ctx, text: string): void {
  mono(ctx, text, 48, 516, { color: MUTED });
}

export function panel(
  ctx: Ctx,
  r: Rect,
  o: { fill?: string; stroke?: string; lw?: number; alpha?: number } = {},
): void {
  ctx.save();
  ctx.globalAlpha = o.alpha ?? 1;
  ctx.fillStyle = o.fill ?? CARD;
  ctx.strokeStyle = o.stroke ?? BORDER;
  ctx.lineWidth = o.lw ?? STROKE;
  ctx.fillRect(r.x, r.y, r.w, r.h);
  ctx.strokeRect(r.x, r.y, r.w, r.h);
  ctx.restore();
}

/** Opaque node rect with a centered mono label. */
export function labelPanel(
  ctx: Ctx,
  r: Rect,
  text: string,
  o: { fill?: string; stroke?: string; lw?: number; color?: string } = {},
): void {
  panel(ctx, r, { fill: o.fill, stroke: o.stroke, lw: o.lw });
  mono(ctx, text, r.x + r.w / 2, r.y + r.h / 2 + 1, {
    color: o.color ?? INK,
    align: "center",
  });
}

export function line(
  ctx: Ctx,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  lw = STROKE,
  dash?: number[],
): void {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  if (dash) ctx.setLineDash(dash);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

export function dot(
  ctx: Ctx,
  x: number,
  y: number,
  r: number,
  color: string,
): void {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}
function polyLength(pts: Pt[]): number {
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  }
  return total;
}

/** Point at fraction s (0..1) along a polyline. */
export function polyPoint(pts: Pt[], s: number): Pt {
  const target = polyLength(pts) * clamp01(s);
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dy = pts[i].y - pts[i - 1].y;
    const len = Math.hypot(dx, dy);
    if (acc + len >= target) {
      const r = len === 0 ? 0 : (target - acc) / len;
      return { x: pts[i - 1].x + dx * r, y: pts[i - 1].y + dy * r };
    }
    acc += len;
  }
  return pts[pts.length - 1];
}

/** Draw the first `frac` of a polyline. */
export function tracePoly(
  ctx: Ctx,
  pts: Pt[],
  frac: number,
  color: string,
  lw = STROKE,
  dash?: number[],
): void {
  if (frac <= 0) return;
  const target = polyLength(pts) * clamp01(frac);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  if (dash) ctx.setLineDash(dash);
  ctx.lineCap = "butt";
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i].x - pts[i - 1].x;
    const dy = pts[i].y - pts[i - 1].y;
    const len = Math.hypot(dx, dy);
    if (acc + len <= target) {
      ctx.lineTo(pts[i].x, pts[i].y);
      acc += len;
    } else {
      const r = len === 0 ? 0 : (target - acc) / len;
      ctx.lineTo(pts[i - 1].x + dx * r, pts[i - 1].y + dy * r);
      break;
    }
  }
  ctx.stroke();
  ctx.restore();
}

function arrowHead(
  ctx: Ctx,
  x: number,
  y: number,
  angle: number,
  color: string,
  size = 6,
): void {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - size * Math.cos(angle - 0.42), y - size * Math.sin(angle - 0.42));
  ctx.lineTo(x - size * Math.cos(angle + 0.42), y - size * Math.sin(angle + 0.42));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function arrow(
  ctx: Ctx,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  lw = STROKE,
  dash?: number[],
): void {
  line(ctx, x1, y1, x2, y2, color, lw, dash);
  arrowHead(ctx, x2, y2, Math.atan2(y2 - y1, x2 - x1), color);
}

/** Border track + ink/accent fill progress bar. */
export function progressBar(
  ctx: Ctx,
  r: Rect,
  frac: number,
  fill = INK,
  track = SECONDARY,
): void {
  panel(ctx, r, { fill: track, stroke: BORDER });
  const w = (r.w - 2) * clamp01(frac);
  if (w > 0) {
    ctx.save();
    ctx.fillStyle = fill;
    ctx.fillRect(r.x + 1, r.y + 1, w, r.h - 2);
    ctx.restore();
  }
}

/** Compact count-up formatting: 2.1M, 600k, 3M. */
export function fmtCompact(v: number, approx = false): string {
  const abs = Math.abs(v);
  const s =
    abs >= 1e6
      ? `${+(abs / 1e6).toFixed(1)}M`
      : `${Math.round(abs / 1e3)}k`;
  return (approx ? "≈" : "") + s;
}

// ------------------------------------------------------- shared topology ----
// Query box top-center, data node below it, 12 shards in ONE row.
// Straight rays fan out to every shard's top edge — no wire ever crosses a box.

const SEARCH: Rect = { x: 384, y: 56, w: 192, h: 44 };
const DATA: Rect = { x: 392, y: 148, w: 176, h: 44 };
const ORIGIN: Pt = { x: 480, y: DATA.y + DATA.h };

const SHARD_W = 64;
const SHARD_H = 84;
const SHARD_Y = 330;
const GAP_X = 9;
const GRID_X0 = Math.round((VIEW_W - (12 * SHARD_W + 11 * GAP_X)) / 2);
const PITCH_X = SHARD_W + GAP_X;

/** Hot shard used by the single-collect scenes (just right of center). */
const HOT_SHARD = 6;

export function shardRect(i: number): Rect {
  return { x: GRID_X0 + i * PITCH_X, y: SHARD_Y, w: SHARD_W, h: SHARD_H };
}

/** Wire path from the data node to shard i — one straight segment. */
export function pathTo(i: number): Pt[] {
  const r = shardRect(i);
  return [ORIGIN, { x: r.x + SHARD_W / 2, y: SHARD_Y }];
}

type ShardLook = {
  dim?: boolean;
  hot?: boolean;
  pulsePhase?: number;
  /** Show the per-shard `≈11M` counter under the progress bar. */
  count?: boolean;
  bar?: number | null;
  barFill?: string;
};

function drawShard(ctx: Ctx, i: number, look: ShardLook = {}): void {
  const r = shardRect(i);
  const stroke = look.hot
    ? ACCENT
    : look.pulsePhase === undefined
      ? BORDER
      : rgba(ACCENT, 0.3 + 0.7 * Math.abs(Math.sin(look.pulsePhase)));
  const lw = look.hot ? STROKE_HOT : STROKE;
  panel(ctx, r, { fill: look.dim ? SECONDARY : CARD, stroke, lw });

  // Shard number. Boxes are narrow; the `shard-` prefix lives in the row caption.
  mono(ctx, String(i), r.x + r.w / 2, r.y + 18, {
    size: 13,
    color: look.dim ? IDLE : INK,
    align: "center",
  });

  if (look.bar != null) {
    progressBar(
      ctx,
      { x: r.x + 10, y: r.y + 38, w: r.w - 20, h: 6 },
      look.bar,
      look.barFill ?? INK,
    );
  }
  if (look.count) {
    mono(ctx, "≈11M", r.x + r.w / 2, r.y + 62, {
      color: look.dim ? IDLE : MUTED,
      align: "center",
    });
  }
}

function drawQueryAndData(ctx: Ctx): void {
  labelPanel(ctx, SEARCH, "search");
  labelPanel(ctx, DATA, "data node");
}

function drawAllShards(ctx: Ctx, looks: ShardLook[] = []): void {
  for (let i = 0; i < 12; i++) drawShard(ctx, i, looks[i]);
}

/** Request dot falling from the search box to the data node. */
function dropDot(ctx: Ctx, p: number): void {
  if (p <= 0) return;
  const searchBottom = SEARCH.y + SEARCH.h;
  const y = searchBottom + (DATA.y - searchBottom) * easeInOut(p);
  dot(ctx, ORIGIN.x, y, 3.5, INK);
}

// ------------------------------------------------------------------ scenes --

// 00 — SCATTERED: one query, twelve collects, ≈11.0M docs scanned.
function scattered(ctx: Ctx, t: number): void {
  figureTitle(ctx, "00 — SCATTERED");
  drawQueryAndData(ctx);

  const looks: ShardLook[] = [];
  const scan = seg(t, 0.45, 0.9);
  for (let i = 0; i < 12; i++) {
    looks.push({
      pulsePhase: scan > 0 && scan < 1 ? scan * Math.PI * 4 + i * 0.6 : undefined,
      bar: scan > 0 ? clamp01(scan * 1.2 - i * 0.015) : null,
      count: scan >= 1,
    });
  }
  drawAllShards(ctx, looks);

  // Request dot drops in (t 0–0.15).
  dropDot(ctx, seg(t, 0, 0.15));

  // Twelve rays fan out (t 0.15–0.45): ACCENT while firing, INK once settled.
  for (let i = 0; i < 12; i++) {
    const start = 0.15 + i * 0.022;
    const p = seg(t, start, start + 0.1);
    if (p <= 0) continue;
    const settled = p >= 1;
    tracePoly(
      ctx,
      pathTo(i),
      easeOut(Math.min(p, 1)),
      settled ? INK : ACCENT,
      settled ? STROKE : STROKE_HOT,
    );
  }

  // Global doc counter ticks up during the scan (t 0.45–0.9).
  if (scan > 0) {
    const v = 11e6 * easeInOut(scan);
    mono(ctx, `≈${(v / 1e6).toFixed(1)}M scanned`, 584, 161, {
      color: scan >= 1 ? INK : MUTED,
    });
  }

  // Merge dot returns data-node-ward (t 0.9–1).
  const m = seg(t, 0.9, 1);
  if (m > 0) {
    const y = SHARD_Y - 4 - (SHARD_Y - 4 - ORIGIN.y) * easeInOut(m);
    dot(ctx, ORIGIN.x, y, 3.5, INK);
  }

  corner(ctx, "12 COLLECTS");
}

// 01 — LAST YEAR'S STICK: routing misses; one hot shard answers, 11 sit idle.
function lastYearsStick(ctx: Ctx, t: number): void {
  figureTitle(ctx, "01 — LAST YEAR'S STICK");
  drawQueryAndData(ctx);

  const arrived = t > 0.35;
  const looks: ShardLook[] = [];
  for (let i = 0; i < 12; i++) {
    looks.push(i === HOT_SHARD ? { hot: arrived } : { dim: true });
  }
  drawAllShards(ctx, looks);

  dropDot(ctx, seg(t, 0, 0.2));

  // Eleven idle paths: dashed, never light.
  for (let i = 0; i < 12; i++) {
    if (i !== HOT_SHARD) tracePoly(ctx, pathTo(i), 1, IDLE, STROKE, [4, 4]);
  }
  // One solid accent ray to the hot shard.
  tracePoly(ctx, pathTo(HOT_SHARD), easeOut(seg(t, 0.15, 0.35)), ACCENT, STROKE_HOT);

  // Leader annotation: the hot shard holds this product's questions.
  const note = seg(t, 0.55, 0.85);
  if (note > 0) {
    const hr = shardRect(HOT_SHARD);
    const cx = hr.x + SHARD_W / 2;
    line(ctx, cx, hr.y + SHARD_H, cx, hr.y + SHARD_H + 16 * note, IDLE, STROKE);
    mono(ctx, "holds this product's questions", cx, hr.y + SHARD_H + 30, {
      align: "center",
      alpha: seg(t, 0.7, 0.9),
    });
  }

  corner(ctx, "1 COLLECT");
}

// 02 — COUNT BROADCASTS: an aggregation walks every shard, then merges.
function countBroadcasts(ctx: Ctx, t: number): void {
  figureTitle(ctx, "02 — COUNT BROADCASTS");
  drawQueryAndData(ctx);

  const fan = easeOut(seg(t, 0, 0.08));
  const looks: ShardLook[] = [];
  for (let i = 0; i < 12; i++) looks.push({ bar: fan >= 1 ? t : null, count: fan >= 1 });
  drawAllShards(ctx, looks);

  // Fan-out arrows to all twelve.
  for (let i = 0; i < 12; i++) {
    const pts = pathTo(i);
    tracePoly(ctx, pts, fan, INK, STROKE);
    if (fan >= 1) {
      const end = pts[pts.length - 1];
      arrowHead(ctx, end.x, end.y, Math.PI / 2, INK, 5);
    }
  }

  // Every shard walks ≈11M docs.
  mono(ctx, "walking ≈11M docs", 480, 468, { color: MUTED, align: "center" });

  // Partial counts stream back up to the data node.
  if (t > 0.12) {
    for (let i = 0; i < 12; i++) {
      const speed = 0.55 + (i % 4) * 0.12;
      const s = (((t - 0.12) * speed + i * 0.17) % 1 + 1) % 1;
      const p = polyPoint(pathTo(i), 1 - s);
      dot(ctx, p.x, p.y, 2.5, MUTED);
    }
  }

  // Merge counter accumulates shard reports; the clock makes the cost felt.
  const k = Math.min(12, Math.floor(seg(t, 0.2, 0.85) * 12));
  if (k > 0) mono(ctx, `merged ${k}/12`, 584, 161, { color: INK });
  if (fan >= 1) {
    mono(ctx, `query clock: ${(t * 2.8).toFixed(1)}s`, 584, 141, { color: MUTED });
  }

  corner(ctx, "12 COLLECTS + MERGE");
}

// 02b — AGG COST: one shared ruler, "documents walked per query".
// The routed bar is a sliver on purpose — its smallness is the argument.
function aggCost(ctx: Ctx, t: number): void {
  figureTitle(ctx, "02b — AGG COST");

  const X0 = 150;
  const X1 = 880;
  mono(ctx, "documents walked per query", X0, 108, { color: MUTED });

  // Baseline + end scale tick.
  line(ctx, X0, 420, X1, 420, INK, STROKE);
  mono(ctx, "0", X0, 442, { color: MUTED, align: "center" });
  mono(ctx, "whole index ≈136M docs", X1, 442, { color: MUTED, align: "right" });

  // Unrouted — the whole index gets walked.
  const up = easeOut(seg(t, 0.06, 0.36));
  if (up > 0) {
    mono(ctx, "unrouted", X0, 158, { color: INK });
    panel(ctx, { x: X0, y: 172, w: (X1 - X0 - 130) * up, h: 36 }, {
      fill: SECONDARY,
      stroke: ACCENT,
      lw: STROKE_HOT,
    });
    if (up >= 1) {
      mono(ctx, "12 × ≈11M", X0, 226, { color: MUTED });
      mono(ctx, "≈136M", X1 - 130, 190, { color: ACCENT });
    }
  }

  // Routed — one shard; drawn as a sliver, labeled qualitatively.
  const rp = easeOut(seg(t, 0.4, 0.56));
  if (rp > 0) {
    mono(ctx, "routed", X0, 296, { color: INK });
    panel(ctx, { x: X0, y: 310, w: Math.max(14 * rp, rp > 0 ? 2 : 0), h: 36 }, {
      fill: CARD,
      stroke: INK,
      lw: STROKE_HOT,
    });
    if (rp >= 1) {
      mono(ctx, "this product's documents", X0 + 26, 328, { color: MUTED });
    }
  }

  // Callout fades in late.
  const ca = seg(t, 0.6, 0.7);
  if (ca > 0) {
    mono(ctx, "same filter — only _routing decides how much gets walked", 480, 500, {
      align: "center",
      alpha: ca,
    });
  }
}

// 03 — COUNT STICKS: the aggregation lands on one shard; one collect.
function countSticks(ctx: Ctx, t: number): void {
  figureTitle(ctx, "03 — COUNT STICKS");
  drawQueryAndData(ctx);

  const looks: ShardLook[] = [];
  for (let i = 0; i < 12; i++) {
    if (i === HOT_SHARD) {
      looks.push({
        hot: t > 0.28,
        bar: easeOut(seg(t, 0.05, 0.4)),
        barFill: ACCENT,
      });
    } else {
      looks.push({ dim: true, bar: 0, barFill: INK });
    }
  }
  drawAllShards(ctx, looks);

  dropDot(ctx, seg(t, 0, 0.15));

  for (let i = 0; i < 12; i++) {
    if (i !== HOT_SHARD) tracePoly(ctx, pathTo(i), 1, IDLE, STROKE, [4, 4]);
  }
  tracePoly(ctx, pathTo(HOT_SHARD), easeOut(seg(t, 0.1, 0.28)), ACCENT, STROKE_HOT);

  const ma = seg(t, 0.45, 0.55);
  if (ma > 0) mono(ctx, "merged 1/1", 584, 161, { color: INK, alpha: ma });
  const ck = seg(t, 0.05, 0.45);
  if (ck > 0) {
    mono(ctx, `query clock: ${(ck * 0.2).toFixed(1)}s${ck >= 1 ? " ✓" : ""}`, 584, 141, {
      color: MUTED,
      alpha: ma > 0 ? 1 : undefined,
    });
  }
  corner(ctx, "1 COLLECT");
}

// 04 — LOAD TEST: requests/minute, quiet day to night jobs.
function loadTest(ctx: Ctx, t: number): void {
  figureTitle(ctx, "04 — LOAD TEST");

  const X0 = 190;
  const X1 = 880;
  const MAX = 3.2e6;
  const px = (v: number): number => X0 + (v / MAX) * (X1 - X0);

  // Gridlines (dashed border) + scale ticks.
  for (let g = 0; g <= 4; g++) {
    const v = (MAX / 4) * g;
    line(ctx, px(v), 130, px(v), 470, BORDER, STROKE, [3, 5]);
    mono(
      ctx,
      g === 0 ? "0" : fmtCompact(v),
      px(v),
      490,
      { color: MUTED, align: "center" },
    );
  }
  // Baseline.
  line(ctx, X0, 470, X1, 470, INK, STROKE);
  mono(ctx, "requests / minute", X1, 514, { color: MUTED, align: "right" });

  type Bar = {
    name: string;
    value: number;
    from: number;
    h: number;
    kind: "quiet" | "lastYear" | "cacheOff" | "nightJobs";
  };
  const bars: Bar[] = [
    { name: "quiet day peak", value: 200e3, from: 0.05, h: 20, kind: "quiet" },
    { name: "last year ceiling", value: 600e3, from: 0.3, h: 20, kind: "lastYear" },
    { name: "this year, cache off", value: 2.1e6, from: 0.55, h: 30, kind: "cacheOff" },
    { name: "night jobs on", value: 3e6, from: 0.75, h: 30, kind: "nightJobs" },
  ];

  bars.forEach((bar, i) => {
    const p = easeInOut(seg(t, bar.from, bar.from + 0.2));
    if (p <= 0) {
      // Still draw the row name so the chart doesn't jump.
      mono(ctx, bar.name, X0 - 12, 150 + i * 65 + bar.h / 2, {
        color: INK,
        align: "right",
        alpha: 0.4,
      });
      return;
    }
    const y = 150 + i * 65;
    const w = (X1 - X0) * (bar.value / MAX) * p;
    const cy = y + bar.h / 2;
    mono(ctx, bar.name, X0 - 12, cy, { color: INK, align: "right" });

    switch (bar.kind) {
      case "quiet":
        panel(ctx, { x: X0, y, w, h: bar.h }, { fill: SECONDARY, stroke: IDLE });
        break;
      case "lastYear":
        panel(
          ctx,
          { x: X0, y, w, h: bar.h },
          { fill: mixHex(IDLE, INK, p), stroke: mixHex(IDLE, INK, p) },
        );
        break;
      case "cacheOff":
        panel(ctx, { x: X0, y, w, h: bar.h }, { fill: ACCENT, stroke: ACCENT });
        break;
      case "nightJobs":
        panel(ctx, { x: X0, y, w, h: bar.h }, { fill: ACCENT, stroke: ACCENT, lw: STROKE_HOT });
        break;
    }

    const approx = bar.kind === "nightJobs";
    const value = bar.value * p;
    mono(ctx, fmtCompact(value, approx), X0 + w + 10, cy, {
      color:
        bar.kind === "quiet"
          ? IDLE
          : bar.kind === "lastYear"
            ? INK
            : ACCENT,
    });
  });
}

// --------------------------------------------------------------- registry --

export type Scene = {
  /** Loop duration in seconds. */
  duration: number;
  /** Draw one frame at loop time t ∈ [0,1]. */
  draw: (ctx: Ctx, t: number) => void;
};

const REGISTRY: Record<string, Scene> = {
  "forgotten-routing/scattered": { duration: 3, draw: scattered },
  "forgotten-routing/last-years-stick": { duration: 3, draw: lastYearsStick },
  "forgotten-routing/count-broadcasts": { duration: 3, draw: countBroadcasts },
  "forgotten-routing/agg-cost": { duration: 6, draw: aggCost },
  "forgotten-routing/count-sticks": { duration: 3, draw: countSticks },
};

export function getScene(id: string): Scene | undefined {
  return Object.prototype.hasOwnProperty.call(REGISTRY, id)
    ? REGISTRY[id]
    : undefined;
}
