# Elza Line Height Update Summary

**Date:** December 17, 2025  
**Change:** Standardized all Elza font usage to use `leading-[0.90]` line-height across the entire component library.

---

## 🎯 Objective

Ensure consistent visual hierarchy and tight leading for all Elza font usage by enforcing `leading-[0.90]` (90% of font-size) as the standard line-height for display and heading typography.

---

## ✅ Changes Made

### 1. Component Files Updated

#### Website Section Components
- ✅ `src/components/hero-section/HeroSection.tsx` - Already had `leading-[0.90]` ✓
- ✅ `src/components/cta-section/CTASection.tsx` - Already had `leading-[0.90]` ✓
- ✅ `src/components/features-section/FeaturesSection.tsx` - Updated h2 and h3 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/articles-section/ArticlesSection.tsx` - Updated h2 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/news-section/NewsSection.tsx` - Updated h2 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/faq-section/FAQSection.tsx` - Updated h2 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/links-section/LinksSection.tsx` - Updated h2 and h3 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/cards-section/CardsSection.tsx` - Updated h2 and h3 from `leading-none` → `leading-[0.90]`
- ✅ `src/components/highlight-section/HighlightSection.tsx` - Updated h2, removed conflicting `lg:leading-[0.94]` → `leading-[0.90]`

#### UI Components
- ✅ `src/components/window/Window.tsx` - Updated title from `leading-none` → `leading-[0.90]`
- ✅ `src/components/datepicker/DatePicker.tsx` - Updated month/year from `leading-[14px]` → `leading-[0.90]`
- ✅ `src/components/illustration/Example.tsx` - Updated h1 from `leading-none` → `leading-[0.90]`

#### Story Files
- ✅ `src/components/window/Window.stories.tsx` - Updated all h3 elements (5 instances) → `leading-[0.90]`

#### Documentation
- ✅ `src/components/illustration/USAGE_EXAMPLES.md` - Updated example code from `leading-none` → `leading-[0.90]`

**Note:** PieChart and TreeMap story files already use `text-heading-sm` token which now has the correct line-height.

---

### 2. Typography Tokens Updated

**File:** `src/tokens/defaultTokens.ts`

All Elza-based typography tokens updated from various line-height values to `'0.90'`:

```typescript
// Before → After
'display-xl':  lineHeight: '1.05'  → lineHeight: '0.90'
'heading-xl':  lineHeight: '1.1'   → lineHeight: '0.90'
'heading-lg':  lineHeight: '1.1'   → lineHeight: '0.90'
'heading-md':  lineHeight: '1.15'  → lineHeight: '0.90'
'heading-sm':  lineHeight: '1.15'  → lineHeight: '0.90'
```

**Impact:** Any component using these tokens (e.g., `className="text-display-xl"`) now automatically gets `lineHeight: '0.90'`.

---

### 3. Documentation Added/Updated

#### New Files Created
1. **`ELZA_TYPOGRAPHY_GUIDELINES.md`** - Comprehensive guidelines for Elza font usage
   - Line height rules
   - Implementation examples
   - Validation checklist
   - Migration notes
   - Component-specific guidelines

#### Updated Files
1. **`.cursorrules`** - Added new rule: `elza-font-line-height (STRICT)`
   - Detailed rule with examples
   - Typography token specifications
   - Incorrect usage examples

2. **`AI_CONSUMPTION_GUIDE.md`** - Updated Typography Rules section
   - Added line-height requirement to heading rules
   - Added correct/incorrect examples
   - Added reference to ELZA_TYPOGRAPHY_GUIDELINES.md

3. **`ELZA_LINE_HEIGHT_UPDATE_SUMMARY.md`** - This document

---

## 📊 Statistics

### Files Modified
- **14 component files** (.tsx)
- **1 documentation file** (.md - usage examples)
- **1 tokens file** (defaultTokens.ts)
- **3 documentation/rule files** (.cursorrules, AI_CONSUMPTION_GUIDE.md, + 2 new .md files)

### Line Height Changes
- **Typography Tokens:** 5 tokens updated
- **Component Elements:** ~25 heading elements updated
- **Old Values Replaced:**
  - `leading-none` (most common)
  - `leading-[1.05]`
  - `leading-[1.1]`
  - `leading-[1.15]`
  - `leading-[14px]`
  - `lg:leading-[0.94]` (conflicting breakpoint)

---

## 🎨 Visual Impact

### Before
```tsx
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-none">
  Bitcoin Rewards
</h1>
```
**Result:** Line height = 70px (100% of font-size)

### After
```tsx
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.90]">
  Bitcoin Rewards
</h1>
```
**Result:** Line height = 63px (90% of font-size) - **Tighter, more impactful**

---

## 🔍 How to Verify

### Search for Elza Usage
```bash
# Find all Elza font usage
grep -r "Elza" src/components

# Find Elza with line-height
grep -r "font-\['Elza.*leading-" src/components
```

### Check Typography Tokens
```bash
# View token definitions
cat src/tokens/defaultTokens.ts | grep -A 7 "display-xl\|heading-"
```

### Expected Output
All Elza-based tokens should show `lineHeight: '0.90'`.

---

## 🚀 Next Steps for Developers

### When Creating New Components
1. **Prefer typography tokens:** Use `text-display-xl`, `text-heading-lg`, etc.
2. **If using Elza manually:** Always include `leading-[0.90]`
3. **Always pair with uppercase:** `uppercase` + `leading-[0.90]`

### Validation Checklist
- [ ] All Elza usage has `leading-[0.90]`
- [ ] All Elza usage has `uppercase`
- [ ] No usage of `leading-none`, `leading-tight`, or custom values
- [ ] Typography tokens preferred over manual declarations

### Code Review Checklist
When reviewing PRs:
- ✅ Check for Elza font usage
- ✅ Verify `leading-[0.90]` is present
- ✅ Verify `uppercase` is present
- ✅ Suggest typography tokens if manual declarations are used

---

## 📚 Reference Documents

1. **[ELZA_TYPOGRAPHY_GUIDELINES.md](./ELZA_TYPOGRAPHY_GUIDELINES.md)** - Complete Elza font guidelines
2. **[AI_CONSUMPTION_GUIDE.md](./AI_CONSUMPTION_GUIDE.md)** - AI agent implementation guide
3. **[.cursorrules](./.cursorrules)** - Project-wide Cursor AI rules (see `elza-font-line-height`)
4. **[src/tokens/defaultTokens.ts](./src/tokens/defaultTokens.ts)** - Typography token definitions

---

## 🎯 The Golden Rule

**Elza font = `uppercase` + `leading-[0.90]`**

No exceptions. This ensures:
- ✅ Consistent visual hierarchy
- ✅ Design system integrity
- ✅ Optimal readability
- ✅ Figma design alignment
- ✅ Predictable component behavior

---

## ✨ Summary

All Elza font usage across the Bitcoin.com React Component Library now uses `leading-[0.90]` for consistent, tight leading. This change affects website sections, UI components, typography tokens, and is fully documented in project rules and guidelines.

**Status:** ✅ Complete and Documented


