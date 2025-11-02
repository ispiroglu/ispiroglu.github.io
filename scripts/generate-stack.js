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

  // Generate skills
  const skillsContent = fs.readFileSync(skillsFile, 'utf-8');
  const { content: skillsRaw } = matter(skillsContent);

  const skills = {};
  skillsRaw.trim().split('\n').forEach(line => {
    if (line.includes(':')) {
      const [category, items] = line.split(':').map(s => s.trim());
      if (category && items) {
        skills[category] = items.split(',').map(item => item.trim()).filter(item => item);
      }
    }
  });

  const output = `// Auto-generated file - do not edit manually
export const generatedTools = ${JSON.stringify(tools, null, 2)};

export const generatedSkills = ${JSON.stringify(skills, null, 2)};
`;

  fs.writeFileSync(outputFile, output);
  console.log(`Generated ${tools.length} tools and skills in ${outputFile}`);
}

generateStack();
