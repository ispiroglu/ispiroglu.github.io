import { Link } from "react-router";
import type { Route } from "./+types/logs._index";
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
		{ title: "LOGS — EVREN ISPIROGLU" },
		{
			name: "description",
			content:
				"Engineering logs and technical dispatches on software architecture and backend systems.",
		},
	];
}

export default function LogsIndex({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;

	return (
		<div className="space-y-16 max-w-4xl">
			{/* Header */}
			<header className="space-y-3">
				<h1 className="font-header text-5xl lg:text-6xl">LOGS</h1>
				<p className="font-mono-data text-xs text-muted-foreground">
					/// ENGINEERING DISPATCHES AND SYSTEM LOGS
				</p>
			</header>

			{/* Timeline */}
			<div className="border-l-2 border-border pl-8 relative">
				{/* Vertical timeline connector dot at top */}
				<div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent" />

				{/* Year groups — group posts by year */}
				{(() => {
					const grouped = new Map<number, typeof posts>();
					for (const post of posts) {
						const year = new Date(post.date).getFullYear();
						if (!grouped.has(year)) grouped.set(year, []);
						grouped.get(year)!.push(post);
					}

					return Array.from(grouped.entries())
						.sort(([a], [b]) => b - a)
						.map(([year, yearPosts]) => (
							<div key={year} className="mb-12 last:mb-0">
								{/* Year node */}
								<div className="flex items-center gap-4 mb-6 -ml-[33px]">
									<div className="w-1.5 h-1.5 bg-accent" />
									<span className="font-mono-data text-xs text-muted-foreground tracking-wider">
										{year}
									</span>
									<div className="flex-1 h-px bg-border" />
								</div>

								{/* Posts under this year */}
								<div className="space-y-6">
									{yearPosts.map((post) => {
										const date = new Date(post.date);
										const day = date.getDate().toString().padStart(2, "0");
										const month = (date.getMonth() + 1)
											.toString()
											.padStart(2, "0");

										return (
											<article key={post.slug} className="group -ml-8 pl-4">
												<div className="flex items-baseline gap-4 mb-1">
													<time className="font-mono text-[11px] text-muted-foreground tracking-wide whitespace-nowrap">
														{date.getFullYear()}.{month}.{day}
													</time>
													<div className="absolute -left-[10px] mt-1.5 w-1 h-1 bg-border group-hover:bg-accent transition-colors duration-150" />
												</div>
												<Link to={`/logs/${post.slug}`} className="block">
													<h2 className="font-header text-lg text-foreground group-hover:text-accent transition-colors duration-150 mb-2">
														{post.title}
													</h2>
												</Link>
												{post.description && (
													<p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
														{post.description}
													</p>
												)}
												{post.tags && post.tags.length > 0 && (
													<div className="flex flex-wrap gap-1.5 mt-3">
														{post.tags.map((tag: string) => (
															<span
																key={tag}
																className="font-mono text-[9px] text-muted-foreground border border-border px-1.5 py-0.5 uppercase"
															>
																{tag}
															</span>
														))}
													</div>
												)}
											</article>
										);
									})}
								</div>
							</div>
						));
				})()}
			</div>
		</div>
	);
}
