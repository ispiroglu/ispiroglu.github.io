# Research: Serving Cloudflare Workers under a GitHub Pages custom domain (ispiroglu.github.io)

## Summary

You **cannot** directly point `ispiroglu.github.io` to Cloudflare Workers. GitHub owns and controls the `github.io` domain — its DNS is outside your control, and it cannot be added as a Cloudflare zone. The viable approach is: buy/own a separate custom domain (e.g. `ispiroglu.com`), add it as a Cloudflare zone, then use a Cloudflare Worker as a reverse proxy that fetches from `ispiroglu.github.io`. The Worker rewrites HTML URLs and serves everything under your custom domain. `ispiroglu.github.io` continues to work independently on GitHub's infra.

---

## Findings

1. **`ispiroglu.github.io` is GitHub-controlled, not purchasable or transferable.** `github.io` is a domain GitHub owns. GitHub usernames are first-come-first-served via account registration; there is no purchase or transfer of the subdomain. GitHub's DNS for `github.io` is entirely outside your control. [Source](https://github.com/github/docs/blob/main/content/site-policy/other-site-policies/github-username-policy.md)

2. **Cloudflare Custom Domains require owning the zone.** Cloudflare Workers docs state: *"You cannot create a Custom Domain on a hostname with an existing CNAME DNS record or on a zone you do not own."* To attach a Worker directly to a hostname, that hostname must be in a Cloudflare zone under your account. `github.io` cannot be added as a zone. [Source](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

3. **Cloudflare Partial (CNAME) Setup doesn't help here.** Partial setup lets you proxy individual subdomains through Cloudflare without full nameserver change, but it requires you to own the domain and add it as a zone (Business/Enterprise plan required). Still requires ownership — `github.io` is not yours. [Source](https://developers.cloudflare.com/dns/zone-setups/partial-setup/)

4. **Option A — Worker reverse proxy on your own domain (recommended).** Buy a custom domain (e.g. `ispiroglu.com`), add it to Cloudflare, deploy a Worker that:
   - Receives request at `yourdomain.com`
   - Fetches content from `ispiroglu.github.io` (same path)
   - Rewrites HTML URLs (`ispiroglu.github.io` → `yourdomain.com`)
   - Returns response with modified headers

   This is a well-documented pattern with production examples. [Source](https://fahmifj.github.io/blog/mirror-website-using-cloudflare-workers/) | [Source](https://github.com/cheeaun/gh-proxy) | [Source](https://gordonbeeming.com/blog/2026-03-22/nextjs-tinacms-on-github-pages-behind-cloudflare)

5. **Option B — Cloudflare Workers entirely on your own domain, GitHub Pages as content source only.** Workers + Assets (or a Workers-based static site handler) serves all traffic on your custom domain. GitHub Pages repo is kept purely as a build/deploy pipeline and content origin, but all requests go through Workers. Same architecture as Option A but the Worker may also handle dynamic routes, API endpoints, auth, etc., while proxying static paths to GitHub Pages. [Source](https://horunai.pages.dev/2025a112514/)

6. **Option C — Path-based split: Workers for some routes, GitHub Pages direct for others.** If you own `yourdomain.com` in Cloudflare:
   - Proxied DNS records for apex/subdomain → Cloudflare Workers handles `/api/*`, `/app/*`
   - GitHub Pages serves the root or specific subpath via its own DNS records
   - Requires careful DNS setup — Cloudflare proxy either covers all or uses subdomain delegation

7. **DNS record types for Cloudflare + GitHub Pages combination:**
   - **A records** (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) — used for apex domains pointing to GitHub Pages. Must be **unproxied (gray cloud)** for GitHub's HTTPS validation to succeed.
   - **CNAME record** — used for subdomains (e.g. `www` → `username.github.io`). Must be unproxied if pointing directly to GitHub Pages.
   - **ANAME/ALIAS** — some DNS providers support this for apex. Cloudflare does not offer ALIAS; use A records instead.
   - For Cloudflare Workers behind your owned domain: **proxied (orange cloud)** CNAME or A record pointing to Cloudflare (or use Cloudflare Custom Domain feature which auto-creates DNS records). [Source](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) | [Source](https://imomaliev.com/devlog/helping-github-and-cloudflare-shake-hands/)

8. **CNAME file in repo does NOT conflict with Workers.** The CNAME file in `ispiroglu.github.io` repo tells GitHub to respond on a custom domain. It has no effect on DNS outside GitHub's control. Since Workers run on your own domain (not `github.io`), there is zero DNS conflict. [Source](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

9. **`ispiroglu.github.io` continues working regardless.** You cannot turn off `ispiroglu.github.io` or redirect it via DNS — GitHub controls that domain's DNS. Even if you set a custom domain in Pages settings, `username.github.io` still serves content. This is by design.

10. **Key architectural constraint:** Workers cannot intercept traffic to `ispiroglu.github.io` because that traffic never passes through Cloudflare's network. The Worker proxy only works for requests arriving at your own domain.

---

## Concrete Setup: Worker reverse proxy on your own domain

```
┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
│ Browser     │────▶│ yourdomain   │────▶│ Cloudflare       │
│ (visits     │     │ .com         │     │ Worker (proxy)   │
│ yourdomain) │     │ (Cloudflare  │     │                  │
└─────────────┘     │  zone)       │     │  fetch() to      │
                    └──────────────┘     │  ispiroglu.io    │
                                         │         .github   │
                                         │  rewrite URLs    │
                                         └────────┬─────────┘
                                                  │
                                                  ▼
                                         ┌──────────────────┐
                                         │ GitHub Pages     │
                                         │ (ispiroglu       │
                                         │  .github.io)     │
                                         └──────────────────┘
```

**Steps:**
1. Buy a domain (e.g. `ispiroglu.com`) via any registrar
2. Add domain as Cloudflare zone (free plan works)
3. Set nameservers at registrar to Cloudflare's
4. Deploy Worker with reverse proxy logic (see gh-proxy or fahmifj's blog for reference)
5. Add the domain as a Custom Domain in Worker settings (or use route)
6. (Optional) Use Cloudflare Page Rules or Transform Rules for redirects, headers

---

## Sources

### Kept
- **Cloudflare Workers Custom Domains docs** — authoritative: "cannot create Custom Domain on zone you do not own" [Source](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- **GitHub Pages custom domain docs** — official DNS record requirements [Source](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- **fahmifj.space mirror blog** — production example of Worker reverse proxy to GitHub Pages with URL rewriting [Source](https://fahmifj.github.io/blog/mirror-website-using-cloudflare-workers/)
- **cheeaun/gh-proxy** — open-source Worker that proxies GitHub Pages under custom domain [Source](https://github.com/cheeaun/gh-proxy)
- **gordonbeeming.com blog** — Next.js + GitHub Pages behind Cloudflare Worker (production architecture) [Source](https://gordonbeeming.com/blog/2026-03-22/nextjs-tinacms-on-github-pages-behind-cloudflare)
- **Cloudflare Partial (CNAME) Setup docs** — confirms Business/Enterprise plan requirement [Source](https://developers.cloudflare.com/dns/zone-setups/partial-setup/)
- **GitHub username policy** — confirms `github.io` subdomain is GitHub-controlled, not purchasable [Source](https://github.com/github/docs/blob/main/content/site-policy/other-site-policies/github-username-policy.md)
- **Helping GitHub and Cloudflare shake hands** — practical guide on DNS records (unproxied vs proxied) [Source](https://imomaliev.com/devlog/helping-github-and-cloudflare-shake-hands/)

### Dropped
- **nisshi-dev/gh-pages-rerouter** — path-rewriting only, less relevant than gh-proxy
- **AnswerOverflow cross-account custom domains** — about multi-account CF setup, not relevant
- **Multiple redundant gh-proxy-style repos** — gh-proxy covers the pattern sufficiently

---

## Gaps

- **Exact path-splitting (Workers for dynamic, GitHub Pages for static):** No single authoritative guide on routing `/api/*` to Workers and `/*` to GitHub Pages on the same domain while keeping both behind Cloudflare proxy. This would require careful wrangling of DNS, routes, and origin server config. Likely requires Workers to act as gateway for all traffic, forwarding static paths to GitHub Pages.
- **Worker + Assets serving the site directly (no GitHub Pages):** This is well-documented in Cloudflare docs but wasn't deeply researched since the user specifically asked about GitHub Pages combination.
- **Cost implications:** Cloudflare Workers free plan (100k req/day) vs paid plans. Not covered.

## Suggested next steps

1. Confirm whether you already own a custom domain or need to purchase one
2. Decide on architecture: (a) Worker-only with GitHub Pages as origin, or (b) path-split between Workers and Pages
3. Implement reverse proxy Worker (gh-proxy or custom) and test with a staging subdomain first
