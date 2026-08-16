# Commands
- **Build**: `bun run build` (generate-posts → generate-stack → `astro build`)
- **Dev**: `astro dev` (broken upstream with the CF adapter — `require is not defined` in @cloudflare/vite-plugin's runner-worker); use `bun run dev:worker` instead
- **Local worker test**: `bun run dev:worker` (build + `wrangler dev --config dist/server/wrangler.json --port 8787 --local`)
- **Deploy**: `bun run build && wrangler deploy`
- **Type check**: `bun run typecheck` (`wrangler types && astro check`)
- **Generate posts**: `bun run generate-posts`
- **Generate stack**: `bun run generate-stack`

# Architecture
- Astro 7 SSR app on Cloudflare Workers (`@astrojs/cloudflare` adapter, `output: "server"`)
- Pages: Astro routes in `app/pages/` (`.astro`), shell in `app/layouts/BaseLayout.astro`
- React islands via `@astrojs/react`: `AppShell` (sidebar + context), `LogDetailPage` (reading progress), `BookmarksCategoryPage` (accordion) — all `client:load`
- MDX content system: posts in `content/writing/`, stack in `content/stack/`, auto-generated to `app/lib/posts.generated.ts` and `app/lib/stack.generated.ts`; post bodies are precompiled JSX in `app/lib/post-content.tsx`
- Views counter: KV `VIEWS_KV`, key `writing/<slug>` (matches the old react-router build)
- Redirects in `astro.config.mjs`: `/home` 302 → `/`, `/writing` 301 → `/logs`, `/writing/[slug]` 301 → `/logs/[slug]`
- Tailwind CSS v4 via `@tailwindcss/vite`; CSS output is pinned byte-identical to the old vite 7 build (`cssMinify: "esbuild"`, vite 7 `cssTarget`, `legalComments: "inline"`)
- Font tokens in `app/app.css` (`:root` + `@theme inline`): `--font-sans`/`--font-serif` = Inter (UI), `--font-mono` = JetBrains Mono (headers/code), `--font-reading` = Spline Sans Mono (long-form prose only — scoped via `font-reading` on the `/logs` article container)

# Code Style
- TypeScript strict mode, verbatim module syntax
- Import aliases: `~` for app directory
- Tailwind classes with CSS variables
- File naming: kebab-case for Astro routes, camelCase for components
