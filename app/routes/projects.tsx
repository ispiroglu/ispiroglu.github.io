import type { Route } from "./+types/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { ExternalLink } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Evren Ispiroglu" },
    { name: "description", content: "Open-source projects and contributions by Evren Ispiroglu." },
  ];
}

const projects = [
  {
    name: "Chaki",
    description: "Co-initiated an open-source Golang framework built to reduce boilerplate. Implemented auto-configuration and observability modules, reducing boilerplate and streamlining microservice development.",
    url: "https://github.com/Trendyol/chaki",
    github: "Trendyol/chaki",
  },
  {
    name: "Mercurius",
    description: "Built a high-throughput message broker in Go with gRPC. Designed for performance and reliability in distributed systems.",
    url: "https://github.com/ispiroglu/mercurius",
    github: "ispiroglu/mercurius",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Open-source projects and contributions I've worked on
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{project.name}</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </a>
              </CardTitle>
              <CardDescription>{project.github}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
              >
                View on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

