# Domain Research Step 6: Research Synthesis and Completion

## Rules

- Supplement your synthesis with any final web searches needed to fill gaps or verify currency.
- Read this file completely before taking any action.
- This step produces the final, comprehensive research document.
- Only mark complete when the user selects [C].

## Context

- Research topic: `{research_topic}`
- Research goals: `{research_goals}`
- Output file: already established in context — all prior sections have been appended.
- Date: `{date}`

## Your task

Produce a comprehensive, authoritative research document on `{research_topic}` — compelling narrative introduction, detailed table of contents, executive summary, and integrated synthesis of all prior research sections.

## Synthesis sequence

### 1. Final gap search (if needed)

If any section feels thin or the currency of a key fact is uncertain, run one final search before synthesising:

- `{research_topic} significance importance [current year]`

### 2. Build the complete document

Prepend the following structure at the top of the output file (before the existing section content), replacing the `[Research overview and methodology will be appended here]` placeholder in `## Research Overview`. Also append the full synthesis sections below the existing content.

The document should flow as follows:

```markdown
# [Compelling Title]: Comprehensive {research_topic} Domain Research

## Executive Summary

[2–3 paragraph summary of the most critical findings and strategic implications]

**Key findings:**

- [Most significant market dynamics]
- [Critical regulatory considerations]
- [Important technology trends]
- [Strategic implications]

**Strategic recommendations:**

- [Top 3–5 actionable recommendations grounded in the research]

## Table of Contents

1. Research Introduction and Methodology
2. {research_topic} Industry Overview and Market Dynamics
3. Technology Landscape and Innovation Trends
4. Regulatory Framework and Compliance Requirements
5. Competitive Landscape and Ecosystem Analysis
6. Strategic Insights and Domain Opportunities
7. Implementation Considerations and Risk Assessment
8. Future Outlook and Strategic Planning
9. Research Methodology and Source Verification

## 1. Research Introduction and Methodology

### Research Significance

[Why this research matters now — strategic importance with current context]
_Source: [URL]_

### Research Methodology

- **Scope**: [comprehensive coverage areas]
- **Data sources**: [authoritative sources and verification approach]
- **Time period**: current focus with historical context where relevant
- **Geographic coverage**: [regional or global scope]

### Research Goals and Objectives

**Original goals:** {research_goals}

**Achieved objectives:**

- [Goal 1 — achievement with supporting evidence]
- [Goal 2 — achievement with supporting evidence]
- [Additional insights uncovered during research]

## 2. {research_topic} Industry Overview and Market Dynamics

### Market Size and Growth Projections

[Synthesised from Step 2 — integrate with any new context]
_Market Size: [current valuation]_
_Growth Rate: [CAGR and projections]_
_Market Drivers: [key growth factors]_
_Source: [URL]_

### Industry Structure and Value Chain

[Complete industry structure analysis]
_Value Chain Components: [detailed breakdown]_
_Industry Segments: [market segmentation analysis]_
_Economic Impact: [industry economic significance]_
_Source: [URL]_

## 3. Technology Landscape and Innovation Trends

### Current Technology Adoption

[Synthesised from Step 5]
_Emerging Technologies: [key technologies affecting {research_topic}]_
_Adoption Patterns: [adoption rates and patterns]_
_Innovation Drivers: [factors driving technology change]_
_Source: [URL]_

### Digital Transformation Impact

[Technology's impact on {research_topic}]
_Transformation Trends: [major digital transformation patterns]_
_Disruption Opportunities: [technology-driven opportunities]_
_Future Technology Outlook: [emerging technologies and timelines]_
_Source: [URL]_

## 4. Regulatory Framework and Compliance Requirements

### Current Regulatory Landscape

[Synthesised from Step 4]
_Key Regulations: [critical regulatory requirements]_
_Compliance Standards: [industry standards and best practices]_
_Recent Changes: [current regulatory updates and implications]_
_Source: [URL]_

### Risk and Compliance Considerations

[Comprehensive risk assessment]
_Compliance Risks: [major regulatory and compliance risks]_
_Risk Mitigation Strategies: [approaches to manage regulatory risks]_
_Future Regulatory Trends: [anticipated regulatory developments]_
_Source: [URL]_

## 5. Competitive Landscape and Ecosystem Analysis

### Market Positioning and Key Players

[Synthesised from Step 3]
_Market Leaders: [dominant players and strategies]_
_Emerging Competitors: [new entrants and innovative approaches]_
_Competitive Dynamics: [market competition patterns]_
_Source: [URL]_

### Ecosystem and Partnership Landscape

[Complete ecosystem analysis]
_Ecosystem Players: [key stakeholders and relationships]_
_Partnership Opportunities: [strategic collaboration potential]_
_Supply Chain Dynamics: [supply chain structure and risks]_
_Source: [URL]_

## 6. Strategic Insights and Domain Opportunities

### Cross-Domain Synthesis

[Strategic insights from integrating all research sections]
_Market-Technology Convergence: [how technology and market forces interact]_
_Regulatory-Strategic Alignment: [how the regulatory environment shapes strategy]_
_Competitive Positioning Opportunities: [strategic advantages based on research]_
_Source: [URL]_

### Strategic Opportunities

[High-value opportunities identified through the research]
_Market Opportunities: [specific market entry or expansion opportunities]_
_Technology Opportunities: [technology adoption or innovation opportunities]_
_Partnership Opportunities: [strategic collaboration potential]_
_Source: [URL]_

## 7. Implementation Considerations and Risk Assessment

### Implementation Framework

[Practical implementation guidance]
_Implementation Timeline: [recommended phased approach]_
_Resource Requirements: [key resources and capabilities needed]_
_Success Factors: [critical success factors]_
_Source: [URL]_

### Risk Management and Mitigation

[Comprehensive risk assessment]
_Implementation Risks: [major risks and mitigation approaches]_
_Market Risks: [market-related risks and contingency plans]_
_Technology Risks: [technology adoption and implementation risks]_
_Source: [URL]_

## 8. Future Outlook and Strategic Planning

### Future Trends and Projections

[Forward-looking analysis]
_Near-term Outlook: [1–2 year projections]_
_Medium-term Trends: [3–5 year expected developments]_
_Long-term Vision: [5+ year strategic outlook]_
_Source: [URL]_

### Strategic Recommendations

[Comprehensive strategic recommendations]
_Immediate Actions: [priority actions for the next 6 months]_
_Strategic Initiatives: [key initiatives for 1–2 years]_
_Long-term Strategy: [strategic positioning for 3+ years]_
_Source: [URL]_

## 9. Research Methodology and Source Verification

### Source Documentation

_Primary Sources: [key authoritative sources]_
_Secondary Sources: [supporting research and analysis]_
_Web Search Queries: [complete list of queries used]_

### Research Quality Assurance

_Source Verification: all factual claims verified with multiple sources_
_Confidence Levels: noted where data is uncertain or contested_
_Limitations: [research limitations and areas for further investigation]_

---

## Research Conclusion

### Summary of Key Findings

[Comprehensive summary of the most important findings]

### Strategic Impact Assessment

[Assessment of strategic implications for {research_topic}]

### Next Steps

[Specific next steps for leveraging this research]

---

**Research completion date:** {date}
**Source verification:** all facts cited with sources

_This research document serves as an authoritative reference on {research_topic} and provides strategic insights for informed decision-making._
```

### 3. Replace Research Overview placeholder

In the `## Research Overview` section near the top of the document, replace `[Research overview and methodology will be appended here]` with a concise 2–3 paragraph overview summarising the research scope, key findings, and a pointer to the full executive summary.

### 4. Present and complete

Tell the user the comprehensive research document is complete, highlight the top 3 strategic findings, and present:

`[C] Complete — finalise the research document`

## On C (Complete)

Update frontmatter: `stepsCompleted: [1, 2, 3, 4, 5, 6]`

Tell the user the research document is saved to the output file path and the workflow is complete.
