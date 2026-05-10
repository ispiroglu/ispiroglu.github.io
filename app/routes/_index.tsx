import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { ActivityFeed } from "~/components/light/activity-feed";

export async function loader() {
	return {};
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — CORE_SYSTEM" },
		{
			name: "description",
			content:
				"Architecting robust backend systems & scalable data pipelines. Specializing in distributed architecture and high-performance APIs.",
		},
	];
}

export default function Index({}: Route.ComponentProps) {
	const activityEntries = [
		{
			timestamp: "14:32:01",
			type: "COMMIT",
			typeColor: "green" as const,
			message:
				"Optimized database query routing for primary service mesh. Latency reduced by 14ms.",
		},
		{
			timestamp: "09:15:44",
			type: "DEPLOY",
			typeColor: "red" as const,
			message: "v2.4.1 rolled out to production environment.",
		},
		{
			timestamp: "08:00:00",
			type: "SYSTEM",
			typeColor: "muted" as const,
			message: "Automated backup sequence completed successfully.",
		},
		{
			timestamp: "YEST",
			type: "MERGE",
			typeColor: "green" as const,
			message: "Feature branch 'auth-refactor' merged into main.",
		},
	];

	const techStack = [
		"Go",
		"Kotlin",
		"TypeScript",
		"Kafka",
		"gRPC",
		"Kubernetes",
		"PostgreSQL",
		"Redis",
		"Elasticsearch",
	];

	return (
		<div className="space-y-20 max-w-6xl">
			{/* ── HERO / IDENTIFICATION ── */}
			<section>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
					<div className="lg:col-span-8 space-y-6">
						{/* Section label */}
						<div className="flex items-center gap-4">
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								/// IDENTIFICATION
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>

						{/* Headline */}
						<h1 className="font-header text-5xl lg:text-7xl leading-[0.9]">
							Architecting robust backend systems &amp; scalable data pipelines.
						</h1>

						{/* Subtitle */}
						<p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
							Specializing in distributed architecture, high-performance APIs,
							and maintaining order in complex technical ecosystems. Currently
							deploying solutions across multiple cloud environments.
						</p>

						{/* CTAs */}
						<div className="flex gap-4 pt-2">
							<Link
								to="/projects"
								className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-[11px] text-foreground hover:border-accent hover:text-accent transition-colors duration-150 active:translate-y-px uppercase tracking-wider"
							>
								<span className="text-accent">&gt;&gt;&gt;</span>
								VIEW PROJECTS
							</Link>
							<Link
								to="/logs"
								className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-150 active:translate-y-px uppercase tracking-wider"
							>
								<span className="text-muted-foreground">&gt;&gt;&gt;</span>
								VIEW LOGS
							</Link>
						</div>
					</div>

					{/* Current Node (right side, desktop only) */}
					<div className="hidden lg:block lg:col-span-4 lg:text-right">
						<div className="inline-flex flex-col items-end gap-2 border-r-2 border-accent pr-4">
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								Current Node
							</span>
							<span className="font-mono text-[11px] text-foreground font-bold tabular-nums">
								us-west-2a
							</span>
							<span className="font-mono text-[10px] text-status-green flex items-center gap-1.5 uppercase tracking-wider">
								<span className="w-1.5 h-1.5 bg-status-green inline-block animate-pulse" />
								ACTIVE
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* ── LATEST ACTIVITY + SYSTEM STATE ── */}
			<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
				{/* Terminal Feed */}
				<div className="lg:col-span-8 space-y-4">
					<div className="flex items-center gap-4">
						<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
							/// LATEST_ACTIVITY
						</span>
						<div className="flex-1 h-px bg-border" />
					</div>

					<ActivityFeed entries={activityEntries} />
				</div>

				{/* Status Sidebar */}
				<aside className="lg:col-span-4 space-y-8">
					{/* System State */}
					<div className="space-y-3">
						<div className="flex items-center gap-4">
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
								/// SYSTEM_STATE
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>

						<div className="border border-border bg-card">
							<div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									Uptime
								</span>
								<span className="font-mono text-[11px] text-foreground tabular-nums">
									99.99%
								</span>
							</div>
							<div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									Load Avg
								</span>
								<span className="font-mono text-[11px] text-foreground tabular-nums">
									0.14, 0.08, 0.05
								</span>
							</div>
							<div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									Memory
								</span>
								<span className="font-mono text-[11px] text-foreground tabular-nums">
									32GB / 64GB
								</span>
							</div>
							<div className="flex justify-between items-center py-2.5 px-4">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									Version
								</span>
								<span className="font-mono text-[11px] text-foreground tabular-nums">
									v2.6.1
								</span>
							</div>
						</div>
					</div>

					{/* Core Stack */}
					<div className="space-y-3">
						<div className="flex items-center gap-4">
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
								/// CORE_STACK
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>

						<div className="flex flex-wrap gap-2">
							{techStack.map((tech) => (
								<span
									key={tech}
									className="font-mono text-[9px] text-foreground border border-border px-2 py-0.5 uppercase tracking-wider"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</aside>
			</section>
		</div>
	);
}
