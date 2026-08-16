# Code Context

## Files Retrieved

1. `wrangler.jsonc` (lines 1-50) — Cloudflare Worker config
2. `react-router.config.ts` (lines 1-8) — React Router build config
3. `app/routes.ts` (lines 1-19) — Route definitions
4. `package.json` (lines 1-49) — Scripts, deps
5. `vite.config.ts` (lines 1-44) — Vite build config
6. `workers/app.ts` (lines 1-23) — Worker entry point
7. `tsconfig.cloudflare.json` (lines 1-28) — TypeScript config
8. `build/server/wrangler.json` (lines 1-1) — Compiled wrangler config

## Key Code

### wrangler.jsonc — Worker config
```jsonc
{
  "name": "ispiroglu",
  "compatibility_date": "2025-04-04",
  "main": "./workers/app.ts",
  "observability": { "enabled": true },
  "kv_namespaces": [{ "binding": "VIEWS_KV", "id": "fe4f30d2bc444ed6b5699a6fdcad7c0d" }]
}
```
- **No route, no zones, no workers_dev** fields set
- Built wrangler.json (auto-generated) adds `"assets": { "directory": "../client" }` — static assets served from `build/client`
- Worker name: `ispiroglu`

### react-router.config.ts — Build config
```ts
export default {
  ssr: true,
  future: { v8_viteEnvironmentApi: true },
} satisfies Config;
```
- SSR enabled, no custom base path set

### app/routes.ts — Route structure
```
/                  → routes/_index.tsx
/home              → routes/home.tsx
/about             → routes/about.tsx
/projects          → routes/projects.tsx
/journey           → routes/journey.tsx
/stack             → routes/stack.tsx
/workspace         → routes/workspace.tsx
/bookmarks         → routes/bookmarks._index.tsx
/bookmarks/:category → routes/bookmarks.$category.tsx
/logs              → routes/logs._index.tsx
/logs/:slug        → routes/logs.$slug.tsx
/writing           → routes/writing._index.tsx      (DEPRECATED)
/writing/:slug     → routes/writing.$slug.tsx       (DEPRECATED)
```

### package.json — Scripts
| Script | Command |
|--------|---------|
| `build` | `node scripts/generate-posts.js && node scripts/generate-stack.js && react-router build` |
| `deploy` | `bun run build && wrangler deploy` |
| `dev` | `react-router dev` |
| `preview` | `bun run build && vite preview` |
| `typecheck` | `npm run cf-typegen && react-router typegen && tsc -b` |
| `cf-typegen` | `wrangler types` |

### vite.config.ts — Vite plugins
```
cloudflare({ viteEnvironment: { name: "ssr" } })
tailwindcss()
mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrettyCode] })
reactRouter()
tsconfigPaths()
```

## Architecture

```
User request → Cloudflare Workers edge → workers/app.ts (fetch handler)
  → createRequestHandler from react-router
    → SSR renders React Router app (SSR enabled)
      → serves static assets from build/client/
```

- **Custom domain**: Not configured in wrangler.jsonc. Defaults to `ispiroglu.<your-subdomain>.workers.dev` (workers.dev subdomain)
- **No CI/CD**: No `.github/workflows/` directory or other deploy config files found
- **Build output**: `build/client/` (static assets) + `build/server/` (worker code)
- **KV namespace**: `VIEWS_KV` bound for view counting

## Start Here

`wrangler.jsonc` — Add `routes`, `workers_dev`, or `zones` here to configure custom domain. Currently missing, so deploy uses auto-generated workers.dev subdomain.

## Key Observations

- **No custom domain configured** — wrangler.jsonc lacks `routes`, `zones`, and `workers_dev` fields
- **Default deployment domain**: `ispiroglu.<your-account-subdomain>.workers.dev` (Cloudflare assigns)
- **No CI/GitHub Actions** — manual deploy via `bun run deploy`
- **Build output dir**: `build/client` (static) + `build/server` (worker)
- **SSR**: enabled, no base path override
- **No route pattern** in wrangler — worker handles all requests (catch-all)
- **Deploy command**: `bun run build && wrangler deploy`
