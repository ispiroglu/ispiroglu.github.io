import { Link } from "react-router";
import type { Route } from "./+types/bookmarks.$category";
import { TechMarker } from "~/components/brutalist/ascii-frame";

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
    "apps-tools": "APPS & TOOLS",
    "art-prints": "ART & PRINTS",
    books: "BOOKS & MAGAZINES",
    design: "DESIGN",
    fonts: "FONTS",
    frontend: "FRONTEND",
    icons: "ICONS",
    portfolio: "PORTFOLIO",
    reading: "READING",
    tweets: "TWEETS",
    vscode: "VS CODE",
    wallpapers: "WALLPAPERS",
    websites: "WEBSITES",
  };

  return {
    category,
    categoryName: categoryNames[category] || category,
    bookmarks,
  };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "404 — NOT FOUND" }];
  }

  return [
    { title: `${data.categoryName} — BOOKMARKS — EVREN ISPIROGLU` },
    {
      name: "description",
      content: `Curated ${data.categoryName} bookmarks and resources.`,
    },
  ];
}

export default function BookmarkCategory({
  loaderData,
}: Route.ComponentProps) {
  const { categoryName, bookmarks } = loaderData;

  return (
    <div className="space-y-12">
      {/* Back link */}
      <div className="mb-2">
        <Link
          to="/bookmarks"
          className="inline-flex items-center gap-2 font-mono-data text-[11px] text-muted-foreground hover:text-accent transition-none"
        >
          <span className="text-accent">&#60;&#60;&#60;</span>
          BACK TO CATEGORIES
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="font-header text-4xl lg:text-5xl">{categoryName}</h1>
        <p className="font-mono-data text-xs text-muted-foreground">
          /// {bookmarks.length} ITEMS IN THIS COLLECTION
        </p>
      </header>

      {/* Bookmarks list */}
      <div className="space-y-0">
        {bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="border border-b-0 last:border-b border-border p-5 hover:bg-secondary transition-none"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="font-mono text-sm mb-1">{bookmark.title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {bookmark.description}
                </p>
              </div>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 font-mono-data text-[11px] text-accent hover:text-accent/80 transition-none"
              >
                VISIT
                <span className="font-mono-data text-[11px]">&#62;&#62;&#62;</span>
              </a>
            </div>

            {bookmark.tags && bookmark.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {bookmark.tags.map((tag) => (
                  <TechMarker key={tag} text={tag.toUpperCase()} />
                ))}
              </div>
            )}
          </div>
        ))}

        {bookmarks.length === 0 && (
          <div className="border border-border p-8 text-center">
            <span className="font-mono-data text-xs text-muted-foreground">
              [ NO BOOKMARKS IN THIS CATEGORY ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
