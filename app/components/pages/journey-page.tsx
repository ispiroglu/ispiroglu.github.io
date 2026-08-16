export function JourneyPage() {
  const events = [
    {
      year: 2025,
      date: "2025.01",
      event: "Promoted to Software Engineer at Trendyol",
      description:
        "Took on expanded responsibilities in the Q&A domain. Optimized RAG-based applications for process efficiency. Focused on innovative solutions and performance improvements.",
    },
    {
      year: 2024,
      date: "2024.06",
      event: "Graduated from Yildiz Technical University",
      description:
        "Completed B.Sc. in Computer Engineering. Four years of systems programming, distributed computing, and algorithms.",
    },
    {
      year: 2024,
      date: "2024.01",
      event: "Built RAG application increasing conversion 3x at Trendyol",
      description:
        "Developed retrieval-augmented generation application for the Q&A platform. Resulted in significant conversion rate improvements and became a key product feature.",
    },
    {
      year: 2023,
      date: "2023.11",
      event: "Started a new position, Software Engineer I at Trendyol",
      description:
        "Designed async CDC data flows with Kafka. Applied CQRS with multi-cluster strategies handling 1.2M RPM during campaigns. Replaced polling with SSE, reducing server load significantly.",
    },
    {
      year: 2023,
      date: "2023.09",
      event: "Junior Software Engineer at Dogus Technology",
      description:
        "Designed multi-tenant microservices from scratch. Led PoC evaluations. Built authentication API with Kotlin and Spring Boot. Resolved critical production issues improving responsiveness by 20%.",
    },
    {
      year: 2022,
      date: "2022.09",
      event: "Software Engineer Trainee at Dogus Technology",
      description:
        "Migrated legacy monoliths to microservices architecture. Worked with Kotlin, Spring, PostgreSQL, MongoDB, Kafka, Elasticsearch, Jenkins, and Kubernetes. First year of professional systems engineering.",
    },
    {
      year: 2022,
      date: "2022.07",
      event: "Fullstack Engineer Intern at LC Waikiki",
      description:
        "Developed full-stack application with Spring Boot and Angular. First exposure to CI/CD with Git, Docker, and GitHub Actions. Participated in Agile Scrum practices.",
    },
    {
      year: 2020,
      date: "2020.10",
      event: "Started Computer Engineering at Yildiz Technical University",
      description:
        "Began studies in computer engineering in Istanbul, Türkiye. Foundation in algorithms, distributed systems, and software architecture.",
    },
  ];

  const grouped = new Map<number, typeof events>();
  for (const e of events) {
    if (!grouped.has(e.year)) grouped.set(e.year, []);
    grouped.get(e.year)!.push(e);
  }

  return (
    <div className="space-y-16 max-w-3xl">
      <header className="space-y-3">
        <h1 className="font-header text-5xl">JOURNEY LOG</h1>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            /// CAREER TRAJECTORY
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </header>

      <div className="space-y-12">
        {[...grouped.entries()].map(([year, yearEvents]) => (
          <section key={year} className="relative">
            <div className="flex items-center gap-6 mb-6">
              <span className="font-mono font-bold text-4xl text-foreground tabular-nums">
                {year}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-6 pl-0 md:pl-6">
              {yearEvents.map((ev) => (
                <div
                  key={ev.date}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 group"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                      {ev.date}
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-2 pb-6 border-b border-border">
                    <h3 className="font-header text-base text-foreground">
                      {ev.event}
                    </h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
