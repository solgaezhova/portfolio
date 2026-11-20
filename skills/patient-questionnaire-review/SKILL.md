---
name: patient-questionnaire-review
description: Review a patient questionnaire, intake form, health survey, or story-sharing flow against 10 healthcare UX questions (necessity, expectations, privacy, human language, inclusive answer options, save and resume, review and edit, patient control over summaries, next steps, accessibility). Use when the user asks to check, audit, review, critique or improve a patient questionnaire, intake form, medical history form, symptom checker, PROM/PREM survey, consent flow or any digital health form, from screenshots, a URL, a Figma file, a document, a question list or source code.
---

# Patient Questionnaire Review

A patient questionnaire is more than a form. Every answer is part of someone's life, and the questionnaire is often the first step in building trust. When it's designed around the person filling it in, more patients finish it, answers are more accurate, staff spend less time on follow-up calls, and patients feel heard.

This skill checks a questionnaire against 10 questions and returns findings with evidence and recommendations, ordered by priority.

## 1. Gather the material

Work with whatever the user gives you:

- **Screenshots or a PDF:** read every screen in order, including intro, error, save, review and confirmation screens.
- **A live URL:** walk through the flow in a browser if one is available. Try leaving fields empty, entering wrong values, going back, and reloading part way through.
- **Figma:** read the frames for the whole flow, including empty, error and success states.
- **Source code:** find the form definition (schema, JSON, components) and check labels, validation, autosave, review step, submission handling and ARIA usage.
- **A plain list of questions:** review content (questions 1, 4, 5, and parts of 2, 3, 9). Mark flow and UI questions "Can't assess" and say what you'd need to check them.

Before you start, find out (from the material, or ask briefly if it matters and isn't clear):
- Who fills it in: patients, caregivers, people with a diagnosis, people at risk, children/parents?
- What it's for: clinical intake, research, peer support, story sharing, insurance, triage?
- Who sees the answers, and whether anything is published or shared.

The context changes the bar. A story that may be published needs stronger privacy and approval controls than a pre-visit allergy check.

## 2. Evaluate against the 10 questions

Rate each one: **Pass**, **Partial**, **Fail**, or **Can't assess** (with what's missing). For every rating below Pass, quote or point to the exact question, screen or line, and give a concrete fix.

### 1. Is every question necessary?
Ask only what serves a clear purpose.
- Can each question be tied to a use (care decision, eligibility, the story, a legal need)? Flag ones that can't.
- Is anything asked that the organisation already knows (name, date of birth, insurance on file)?
- Are follow-ups conditional, so people only see what applies to them?
- Are sensitive questions (sexuality, mental health, abuse, finances, genetic results) justified by the purpose?
- Is the length reasonable for the setting?

### 2. Do patients know what to expect?
Share the purpose and time needed upfront.
- Does an intro screen say why they're being asked and how long it takes (a realistic time, not "a few minutes" for 40 questions)?
- Is there a progress indicator (section names or steps, not just a bar)?
- Are hard or emotional sections signposted before they start?
- For open-ended or story questions: is there an example of a good answer or a finished result, so people know how much detail to give? (Showing one or two example stories before a story interview helps people see how answers become a complete story and encourages them to share more context.)

### 3. Is privacy clear?
Say who sees their answers and whether they may be published.
- Is it stated, in plain words and before the questions, who sees the answers (care team, researchers, community, public)?
- If anything may be published or shared: is that opt-in, is anonymity offered, and can they withdraw later?
- Are especially sensitive answers marked with how they're protected?
- Is the privacy explanation near the questions, not only in a linked policy?

### 4. Does the language feel human?
Use warm wording and let patients skip painful questions.
- Is the tone warm and plain, not clinical or bureaucratic? Flag jargon, abbreviations and blaming wording ("Did you fail to…", "noncompliant", "suffering from").
- Is the reading level suitable for the audience (aim for about grade 6 to 8 for the general public)?
- Can painful or sensitive questions be skipped without blocking progress? Is that option visible?
- Are questions about loss, diagnosis or trauma introduced gently?
- Is "you" used consistently, and are questions asked one at a time (no double-barrelled questions)?

