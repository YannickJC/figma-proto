---
name: ux-component-patterns
description: "Validate component structure, composition, and coding patterns. Use when: reviewing new React components for correct architecture, Tailwind usage, shadcn/ui conventions, animation patterns, responsive design, i18n integration, or icon usage."
---

# Component Pattern Validation

## When to Use
- Reviewing new components for architecture compliance
- Checking Tailwind and shadcn/ui conventions
- Validating responsive design, animation, and i18n patterns
- Ensuring consistency with existing codebase patterns

## Procedure

1. Read the [component conventions reference](./references/conventions.md)
2. Inspect the component against each pattern rule
3. Report findings using the Output Format below

## Rules

### Component Structure
- Use functional components with TypeScript
- Include `data-slot="component-name"` on the root element
- Extend native props: `React.ComponentProps<"element">`
- Spread remaining props: `{...props}` on the root element
- Use `cn()` utility from `@/lib/utils` for class merging (twMerge + clsx)

### Variant Pattern (CVA)
- Use `class-variance-authority` (cva) for components with multiple visual variants
- Define `variants` and `defaultVariants`
- Export the `variants` function for reuse (e.g., `buttonVariants`)
- Pattern:
  ```tsx
  const componentVariants = cva("base-classes", {
    variants: { variant: {...}, size: {...} },
    defaultVariants: { variant: "default", size: "default" }
  });
  ```

### Compound Components
- Use composition pattern for complex components (Card, Dialog, etc.)
- Each sub-component gets its own `data-slot`
- Parent provides layout, children provide content

### Polymorphism
- Use `asChild` prop pattern via `@radix-ui/react-slot` for polymorphic rendering
- Prefer `asChild` over `as` prop or render props

### Tailwind Usage
- Prefer Tailwind utility classes over inline styles
- Use semantic token colors: `bg-primary`, `text-foreground`, `border-border`
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Use state variants: `hover:`, `focus:`, `disabled:`, `data-[state=X]:`
- Use `[&_svg]:` prefix for child SVG styling
- Avoid mixing inline `style={}` with Tailwind classes for the same properties

### Responsive Design
- Mobile-first approach (base styles = mobile, breakpoints = larger)
- Breakpoint: `MOBILE_BREAKPOINT = 768px` (used by `useIsMobile` hook)
- Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Support safe area insets: `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`
- Use container queries (`@container`) for component-level responsiveness
- Max content width: `max-w-5xl mx-auto`

### Animation Patterns
- **Simple transitions**: Tailwind classes (`transition-all`, `transition-colors`, `duration-200`)
- **Complex animations**: `motion/react` (Framer Motion) with `AnimatePresence`
- **Radix animations**: `data-[state=open]:fade-in-0`, `data-[state=closed]:fade-out-0`
- Duration conventions: UI = instant/200ms, Drawer = 300ms close/500ms open
- ALWAYS respect `prefers-reduced-motion`

### Icon Usage
- **Primary**: `@phosphor-icons/react` — use named imports with `weight` prop
- **Secondary**: `lucide-react` — for Check, Chevron, X icons
- Icon sizing: `size={16|20|24}` prop, or Tailwind `size-4`
- Icon colors: Use CSS variable references `color="var(--foreground)"`
- In buttons: Icon wrapped alongside text, parent has `[&_svg]:size-4`
- Icon-only buttons: 40x40px flex container with centered icon

### i18n Integration
- ALL user-facing text MUST use the `t()` function from `useI18n()`
- Translation keys follow dot notation: `"section.subsection.key"`
- Parameterized translations: `t("key", { param: value })`
- Supported locales: `en`, `fr`, `de`
- New text requires entries in ALL locale translation objects in `translations.ts`

### Overlay Components
- Use Radix UI primitives (Dialog, Drawer, Sheet, Popover)
- Portal-based rendering for proper stacking
- Backdrop overlay with `bg-black/80` or similar
- Z-index hierarchy: Header `z-40`, Modals `z-50`

### Error Handling & Fallbacks
- Images: Use `ImageWithFallback` or handle `onError` with fallback UI
- Avatars: `CompanyAvatar` falls back to letter-based avatar on logo load failure
- Data: Skeleton loaders for async content (`job-card-skeleton.tsx` pattern)

## Output Format

For each issue found:
```
[SEVERITY] Description
  File: path/to/file.tsx
  Line: ~N
  Found: <what was used>
  Expected: <what should be used>
```

Severities: `[ERROR]` (breaks convention), `[WARNING]` (inconsistency), `[INFO]` (improvement suggestion)
