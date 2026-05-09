import type { Route } from "./+types/journey";
import { SectionHeader } from "~/components/brutalist/section-header";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "JOURNEY — EVREN ISPIROGLU" },
		{ name: "description", content: "Personal and professional timeline." },
	];
}

export default function Journey() {
	return (
		<div className="space-y-16 max-w-3xl">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">JOURNEY</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// PERSONAL AND PROFESSIONAL TIMELINE
				</p>
			</header>

			{/* 2024 */}
			<section className="space-y-4">
				<SectionHeader label="2024" />
				<div className="border border-border p-4 space-y-3 hover:bg-secondary transition-none">
					<div className="flex items-center gap-3">
						<span className="font-mono text-xs text-muted-foreground">
							[ 2024.06 ]
						</span>
						<span className="font-mono text-sm">
							GRADUATED FROM YILDIZ TECHNICAL UNIVERSITY
						</span>
					</div>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Completed BSc in Computer Engineering with GPA 3.39. Focused on
						Distributed Systems, Advanced Operating Systems, Databases, and
						Software Architecture.
					</p>
				</div>
			</section>

			{/* 2023 */}
			<section className="space-y-4">
				<SectionHeader label="2023" />

				<div className="border border-border p-4 space-y-3 hover:bg-secondary transition-none">
					<div className="flex items-center gap-3">
						<span className="font-mono text-xs text-muted-foreground">
							[ 2023.11 ]
						</span>
						<span className="font-mono text-sm">
							STARTED AT TRENDYOL AS MID-LEVEL SOFTWARE ENGINEER
						</span>
					</div>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Promoted and joined Trendyol to work on high-scale event-driven
						microservices. Architected systems handling ~1.4M req/min with CQRS
						+ CDC patterns.
					</p>
				</div>

				<div className="border border-border p-4 space-y-3 hover:bg-secondary transition-none">
					<div className="flex items-center gap-3">
						<span className="font-mono text-xs text-muted-foreground">
							[ 2023 ]
						</span>
						<span className="font-mono text-sm">
							CO-INITIATED CHAKI FRAMEWORK
						</span>
					</div>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Started contributing to Chaki, an open-source Golang framework
						designed to reduce boilerplate in microservice development.
						Implemented auto-configuration and observability modules.
					</p>
				</div>
			</section>

			{/* 2022 */}
			<section className="space-y-4">
				<SectionHeader label="2022" />

				<div className="border border-border p-4 space-y-3 hover:bg-secondary transition-none">
					<div className="flex items-center gap-3">
						<span className="font-mono text-xs text-muted-foreground">
							[ 2022.09 ]
						</span>
						<span className="font-mono text-sm">JOINED DOĞUŞ TECHNOLOGY</span>
					</div>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Started as Trainee Software Engineer, later promoted to Junior.
						Worked on multi-tenant authentication APIs, Kafka integrations, and
						distributed system architectures.
					</p>
				</div>
			</section>

			{/* 2020 */}
			<section className="space-y-4">
				<SectionHeader label="2020" />

				<div className="border border-border p-4 space-y-3 hover:bg-secondary transition-none">
					<div className="flex items-center gap-3">
						<span className="font-mono text-xs text-muted-foreground">
							[ 2020 ]
						</span>
						<span className="font-mono text-sm">
							STARTED COMPUTER ENGINEERING AT YILDIZ TECHNICAL UNIVERSITY
						</span>
					</div>
					<p className="text-sm text-muted-foreground leading-relaxed">
						Began my journey in computer engineering, focusing on distributed
						systems and backend development.
					</p>
				</div>
			</section>
		</div>
	);
}
