import type { Route } from "./+types/workspace";
import {
	SectionHeader,
	Compartment,
} from "~/components/brutalist/section-header";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "WORKSPACE — EVREN ISPIROGLU" },
		{ name: "description", content: "Desk setup and daily tools." },
	];
}

const hardware = [
	'MacBook Pro 16" (M3 Max)',
	"Apple Studio Display",
	"Magic Keyboard & Magic Trackpad",
	"AirPods Max",
];

const devTools = [
	"GoLand — Go development",
	"IntelliJ IDEA — Kotlin/Java + Spring Boot",
	"iTerm2 — Custom terminal workflows",
	"Docker Desktop — Local containerized development",
	"k9s — Kubernetes cluster management",
	"Postman — API testing + gRPC debugging",
	"Grafana — Observability + monitoring",
	"DBeaver / DataGrip — Database work",
];

const productivity = [
	"Raycast — Quick actions + app launching",
	"1Password — Secure credential management",
	"GitHub CLI — Streamlined code review",
];

export default function Workspace() {
	return (
		<div className="space-y-12 max-w-3xl">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">WORKSPACE</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// DESK SETUP AND DAILY EQUIPMENT
				</p>
			</header>

			<p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
				My workspace is designed for productivity and comfort. Investing in
				quality tools that help me do my best work building distributed systems
				and high-performance backend services.
			</p>

			<section className="space-y-4">
				<SectionHeader label="HARDWARE" />
				<Compartment>
					<ul className="space-y-2">
						{hardware.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 font-mono text-sm"
							>
								<span className="text-accent shrink-0">&#62;&#62;</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Compartment>
			</section>

			<section className="space-y-4">
				<SectionHeader label="DEVELOPMENT TOOLS" />
				<Compartment>
					<ul className="space-y-2">
						{devTools.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 font-mono text-sm"
							>
								<span className="text-accent shrink-0">&#62;&#62;</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Compartment>
			</section>

			<section className="space-y-4">
				<SectionHeader label="PRODUCTIVITY" />
				<Compartment>
					<ul className="space-y-2">
						{productivity.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 font-mono text-sm"
							>
								<span className="text-accent shrink-0">&#62;&#62;</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Compartment>
			</section>
		</div>
	);
}
