# AI Consumption Guide for Bitcoin.com React Component Library

This guide is specifically designed for AI agents (Cursor, Copilot, ChatGPT, etc.) to understand how to effectively use, extend, and implement components from this library while maintaining strict adherence to the design system, look, and feel.

## 🎯 Core Philosophy

1.  **Token-First**: Never use arbitrary values (e.g., `w-[35px]`, `text-[#333]`). Always use design tokens defined in `src/tokens/defaultTokens.ts`.
2.  **Theme-Agnostic**: All components must support Light and Dark modes automatically via semantic color tokens (e.g., `bg-surface`, `text-text-primary`).
3.  **Strict Typography**: Font choices are semantic. Headings have specific fonts and casing rules; Numbers have their own font.
4.  **Composition**: Build complex UIs by composing existing atoms (Buttons, Inputs, Icons) rather than rebuilding them.
5.  **Lists Use ListItem**: For list-style UIs, prefer the existing `ListItem` component and tweak via its props/options instead of creating bespoke list row markup.

---

## 🎨 Design Tokens & Theming

### Colors
**Do NOT use raw hex values or Tailwind's default color palette (e.g., `bg-blue-500`).**
Use the semantic colors defined in `tailwind.config.ts` and `defaultTokens.ts`.

| Context | Token Name | Usage |
| :--- | :--- | :--- |
| **Backgrounds** | `bg-background`, `bg-surface`, `bg-surface-muted` | Page and card backgrounds |
| **Text** | `text-text-primary`, `text-text-secondary` | Main and secondary text |
| **Borders** | `border-border`, `border-border-strong` | Dividers and inputs |
| **Brand** | `bg-primary-100`, `text-primary-100` | Primary actions and links |
| **Feedback** | `text-success-100`, `text-alerts-100` | Status messages |

**Dark Mode**: The system uses CSS variables. Simply using `bg-surface` will automatically render white in Light mode and dark gray in Dark mode. **Do not manually write `dark:bg-gray-900` unless explicitly overriding the system.**

### Spacing & Sizing
Use the t-shirt size scale for margin/padding/gap:
- `0` (0px)
- `px` (1px)
- `xs` (4px)
- `s` (8px)
- `m` (16px)
- `l` (24px)
- `xl` (32px)
- `xxl` (40px)

**Example**: `className="p-m gap-s flex flex-col"` (Padding 16px, Gap 8px).

### Radii (Border Radius)
- `rounded-s` (8px)
- `rounded-m` (16px)
- `rounded-pill` (9999px) - Buttons/Badges often use this.

---

## 📝 Typography Rules (STRICT)

### 1. Headings & Display
**Font**: `Elza` / `Elza Narrow`
**Rules**: 
- Must be **UPPERCASE**
- Must use **`leading-[0.94]`** for line-height

**Tokens**:
- `text-display-xl`
- `text-heading-xl`
- `text-heading-lg`
- `text-heading-md`
- `text-heading-sm`

*Note: These utility classes include `uppercase` and `lineHeight: '0.94'` automatically. If applying font manually, you MUST add both `uppercase` and `leading-[0.94]`.*

**Example:**
```tsx
// ✅ Correct - using token (uppercase + leading-[0.94] automatic)
<h1 className="text-display-xl">Bitcoin Rewards</h1>

// ✅ Correct - manual usage with both rules
<h2 className="font-['Elza_Narrow'] text-[70px] uppercase leading-[0.94]">
  Section Title
</h2>

// ❌ Incorrect - missing line-height
<h2 className="font-['Elza_Narrow'] text-[70px] uppercase">
  Section Title
</h2>

// ❌ Incorrect - wrong line-height
<h2 className="font-['Elza_Narrow'] text-[70px] uppercase leading-none">
  Section Title
</h2>
```

**📖 Full Guidelines:** See [ELZA_TYPOGRAPHY_GUIDELINES.md](./guides/ELZA_TYPOGRAPHY_GUIDELINES.md) for comprehensive Elza font usage rules.

### 2. Numeric Values
**Font**: `IBM Plex Sans`
**Rule**: Use for ANY number (prices, percentages, counts).
**Tokens**:
- `text-numeric-lg`
- `text-numeric`
- `text-numeric-sm`
- OR manual: `font-['IBMPlexSans']` (use this exact class name when creating new components)

### 3. Body & UI Text
**Font**: `Satoshi` (Default sans)
**Tokens**: `text-body`, `text-label`, `text-caption`.

---

## 🧩 Component Implementation Pattern

When creating or modifying components, follow this pattern:

1.  **File Structure**:
    ```
    src/components/MyComponent/
    ├── MyComponent.tsx
    ├── MyComponent.stories.tsx
    ├── MyComponent.types.ts
    └── index.ts
    ```

2.  **Code Template**:
    - Use `forwardRef`.
    - Use `twMerge` for class composition.
    - Allow `className` prop overrides.