### 5. Do answer options fit every patient?
Include "Other" or "Prefer not to say" so no one is forced into a box that doesn't fit.
- Do choice lists cover everyone, with "Other (please describe)", "Not sure" and "Prefer not to say" where relevant?
- Are sex, gender, ethnicity, family structure and relationship options inclusive and separate where they should be?
- Do date, number and unit fields allow approximate answers ("about 2015", "I don't know")?
- Are single-choice questions really single-choice? Should any be multi-select?
- Do answer scales have clear, balanced labels?

### 6. Can patients pause and come back?
Save progress automatically and let them know it's saved.
- Are answers saved automatically, with visible confirmation ("Saved just now")?
- Can they leave and come back on another day or device without losing work?
- Is there a session timeout? If so, are they warned, and is work kept?
- Does the browser back button keep answers?

### 7. Can patients review and edit their answers?
Let them check and change everything before submitting.
- Is there a review step showing all answers before submitting?
- Can they jump from the review to any answer, change it, and come back?
- After submitting, can they correct or update answers, or is it clear how to?

### 8. Do patients stay in control of the final result?
If answers are summarised or rewritten, by AI or by staff, let patients review and approve the final version.
- Is any summary, story or note generated from their answers? By whom (AI, staff)?
- Do they see the final version before it's used or published, and can they edit or reject it?
- Is it clear what was changed from their own words?
- Is nothing published or shared without their explicit approval?

### 9. Is it clear what happens next?
Explain how answers will be used and what they mean for their care.
- Does the confirmation screen say what happens next, who will act, and when?
- Does it say what the answers mean for their care (for example "your nurse will review this before your visit")?
- Is there a way to get help or ask questions, and urgent guidance where answers could show risk ("If you're having thoughts of self-harm, call…")?
- Do they get a copy or receipt if useful?

### 10. Is it accessible?
Check readability, contrast, screen-reader support, and clear error messages.
- Text contrast at least 4.5:1 (3:1 for large text and UI components); not relying on colour alone.
- Every input has a visible, programmatic label; groups use fieldset/legend; required fields are marked in text.
- Works by keyboard only, with visible focus and a logical order; touch targets at least 24×24 px (44×44 recommended).
- Error messages say what's wrong and how to fix it, appear next to the field, are announced to screen readers, and keep entered answers.
- Text resizes to 200% without loss; works at 320 px width; no time limits without a way to extend.
- Plain language, and options for other languages if the audience needs them.
Reference WCAG 2.2 AA criteria by number where helpful (e.g. 1.4.3, 3.3.1, 3.3.2, 4.1.2). If you can run checks (axe, Lighthouse, a contrast tool), do; otherwise say which findings come from visual inspection only.

## 3. Write the report

Use this structure:

```markdown
# Patient questionnaire review: <name>

**Context:** <who fills it in, purpose, who sees answers>
**Reviewed from:** <screenshots / URL / code / question list>, <what could not be checked>

## Summary
<2–4 sentences: overall impression, biggest strengths, the most important things to fix.>

| # | Question | Rating |
|---|----------|--------|
| 1 | Every question necessary | Partial |
| … | … | … |

## Top recommendations
1. **<Fix>** — <why it matters for patients, and the expected effect: completion, accuracy, fewer follow-up calls, trust>. (Q<n>)
2. …
(3–5 items, highest impact first. Privacy, safety, patient control and blocking accessibility issues come first.)

## Detailed findings
### 1. Is every question necessary? — <Rating>
**What works:** …
**Issues:**
- <Evidence: quoted question / screen / file:line> → <Recommendation, with suggested wording where useful>

… (all 10)

## What I'd add
<Optional: issues outside the 10 questions, e.g. performance on slow phones, caregiver/proxy completion, language support.>
```

Guidelines:
- Be specific: quote the actual wording and propose replacement wording.
- Note what already works well. Teams act on reviews that are fair.
- Prioritise by harm to the patient, not by how easy it is to fix.
- Don't invent behaviour you couldn't observe; use "Can't assess" and say what you'd need.
- Write in plain language. The team reading it may include clinicians and founders, not only designers.

---
*Based on the 10 questions in "Practical Healthcare UX Insights #1: A Patient Questionnaire Is More Than a Form. It's Their Story."*
