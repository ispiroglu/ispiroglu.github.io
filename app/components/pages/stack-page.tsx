import { StatusBadge } from "~/components/light/status-badge";
import { generatedSections } from "~/lib/stack.generated";

export function StackPage() {
	const sections = generatedSections;

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
