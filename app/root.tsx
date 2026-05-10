import { createContext, useState } from "react";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Sidebar } from "./components/layout/sidebar";
export const SidebarContext = createContext<{ isCollapsed: boolean }>({
	isCollapsed: false,
});

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,400;1,14..32,500&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;0,800;1,400;1,500;1,700&display=swap",
	},
	// Favicon links
	{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon-32x32.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon-16x16.png",
	},
	{ rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<SidebarContext.Provider value={{ isCollapsed }}>
			<div className="min-h-screen">
				<Sidebar
					isCollapsed={isCollapsed}
					onToggle={() => setIsCollapsed(!isCollapsed)}
				/>
				<main className={`${isCollapsed ? "lg:pl-16" : "lg:pl-64"}`}>
					<div className="px-6 py-10 lg:px-10 lg:py-12">
						<Outlet />
					</div>
				</main>
			</div>
		</SidebarContext.Provider>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "ERROR";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : `ERROR ${error.status}`;
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 max-w-3xl">
			<h1 className="font-mono font-bold text-3xl mb-4">{message}</h1>
			<p className="text-muted-foreground mb-4">{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto border border-border font-mono text-xs">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
