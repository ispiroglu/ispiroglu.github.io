import { Link } from "react-router";
import type { Route } from "./+types/stack";
import { generatedTools } from "~/lib/stack.generated";
import { SectionHeader } from "~/components/brutalist/section-header";
import { TechMarker } from "~/components/brutalist/ascii-frame";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "STACK — EVREN ISPIROGLU" },
		{
			name: "description",
			content: "Tools and technologies used in daily workflow.",
		},
	];
}

export default function Stack() {
	return (
		<div className="space-y-12 max-w-3xl">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">STACK</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// EQUIPMENT AND TOOLKIT INVENTORY
				</p>
			</header>

			<section className="space-y-4">
				<SectionHeader label="TOOLKIT" />
				<div className="border border-border divide-y divide-border">
					{generatedTools.map((item) => (
						<Link
							key={item.name}
							to={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-between p-4 hover:bg-secondary transition-none group"
						>
							<div className="flex items-center gap-4">
								<span className="font-mono text-sm group-hover:text-accent transition-none">
									{item.name}
								</span>
								<TechMarker text={item.category.toUpperCase()} />
							</div>
							<span className="font-mono-data text-[10px] text-muted-foreground group-hover:text-accent transition-none">
								&#62;&#62;&#62;
							</span>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
