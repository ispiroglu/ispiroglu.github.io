import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/_index.tsx"),
	route("/home", "routes/home.tsx"),
	route("/about", "routes/about.tsx"),
	route("/projects", "routes/projects.tsx"),
	route("/journey", "routes/journey.tsx"),
	route("/stack", "routes/stack.tsx"),
	route("/workspace", "routes/workspace.tsx"),
	route("/bookmarks", "routes/bookmarks._index.tsx"),
	route("/bookmarks/:category", "routes/bookmarks.$category.tsx"),
	// NEW: LOGS routes (writing redirects to these later)
	route("/logs", "routes/logs._index.tsx"),
	route("/logs/:slug", "routes/logs.$slug.tsx"),
	// DEPRECATED: keep until redirects are set up
	route("/writing", "routes/writing._index.tsx"),
	route("/writing/:slug", "routes/writing.$slug.tsx"),
] satisfies RouteConfig;
