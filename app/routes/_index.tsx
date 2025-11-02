import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { getAllPosts } from "~/lib/mdx.server";

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evren Ispiroglu - Backend Engineer" },
    { name: "description", content: "Personal website and blog of Evren Ispiroglu, a backend engineer specializing in event-driven systems and distributed architecture." },
  ];
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section>
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Evren Ispiroglu, a backend engineer building event-driven systems and high-performance APIs. 
            Welcome to my corner of the internet where I share my thoughts, projects, and experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Explore my <Link to="/about" className="text-primary hover:underline">about page</Link> to learn more about my background, 
            check out my <Link to="/projects" className="text-primary hover:underline">projects</Link>, or browse my <Link to="/writing" className="text-primary hover:underline">writing</Link>.
          </p>
        </div>
      </section>

      {/* Elegant separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/40"></div>
        </div>
      </div>

      {/* Writing Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Writing</h2>
        <Card>
          <CardHeader>
            <CardTitle>Latest Posts</CardTitle>
            <CardDescription>Recent articles and thoughts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.slice(0, 10).map((post) => {
                const date = new Date(post.date);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");

                return (
                  <Link
                    key={post.slug}
                    to={`/writing/${post.slug}`}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-accent/50 transition-colors rounded px-2 -mx-2"
                  >
                    <div className="flex gap-8">
                      <span className="text-sm text-muted-foreground w-12">{year}</span>
                      <span className="text-sm text-muted-foreground w-16">{`${month}/${day}`}</span>
                      <span className="text-sm font-medium">{post.title}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">-</span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}



