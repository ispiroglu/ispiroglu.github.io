import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import {
	WRITING_COLLECTION_NAME,
	WRITING_CONTENT_BASE,
	WRITING_FILE_PATTERN,
} from "./lib/writing-constants";

const writing = defineCollection({
	loader: glob({
		pattern: WRITING_FILE_PATTERN,
		base: WRITING_CONTENT_BASE,
	}),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		hero: z.string().optional(),
		excerpt: z.string().nullish(),
		draft: z.boolean().default(true),
		tags: z.array(z.string()).default([]),
		description: z.string().optional(),
		updated: z.coerce.date().optional(),
		coverImage: z.string().optional(),
		ogImage: z.string().optional(),
	}),
});

export const collections = {
	[WRITING_COLLECTION_NAME]: writing,
};
