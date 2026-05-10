import { redirect } from "react-router";
import type { Route } from "./+types/writing.$slug";

export async function loader({ params }: Route.LoaderArgs) {
	return redirect(`/logs/${params.slug}`, 301);
}

export default function WritingDetail() {
	return null;
}
