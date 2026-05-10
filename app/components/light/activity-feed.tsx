import { cn } from "~/lib/utils";

interface ActivityEntry {
	timestamp: string;
	type: string;
	typeColor?: "green" | "red" | "muted" | "foreground";
	message: string;
}

interface ActivityFeedProps {
	entries: ActivityEntry[];
	className?: string;
}

const typeColors = {
	green: "text-status-green",
	red: "text-accent",
	muted: "text-muted-foreground",
	foreground: "text-foreground",
};

export function ActivityFeed({ entries, className }: ActivityFeedProps) {
	return (
		<div
			className={cn(
				"border border-border bg-card font-mono text-[11px]",
				className,
			)}
		>
			{entries.map((entry, i) => (
				<div
					key={`${entry.timestamp}-${entry.type}-${i}`}
					className={cn(
						"flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 p-4",
						i < entries.length - 1 && "border-b border-border",
					)}
				>
					<span className="text-muted-foreground w-24 shrink-0 tabular-nums">
						[{entry.timestamp}]
					</span>
					<span
						className={cn(
							"w-20 shrink-0 uppercase tracking-wider text-[10px]",
							typeColors[entry.typeColor || "muted"],
						)}
					>
						{entry.type}
					</span>
					<span className="text-foreground leading-relaxed">
						{entry.message}
					</span>
				</div>
			))}
		</div>
	);
}
