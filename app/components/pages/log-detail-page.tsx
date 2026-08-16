import type { Post } from "~/lib/mdx.server";
import { postContent } from "~/lib/post-content";
import { ReadingProgress } from "~/components/reading-progress";

export interface PostNavigation {
  prev: Post | null;
  next: Post | null;
}

export function LogDetailPage({
  post,
  navigation,
  views,
}: {
  post: Post;
  navigation: PostNavigation;
  views: number;
}) {
	const date = new Date(post.date);
	const ContentComponent = postContent[post.slug];

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return (
		<div className="max-w-4xl mx-auto space-y-12" id="logs-container">
			{/* Reading progress bar */}
			<ReadingProgress />

			{/* Back navigation */}
			<div className="mb-8">
				<a
					href="/logs"
					className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-accent transition-none group"
				>
					<span className="group-hover:-translate-x-0.5 transition-transform duration-100">
						◄
					</span>
					BACK TO LOGS
				</a>
			</div>

			<article className="space-y-10">
				{/* ── HEADER ── */}
				<header className="space-y-6">
					{/* Metadata grid */}
					<div className="border border-border bg-card p-6">
						<div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
							<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								/// METADATA
							</span>
							<div className="flex-1 h-px bg-border" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-1">
									DATE PUBLISHED
								</div>
								<div className="font-mono text-[11px] text-foreground tabular-nums">
									{year}.{month}.{day}
								</div>
							</div>
							<div>
								<div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-1">
									EST. READING TIME
								</div>
								<div className="font-mono text-[11px] text-foreground tabular-nums">
									{post.readingTime || "05 MIN"}
								</div>
							</div>
							<div>
								<div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-1">
									VIEWS
								</div>
								<div className="font-mono text-[11px] text-foreground tabular-nums">
									{views}
								</div>
							</div>
							{post.tags && post.tags.length > 0 && (
								<div className="col-span-2 pt-3 mt-2 border-t border-border">
									<div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-2">
										TAGS
									</div>
									<div className="flex flex-wrap gap-2">
										{post.tags.map((tag: string) => (
											<span
												key={tag}
												className="font-mono text-[9px] text-foreground border border-border px-2 py-0.5 uppercase"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Title */}
					<h1 className="font-header text-4xl lg:text-5xl leading-tight">
						{post.title}
					</h1>
				</header>

				{/* ── CONTENT ── */}
				<div className="prose prose-lg max-w-none font-reading">
					{ContentComponent ? <ContentComponent /> : null}
				</div>

				{/* ── FOOTER NAVIGATION ── */}
				<div className="pt-8 border-t border-border flex justify-between items-center">
					{navigation.prev ? (
						<a
							href={`/logs/${navigation.prev.slug}`}
							className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
						>
							<span className="text-muted-foreground group-hover:text-accent transition-colors">
								◄
							</span>
							<span className="font-mono text-[11px]">PREVIOUS</span>
						</a>
					) : (
						<div />
					)}
					{navigation.next ? (
						<a
							href={`/logs/${navigation.next.slug}`}
							className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
						>
							<span className="font-mono text-[11px]">NEXT</span>
							<span className="text-muted-foreground group-hover:text-accent transition-colors">
								►
							</span>
						</a>
					) : (
						<div />
					)}
				</div>
			</article>
		</div>
	);
}
