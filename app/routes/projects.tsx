import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EI-01 — PROJECTS" },
    { name: "description", content: "Engineering projects and systems." },
  ];
}

interface Project {
  title: string;
  status: "stable" | "archived" | "active-dev";
  statusLabel: string;
  description: string;
  tech: string[];
  url?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Chaki",
      status: "active-dev",
      statusLabel: "ACTIVE_DEV",
      description:
        "Go application framework built on Uber FX. Auto-configuration system with file-based configurability — similar to Spring Boot for Go. Integrated OpenTelemetry tracing, Swagger, and leveled logging. Eliminates boilerplate for cross-cutting concerns across microservices.",
      tech: ["Go", "Uber FX", "OpenTelemetry", "Swagger"],
      url: "https://github.com/Trendyol/chaki",
    },
    {
      title: "Mercurius",
      status: "active-dev",
      statusLabel: "ACTIVE_DEV",
      description:
        "Lightweight gRPC-based message broker for distributed system communication. Bidirectional streaming pub-sub with leveled logging for traceability. Designed for reliable, low-latency message propagation across microservices. Performance-optimized with gRPC binary protocol.",
      tech: ["Go", "gRPC", "Protobuf", "Pub-Sub"],
      url: "https://github.com/ispiroglu/mercurius",
    },
  ];

  const statusStyles: Record<string, string> = {
    stable: "border-status-green text-status-green",
    "active-dev": "border-accent text-accent",
    archived: "border-muted-foreground text-muted-foreground",
  };

  return (
    <div className="space-y-16 max-w-5xl">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="font-header text-5xl">PROJECTS</h1>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// ACTIVE REPOSITORIES
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-border bg-card p-6 flex flex-col hover:bg-secondary transition-colors duration-150 group"
          >
            {/* Title + Status */}
            <div className="flex justify-between items-start gap-3 mb-4">
              <h2 className="font-header text-lg uppercase">{project.title}</h2>
              <span
                className={`font-mono text-[9px] border px-2 py-0.5 uppercase tracking-wider whitespace-nowrap rounded-sm ${statusStyles[project.status]}`}
              >
                {project.statusLabel}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-[14px] leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mb-5">
              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mb-2 block">
                /// TECH STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] text-foreground border border-border px-2 py-0.5 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-border flex justify-between items-center">
              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                {project.status === "stable"
                  ? "/// PRODUCTION"
                  : project.status === "active-dev"
                    ? "/// UNDER_DEVELOPMENT"
                    : "/// ARCHIVED"}
              </span>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-accent hover:text-foreground transition-colors duration-150 uppercase flex items-center gap-1 group-active:translate-y-px"
                >
                  &gt;&gt;&gt; VIEW SOURCE
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
