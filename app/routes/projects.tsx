import { ExternalLink } from "lucide-react";
import type { Route } from "./+types/projects";
import { TechMarker } from "~/components/brutalist/ascii-frame";

const projects = [
	{
		name: "CHAKI",
		org: "TRENDYOL",
		description:
			"Co-initiated an open-source Golang framework built to reduce boilerplate. Implemented auto-configuration and observability modules, streamlining microservice development.",
		url: "https://github.com/Trendyol/chaki",
		tags: ["GO", "FRAMEWORK", "MICROSERVICES"],
	},
	{
		name: "MERCURIUS",
		org: "PERSONAL",
		description:
			"Built a high-throughput message broker in Go with gRPC. Designed for performance and reliability in distributed systems.",
		url: "https://github.com/ispiroglu/mercurius",
		tags: ["GO", "GRPC", "MESSAGE BROKER"],
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "PROJECTS — EVREN ISPIROGLU" },
		{ name: "description", content: "Open-source projects and contributions." },
	];
}

export default function Projects() {
	return (
		<div className="space-y-12">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">PROJECTS</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// OPEN-SOURCE PROJECTS AND CONTRIBUTIONS
				</p>
			</header>

			<div className="space-y-0">
				{projects.map((project) => (
					<div
						key={project.name}
						className="border border-border p-5 space-y-4 hover:bg-secondary transition-none"
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<div className="flex items-center gap-3 mb-1">
									<h2 className="font-header text-xl">{project.name}</h2>
									<span className="font-mono-data text-[10px] text-muted-foreground">
										{project.org}
									</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<TechMarker key={tag} text={tag} />
									))}
								</div>
							</div>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-none"
								aria-label={`View ${project.name} on GitHub`}
							>
								<ExternalLink className="w-4 h-4" strokeWidth={1.5} />
							</a>
						</div>

						<p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
							{project.description}
						</p>

						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 font-mono-data text-[11px] text-foreground hover:text-accent transition-none"
						>
							<span className="text-accent">&#62;&#62;&#62;</span>
							VIEW SOURCE
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
