import { data, Link } from "react-router";
import type { Route } from "./+types/writing.$slug";
import { getPost, getAllPosts, getPostNavigation } from "~/lib/mdx.server";
import { postContent } from "~/lib/post-content";
import { ArrowLeft } from "lucide-react";
import { ReadingProgress } from "~/components/reading-progress";
import { incrementViews } from "~/lib/views.server";
import { TechMarker } from "~/components/brutalist/ascii-frame";

export async function loader({ params, context }: Route.LoaderArgs) {
	const post = await getPost(params.slug);

	if (!post) {
		throw data("Post not found", { status: 404 });
	}

	const allPosts = await getAllPosts();
	const navigation = getPostNavigation(allPosts, params.slug);
	const views = await incrementViews(
		`writing/${params.slug}`,
		context.cloudflare.env,
	);

	return { post, navigation, views };
}

export function meta({ data }: Route.MetaArgs) {
	if (!data || !data.post) {
		return [{ title: "404 — NOT FOUND" }];
	}

	return [
		{ title: `${data.post.title.toUpperCase()} — EVREN ISPIROGLU` },
		{ name: "description", content: data.post.description },
	];
}

export default function PostDetail({ loaderData }: Route.ComponentProps) {
	const { post, navigation, views } = loaderData;
	const date = new Date(post.date);
	const ContentComponent = postContent[post.slug];

	return (
		<div id="writings-container" className="max-w-4xl relative">
			<ReadingProgress />

			{/* Back link */}
			<div className="mb-8">
				<Link
					to="/writing"
					className="inline-flex items-center gap-2 font-mono-data text-[11px] text-muted-foreground hover:text-foreground transition-none"
				>
					<ArrowLeft className="w-3 h-3" strokeWidth={1.5} />
					&#60;&#60;&#60; BACK TO ARCHIVE
				</Link>
			</div>

			<article className="space-y-8">
				{/* Article header */}
				<header className="space-y-4 pb-8 border-b border-border">
					<h1 className="font-header text-3xl lg:text-4xl phosphor-glow">
						{post.title.toUpperCase()}
					</h1>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
						<div className="p-2.5 border-r border-b border-border md:border-b-0">
							<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
								PUBLISHED
							</span>
							<span className="font-mono text-xs">
								<time dateTime={post.date}>
									{date.toLocaleDateString("en-US", {
										year: "numeric",
										month: "2-digit",
										day: "2-digit",
									})}
								</time>
							</span>
						</div>
						<div className="p-2.5 border-b border-border md:border-r md:border-b-0">
							<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
								READ TIME
							</span>
							<span className="font-mono text-xs">
								{post.readingTime.toUpperCase()}
							</span>
						</div>
						<div className="p-2.5 border-r border-border">
							<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
								VIEWS
							</span>
							<span className="font-mono text-xs tabular-nums">{views}</span>
						</div>
						<div className="p-2.5">
							<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
								TYPE
							</span>
							<span className="font-mono text-xs">ARTICLE</span>
						</div>
					</div>

					{post.tags && post.tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag) => (
								<TechMarker key={tag} text={tag.toUpperCase()} />
							))}
						</div>
					)}
				</header>

				{/* Post content */}
				{ContentComponent ? (
					<ContentComponent />
				) : (
					<div className="border border-border p-8 text-center">
						<span className="font-mono-data text-xs text-muted-foreground">
							[ CONTENT NOT AVAILABLE ]
						</span>
					</div>
				)}

				{/* Navigation */}
				<nav className="grid grid-cols-2 gap-0 border border-border mt-12">
					<div className="border-r border-border">
						{navigation.prev ? (
							<Link
								to={`/writing/${navigation.prev.slug}`}
								className="block p-4 hover:bg-secondary transition-none group"
							>
								<span className="font-mono-data text-[10px] text-muted-foreground block mb-1">
									&#60;&#60;&#60; PREVIOUS
								</span>
								<span className="text-sm group-hover:text-accent transition-none">
									{navigation.prev.title}
								</span>
							</Link>
						) : (
							<div className="p-4">
								<span className="font-mono-data text-[10px] text-muted-foreground">
									[ NO PREVIOUS ]
								</span>
							</div>
						)}
					</div>
					<div>
						{navigation.next ? (
							<Link
								to={`/writing/${navigation.next.slug}`}
								className="block p-4 hover:bg-secondary transition-none group text-right"
							>
								<span className="font-mono-data text-[10px] text-muted-foreground block mb-1">
									NEXT &#62;&#62;&#62;
								</span>
								<span className="text-sm group-hover:text-accent transition-none">
									{navigation.next.title}
								</span>
							</Link>
						) : (
							<div className="p-4 text-right">
								<span className="font-mono-data text-[10px] text-muted-foreground">
									[ NO NEXT ]
								</span>
							</div>
						)}
					</div>
				</nav>
			</article>
		</div>
	);
}
