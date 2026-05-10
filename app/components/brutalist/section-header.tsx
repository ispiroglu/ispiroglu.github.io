import type React from "react";
import { cn } from "~/lib/utils";

interface SectionHeaderProps {
	label: string;
	className?: string;
	showLine?: boolean;
}

export function SectionHeader({
	label,
	className,
	showLine = true,
}: SectionHeaderProps) {
	return (
		<div className={cn("flex items-center gap-4", className)}>
			<span className="font-mono text-[10px] text-muted-foreground shrink-0 uppercase tracking-wider">
				/// {label}
			</span>
			{showLine && <div className="flex-1 h-px bg-border" aria-hidden="true" />}
		</div>
	);
}

interface DataRowProps {
	label: string;
	value: string | React.ReactNode;
	className?: string;
}

export function DataRow({ label, value, className }: DataRowProps) {
	return (
		<div
			className={cn(
				"flex items-baseline justify-between py-2 border-b border-border",
				className,
			)}
		>
			<span className="font-mono text-[10px] text-muted-foreground uppercase">
				{label}
			</span>
			<span className="text-[11px] font-mono text-right">{value}</span>
		</div>
	);
}

interface CompartmentProps {
	children: React.ReactNode;
	className?: string;
	header?: string;
}

export function Compartment({ children, className, header }: CompartmentProps) {
	return (
		<div className={cn("border border-border", className)}>
			{header && (
				<div className="px-3 py-1.5 border-b border-border bg-secondary">
					<span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
						{header}
					</span>
				</div>
			)}
			<div className="p-4">{children}</div>
		</div>
	);
}
