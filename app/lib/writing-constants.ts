export const WRITING_COLLECTION_NAME = "writing" as const;
export const WRITING_CONTENT_BASE = "./content/writing";
export const WRITING_FILE_PATTERN = "**/*.mdx";

export const LOGS_INDEX_PATH = "/logs";
export const LOGS_DETAIL_PATH_PREFIX = "/logs/";
export const LOGS_CONTAINER_ID = "logs-container";
export const WRITINGS_CONTAINER_ID = "writings-container";

export const WRITING_VIEWS_KEY_PREFIX = "writing/";

export const EXCERPT_MAX_LENGTH = 200;
export const EXCERPT_ELLIPSIS = "...";
export const READING_TIME_SUFFIX = " min read";
export const DEFAULT_READING_TIME_LABEL = "05 MIN";

export const DATE_PAD_LENGTH = 2;
export const DATE_PAD_CHAR = "0";

export const LOGS_BACK_LABEL = "BACK TO LOGS";
export const METADATA_HEADING = "/// METADATA";
export const DATE_PUBLISHED_LABEL = "DATE PUBLISHED";
export const READING_TIME_LABEL = "EST. READING TIME";
export const VIEWS_LABEL = "VIEWS";
export const TAGS_LABEL = "TAGS";
export const PREVIOUS_POST_LABEL = "PREVIOUS";
export const NEXT_POST_LABEL = "NEXT";

export function writingViewsKey(slug: string): string {
	return `${WRITING_VIEWS_KEY_PREFIX}${slug}`;
}

export function logsDetailPath(slug: string): string {
	return `${LOGS_DETAIL_PATH_PREFIX}${slug}`;
}

export function formatLogDateParts(isoDate: string): {
	year: number;
	month: string;
	day: string;
} {
	const date = new Date(isoDate);
	return {
		year: date.getFullYear(),
		month: String(date.getMonth() + 1).padStart(
			DATE_PAD_LENGTH,
			DATE_PAD_CHAR,
		),
		day: String(date.getDate()).padStart(DATE_PAD_LENGTH, DATE_PAD_CHAR),
	};
}
