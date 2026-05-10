import { Link } from "react-router";
import type { Route } from "./+types/bookmarks._index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — BOOKMARKS" },
		{
			name: "description",
			content: "Curated collection of bookmarks and resources.",
		},
	];
}

export default function BookmarksIndex() {
	const categories = [
		{ name: "ENGINEERING", slug: "engineering", count: 24 },
		{ name: "DESIGN", slug: "design", count: 12 },
		{ name: "TOOLS", slug: "tools", count: 18 },
		{ name: "READING", slug: "reading", count: 8 },
		{ name: "REFERENCE", slug: "reference", count: 15 },
	];

	return (
		<div className="space-y-16 max-w-3xl">
			<header className="space-y-3">
				<h1 className="font-header text-5xl">BOOKMARKS</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// CURATED RESOURCES
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{categories.map((cat) => (
					<Link
						key={cat.slug}
						to={`/bookmarks/${cat.slug}`}
						className="group border border-border p-4 hover:bg-secondary transition-colors duration-150 flex justify-between items-center"
					>
						<span className="font-mono text-[11px] text-foreground group-hover:text-accent transition-colors duration-150 uppercase tracking-wider">
							&gt;&gt;&gt; {cat.name}
						</span>
						<span className="font-mono text-[10px] text-muted-foreground tabular-nums">
							[{cat.count}]
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}
