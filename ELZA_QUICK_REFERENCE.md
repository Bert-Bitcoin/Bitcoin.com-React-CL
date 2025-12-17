# Elza Typography Quick Reference Card

## 🎯 The Golden Rule
```
Elza font = uppercase + leading-[0.94]
```

---

## ✅ Correct Usage

### Using Typography Tokens (Recommended)
```tsx
<h1 className="text-display-xl">Title</h1>
<h2 className="text-heading-lg">Heading</h2>
<h3 className="text-heading-sm">Subheading</h3>
```
✅ `uppercase` and `lineHeight: '0.94'` are automatic

### Manual Elza Usage
```tsx
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.94]">
  Title
</h1>
```
✅ Must include both `uppercase` and `leading-[0.94]`

### Website Section Standard
```tsx
<h2 className="font-['Elza_Narrow'] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]">
  {heading}
</h2>
```

---

## ❌ Incorrect Usage

```tsx
// Missing line-height
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase">

// Wrong line-height
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-none">
<h1 className="font-['Elza_Narrow'] text-[70px] uppercase leading-tight">

// Missing uppercase
<h1 className="font-['Elza_Narrow'] text-[70px] leading-[0.94]">
```

---

## 📦 Typography Tokens

| Token | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| `text-display-xl` | 56px | 0.94 | Hero titles |
| `text-heading-xl` | 40px | 0.94 | Page titles |
| `text-heading-lg` | 32px | 0.94 | Section headings |
| `text-heading-md` | 24px | 0.94 | Card titles |
| `text-heading-sm` | 20px | 0.94 | Small headings |

All tokens automatically include:
- ✅ Elza Narrow font
- ✅ Font weight: 900 (Black)
- ✅ Text transform: uppercase
- ✅ Line height: 0.94
- ✅ Letter spacing: -0.01em

---

## 🔍 Quick Validation

### Before Committing
```bash
# Search for Elza without leading-[0.94]
grep -r "font-\['Elza" src/components | grep -v "leading-\[0.94\]"
```

### Expected Result
No output = ✅ All Elza usage is correct

---

## 📚 Full Documentation
- [ELZA_TYPOGRAPHY_GUIDELINES.md](./ELZA_TYPOGRAPHY_GUIDELINES.md) - Complete guidelines
- [AI_CONSUMPTION_GUIDE.md](./AI_CONSUMPTION_GUIDE.md) - Implementation patterns
- [.cursorrules](./.cursorrules) - Project rules (line 134+)

---

## 💡 Remember
**90% line-height = Tight, impactful typography**  
This is intentional for display text!
