# AI Consumption Guide for Bitcoin.com React Component Library

This guide is specifically designed for AI agents (Cursor, Copilot, ChatGPT, etc.) to understand how to effectively use, extend, and implement components from this library while maintaining strict adherence to the design system, look, and feel.

## 🎯 Core Philosophy

1.  **Token-First**: Never use arbitrary values (e.g., `w-[35px]`, `text-[#333]`). Always use design tokens defined in `src/tokens/defaultTokens.ts`.
2.  **Theme-Agnostic**: All components must support Light and Dark modes automatically via semantic color tokens (e.g., `bg-surface`, `text-text-primary`).
3.  **Strict Typography**: Font choices are semantic. Headings have specific fonts and casing rules; Numbers have their own font.
4.  **Composition**: Build complex UIs by composing existing atoms (Buttons, Inputs, Icons) rather than rebuilding them.

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
**Rule**: Must be **UPPERCASE**.
**Tokens**:
- `text-display-xl`
- `text-heading-xl`
- `text-heading-lg`
- `text-heading-md`
- `text-heading-sm`

*Note: These utility classes usually include `uppercase` automatically. If applying font manually, you MUST add `uppercase`.*

### 2. Numeric Values
**Font**: `IBM Plex Sans`
**Rule**: Use for ANY number (prices, percentages, counts).
**Tokens**:
- `text-numeric-lg`
- `text-numeric`
- `text-numeric-sm`
- OR manual: `font-['IBM_Plex_Sans']`

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

