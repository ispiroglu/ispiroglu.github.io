import type { Route } from "./+types/about";
import { SectionHeader } from "~/components/brutalist/section-header";
import { DataRow } from "~/components/brutalist/section-header";
import { TechMarker } from "~/components/brutalist/ascii-frame";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "ABOUT — EVREN ISPIROGLU" },
		{
			name: "description",
			content:
				"About Evren Ispiroglu, a backend engineer specializing in event-driven systems and distributed architecture.",
		},
	];
}

export default function About() {
	return (
		<div className="space-y-16 max-w-3xl">
			{/* Header */}
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">ABOUT</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// UNIT SPECIFICATIONS AND CAPABILITIES
				</p>
			</header>

			{/* Identity */}
			<section className="space-y-4">
				<SectionHeader label="IDENTITY" />
				<p className="text-muted-foreground leading-relaxed">
					Backend engineer building event-driven systems and APIs with a focus
					on reliability, consistency, and performance. I design clean
					interfaces, strong observability, and simple systems that scale.
				</p>
			</section>

			{/* Specifications */}
			<section className="space-y-4">
				<SectionHeader label="SPECIFICATIONS" />
				<div className="border border-border divide-y divide-border">
					<DataRow label="ROLE" value="BACKEND ENGINEER" />
					<DataRow label="EXPERIENCE" value="3+ YEARS" />
					<DataRow label="PRIMARY STACK" value="GO / KOTLIN (JVM)" />
					<DataRow label="LOCATION" value="REMOTE" />
					<DataRow
						label="STATUS"
						value={<span className="text-[#4AF626]">AVAILABLE</span>}
					/>
				</div>
			</section>

			{/* Primary Stack */}
			<section className="space-y-4">
				<SectionHeader label="PRIMARY STACK" />
				<div className="flex flex-wrap gap-2">
					{[
						"GO",
						"KOTLIN",
						"JAVA",
						"KAFKA",
						"GRPC",
						"KUBERNETES",
						"POSTGRESQL",
						"ELASTICSEARCH",
						"COUCHBASE",
						"PROMETHEUS",
						"OPENTELEMETRY",
					].map((tech) => (
						<TechMarker key={tech} text={tech} />
					))}
				</div>
			</section>

			{/* Domains */}
			<section className="space-y-4">
				<SectionHeader label="DOMAINS" />
				<div className="border border-border divide-y divide-border">
					<DataRow label="PARADIGM" value="EVENT-DRIVEN ARCHITECTURE" />
					<DataRow
						label="PATTERNS"
						value="CQRS, CDC, IDEMPOTENCY, CIRCUIT BREAKING"
					/>
					<DataRow label="PLATFORMS" value="ON-PREM KUBERNETES WITH CI/CD" />
					<DataRow label="OBSERVABILITY" value="GRAFANA, OPENTELEMETRY" />
				</div>
			</section>

			{/* Contact */}
			<section className="space-y-4">
				<SectionHeader label="CONTACT" />
				<div className="flex gap-4">
					<a
						href="mailto:work@eispiroglu.com"
						className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono-data text-[11px] text-foreground hover:border-accent hover:text-accent transition-none"
					>
						<span className="text-accent">&#62;&#62;&#62;</span>
						EMAIL
					</a>
					<a
						href="https://linkedin.com/in/eispiroglu"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono-data text-[11px] text-muted-foreground hover:text-foreground transition-none"
					>
						<span className="text-muted-foreground">///</span>
						LINKEDIN
					</a>
				</div>
			</section>
		</div>
	);
}
