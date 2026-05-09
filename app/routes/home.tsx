import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function loader() {
	return redirect("/");
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "EVREN ISPIROGLU — BACKEND ENGINEER" },
		{
			name: "description",
			content:
				"Backend engineer building event-driven systems and high-performance APIs.",
		},
	];
}

export default function Home() {
	return null;
}
