# Personal Website & Blog

A modern, fast portfolio and blog built with React Router 7 and deployed on Cloudflare Workers.

## Features

- ✨ **Modern Stack**: React Router 7, TypeScript, Tailwind CSS v4
- ⚡ **Edge Deployment**: Runs on Cloudflare Workers for global, low-latency delivery
- 📝 **MDX Blog**: Write posts in Markdown with React components
- 🎨 **Beautiful UI**: shadcn/ui components with dark/light theme support
- 📊 **Page Views**: KV-backed view counter for blog posts
- 🔍 **Fast Search**: Client-side search with MiniSearch
- 📱 **Responsive**: Mobile-first design with sidebar navigation
- ♿ **Accessible**: WCAG AA compliant with proper semantic HTML

## Project Structure

```
my-react-router-app/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (Sidebar, etc.)
│   │   └── ui/              # shadcn/ui components
│   ├── lib/
│   │   ├── mdx.server.ts    # MDX utilities (server-only)
│   │   └── utils.ts         # Utility functions
│   ├── routes/              # React Router file-based routes
│   │   ├── _index.tsx       # Home page
│   │   ├── writing._index.tsx      # Writing list
│   │   ├── writing.$slug.tsx       # Post detail
│   │   ├── journey.tsx             # Timeline
│   │   ├── stack.tsx               # Tools/stack
│   │   ├── workspace.tsx           # Desk setup
│   │   └── bookmarks.*.tsx         # Bookmarks pages
│   ├── app.css              # Global styles & theme
│   └── root.tsx             # App root component
├── content/
│   ├── writing/             # MDX blog posts
│   ├── journey/             # Timeline entries (JSON)
│   └── bookmarks/           # Bookmark collections (JSON)
├── workers/
│   └── app.ts               # Cloudflare Worker entry
├── public/                  # Static assets
├── wrangler.jsonc           # Cloudflare configuration
└── vite.config.ts           # Vite + MDX configuration
```

## Tech Stack

### Core
- **React Router 7**: Full-stack React framework
- **TypeScript**: Type safety
- **Vite**: Fast build tool
- **Bun**: Package manager & runtime

### Styling
- **Tailwind CSS v4**: Utility-first CSS
- **shadcn/ui**: Accessible component library
- **Lucide React**: Beautiful icons

### Content
- **MDX**: Markdown with React components
- **gray-matter**: Frontmatter parsing
- **remark-gfm**: GitHub Flavored Markdown
- **rehype-pretty-code**: Syntax highlighting with Shiki

### Deployment
- **Cloudflare Workers**: Edge compute
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

2. Run the development server:
```bash
bun run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run typecheck` - Run TypeScript checks
- `bun run deploy` - Deploy to Cloudflare Workers

## Content Management

### Writing a Blog Post

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

### Adding a Journey Entry

Edit the appropriate year in `content/journey/` or add entries directly in `app/routes/journey.tsx`.

### Adding Bookmarks

Add bookmark data to JSON files in `content/bookmarks/` organized by category.

## Deployment

### First-time Setup

1. Create a Cloudflare KV namespace for page views:
```bash
npx wrangler kv:namespace create PAGEVIEWS
```

2. Update `wrangler.jsonc` with your KV namespace ID:
```jsonc
{
  "kv_namespaces": [
    {
      "binding": "PAGEVIEWS",
      "id": "your-kv-id-here"
    }
  ]
}
```

3. Deploy:
```bash
bun run deploy
```

### Subsequent Deployments

Just run:
```bash
bun run deploy
```

Your site will be live at `https://my-react-router-app.YOUR_SUBDOMAIN.workers.dev`

## Customization

### Update Personal Info

1. Edit `app/components/layout/sidebar.tsx` - Update name, title, and social links
2. Edit `app/routes/_index.tsx` - Update bio and intro
3. Replace sample content in `content/writing/` with your posts

### Theme Colors

Theme colors are defined in `app/app.css` using CSS variables. Adjust the `--color-*` variables to customize the theme.

### Adding New Routes

Add new route files to `app/routes/` and register them in `app/routes.ts`.

## Performance

- Built on Cloudflare's global edge network
- Zero cold starts
- Static assets served from CDN
- Minimal JavaScript bundle
- Optimized fonts and images

## License

MIT

## Author

Evren Ispiroglu
- Website: https://ispiroglu.github.io
- Twitter: [@eispirogluu](https://x.com/eispirogluu)
- GitHub: [@ispiroglu](https://github.com/ispiroglu)
- LinkedIn: [@eispiroglu](https://linkedin.com/in/eispiroglu)
