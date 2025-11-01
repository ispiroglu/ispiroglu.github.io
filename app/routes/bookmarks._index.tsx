import { Link } from "react-router";
import type { Route } from "./+types/bookmarks._index";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bookmarks - Evren Ispiroglu" },
    { name: "description", content: "Curated collection of useful links and resources." },
  ];
}

const categories = [
  { name: "Apps & Tools", slug: "apps-tools", count: 156, description: "Useful applications and utilities" },
  { name: "Art & Prints", slug: "art-prints", count: 104, description: "Artwork and design inspiration" },
  { name: "Books & Magazines", slug: "books", count: 18, description: "Reading recommendations" },
  { name: "Design", slug: "design", count: 87, description: "Design resources and inspiration" },
  { name: "Fonts", slug: "fonts", count: 72, description: "Typography and font collections" },
  { name: "Frontend", slug: "frontend", count: 291, description: "Web development resources" },
  { name: "Icons", slug: "icons", count: 37, description: "Icon sets and libraries" },
  { name: "Portfolio", slug: "portfolio", count: 207, description: "Inspiring portfolio websites" },
  { name: "Reading", slug: "reading", count: 175, description: "Articles and blog posts" },
  { name: "Tweets", slug: "tweets", count: 45, description: "Interesting tweets" },
  { name: "VS Code", slug: "vscode", count: 28, description: "VS Code extensions and themes" },
  { name: "Wallpapers", slug: "wallpapers", count: 33, description: "Desktop and mobile wallpapers" },
  { name: "Websites", slug: "websites", count: 221, description: "Interesting websites" },
];

export default function BookmarksIndex() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Bookmarks</h1>
        <p className="text-lg text-muted-foreground">
          My curated collection of useful links, resources, and inspiration
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} to={`/bookmarks/${category.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category.name}
                  <span className="text-sm font-normal text-muted-foreground">
                    {category.count}
                  </span>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}



