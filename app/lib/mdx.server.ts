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

// Mock data for now - in production, you'd use a build-time script or CMS
const posts: Post[] = [
  {
    slug: "react-router-cloudflare",
    title: "Building with React Router 7 on Cloudflare Workers",
    description: "A deep dive into building full-stack applications with React Router 7 deployed on Cloudflare's edge network",
    date: "2025-01-20",
    tags: ["react-router", "cloudflare", "workers", "tutorial"],
    draft: false,
    readingTime: "5 min read",
    excerpt: "React Router 7 brings a fresh approach to building full-stack React applications, and when combined with Cloudflare Workers, you get an incredibly powerful and performant stack.",
  },
  {
    slug: "hello-world",
    title: "Hello World - Welcome to My Blog",
    description: "First post on my new blog built with React Router 7 and Cloudflare Workers",
    date: "2025-01-15",
    tags: ["meta", "react-router", "cloudflare"],
    draft: false,
    readingTime: "3 min read",
    excerpt: "Welcome to my new blog! This is the first post on my personal website built with React Router 7 and deployed on Cloudflare Workers.",
  },
];

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



