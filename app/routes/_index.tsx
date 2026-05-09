import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { getAllPosts } from "~/lib/mdx.server";
import { SectionHeader } from "~/components/brutalist/section-header";

export async function loader() {
	const posts = await getAllPosts();
	return { posts };
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EVREN ISPIROGLU — BACKEND ENGINEER" },
		{
			name: "description",
			content:
				"Backend engineer building event-driven systems and high-performance APIs.",
		},
	];
}

export default function Index({ loaderData }: Route.ComponentProps) {
	const { posts } = loaderData;

	return (
		<div className="space-y-20">
			{/* ── HERO ── */}
			<section className="space-y-8">
				<div className="space-y-2">
					<h1 className="font-header text-5xl md:text-7xl lg:text-8xl phosphor-glow">
						EVREN
						<br />
						ISPIROGLU
					</h1>
					<p className="font-mono-data text-xs text-muted-foreground">
						/// BACKEND ENGINEER — EVENT-DRIVEN SYSTEMS
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
					<div className="p-3 border-r border-b border-border md:border-b-0">
						<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
							UNIT
						</span>
						<span className="font-mono text-sm">EI-01</span>
					</div>
					<div className="p-3 border-b border-border md:border-r md:border-b-0">
						<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
							STATUS
						</span>
						<span className="font-mono text-sm text-[#4AF626]">ONLINE</span>
					</div>
					<div className="p-3 border-r border-border">
						<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
							LOCATION
						</span>
						<span className="font-mono text-sm">REMOTE</span>
					</div>
					<div className="p-3">
						<span className="font-mono-data text-[9px] text-muted-foreground block mb-1">
							REV
						</span>
						<span className="font-mono text-sm">2.6.1</span>
					</div>
				</div>

				<p className="text-muted-foreground max-w-xl leading-relaxed">
					Building event-driven systems and high-performance APIs with a focus
					on reliability, consistency, and observability. Designing distributed
					services with Kafka, gRPC, and Kubernetes.
				</p>

				<div className="flex gap-4">
					<Link
						to="/projects"
						className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono-data text-[11px] text-foreground hover:border-accent hover:text-accent transition-none"
					>
						<span className="text-accent">&#62;&#62;&#62;</span>
						VIEW PROJECTS
					</Link>
					<Link
						to="/writing"
						className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono-data text-[11px] text-muted-foreground hover:text-foreground transition-none"
					>
						<span className="text-muted-foreground">///</span>
						READ WRITING
					</Link>
				</div>
			</section>

			{/* ── WRITING PREVIEW ── */}
			<section className="space-y-6">
				<SectionHeader label="WRITING ARCHIVE" />

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
							READ
						</span>
					</div>

					{posts.slice(0, 10).map((post) => {
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
								<span className="font-mono-data text-[10px] text-muted-foreground w-14 text-right group-hover:text-accent transition-none">
									&#62;&#62;&#62;
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
			</section>
		</div>
	);
}
