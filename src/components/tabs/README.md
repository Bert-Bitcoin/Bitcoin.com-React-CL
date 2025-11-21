# Pill Tabs Component

A pill-style tabs component for navigation and content switching. Built with React, TypeScript, and Tailwind CSS, following the Bitcoin.com design system.

## Features

- ✅ **Pill Style Design** - Rounded pill-shaped tabs matching Figma design
- ✅ **Active/Inactive States** - Clear visual distinction between states
- ✅ **Disabled Tabs** - Support for disabled tab items
- ✅ **Full Width Option** - Tabs can stretch to fill container
- ✅ **Icon Support** - Optional icons before tab labels
- ✅ **Dark Mode** - Full theme support for light and dark modes
- ✅ **Keyboard Accessible** - Full ARIA support and keyboard navigation
- ✅ **TypeScript** - Fully typed with comprehensive type definitions
- ✅ **Responsive** - Works on all screen sizes

## Usage

### Basic Pill Tabs

```tsx
import { PillTabs } from '@/components/tabs';
import { useState } from 'react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Home' },
    { id: 'tab2', label: 'Profile' },
    { id: 'tab3', label: 'Settings' }
  ];

  return (
    <PillTabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
    />
  );
}
```

### With Content Panels

```tsx
import { PillTabs } from '@/components/tabs';
import { useState } from 'react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div>
      <PillTabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      {/* Content panels */}
      {activeTab === 'overview' && <div>Overview content</div>}
      {activeTab === 'details' && <div>Details content</div>}
      {activeTab === 'settings' && <div>Settings content</div>}
    </div>
  );
}
```

### With Disabled Tabs

```tsx
const tabs = [
  { id: 'tab1', label: 'Available' },
  { id: 'tab2', label: 'Disabled', disabled: true },
  { id: 'tab3', label: 'Available' }
];

<PillTabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
/>
```

### Full Width Tabs

```tsx
<PillTabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  fullWidth
/>
```

## Props

### PillTabsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `PillTab[]` | **required** | Array of tab items |
| `activeTab` | `string` | **required** | ID of the currently active tab |
| `onChange` | `(tabId: string) => void` | **required** | Callback fired when a tab is clicked |
| `className` | `string` | - | Additional CSS classes for the container |
| `tabClassName` | `string` | - | Additional CSS classes for individual tabs |
| `fullWidth` | `boolean` | `false` | Whether tabs should take full width |

### PillTab Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | **required** | Unique identifier for the tab |
| `label` | `string` | **required** | Label text to display |
| `icon` | `React.ReactNode` | - | Optional icon before label |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |

## Styling

The component uses the following design tokens:

### Colors

**Active Tab:**
- Background: `bg-primary-100` (#4169e1)
- Text: `text-white`

**Inactive Tab (Light Mode):**
- Background: `bg-surface` (#f9f9fb)
- Border: `border-shades-light` (#e7e7ef)
- Text: `text-shades-extra-dark` (#323135)

**Inactive Tab (Dark Mode):**
- Background: `dark:bg-shades-almost-black`
- Border: `dark:border-shades-dark`
- Text: `dark:text-shades-off-white`

### Typography
- Font: Satoshi Variable Medium
- Size: `text-label-sm` (12px)
- Weight: 500
- Line height: 100%

### Spacing
- Horizontal padding: `px-s` (8px)
- Vertical padding: `py-xs` (4px)
- Gap between tabs: `gap-s` (8px)

### Border Radius
- Shape: `rounded-pill` (9999px / 40px)

## Examples

### Two Tabs (Common Pattern)

```tsx
const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'sell', label: 'Sell' }
];
```

### Many Tabs (Scrollable)

```tsx
const tabs = [
  { id: 'tab1', label: 'All' },
  { id: 'tab2', label: 'Active' },
  { id: 'tab3', label: 'Pending' },
  { id: 'tab4', label: 'Completed' },
  { id: 'tab5', label: 'Cancelled' },
  // ... more tabs
];
```

### Custom Styling

```tsx
<PillTabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  className="justify-center"
  tabClassName="min-w-[100px]"
/>
```

## Dark Mode

The component automatically adapts to dark mode when wrapped in a dark theme container:

```tsx
<div data-theme="dark">
  <PillTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
</div>
```

## Accessibility

- **Role**: `tablist` on container, `tab` on each tab button
- **ARIA**: `aria-selected` for active state, `aria-disabled` for disabled state
- **Keyboard**: Tab navigation, Space/Enter to activate
- **Focus**: Visible focus ring with proper contrast
- **Screen Readers**: Proper semantic structure and labels

## Component Architecture

```
tabs/
├── PillTabs.tsx           # Main component
├── PillTabs.types.ts      # TypeScript type definitions
├── PillTabs.stories.tsx   # Storybook stories (9 examples)
├── index.ts               # Barrel export
└── README.md              # This file
```

## Design Reference

[Figma Design File](https://www.figma.com/design/whUdbUxyPxMpIMbTapDqdn/Web-component-library--AI-?node-id=18011-1743)

## Storybook

View the component in Storybook:

```bash
npm run storybook
```

Navigate to: **Components > Tabs > PillTabs**

### Available Stories

1. **Default** - Basic tabs with multiple options
2. **ManyTabs** - Tabs with 10+ options (scrollable)
3. **CustomLabels** - Tabs with meaningful labels
4. **WithDisabledTabs** - Tabs with disabled states
5. **FullWidth** - Tabs that stretch to fill container
6. **WithContent** - Tabs with content panels
7. **ThemeComparison** - Light vs Dark mode side-by-side
8. **TwoTabs** - Common two-tab pattern
9. **ThreeTabs** - Common three-tab pattern

## Best Practices

### 1. Keep Tab Labels Concise

```tsx
// ✅ Good - Short and clear
{ id: 'overview', label: 'Overview' }

// ❌ Bad - Too long
{ id: 'overview', label: 'Overview of All Your Transactions' }
```

### 2. Use Meaningful IDs

```tsx
// ✅ Good - Descriptive IDs
{ id: 'user-profile', label: 'Profile' }

// ❌ Bad - Generic IDs
{ id: 'tab1', label: 'Profile' }
```

### 3. Provide Feedback

```tsx
// ✅ Good - Shows content changes
const [activeTab, setActiveTab] = useState('home');

<PillTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
{activeTab === 'home' && <HomeContent />}
{activeTab === 'profile' && <ProfileContent />}

// ❌ Bad - No visual feedback
<PillTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
```

### 4. Consider Mobile

For many tabs on mobile, ensure horizontal scrolling is available:

```tsx
<div className="overflow-x-auto">
  <PillTabs tabs={manyTabs} activeTab={activeTab} onChange={setActiveTab} />
</div>
```

## Common Patterns

### Navigation Tabs

```tsx
const navigationTabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'settings', label: 'Settings' }
];
```

### Filter Tabs

```tsx
const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' }
];
```

### Buy/Sell Toggle

```tsx
const tradeTabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'sell', label: 'Sell' }
];
```

## TypeScript Types

```typescript
interface PillTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface PillTabsProps {
  tabs: PillTab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  tabClassName?: string;
  fullWidth?: boolean;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- [Button](../button) - For button styling inspiration
- [Toggle](../toggle) - For binary on/off states
- [Dropdown](../dropdown) - For more complex navigation

## Contributing

When making changes to this component:

1. Update types in `PillTabs.types.ts`
2. Add stories in `PillTabs.stories.tsx`
3. Test in both light and dark modes
4. Test accessibility with keyboard navigation
5. Update this README with new features

