# Domain Research Step 2: Industry Analysis

## Rules

- Never generate content without web search verification — do not rely on training data alone.
- Read this file completely before taking any action.
- Write content to the output document immediately after generating it.
- Only proceed when the user selects [C].

## Context

- Research topic: `{research_topic}`
- Research goals: `{research_goals}`
- Output file path: already established in context.

## Your task

Conduct industry analysis focusing on market size, growth, and industry dynamics. Use web search to verify and supplement current facts.

## Analysis sequence

### 1. Announce and search

Tell the user you're beginning industry analysis, then run these web searches in parallel:

- `{research_topic} market size value`
- `{research_topic} market growth rate dynamics`
- `{research_topic} market segmentation structure`
- `{research_topic} industry trends evolution`

Look for recent market research reports, industry association data, and authoritative secondary sources. Identify market size, growth rates, segmentation data, and trend patterns.

### 2. Write to document immediately

Append the following structure to the output file, populating each section from your search findings with cited URLs:

```markdown
## Industry Analysis

### Market Size and Valuation

[Market size analysis]
_Total Market Size: [current valuation]_
_Growth Rate: [CAGR and projections]_
_Market Segments: [size and value of key segments]_
_Economic Impact: [economic contribution and value creation]_
_Source: [URL]_

### Market Dynamics and Growth

[Market dynamics analysis]
_Growth Drivers: [key factors driving growth]_
_Growth Barriers: [factors limiting expansion]_
_Cyclical Patterns: [industry seasonality and cycles]_
_Market Maturity: [life cycle stage]_
_Source: [URL]_

### Market Structure and Segmentation

[Market structure analysis]
_Primary Segments: [key segments and characteristics]_
_Geographic Distribution: [regional variations]_
_Vertical Integration: [supply chain structure]_
_Source: [URL]_

### Industry Trends and Evolution

[Industry trends analysis]
_Emerging Trends: [current developments]_
_Historical Evolution: [industry development over recent years]_
_Technology Integration: [how technology is changing the industry]_
_Future Outlook: [projected developments]_
_Source: [URL]_

### Competitive Dynamics

[Competitive dynamics analysis]
_Market Concentration: [level of consolidation]_
_Competitive Intensity: [degree of competition]_
_Barriers to Entry: [obstacles for new entrants]_
_Innovation Pressure: [rate of innovation and change]_
_Source: [URL]_
```

### 3. Present and continue

Tell the user industry analysis is complete, summarise the key findings in 3–5 bullet points, and present:

`[C] Continue — proceed to competitive landscape`

## On C (Continue)

Update frontmatter: `stepsCompleted: [1, 2]`

Load `./step-03-competitive-landscape.md`.
