# Design Tokens Reference

## Color Tokens

### Core Palette
| Token | Light Value | Dark Value | Usage |
|-------|------------|------------|-------|
| `--primary` | `#99FF00` | oklch equivalent | Buttons, interactive elements, highlights |
| `--primary-foreground` | `#020617` | oklch equivalent | Text on primary backgrounds |
| `--secondary` | `#1E293B` | oklch equivalent | Muted interactive elements |
| `--secondary-foreground` | `#FFFFFF` | oklch equivalent | Text on secondary backgrounds |
| `--accent` | `#99FF00` | oklch equivalent | Emphasis, same as primary |
| `--accent-foreground` | `#020617` | oklch equivalent | Text on accent backgrounds |
| `--destructive` | `#D90E00` | oklch equivalent | Error/delete states |
| `--background` | `#FFFFFF` | `#020617` | Page background |
| `--foreground` | `#020617` | `#FFFFFF` | Default text |
| `--card` | `#FFFFFF` | `#1E293B` | Card backgrounds |
| `--card-foreground` | `#020617` | oklch equivalent | Text in cards |
| `--muted` | `#F8F0FC` | `#1E293B` | Muted backgrounds |
| `--muted-foreground` | `#647483` | oklch equivalent | Secondary text |
| `--border` | `#E2E8F0` | `#647483` | Borders and dividers |
| `--ring` | derived | derived | Focus ring color |
| `--input` | derived | derived | Input borders |

### Specialized Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--insight-bg` | `#eef5ff` | Market insight section background |
| `--insight-tag-bg` | `#d9e9ff` | Insight badge background |
| `--insight-tag-color` | `#1736B6` | Insight badge text |
| `--highlight-tag-bg` | `#f7ffe4` | Benefits/highlight tag background |

### Chart Colors
| Token | Usage |
|-------|-------|
| `--chart-1` through `--chart-5` | Data visualization palette |

## Typography Tokens

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| `--font-hanken` | `Hanken Grotesk` | Display, headings (h1, h2) |
| `--font-geist` | `Geist` | Body text, UI elements, buttons, inputs |

### Font Sizes
| Token | Value | Usage |
|-------|-------|-------|
| `--text-4xl` | 64px | h1 headings |
| `--text-3xl` | 48px | h2 headings |
| `--text-2xl` | 32px | h3 headings |
| `--text-xl` | 24px | h4 headings |
| `--text-base` | 16px | Body, buttons, default |
| `--text-sm` | 12px | Labels, small text |

### Font Weights
| Value | Name | Usage |
|-------|------|-------|
| 400 | Regular | Body text |
| 500 | Medium | Subtle emphasis |
| 600 | Semibold | Headings, labels |
| 700 | Bold | Strong emphasis |

## Spacing

Standard spacing scale (Tailwind): 4px (1), 8px (2), 12px (3), 16px (4), 20px (5), 24px (6), 32px (8)

| Context | Standard Value |
|---------|---------------|
| Card padding | 16px (`p-4`) |
| Component gaps | 8px, 12px, 16px, 24px |
| Page horizontal padding | 16px (`px-4`) |
| Card bottom margin | 24px (`mb-6`) |

## Border Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 12px | Standard component radius |
| `--radius-card` | 16px | Card corners |
| `--radius-sm` | 8px | Small elements |
| `--radius-md` | 10px | Medium elements |
| `--radius-lg` | 12px | Large elements (same as base) |
| `--radius-xl` | 16px | Extra large elements |

## Elevation
| Token | Value |
|-------|-------|
| `--elevation-sm` | `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` |
