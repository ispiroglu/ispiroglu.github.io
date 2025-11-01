import type { Route } from "./+types/journey";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Journey - Evren Ispiroglu" },
    { name: "description", content: "My personal and professional journey timeline." },
  ];
}

export default function Journey() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold mb-2">Journey</h1>
        <p className="text-lg text-muted-foreground">
          A timeline of my personal and professional milestones
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 sticky top-0 bg-background py-2">2024</h2>
          <div className="space-y-6">
            <article className="border-l-2 border-border pl-4">
              <time className="text-sm text-muted-foreground">June</time>
              <h3 className="font-semibold mt-1">Graduated from Yildiz Technical University</h3>
              <p className="text-muted-foreground mt-2">
                Completed BSc in Computer Engineering with GPA 3.39. Focused on Distributed Systems, Advanced Operating Systems, Databases, and Software Architecture.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 sticky top-0 bg-background py-2">2023</h2>
          <div className="space-y-6">
            <article className="border-l-2 border-border pl-4">
              <time className="text-sm text-muted-foreground">November</time>
              <h3 className="font-semibold mt-1">Started at Trendyol as Mid-level Software Engineer</h3>
              <p className="text-muted-foreground mt-2">
                Promoted and joined Trendyol to work on high-scale event-driven microservices. Architected systems handling ~1.4M req/min with CQRS + CDC patterns.
              </p>
            </article>
            <article className="border-l-2 border-border pl-4">
              <time className="text-sm text-muted-foreground">2023</time>
              <h3 className="font-semibold mt-1">Co-initiated Chaki Framework</h3>
              <p className="text-muted-foreground mt-2">
                Started contributing to Chaki, an open-source Golang framework designed to reduce boilerplate in microservice development. Implemented auto-configuration and observability modules.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 sticky top-0 bg-background py-2">2022</h2>
          <div className="space-y-6">
            <article className="border-l-2 border-border pl-4">
              <time className="text-sm text-muted-foreground">September</time>
              <h3 className="font-semibold mt-1">Joined Doğuş Technology</h3>
              <p className="text-muted-foreground mt-2">
                Started as Trainee Software Engineer, later promoted to Junior. Worked on multi-tenant authentication APIs, Kafka integrations, and distributed system architectures.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 sticky top-0 bg-background py-2">2020</h2>
          <div className="space-y-6">
            <article className="border-l-2 border-border pl-4">
              <time className="text-sm text-muted-foreground">2020</time>
              <h3 className="font-semibold mt-1">Started Computer Engineering at Yildiz Technical University</h3>
              <p className="text-muted-foreground mt-2">
                Began my journey in computer engineering, focusing on distributed systems and backend development.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}



