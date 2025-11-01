import type { Route } from "./+types/workspace";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Workspace - Evren Ispiroglu" },
    { name: "description", content: "My desk setup and workspace." },
  ];
}

export default function Workspace() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Workspace</h1>
        <p className="text-lg text-muted-foreground">
          A look at my desk setup and the tools I use daily
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          My workspace is designed for productivity and comfort. I believe in investing in quality tools
          that help me do my best work, especially when building distributed systems and high-performance backend services.
        </p>

        <h2>Hardware</h2>
        <ul>
          <li>MacBook Pro 16" (M3 Max)</li>
          <li>Apple Studio Display</li>
          <li>Magic Keyboard & Magic Trackpad</li>
          <li>AirPods Max</li>
        </ul>

        <h2>Development Tools</h2>
        <ul>
          <li>GoLand for Go development</li>
          <li>IntelliJ IDEA for Kotlin/Java and Spring Boot</li>
          <li>iTerm2 with custom configurations for terminal workflows</li>
          <li>Docker Desktop for local containerized development</li>
          <li>k9s for Kubernetes cluster management</li>
          <li>Postman for API testing and gRPC debugging</li>
          <li>Grafana for observability and monitoring</li>
          <li>DBeaver and DataGrip for database work</li>
        </ul>

        <h2>Productivity</h2>
        <ul>
          <li>Raycast for quick actions and app launching</li>
          <li>1Password for secure credential management</li>
          <li>GitHub CLI for streamlined code review</li>
        </ul>
      </div>
    </div>
  );
}



