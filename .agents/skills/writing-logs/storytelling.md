# Storytelling

Act 1 and the recap. Voice of `content/writing/conways-law.mdx`. Not PlanetScale.

**Gate:** Do not write Act 1 as a block. The co-write loop in SKILL.md decides each beat with the user, then you write that beat only.

**Violating the letter of the beats is violating the spirit of the beats.**

## Constants

| Name | Value |
|------|--------|
| `ACT1_BEATS` | Scene, Tension, Join-me promise, Thought experiment or sourced investigation, Name the idea |
| `IMAGINE_MARKER` | `Imagine` |
| `NARRATOR_ACT1` | human `we` (reader + writer) |
| `NARRATOR_ACT2` | practitioner `we` (do not use this file for Act 2 voice) |

## Act 1 recipe

Write these five beats in order, one beat per approved slice. Then stop Act 1. Do not add a sixth beat. Do not draft beats 2–5 while beat 1 is still open.

1. **Scene.** A human situation the reader already knows. Campfire, a room of teams, an on-call night, a query that would not die. Concrete. Not the named idea yet.
2. **Tension.** Why that situation fails when scale, orgs, or systems show up. The 100-people math. The three teams that cannot talk. The query that stays slow while dashboards look fine. For incidents, name the felt failure only. Do not name the mechanism yet.
3. **Join-me promise.** One or two sentences. What we will walk, and why it matters. Keep Conway's beat: "In this article, we'll explore… Join me as we examine…" Do not put this at line 1. Scene and tension come first.
4. **Thought experiment or sourced investigation.** One scenario. If invented, start with `IMAGINE_MARKER`. If sourced, use only brief/repo facts. Play it to the broken ending. 0–1 figure here, and only if the scene is spatial (teams, shards, rooms). Caption the figure as the broken state.
5. **Name the idea.** Quote or definition. This is the first time the law, maneuver, or mechanism gets its full name as the point. After this beat, Act 1 is over.

No `h2` during beats 1–4. Beat 5 may introduce the name in prose. The first heading waits until Act 2, or until a named technique that Act 2 will walk (`### The Inverse Conway Maneuver`).

## Voice

- Conversational. Rhetorical questions are allowed.
- Bold for punch words. Bold+italic for the named move the first time it is earned (`**_The Inverse Conway Maneuver_**`).
- Tighten sentences. Do not copy Conway typos, comma splices, or filler loops.
- Short paragraphs after the opening scene. Two giant walls before the quote is the ceiling, not the target.
- Blockquote for a sourced line (a law, a quote, a log line the brief actually contains).

Banned in Act 1: code fences, API tables, "first we must understand X", fake history, roadmap bullets, a second thought experiment.

## Thought experiments

One. Marked. Then the consequence.

Yes: "Imagine there are three teams in a department…" → they cannot merge into one system.

No: three metaphors, then the idea. No unnamed composite companies. No "a large streaming service".

If the brief is an incident, beat 4 is the investigation replay, not `Imagine`. Still a scene: what we saw, in order, without the fix yet. Do not announce the root cause in beats 1–4. Beat 5 names it. Act 2 walks it.

## Recap close

After Act 2, return here.

Restate the named idea. Name the move. Point at the walk we just did. No new argument. No new figure. No new case study.

Conway shape:

> Conway's Law highlights the connection between communication structure and system architecture. The Inverse Conway Maneuver is how we shape the org toward the system we want. The walk showed that X. It is an observation we can use, not a prescription we must obey.

Do not start with a heading called `Conclusion`. Bold **In conclusion** in the closing paragraph is allowed.

## Conway mapped to the five beats

Use as the shape, not as text to clone.

| Beat | Conway |
|------|--------|
| Scene | Humans communicating since they lived together. Hunt, food, then knowledge. |
| Tension | 100× work, 100 people. Tools do not save the ending. Org shape leaks into the system. |
| Join-me | Explore Conway's Law. Join me as we examine how this helps systems and teams. |
| Imagine | Three teams in one room. Three languages. Three systems glued together. Optional figure of that shape. |
| Name | The Conway quote. Then Inverse Conway Maneuver as the move. |

Act 2 (not this file): Amazon two-pizza is a sourced public case in that post. Do not invent a parallel case. If the brief has no case, skip the case-study block.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Join-me in sentence 1 | Write scene + tension first |
| Named idea in the title *and* paragraph 1, then campfire | Delay the name until beat 5. Title may name it. Body earns it. |
| Lecture `you should restructure your teams` | Stay in `we`. Recap states the observation. |
| Second imagined company in the recap | Cut. Recap points at Act 2. |
| Act 1 becomes the whole post | After beat 5, return to SKILL.md and agree the Act 2 state list |
| Five beats in one reply | Illegal dump. One beat per turn. |
| Incident tension names routing / the bug | Felt failure only. Mechanism waits for beat 5 |
