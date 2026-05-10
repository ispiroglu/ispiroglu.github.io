import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EI-01 — ABOUT" },
		{
			name: "description",
			content:
				"Unit specifications and capabilities. Backend engineer specializing in event-driven architecture and distributed systems.",
		},
	];
}

export default function About() {
	const experience = [
		{
			date: "2021 — PRESENT",
			role: "Senior Backend Engineer",
			company: "Delivery Hero",
		},
		{
			date: "2019 — 2021",
			role: "Backend Engineer",
			company: "Trendyol",
		},
		{
			date: "2018 — 2019",
			role: "Junior Software Engineer",
			company: "Softtech",
		},
	];

	return (
		<div className="space-y-20 max-w-5xl">
			{/* ── BIO + CONTACT (side by side) ── */}
			<section>
				<div className="flex items-center gap-4 mb-8">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// BIO
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
					{/* Bio text — left 8 cols */}
					<div className="md:col-span-8 space-y-8">
						<h2 className="font-header text-3xl lg:text-4xl leading-tight">
							Architecting digital infrastructure with a focus on structural
							clarity.
						</h2>

						<div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
							<p>
								Backend engineer building event-driven systems and APIs with a
								focus on reliability, consistency, and performance. I design
								clean interfaces, strong observability, and simple systems that
								scale.
							</p>
							<p>
								Specializing in distributed architecture with Go and Kotlin on
								the JVM. My approach strips away the superfluous to reveal the
								essential architecture — interfaces that feel like technical
								manuals: transparent, governed by strict rules, and optimized
								for utility.
							</p>
						</div>
					</div>

					{/* Contact card — right 4 cols, pinned at top */}
					<div className="md:col-span-4">
						<div className="border border-border bg-card p-5 space-y-3 sticky top-8">
							<div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
								<span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
									/// CONTACT
								</span>
							</div>
							<div className="flex justify-between items-center border-b border-border pb-2">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									LOC
								</span>
								<span className="font-mono text-[11px] text-foreground">
									ISTANBUL, TR
								</span>
							</div>
							<div className="flex justify-between items-center border-b border-border pb-2">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									MAIL
								</span>
								<span className="font-mono text-[11px] text-foreground">
									SYS@EI-01.NET
								</span>
							</div>
							<div className="flex justify-between items-center pt-1">
								<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									PGP
								</span>
								<span className="font-mono text-[11px] text-foreground tabular-nums">
									0x8F9B2C1A
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── EXPERIENCE ── */}
			<section>
				<div className="flex items-center gap-4 mb-8">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// EXPERIENCE
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>

				<div className="border border-border">
					{experience.map((item) => (
						<div
							key={`${item.date}-${item.role}`}
							className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-5 px-4 hover:bg-secondary transition-colors duration-150"
						>
							<div className="md:col-span-4 flex items-start md:items-center">
								<span className="font-mono text-[11px] text-muted-foreground tabular-nums">
									{item.date}
								</span>
							</div>
							<div className="md:col-span-8 space-y-1">
								<h3 className="font-header text-lg">{item.role}</h3>
								<p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
									{item.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
