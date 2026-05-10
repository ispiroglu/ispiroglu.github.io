import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "~/root";

export function ReadingProgress() {
	const { isCollapsed } = useContext(SidebarContext);
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

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updatePosition);
		updatePosition(); // Initial
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updatePosition);
		};
	}, [isCollapsed]); // Add isCollapsed to dependencies

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
