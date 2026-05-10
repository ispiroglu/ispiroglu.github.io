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

interface Bookmark {
	title: string;
	url: string;
	tags: string[];
	notes: string;
}

const categoryBookmarks: Record<string, Bookmark[]> = {
	engineering: [
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
		{
			title: "The Architecture of Open Source Applications",
			url: "https://aosabook.org",
			tags: ["ARCHITECTURE", "OPEN_SOURCE"],
			notes:
				"A collection of essays from the creators of major open-source projects covering architectural decisions, trade-offs, and design philosophies.",
		},
		{
			title: "Patterns of Enterprise Application Architecture",
			url: "https://martinfowler.com/books/eaa.html",
			tags: ["ARCHITECTURE", "PATTERNS"],
			notes:
				"Martin Fowler's catalog of enterprise integration patterns. Covers domain logic, data source architectural patterns, and web presentation.",
		},
	],
	design: [
		{
			title: "Refactoring UI",
			url: "https://refactoringui.com",
			tags: ["UI", "PRACTICAL"],
			notes:
				"Practical design tactics for developers. Tactical advice on layout, typography, color, and hierarchy without requiring design background.",
		},
		{
			title: "Butterick's Practical Typography",
			url: "https://practicaltypography.com",
			tags: ["TYPOGRAPHY", "FUNDAMENTALS"],
			notes:
				"Typography guide for real-world use. Covers font selection, text formatting, page layout, and common mistakes.",
		},
		{
			title: "Brutalist Web Design",
			url: "https://brutalist-web.design",
			tags: ["BRUTALISM", "DESIGN_PHILOSOPHY"],
			notes:
				"Guidelines for brutalist web design — raw, honest, content-first approach that rejects decorative excess.",
		},
	],
	tools: [
		{
			title: "Obsidian",
			url: "https://obsidian.md",
			tags: ["NOTE_TAKING", "MARKDOWN"],
			notes:
				"Knowledge base that works on local Markdown files. Graph view, backlinks, and plugin ecosystem for development notes.",
		},
		{
			title: "Linear",
			url: "https://linear.app",
			tags: ["PROJECT_MANAGEMENT", "ISSUE_TRACKING"],
			notes:
				"Issue tracking and project management built for speed. Keyboard-first interface with flexible workflows.",
		},
		{
			title: "Raycast",
			url: "https://raycast.com",
			tags: ["LAUNCHER", "PRODUCTIVITY"],
			notes:
				"Extensible launcher for macOS. Built-in integrations for GitHub, Jira, calendar, and custom scripts via extensions.",
		},
		{
			title: "Ghostty",
			url: "https://ghostty.org",
			tags: ["TERMINAL", "GPU"],
			notes:
				"GPU-accelerated terminal emulator. Fast rendering, native platform integration, and extensive configuration options.",
		},
		{
			title: "tmux",
			url: "https://github.com/tmux/tmux",
			tags: ["TERMINAL", "MULTIPLEXER"],
			notes:
				"Terminal multiplexer for persistent sessions, split panes, and scripting. Essential for remote development workflows.",
		},
	],
	reading: [
		{
			title: "Conway's Law: The Organizational Mirror",
			url: "/logs/conways-law",
			tags: ["ORGANIZATIONS", "SYSTEMS"],
			notes:
				"How communication structures shape software architecture. Conway's Law applied to modern distributed teams and microservices.",
		},
		{
			title: "Distributed Systems for Fun and Profit",
			url: "https://book.mixu.net/distsys/",
			tags: ["DISTRIBUTED", "SYSTEMS"],
			notes:
				"Accessible introduction to distributed systems theory. Covers time, replication, fault tolerance, and consensus.",
		},
		{
			title: "Kafka: The Definitive Guide",
			url: "https://www.confluent.io/resources/kafka-the-definitive-guide/",
			tags: ["KAFKA", "STREAMING"],
			notes:
				"Comprehensive guide to Apache Kafka. Covers producers, consumers, stream processing, and operations at scale.",
		},
	],
	reference: [
		{
			title: "Go Standard Library Documentation",
			url: "https://pkg.go.dev/std",
			tags: ["GO", "DOCS"],
			notes:
				"Official Go standard library reference. Well-designed packages for networking, concurrency, testing, and more.",
		},
		{
			title: "OpenTelemetry Documentation",
			url: "https://opentelemetry.io/docs/",
			tags: ["OBSERVABILITY", "TRACING"],
			notes:
				"Vendor-neutral observability framework. APIs, SDKs, and tools for distributed tracing, metrics, and logging.",
		},
		{
			title: "gRPC Documentation",
			url: "https://grpc.io/docs/",
			tags: ["gRPC", "PROTOBUF"],
			notes:
				"High-performance RPC framework. Protocol Buffers, service definitions, streaming, and best practices.",
		},
		{
			title: "PostgreSQL Documentation",
			url: "https://www.postgresql.org/docs/",
			tags: ["POSTGRESQL", "DATABASE"],
			notes:
				"Official PostgreSQL manuals. Covers SQL syntax, performance tuning, replication, and advanced features like window functions.",
		},
		{
			title: "Spring Boot Reference",
			url: "https://docs.spring.io/spring-boot/docs/current/reference/",
			tags: ["SPRING", "JVM"],
			notes:
				"Spring Boot reference documentation. Auto-configuration, actuators, testing, and production-ready features.",
		},
	],
};

export default function BookmarksCategory({ params }: Route.ComponentProps) {
	const category = params.category || "unknown";
	const displayName = category.toUpperCase();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const bookmarks = categoryBookmarks[category] || [];

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
							[ NO BOOKMARKS IN THIS CATEGORY ]
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
