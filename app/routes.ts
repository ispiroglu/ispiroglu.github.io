import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("/about", "routes/about.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/writing", "routes/writing._index.tsx"),
  route("/writing/:slug", "routes/writing.$slug.tsx"),
  route("/journey", "routes/journey.tsx"),
  route("/stack", "routes/stack.tsx"),
  route("/workspace", "routes/workspace.tsx"),
  route("/bookmarks", "routes/bookmarks._index.tsx"),
  route("/bookmarks/:category", "routes/bookmarks.$category.tsx"),
] satisfies RouteConfig;
