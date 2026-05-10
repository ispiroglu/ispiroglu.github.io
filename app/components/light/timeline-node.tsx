import type React from "react";
import { cn } from "~/lib/utils";

interface TimelineNodeProps {
	year?: string;
	label?: string;
	children: React.ReactNode;
	className?: string;
	/** Show the vertical line connector (default: true) */
	showLine?: boolean;
	/** Show the dot indicator (default: true) */
	showDot?: boolean;
}

export function TimelineNode({
	year,
	label,
	children,
	className,
	showLine = true,
	showDot = true,
}: TimelineNodeProps) {
	return (
		<div
			className={cn(
				"relative pl-8",
				showLine && "border-l-2 border-border",
				className,
			)}
		>
			{/* Dot indicator */}
			{showDot && (
				<div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent" />
			)}

			{/* Year/label header */}
			{(year || label) && (
				<div className="flex items-center gap-3 mb-3 -ml-[34px]">
					{year && (
						<div className="flex items-center gap-2">
							<div className="w-1.5 h-1.5 bg-accent" />
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								{year}
							</span>
						</div>
					)}
					{label && (
						<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
							{label}
						</span>
					)}
				</div>
			)}

			{/* Content */}
			<div className="pb-8">{children}</div>
		</div>
	);
}
