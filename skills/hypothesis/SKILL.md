---
name: hypothesis
description: 'Helps you structure a strategic question into a clear, testable framework before jumping to answers. Use when you need to think through a decision, frame a business problem, or plan an analysis — e.g. "help me structure the key questions for X".'
metadata:
  version: "1.0.0"
  requires_mcp: visualize
---

A hypothesis tree structures a strategy question into a MECE (Mutually Exclusive, Collectively Exhaustive) decomposition before any analysis begins. It forces a specific position (the Day One Hypothesis), makes sub-questions explicit and testable, and orders investigation by risk — highest-stakes questions first.

The tree IS the primary output. Not a planning step before the real work.

**Before producing any output, read `references/hypothesis-tree-template.md`** — it contains the exact format to use.

---

## What makes a good hypothesis tree

### Day One Hypothesis

Immediately formulate your best guess at the answer — even with almost no information. This hypothesis is explicitly provisional and is *designed* to be wrong in places. A wrong-but-specific hypothesis creates a concrete target to confirm or refute. A vaguely-correct hypothesis creates nothing to test.

Optimise for **falsifiability and specificity**, not correctness:
- Useful: "The vendor's per-seat cost exceeds our budget threshold at current headcount, making build the better option"
- Useless: "The vendor may or may not be a good fit depending on various factors"

The governing hypothesis should evolve. A hypothesis that hasn't been refined after several rounds of evidence is probably too vague — narrow it, pivot it, or split it.

### MECE issue tree

Decompose the question into dimensions that are mutually exclusive (no overlap) and collectively exhaustive (nothing missing). A good MECE test: could you answer every dimension "yes" and still have the question unresolved? If so, you're missing a dimension.

Two levels minimum. Three is usually right. The dimensions should feel like genuinely different *types* of question about the problem, not just a list of topics.

**Common MECE frames by problem type:**
- **Decisions** (should we X?): Is it feasible? / Is it valuable? / Is the risk acceptable? / Is the timing right?
- **Diagnostics** (why is X happening?): Where is the problem? / Why is it occurring? / How significant is it?
- **Business cases** (justify X): What's the value delivered? / What's the cost and risk? / What's the counterfactual?
- **Narratives** (communicate X): What's true now? / What's changed or at risk? / What should happen next?
- **Initiative planning** (execute X): What does success look like? / What are the critical path decisions? / What could go wrong?

### Sub-hypotheses

Each branch of the tree gets a sub-hypothesis — a testable, falsifiable statement about what you believe is true in that dimension. Sub-hypotheses should be:
- Specific enough to confirm or refute with evidence
- Consequential enough that being wrong changes the answer
- Ordered by risk: P1 = the sub-hypothesis whose failure most quickly invalidates the whole

### Evidence discipline

For each sub-hypothesis, name the specific evidence that would confirm or refute it. "Do more research" is not evidence. "Compare per-seat pricing at our current 200-seat scale against internal build cost estimate from engineering" is evidence.

### "So what?" on every finding

When a sub-hypothesis is tested and a finding emerges, it must answer: so what does this mean for the governing hypothesis? A finding that doesn't change anything isn't worth capturing.

---

## How to build the tree

### Starting fresh

1. State the exact question being answered — verbatim, never paraphrased
2. Formulate the Day One Hypothesis: one sentence, takes a specific position
3. Choose the MECE frame that fits the problem type (see above)
4. Identify the 2–4 dimensions that cover the problem space
5. Write one sub-hypothesis per leaf node in the tree
6. Assign priorities: P1 = the sub-hypothesis that, if wrong, most quickly changes the answer
7. For each sub-hypothesis, name the specific evidence needed to test it
8. Begin on P1 — surface preliminary findings if information is available
9. Capture any blockers requiring human input
10. Save as `hypothesis-tree-[slug].md`
11. **Render the interactive visualisation** (see Interactive Visualisation section below) — always, without exception

### Updating an existing tree

1. Load the existing tree file
2. Review what's changed: what's been confirmed, refuted, or what has revealed gaps?
3. Update sub-hypothesis statuses
4. Narrow or pivot the governing hypothesis based on what's been learned
5. Add new sub-hypotheses if evidence revealed gaps in the original decomposition
6. Reprioritise remaining hypotheses
7. Update the investigation log with new findings and their "so what" implications
8. **Re-render the interactive visualisation** to reflect updated statuses and any new hypotheses

---

## Interactive Visualisation

After saving the hypothesis tree file, always render an interactive widget using the `mcp__visualize__show_widget` tool. This gives the user a scannable, collapsible view of the tree and is a required output — not optional decoration. Think of it as the "live" companion to the saved `.md` file.

### Widget structure (top to bottom)

1. **Header** — the verbatim question in a small label + large text, then the Day One Hypothesis in a highlighted left-bordered box with the key claim bolded
2. **Priority legend** — four colour-coded dots (P1 = red, P2 = amber, P3 = green, P4 = grey) with a one-line description of what P1 means
3. **Dimension sections** — one collapsible block per dimension (A, B, C…), each with a colour-coded header; default state is open. Show a ▼/▶ toggle arrow in the header
4. **Hypothesis rows** — inside each dimension, one row per hypothesis with three columns: ID (e.g. H1), hypothesis text with evidence note in italic below it, and a priority badge (P1–P4) aligned right
5. **Next-step footer** — a distinct box naming the P1 hypotheses to investigate first and the reason they're first

### Colour conventions

Use CSS variables for all backgrounds so the widget respects dark mode:
- General backgrounds: `var(--bg-100)`, `var(--bg-200)`, `var(--text-100)`, `var(--text-300)`
- Dimension header backgrounds: pick one solid colour per dimension — e.g. `#1a5276` (A), `#117a65` (B), `#6e2f8f` (C), `#b7770d` (D); always white text
- Priority badge colours: P1 → `background:#fdecea; color:#c0392b`; P2 → `background:#fef5e4; color:#b7770d`; P3 → `background:#e9f7ef; color:#1e8449`; P4 → neutral grey

### Loading messages

Use 3 short loading messages that describe what's happening (e.g. "Branching the issue tree", "Assigning hypotheses and priorities", "Checking for MECE coverage"). Adapt them to the specific question being structured.

### What to call `read_me` with

Before calling `show_widget`, call `mcp__visualize__read_me` with `modules: ["diagram"]` to load the design system. This ensures the widget renders correctly.

---

## Hard constraints

- **Structure before execution.** No substantive analysis before the tree exists.
- **Every sub-hypothesis must be falsifiable.** If you can't name the evidence that would disprove it, rewrite it.
- **P1 is investigated first.** If P1 is blocked, flag it and move to P2, but don't skip to a lower-priority question because it feels easier.
- **No finding without "so what?"** If you can't articulate an implication for the governing hypothesis, the finding isn't ready.
- **Flag blockers explicitly.** If a sub-hypothesis requires human input to test, put it in the blockers section and name specifically what's needed.

---

## Quality check

Before saving, verify:
1. Every sub-hypothesis is testable and falsifiable — not a generic observation
2. The issue tree is MECE — no overlapping branches, no obvious gaps
3. Sub-hypotheses are ordered by risk (P1 = highest stakes, wrong first kills the analysis)
4. Every sub-hypothesis has a specific evidence requirement named
5. Any findings include a "so what" implication for the governing hypothesis
