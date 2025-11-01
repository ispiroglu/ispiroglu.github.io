import type { Route } from "./+types/stack";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ExternalLink } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stack - Evren Ispiroglu" },
    { name: "description", content: "Tools and software I use daily." },
  ];
}

const tools = [
  { name: "GoLand 🔥", description: "My primary IDE for Go development. Excellent refactoring, debugging, and code navigation features.", url: "https://www.jetbrains.com/go/" },
  { name: "IntelliJ IDEA 🚀", description: "For Kotlin and Java development. Powerful IDE with great Spring Boot support.", url: "https://www.jetbrains.com/idea/" },
  { name: "Docker Desktop 🐳", description: "Essential for containerized development and testing microservices locally.", url: "https://www.docker.com/products/docker-desktop/" },
  { name: "k9s 🎮", description: "Terminal UI for Kubernetes. Makes managing on-prem clusters much easier.", url: "https://k9scli.io/" },
  { name: "Postman 📮", description: "API testing and development. Great for testing gRPC endpoints and REST APIs.", url: "https://www.postman.com/" },
  { name: "Grafana 📊", description: "Observability and monitoring dashboards. Essential for production debugging.", url: "https://grafana.com/" },
  { name: "DBeaver 🦫", description: "Universal database tool. Works great with PostgreSQL, ElasticSearch, and Couchbase.", url: "https://dbeaver.io/" },
  { name: "DataGrip 🔧", description: "Database IDE from JetBrains. Excellent for complex queries and data analysis.", url: "https://www.jetbrains.com/datagrip/" },
  { name: "Raycast 👀", description: "It's like macOS Spotlight on steroids. Essential productivity tool.", url: "https://raycast.com/" },
  { name: "1Password 🔑", description: "Best tool for password management and secure credential storage.", url: "https://1password.com/" },
  { name: "iTerm2 🖥️", description: "Terminal replacement for macOS. Great for managing multiple sessions and SSH connections.", url: "https://iterm2.com/" },
  { name: "GitHub CLI 🐙", description: "GitHub from the command line. Streamlines code review and repo management.", url: "https://cli.github.com/" },
];

export default function Stack() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Stack</h1>
        <p className="text-lg text-muted-foreground">
          Here is my go-to list of tools & software that I enjoy using and have helped me level up my skills.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.name} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
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
            <CardContent>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}



