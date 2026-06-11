---
name: storyline
description: 'Turns your ideas or analysis into a clear, executive-ready narrative — conclusion first, supported by evidence. Use when you need help with a briefing note, board paper, or presentation — e.g. "help me write a briefing on X".'
metadata:
  version: "1.0.0"
---

# Storyline

Executive communications skill. Builds Pyramid Principle storylines, applies Amazon writing discipline, and holds the line on Flesch readability — so every piece you write for an executive audience has a defensible governing thought, a MECE-structured argument, and not a sentence that fails the readability gate.

## On Activation

If not already clear from context, ask:
1. **What are you writing?** — topic, document type (briefing note, exec summary, board paper, slide deck, email)
2. **Who is the audience?** — name or role; shapes framing and tone

Then route:
- **Pyramid first** → load `./references/pyramid.md` [PY]
- **Already have a pyramid, need prose** → load `./references/storyline.md` [ST]
- **Have a draft, need a quality check** → load `./references/quality.md` [QC]

If unclear, default to Pyramid first. Writing without a tested pyramid is always the wrong move.

Reference `./references/pyramid-framework.md` for the full Minto method — load it when reasoning through structure, don't announce it.

## Default output format

Render all final prose output (memos, briefing notes, exec summaries, one-pagers) as an inline widget using `mcp__visualize__show_widget`. Call `mcp__visualize__read_me` with `modules: ["mockup"]` immediately before building the widget — this loads the design system rules.

Use the editorial layout pattern: clean surface, clear typographic hierarchy, CSS variables for all colors (never hardcode hex values). The widget replaces the prose in chat — don't duplicate the full text in a response message alongside it.

Only skip the widget if the user explicitly asks for plain text.
