import { Link, useLocation } from "react-router";
import { Home, PenLine, Map, Layers, User, FolderKanban, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "~/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Writing", href: "/writing", icon: PenLine },
  { name: "Journey", href: "/journey", icon: Map },
  { name: "Stack", href: "/stack", icon: Layers },
];

const onlineLinks = [
  { name: "X (Twitter)", href: "https://x.com/eispirogluu" },
  { name: "GitHub", href: "https://github.com/ispiroglu" },
  { name: "LinkedIn", href: "https://linkedin.com/in/eispiroglu" },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className={cn(
      "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 bg-card border-r border-border transition-all duration-300",
      isCollapsed ? "lg:w-16" : "lg:w-64"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className={cn("border-b border-border", isCollapsed ? "px-2 py-6" : "px-4 py-8")}>
          <div className={cn("flex mb-4", isCollapsed ? "flex-col items-center gap-4" : "items-center justify-between")}>
            <div className={cn("flex items-center gap-3", isCollapsed && "flex-col gap-2")}>
              <div className={cn("rounded-full bg-muted flex items-center justify-center text-sm font-bold", isCollapsed ? "w-10 h-10 text-base" : "w-8 h-8")}>
                EI
              </div>
              {!isCollapsed && (
                <div>
                  <h1 className="font-semibold text-sm">Evren Ispiroglu</h1>
                  <p className="text-xs text-muted-foreground">Backend Developer</p>
                </div>
              )}
            </div>
            <div className={cn("flex items-center gap-2", isCollapsed && "flex-col gap-1")}>
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className={cn("p-0", isCollapsed ? "h-8 w-8" : "h-8 w-8")}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={cn("flex-1 py-6 space-y-1", isCollapsed ? "px-2" : "px-4")}>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center px-2" : "gap-3",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && item.name}
              </Link>
            );
          })}
        </nav>

        {/* Online links */}
        {!isCollapsed && (
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
        )}
      </div>
    </aside>
  );
}

export function MobileSidebar() {
  // For now, we'll implement the mobile drawer later with proper sheet component
  return null;
}



