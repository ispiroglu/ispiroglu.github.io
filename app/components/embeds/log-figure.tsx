// Server-rendered shell for animated Canvas figures.
//
// This is deliberately NOT an Astro island. Islands nested inside another
// island's children (MDX content passed into a client:load page component)
// deadlock on Astro's parent-gated hydration — the child waits for an
// `astro:hydrate` event that fired before it connected. Instead this renders
// a plain `<log-figure>` custom element; the runtime lives in
// app/scripts/log-figure.ts, bundled and loaded once per article page from
// app/pages/logs/[slug].astro.

import { getScene } from "./figures";

type LogFigureProps = {
	id: string;
	title: string;
	desc: string;
};

declare module "react" {
	namespace JSX {
		interface IntrinsicElements {
			"log-figure": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & { scene?: string },
				HTMLElement
			>;
		}
	}
}

export function LogFigure({ id, title, desc }: LogFigureProps) {
	if (!getScene(id)) {
		return (
			<figure role="img" aria-label={`${title}. ${desc}`} style={{ margin: 0 }}>
				<p style={{ border: "1px solid #E5E0DA", padding: "2rem", fontFamily: "JetBrains Mono, monospace", fontSize: "0.875rem" }}>
					unknown figure: {id}
				</p>
			</figure>
		);
	}
	return (
		<log-figure
			scene={id}
			role="img"
			title={title}
			aria-label={`${title}. ${desc}`}
		/>
	);
}
