---
name: consulting-slide-quality
description: "Universal visual presentation quality guardrail grounded in consulting best practices. Apply when authoring, reviewing, or wireframing any slide — in open-slide, Excalidraw, PowerPoint, Figma, or any other tool. Enforces slide taxonomy (Key Message vs Detail), density, visual hierarchy, typography principles, color restraint, layout/whitespace, and data visualization standards. Triggers on 'quality check', 'slide review', 'does this conform', 'wireframe this slide', 'make this better', 'consulting standards', or any authoring turn where presentation quality is the goal. For BCG-branded output specifically, read bcg-slide-quality after this skill."
metadata:
  version: "1.0.0"
---

# Consulting Slide Quality — Universal Visual Guardrail

**Companion skill:** `bcg-slide-quality` is a separate skill for BCG-branded output. That skill is not part of this repository, and this skill works without it.

These principles are distilled from consulting presentation best practices. They are **tool-agnostic**: apply them whether you are writing React in open-slide, drawing boxes in Excalidraw, designing in Figma, or building in PowerPoint.

**Visual reference library (BCG Format Guide examples):**
All reference images live alongside this skill at `references/images/`. They are rendered pages from BCG's internal format guide and are among the best public examples of these principles applied rigorously. When in doubt, open the relevant image — do not guess.

To generate an Excalidraw wireframe, use the script in this skill:
```bash
echo '{"type":"kms","title":"Revenue grew 40%","insight":"40%","subtitle":"Driven by enterprise segment"}' | node <skill-dir>/scripts/generate-wireframe.js > slide.excalidraw
```

---

## 1. Slide Taxonomy — Classify Before You Design

Every slide must be one of two types. **Classify before writing a single element.** If you cannot immediately classify it, split it into two slides.

### Key Message Slide (KMS)
| Property | Rule |
|---|---|
| Purpose | Communicate one decisive insight — supports the presenter, is not their script |
| Content | One main idea, ≤ 4 talking points, prompts not sentences |
| Layout | Content **vertically centered** on the canvas |
| Alignment | **Center-aligned** elements |
| Title size | Large — the dominant visual element |
| Whitespace | Generous — if it looks sparse, that is likely correct |
| When | Opening/closing, section dividers, key insight reveals, hero statistics |

### Detail Slide
| Property | Rule |
|---|---|
| Purpose | Provide evidence and supporting context for a Key Message |
| Content | Denser, but every element earns its place — still one core subject |
| Layout | Content **top-aligned**, starting near the title |
| Alignment | **Left-aligned** elements |
| Title size | Smaller and descriptive — subordinate to the content |
| Whitespace | Less than KMS, but never absent — maintain column gutters |
| When | Charts, tables, bullet evidence, process diagrams, data breakdowns |

> Visual reference: `references/images/slide-124.png` — Key Message vs Detail layout comparison  
> Visual reference: `references/images/slide-132.png` — slide taxonomy worked examples

---

## 2. Density — One Point Per Slide

> *"Strong communicators make their points clearly and efficiently. When information is displayed simply and cleanly, your audience understands more easily. When it's too dense, they get lost."*

**The single-point rule:** Each slide supports exactly one main point. Two separable ideas → two slides.

**Content vs. script:** A KMS shows prompts, not sentences. The presenter speaks the words.

### Anti-patterns
- ❌ More than ~40 words on a Key Message Slide
- ❌ More than 5 bullets on any single slide
- ❌ A bullet that wraps to a second line — shorten it or give it its own slide
- ❌ A paragraph block AND a bullet list on the same slide
- ❌ A title that re-states what the visual already shows

> Visual reference: `references/images/slide-018.png` — density best practice vs. avoid

---

## 3. Visual Hierarchy — One Focal Point Per Slide

> *"Create slide focal points by making key messages or visuals the most dominant or centrally focused elements."*

Every slide has an unambiguous visual winner. The eye should know instantly where to go.

### The Hierarchy Ladder
1. **Largest / highest contrast** → The single most important thing (stat, keyword, conclusion)
2. **Second tier** → Title or subheading
3. **Third tier** → Body copy / bullets
4. **Quietest** → Captions, source lines, annotations

### Rules
- ✅ One element dominates — if two elements compete, subordinate one
- ✅ Use **size differential aggressively** — a 3× size ratio between hero and body is intentional
- ✅ The accent color marks the one key idea — not multiple ideas simultaneously
- ✅ Large bold numbers or short phrases serve as hero elements on KMS
- ❌ Two equally-sized headlines competing on the same slide
- ❌ Decoration that competes with the message for attention
- ❌ Icons on KMS unless the icon **is** the message

