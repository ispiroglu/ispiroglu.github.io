import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content', 'writing');
const outputFile = path.join(process.cwd(), 'app', 'lib', 'posts.generated.ts');

function getExcerpt(content, existingExcerpt, maxLength = 200) {
  if (existingExcerpt) return existingExcerpt;

  // Remove frontmatter and get first paragraph or truncate
  const lines = content.split('\n');
  let excerpt = '';

  for (const line of lines) {
    if (line.trim() && !line.startsWith('#')) {
      excerpt += line + ' ';
      if (excerpt.length > maxLength) break;
    }
  }

  return excerpt.trim().slice(0, maxLength) + (excerpt.length > maxLength ? '...' : '');
}

function generatePosts() {
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));

  const posts = files.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    const slug = path.basename(file, '.mdx');
    const rt = readingTime(content);
    const excerpt = getExcerpt(content, frontmatter.excerpt);

    return {
      ...frontmatter,
      slug,
      readingTime: `${Math.ceil(rt.minutes)} min read`,
      excerpt,
      description: excerpt,
    };
  }).filter(post => !post.draft);

  const output = `// Auto-generated file - do not edit manually
export const generatedPosts = ${JSON.stringify(posts, null, 2)};
`;

  fs.writeFileSync(outputFile, output);
  console.log(`Generated ${posts.length} posts in ${outputFile}`);
}

generatePosts();
