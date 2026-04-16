# Figma Design Token Tables

Extracted from the `Design-system/` Figma token files. These are the source of truth.

---

## Color Primitives

### Brand Primary (Lime-Green)
| Token | Hex | Usage |
|-------|-----|-------|
| `brand/primary/50` | `#F7FFE4` | Lightest brand tint, subtle highlights |
| `brand/primary/100` | `#EDFFC4` | Light brand tint |
| `brand/primary/200` | `#DBFF90` | Light brand |
| `brand/primary/300` | `#BFFF50` | Medium brand |
| `brand/primary/400` | `#99FF00` | **Primary brand color** — buttons, accents |
| `brand/primary/500` | `#84E600` | Darker brand |
| `brand/primary/600` | `#65B800` | Darker brand |
| `brand/primary/700` | `#4C8B00` | Dark brand |
| `brand/primary/800` | `#3E6D07` | Darker brand |
| `brand/primary/900` | `#355C0B` | Very dark brand |
| `brand/primary/950` | `#193400` | Darkest brand |

### Neutral (Slate)
| Token | Hex | Usage |
|-------|-----|-------|
| `neutral/white` | `#FFFFFF` | Pure white |
| `neutral/transparent` | `#FFFFFF` (alpha 0) | Transparent |
| `neutral/transparent-light` | `#020617` (alpha 0.5) | Light overlay |
| `neutral/transparent-heavy` | `#020617` (alpha 0.8) | Heavy overlay |
| `neutral/slate/50` | `#F8FAFC` | Lightest gray |
| `neutral/slate/100` | `#F1F5F9` | Very light gray |
| `neutral/slate/200` | `#E2E8F0` | Light gray (borders) |
| `neutral/slate/300` | `#CBD5E1` | Medium light gray |
| `neutral/slate/400` | `#94A3B8` | Medium gray |
| `neutral/slate/500` | `#64748B` | Mid gray (muted text) |
| `neutral/slate/600` | `#475569` | Dark gray (subtle text) |
| `neutral/slate/700` | `#334155` | Darker gray |
| `neutral/slate/800` | `#1E293B` | Very dark gray |
| `neutral/slate/900` | `#0F172A` | Near-black |
| `neutral/slate/950` | `#020617` | Darkest (default text/bg) |

---

## Semantic Colors — Light Mode

### Foreground (fg)
| Token | Hex | Alias | Usage |
|-------|-----|-------|-------|
| `fg.default` | `#020617` | slate/950 | Primary text |
| `fg.subtle` | `#475569` | slate/600 | Secondary text |
| `fg.muted` | `#64748B` | slate/500 | Muted/tertiary text |
| `fg.inverse` | `#FFFFFF` | white | Text on dark backgrounds |
| `fg.inverse-subtle` | `#CBD5E1` | slate/300 | Subtle text on dark backgrounds |
| `fg.brand` | `#99FF00` | primary/400 | Brand-colored text |
| `fg.on-brand` | `#020617` | slate/950 | Text on brand backgrounds |
| `fg.disabled` | `#94A3B8` | slate/400 | Disabled text |
| `fg.success` | `#067537` | Green/800 | Success text |
| `fg.warning` | `#94360C` | Orange/800 | Warning text |
| `fg.error` | `#D90E00` | Red/700 | Error text |
| `fg.error-on-red` | `#FFFFFF` | white | Text on error backgrounds |
| `fg.info` | `#1736B6` | Blue/800 | Info text |
| `fg.links` | `#1442E1` | Blue/700 | Link text |
| `fg.inverse-links` | `#599DFF` | Blue/400 | Links on dark backgrounds |
| `fg.links-visited` | `#7D1AD6` | Purple/700 | Visited link text |
| `fg.inverse-links-visited` | `#BE7EFF` | Purple/400 | Visited links on dark bg |

### Background (bg)
| Token | Hex | Alias | Usage |
|-------|-----|-------|-------|
| `bg.default` | `#FFFFFF` | white | Page background |
| `bg.subtle` | `#F1F5F9` | slate/100 | Subtle sections |
| `bg.muted` | `#F8FAFC` | slate/50 | Muted sections |
| `bg.inverse` | `#020617` | slate/950 | Dark backgrounds |
| `bg.brand` | `#99FF00` | primary/400 | Brand buttons/highlights |
| `bg.brand-subtle` | `#F7FFE4` | primary/50 | Subtle brand bg |
| `bg.success` | `#D5FFE8` | Green/100 | Success background |
| `bg.success-subtle` | `#EDFFF4` | Green/50 | Subtle success bg |
| `bg.warning` | `#FFF0C6` | Orange/100 | Warning background |
| `bg.warning-subtle` | `#FFFAEB` | Orange/50 | Subtle warning bg |
| `bg.error` | `#FFDEDC` | Red/100 | Error background |
| `bg.error-subtle` | `#FFF1F0` | Red/50 | Subtle error bg |
| `bg.info` | `#D9E9FF` | Blue/100 | Info background |
| `bg.info-subtle` | `#EEF5FF` | Blue/50 | Subtle info bg |
| `bg.overlay.transparent` | `#FFFFFF` (alpha 0) | transparent | Transparent overlay |
| `bg.overlay.backdrop` | `#020617` (alpha 0.5) | transparent-light | Modal backdrop |

