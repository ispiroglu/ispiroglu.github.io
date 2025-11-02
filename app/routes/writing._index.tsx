import { Link } from "react-router";
import type { Route } from "./+types/writing._index";
import { getAllPosts } from "~/lib/mdx.server";

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Writing - Evren Ispiroglu" },
    { name: "description", content: "Articles and thoughts on software engineering, web development, and technology." },
  ];
}

export default function WritingIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold mb-3">Writing</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Articles and thoughts on software engineering and technology
        </p>

        {/* Elegant separator */}
        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/40"></div>
          </div>
        </div>
      </header>

      <div className="space-y-2">
        <div className="flex items-center gap-8 pb-4 border-b border-border/60 text-sm font-medium text-muted-foreground">
          <span className="w-12">Year</span>
          <span className="w-16">Date</span>
          <span className="flex-1">Title</span>
          <span className="w-16 text-right">Views</span>
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
              className="flex items-center gap-8 py-3 border-b border-border last:border-0 hover:bg-accent/50 transition-colors rounded px-2 -mx-2"
            >
              <span className="text-sm text-muted-foreground w-12">{year}</span>
              <span className="text-sm text-muted-foreground w-16">{`${month}/${day}`}</span>
              <span className="text-sm font-medium flex-1">{post.title}</span>
              <span className="text-sm text-muted-foreground w-16 text-right">-</span>
            </Link>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}



