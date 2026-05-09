## Summary

**Done:**
- `app/routes.ts` — Added `route("/home", "routes/home.tsx")` to register the `/home` path
- `app/routes/home.tsx` — Rewritten from Welcome-component loader to simple `redirect("/")` loader. Removed `../welcome/welcome` import. Kept `meta()` for proper title/description. Component returns `null` since loader redirects before render.
- `progress.md` — Updated with current changes

**Result:** Navigating to `/home` now redirects to `/` (the brutalist hero page). The old `Welcome` component is no longer imported here.