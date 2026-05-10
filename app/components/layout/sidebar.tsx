import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";

const navigation = [
	{ name: "LOGS", href: "/logs" },
	{ name: "PROJECTS", href: "/projects" },
	{ name: "STACK", href: "/stack" },
	{ name: "JOURNEY", href: "/journey" },
	{ name: "WORKSPACE", href: "/workspace" },
	{ name: "BOOKMARKS", href: "/bookmarks" },
	{ name: "ABOUT", href: "/about" },
];

const onlineLinks = [
	{ name: "X / TWITTER", href: "https://x.com/eispirogluu" },
	{ name: "GITHUB", href: "https://github.com/ispiroglu" },
	{ name: "LINKEDIN", href: "https://linkedin.com/in/eispiroglu" },
];

interface SidebarProps {
	isCollapsed: boolean;
	onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
	const location = useLocation();

	return (
		<aside
			className={cn(
				"hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 bg-background border-r border-border",
				isCollapsed ? "lg:w-16" : "lg:w-64",
			)}
		>
			<div className="flex flex-col h-full">
				{/* ── UNIT HEADER ── */}
				<div className="border-b border-border shrink-0">
					<div
						className={cn(
							"flex items-center",
							isCollapsed ? "px-2 py-4 flex-col gap-2" : "px-4 py-5 gap-3",
						)}
					>
						<Link
							to="/"
							className="w-10 h-10 bg-foreground flex items-center justify-center shrink-0 hover:bg-accent transition-colors"
						>
							<span className="font-mono font-bold text-[10px] text-background">
								EI
							</span>
						</Link>
						{!isCollapsed && (
							<div className="flex-1 min-w-0 flex items-center gap-2">
								<div>
									<h1 className="font-mono text-[11px] font-bold text-foreground tracking-tight truncate">
										EI-01
									</h1>
									<p className="font-mono text-[9px] text-status-green uppercase tracking-wider">
										STATUS / ONLINE
									</p>
								</div>
								<button
									onClick={onToggle}
									className="ml-auto text-muted-foreground hover:text-accent transition-none p-1"
									aria-label={
										isCollapsed ? "Expand sidebar" : "Collapse sidebar"
									}
								>
									<svg
										className="w-3 h-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1.5}
									>
										<path
											strokeLinecap="square"
											strokeLinejoin="round"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
							</div>
						)}
					</div>
					{isCollapsed && (
						<button
							onClick={onToggle}
							className="text-muted-foreground hover:text-accent transition-none p-1"
							aria-label="Expand sidebar"
						>
							<svg
								className="w-3 h-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1.5}
							>
								<path
									strokeLinecap="square"
									strokeLinejoin="round"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					)}

					{/* Unit metadata */}
					{!isCollapsed && (
						<div className="px-4 pb-3 flex justify-between gap-1 shrink-0">
							<span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
								UNIT / EI-01
							</span>
							<span className="font-mono text-[9px] text-status-green uppercase tracking-wider">
								SYS / STABLE
							</span>
						</div>
					)}
				</div>

				{/* ── NAVIGATION ── */}
				<nav
					className={cn(
						"flex-1 py-4",
						isCollapsed ? "px-3 flex-col" : "space-y-0 px-0",
					)}
				>
					{navigation.map((item) => {
						const isActive =
							location.pathname === item.href ||
							(item.href !== "/" && location.pathname.startsWith(item.href));

						return (
							<Link
								key={item.name}
								to={item.href}
								className={cn(
									"flex items-center border-l-2 font-mono text-[11px] uppercase transition-none",
									isCollapsed ? "justify-center py-3" : "py-2.5 px-4 gap-3",
									isActive ? "border-accent" : "border-border",
								)}
							>
								{!isCollapsed && <span>{item.name}</span>}
							</Link>
						);
					})}
				</nav>

				{/* ── EXTERNAL LINKS ── */}
				{!isCollapsed && (
					<div className="border-t border-border shrink-0">
						<div className="px-4 pb-4 pt-3 space-y-0">
							{onlineLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="block py-1.5 font-mono text-[10px] text-muted-foreground hover:text-accent transition-colors duration-150"
								>
									<span className="text-accent mr-1.5">&gt;&gt;&gt;</span>
									{link.name}
								</a>
							))}
						</div>
					</div>
				)}

				{/* ── CONTACT CTA ── */}
				{!isCollapsed && (
					<div className="px-4 py-3 border-t border-border shrink-0">
						<button className="w-full text-left font-mono text-[11px] text-foreground border border-border px-3 py-2 hover:bg-secondary hover:border-accent hover:text-accent transition-colors duration-150 active:translate-y-px uppercase">
							&gt;&gt;&gt; CONTACT
						</button>
					</div>
				)}
			</div>
		</aside>
	);
}

export function MobileSidebar() {
	return null;
}
