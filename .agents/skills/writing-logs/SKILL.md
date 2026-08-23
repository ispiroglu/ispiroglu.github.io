---
name: writing-logs
description: Use when writing, drafting, revising, or finishing a post in content/writing, an MDX log, a /logs article, a technical blog, an investigation write-up, or when the user wants to co-write a log, be questioned about a post, or decide a blog flow together.
---

# Writing Logs

House style for `/logs` posts. Story envelope is Conway. Technical spine is PlanetScale. Every post has both. PlanetScale is not the narrator.

Figures: rhetoric from PlanetScale architecture walks. Paint from this website (`app/app.css`). Do not clone `public/assets/conways-law/` (tldraw rainbow, huge fonts). Open visualization.md before any SVG.

## Constants

| Name | Value |
|------|--------|
| `CONTENT_DIR` | `content/writing/` |
| `BODY_LANGUAGE` | English |
| `DEFAULT_DRAFT` | `true` |
| `QUESTION_BATCH` | `1` |
| `WRITE_SLICE` | the beat just decided, nothing else |
| `WRITE_MODE` | co-write |

## When to use

Symptoms: new `.mdx` under `CONTENT_DIR`, revise a log, "write this up", investigation narrative, concept essay, systems walkthrough.

Do not use for `content/stack/`, UI copy, or commit messages.

## Routing

Open references by beat, not by post type. Incident posts still run Act 1. The investigation is the scene.

```text
brief
  ├─ co-write loop (this file) → question, decide, write one slice
  ├─ Act 1 beat / recap slice → storytelling.md
  └─ Act 2 state / SVG slice → visualization.md
```

**REQUIRED:** Read [storytelling.md](storytelling.md) before an Act 1 or recap slice. Read [visualization.md](visualization.md) before an Act 2 slice.

## Co-write loop

This is not a one-shot generator. Flow is decided with the user. Prose is written on the way.

**Hard gate:** Do not output a full post, a full Act, or a stack of SVGs in one turn. `WRITE_MODE` is co-write. Switch to a full dump only if the user says `write the full draft` in those words.

Each turn:

1. If a file or the repo already answers, explore. Do not ask.
2. Else ask `QUESTION_BATCH` question. One. Include a recommended answer.
3. Wait. Do not queue the next branch.
4. After the user decides, write `WRITE_SLICE` only. Show it. Stop.
5. Write that slice to `CONTENT_DIR/<slug>.mdx` when the slice is prose or a figure. Leave `draft: true`. The site renders MDX directly; there is no separate render file.

Question shape: what we are choosing, why it matters for the next beat, your recommendation. Prefer a short option list.

### Decision order

Lock in this order. Do not skip ahead.

1. Hook: concept vs incident → title formula, slug
2. Act 1 Scene
3. Act 1 Tension (felt failure only)
4. Act 1 Join-me promise
5. Act 1 Imagine vs sourced investigation
6. Act 1 Name the idea
7. Act 2 state list (h2 names, which ones get a frame) — agree the list before any SVG
8. Each Act 2 state, one at a time: facts → prose → SVG
9. Recap
10. `bun run build` when the user says the draft is ready to compile

Turkish in the brief is notes only. Body is English. No `h1` in the body. `LogDetailPage` already renders `post.title`.

## House rules

| Rule | Law |
|------|-----|
| Acts | Always Act 1, then Act 2, then recap. No skip. |
| Mode | Co-write. One question, then one slice. No giant outcome. |
| Title | Concept hook → `Named Idea: Metaphor`. Incident hook → what broke, in plain words. |
| Narrator | Act 1 = human `we`. Act 2 = practitioner `we`. No diary `I`. No lecture `you should`. |
| Truth | Act 1 may mark a thought experiment with `Imagine`. Act 2 uses only facts from the brief or repo. No invented numbers. No fake case studies. |
| Headings | No `h2` until the idea has a name. Act 2 `h2` = state name, not Background / Overview / Deep Dive. Case study = `h3`/`h4`. |
| Code | Only a real artifact the current state needs. Never in Act 1. |
| Figures | Act 1: 0–1 figure, only if the thought experiment needs a picture. Act 2: one SVG per state change. Rhetoric = PlanetScale. Look = site tokens. Canvas = transparent (`CANVAS_FILL`) so body dots show. No Conway tldraw. No mermaid. No decorative figures. |
| Language | English. |

## Frontmatter

```yaml
title: "..."
date: 2026-08-22T12:00:00+03:00
hero: /assets/<slug>/banner.svg
excerpt:
draft: true
tags: ["kebab-or-phrase"]
description: "One sentence. Not a recap of the whole post."
```

`slug` = filename stem = `ASSET_DIR` folder. Kebab-case. `hero` is optional. If present, it is a banner SVG, not a substitute for Act 2 frames.

## Deliverables

Grow these as slices land. Do not batch them at the end of a silent run.

- [ ] `CONTENT_DIR/<slug>.mdx` (stub after title, then append)
- [ ] `ASSET_DIR` sequential SVGs (one frame per agreed state change)
- [ ] `bun run build` when the user says compile

## Red flags — stop and fix

| Excuse | Reality |
|--------|---------|
| "I have enough, I'll write the whole post" | Co-write. One question, then one slice. |
| "I'll outline everything first, then dump" | Outline is a decision list you agree, not a license to generate. |
| "Two questions save time" | `QUESTION_BATCH` is 1. |
| "Incident posts skip the scene" | Investigation is Act 1. Always. |
| "I'll add diagrams later" | Act 2 without frames is a tutorial dump. Write frames with the prose. |
| "Amazon / Netflix did this too" | Fake case study. Cut it unless the brief sourced it. |
| "Mermaid is faster" | Banned. Agent-authored SVG only. |
| "One new illustration per section" | Same scene must mutate. Do not change the metaphor. |
| "Match Conway SVGs / tldraw" | Anti-reference. Site paint + PlanetScale walk. See visualization.md. |
| "In this article" with no scene | Join-me is beat 3, after scene + tension. |
| "Draft not visible on /logs" | `draft: true` hides the post everywhere until you flip it to `false`. |

All of these mean: do not ship the dump. Return to the last undecided beat.
