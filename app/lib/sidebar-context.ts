import { createContext } from "react";

export const SidebarContext = createContext<{ isCollapsed: boolean }>({
  isCollapsed: false,
});
