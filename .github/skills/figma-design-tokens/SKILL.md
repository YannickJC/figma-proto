---
name: figma-design-tokens
description: "Figma design system token reference for validating components. Use when: checking exact color hex values, semantic token names, typography scales, spacing scales, radius values, or size tokens from the Figma source of truth."
---

# Figma Design Tokens

The authoritative design token reference extracted from the project's Figma Design System (`Design-system/` folder). These are the source of truth for all visual decisions.

## When to Use
- Validating that a component uses the correct semantic token
- Checking exact hex values against Figma specifications
- Verifying spacing, radius, or size values match the design system
- Reviewing light/dark mode color parity

## Token Files

The Figma tokens are organized into these collections:

| Collection | File | Description |
|------------|------|-------------|
| Color Primitives | `Design-system/Color - Primitives/Hex code.tokens.json` | Raw color palette (brand, neutral slate, green, orange, red, blue, purple) |
| Color Semantic (Light) | `Design-system/Color - Semantic/Light mode.tokens.json` | Semantic color roles for light mode |
| Color Semantic (Dark) | `Design-system/Color - Semantic/Dark mode.tokens.json` | Semantic color roles for dark mode |
| Typography | `Design-system/Typography/Mode 1.tokens.json` | Font families, sizes, weights |
| Spacing | `Design-system/Spacing/Mode 1.tokens.json` | Gap/spacing scale |
| Radius | `Design-system/Radius/Mode 1.tokens.json` | Corner radius values |
| Size Primitives | `Design-system/Size  - Primitives/Mode 1.tokens.json` | Raw size scale |
| Size Semantic | `Design-system/Size -  Semantic/Mode 1.tokens.json` | Semantic sizes (icons, width/height) |

## Quick Reference

See the detailed token tables at [./references/token-tables.md](./references/token-tables.md).

## Procedure

1. Read the token tables reference for the relevant category
2. If exact values are needed, read the source JSON file from `Design-system/`
3. Compare component values against the token tables
4. Flag any deviations from the Figma source of truth
