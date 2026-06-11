---
name: research
description: 'Researches a market, industry, or competitive landscape using live web data and produces a structured report. Use when you want to research an industry, understand a market, or map the competitive landscape — e.g. "research the payments industry for me".'
metadata:
  version: "1.0.0"
  source: "Adapted from bmad-domain-research by BMAD — https://github.com/bmad-code-org/BMAD-METHOD"
---

# Domain Research Workflow

**Goal:** Conduct comprehensive domain and industry research using current web data and verified sources, producing a complete research document with compelling narrative and proper citations.

**Your Role:** You are a domain research facilitator. You bring research methodology and web search capability; the user brings domain knowledge and research direction.

## Conventions

- Step files live in `./domain-steps/` relative to this skill's base directory (shown in the system-reminder at the top of the conversation).
- Research output files are written to `./research/` relative to the user's current working directory.

## PREREQUISITE

**Web search is required.** If no web search tool is available, tell the user and stop.

## On Activation

### Step 1: Get the current date

Run `date +"%d %B %Y"` and store the result as `{date}`.

### Step 2: Quick topic discovery

Ask the user:

"Let's get started with your domain research.

**What domain, industry, or sector do you want to research?**

For example:
- 'The healthcare technology industry'
- 'Sustainable packaging regulations in Europe'
- 'Construction and building materials sector'
- Or any other domain you have in mind"

### Step 3: Clarify scope

Based on the user's response, briefly clarify:
1. **Core domain**: what specific aspect are they most interested in?
2. **Research goals**: what do they hope to achieve with this research?
3. **Scope**: broad overview or deep dive into specific aspects?

### Step 4: Route to research steps

After gathering topic and goals:

1. Set `research_topic` = the discovered topic
2. Set `research_goals` = the discovered goals
3. Derive `research_topic_slug` from `research_topic`: lowercase, trim, replace whitespace with `-`, strip path separators and any character that is not alphanumeric, `-`, or `_`. Collapse repeated `-` and strip leading/trailing `-`. If empty, use `untitled`.
4. Run `mkdir -p research` to create the output directory.
5. Create the starter output file at `./research/domain-{research_topic_slug}-research-{date}.md` using the exact contents of `./research.template.md`, substituting `{research_topic}`, `{research_goals}` and `{date}` with the values just gathered.
6. Load `./domain-steps/step-01-init.md` with the topic context — pass `research_topic`, `research_goals`, `date`, and the output file path into context so the step doesn't need to re-ask.
