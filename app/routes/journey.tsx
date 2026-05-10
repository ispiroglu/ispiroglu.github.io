import type { Route } from "./+types/journey";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — JOURNEY LOG" },
		{ name: "description", content: "Career trajectory and milestone log." },
	];
}

export default function Journey() {
	const events = [
		{
			year: 2025,
			date: "2025.03",
			event: "Landed as Senior Backend Engineer at Delivery Hero",
			description:
				"Joined the logistics group building event-driven fulfillment systems with Go, Kotlin, and Kafka. Designing high-throughput APIs serving hundreds of thousands of requests per second.",
		},
		{
			year: 2024,
			date: "2024.06",
			event: "Promoted to Mid-Level Backend Engineer at Trendyol",
			description:
				"Took ownership of the order management pipeline, migrating legacy REST endpoints to event-driven architectures with Kafka. Reduced P99 latency by 40%.",
		},
		{
			year: 2023,
			date: "2023.01",
			event: "Started Backend Engineering at Trendyol",
			description:
				"Joined Turkey's largest e-commerce platform. Built high-scale order processing and inventory management APIs handling millions of daily transactions.",
		},
		{
			year: 2022,
			date: "2022.07",
			event: "Graduated from Istanbul University",
			description:
				"Computer Engineering degree. Focused on distributed systems, databases, and software architecture.",
		},
	];

	const grouped = new Map<number, typeof events>();
	for (const e of events) {
		if (!grouped.has(e.year)) grouped.set(e.year, []);
		grouped.get(e.year)!.push(e);
	}

	return (
		<div className="space-y-16 max-w-3xl">
			<header className="space-y-3">
				<h1 className="font-header text-5xl">JOURNEY LOG</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// CAREER TRAJECTORY
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			<div className="space-y-12">
				{Array.from(grouped.entries())
					.sort(([a], [b]) => b - a)
					.map(([year, yearEvents]) => (
						<div key={year}>
							{/* Year header */}
							<div className="flex items-center gap-4 mb-6">
								<div className="w-1.5 h-1.5 bg-accent" />
								<span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
									{year}
								</span>
								<div className="flex-1 h-px bg-border" />
							</div>

							<div className="border-l-2 border-border ml-1.5 pl-8 space-y-6">
								{yearEvents.map((e) => (
									<div key={e.date} className="relative">
										<div className="absolute -left-[34px] top-1.5 w-1.5 h-1.5 bg-accent" />
										<div className="space-y-2">
											<div className="flex items-baseline gap-4">
												<time className="font-mono text-[10px] text-muted-foreground tabular-nums">
													{e.date}
												</time>
												<h3 className="font-header text-sm uppercase tracking-tight">
													{e.event}
												</h3>
											</div>
											<p className="text-muted-foreground text-[14px] leading-relaxed">
												{e.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
