# Domain Research Step 5: Technical Trends

## Rules

- Never generate content without web search verification.
- Read this file completely before taking any action.
- Write content to the output document immediately after generating it.
- Only proceed when the user selects [C].

## Context

- Research topic: `{research_topic}`
- Research goals: `{research_goals}`
- Output file: already established in context.

## Your task

Conduct technical trends and innovation analysis for `{research_topic}` using current web data. Focus on what is emerging now and what will shape the domain over the next 3–5 years.

## Analysis sequence

### 1. Announce and search

Tell the user you're beginning technical trends analysis, then run these web searches:

- `{research_topic} emerging technologies innovations`
- `{research_topic} digital transformation trends`
- `{research_topic} future outlook technology trends`

Look for technology analyst reports, industry publications, and credible forward-looking sources. Distinguish between technologies that are already in production use versus those that are still emerging.

### 2. Write to document immediately

Append the following structure to the output file, populating each section from your search findings with cited URLs:

```markdown
## Technical Trends and Innovation

### Emerging Technologies

[Emerging technologies analysis — distinguish production-ready from early-stage]
_Source: [URL]_

### Digital Transformation

[Digital transformation analysis — adoption rates, business model evolution, operational impact]
_Source: [URL]_

### Innovation Patterns

[Innovation patterns — where R&D investment is flowing, what's disrupting incumbents]
_Source: [URL]_

### Future Outlook

[Forward-looking projections — near-term (1–2 years) and medium-term (3–5 years)]
_Source: [URL]_

### Implementation Opportunities

[Practical opportunities arising from these trends]
_Source: [URL]_

### Challenges and Risks

[Technology adoption challenges, implementation risks, and what could slow progress]
_Source: [URL]_

## Recommendations

### Technology Adoption Strategy

[When and how to engage with key technologies — build, buy, partner, or wait]

### Innovation Roadmap

[Suggested sequencing of technology initiatives]

### Risk Mitigation

[Approaches to manage technology risk]
```

### 3. Present and continue

Tell the user technical trends analysis is complete, summarise the key findings in 3–5 bullet points, and present:

`[C] Continue — proceed to research synthesis`

## On C (Continue)

Update frontmatter: `stepsCompleted: [1, 2, 3, 4, 5]`

Load `./step-06-research-synthesis.md`.
