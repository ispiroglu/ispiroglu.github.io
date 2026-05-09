import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap border font-mono-data text-[11px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground border-primary hover:bg-foreground hover:text-background transition-none",
				destructive:
					"bg-destructive text-destructive-foreground border-destructive hover:bg-background hover:text-destructive transition-none",
				outline:
					"border-border bg-background hover:bg-secondary hover:text-foreground transition-none",
				secondary:
					"bg-secondary text-secondary-foreground border-secondary hover:bg-muted hover:text-foreground transition-none",
				ghost:
					"border-transparent hover:bg-secondary hover:text-foreground transition-none",
				link: "border-transparent text-primary underline-offset-4 hover:underline transition-none",
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
