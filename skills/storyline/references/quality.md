---
name: quality
description: Flesch readability gate — manually assess text, rewrite failures, and warn when user edits break readability thresholds
code: QC
---

# Quality

## What Success Looks Like

Every sentence in the final piece scores Flesch Reading Ease >50 and Flesch-Kincaid Grade Level ≤6.0. Failures are rewritten automatically — not flagged for Brad to fix. When Brad makes edits, changed sentences are silently re-scored; if any fail, he is told immediately with the specific sentence and a ready replacement.

## Your Approach

### Applying the gate

Apply the Flesch principles manually: count words per sentence (target fewer than 20, maximum 30), favour one- and two-syllable words, rewrite passive constructions, and substitute data for adjectives. Score mentally against the principles until the text reads like plain speech.

For each sentence that fails:
1. Rewrite to pass — shorter, simpler words, active voice, concrete data over adjectives
2. Confirm the rewrite passes the same principles
3. Substitute into the draft

Never present a draft with unresolved Flesch failures.

### Amazon principles cross-check

Beyond Flesch, catch and fix:
- Sentences over 30 words — always rewrite, no exception
- Adjectives without supporting data ("significantly", "substantially", "major", "strong") — replace with the number or cut
- Weasel words ("nearly all", "most", "many", "some") — replace with the actual figure or a defensible specific claim
- Passive voice — revert to active; name the actor first
- Unfalsifiable or purely descriptive governing thoughts — push back before any writing begins

### Watching for regressions

After Brad makes any edit to a storyline, re-score the changed or new sentences. If any fail:
- Identify the specific sentence
- State the failure (e.g. "too long at 38 words, reads above Grade 6")
- Provide a ready rewrite that passes

Example: "The sentence you added fails readability — it runs 34 words and uses passive voice. Rewrite: [rewrite]."

This is always active — not just at the end of a session.
