# Strategy & Ops Skills

A collection of strategy skills covering a structured problem-solving toolkit commonly used by management consulting firms (e.g., McKinsey, BCG, Bain). Plugin suite covers: domain research, structured brainstorming, MECE hypothesis trees, and Pyramid Principle executive communications.

## Skills

### /brainstorm

Guides you through a structured ideation session using proven creative techniques. Helps you generate a large volume of ideas before narrowing down — useful for solving problems, exploring opportunities, or unblocking creative thinking.

**Invoke:** `/brainstorm` or "help me brainstorm [topic]"

Adapted from [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD).

### /research

Researches a market, industry, or competitive landscape using live web data and produces a structured report. Covers market size, competitors, regulations, and technology trends.

**Invoke:** `/research` or "research [topic] for me"

Adapted from [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD).

### /hypothesis

Helps you structure a strategic question into a clear, testable framework before jumping to answers. Useful when you need to frame a business problem, build an analytical plan, or prepare a recommendation.

**Invoke:** `/hypothesis` or "help me structure [question]"

### /storyline

Turns your ideas or analysis into a clear, executive-ready narrative using the Pyramid Principle — conclusion first, supported by evidence. Useful for briefing notes, board papers, and presentations.

**Invoke:** `/storyline` or "help me write a briefing on [topic]"

## Limitations

- `research` requires web search tools. Without them the skill will abort at startup.
- `hypothesis` and `storyline` widget rendering requires the `visualize` MCP server. Without it, both skills still run but will not produce the interactive output.
- `brainstorm` is optimised for long ideation sessions.

