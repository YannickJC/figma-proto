---
name: ux-design-system
description: "Validate visual elements against the project design system. Use when: checking colors, typography, spacing, border radius, elevation, theming tokens, dark mode support, or design token consistency in new or modified components."
---

# Design System Validation

## When to Use
- Validating that new components use correct design tokens
- Checking color, typography, spacing, and border radius compliance
- Ensuring dark mode support is correctly implemented
- Reviewing theme token usage vs hardcoded values

## Procedure

1. **Read the design token reference** at [./references/tokens.md](./references/tokens.md)
2. Inspect the component for violations of design system rules
3. Report findings using the Output Format below

## Rules

### Colors
- NEVER use hardcoded color values (`#FF0000`, `rgb(...)`, `rgba(...)`)
- ALWAYS use CSS variable tokens: `var(--primary)`, `var(--foreground)`, `var(--muted)`, etc.
- In Tailwind classes, use semantic token names: `bg-primary`, `text-foreground`, `border-border`
- Chart colors use `--chart-1` through `--chart-5`
- Specialized colors: `--insight-bg`, `--insight-tag-bg`, `--insight-tag-color`, `--highlight-tag-bg`

### Typography
- Display/Headings: `Hanken Grotesk` via `font-hanken` / `var(--font-hanken)`
- Body/UI text: `Geist` via `font-geist` / `var(--font-geist)`
- Use size tokens: `--text-4xl` (64px), `--text-3xl` (48px), `--text-2xl` (32px), `--text-xl` (24px), `--text-base` (16px), `--text-sm` (12px)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Avoid `fontWeight: "var(--font-weight-semibold)" as any` pattern — use typed alternatives

### Spacing
- Use Tailwind spacing utilities: `p-4`, `gap-3`, `mx-4`, `mb-6`
- Prefer Tailwind over inline `style={{ padding: "16px" }}`
- Standard spacing scale: 4px, 8px, 12px, 16px, 24px, 32px

### Border Radius
- `--radius`: 12px (standard), `--radius-card`: 16px (cards)
- Derived: `--radius-sm` (8px), `--radius-md` (10px), `--radius-lg` (12px), `--radius-xl` (16px)
- Use Tailwind: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`

### Elevation
- Use `--elevation-sm` for subtle shadows
- Avoid custom box-shadow values; extend the token system if needed

### Dark Mode
- MUST provide dark mode variants for all color usages
- Use `dark:` Tailwind prefix or `.dark` CSS class selectors
- All color tokens must have dark-mode counterparts in theme.css

## Output Format

For each issue found:
```
[SEVERITY] Description
  File: path/to/file.tsx
  Line: ~N
  Found: <what was used>
  Expected: <what should be used>
```

Severities: `[ERROR]` (hardcoded values, wrong tokens), `[WARNING]` (inconsistency, missing dark mode), `[INFO]` (suggestion)
