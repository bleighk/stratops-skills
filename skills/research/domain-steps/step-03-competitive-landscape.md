# Domain Research Step 3: Competitive Landscape

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

Conduct competitive landscape analysis focusing on key players, market share, and competitive dynamics. Use web search to verify and supplement current facts.

## Analysis sequence

### 1. Announce and search

Tell the user you're beginning competitive landscape analysis, then run these web searches in parallel:

- `{research_topic} key players market leaders`
- `{research_topic} market share competitive landscape`
- `{research_topic} competitive strategies differentiation`
- `{research_topic} entry barriers competitive dynamics`

Look for competitive intelligence reports, company annual reports and investor presentations, and market share data. Identify the dominant players, their strategies, and how they differentiate.

### 2. Write to document immediately

Append the following structure to the output file, populating each section from your search findings with cited URLs:

```markdown
## Competitive Landscape

### Key Players and Market Leaders

[Key players analysis]
_Market Leaders: [dominant players and positions]_
_Major Competitors: [significant competitors and specialties]_
_Emerging Players: [new entrants and innovative companies]_
_Global vs Regional: [geographic distribution of key players]_
_Source: [URL]_

### Market Share and Competitive Positioning

[Market share analysis]
_Market Share Distribution: [current breakdown]_
_Competitive Positioning: [how players position themselves]_
_Value Proposition Mapping: [different value propositions across players]_
_Customer Segments Served: [different customer bases by competitor]_
_Source: [URL]_

### Competitive Strategies and Differentiation

[Competitive strategies analysis]
_Cost Leadership: [players competing on price and efficiency]_
_Differentiation: [players competing on unique value]_
_Niche/Focus: [players targeting specific segments]_
_Innovation Approaches: [how different players innovate]_
_Source: [URL]_

### Business Models and Value Propositions

[Business models analysis]
_Primary Business Models: [how competitors make money]_
_Revenue Streams: [different monetisation approaches]_
_Value Chain Integration: [vertical integration vs partnership models]_
_Customer Relationship Models: [how competitors build loyalty]_
_Source: [URL]_

### Competitive Dynamics and Entry Barriers

[Competitive dynamics analysis]
_Barriers to Entry: [obstacles for new entrants]_
_Competitive Intensity: [level of rivalry]_
_Market Consolidation Trends: [M&A activity and concentration]_
_Switching Costs: [cost to customers of switching providers]_
_Source: [URL]_

### Ecosystem and Partnership Analysis

[Ecosystem analysis]
_Supplier Relationships: [key supplier partnerships and dependencies]_
_Distribution Channels: [how competitors reach customers]_
_Technology Partnerships: [strategic technology alliances]_
_Ecosystem Control: [who controls key parts of the value chain]_
_Source: [URL]_
```

### 3. Present and continue

Tell the user competitive landscape analysis is complete, summarise the key findings in 3–5 bullet points, and present:

`[C] Continue — proceed to regulatory focus`

## On C (Continue)

Update frontmatter: `stepsCompleted: [1, 2, 3]`

Load `./step-04-regulatory-focus.md`.
