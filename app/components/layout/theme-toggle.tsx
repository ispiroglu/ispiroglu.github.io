// Sidebar theme control — LIGHT / DARK / SYS segmented buttons when expanded,
// a single icon-only cycler in the collapsed rail. State mirrors what the
// bootstrap script in BaseLayout already applied before hydration.

import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import {
	getThemePref,
	setThemePref,
	watchSystemTheme,
	type ThemePref,
} from "~/lib/theme";

const OPTIONS: { value: ThemePref; label: string }[] = [
	{ value: "light", label: "LIGHT" },
	{ value: "dark", label: "DARK" },
	{ value: "system", label: "SYS" },
];

const ICON_PROPS = {
	className: "w-3 h-3",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	strokeWidth: 1.5,
} as const;

function ThemeIcon({ pref }: { pref: ThemePref }) {
	if (pref === "light") {
		return (
			<svg {...ICON_PROPS} aria-hidden="true">
				<circle cx="12" cy="12" r="4" />
				<path
					strokeLinecap="square"
					d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
				/>
			</svg>
		);
	}
	if (pref === "dark") {
		return (
			<svg {...ICON_PROPS} aria-hidden="true">
				<path
					strokeLinecap="square"
					strokeLinejoin="miter"
					d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
				/>
			</svg>
		);
	}
	return (
		<svg {...ICON_PROPS} aria-hidden="true">
			<rect x="3" y="4" width="18" height="13" />
			<path strokeLinecap="square" d="M8 21h8M12 17v4" />
		</svg>
	);
}

export function ThemeToggle({ isCollapsed }: { isCollapsed: boolean }) {
	const [pref, setPref] = useState<ThemePref>("system");

	useEffect(() => {
		setPref(getThemePref());
		watchSystemTheme();
	}, []);

	const pick = (next: ThemePref): void => {
		setPref(next);
		setThemePref(next);
	};

	if (isCollapsed) {
		return (
			<div className="flex justify-center border-t border-border py-3 shrink-0">
				<button
					onClick={() =>
						pick(
							OPTIONS[
								(OPTIONS.findIndex((o) => o.value === pref) + 1) %
									OPTIONS.length
							].value,
						)
					}
					aria-label={`Switch theme, current: ${pref}`}
					title={`theme / ${pref}`}
					className="text-muted-foreground hover:text-accent transition-none p-1"
				>
					<ThemeIcon pref={pref} />
				</button>
			</div>
		);
	}

	return (
		<div className="border-t border-border px-4 py-3 shrink-0">
			<p className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-2">
				THEME
			</p>
			<div className="inline-flex border border-border divide-x divide-border">
				{OPTIONS.map((o) => (
					<button
						key={o.value}
						onClick={() => pick(o.value)}
						aria-pressed={pref === o.value}
						title={`theme / ${o.value}`}
						className={cn(
							"font-mono text-[9px] uppercase tracking-wider px-2.5 py-1.5 transition-none",
							pref === o.value
								? "bg-foreground text-background"
								: "text-muted-foreground hover:text-accent",
						)}
					>
						{o.label}
					</button>
				))}
			</div>
		</div>
	);
}
