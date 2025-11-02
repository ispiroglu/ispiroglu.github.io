import { data, Link } from "react-router";
import type { Route } from "./+types/writing.$slug";
import { getPost, getAllPosts, getPostNavigation } from "~/lib/mdx.server";
import { postContent } from "~/lib/post-content";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { ReadingProgress } from "~/components/reading-progress";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPost(params.slug);

  if (!post) {
    throw data("Post not found", { status: 404 });
  }

  const allPosts = await getAllPosts();
  const navigation = getPostNavigation(allPosts, params.slug);

  return { post, navigation };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data || !data.post) {
    return [{ title: "Post Not Found" }];
  }

  return [
    { title: `${data.post.title} - Evren Ispiroglu` },
    { name: "description", content: data.post.description },
  ];
}

export default function PostDetail({ loaderData }: Route.ComponentProps) {
  const { post, navigation } = loaderData;
  const date = new Date(post.date);
  const ContentComponent = postContent[post.slug];

  return (
    <div id="writings-container" className="max-w-4xl mx-auto relative">
      <ReadingProgress />
      {/* Back button */}
      <div className="mb-10">
        <Link to="/writing">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Writing
          </Button>
        </Link>
      </div>

      {/* Post header */}
      <article className="space-y-8">
        <header className="space-y-5 pb-10 border-b border-border/40">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            <p>Content not available for this post.</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex items-center justify-between pt-10 mt-12 border-t border-border/40">
          <div className="flex-1">
            {navigation.prev && (
              <Link
                to={`/writing/${navigation.prev.slug}`}
                className="group block"
              >
                <p className="text-sm text-muted-foreground mb-1">Previous</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {navigation.prev.title}
                </p>
              </Link>
            )}
          </div>
          <div className="flex-1 text-right">
            {navigation.next && (
              <Link
                to={`/writing/${navigation.next.slug}`}
                className="group block"
              >
                <p className="text-sm text-muted-foreground mb-1">Next</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {navigation.next.title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}



