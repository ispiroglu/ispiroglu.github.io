// Runtime for <log-figure> elements — pure Canvas 2D + requestAnimationFrame.
// No animation libraries, no Astro island machinery. Loaded once per article
// page (see app/pages/logs/[slug].astro); upgrades every <log-figure> on it.

import {
	getScene,
	VIEW_W,
	VIEW_H,
} from "~/components/embeds/figures";

class LogFigureElement extends HTMLElement {
	private canvas: HTMLCanvasElement | null = null;
	private ctx: CanvasRenderingContext2D | null = null;
	private ro: ResizeObserver | null = null;
	private io: IntersectionObserver | null = null;
	private reduced: MediaQueryList | null = null;
	private onReducedChange = (): void => this.sync();
	private raf = 0;
	private running = false;
	private visible = false;
	private disposed = false;
	private lastT = 0;
	private start_ = 0;

	connectedCallback(): void {
		const id = this.getAttribute("scene");
		if (!id) return;
		const scene = getScene(id);
		if (!scene) return;

		let canvas = this.canvas;
		if (!canvas) {
			canvas = document.createElement("canvas");
			canvas.style.width = "100%";
			canvas.style.height = "auto";
			canvas.style.display = "block";
			canvas.setAttribute("aria-hidden", "true");
			this.appendChild(canvas);
			this.canvas = canvas;
		}
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		this.ctx = ctx;

		this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (this.reduced.matches) this.lastT = 1;

		// Loop time holds near t≈1 briefly before wrapping, so each cycle
		// reads as "play, settle, restart" rather than a hard cut.
		const withHold = (p: number): number =>
			p >= 0.96 ? 0.97 + ((p - 0.96) / 0.04) * 0.03 : (p / 0.96) * 0.97;

		const drawAt = (t: number): void => {
			if (!this.ctx || !this.canvas) return;
			this.ctx.clearRect(0, 0, VIEW_W, VIEW_H);
			scene.draw(this.ctx, t);
		};

		const stop = (): void => {
			if (this.running) {
				this.running = false;
				cancelAnimationFrame(this.raf);
			}
		};

		const play = (): void => {
			if (
				this.running ||
				!this.visible ||
				this.reduced?.matches ||
				this.disposed ||
				!this.reduced
			)
				return;
			this.running = true;
			this.start_ = performance.now();
			const frame = (now: number): void => {
				if (!this.running) return;
				drawAt(withHold(((now - this.start_) / (scene.duration * 1000)) % 1));
				this.raf = requestAnimationFrame(frame);
			};
			this.raf = requestAnimationFrame(frame);
		};

		const sync = (): void => {
			if (this.disposed) return;
			if (this.reduced?.matches) {
				stop();
				drawAt(1);
			} else if (this.visible) {
				play();
			} else {
				stop();
			}
		};
		this.sync = sync;

		// HiDPI sizing: the backing store scales with CSS width × devicePixelRatio,
		// while scene code keeps drawing in 960×540 logical coordinates.
		const sizeNow = (): void => {
			if (this.disposed || !this.canvas || !this.ctx) return;
			const cssWidth = this.canvas.getBoundingClientRect().width;
			if (!cssWidth) return;
			const dpr = window.devicePixelRatio || 1;
			const w = Math.round(cssWidth * dpr);
			const h = Math.round(cssWidth * dpr * (VIEW_H / VIEW_W));
			if (this.canvas.width !== w || this.canvas.height !== h) {
				this.canvas.width = w;
				this.canvas.height = h;
				const scale = (dpr * cssWidth) / VIEW_W;
				this.ctx.setTransform(scale, 0, 0, scale, 0, 0);
			}
			drawAt(this.lastT);
		};

		this.ro = new ResizeObserver(() => sizeNow());
		this.ro.observe(canvas);
		// Fallback for environments where observers under-deliver: re-check on
		// layout-affecting window resizes.
		window.addEventListener("resize", this.onWindowResize);

		// Size and paint the first frame synchronously — never depend on an
		// observer's first delivery to show content.
		sizeNow();
		this.drawAtRef = drawAt;

		// Animate only while on screen.
		this.io = new IntersectionObserver(
			(entries) => {
				this.visible = (entries[0]?.intersectionRatio ?? 0) >= 0.25;
				sync();
			},
			{ threshold: [0, 0.25, 1] },
		);
		this.io.observe(canvas);

		this.reduced.addEventListener("change", this.onReducedChange);

		// JetBrains Mono may land after first paint — repaint labels once ready.
		document.fonts.ready.then(() => {
			if (!this.disposed && this.drawAtRef) this.drawAtRef(this.lastT);
		});
	}

	/** Draw an arbitrary loop position (0..1). Used by tests and future
	 *  scroll-linked scrubbing; independent of the rAF loop. */
	seekTo(t: number): void {
		if (!this.drawAtRef) return;
		const p = t < 0 ? 0 : t > 1 ? 1 : t;
		const eased = p >= 0.96 ? 0.97 + ((p - 0.96) / 0.04) * 0.03 : (p / 0.96) * 0.97;
		this.lastT = eased;
		this.drawAtRef(eased);
	}

	private drawAtRef: ((t: number) => void) | null = null;

	private sync = (): void => {};
	private onWindowResize = (): void => {
		if (this.drawAtRef) this.drawAtRef(this.lastT);
	};

	disconnectedCallback(): void {
		this.disposed = true;
		if (this.running) {
			this.running = false;
			cancelAnimationFrame(this.raf);
		}
		this.ro?.disconnect();
		this.io?.disconnect();
		this.reduced?.removeEventListener("change", this.onReducedChange);
		window.removeEventListener("resize", this.onWindowResize);
	}
}

if (!customElements.get("log-figure")) {
	customElements.define("log-figure", LogFigureElement);
}
