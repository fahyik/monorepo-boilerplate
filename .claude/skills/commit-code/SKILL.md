---
name: commit-code
description: Commit staged and unstaged changes, grouped by app/package scope with conventional commit messages
disable-model-invocation: true
allowed-tools: Bash(git *)
---

## Context

- Current branch: !`git branch --show-current`
- Current git diff: !`git diff HEAD`
- Current git status: !`git status`

Print the current branch name clearly.

Analyse the staged and unstaged changes. Group the changes by app or package they belong to:

- `apps/api` → scope `api`
- `apps/mobile` → scope `mobile`
- `apps/landing` → scope `landing`
- `apps/supabase` → scope `supabase`
- `packages/interfaces` → scope `interfaces`
- `packages/logger` → scope `logger`
- `packages/ui` → scope `ui`
- `packages/eslint-config` → scope `eslint-config`
- `packages/typescript-config` → scope `typescript-config`
- `packages/jest-presets` → scope `jest-presets`
- Root-level changes → no scope, leave blank

For each group of related changes, create a separate commit with the appropriate type prefix:

- `feat(scope):` for new features
- `fix(scope):` for bug fixes
- `chore(scope):` for maintenance, config, dependency updates, refactors

Stage only the files for that group, then commit. Repeat for each group.

When committing, use `git commit -m "subject" -m "Co-Authored-By: Claude <noreply@anthropic.com>"` — do NOT use heredocs or `$()` substitution.

Rules:

- Do NOT push
- Do NOT use `git add .` or `git add -A` — stage files explicitly by path
- Keep commit subject lines under 72 characters (including the prefix)
- Keep commit messages concise and in lowercase after the prefix
- If changes span multiple scopes but are tightly related (e.g. a shared type change + consumer update), use the primary affected scope
