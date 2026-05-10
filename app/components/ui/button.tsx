import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap border font-mono text-[11px] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-px transition-transform duration-75",
	{
		variants: {
			variant: {
				default:
					"bg-foreground text-background border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-150",
				destructive:
					"bg-accent text-white border-accent hover:bg-background hover:text-accent transition-colors duration-150",
				outline:
					"border-border bg-background hover:bg-secondary hover:text-foreground transition-colors duration-150",
				secondary:
					"bg-secondary text-secondary-foreground border-secondary hover:bg-muted hover:text-foreground transition-colors duration-150",
				ghost:
					"border-transparent hover:bg-secondary hover:text-foreground transition-colors duration-150",
				link: "border-transparent text-foreground underline-offset-4 hover:text-accent hover:underline transition-colors duration-150",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-7 px-3 text-[10px]",
				lg: "h-11 px-6",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
