import { data, Link } from "react-router";
import type { Route } from "./+types/bookmarks.$category";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function loader({ params }: Route.LoaderArgs) {
  const { category } = params;
  
  // Mock data - in real implementation, load from JSON file
  const bookmarks = [
    {
      id: "1",
      title: "Dia Browser",
      url: "https://dia.com",
      description: "AI chat with your tabs",
      image: "https://via.placeholder.com/300x200",
      tags: ["browser", "ai"],
    },
    {
      id: "2",
      title: "Corner Time",
      url: "https://cornertime.app",
      description: "No more hovering just for time checking",
      image: "https://via.placeholder.com/300x200",
      tags: ["productivity", "mac"],
    },
  ];

  const categoryNames: Record<string, string> = {
    "apps-tools": "Apps & Tools",
    "art-prints": "Art & Prints",
    "books": "Books & Magazines",
    "design": "Design",
    "fonts": "Fonts",
    "frontend": "Frontend",
    "icons": "Icons",
    "portfolio": "Portfolio",
    "reading": "Reading",
    "tweets": "Tweets",
    "vscode": "VS Code",
    "wallpapers": "Wallpapers",
    "websites": "Websites",
  };

  return {
    category,
    categoryName: categoryNames[category] || category,
    bookmarks,
  };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Category Not Found" }];
  }

  return [
    { title: `${data.categoryName} - Bookmarks - Evren Ispiroglu` },
    { name: "description", content: `Curated ${data.categoryName} bookmarks and resources.` },
  ];
}

export default function BookmarkCategory({ loaderData }: Route.ComponentProps) {
  const { category, categoryName, bookmarks } = loaderData;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link to="/bookmarks">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bookmarks
          </Button>
        </Link>

        <header>
          <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
          <p className="text-lg text-muted-foreground">
            {bookmarks.length} items in this collection
          </p>
        </header>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookmarks.map((bookmark) => (
          <Card key={bookmark.id} className="group overflow-hidden">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={bookmark.image}
                alt={bookmark.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{bookmark.title}</span>
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              </CardTitle>
              <CardDescription>{bookmark.description}</CardDescription>
            </CardHeader>
            {bookmark.tags && bookmark.tags.length > 0 && (
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {bookmark.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}



