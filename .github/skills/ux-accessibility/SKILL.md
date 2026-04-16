---
name: ux-accessibility
description: "Validate accessibility (a11y) compliance in UI components. Use when: checking ARIA attributes, keyboard navigation, focus management, screen reader support, color contrast, semantic HTML, or WCAG compliance in new or modified components."
---

# Accessibility Validation

## When to Use
- Reviewing new interactive components for a11y compliance
- Checking ARIA attributes and semantic HTML
- Validating keyboard navigation and focus management
- Ensuring screen reader compatibility

## Procedure

1. Read the [a11y checklist](./references/a11y-checklist.md)
2. Inspect the component against each checklist item
3. Report findings using the Output Format below

## Rules

### Semantic HTML
- Use `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, `<article>` appropriately
- Use `<button>` for interactive actions, not `<div onClick>`
- Use `<a>` for navigation links
- Use headings (`h1`-`h6`) in proper hierarchy

### ARIA Attributes
- Icon-only buttons MUST have `aria-label`
- Decorative images MUST have `alt=""` or `aria-hidden="true"`
- Interactive custom elements need appropriate `role` attributes
- Form inputs MUST have associated `<label>` or `aria-label`
- Loading states should use `aria-busy="true"`
- Error states should use `aria-invalid="true"` with `aria-describedby` linking to error message

### Focus Management
- All interactive elements MUST be keyboard focusable
- Use `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]` for focus rings
- Destructive actions: `focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40`
- Modals/Dialogs MUST trap focus within when open
- Focus MUST return to trigger element when modal closes
- Use `tabIndex` only when necessary; prefer native focusable elements

### Keyboard Navigation
- Escape key MUST close modals/drawers/dialogs (Radix handles this)
- Enter/Space MUST activate buttons
- Arrow keys for menus, tabs, radio groups
- Tab order must follow logical reading order

### Screen Reader Support
- Close buttons MUST include `<span className="sr-only">Close</span>` or equivalent
- Tooltips provide supplementary context
- Status changes should use `aria-live` regions
- Visually hidden text via `sr-only` class for context

### Color Contrast
- Text on backgrounds MUST meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Primary text (`#020617`) on white (`#FFFFFF`): passes AA
- Muted foreground (`#647483`) usage must be verified for contrast
- Interactive states (hover, focus) must maintain sufficient contrast
- Do NOT rely on color alone to convey information

### Motion & Animation
- Respect `prefers-reduced-motion` media query
- Provide `motion-reduce:` Tailwind variants for animated elements
- Avoid auto-playing animations that cannot be paused

## Project Patterns to Follow

These patterns are established in the codebase:
- Radix UI primitives for accessible modal/dialog/tooltip behavior
- `data-slot` attributes on components for testing hooks
- `data-[state=X]:` selectors for state-based styling (Radix pattern)
- `role="separator"` on visual dividers
- `aria-label="Breadcrumb"` on navigation elements

## Output Format

For each issue found:
```
[SEVERITY] Description
  File: path/to/file.tsx
  Line: ~N
  WCAG: <criterion reference if applicable>
  Found: <what was used>
  Expected: <what should be used>
```

Severities: `[ERROR]` (missing ARIA, no keyboard access), `[WARNING]` (could improve), `[INFO]` (best practice suggestion)
