// Auto-generated file - do not edit manually
export type StackStatus = "stable" | "experimental" | "migrating";

export interface StackItem {
  name: string;
  description: string;
  status: StackStatus;
}

export interface StackSection {
  label: string;
  category: string;
  items: StackItem[];
}

export const generatedSections: StackSection[] = [
  {
    "category": "Languages",
    "items": [
      {
        "name": "Go",
        "description": "Primary backend language. Service mesh, frameworks, CLI tooling. Foundation of Chaki and Mercurius.",
        "status": "stable"
      },
      {
        "name": "Kotlin",
        "description": "JVM ecosystem. Spring Boot microservices. Multi-tenant auth APIs. High-throughput event processing.",
        "status": "stable"
      },
      {
        "name": "Java",
        "description": "Spring Boot enterprise services. Legacy migration targets. Battle-tested JVM reliability.",
        "status": "stable"
      }
    ],
    "label": "/// 01_LANGUAGES"
  },
  {
    "category": "Frameworks",
    "items": [
      {
        "name": "Spring Boot",
        "description": "Primary JVM microservice framework. Auto-configuration, actuator health checks, embedded servers.",
        "status": "stable"
      },
      {
        "name": "Uber FX",
        "description": "Go dependency injection framework. Foundation of Chaki — auto-configuration, lifecycle hooks, modular wiring.",
        "status": "stable"
      },
      {
        "name": "React",
        "description": "Frontend library for back-office tools, portfolio site, and internal dashboards. SSR with React Router.",
        "status": "stable"
      },
      {
        "name": "gRPC",
        "description": "Service-to-service communication. Bidirectional streaming in Mercurius. Low-latency binary protocol.",
        "status": "stable"
      }
    ],
    "label": "/// 02_FRAMEWORKS"
  },
  {
    "category": "Messaging",
    "items": [
      {
        "name": "Apache Kafka",
        "description": "Event-driven backbone. High-throughput streaming. CDC source and event sourcing at 1.2M+ RPM.",
        "status": "stable"
      },
      {
        "name": "gRPC Streaming",
        "description": "Bidirectional pub-sub messaging in Mercurius. Low-latency alternative for internal service events.",
        "status": "experimental"
      }
    ],
    "label": "/// 03_MESSAGING"
  },
  {
    "category": "Databases",
    "items": [
      {
        "name": "PostgreSQL",
        "description": "Primary relational database. CDC source with logical replication. Transactional consistency.",
        "status": "stable"
      },
      {
        "name": "Elasticsearch",
        "description": "Full-text search and analytics engine. Log aggregation. Q&A domain optimized queries.",
        "status": "stable"
      },
      {
        "name": "Couchbase",
        "description": "Distributed NoSQL document database. Low-latency key-value workloads. Multi-cluster deployment.",
        "status": "stable"
      },
      {
        "name": "MongoDB",
        "description": "Document database for specific services. Migrating workloads to PostgreSQL and Couchbase.",
        "status": "migrating"
      }
    ],
    "label": "/// 04_DATABASES"
  },
  {
    "category": "DevOps",
    "items": [
      {
        "name": "Docker",
        "description": "Containerization for all services. Multi-stage builds. Consistent dev-to-prod environments.",
        "status": "stable"
      },
      {
        "name": "Kubernetes",
        "description": "Production container orchestration. Horizontal scaling, rolling updates, service discovery.",
        "status": "stable"
      },
      {
        "name": "GitHub Actions",
        "description": "CI/CD pipeline automation. Testing, building, deploying with matrix builds and caching.",
        "status": "stable"
      },
      {
        "name": "Jenkins",
        "description": "Legacy CI/CD server. Migrating pipelines to GitHub Actions for faster feedback loops.",
        "status": "migrating"
      },
      {
        "name": "Cloudflare",
        "description": "CDN, DNS, Workers edge compute. Portfolio site deployment and content delivery.",
        "status": "stable"
      }
    ],
    "label": "/// 05_DEVOPS"
  },
  {
    "category": "Observability",
    "items": [
      {
        "name": "Grafana",
        "description": "Metrics visualization and dashboards. System health monitoring. Campaign traffic observability.",
        "status": "stable"
      },
      {
        "name": "Prometheus",
        "description": "Metrics collection and alerting. Time-series database. Infrastructure and application metrics.",
        "status": "stable"
      },
      {
        "name": "OpenTelemetry",
        "description": "Distributed tracing specification. Integrated into Chaki framework. Cross-service request tracing.",
        "status": "stable"
      }
    ],
    "label": "/// 06_OBSERVABILITY"
  },
  {
    "category": "Patterns",
    "items": [
      {
        "name": "CQRS",
        "description": "Command Query Responsibility Segregation. Separate read/write models for optimized query performance.",
        "status": "stable"
      },
      {
        "name": "CDC",
        "description": "Change Data Capture async data flows. PostgreSQL logical replication to Kafka for downstream consumers.",
        "status": "stable"
      },
      {
        "name": "Event-Driven Architecture",
        "description": "Kafka event sourcing backbone. Asynchronous service communication. Campaign-scale throughput.",
        "status": "stable"
      },
      {
        "name": "Microservices",
        "description": "Distributed decomposition of monoliths. Independent deployability. Multi-tenant architectures.",
        "status": "stable"
      }
    ],
    "label": "/// 07_PATTERNS"
  }
];

export const generatedTools = [
  {
    "name": "Docker Desktop 🐳",
    "url": "https://www.docker.com/products/docker-desktop/",
    "category": "Development Tools",
    "description": "Essential for containerized development and testing microservices locally."
  },
  {
    "name": "Ghostty 🖥️",
    "url": "https://ghostty.org/",
    "category": "Development Tools",
    "description": "Ghostty is a fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration."
  },
  {
    "name": "k9s 🎮",
    "url": "https://k9scli.io/",
    "category": "Development Tools",
    "description": "Terminal UI for Kubernetes. Makes managing on-prem clusters much easier."
  },
  {
    "name": "Postman 📮",
    "url": "https://www.postman.com/",
    "category": "Development Tools",
    "description": "API testing and development. Great for testing gRPC endpoints and REST APIs."
  },
  {
    "name": "Raycast 👀",
    "url": "https://raycast.com/",
    "category": "Productivity",
    "description": "It's like macOS Spotlight on steroids. Essential productivity tool."
  }
];
