export interface PostFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  coverImage?: string;
  ogImage?: string;
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  readingTime: string;
  excerpt: string;
}

import { generatedPosts } from './posts.generated';

const posts: Post[] = generatedPosts;

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