### Border
| Token | Hex | Alias | Usage |
|-------|-----|-------|-------|
| `border.default` | `#E2E8F0` | slate/200 | Standard borders |
| `border.subtle` | `#F1F5F9` | slate/100 | Subtle borders |
| `border.strong` | `#CBD5E1` | slate/300 | Strong/emphasis borders |
| `border.brand` | `#99FF00` | primary/400 | Brand borders |
| `border.inverse` | `#1E293B` | slate/800 | Borders on dark surfaces |
| `border.focus` | (alias → fg.default) | — | Focus ring border |
| `border.success` | `#00FF6F` | Green/500 | Success borders |
| `border.warning` | `#94360C` | Orange/800 | Warning borders |
| `border.error` | `#D90E00` | Red/700 | Error borders |

---

## Semantic Colors — Dark Mode

### Foreground (fg)
| Token | Hex | Alias |
|-------|-----|-------|
| `fg.default` | `#FFFFFF` | white |
| `fg.subtle` | `#CBD5E1` | slate/300 |
| `fg.muted` | `#94A3B8` | slate/400 |
| `fg.inverse` | `#020617` | slate/950 |

### Background (bg)
| Token | Hex | Alias |
|-------|-----|-------|
| `bg.default` | `#020617` | slate/950 |
| `bg.subtle` | `#1E293B` | slate/800 |
| `bg.muted` | `#0F172A` | slate/900 |
| `bg.inverse` | `#FFFFFF` | white |

---

## Typography

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| `family.standard` | `Geist` | Body text, UI, buttons, inputs |
| `family.accent` | `Hanken Grotesk` | Headings, display, branding |
| `family.mono` | `Geist Mono` | Code, monospaced text |

### Font Sizes
| Token | Value (px) |
|-------|-----------|
| `size.f10` | 10 |
| `size.f12` | 12 |
| `size.f14` | 14 |
| `size.f16` | 16 |
| `size.f18` | 18 |
| `size.f20` | 20 |
| `size.f24` | 24 |
| `size.f28` | 28 |
| `size.f32` | 32 |
| `size.f40` | 40 |
| `size.f48` | 48 |
| `size.f56` | 56 |
| `size.f64` | 64 |

### Font Weights
| Token | Value |
|-------|-------|
| `weight.regular` | 400 |
| `weight.medium` | 500 |
| `weight.semibold` | 600 |
| `weight.bold` | 700 |
| `weight.extrabold` | 800 |

---

## Spacing

| Token | Value (px) | Scope |
|-------|-----------|-------|
| `sp0` | 0 | GAP |
| `sp2` | 2 | GAP |
| `sp4` | 4 | GAP |
| `sp8` | 8 | GAP |
| `sp12` | 12 | GAP |
| `sp16` | 16 | GAP |
| `sp24` | 24 | GAP |
| `sp32` | 32 | GAP |
| `sp40` | 40 | GAP |
| `sp48` | 48 | GAP |
| `sp64` | 64 | GAP |
| `sp80` | 80 | GAP |

---

## Radius

| Token | Value (px) |
|-------|-----------|
| `r0` | 0 |
| `r4` | 4 |
| `r8` | 8 |
| `r12` | 12 |
| `r16` | 16 |
| `r24` | 24 |
| `r-full` | 9999 (pill) |

---

## Size Primitives

| Token | Value (px) |
|-------|-----------|
| `sz0` | 0 |
| `sz2` | 2 |
| `sz4` | 4 |
| `sz8` | 8 |
| `sz12` | 12 |
| `sz16` | 16 |
| `sz20` | 20 |
| `sz24` | 24 |
| `sz28` | 28 |
| `sz32` | 32 |
| `sz36` | 36 |
| `sz40` | 40 |
| `sz48` | 48 |
| `sz64` | 64 |
| `sz80` | 80 |

---

## Size Semantic

### Icon Sizes
| Token | Value (px) | Alias |
|-------|-----------|-------|
| `icon.size.i16` | 16 | sz16 |
| `icon.size.i20` | 20 | sz20 |
| `icon.size.i24` | 24 | sz24 |
| `icon.size.i32` | 32 | sz32 |
| `icon.size.i48` | 48 | sz48 |

### Width & Height
| Token | Value (px) | Alias |
|-------|-----------|-------|
| `icon.width & height.wh0` | 0 | sz0 |
| `icon.width & height.wh2` | 2 | sz2 |
| `icon.width & height.wh4` | 4 | sz4 |
| `icon.width & height.wh8` | 8 | sz8 |
| `icon.width & height.wh12` | 12 | sz12 |
| `icon.width & height.wh16` | 16 | sz16 |
| `icon.width & height.wh20` | 20 | sz20 |

---

## Mapping: Figma Tokens → CSS Variables / Tailwind

| Figma Token | CSS Variable | Tailwind Class |
|-------------|-------------|----------------|
| `fg.default` | `--foreground` | `text-foreground` |
| `fg.muted` | `--muted-foreground` | `text-muted-foreground` |
| `fg.brand` | `--primary` | `text-primary` |
| `bg.default` | `--background` | `bg-background` |
| `bg.muted` | `--muted` | `bg-muted` |
| `bg.brand` | `--primary` | `bg-primary` |
| `bg.inverse` | `--secondary` | `bg-secondary` |
| `border.default` | `--border` | `border-border` |
| `border.focus` | `--ring` | `ring-ring` |
| `fg.error` | `--destructive` | `text-destructive` |
| `family.standard` | `--font-geist` | `font-[family-name:var(--font-geist)]` |
| `family.accent` | `--font-hanken` | `font-[family-name:var(--font-hanken)]` |
