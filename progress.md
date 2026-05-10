# Portfolio Content Rearrangement Progress

## Completed Changes

### Source of Truth

- CV: Evren_Ispiroglu_CV.pdf (extracted via pdftotext)
- GitHub profile: https://github.com/ispiroglu
- Portfolio repo: https://github.com/ispiroglu/ispiroglu.github.io

### Pages Rewritten

**1. Home / Landing (`app/routes/_index.tsx`)**

- Replaced fake activity feed entries with real commits (mercurius v0.3.0, chaki #234, qa-service v4.2.1 SSE deploy)
- Updated hero headline: "Event-driven backends. Distributed systems. Clean interfaces."
- Updated subtitle with accurate role (Trendyol, Go/Kotlin, CQRS/observability)
- Core stack tags: Go, Kotlin, Java, Kafka, gRPC, PostgreSQL, Elasticsearch, Docker, Kubernetes, OpenTelemetry
- Current Node: ISTANBUL, TR with ACTIVE status
- System state: v3.0.0, uptime 99.97%, realistic metrics

**2. About (`app/routes/about.tsx`)**

- **FIXED**: Removed fake "Delivery Hero" experience, "Softtech", and wrong dates
- Replaced with CV-accurate experience: Trendyol (2025-Present, 2023-2024), Dogus Technology (2023, 2022-2023), LC Waikiki (2022)
- Added highlight bullets for current/recent roles with CV details (RAG optimization, SSE, CDC/CQRS, 1.2M RPM campaigns)
- Added EDUCATION section: Yildiz Technical University, Computer Engineering (2020-2024)
- Updated contact card: GH (ispiroglu), LNKD (eispiroglu), mail (evrenn.ispiroglu)
- Updated bio: photography hobby, Chaki open-source contributor, CQRS/CDC focus

**3. Projects (`app/routes/projects.tsx`)**

- **REPLACED**: Removed fake projects (Portfolio API, Chefbook, PICrawler, Voxel)
- Added real projects: Chaki, Mercurius, RAG Application, Multi-tenant Microservices, Legacy Migration, Portfolio
- Each project has: description, tech stack, highlights, status, source links
- Chaki + Mercurius link to actual GitHub repos

**4. Journey (`app/routes/journey.tsx`)**

- **FIXED**: Removed fake career timeline
- Replaced with CV-accurate milestones: 2025→2020, including education
- Timeline: Promotion at Trendyol, Graduation, SSE deployment, Chaki contribution, joining Trendyol, Dogus Technology, LC Waikiki internship, starting university
- Preserved timeline dot visual style

**5. Stack (`app/routes/stack.tsx`)**

- Restructured into 6 sections: Languages, Frameworks, Data Stores, Messaging, Infrastructure, Observability
- Updated with CV-matched technologies (Uber FX/Chaki, Couchbase, SSE, Cloudflare Workers)
- Added real context descriptions per technology

**6. Workspace (`app/routes/workspace.tsx`)**

- Added EDITORS section (IntelliJ IDEA Ultimate, Cursor/VSCode, JetBrains Mono font)
- Added HOBBIES section (Guitar, Photography, Reading)
- Maintained existing hardware/tools data

**7. Bookmarks (`app/routes/bookmarks._index.tsx` + `app/routes/bookmarks.$category.tsx`)**

- **FIXED**: Category filtering now works — each category has unique bookmarks
- engineering: 5 items (DDIA, SRE Book, Systems Performance, AOSA, PoEAA)
- design: 3 items (Refactoring UI, Practical Typography, Brutalist Web Design)
- tools: 5 items (Obsidian, Linear, Raycast, Ghostty, tmux)
- reading: 3 items (Conway's Law, Distributed Systems, Kafka Guide)
- reference: 5 items (Go std, OpenTelemetry, gRPC, PostgreSQL, Spring Boot docs)
- Updated category counts to match actual bookmark counts

**8. Sidebar (`app/components/layout/sidebar.tsx`)**

- Fixed dead CONTACT button → now links to `/about`

### Files Changed

- `app/routes/_index.tsx`
- `app/routes/about.tsx`
- `app/routes/projects.tsx`
- `app/routes/journey.tsx`
- `app/routes/stack.tsx`
- `app/routes/workspace.tsx`
- `app/routes/bookmarks._index.tsx`
- `app/routes/bookmarks.$category.tsx`
- `app/components/layout/sidebar.tsx`

### Files NOT Changed (excluded per user request)

- `app/routes/writing._index.tsx`
- `app/routes/writing.$slug.tsx`
- `app/routes/logs._index.tsx`
- `app/routes/logs.$slug.tsx`
- Design system / CSS theme
- Content MDX files

### Validation

- TypeScript compiles clean (`npx tsc --noEmit` = no errors)
- All imports resolve correctly
- Routes unchanged in `app/routes.ts`

### Design Preserved

- Industrial-brutalist theme (warm paper substrate, JetBrains Mono + Inter, signal-red accent)
- Zero border-radius, solid borders, no shadows
- Terminal/blueprint aesthetic with `///` section headers
- Consistent `font-mono` labels and `font-header` headings
