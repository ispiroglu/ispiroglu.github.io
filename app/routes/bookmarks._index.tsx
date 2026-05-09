import { Link } from "react-router";
import type { Route } from "./+types/bookmarks._index";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BOOKMARKS — EVREN ISPIROGLU" },
		{
			name: "description",
			content: "Curated collection of useful links and resources.",
		},
	];
}

const categories = [
	{
		name: "Apps & Tools",
		slug: "apps-tools",
		count: 156,
		description: "Useful applications and utilities",
	},
	{
		name: "Art & Prints",
		slug: "art-prints",
		count: 104,
		description: "Artwork and design inspiration",
	},
	{
		name: "Books & Magazines",
		slug: "books",
		count: 18,
		description: "Reading recommendations",
	},
	{
		name: "Design",
		slug: "design",
		count: 87,
		description: "Design resources and inspiration",
	},
	{
		name: "Fonts",
		slug: "fonts",
		count: 72,
		description: "Typography and font collections",
	},
	{
		name: "Frontend",
		slug: "frontend",
		count: 291,
		description: "Web development resources",
	},
	{
		name: "Icons",
		slug: "icons",
		count: 37,
		description: "Icon sets and libraries",
	},
	{
		name: "Portfolio",
		slug: "portfolio",
		count: 207,
		description: "Inspiring portfolio websites",
	},
	{
		name: "Reading",
		slug: "reading",
		count: 175,
		description: "Articles and blog posts",
	},
	{
		name: "Tweets",
		slug: "tweets",
		count: 45,
		description: "Interesting tweets",
	},
	{
		name: "VS Code",
		slug: "vscode",
		count: 28,
		description: "VS Code extensions and themes",
	},
	{
		name: "Wallpapers",
		slug: "wallpapers",
		count: 33,
		description: "Desktop and mobile wallpapers",
	},
	{
		name: "Websites",
		slug: "websites",
		count: 221,
		description: "Interesting websites",
	},
];

export default function BookmarksIndex() {
	return (
		<div className="space-y-12">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">BOOKMARKS</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// CURATED COLLECTION OF USEFUL LINKS AND RESOURCES
				</p>
			</header>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
				{categories.map((category) => (
					<Link
						key={category.slug}
						to={`/bookmarks/${category.slug}`}
						className="flex flex-col justify-between p-4 border-r border-b border-border hover:bg-secondary transition-none group"
					>
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<span className="font-mono-data text-xs text-accent">
									&#62;&#62;&#62;
								</span>
								<span className="font-mono text-sm group-hover:text-accent transition-none">
									{category.name}
								</span>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{category.description}
							</p>
						</div>
						<span className="font-mono-data text-[10px] text-muted-foreground group-hover:text-accent transition-none mt-3">
							{category.count} ITEMS
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}
