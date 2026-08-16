import { StatusBadge } from "~/components/light/status-badge";

interface StackItem {
	name: string;
	description: string;
	status: "stable" | "experimental" | "migrating";
}

interface StackSection {
	label: string;
	items: StackItem[];
}

export function StackPage() {
	const sections: StackSection[] = [
		{
			label: "/// 01_LANGUAGES",
			items: [
				{
					name: "Go",
					description:
						"Primary backend language. Service mesh, frameworks, CLI tooling. Foundation of Chaki and Mercurius.",
					status: "stable",
				},
				{
					name: "Kotlin",
					description:
						"JVM ecosystem. Spring Boot microservices. Multi-tenant auth APIs. High-throughput event processing.",
					status: "stable",
				},
				{
					name: "Java",
					description:
						"Spring Boot enterprise services. Legacy migration targets. Battle-tested JVM reliability.",
					status: "stable",
				},
				{
					name: "TypeScript",
					description:
						"Full-stack web development. React back-office tools. Edge deployment with Cloudflare Workers.",
					status: "stable",
				},
				{
					name: "Python",
					description:
						"Data pipelines and automation scripts. Gradually migrating to Go for performance-critical paths.",
					status: "migrating",
				},
			],
		},
		{
			label: "/// 02_FRAMEWORKS",
			items: [
				{
					name: "Spring Boot",
					description:
						"Primary JVM microservice framework. Auto-configuration, actuator health checks, embedded servers.",
					status: "stable",
				},
				{
					name: "Uber FX",
					description:
						"Go dependency injection framework. Foundation of Chaki — auto-configuration, lifecycle hooks, modular wiring.",
					status: "stable",
				},
				{
					name: "React",
					description:
						"Frontend library for back-office tools, portfolio site, and internal dashboards. SSR with React Router.",
					status: "stable",
				},
				{
					name: "gRPC",
					description:
						"Service-to-service communication. Bidirectional streaming in Mercurius. Low-latency binary protocol.",
					status: "stable",
				},
			],
		},
		{
			label: "/// 03_MESSAGING",
			items: [
				{
					name: "Apache Kafka",
					description:
						"Event-driven backbone. High-throughput streaming. CDC source and event sourcing at 1.2M+ RPM.",
					status: "stable",
				},
				{
					name: "gRPC Streaming",
					description:
						"Bidirectional pub-sub messaging in Mercurius. Low-latency alternative for internal service events.",
					status: "experimental",
				},
			],
		},
		{
			label: "/// 04_DATABASES",
			items: [
				{
					name: "PostgreSQL",
					description:
						"Primary relational database. CDC source with logical replication. Transactional consistency.",
					status: "stable",
				},
				{
					name: "Elasticsearch",
					description:
						"Full-text search and analytics engine. Log aggregation. Q&A domain optimized queries.",
					status: "stable",
				},
				{
					name: "Couchbase",
					description:
						"Distributed NoSQL document database. Low-latency key-value workloads. Multi-cluster deployment.",
					status: "stable",
				},
				{
					name: "MongoDB",
					description:
						"Document database for specific services. Migrating workloads to PostgreSQL and Couchbase.",
					status: "migrating",
				},
			],
		},
		{
			label: "/// 05_DEVOPS",
			items: [
				{
					name: "Docker",
					description:
						"Containerization for all services. Multi-stage builds. Consistent dev-to-prod environments.",
					status: "stable",
				},
				{
					name: "Kubernetes",
					description:
						"Production container orchestration. Horizontal scaling, rolling updates, service discovery.",
					status: "stable",
				},
				{
					name: "GitHub Actions",
					description:
						"CI/CD pipeline automation. Testing, building, deploying with matrix builds and caching.",
					status: "stable",
				},
				{
					name: "Jenkins",
					description:
						"Legacy CI/CD server. Migrating pipelines to GitHub Actions for faster feedback loops.",
					status: "migrating",
				},
				{
					name: "Cloudflare",
					description:
						"CDN, DNS, Workers edge compute. Portfolio site deployment and content delivery.",
					status: "stable",
				},
			],
		},
		{
			label: "/// 06_OBSERVABILITY",
			items: [
				{
					name: "Grafana",
					description:
						"Metrics visualization and dashboards. System health monitoring. Campaign traffic observability.",
					status: "stable",
				},
				{
					name: "Prometheus",
					description:
						"Metrics collection and alerting. Time-series database. Infrastructure and application metrics.",
					status: "stable",
				},
				{
					name: "OpenTelemetry",
					description:
						"Distributed tracing specification. Integrated into Chaki framework. Cross-service request tracing.",
					status: "stable",
				},
			],
		},
		{
			label: "/// 07_PATTERNS",
			items: [
				{
					name: "CQRS",
					description:
						"Command Query Responsibility Segregation. Separate read/write models for optimized query performance.",
					status: "stable",
				},
				{
					name: "CDC",
					description:
						"Change Data Capture async data flows. PostgreSQL logical replication to Kafka for downstream consumers.",
					status: "stable",
				},
				{
					name: "Event-Driven Architecture",
					description:
						"Kafka event sourcing backbone. Asynchronous service communication. Campaign-scale throughput.",
					status: "stable",
				},
				{
					name: "Microservices",
					description:
						"Distributed decomposition of monoliths. Independent deployability. Multi-tenant architectures.",
					status: "stable",
				},
			],
		},
	];

	return (
		<div className="space-y-20 max-w-4xl">
			<header className="space-y-3">
				<h1 className="font-header text-5xl">TECHNOLOGY STACK</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// SPECIFICATION_DOCUMENT
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

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
											{item.name.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase()}
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
