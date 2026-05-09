**Complete.** Here's the result:

## `app/routes/bookmarks.$category.tsx` — Redesigned

**File:** `app/routes/bookmarks.$category.tsx`

### What changed
| Before | After |
|--------|-------|
| Card + Button components | Bordered rows with `hover:bg-secondary` |
| `ArrowLeft` icon back link | `<<< BACK TO CATEGORIES` in monospace accent |
| `h1` font-bold | `font-header text-4xl lg:text-5xl` |
| Card grid layout | Single-column bordered list |
| Visit as outlined Button | `VISIT >>>` in accent red monospace |
| Tags as plain text | `TechMarker` components (uppercased) |
| Unused `data` import from react-router | Removed |
| Unused `SectionHeader` import | Removed |
| `categoryNames` in mixed case | Consistently uppercased |

### File structure kept intact
- ✅ `loader` function with params + mock data
- ✅ `meta` function with fallback for missing data
- ✅ `categoryNames` mapping
- ✅ Empty state when no bookmarks

### False positive LSP errors
All remaining errors ("Cannot find module 'react'", JSX type issues) are from the LSP not having node_modules context — `@types/react` is in devDependencies. These don't block build.