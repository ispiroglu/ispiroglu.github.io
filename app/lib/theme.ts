// Theme preference plumbing — light / dark / system.
//
// The inline bootstrap script in BaseLayout.astro duplicates the resolve
// logic dependency-free (it must run before first paint, before any bundle
// loads). Keep the two in sync: STORAGE_KEY + resolve rule.
//
// Theme changes are broadcast as a `themechange` CustomEvent on `document`
// so non-React listeners (the <log-figure> canvas engine) can re-paint.

export type ThemePref = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "theme";
export const THEME_EVENT = "themechange";

const DARK_QUERY = "(prefers-color-scheme: dark)";

export function getThemePref(): ThemePref {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

/**
 * Apply a preference to the document and notify listeners.
 * "system" resolves against the OS-level color-scheme media query.
 */
export function applyTheme(pref: ThemePref): void {
  const resolved =
    pref !== "system"
      ? pref
      : window.matchMedia(DARK_QUERY).matches
        ? "dark"
        : "light";
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  document.dispatchEvent(
    new CustomEvent(THEME_EVENT, { detail: { resolved } }),
  );
}

/** Persist and apply. */
export function setThemePref(pref: ThemePref): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, pref);
  } catch {
    // Private mode / storage disabled — still apply for this page view.
  }
  applyTheme(pref);
}

/** Follow OS-level scheme changes while preference is "system". Idempotent. */
let watching = false;
export function watchSystemTheme(): void {
  if (watching) return;
  watching = true;
  window.matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (getThemePref() === "system") applyTheme("system");
  });
}