> Visual reference: `references/images/slide-019.png` — focal points and whitespace

---

## 4. Typography

Use a **clean, screen-readable sans-serif** typeface. Hierarchy is expressed through **size and weight**, not font variety.

### Alignment by Slide Type
| Context | Alignment |
|---|---|
| Key Message Slide body and title | Center |
| Detail Slide body and title | Left |
| Labels beside diagrams / charts | Right (creates visual relationship) |
| Sub-bullets / supporting detail | Left always |

### Type Scale — open-slide 1920×1080 Canvas
| Element | Relative size | Concrete px (open-slide) |
|---|---|---|
| KMS hero title | Very large | 120–160px |
| KMS hero stat / insight | Dominant | 160–220px |
| Detail Slide title | Medium | 56–80px |
| Section subheading | Medium-small | 48–60px |
| Body / bullets | Body | 32–44px |
| Captions / labels | Small | 24–28px |
| Minimum legible size | Floor | **28px — never below** |

For Excalidraw wireframes, scale these proportionally to your canvas size.

### Type Rules
- ✅ **Consistent size** for the same element type across every slide in the deck
- ✅ Title on 1 line (strongly preferred), 2 lines maximum
- ✅ Weight: heavy (800–900) for display, regular (400–500) for body
- ✅ Line-height: 1.2 for headings, 1.5–1.7 for body
- ❌ No emphasis (bold, highlight) inside titles or subtitles
- ❌ No mixing more than one display font and one body font

> Visual reference: `references/images/slide-022.png` — titles and text hierarchy  
> Visual reference: `references/images/slide-025.png` — bullet and text formatting

---

## 5. Color

**Principle:** Use color to direct attention, not to decorate.

### Core Rules
- ✅ **Monochromatic base** (one neutral — gray, black, white, or off-white) for the majority of elements
- ✅ **One accent color** per slide — used exclusively for the single most important element
- ✅ Color creates hierarchy — the viewer must know instantly where to look first
- ✅ For charts: neutral/gray for all base series; accent only for the highlighted series
- ❌ **Do not use color-filled boxes to organize or group content** — use whitespace, dividing lines, and colored text instead
- ❌ Multiple accent colors on one slide (dilutes hierarchy)
- ❌ Gradient fills on text elements
- ❌ Drop shadows, glows, bevel/emboss effects on any element

> Visual reference: `references/images/slide-036.png` — color restraint: best practice vs. avoid  
> Visual reference: `references/images/slide-051.png` — effects to avoid (shadows, gradients)

---

## 6. Layout and Whitespace

### Margin / No-Fly Zone
| Zone | Rule |
|---|---|
| Edge margin | Absolute minimum: ≈ 5–6% of canvas width on all sides |
| Preferred content padding | ≈ 6–8% of canvas width |
| Column gutters | ≈ 2.5–4% of canvas width between content columns |
| Gap between content blocks | ≈ 2–3% of canvas height |

*At 1920×1080: min edge ≈ 96–120px; gutters ≈ 48–80px; block gaps ≈ 48–64px.*

### Layout by Slide Type
| Slide type | Vertical alignment | Horizontal alignment |
|---|---|---|
| Key Message | Center | Center |
| Detail | Top (flex-start) | Left (flex-start) |

### Whitespace as Active Design
- Whitespace is not wasted space — it **directs the eye** to what matters
- A KMS that looks too empty is almost always correct
- When content feels cramped: **split the slide** rather than reducing padding or font size

> Visual reference: `references/images/slide-122.png` — guided column layout  
> Visual reference: `references/images/slide-123.png` — no-fly zones and column guides

---

## 7. Data Visualization

> *"Consider the story your data is trying to tell before formatting. The story informs the format."*

### Principles
- **Lead with the insight headline** — the conclusion, not the chart title ("Revenue grew 40%" not "Revenue by Quarter")
- Use a callout or label to highlight the one data point the audience must remember
- KMS carries the insight; Detail carries the full chart with supporting evidence
- **Color:** Neutral for all base series; accent color only for the highlighted series
- **Pie / doughnut:** Maximum 6 segments; use a center callout for the key percentage
- **Source citation:** Required below every chart — small, quiet, left-aligned

