import { Link, useLocation } from "react-router";
import {
	Home,
	PenLine,
	Map,
	Layers,
	FolderKanban,
	PanelLeftClose,
	PanelLeftOpen,
} from "lucide-react";
import { cn } from "~/lib/utils";

const navigation = [
	{ name: "HOME", href: "/", icon: Home },
	{ name: "WRITING", href: "/writing", icon: PenLine },
	{ name: "PROJECTS", href: "/projects", icon: FolderKanban },
	{ name: "JOURNEY", href: "/journey", icon: Map },
	{ name: "STACK", href: "/stack", icon: Layers },
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
				<div className="border-b border-border">
					<div
						className={cn(
							"flex items-center gap-3",
							isCollapsed ? "px-2 py-4 flex-col" : "px-4 py-5",
						)}
					>
						<img
							src="/assets/evren-ispiroglu.jpg"
							alt="Evren Ispiroglu"
							className={cn(
								"object-cover border border-border",
								isCollapsed ? "w-8 h-8" : "w-10 h-10",
							)}
						/>
						{!isCollapsed && (
							<div className="flex-1 min-w-0">
								<h1 className="font-mono-data text-[11px] text-foreground truncate">
									EVREN ISPIROGLU
								</h1>
								<p className="font-mono-data text-[10px] text-muted-foreground">
									BACKEND ENGINEER
								</p>
							</div>
						)}
						<button
							onClick={onToggle}
							className="text-muted-foreground hover:text-foreground transition-none p-1"
							aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
						>
							{isCollapsed ? (
								<PanelLeftOpen className="w-4 h-4" strokeWidth={1.5} />
							) : (
								<PanelLeftClose className="w-4 h-4" strokeWidth={1.5} />
							)}
						</button>
					</div>

					{/* Unit metadata */}
					{!isCollapsed && (
						<div className="px-4 pb-3 grid grid-cols-2 gap-1">
							<span className="font-mono-data text-[9px] text-muted-foreground">
								UNIT / EI-01
							</span>
							<span className="font-mono-data text-[9px] text-muted-foreground text-right">
								REV 2.6.1
							</span>
							<span className="font-mono-data text-[9px] text-muted-foreground">
								STATUS
							</span>
							<span className="font-mono-data text-[9px] text-[#4AF626] text-right">
								ONLINE
							</span>
						</div>
					)}
				</div>

				{/* ── NAVIGATION ── */}
				<nav
					className={cn("flex-1 py-4 space-y-0", isCollapsed ? "px-2" : "px-0")}
				>
					{!isCollapsed && (
						<div className="px-4 pb-2">
							<span className="font-mono-data text-[10px] text-muted-foreground">
								[ NAVIGATION ]
							</span>
						</div>
					)}
					{navigation.map((item) => {
						const isActive =
							location.pathname === item.href ||
							(item.href !== "/" && location.pathname.startsWith(item.href));
						const Icon = item.icon;

						return (
							<Link
								key={item.name}
								to={item.href}
								className={cn(
									"flex items-center border-l-2 border-transparent py-2.5 font-mono-data text-[11px] transition-none",
									isCollapsed ? "justify-center px-2" : "px-4 gap-3",
									isActive
										? "border-accent text-accent bg-accent/5"
										: "text-muted-foreground hover:text-foreground hover:bg-secondary",
								)}
								title={isCollapsed ? item.name : undefined}
							>
								<Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
								{!isCollapsed && <span>{item.name}</span>}
							</Link>
						);
					})}
				</nav>

				{/* ── ONLINE LINKS ── */}
				{!isCollapsed && (
					<div className="border-t border-border">
						<div className="px-4 pt-3 pb-2">
							<span className="font-mono-data text-[10px] text-muted-foreground">
								[ EXTERNAL ]
							</span>
						</div>
						<div className="px-4 pb-4 space-y-0">
							{onlineLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="block py-1.5 font-mono-data text-[10px] text-muted-foreground hover:text-foreground transition-none"
								>
									<span className="text-accent mr-1.5">&#62;&#62;&#62;</span>
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
	// TODO: Mobile drawer with sheet component
	return null;
}
