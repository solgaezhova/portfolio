# Claude skills

Free [Claude skills](https://docs.claude.com/en/docs/claude-code/skills) for healthcare UX work. Anyone can use them.

| Skill | What it does |
| --- | --- |
| [patient-questionnaire-review](patient-questionnaire-review/SKILL.md) | Reviews a patient questionnaire, intake form or digital health form against 10 healthcare UX questions, and writes a prioritised report with evidence and suggested wording. Works from screenshots, PDFs, URLs, Figma, source code or a plain list of questions. |

## How to use a skill

**Claude Code (all your projects):** copy the skill's folder into `~/.claude/skills/`:

```bash
mkdir -p ~/.claude/skills/patient-questionnaire-review
curl -o ~/.claude/skills/patient-questionnaire-review/SKILL.md https://raw.githubusercontent.com/solgaezhova/portfolio/main/skills/patient-questionnaire-review/SKILL.md
```

For a single project, put the folder in that project's `.claude/skills/` instead.

Then ask Claude to "review this patient questionnaire" and attach the form, or type `/patient-questionnaire-review`.

**Claude.ai or the Claude app:** download the skill's folder, zip it, and upload it under **Settings → Capabilities → Skills**.

## About

The review questions come from the article *Practical Healthcare UX Insights #1: A Patient Questionnaire Is More Than a Form. It's Their Story.* Suggestions for the list are welcome: open an issue.
