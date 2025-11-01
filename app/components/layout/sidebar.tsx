import { Link, useLocation } from "react-router";
import { Home, PenLine, Map, Layers, Briefcase, Bookmark } from "lucide-react";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Writing", href: "/writing", icon: PenLine },
  { name: "Journey", href: "/journey", icon: Map },
  { name: "Stack", href: "/stack", icon: Layers },
  { name: "Workspace", href: "/workspace", icon: Briefcase },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
];

const onlineLinks = [
  { name: "X (Twitter)", href: "https://x.com/eispirogluu" },
  { name: "GitHub", href: "https://github.com/ispiroglu" },
  { name: "LinkedIn", href: "https://linkedin.com/in/eispiroglu" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:w-64 bg-card border-r border-border">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-6 py-8 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
                EI
              </div>
              <div>
                <h1 className="font-semibold text-lg">Evren Ispiroglu</h1>
                <p className="text-sm text-muted-foreground">Backend Developer</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== "/" && location.pathname.startsWith(item.href));
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Online links */}
        <div className="px-6 py-6 border-t border-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Online
          </h3>
          <div className="space-y-2">
            {onlineLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileSidebar() {
  // For now, we'll implement the mobile drawer later with proper sheet component
  return null;
}



