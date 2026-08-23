import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";
import {
	WRITING_COLLECTION_NAME,
	EXCERPT_MAX_LENGTH,
	EXCERPT_ELLIPSIS,
	READING_TIME_SUFFIX,
} from "./writing-constants";

export interface PostFrontmatter {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
	hero?: string;
	tags: string[];
	coverImage?: string;
	ogImage?: string;
	draft?: boolean;
}

export interface Post extends PostFrontmatter {
	readingTime: string;
	excerpt: string;
}

// First non-heading paragraph of the markdown body, truncated to
// EXCERPT_MAX_LENGTH — mirrors the excerpt the old generate-posts script derived.
function deriveExcerpt(body: string): string {
	let excerpt = "";

	for (const line of body.split("\n")) {
		if (line.trim() && !line.startsWith("#")) {
			excerpt += `${line} `;
			if (excerpt.length > EXCERPT_MAX_LENGTH) break;
		}
	}

	return (
		excerpt.trim().slice(0, EXCERPT_MAX_LENGTH) +
		(excerpt.length > EXCERPT_MAX_LENGTH ? EXCERPT_ELLIPSIS : "")
	);
}

const posts: Post[] = (
	await getCollection(WRITING_COLLECTION_NAME)
).map((entry: CollectionEntry<typeof WRITING_COLLECTION_NAME>) => {
		const body = entry.body ?? "";
		const excerpt = entry.data.excerpt || deriveExcerpt(body);

		return {
			...entry.data,
			slug: entry.id,
			date: entry.data.date.toISOString(),
			updated: entry.data.updated?.toISOString(),
			readingTime: `${Math.ceil(readingTime(body).minutes)}${READING_TIME_SUFFIX}`,
			excerpt,
			description: entry.data.description || excerpt,
		};
	},
);

export async function getAllPosts(): Promise<Post[]> {
	return posts
		.filter((post) => !post.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
	const post = posts.find((p) => p.slug === slug && !p.draft);
	return post || null;
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
	const allPosts = await getAllPosts();
	return allPosts.filter((post) => post.tags.includes(tag));
}

export function getPostNavigation(posts: Post[], currentSlug: string) {
	const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

	return {
		prev: currentIndex > 0 ? posts[currentIndex - 1] : null,
		next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
	};
}
