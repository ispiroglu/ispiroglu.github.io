## Done — `journey.tsx`

**Changes made:**
- `font-header text-4xl lg:text-5xl` page title
- `/// PERSONAL AND PROFESSIONAL TIMELINE` subtitle
- `SectionHeader` with `/// 2024` / `/// 2023` etc. for year sections
- Each timeline entry: bordered compartment (`border border-border p-4`) with hover state
- Dates in `[ YYYY.MM ]` monospace format
- Event titles in uppercase `font-mono text-sm`
- Descriptions in `text-sm text-muted-foreground`
- Zero border-radius, zero shadows, zero rounded corners
- `transition-none` on all interactive states
- `max-w-3xl` container for readability
- All existing data preserved (2020→2024, all 6 events)