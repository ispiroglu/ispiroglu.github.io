import { redirect } from "react-router";

export async function loader() {
	return redirect("/logs", 301);
}

export default function WritingIndex() {
	return null;
}
