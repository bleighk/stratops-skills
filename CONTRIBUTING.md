# Contributing

## Adding a skill

Each skill lives in `skills/<name>/` and requires:

- `SKILL.md` — frontmatter with `name` and `description`; body contains the skill instructions

Name skills in lowercase kebab-case. Keep the `description` field in `SKILL.md` tight — it is used for skill matching and poor descriptions cause missed triggers.

## Modifying an existing skill

- Test trigger phrases before and after your change to confirm matching behaviour is unchanged (or intentionally improved)
- Update `metadata.version` in `SKILL.md` on any behavioural change
- Document non-obvious design choices in the skill body, not in commit messages

## Submitting changes

Open a pull request against `main`. Include:
- What changed and why
- Any trigger phrases you tested

## Reporting issues

Raise an issue in the repo.
