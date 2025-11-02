import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Evren Ispiroglu" },
    { name: "description", content: "About Evren Ispiroglu, a backend engineer specializing in event-driven systems and distributed architecture." },
  ];
}

export default function About() {
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


    </div>
  );
}

