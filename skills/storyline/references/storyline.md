---
name: storyline
description: Write the full storyline with SCR/SCQA introduction and structured body, as narrative paragraphs or dot-dash slides
code: ST
---

# Storyline

## What Success Looks Like

A complete, polished comms piece that opens with a crisp SCR/SCQA introduction, flows through the supporting arguments in logical order, and closes with a clear call to action or resolution. Every sentence passes the Flesch gate. Every data point is specific. Every claim earns its place. The reader can follow the logic without the author in the room.

## Your Approach

Start from an approved pyramid — never write a storyline without one. If a pyramid hasn't been built this session, ask whether to build it now [PY] or provide one directly.

### Output formats

**Narrative:** Full paragraphs. SCR/SCQA introduction leads, then body sections for each supporting argument, then resolution. Flows like a written briefing or exec summary.

**Dot-dash:** Slide-ready. Governing thought as the headline. Each supporting argument as a top-level bullet. Sub-arguments and evidence as indented dashes. No full sentences — fragments that carry the weight of sentences, each earning its place.

Confirm format before writing. If unclear, offer a short sample of each and let Brad choose.

### Rendering output

After the prose is drafted and passes the Flesch gate, render it as an inline widget:

1. Call `mcp__visualize__read_me` with `modules: ["mockup"]` to load design system rules.
2. Call `mcp__visualize__show_widget` with the content as clean HTML.

**HTML structure for narrative output:**
- Memo header (To / From / Date / Subject) in a definition-list style grid if the document type warrants it
- Governing thought as a visually distinct callout (e.g. left border accent, slightly larger text)
- Section labels in small caps (`font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em`) above each body section
- Body text at 14px, `line-height: 1.7`, `color: var(--color-text-primary)`
- Dividers between sections: `border-top: 0.5px solid var(--color-border-tertiary)`
- All colors via CSS variables — never hardcode hex values

**HTML structure for dot-dash output:**
- Governing thought as a styled headline (15px, weight 500)
- Top-level bullets as labeled sections with section label treatment above
- Sub-points as compact 13px lines with muted color (`var(--color-text-secondary)`)

The widget replaces the prose in chat — do not repeat the full text in the response message. A one-line summary of what was rendered is enough.

### Writing standards

Apply Amazon writing discipline throughout:

- Sentences under 30 words. Target under 20.
- Replace adjectives with data. "Significant improvement" → "43% reduction in processing time."
- Eliminate weasel words. "Nearly all" → the actual percentage. "Some time ago" → "three months ago."
- Active voice. Actor at the front of the sentence.
- Answer first. Bottom line up front in every section.
- One idea per sentence. No sentence earns two claims.
- Apply the "so what" test before finalising any paragraph. If deleting it wouldn't hurt the argument, delete it.
- Define acronyms on first use.

### Flesch gate

After drafting, apply the Flesch principles manually: shorten sentences, replace multi-syllable words, cut passive constructions, and rewrite until the text reads like plain speech. Target Flesch Reading Ease >50 and Flesch-Kincaid Grade Level ≤6.0. Never show a draft with unresolved readability failures.

### Watching for regressions

After Brad makes any edit to a storyline, identify the changed or new sentences and re-score them. If any fail, tell him immediately: "The edit to [sentence] broke readability — here's a rewrite that passes: [rewrite]."
