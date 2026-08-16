import { useEffect, useState } from "react";

export function ReadingProgress() {
	const [progress, setProgress] = useState(0);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			const container =
				document.getElementById("writings-container") ||
				document.getElementById("logs-container");
			if (container) {
				const rect = container.getBoundingClientRect();
				setLeft(rect.left - 20); // 20px to the left of writings
			}
		};

		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.scrollY / totalHeight) * 100;
			setProgress(Math.min(100, Math.max(0, progress)));
		};

		// Sidebar toggle shifts the container — relocate. React context does
		// not cross Astro island boundaries, so AppShell broadcasts the event.
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updatePosition);
		window.addEventListener("sidebar-collapse", updatePosition);
		updatePosition(); // Initial
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updatePosition);
			window.removeEventListener("sidebar-collapse", updatePosition);
		};
	}, []);

	return (
		<div
			className="fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block"
			style={{ left: `${left}px` }}
		>
			<div className="w-0.5 h-32 bg-muted-foreground/30 overflow-hidden">
				<div
					className="w-full bg-accent transition-none"
					style={{ height: `${progress}%` }}
				/>
			</div>
		</div>
	);
}
