import { ActivityFeed } from "~/components/light/activity-feed";

export function IndexPage() {
  const activityEntries = [
    {
      timestamp: "2025.01",
      type: "ROLE",
      typeColor: "green" as const,
      message:
        "Promoted to Software Engineer II at Trendyol — expanding Q&A platform capabilities and RAG systems.",
    },
    {
      timestamp: "2024.06",
      type: "GRAD",
      typeColor: "green" as const,
      message:
        "Graduated B.Sc. Computer Engineering from Yildiz Technical University, Istanbul.",
    },
    {
      timestamp: "2024.01",
      type: "LAUNCH",
      typeColor: "green" as const,
      message:
        "Deployed RAG-based Q&A application at Trendyol — 3x conversion rate improvement.",
    },
    {
      timestamp: "2023.11",
      type: "NEW_CHAPTER",
      typeColor: "green" as const,
      message:
        "Started working to a new company as Software Engineer I. Designed CDC pipelines handling 1.2M RPM.",
    },
    {
      timestamp: "2023.09",
      type: "ROLE",
      typeColor: "green" as const,
      message:
        "Joined Dogus Technology as Junior Software Engineer. Built multi-tenant auth with Kotlin.",
    },
    {
      timestamp: "2022.09",
      type: "ROLE",
      typeColor: "muted" as const,
      message:
        "Began Software Engineer Trainee program at Dogus Technology — microservices migration.",
    },
    {
      timestamp: "2022.07",
      type: "INTERN",
      typeColor: "muted" as const,
      message:
        "Fullstack Engineer Intern at LC Waikiki. Spring Boot + Angular, CI/CD with GitHub Actions.",
    },
  ];

  const techStack = [
    "Go",
    "Kotlin",
    "Java",
    "Kafka",
    "gRPC",
    "PostgreSQL",
    "Elasticsearch",
    "Couchbase",
    "Docker",
    "Kubernetes",
    "Spring Boot",
    "OpenTelemetry",
  ];

  return (
    <div className="space-y-20 max-w-5xl">
      {/* ── HERO ── */}
      <section className="space-y-10">
        {/* CORE SYSTEM header */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// CORE_SYSTEM
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-[10px] text-status-green uppercase tracking-wider tabular-nums">
            ONLINE
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-header text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
            Evren
            <br />
            Ispiroglu
          </h1>

          <div className="space-y-4 max-w-2xl text-muted-foreground text-[15px] leading-relaxed">
            <p>
              Software engineer building distributed systems with Go and Kotlin.
              Specializing in event-driven architecture, high-throughput APIs,
              and maintaining order in complex technical ecosystems. Currently
              deploying solutions across multiple cloud environments at
              Trendyol.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 pt-2">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-[11px] text-foreground hover:border-accent hover:text-accent transition-colors duration-150 active:translate-y-px uppercase tracking-wider"
            >
              <span className="text-accent">&gt;&gt;&gt;</span>
              VIEW PROJECTS
            </a>
            <a
              href="/logs"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-150 active:translate-y-px uppercase tracking-wider"
            >
              <span className="text-accent">&gt;&gt;&gt;</span>
              READ LOGS
            </a>
          </div>
        </div>
      </section>

      {/* ── LATEST ACTIVITY + SYSTEM STATE ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Terminal Feed */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
              /// CAREER_LOG
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <ActivityFeed entries={activityEntries} />
        </div>

        {/* Status Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* System State */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                /// SYSTEM_STATE
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="border border-border bg-card">
              <div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Status
                </span>
                <span className="font-mono text-[11px] text-status-green tabular-nums">
                  OPERATIONAL
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Location
                </span>
                <span className="font-mono text-[11px] text-foreground tabular-nums">
                  ISTANBUL, TR
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 px-4 border-b border-border">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Experience
                </span>
                <span className="font-mono text-[11px] text-foreground tabular-nums">
                  3+ YEARS
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 px-4">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Focus
                </span>
                <span className="font-mono text-[11px] text-foreground tabular-nums">
                  DISTRIBUTED_SYS
                </span>
              </div>
            </div>
          </div>

          {/* Core Stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                /// CORE_STACK
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[9px] text-foreground border border-border px-2 py-0.5 uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                /// LINKS
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="border border-border bg-card">
              <a
                href="https://github.com/ispiroglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2.5 px-4 border-b border-border hover:bg-secondary transition-colors duration-150"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  GITHUB
                </span>
                <span className="font-mono text-[11px] text-accent tabular-nums">
                  &gt;&gt;&gt;
                </span>
              </a>
              <a
                href="https://linkedin.com/in/eispiroglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2.5 px-4 border-b border-border hover:bg-secondary transition-colors duration-150"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  LINKEDIN
                </span>
                <span className="font-mono text-[11px] text-accent tabular-nums">
                  &gt;&gt;&gt;
                </span>
              </a>
              <a
                href="https://x.com/eispirogluu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2.5 px-4 hover:bg-secondary transition-colors duration-150"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  X / TWITTER
                </span>
                <span className="font-mono text-[11px] text-accent tabular-nums">
                  &gt;&gt;&gt;
                </span>
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
