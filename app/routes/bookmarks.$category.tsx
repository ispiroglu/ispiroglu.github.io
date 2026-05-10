import { Link } from "react-router";
import { useState } from "react";
import type { Route } from "./+types/bookmarks.$category";

export function meta({ params }: Route.MetaArgs) {
	const category = params.category?.toUpperCase() || "BOOKMARKS";
	return [
		{ title: `EI-01 — ${category}` },
		{ name: "description", content: `${category} bookmarks and resources.` },
	];
}

export default function BookmarksCategory({ params }: Route.ComponentProps) {
	const category = params.category || "unknown";
	const displayName = category.toUpperCase();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const bookmarks = [
		{
			title: "The Architecture of Open Source Applications",
			url: "https://aosabook.org",
			tags: ["ARCHITECTURE", "OPEN_SOURCE"],
			notes:
				"A collection of essays from the creators of major open-source projects covering architectural decisions, trade-offs, and design philosophies.",
		},
		{
			title: "Designing Data-Intensive Applications",
			url: "https://dataintensive.net",
			tags: ["DATA", "DISTRIBUTED"],
			notes:
				"Comprehensive guide to building reliable, scalable, and maintainable data systems. Covers replication, partitioning, transactions, and consensus.",
		},
		{
			title: "Google SRE Book",
			url: "https://sre.google/books/",
			tags: ["SRE", "RELIABILITY"],
			notes:
				"Google's approach to service reliability engineering. Practical guidance on incident management, monitoring, and designing for reliability.",
		},
		{
			title: "Systems Performance by Brendan Gregg",
			url: "https://brendangregg.com",
			tags: ["PERFORMANCE", "LINUX"],
			notes:
				"Enterprise and cloud computing performance analysis methodologies. Deep dives into Linux performance tools, flame graphs, and tracing.",
		},
	];

	return (
		<div className="space-y-16 max-w-3xl">
			{/* Back */}
			<Link
				to="/bookmarks"
				className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors duration-150 group"
			>
				<span className="group-hover:-translate-x-0.5 transition-transform duration-100">
					◄
				</span>
				ALL BOOKMARKS
			</Link>

			<header className="space-y-3">
				<h1 className="font-header text-5xl">{displayName}</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// BOOKMARK INDEX
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			<div className="border border-border">
				{bookmarks.length === 0 ? (
					<div className="py-16 flex items-center justify-center">
						<span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
							[ NO BOOKMARKS AVAILABLE ]
						</span>
					</div>
				) : (
					bookmarks.map((b, idx) => (
						<div
							key={b.title}
							className="border-b border-border last:border-b-0"
						>
							{/* Header row — always visible, click to expand/collapse */}
							<button
								type="button"
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								className="w-full flex items-center justify-between py-3 px-4 hover:bg-secondary transition-colors duration-150 group text-left"
							>
								<div className="space-y-1.5 flex-1 min-w-0">
									<span
										className={`font-mono text-[11px] transition-colors duration-150 ${
											openIndex === idx
												? "text-accent"
												: "text-foreground group-hover:text-accent"
										}`}
									>
										{b.title}
									</span>
									<div className="flex gap-2">
										{b.tags.map((tag) => (
											<span
												key={tag}
												className="font-mono text-[9px] text-muted-foreground border border-border px-1.5 py-0.5 uppercase"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
								<div className="flex items-center gap-3 shrink-0 ml-4">
									<a
										href={b.url}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="font-mono text-[10px] text-accent hover:text-foreground transition-colors duration-150"
									>
										&gt;&gt;&gt; VISIT
									</a>
									<span
										className={`font-mono text-[14px] text-muted-foreground transition-transform duration-150 ${
											openIndex === idx ? "rotate-90" : ""
										}`}
									>
										►
									</span>
								</div>
							</button>

							{/* Collapsible notes */}
							{openIndex === idx && (
								<div className="px-4 pb-4 pt-1 border-t border-border bg-muted/30">
									<p className="text-muted-foreground text-[13px] leading-relaxed">
										{b.notes}
									</p>
								</div>
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
}
