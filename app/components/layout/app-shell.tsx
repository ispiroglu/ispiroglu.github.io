import { useEffect, useState } from "react";

import { SidebarContext } from "~/lib/sidebar-context";
import { Sidebar } from "./sidebar";

export function AppShell({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Broadcast toggle state across islands (React context does not cross
  // Astro island boundaries — each island mounts its own React root).
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("sidebar-collapse", { detail: isCollapsed }),
    );
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <div className="min-h-screen">
        <Sidebar
          pathname={pathname}
          isCollapsed={isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
        />
        <main className={`${isCollapsed ? "lg:pl-16" : "lg:pl-64"}`}>
          <div className="px-6 py-10 lg:px-10 lg:py-12">{children}</div>
        </main>
      </div>
    </SidebarContext.Provider>
  );
}
