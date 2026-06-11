# CLAUDE.md

## What this repo is

A Claude Code plugin containing four strategy skills. Each skill is defined in `skills/<name>/SKILL.md`.

## Plugin structure

```
.claude-plugin/
  plugin.json            — plugin manifest
  marketplace.json       — marketplace listing
skills/
  brainstorm/            — interactive ideation via 100+ creative techniques
  research/              — domain / market / competitive research
  hypothesis/            — MECE hypothesis tree builder
  storyline/             — Pyramid Principle executive communications
```

## Key dependencies

- **visualize MCP server** — required at runtime by `hypothesis` and `storyline` for widget rendering. Skills degrade gracefully without it but do not render interactive output.

## Skill authoring conventions

- Skill descriptions (in `SKILL.md` frontmatter) are used for trigger matching — keep them specific and include key trigger phrases
- Use `references/` subdirectories for large reference documents loaded conditionally by the skill
- Version bump `metadata.version` on any behavioural change
- Never hardcode usernames or personal names in skill instructions — use `the user` instead
