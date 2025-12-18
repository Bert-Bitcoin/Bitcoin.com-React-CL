# Website Footer Component

A comprehensive footer component for the Bitcoin.com website with app download buttons, link groups, and legal text.

## Features

- **App Download Section**: Displays Google Play and App Store download buttons
- **Customizable Links**: Override default app store URLs easily
- **Link Groups**: Organize footer links into collapsible sections (mobile/tablet)
- **Responsive Design**: Adapts layout for mobile, tablet, and desktop
- **Accordion Navigation**: Mobile and tablet views feature collapsible link sections
- **Accessibility**: Built-in ARIA labels and semantic HTML
- **Dark Theme**: Designed for dark backgrounds

## Usage

### Basic Usage

```tsx
import { WebsiteFooter } from '@/components/website-footer';

<WebsiteFooter />
```

### Custom App Store Links

The easiest way to customize the app store button links is using the dedicated props:

```tsx
<WebsiteFooter
  googlePlayHref="https://play.google.com/store/apps/details?id=com.yourapp"
  appStoreHref="https://apps.apple.com/us/app/your-app/id123456789"
/>
```

### Custom Link Groups

```tsx
const linkGroups = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    heading: 'Products',
    links: [
      { label: 'Wallet', href: '/wallet' },
      { label: 'Exchange', href: '/exchange' }
    ]
  }
];

<WebsiteFooter linkGroups={linkGroups} />
```

### Without Download Section

```tsx
<WebsiteFooter showDownloadSection={false} />
```

### Custom Legal Text

```tsx
<WebsiteFooter 
  legalText="© 2024 Your Company. All rights reserved." 
/>
```

### Custom Logo Accessibility Label

```tsx
<WebsiteFooter 
  logoAriaLabel="Your Company Logo" 
/>
```

### Complete Text Content Customization

All text content in the footer is customizable through props:

```tsx
<WebsiteFooter
  downloadTitle="Get our mobile app"
  logoAriaLabel="Your Company Logo"
  legalText="© 2024 Your Company. All rights reserved."
  linkGroups={[
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ]}
  badges={[
    {
      id: 'google-play',
      href: 'https://play.google.com/store/apps/details?id=your.app',
      alt: 'Get it on Google Play',
      imageSrc: ''
    },
    {
      id: 'app-store',
      href: 'https://apps.apple.com/app/your-app/id123456789',
      alt: 'Download on the App Store',
      imageSrc: ''
    }
  ]}
/>
```

### Matching Previous Section Background

The footer includes a curved white element on top that creates a visual transition. You can customize its color to match the background of the previous section:

```tsx
{/* When previous section has a surface background */}
<WebsiteFooter topBackgroundColor="bg-surface" />

{/* When previous section has a primary background */}
<WebsiteFooter topBackgroundColor="bg-primary-100" />

{/* When previous section has a canvas background */}
<WebsiteFooter topBackgroundColor="bg-shades-canvas" />

{/* Default white background */}
<WebsiteFooter topBackgroundColor="bg-shades-white" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showDownloadSection` | `boolean` | `true` | Whether to show the app download section |
| `downloadTitle` | `string` | `'Download the app'` | Title for the download section |
| `googlePlayHref` | `string` | Default Google Play URL | Custom URL for Google Play Store button |
| `appStoreHref` | `string` | Default App Store URL | Custom URL for App Store button |
| `badges` | `WebsiteFooterBadge[]` | Default badges | Custom badge objects (advanced usage) |
| `linkGroups` | `WebsiteFooterLinkGroup[]` | Default link groups | Groups of links to display |
| `legalText` | `string` | `'© {year} Saint Bitts LLC Bitcoin.com. All rights reserved.'` | Legal text at bottom |
| `logoAriaLabel` | `string` | `'Bitcoin.com'` | Accessibility label for the logo |
| `topBackgroundColor` | `string` | `'bg-shades-white'` | Background color for the top curved element. Use to match previous section |
| `contentClassName` | `string` | `undefined` | Additional CSS classes for content wrapper |
| `className` | `string` | `undefined` | Additional CSS classes for footer element |

## Type Definitions

### WebsiteFooterBadge

```tsx
interface WebsiteFooterBadge {
  id: string;
  href: string;
  alt: string;
  imageSrc: string;
}
```

### WebsiteFooterLink

```tsx
interface WebsiteFooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}
```

### WebsiteFooterLinkGroup

```tsx
interface WebsiteFooterLinkGroup {
  heading: string;
  links: WebsiteFooterLink[];
}
```

## Responsive Behavior

### Desktop (lg and above)
- Grid layout with all link groups visible
- Download section takes 2 columns
- All links displayed at once

### Tablet (md)
- Two-column layout
- Download section on the left
- Link groups in accordion on the right
- Collapsible sections with +/- icons

### Mobile (default)
- Single column layout
- Download section at the top
- All link groups in accordion
- Collapsible sections with +/- icons

## Accessibility

- Semantic HTML with proper `<footer>`, `<nav>`, and list elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus visible states on all interactive elements
- External links open in new tabs with `rel="noopener noreferrer"`

## Examples

### Complete Custom Configuration

```tsx
<WebsiteFooter
  downloadTitle="Get our mobile app"
  googlePlayHref="https://play.google.com/store/apps/details?id=com.myapp"
  appStoreHref="https://apps.apple.com/app/myapp/id123456789"
  linkGroups={[
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' }
      ]
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ]}
  legalText="© 2024 My Company. All rights reserved."
/>
```

### With Click Handlers

```tsx
const handleLinkClick = () => {
  // Custom analytics or navigation logic
  console.log('Link clicked');
};

<WebsiteFooter
  linkGroups={[
    {
      heading: 'Company',
      links: [
        { 
          label: 'About', 
          href: '/about',
          onClick: handleLinkClick
        }
      ]
    }
  ]}
/>
```

## Design System

The WebsiteFooter component is part of the Website Sections category in Storybook. It uses semantic tokens and follows the design system guidelines.

### Colors
- **Background**: `#1C1C1C` (Dark)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#67666B` (Gray)
- **Borders**: `#87858E` (Gray)
- **Focus Ring**: `ring-secondary-100`

### Typography
- **Headings**: `text-heading-sm` (Elza Narrow, uppercase)
- **Body**: `text-body` (Satoshi)
- **Legal Text**: `text-body-sm` (Satoshi)

## When to Use

### Use WebsiteFooter when:
- Building main website pages
- Creating landing pages
- Designing marketing pages
- Building full website layouts

### Don't use WebsiteFooter for:
- App navigation (use AppFooter instead)
- Simple copyright notices (use Footer component)
- Inline page footers

