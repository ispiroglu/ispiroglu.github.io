import type React from "react";
import { cn } from "~/lib/utils";

interface AsciiFrameProps {
	children: React.ReactNode;
	className?: string;
	bracket?: "square" | "angle" | "curly";
}

const brackets = {
	square: { open: "[", close: "]" },
	angle: { open: "<", close: ">" },
	curly: { open: "{", close: "}" },
};

export function AsciiFrame({
	children,
	className,
	bracket = "square",
}: AsciiFrameProps) {
	const { open, close } = brackets[bracket];

	return (
		<span
			className={cn("font-mono-data text-xs text-muted-foreground", className)}
		>
			{open} {children} {close}
		</span>
	);
}

interface DataLabelProps {
	label: string;
	value: string | React.ReactNode;
	className?: string;
}

export function DataLabel({ label, value, className }: DataLabelProps) {
	return (
		<div className={cn("flex items-baseline gap-2", className)}>
			<span className="font-mono-data text-xs text-muted-foreground">
				{label}
			</span>
			<span className="text-sm">{value}</span>
		</div>
	);
}

interface TechMarkerProps {
	text: string;
	variant?: "default" | "accent" | "green";
	className?: string;
}

export function TechMarker({
	text,
	variant = "default",
	className,
}: TechMarkerProps) {
	const variants = {
		default: "border-border text-muted-foreground",
		accent: "border-accent text-accent",
		green: "border-[#4AF626] text-[#4AF626]",
	};

	return (
		<span
			className={cn(
				"inline-block border px-1.5 py-0.5 font-mono-data text-[10px]",
				variants[variant],
				className,
			)}
		>
			{text}
		</span>
	);
}
