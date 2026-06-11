# Domain Research Step 4: Regulatory Focus

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

Conduct regulatory and compliance analysis for `{research_topic}`. Use web search to verify current regulatory requirements — regulations change frequently and training data is not reliable here.

## Analysis sequence

### 1. Announce and search

Tell the user you're beginning regulatory analysis, then run these web searches:

- `{research_topic} regulations compliance requirements`
- `{research_topic} industry standards best practices`
- `data privacy regulations {research_topic}`

Look for official government sources, regulatory agency websites, and industry association guidance. Note effective dates and recent changes — regulatory currency matters.

### 2. Write to document immediately

Append the following structure to the output file, populating each section from your search findings with cited URLs:

```markdown
## Regulatory Requirements

### Applicable Regulations

[Specific regulations with source citations — cite regulatory agency websites and official sources]
_Source: [URL]_

### Industry Standards and Best Practices

[Industry standards analysis]
_Source: [URL]_

### Compliance Frameworks

[Compliance frameworks analysis]
_Source: [URL]_

### Data Protection and Privacy

[Privacy requirements — GDPR, CCPA, and domain-specific requirements]
_Source: [URL]_

### Licensing and Certification

[Licensing requirements and certification standards]
_Source: [URL]_

### Implementation Considerations

[Practical compliance implementation guidance]
_Source: [URL]_

### Risk Assessment

[Regulatory and compliance risk assessment — flag areas of uncertainty or pending regulatory change]
```

### 3. Present and continue

Tell the user regulatory analysis is complete, summarise the key findings in 3–5 bullet points, and present:

`[C] Continue — proceed to technical trends`

## On C (Continue)

Update frontmatter: `stepsCompleted: [1, 2, 3, 4]`

Load `./step-05-technical-trends.md`.
