import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const toolsDir = path.join(process.cwd(), 'content', 'stack', 'tools');
const skillsFile = path.join(process.cwd(), 'content', 'stack', 'skills.mdx');
const outputFile = path.join(process.cwd(), 'app', 'lib', 'stack.generated.ts');

function generateStack() {
  // Generate tools
  const toolFiles = fs.readdirSync(toolsDir).filter(file => file.endsWith('.mdx'));
  const tools = toolFiles.map(file => {
    const filePath = path.join(toolsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    return {
      ...frontmatter,
      description: content.trim(),
    };
  });

  // Generate stack sections from `## Category` headings with
  // `- Name :: description :: status` entries.
  const skillsContent = fs.readFileSync(skillsFile, 'utf-8');
  const { content: skillsRaw } = matter(skillsContent);

  const sections = [];
  let current = null;
  for (const line of skillsRaw.split('\n')) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      current = { category: heading[1].trim(), items: [] };
      sections.push(current);
      continue;
    }
    if (!current) continue;
    const entry = line.match(/^-\s+(.+?)\s*::\s*(.+?)\s*::\s*(\w+)\s*$/);
    if (entry) {
      current.items.push({
        name: entry[1].trim(),
        description: entry[2].trim(),
        status: entry[3].trim(),
      });
    }
  }

  for (const [index, section] of sections.entries()) {
    const slug = section.category.toUpperCase().replace(/[^A-Z0-9]+/g, '_');
    section.label = `/// ${String(index + 1).padStart(2, '0')}_${slug}`;
  }

  const output = `// Auto-generated file - do not edit manually
export type StackStatus = "stable" | "experimental" | "migrating";

export interface StackItem {
  name: string;
  description: string;
  status: StackStatus;
}

export interface StackSection {
  label: string;
  category: string;
  items: StackItem[];
}

export const generatedSections: StackSection[] = ${JSON.stringify(sections, null, 2)};

export const generatedTools = ${JSON.stringify(tools, null, 2)};
`;

  fs.writeFileSync(outputFile, output);
  console.log(`Generated ${sections.length} sections (${sections.reduce((n, s) => n + s.items.length, 0)} items) and ${tools.length} tools in ${outputFile}`);
}

generateStack();
