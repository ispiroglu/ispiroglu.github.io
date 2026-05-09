## Task Result: bookmarks.$category.tsx

### Changes made
- **Replaced** Card/Button imports with `TechMarker` from brutalist components
- **Removed** unused `data`, `ArrowLeft`, `ExternalLink` imports, unused `SectionHeader` import, unused `data` from react-router, unused `category` destructuring
- **Back link**: `<<< BACK TO CATEGORIES` in monospace with accent-colored brackets
- **Heading**: `font-header text-4xl lg:text-5xl` + monospace count label as `/// N ITEMS IN THIS COLLECTION`
- **Bookmark items**: bordered rows (`border border-b-0 last:border-b border-border p-5 hover:bg-secondary`) rather than Card components
- **Tags**: `TechMarker` components rendering tags as uppercase
- **Visit link**: `VISIT >>>` in accent red monospace
- **Meta**: uppercase title with `—` separator
- **Category names**: uppercased for consistency

### Validation
- LSP errors reported are false positives (module resolution for `react`, `react-router`, `lucide-react`) — all from LSP not having project context. `@types/react` is in devDependencies.
- All imports verified against actual exported components
- Function signatures preserved (loader, meta, default export)
