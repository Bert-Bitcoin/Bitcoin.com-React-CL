# Elza Typography Guidelines

## Overview

This document outlines the strict typography guidelines for using the Elza font family (Elza and Elza Narrow) in the Bitcoin.com React Component Library. These rules ensure consistent visual hierarchy and spacing across all components.

---

## Critical Rules

### 1. Line Height: Always `leading-[0.94]` (STRICT)

**All Elza font usage MUST use `leading-[0.94]` for line-height.**

This applies to:
- ✅ All heading elements (h1, h2, h3, etc.) using Elza Narrow font
- ✅ All display text using Elza font
- ✅ All typography tokens (display-xl, heading-xl, heading-lg, heading-md, heading-sm)
- ✅ Any manual usage of `font-['Elza_Narrow']` or `font-['Elza']`

#### Why `0.94`?

The line-height of `0.94` (94% of font-size) creates tight, impactful leading that:
- Enhances visual hierarchy
- Creates strong emphasis for headings
- Maintains design system consistency
- Follows Figma design specifications
- Provides optimal readability for uppercase display text

---

## Implementation Examples

### ✅ Correct Usage

#### Using Typography Tokens (Recommended)
```tsx
// Typography tokens have lineHeight: '0.94' built-in
<h1 className="text-display">Bitcoin Rewards</h1>
<h2 className="text-heading-xl">Get Started Today</h2>
<h3 className="text-heading-lg">Features</h3>
```

#### Manual Elza Usage
```tsx
// Manual usage - MUST include leading-[0.94]
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.94]">
  Bitcoin Rewards
</h1>

// Website section heading
<h2 className="font-['Elza_Narrow'] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]">
  Section Title
</h2>

// Small heading
<h3 className="font-['Elza_Narrow'] text-[20px] uppercase leading-[0.94]">
  Card Title
</h3>
```

#### In Component Files
```tsx
// CTASection.tsx
<h2 className={twMerge(
  'font-["Elza_Narrow"]',
  'text-[32px] md:text-[44px] lg:text-[70px]',
  'uppercase leading-[0.94]',  // ← REQUIRED
  styles.title
)}>
  {title}
</h2>
```

---

### ❌ Incorrect Usage

```tsx
// Missing line-height
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase">
  Bitcoin Rewards
</h1>

// Wrong line-height value (leading-none = 1.0)
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-none">
  Bitcoin Rewards
</h1>

// Wrong line-height value (leading-tight = 1.25)
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-tight">
  Bitcoin Rewards
</h1>

// Wrong line-height value (custom value not 0.94)
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[1.1]">
  Bitcoin Rewards
</h1>
```

---

## Typography Token Specifications

All typography tokens using Elza font have `lineHeight: '0.94'` configured:

### Display Tokens
```typescript
'display-xl': {
  fontFamily: '"Elza Narrow", "Elza", ...',
  fontSize: '56px',
  fontWeight: 900,
  lineHeight: '0.94',  // ← 90% of font-size
  letterSpacing: '-0.01em',
  textTransform: 'uppercase'
}
```

### Heading Tokens
```typescript
'heading-xl': { lineHeight: '0.94', fontSize: '40px', ... }
'heading-lg': { lineHeight: '0.94', fontSize: '32px', ... }
'heading-md': { lineHeight: '0.94', fontSize: '24px', ... }
'heading-sm': { lineHeight: '0.94', fontSize: '20px', ... }
```

**Location:** `src/tokens/defaultTokens.ts`

---

## Component-Specific Guidelines

### Website Section Components

All website section h2 headings use the standard format:

```tsx
<h2 className="font-['Elza_Narrow'] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]">
  {heading}
</h2>
```

**Components:**
- `HeroSection` - h1 headings with `leading-[0.94]`
- `CTASection` - h2 headings with `leading-[0.94]`
- `FeaturesSection` - h2 and h3 headings with `leading-[0.94]`
- `ArticlesSection` - h2 headings with `leading-[0.94]`
- `NewsSection` - h2 headings with `leading-[0.94]`
- `FAQSection` - h2 headings with `leading-[0.94]`
- `LinksSection` - h2 and h3 headings with `leading-[0.94]`
- `CardsSection` - h2 and h3 headings with `leading-[0.94]`
- `HighlightSection` - h2 headings with `leading-[0.94]`

### UI Components

```tsx
// Window component - title
<h2 className="font-['Elza_Narrow'] font-black text-[16px] leading-[0.94] uppercase">
  {title}
</h2>

// DatePicker component - month/year
<div className="font-['Elza_Narrow'] font-black text-[14px] leading-[0.94] uppercase">
  {monthYear}
</div>
```

---

## Capitalization Rule (Always Paired)

**Important:** Elza font MUST always be paired with:
1. ✅ `leading-[0.94]` - Line height
2. ✅ `uppercase` - Text transformation

```tsx
// Both rules applied
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.94]">
  Correct Usage
</h1>
```

See `elza-font-capitalization` rule in `.cursorrules` for full capitalization guidelines.

---

## Validation Checklist

Before committing code with Elza font usage, verify:

- [ ] All Elza font elements have `leading-[0.94]`
- [ ] All Elza font elements have `uppercase`
- [ ] Typography tokens are preferred over manual font declarations
- [ ] No usage of `leading-none`, `leading-tight`, or other line-height values
- [ ] Website section h2 elements follow standard format
- [ ] Storybook examples demonstrate correct usage

---

## Where to Find Elza Usage

**Search pattern:**
```bash
# Find all Elza usage
grep -r "Elza" src/components

# Find Elza with line-height
grep -r "font-\['Elza.*leading-" src/components
```

**Key files:**
- `src/tokens/defaultTokens.ts` - Typography token definitions
- `src/components/*/[Component].tsx` - Component implementations
- `.cursorrules` - Project-wide typography rules

---

## Migration Notes

If you find Elza font usage without `leading-[0.94]`, update it:

```diff
- <h2 className="font-['Elza_Narrow'] text-[70px] uppercase leading-none">
+ <h2 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.94]">
```

**Common migrations:**
- `leading-none` → `leading-[0.94]`
- `leading-[1.05]` → `leading-[0.94]`
- `leading-[1.1]` → `leading-[0.94]`
- `leading-[1.15]` → `leading-[0.94]`
- `leading-[14px]` → `leading-[0.94]`
- Missing line-height → add `leading-[0.94]`

---

## References

- **Figma Design File:** [Web Component Library](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=17998-17298&t=fCYrU0ejGmjVXf4L-1)
- **Typography Tokens:** `src/tokens/defaultTokens.ts`
- **Cursor Rules:** `.cursorrules` (lines 134-182)
- **Font Files:** `src/fonts/Elza-Black.woff2`, `src/fonts/Elza-NarrowBlack.woff2`

---

## Summary

**The Golden Rule:**  
🎯 **Elza font = `uppercase` + `leading-[0.94]`**

No exceptions. This ensures visual consistency, maintains design system integrity, and provides optimal readability across all components.
