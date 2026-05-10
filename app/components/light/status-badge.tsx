import { cn } from "~/lib/utils";

interface StatusBadgeProps {
	text: string;
	status: "stable" | "experimental" | "migrating" | "critical" | "archived";
	className?: string;
}

const statusStyles = {
	stable: "border-status-green text-status-green",
	experimental: "border-muted-foreground text-muted-foreground",
	migrating: "border-muted-foreground text-muted-foreground",
	critical: "border-accent text-accent",
	archived: "border-muted-foreground text-muted-foreground",
};

export function StatusBadge({ text, status, className }: StatusBadgeProps) {
	return (
		<span
			className={cn(
				"font-mono text-[9px] border px-2 py-0.5 uppercase tracking-wider rounded-sm",
				statusStyles[status],
				className,
			)}
		>
			[ {text} ]
		</span>
	);
}
