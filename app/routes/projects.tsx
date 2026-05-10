import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — PROJECTS" },
		{ name: "description", content: "Engineering projects and systems." },
	];
}

interface Project {
	title: string;
	status: "stable" | "archived" | "active-dev";
	statusLabel: string;
	description: string;
	tech: string[];
	commits: number;
	url?: string;
}

export default function Projects() {
	const projects: Project[] = [
		{
			title: "Portfolio API",
			status: "stable",
			statusLabel: "v2.6.1_STABLE",
			description:
				"Backend service powering this website. Event-driven architecture with Go, Kafka, and PostgreSQL. Handles content delivery, views tracking, and MDX rendering pipeline.",
			tech: ["Go", "Kafka", "PostgreSQL", "Docker"],
			commits: 4291,
		},
		{
			title: "Chefbook",
			status: "active-dev",
			statusLabel: "ACTIVE_DEV",
			description:
				"Recipe management and meal planning application with multi-user support. Built with Next.js, tRPC, and Prisma. Features collaborative grocery lists and nutritional analysis.",
			tech: ["TypeScript", "Next.js", "tRPC", "Prisma", "PostgreSQL"],
			commits: 1105,
		},
		{
			title: "PICrawler",
			status: "archived",
			statusLabel: "ARCHIVED",
			description:
				"Distributed web crawler that collected and processed stock market data from multiple sources. Used levelDB for local storage and custom BFT-inspired consensus for data integrity.",
			tech: ["Go", "LevelDB", "Protobuf", "Docker"],
			commits: 842,
		},
		{
			title: "Scopy",
			status: "stable",
			statusLabel: "v1.0.0_STABLE",
			description:
				"Financial analytics tool for automated portfolio tracking and reporting. Built with Kotlin/Spring Boot backend and React frontend. Integrates with multiple brokerage APIs.",
			tech: ["Kotlin", "Spring Boot", "React", "PostgreSQL"],
			commits: 2560,
		},
	];

	const statusStyles = {
		stable: "border-status-green text-status-green",
		"active-dev": "border-accent text-accent",
		archived: "border-muted-foreground text-muted-foreground",
	};

	return (
		<div className="space-y-16 max-w-5xl">
			{/* Header */}
			<header className="space-y-3">
				<h1 className="font-header text-5xl">PROJECTS</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// ACTIVE REPOSITORIES
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			{/* Project Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{projects.map((project) => (
					<article
						key={project.title}
						className="border border-border bg-card p-6 flex flex-col hover:bg-secondary transition-colors duration-150 group"
					>
						{/* Title + Status */}
						<div className="flex justify-between items-start gap-3 mb-4">
							<h2 className="font-header text-lg uppercase">{project.title}</h2>
							<span
								className={`font-mono text-[9px] border px-2 py-0.5 uppercase tracking-wider whitespace-nowrap rounded-sm ${statusStyles[project.status]}`}
							>
								{project.statusLabel}
							</span>
						</div>

						{/* Description */}
						<p className="text-muted-foreground text-[14px] leading-relaxed mb-6 flex-grow">
							{project.description}
						</p>

						{/* Tech stack */}
						<div className="mb-5">
							<span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-2 block">
								/// TECH STACK
							</span>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<span
										key={t}
										className="font-mono text-[9px] text-foreground border border-border px-2 py-0.5 uppercase"
									>
										{t}
									</span>
								))}
							</div>
						</div>

						{/* Footer */}
						<div className="pt-4 border-t border-border flex justify-between items-center">
							<span className="font-mono text-[9px] text-muted-foreground tabular-nums">
								{project.commits.toLocaleString()} COMMITS
							</span>
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="font-mono text-[10px] text-accent hover:text-foreground transition-colors duration-150 uppercase flex items-center gap-1 group-active:translate-y-px"
								>
									&gt;&gt;&gt; VIEW SOURCE
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
