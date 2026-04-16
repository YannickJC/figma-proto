# Component Conventions Reference

## File Structure
Components are organized by function:
- `src/app/components/ui/` — Reusable design system primitives (shadcn/ui-based)
- `src/app/components/serp/` — SERP-specific feature components
- `src/app/components/figma/` — Figma integration helpers
- `src/app/components/` — App-level shared components (header, modals, drawers)
- `src/app/pages/` — Page-level components
- `src/app/layouts/` — Layout wrappers

## Standard Component Template

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

function MyComponent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="my-component"
      className={cn("base-tailwind-classes", className)}
      {...props}
    />
  );
}

export { MyComponent };
```

## Variant Component Template

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const myComponentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      secondary: "variant-classes",
    },
    size: {
      default: "size-classes",
      sm: "size-classes",
      lg: "size-classes",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function MyComponent({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof myComponentVariants>) {
  return (
    <div
      data-slot="my-component"
      className={cn(myComponentVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { MyComponent, myComponentVariants };
```

## Compound Component Template

```tsx
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cn("...", className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("...", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("...", className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("...", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent };
```

## cn() Utility

Located at `src/app/components/ui/lib/utils.ts`:
```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| `@radix-ui/react-*` | Various | Headless accessible primitives |
| `class-variance-authority` | 0.7.1 | Component variant system |
| `tailwind-merge` | 3.0.2 | Tailwind class conflict resolution |
| `clsx` | 2.1.1 | Conditional class composition |
| `motion` | 12.9.4 | Complex animations (Framer Motion) |
| `@phosphor-icons/react` | 2.1.10 | Icon library |
| `lucide-react` | 0.487.0 | Secondary icon library |

## Established Styling Patterns

### Consistent Focus Ring
```
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
```

### Disabled State
```
disabled:pointer-events-none disabled:opacity-50
```

### SVG Child Sizing
```
[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
```

### Radix State Animations
```
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
```

### Drawer/Sheet Slide
```
data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom
```
