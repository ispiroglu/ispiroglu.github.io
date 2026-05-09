**Done.** Here's a summary:

## Result

**Changed files:** `app/routes/bookmarks._index.tsx`

**Changes made:**
- Removed all `Card`/`CardContent`/`CardDescription`/`CardHeader`/`CardTitle` imports
- Page title changed to "BOOKMARKS" with `font-header`
- Subtitle uses `/// CURATED COLLECTION...` in `font-mono-data`
- Category grid: `border border-border` container with cells separated by borders
- Each category cell: `p-4 border-r border-b border-border` with `hover:bg-secondary`
- `>>>` accent arrows before category names
- Category count displayed as `{count} ITEMS` in `font-mono-data`
- Fixed unused `i` parameter in map
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0`
- Zero radius, zero shadows

**Validation:** File writes clean. LSP false positives only (missing react types — expected).