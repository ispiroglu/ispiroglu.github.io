import { cn } from "~/lib/utils";
import type React from "react";

interface CodePanelProps {
	children: React.ReactNode;
	label?: string;
	className?: string;
}

export function CodePanel({
	children,
	label = "IMPLEMENTATION_EXAMPLE",
	className,
}: CodePanelProps) {
	return (
		<div className={cn("my-8 border border-border", className)}>
			{/* Panel header */}
			<div className="flex justify-between items-center px-4 py-2 border-b border-border bg-secondary font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
				<span>/// {label}</span>
				<button
					type="button"
					className="hover:text-accent transition-colors duration-150"
					onClick={(e) => {
						const code =
							e.currentTarget.nextElementSibling?.querySelector("pre, code");
						if (code?.textContent) {
							navigator.clipboard.writeText(code.textContent);
						}
					}}
				>
					COPY_CODE
				</button>
			</div>
			{/* Dark code panel */}
			<div className="code-panel overflow-x-auto p-4">{children}</div>
		</div>
	);
}
