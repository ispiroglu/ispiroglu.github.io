import type { Route } from "./+types/about";
import { Download } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

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

      {/* CV Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">CV</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-end">
              <a 
              href="/assets/cv.pdf" 
              download
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full border border-border rounded-md overflow-hidden">
              <object
              data="/assets/cv.pdf"
              type="application/pdf"
              className="w-full h-[600px] min-h-[600px]"
              title="CV PDF Viewer"
              aria-label="Curriculum Vitae PDF"
              >
                <div className="p-8 text-center space-y-4">
                  <p className="text-muted-foreground">
                    Your browser doesn't support PDF preview.
                  </p>
                  <a 
                  href="/assets/cv.pdf" 
                  download
                  className={cn(buttonVariants({ variant: "default" }))}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </object>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

