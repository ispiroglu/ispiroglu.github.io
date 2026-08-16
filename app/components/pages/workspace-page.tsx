export function WorkspacePage() {
	const sections = [
		{
			label: "/// HARDWARE",
			items: [
				{ label: "PRIMARY_MACHINE", value: 'MacBook Pro 14" (M4 Pro, 24GB)' },
				{ label: "DISPLAY", value: 'Dell U2723QE 4K (27")' },
				{ label: "KEYBOARD", value: "Keychron Q1 Pro (Gateron Brown)" },
				{ label: "AUDIO", value: "AirPods Pro 2" },
			],
		},
		{
			label: "/// EDITORS & TERMINAL",
			items: [
				{ label: "PRIMARY_EDITOR", value: "IntelliJ IDEA Ultimate" },
				{ label: "SECONDARY_EDITOR", value: "Cursor / VSCode" },
				{ label: "TERMINAL", value: "Ghostty + tmux" },
				{ label: "SHELL", value: "zsh + oh-my-zsh" },
				{ label: "FONT", value: "JetBrains Mono (14px, ligatures on)" },
			],
		},
		{
			label: "/// PRODUCTIVITY",
			items: [
				{ label: "NOTE_TAKING", value: "Obsidian" },
				{ label: "TASK_MANAGEMENT", value: "Linear" },
				{ label: "LAUNCHER", value: "Raycast" },
				{ label: "BROWSER", value: "Firefox Developer Edition" },
				{ label: "VERSION_CONTROL", value: "Git + GitHub + GitHub Actions" },
			],
		},
		{
			label: "/// HOBBIES",
			items: [
				{ label: "MUSIC", value: "Guitar (electric + acoustic)" },
				{
					label: "PHOTOGRAPHY",
					value: "Former board member, college photography club",
				},
				{
					label: "READING",
					value: "Systems design, distributed systems, software architecture",
				},
			],
		},
	];

	return (
		<div className="space-y-20 max-w-3xl">
			<header className="space-y-3">
				<h1 className="font-header text-5xl">WORKSPACE</h1>
				<div className="flex items-center gap-4">
					<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
						/// OPERATIONAL ENVIRONMENT
					</span>
					<div className="flex-1 h-px bg-border" />
				</div>
			</header>

			<div className="space-y-20">
				{sections.map((section) => (
					<section key={section.label}>
						<div className="border-b border-border pb-3 mb-4">
							<h2 className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
								{section.label}
							</h2>
						</div>

						<div className="border border-border">
							{section.items.map((item) => (
								<div
									key={item.label}
									className="flex justify-between items-center py-2.5 px-4 border-b border-border last:border-b-0 hover:bg-secondary transition-colors duration-150"
								>
									<span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
										{item.label}
									</span>
									<span className="text-[14px] text-foreground/80 text-right">
										{item.value}
									</span>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
