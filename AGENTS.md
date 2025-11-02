# Commands
- **Build**: `bun run generate-posts && bun run generate-stack && react-router build`
- **Dev**: `react-router dev`
- **Deploy**: `bun run build && wrangler deploy`
- **Type check**: `bun run cf-typegen && react-router typegen && tsc -b`
- **Generate posts**: `bun run generate-posts`
- **Generate stack**: `bun run generate-stack`

# Architecture
- React Router v7 SSR app with Cloudflare Workers
- MDX content system: posts in `content/writing/`, stack in `content/stack/`, auto-generated to `app/lib/posts.generated.ts` and `app/lib/stack.generated.ts`
- Shadcn/ui components with Tailwind CSS
- Routes defined in `app/routes.ts`

# Code Style
- TypeScript strict mode, verbatim module syntax
- Import aliases: `~` for app directory
- Shadcn/ui components in `~/components/ui/`
- React Router loaders/meta patterns
- Tailwind classes with CSS variables
- File naming: kebab-case for routes, camelCase for components