```tsx
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = 'primary', children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          // Base styles (Layout + Font + Transition)
          'flex items-center gap-s p-m rounded-m font-sans transition-colors',
          // Theming (Light/Dark auto-handling)
          'bg-surface text-text-primary border border-border',
          // Variant styles
          variant === 'primary' && 'bg-primary-100 text-white border-transparent',
          // User override
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

MyComponent.displayName = 'MyComponent';
```

---

## 📋 Lists (STRICT)

When generating list-style UI (menus, settings lists, asset lists, step-by-step lists, transaction rows, etc.), **always try to use** `ListItem` instead of custom `<ul>/<li>` row markup.

- **Component**: `src/components/list-item/ListItem.tsx` (Storybook: `Components/Content/Lists`)
- **How to tweak**: Prefer using `size`, `number`, `illustration` + `illustrationType`, `leftContent`, `rightContent`, `indicator`, `buttonArea`, `showDivider`, `onClick`.
- **Reference**: `src/components/list-item/README.md` for examples and supported configurations.

**Example (typical list wrapper pattern)**:

```tsx
import { ListItem } from '@/components/list-item';
import { Icon } from '@/components/icon';

export function SettingsList() {
  return (
    <div className="space-y-0">
      <ListItem
        leftContent={{ title: 'Security', description: 'Manage your account security' }}
        buttonArea={<Icon type="icon-chevron-right" size="sm" className="text-shades-mid" />}
        onClick={() => {}}
      />
      <ListItem
        leftContent={{ title: 'Notifications', description: 'Email and push preferences' }}
        buttonArea={<Icon type="icon-chevron-right" size="sm" className="text-shades-mid" />}
        showDivider={false}
        onClick={() => {}}
      />
    </div>
  );
}
```

## 🔍 Checklist for AI Agents

Before finishing a task, verify:

- [ ] **Color Usage**: Are all colors using semantic tokens (`text-primary`) instead of raw hexes?
- [ ] **Dark Mode**: Does the component look correct in dark mode without manual `dark:` classes (relying on tokens)?
- [ ] **Typography**: Are headings UPPERCASE? Are numbers using `IBM Plex Sans`?
- [ ] **Icons**: Are icons imported from `@/icons` or `src/icons`?
- [ ] **Spacing**: Are margins and paddings using the `xs/s/m/l` scale?
- [ ] **Storybook**: Is there a story file covering all variants?

## 📚 Reference Map

- **Tokens**: `src/tokens/defaultTokens.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **Icons**: `src/icons/`
- **Example Component**: `src/components/button/Button.tsx`

---

## 📖 Additional Guides

For more detailed information on specific topics, refer to these comprehensive guides in the `guides/` folder:

### Typography & Fonts
- **[ELZA_TYPOGRAPHY_GUIDELINES.md](./guides/ELZA_TYPOGRAPHY_GUIDELINES.md)** - Comprehensive guide for Elza font usage, capitalization, and line-height rules
- **[ELZA_QUICK_REFERENCE.md](./guides/ELZA_QUICK_REFERENCE.md)** - Quick reference for Elza font implementation patterns
- **[ELZA_LINE_HEIGHT_UPDATE_SUMMARY.md](./guides/ELZA_LINE_HEIGHT_UPDATE_SUMMARY.md)** - Summary of line-height standardization for Elza fonts

### Website Sections & Content
- **[WEBSITE_SECTIONS_EDITABLE_CONTENT_PATTERN.md](./guides/WEBSITE_SECTIONS_EDITABLE_CONTENT_PATTERN.md)** - Pattern for making website section content editable via props
- **[WEBSITE_SECTIONS_TEXT_CONTENT_EDITABLE.md](./guides/WEBSITE_SECTIONS_TEXT_CONTENT_EDITABLE.md)** - Guidelines for text content editability in sections

### SEO & Optimization
- **[SEO_IMPROVEMENTS_PRIORITY_1.md](./guides/SEO_IMPROVEMENTS_PRIORITY_1.md)** - Priority 1 SEO improvements and implementation guide
- **[SEO_REQUIREMENTS_CHECKLIST.md](./guides/SEO_REQUIREMENTS_CHECKLIST.md)** - Checklist for SEO compliance in website sections
- **[SEO_CHANGES_SUMMARY.md](./guides/SEO_CHANGES_SUMMARY.md)** - Summary of SEO changes and updates
- **[SEO_RULE_ADDED.md](./guides/SEO_RULE_ADDED.md)** - Documentation of SEO rule additions

### Component Implementation
- **[MODAL_IMPLEMENTATION_SUMMARY.md](./guides/MODAL_IMPLEMENTATION_SUMMARY.md)** - Summary of modal component implementation patterns

### Change Logs
- **[CHANGES_SUMMARY.md](./guides/CHANGES_SUMMARY.md)** - Overall summary of major changes and updates to the project

