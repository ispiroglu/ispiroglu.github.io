import { Link } from "react-router";
import type { Route } from "./+types/writing._index";
import { getAllPosts } from "~/lib/mdx.server";
import { getViews } from "~/lib/views.server";

export async function loader({ context }: Route.LoaderArgs) {
	const posts = await getAllPosts();

	const postsWithViews = await Promise.all(
		posts.map(async (post) => ({
			...post,
			views: await getViews(`writing/${post.slug}`, context.cloudflare.env),
		})),
	);

	return { posts: postsWithViews };
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "WRITING — EVREN ISPIROGLU" },
		{
			name: "description",
			content:
				"Articles and thoughts on software engineering, web development, and technology.",
		},
	];
}

export default function WritingIndex({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;

	return (
		<div className="space-y-12">
			<header className="space-y-2">
				<h1 className="font-header text-4xl lg:text-5xl">WRITING</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// ARTICLES AND THOUGHTS ON SOFTWARE ENGINEERING
				</p>
			</header>

			<div className="border border-border">
				<div className="grid grid-cols-[auto_auto_1fr_auto] gap-0 border-b border-border px-4 py-2.5 bg-secondary">
					<span className="font-mono-data text-[10px] text-muted-foreground w-14">
						YEAR
					</span>
					<span className="font-mono-data text-[10px] text-muted-foreground w-16">
						DATE
					</span>
					<span className="font-mono-data text-[10px] text-muted-foreground">
						TITLE
					</span>
					<span className="font-mono-data text-[10px] text-muted-foreground w-14 text-right">
						VIEWS
					</span>
				</div>

				{posts.map((post) => {
					const date = new Date(post.date);
					const year = date.getFullYear();
					const month = String(date.getMonth() + 1).padStart(2, "0");
					const day = String(date.getDate()).padStart(2, "0");

					return (
						<Link
							key={post.slug}
							to={`/writing/${post.slug}`}
							className="grid grid-cols-[auto_auto_1fr_auto] gap-0 items-center px-4 py-3 border-b border-border last:border-0 hover:bg-secondary transition-none group"
						>
							<span className="font-mono text-xs text-muted-foreground w-14">
								{year}
							</span>
							<span className="font-mono text-xs text-muted-foreground w-16">{`${month}/${day}`}</span>
							<span className="text-sm group-hover:text-accent transition-none">
								{post.title}
							</span>
							<span className="font-mono text-xs text-muted-foreground w-14 text-right group-hover:text-accent transition-none tabular-nums">
								{post.views}
							</span>
						</Link>
					);
				})}
			</div>

			{posts.length === 0 && (
				<div className="border border-border p-8 text-center">
					<span className="font-mono-data text-xs text-muted-foreground">
						[ NO DATA AVAILABLE ]
					</span>
				</div>
			)}
		</div>
	);
}
