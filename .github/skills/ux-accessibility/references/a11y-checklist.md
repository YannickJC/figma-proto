# Accessibility Checklist

Use this checklist when validating any new or modified component.

## Interactive Elements
- [ ] All buttons use `<button>` or `Button` component (not clickable `<div>`)
- [ ] All links use `<a>` or `Link` component
- [ ] Icon-only buttons have `aria-label` describing the action
- [ ] Custom interactive elements have appropriate `role`
- [ ] All interactive elements are reachable via Tab key

## Forms & Inputs
- [ ] Every input has a visible label OR `aria-label`
- [ ] Error states use `aria-invalid="true"`
- [ ] Error messages linked via `aria-describedby`
- [ ] Required fields marked with `aria-required="true"` or visible indicator
- [ ] Select/Combobox components use Radix primitives

## Focus
- [ ] Focus ring visible on keyboard navigation (`focus-visible:ring-*`)
- [ ] Focus ring uses project tokens: `focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- [ ] No focus trap outside of modals
- [ ] Modal/Dialog traps focus when open
- [ ] Focus returns to trigger on modal close

## Modals & Overlays
- [ ] Escape key closes the modal
- [ ] Background content has `aria-hidden="true"` when modal is open
- [ ] Modal has `role="dialog"` and `aria-modal="true"`
- [ ] Modal has `aria-label` or `aria-labelledby`

## Images & Icons
- [ ] Informative images have descriptive `alt` text
- [ ] Decorative images have `alt=""` or `aria-hidden="true"`
- [ ] SVG icons inside buttons are `aria-hidden="true"` (button has `aria-label`)
- [ ] Phosphor icons: ensure parent element provides accessible name

## Content
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Lists use `<ul>`, `<ol>`, `<li>` elements
- [ ] Navigation uses `<nav>` with `aria-label`
- [ ] Page landmarks: `<header>`, `<main>`, `<footer>` present

## Color & Contrast
- [ ] Text meets WCAG AA contrast ratio (4.5:1 normal, 3:1 large)
- [ ] Information not conveyed by color alone
- [ ] Focus indicators have sufficient contrast

## Motion
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No content flashes more than 3 times per second

## Touch & Mobile
- [ ] Touch targets are at least 44x44px
- [ ] Safe area insets respected: `env(safe-area-inset-*)` where needed
