import type { MDXComponents } from "mdx/types";
import { cn } from "~/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ className, ...props }) => (
			<h1
				className={cn(
					"scroll-m-20 font-header text-3xl lg:text-4xl mb-6",
					className,
				)}
				{...props}
			/>
		),
		h2: ({ className, ...props }) => (
			<h2
				className={cn(
					"scroll-m-20 font-header text-xl lg:text-2xl border-b border-border pb-2 mt-12 mb-6",
					className,
				)}
				{...props}
			/>
		),
		h3: ({ className, ...props }) => (
			<h3
				className={cn(
					"scroll-m-20 font-header text-lg lg:text-xl mt-10 mb-4",
					className,
				)}
				{...props}
			/>
		),
		h4: ({ className, ...props }) => (
			<h4
				className={cn(
					"scroll-m-20 font-mono-data text-sm mt-8 mb-3 text-muted-foreground",
					className,
				)}
				{...props}
			/>
		),
		p: ({ className, ...props }) => (
			<p
				className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
				{...props}
			/>
		),
		ul: ({ className, ...props }) => (
			<ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
		),
		ol: ({ className, ...props }) => (
			<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
		),
		li: ({ className, ...props }) => (
			<li className={cn("mt-2", className)} {...props} />
		),
		blockquote: ({ className, ...props }) => (
			<blockquote
				className={cn(
					"mt-6 border-l-2 border-accent pl-4 text-muted-foreground font-mono text-sm",
					className,
				)}
				{...props}
			/>
		),
		code: ({ className, ...props }) => (
			<code
				className={cn(
					"relative border border-border bg-secondary px-[0.3rem] py-[0.2rem] font-mono text-xs",
					className,
				)}
				{...props}
			/>
		),
		pre: ({ className, ...props }) => (
			<pre
				className={cn(
					"mb-4 mt-6 overflow-x-auto border border-border bg-secondary p-4 font-mono text-xs",
					className,
				)}
				{...props}
			/>
		),
		a: ({ className, ...props }) => (
			<a
				className={cn(
					"font-medium text-foreground hover:text-accent underline underline-offset-4 transition-none",
					className,
				)}
				{...props}
			/>
		),
		hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
		table: ({ className, ...props }) => (
			<div className="my-6 w-full overflow-y-auto">
				<table className={cn("w-full", className)} {...props} />
			</div>
		),
		tr: ({ className, ...props }) => (
			<tr
				className={cn("m-0 border-t border-border p-0", className)}
				{...props}
			/>
		),
		th: ({ className, ...props }) => (
			<th
				className={cn(
					"border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
					className,
				)}
				{...props}
			/>
		),
		td: ({ className, ...props }) => (
			<td
				className={cn(
					"border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
					className,
				)}
				{...props}
			/>
		),
		...components,
	};
}
