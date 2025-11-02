import type { Route } from "./+types/stack";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ExternalLink } from "lucide-react";
import { generatedTools, generatedSkills } from "~/lib/stack.generated";

type SkillsData = Record<string, string[]>;

type Tool = typeof generatedTools[number];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stack - Evren Ispiroglu" },
    { name: "description", content: "Tools and software I use daily." },
  ];
}

export default function Stack() {
const toolsByCategory = generatedTools.reduce((acc: Record<string, Tool[]>, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

return (
<div className="space-y-8">
<header>
<h1 className="text-4xl font-bold mb-2">Stack</h1>
<p className="text-lg text-muted-foreground">
Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills.
</p>
</header>

  {/* Tech Stack Section */}
  <section>
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="space-y-6">
          {Object.entries(generatedSkills as SkillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-medium mb-3 text-muted-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

  {/* Tools Section */}
  <section className="pt-8">
  <h3 className="text-xl font-semibold mb-4">Tools</h3>
  {Object.entries(toolsByCategory).map(([category, tools]) => (
  <div key={category} className="mb-6">
  <h4 className="text-lg font-medium mb-3 text-muted-foreground">{category}</h4>
  <div className="grid gap-3 md:grid-cols-1">
  {tools.map((tool) => (
  <Card key={tool.name} className="group hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
    <CardTitle className="flex items-center justify-between text-base">
        <span>{tool.name}</span>
          <a
              href={tool.url}
                target="_blank"
                  rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  </a>
              </CardTitle>
            </CardHeader>
          <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">{tool.description}</p>
          </CardContent>
          </Card>
          ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
