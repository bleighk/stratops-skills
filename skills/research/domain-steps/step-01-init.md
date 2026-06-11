# Domain Research Step 1: Scope Confirmation

## Rules

- Never generate content before the user confirms scope.
- Read this file completely before taking any action.
- This step is scope confirmation only — no web research yet.

## Context

- Research topic: `{research_topic}` — already established from the opening conversation.
- Research goals: `{research_goals}` — already established.
- Output file already created — do not re-create it.

## Your task

Confirm the domain research scope and approach with the user.

## Scope confirmation

Present the following to the user, substituting `{research_topic}` and `{research_goals}`:

---

"I understand you want to conduct **domain research** for **{research_topic}** with these goals: {research_goals}

**Domain research scope:**

- **Industry analysis** — market structure, market dynamics, and competitive landscape
- **Regulatory environment** — compliance requirements, regulations, and standards
- **Technology patterns** — innovation trends, technology adoption, and digital transformation
- **Economic factors** — market size, growth trends, and economic impact
- **Supply chain** — value chain analysis and ecosystem relationships

**Research approach:**

- All claims verified against current public sources
- Multi-source validation for critical domain claims
- Confidence levels noted for uncertain information

Does this scope align with your goals?

[C] Continue — begin domain research with this scope"

---

## On C (Continue)

Append the following to the output file, substituting all variables:

```markdown
## Domain Research Scope Confirmation

**Research topic:** {research_topic}
**Research goals:** {research_goals}

**Scope:**

- Industry analysis — market structure, competitive landscape
- Regulatory environment — compliance requirements, legal frameworks
- Technology trends — innovation patterns, digital transformation
- Economic factors — market size, growth projections
- Supply chain — value chain, ecosystem relationships

**Methodology:**

- All claims verified against current public sources
- Multi-source validation for critical domain claims
- Confidence levels applied to uncertain information

**Scope confirmed:** {date}
```

Then update frontmatter: `stepsCompleted: [1]`

Load `./step-02-domain-analysis.md`.
