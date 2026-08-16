# Personal Website & Blog

A fast portfolio and blog built with Astro 7 and deployed on Cloudflare Workers.

## Features

- ⚡ **Edge Deployment**: Runs on Cloudflare Workers for global, low-latency delivery
- 📝 **MDX Content**: Posts in `content/writing/`, stack in `content/stack/`, precompiled at build time
- 🎨 **Brutalist UI**: Custom Tailwind CSS v4 design, CSS byte-identical to the previous React Router build
- 📊 **Page Views**: KV-backed view counter for blog posts
- ⚛️ **React Islands**: `@astrojs/react` for the sidebar shell, reading progress, and bookmarks accordion
- 📱 **Responsive**: Sidebar navigation with a mobile layout

## Project Structure

```
ispiroglu.github.io/
├── app/
│   ├── components/
│   │   ├── layout/          # AppShell, Sidebar
│   │   ├── pages/           # Page components (index, about, projects, ...)
│   │   └── ui/              # shadcn/ui components (button, card, progress)
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell + fonts + AppShell island
│   ├── lib/
│   │   ├── mdx.server.ts    # MDX metadata utilities (server-only)
│   │   ├── post-content.tsx # Precompiled post JSX
│   │   ├── posts.generated.ts   # Generated post metadata
│   │   ├── stack.generated.ts   # Generated stack data
│   │   ├── views.server.ts  # KV view counter
│   │   └── sidebar-context.ts   # Sidebar collapse context
│   ├── pages/               # Astro routes (.astro)
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About
│   │   ├── projects.astro   # Projects
│   │   ├── journey.astro    # Timeline
│   │   ├── stack.astro      # Tools/stack
│   │   ├── workspace.astro  # Desk setup
│   │   ├── bookmarks/       # Bookmarks index + categories
│   │   ├── logs/            # Writing list + post detail
│   │   └── 404.astro        # Not found
│   ├── app.css              # Global styles & theme
│   └── env.d.ts             # Astro + Cloudflare type references
├── content/
│   ├── writing/             # MDX blog posts
│   ├── stack/               # Stack tools + skills (MDX)
│   ├── journey/             # (empty — timeline is hardcoded)
│   └── bookmarks/           # (empty — bookmarks are hardcoded)
├── public/                  # Static assets
├── astro.config.mjs         # Astro + Cloudflare adapter + redirects
├── wrangler.jsonc           # Cloudflare configuration
└── scripts/
    ├── generate-posts.js    # content/writing → posts.generated.ts
    └── generate-stack.js    # content/stack → stack.generated.ts
```

## Tech Stack

### Core
- **Astro 7**: Content-focused meta-framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Bun**: Package manager & runtime

### Styling
- **Tailwind CSS v4**: Utility-first CSS
- **shadcn/ui**: Button, card, progress primitives
- **Lucide React**: Icons

### Content
- **MDX**: Markdown with React components
- **gray-matter**: Frontmatter parsing
- **reading-time**: Estimated read time

### Deployment
- **Cloudflare Workers**: Edge compute (`@astrojs/cloudflare`)
- **Cloudflare KV**: Page view storage
- **Wrangler**: Deployment CLI

## Development

### Prerequisites
- [Bun](https://bun.sh/) installed
- Cloudflare account (for deployment)

### Setup

1. Install dependencies:
```bash
bun install
```

2. Run the dev server (`astro dev` is currently broken upstream with the
   Cloudflare adapter — see below), or run the production worker locally:
```bash
bun run dev:worker
```

> **Note on `astro dev`**: `astro dev` fails to start with `@astrojs/cloudflare`
> on current versions — the `@cloudflare/vite-plugin` dev runner crashes with
> `require is not defined` in `workers/runner-worker/index.js` (upstream bug).
> The faithful local test path is `bun run dev:worker`, which builds and serves
> the actual worker with `wrangler dev --local` (KV views emulated locally).

3. Test the production worker locally:
```bash
bun run build
wrangler dev --config dist/server/wrangler.json --port 8787 --local
```

### Commands

- `bun run dev` - Start the Astro dev server (currently broken upstream with the Cloudflare adapter; use `dev:worker`)
- `bun run dev:worker` - Build + serve the worker locally with `wrangler dev` (production-faithful)
- `bun run build` - Generate content + build for production
- `bun run typecheck` - `wrangler types` + `astro check`
- `bun run deploy` - Build + deploy to Cloudflare Workers

## Content Management

### Writing a Post

Create a new `.mdx` file in `content/writing/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2025-01-30"
tags: ["react", "typescript"]
draft: false
---

# Your Post Title

Your content here...
```

Then run `bun run generate-posts` to regenerate `app/lib/posts.generated.ts`.
The post body renders from `app/lib/post-content.tsx` (precompiled JSX — add the rendered content there, matching the existing `conways-law` entry).

### Adding Stack Items

Add an `.mdx` file under `content/stack/tools/` and run `bun run generate-stack`.

## Deployment

`VIEWS_KV` must exist in your Cloudflare account (see `wrangler.jsonc` for the binding and namespace ID).

```bash
bun run deploy
```

Your site will be live at your worker's `*.workers.dev` subdomain.

## Redirects

Defined in `astro.config.mjs`:
- `/home` → 302 → `/` (legacy alias)
- `/writing` → 301 → `/logs`
- `/writing/[slug]` → 301 → `/logs/[slug]`

## Customization

- Personal info and social links: `app/components/layout/sidebar.tsx`
- Bio and intro: `app/components/pages/index-page.tsx`
- Theme colors: `app/app.css` CSS variables (`--color-*`)

## Performance

- Built on Cloudflare's global edge network
- Static assets served from the CDN with immutable caching
- Minimal client JavaScript (React islands hydrate only where needed)

## Author

Evren Ispiroglu
- Website: https://ispiroglu.github.io
- Twitter: [@eispirogluu](https://x.com/eispirogluu)
- GitHub: [@ispiroglu](https://github.com/ispiroglu)
- LinkedIn: [@eispiroglu](https://linkedin.com/in/eispiroglu)
