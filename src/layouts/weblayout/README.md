# WebLayout

A full-page layout component for marketing/website pages with header and footer.

## Features

- **Sticky Header Navigation**: Includes the Header component with responsive navigation pills and action button that stays fixed at the top when scrolling
- **Flexible Content Area**: Main content area that grows to fill available viewport height
- **Website Footer**: Comprehensive footer with link groups, app download badges, and legal text
- **Full Viewport Height**: Layout stretches to fill the entire screen
- **Responsive Design**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Customizable**: Props for customizing header and footer behavior

## Usage

```tsx
import { WebLayout } from '@bitcoin-portal/design-system';

function HomePage() {
  return (
    <WebLayout>
      <section className="min-h-[500px] bg-primary-100">
        <h1>Welcome to Bitcoin.com</h1>
      </section>
      <section className="min-h-[400px] bg-background">
        <h2>Features</h2>
      </section>
    </WebLayout>
  );
}
```

## With Custom Props

```tsx
<WebLayout
  headerProps={{
    menuItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' }
    ],
    actionLabel: 'Get Started',
    onActionClick: () => console.log('Action clicked')
  }}
  footerProps={{
    showDownloadSection: true,
    legalText: '© 2024 My Company'
  }}
>
  <YourContent />
</WebLayout>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to be rendered in the main content area |
| `headerProps` | `Omit<HeaderProps, 'className'>` | - | Props to pass to the Header component |
| `footerProps` | `Omit<WebsiteFooterProps, 'className'>` | - | Props to pass to the WebsiteFooter component |
| `className` | `string` | - | Additional CSS classes for the layout container |
| `contentClassName` | `string` | - | Additional CSS classes for the content area |

## Layout Structure

```
┌─────────────────────────────┐
│         Header              │ (flex-shrink-0)
├─────────────────────────────┤
│                             │
│     Main Content Area       │ (flex-1, grows to fill)
│    (Your sections here)     │
│                             │
├─────────────────────────────┤
│      Website Footer         │ (flex-shrink-0)
└─────────────────────────────┘
```

## Content Area Guidelines

The main content area (`children`) is designed to be filled with section components:

- Use full-width sections for hero areas, CTAs, etc.
- Use `min-h-[XXXpx]` classes for controlling section heights
- Use container/max-width classes for centered content layouts
- Combine multiple sections to build complete pages

## Design Tokens

This component uses semantic tokens from the design system:

- **Colors**: `bg-background`, `bg-surface`, `text-shades-*`
- **Spacing**: Design system spacing tokens (`px-xl`, `py-xxl`, etc.)
- **Typography**: Heading and body text styles from the design system
- **Theme Support**: Full light/dark mode support

## Accessibility

- Semantic HTML structure (`<header>`, `<main>`, `<footer>`)
- Proper heading hierarchy
- Keyboard navigation support via Header and Footer components
- ARIA labels where appropriate

## Related Components

- `Header` - Navigation header with pills and action button
- `WebsiteFooter` - Comprehensive footer with links and download badges
- `WebAppLayout` - Alternative layout for web application pages (with sidebar)

## Examples

See the Storybook stories for complete examples:
- Default layout with placeholder
- Custom header configuration
- Rich content with multiple sections
- Short content pages
- Custom footer configuration
- Centered content layouts
- Dark mode support

