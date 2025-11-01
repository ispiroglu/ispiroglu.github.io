import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { getAllPosts } from "~/lib/mdx.server";

export async function loader() {
  const posts = await getAllPosts();
  return { posts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evren Ispiroglu - Backend Engineer" },
    { name: "description", content: "Personal website and blog of Evren Ispiroglu, a backend engineer specializing in event-driven systems and distributed architecture." },
  ];
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div className="space-y-16">
      {/* About Section */}
      <section>
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I build event-driven backends and APIs with a focus on reliability, consistency, and performance. I like clean interfaces, strong observability, and simple designs that scale.
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Mid-level backend developer with 3+ years of professional experience in distributed systems and high-load microservices. Primary stack: Go (Golang) and Kotlin/Java (JVM). I design event-driven services with Kafka, gRPC, CQRS, and CDC; apply idempotency, backpressure/circuit breaking, and robust observability (Grafana, OpenTelemetry). I operate mainly on on-prem Kubernetes with CI/CD; data stores include PostgreSQL, ElasticSearch, and Couchbase. Motivated by high-load systems and impactful engineering; open to remote/hybrid and relocation.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">
              Trendyol — Mid-level Software Engineer (promoted from Associate)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Nov 2023 — Present • Istanbul, Türkiye</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Architected multi-AZ, event-driven microservices with CQRS + CDC, sustaining ~1.4M req/min at ~100ms latency under complex ElasticSearch-backed queries.</li>
              <li>Developed an integrated Q&A architecture with an event-driven translation pipeline, processing ~300k questions into 5+ languages and enhancing global support.</li>
              <li>Built a RAG-based application to proactively address seller queries, achieving up to 3x increase in conversion rates.</li>
              <li>Co-initiated Chaki (open-source Golang framework) by implementing auto-configuration and observability modules, reducing boilerplate and streamlining microservice development.</li>
              <li>Owned technical design reviews, code review, and on-call incident response; set OKRs/scorecards and drove data-driven decisions via PoCs.</li>
            </ul>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">
              Doğuş Technology — Software Engineer (promoted from Trainee to Junior)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Sep 2022 — Nov 2023 • Istanbul, Türkiye</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Designed and delivered a multi-tenant authentication API (Kotlin, Spring Boot) with token-based security, enabling centralized access control across tenants and improving scalability.</li>
              <li>Led metrics-driven PoCs for messaging, storage, and orchestration on an on-prem platform, informing core distributed system architecture choices.</li>
              <li>Implemented Kafka consumer backpressure and service-level circuit breaking, preventing overload and containing cascading failures during traffic spikes.</li>
              <li>Diagnosed production bottlenecks to improve median response time by ~20%, and established observability with Grafana + OpenTelemetry to reduce MTTR.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            <strong>Yildiz Technical University</strong> — BSc in Computer Engineering (2020–2024), GPA 3.39 • Istanbul, Türkiye
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Relevant coursework: Distributed Systems, Advanced Operating Systems, Databases, Software Architecture
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Chaki</strong> — Co-initiated an open-source Golang framework built to reduce boilerplate.{" "}
              <a href="https://github.com/Trendyol/chaki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub: https://github.com/Trendyol/chaki
              </a>
            </li>
            <li>
              <strong>Mercurius</strong> — Built a high-throughput message broker in Go with gRPC.{" "}
              <a href="https://github.com/ispiroglu/mercurius" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub: https://github.com/ispiroglu/mercurius
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Go (Golang), Kotlin, Java (JVM), Spring Boot, JavaScript, TypeScript, Kafka, gRPC, CDC, CQRS, Event-driven systems, PostgreSQL, ElasticSearch, Couchbase, Docker, Kubernetes (on-prem), Jenkins, GitHub Actions, GitLab, Grafana, OpenTelemetry, Logging, Tracing, React, Angular
          </p>
        </div>
      </section>

      {/* Elegant separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border/40"></div>
        </div>
      </div>

      {/* Writing Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Writing</h2>
        <Card>
          <CardHeader>
            <CardTitle>Latest Posts</CardTitle>
            <CardDescription>Recent articles and thoughts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.slice(0, 10).map((post) => {
                const date = new Date(post.date);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");

                return (
                  <Link
                    key={post.slug}
                    to={`/writing/${post.slug}`}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-accent/50 transition-colors rounded px-2 -mx-2"
                  >
                    <div className="flex gap-8">
                      <span className="text-sm text-muted-foreground w-12">{year}</span>
                      <span className="text-sm text-muted-foreground w-16">{`${month}/${day}`}</span>
                      <span className="text-sm font-medium">{post.title}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">-</span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}