### Slide Type → Chart Decision
| Data insight | Slide type |
|---|---|
| One number is the whole point | KMS — hero stat with brief context |
| Full time-series, all data matters | Detail — labeled callout on key data point |
| Comparison across many items | Detail — accent only on the winner / outlier |

> Visual reference: `references/images/slide-089.png` — choosing the right chart type  
> Visual reference: `references/images/slide-090.png` — chart anatomy and label placement

---

## 8. Excalidraw Wireframing

When wireframing slides in Excalidraw, apply the same taxonomy and layout rules. The wireframe is the design contract — get the structure right before writing code or final copy.

### Wireframe Conventions
| Element | Convention |
|---|---|
| Slide bounds | Explicit rectangle at your chosen canvas size |
| No-fly zone | Dashed inner rectangle showing the safe content area |
| Slide type label | Small annotation outside the slide bounds (e.g. "KEY MESSAGE SLIDE") |
| Hero text | Large text element, centered, with accent stroke color |
| Body text | Smaller text, left or center per slide type |
| Content placeholder | Hatched rectangle when exact content is TBD |
| Divider lines | Thin line between title and content on Detail Slides |
| Roughness | 1 (slight hand-drawn feel — signals "wireframe, not final") |

### Using the Generator Script
The `scripts/generate-wireframe.js` script produces valid `.excalidraw` files from a JSON description. No LLM required for structural wireframes.

```bash
# Key Message Slide with hero stat
echo '{"type":"kms","title":"Revenue grew 40% in Q3","insight":"40%","subtitle":"Driven by enterprise segment expansion"}' \
  | node scripts/generate-wireframe.js > kms-revenue.excalidraw

# Key Message Slide — text only, no hero stat  
echo '{"type":"kms","title":"We must move to a platform model","subtitle":"Three structural forces make this inevitable"}' \
  | node scripts/generate-wireframe.js > kms-platform.excalidraw

# Detail Slide with bullets
echo '{"type":"detail","title":"Three forces driving the platform shift","bullets":["Cost of integration has dropped 10×","Developer ecosystems compound faster than product teams","Enterprise buyers now expect API-first"]}' \
  | node scripts/generate-wireframe.js > detail-forces.excalidraw
```

Open the output file in Excalidraw (web, VS Code extension, or desktop app).

---

## 9. Self-Review Checklist

Run this after completing every slide, before finishing:

### Taxonomy
- [ ] Classified as KMS or Detail — not a hybrid
- [ ] KMS: single main point, content centered vertically, generous whitespace
- [ ] Detail: title ≤ 1 line, left-aligned body, content starts near top

### Density
- [ ] KMS: ≤ 40 words, ≤ 4 talking points
- [ ] No paragraph block combined with a bullet list
- [ ] Every bullet fits on one line
- [ ] Two separable ideas have been split to separate slides

### Hierarchy
- [ ] One and only one focal point — one element clearly "wins"
- [ ] Size differential between hero and body is aggressive (2–3×)
- [ ] Accent color used on exactly one idea per slide

### Typography
- [ ] Consistent font sizes for the same element across all slides
- [ ] Title on 1–2 lines maximum; no bullet wraps
- [ ] No text below the legibility floor
- [ ] Alignment matches slide type

### Color
- [ ] ≤ 3 colors per slide (base + text + accent)
- [ ] No color-filled boxes grouping content
- [ ] No shadows, gradients, or decorative effects

### Layout
- [ ] All content respects the edge margin / no-fly zone
- [ ] Section gaps ≥ the minimum block gap
- [ ] Whitespace feels intentional, not accidental

### Data
- [ ] Chart title is an insight headline, not a generic label
- [ ] Only the key series uses the accent color; all others use the neutral
- [ ] Source citation present below every chart

---

## 10. Visual Reference Quick-Lookup

All images: `references/images/<filename>` (relative to this skill directory)

| Principle | Image |
|---|---|
| Density — single point | `slide-018.png` |
| Focal points and whitespace | `slide-019.png` |
| Titles and text hierarchy | `slide-022.png`, `slide-023.png` |
| Bullet and text formatting | `slide-025.png`, `slide-026.png` |
| Color restraint — best vs avoid | `slide-036.png` |
| Effects to avoid | `slide-051.png` |
| Layout column guides | `slide-122.png` |
| No-fly zones | `slide-123.png` |
| KMS vs Detail layout | `slide-124.png` |
| Slide taxonomy examples | `slide-132.png` |
| Right chart type | `slide-089.png` |
| Chart anatomy | `slide-090.png` |
