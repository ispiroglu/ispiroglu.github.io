export function AboutPage() {
  const experience = [
    {
      date: "2025.01 — PRESENT",
      role: "SOFTWARE ENGINEER II",
      company: "Trendyol",
      description:
        "Optimized RAG-based applications and embraced new responsibilities following a promotion. Focused on process efficiency, time management, and innovative solutions in the Q&A domain.",
    },
    {
      date: "2023.11 — 2024.12",
      role: "SOFTWARE ENGINEER I",
      company: "Trendyol",
      description:
        "Designed async data flows using CDC and message queues. Applied CQRS with multi-data-cluster strategies, handling 1.2M RPM during campaigns. Implemented SSE to replace polling. Contributed to Chaki open-source framework. Developed RAG app increasing conversion rates by 3x.",
    },
    {
      date: "2023.09 — 2023.11",
      role: "Junior Software Engineer",
      company: "Dogus Technology",
      description:
        "Designed multi-tenant microservices architecture. Led PoC evaluations. Built authentication API with Kotlin and Spring Boot. Developed back-office core with React and TypeScript. Resolved critical production issues improving responsiveness by 20%.",
    },
    {
      date: "2022.09 — 2023.09",
      role: "Software Engineer Trainee",
      company: "Dogus Technology",
      description:
        "Migrated legacy applications to microservices. Built solutions with Kotlin, Spring, PostgreSQL, MongoDB, Kafka, and Elasticsearch. Worked with Jenkins, Kubernetes, and React for dynamic UIs.",
    },
    {
      date: "2022.07 — 2022.08",
      role: "Fullstack Engineer Intern",
      company: "LC Waikiki",
      description:
        "Developed full-stack application with Spring Boot and Angular. Used Git, Docker, and GitHub Actions for CI/CD. Participated in Agile Scrum practices.",
    },
  ];

  const education = [
    {
      date: "2020 — 2024",
      school: "Yildiz Technical University",
      degree: "B.Sc. Computer Engineering",
      location: "Istanbul, Türkiye",
    },
  ];

  return (
    <div className="space-y-20 max-w-5xl">
      {/* ── BIO + CONTACT (side by side) ── */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// BIO
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Bio text — left 8 cols */}
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-header text-3xl lg:text-4xl leading-tight">
              Building distributed systems with precision and pragmatic
              simplicity.
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                Results-oriented software engineer specializing in distributed
                systems and microservices. Proficient in Go, Java, and Kotlin on
                the JVM, with a proven track record of optimizing system
                performance and delivering high-impact solutions.
              </p>
              <p>
                I design event-driven architectures with Kafka, gRPC, and CDC
                pipelines — stripping away complexity to reveal systems that are
                observable, consistent, and built to handle production traffic
                at scale.
              </p>
              <p>
                Active open-source contributor to the Chaki application
                framework and creator of Mercurius, a gRPC-based message broker.
                Outside engineering, I served as a board member of the
                university photography club, organizing exhibitions and training
                programs.
              </p>
            </div>
          </div>

          {/* Contact card — right 4 cols */}
          <div className="md:col-span-4">
            <div className="border border-border bg-card p-5 space-y-3 sticky top-8">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                  /// CONTACT
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  LOC
                </span>
                <span className="font-mono text-[11px] text-foreground">
                  ISTANBUL, TR
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  MAIL
                </span>
                <a
                  href="mailto:evrenn.ispiroglu@gmail.com"
                  className="font-mono text-[11px] text-foreground hover:text-accent transition-colors duration-150"
                >
                  EVRENN.ISPIROGLU@GMAIL.COM
                </a>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  PGP
                </span>
                <span className="font-mono text-[11px] text-foreground tabular-nums">
                  0x8F9B2C1A
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// EXPERIENCE
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="border border-border">
          {experience.map((item) => (
            <div
              key={`${item.date}-${item.role}`}
              className="py-5 px-4 hover:bg-secondary transition-colors duration-150 border-b border-border last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 mb-2">
                <div className="md:col-span-4 flex items-start md:items-center">
                  <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                    {item.date}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-header text-lg">{item.role}</h3>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    {item.company}
                  </p>
                </div>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed ml-0 md:ml-[calc(33.333%+1rem)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// EDUCATION
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="border border-border">
          {education.map((item) => (
            <div
              key={item.school}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-5 px-4 hover:bg-secondary transition-colors duration-150"
            >
              <div className="md:col-span-4 flex items-start md:items-center">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  {item.date}
                </span>
              </div>
              <div className="md:col-span-8 space-y-1">
                <h3 className="font-header text-lg">{item.degree}</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  {item.school} — {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN SOURCE ── */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// OPEN SOURCE
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="border border-border">
          <div className="py-5 px-4 hover:bg-secondary transition-colors duration-150 border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 mb-2">
              <div className="md:col-span-4 flex items-start md:items-center">
                <span className="font-mono text-[11px] text-muted-foreground">
                  CHAKI
                </span>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-header text-lg">Application Framework</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Go / Uber FX / OpenTelemetry
                </p>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed ml-0 md:ml-[calc(33.333%+1rem)]">
              Second most active contributor. Built auto-configuration system on
              Uber FX with file-based configurability, OpenTelemetry tracing,
              and Swagger integration — eliminating boilerplate for critical
              cross-cutting concerns.
            </p>
          </div>
          <div className="py-5 px-4 hover:bg-secondary transition-colors duration-150">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 mb-2">
              <div className="md:col-span-4 flex items-start md:items-center">
                <span className="font-mono text-[11px] text-muted-foreground">
                  MERCURIUS
                </span>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-header text-lg">Message Broker</h3>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  Go / gRPC / Pub-Sub
                </p>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed ml-0 md:ml-[calc(33.333%+1rem)]">
              Lightweight gRPC-based message broker for distributed system
              communication. Engineered with leveled logging, bidirectional
              streaming, and low-latency pub-sub — reinforcing skills in Go
              systems programming and distributed message propagation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
