import type { Route } from "./+types/stack";
import { StatusBadge } from "~/components/light/status-badge";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — TECH STACK" },
		{
			name: "description",
			content:
				"Specification document. Current technology stack and infrastructure.",
		},
	];
}

interface StackItem {
	name: string;
	description: string;
	status: "stable" | "experimental" | "migrating";
}

interface StackSection {
	label: string;
	items: StackItem[];
}

export default function Stack() {
	const sections: StackSection[] = [
		{
			label: "/// 01_LANGUAGES",
			items: [
				{
					name: "Go (Golang)",
					description:
						"Primary backend language for all service mesh components",
					status: "stable",
				},
				{
					name: "Kotlin",
					description: "JVM ecosystem development for Spring Boot services",
					status: "stable",
				},
				{
					name: "TypeScript",
					description: "Full-stack web development and tooling",
					status: "stable",
				},
				{
					name: "Python",
					description: "Data pipelines, automation scripts, ML experiments",
					status: "migrating",
				},
				{
					name: "Rust",
					description: "Systems research and performance-critical tooling",
					status: "experimental",
				},
			],
		},
		{
			label: "/// 02_STORAGE",
			items: [
				{
					name: "PostgreSQL",
					description: "Primary relational store for all transactional data",
					status: "stable",
				},
				{
					name: "Redis",
					description: "In-memory cache and pub/sub message broker",
					status: "stable",
				},
				{
					name: "Elasticsearch",
					description: "Full-text search and log aggregation",
					status: "stable",
				},
			],
		},
		{
			label: "/// 03_INFRASTRUCTURE",
			items: [
				{
					name: "AWS",
					description: "Cloud provider. ECS, RDS, ElastiCache, MSK",
					status: "stable",
				},
				{
					name: "Kubernetes",
					description:
						"Container orchestration for on-prem and edge deployments",
					status: "stable",
				},
				{
					name: "Terraform",
					description: "Infrastructure as Code for reproducible provisioning",
					status: "stable",
				},
				{
					name: "Docker",
					description: "Containerization for all services",
					status: "stable",
				},
				{
					name: "Cloudflare",
					description: "CDN, DNS, Workers, and edge computing platform",
					status: "stable",
				},
			],
		},
	];

	return (
		<div className="space-y-20 max-w-4xl">
			{/* Header */}
			<header className="space-y-3">
				<h1 className="font-header text-5xl">TECHNOLOGY STACK</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// SPECIFICATION_DOCUMENT
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			{/* Sections */}
			<div className="space-y-20">
				{sections.map((section) => (
					<section key={section.label}>
						<div className="border-b border-border pb-3 mb-4">
							<h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								{section.label}
							</h2>
						</div>

						<div className="flex flex-col">
							{section.items.map((item) => (
								<div
									key={item.name}
									className="grid grid-cols-12 gap-4 py-3 px-2 -mx-2 border-b border-border hover:bg-secondary transition-colors duration-150 group"
								>
									<div className="col-span-4 flex items-center">
										<span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition-colors duration-150 uppercase tracking-wider">
											{item.name.replace(/[^A-Z0-9]/g, "_").toUpperCase()}
										</span>
									</div>
									<div className="col-span-5 flex items-center">
										<span className="text-[14px] text-foreground/80">
											{item.description}
										</span>
									</div>
									<div className="col-span-3 flex items-center justify-end">
										<StatusBadge
											text={item.status.toUpperCase()}
											status={item.status}
										/>
									</div>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
