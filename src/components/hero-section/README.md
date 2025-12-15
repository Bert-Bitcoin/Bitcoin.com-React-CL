# HeroSection Component

A versatile hero section component designed for website landing pages with multiple layout options and responsive design.

## Features

- 4 layout variants: left, centered, left-illustration, and right-illustration
- Full responsive design (mobile, tablet, desktop)
- Minimum height of 70vh for impactful presence
- Theme support (auto, light, dark)
- Uses semantic tokens from the design system
- Integrates with existing Button and Illustration components
- Uppercase Elza Narrow typography for headings
- Flexible content with primary and secondary CTAs

## Usage

```tsx
import { HeroSection } from '@bitcoin-portal/design-system';

function MyLandingPage() {
  return (
    <HeroSection
      layout="left-illustration"
      heading="Your Gateway to Finance"
      description="Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices."
      primaryButtonText="Get Started"
      secondaryButtonText="Learn more"
      illustrationName="Illustration-Platform-Alt.svg"
      reducedTopPadding={true} // Use when placed below header
      onPrimaryClick={() => console.log('Get Started clicked')}
      onSecondaryClick={() => console.log('Learn more clicked')}
    />
  );
}
```

## Layout Variants

### Left
Text-only layout with content aligned to the left. Best for text-heavy hero sections.

### Centered
Text-only layout with content centered. Creates a focused, symmetrical appearance.

### Left + Illustration
Text content on the left with an illustration on the right. Balanced layout for visual storytelling.

### Right + Illustration
Illustration on the left with text content on the right. Alternative balanced layout.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `layout` | `'left' \| 'centered' \| 'left-illustration' \| 'right-illustration'` | `'left'` | Layout variant |
| `heading` | `string` | Required | Main heading (displayed in uppercase) |
| `description` | `string` | Required | Subheading or description text |
| `primaryButtonText` | `string` | `'Get Started'` | Text for primary CTA button |
| `onPrimaryClick` | `() => void` | - | Click handler for primary button |
| `secondaryButtonText` | `string` | `'Learn more'` | Text for secondary CTA button |
| `onSecondaryClick` | `() => void` | - | Click handler for secondary button |
| `illustrationName` | `string` | `'Illustration-Platform-Alt.svg'` | Illustration filename from src/illustrations/ |
| `reducedTopPadding` | `boolean` | `false` | Reduce top padding by half (useful below header) |
| `className` | `string` | - | Additional CSS classes |

## Responsive Behavior

- **Mobile (default)**: Stacked layout, smaller typography
- **Small (sm)**: Slightly increased spacing and typography
- **Medium (md)**: Tablet-optimized layout
- **Large (lg)**: Desktop layout with full-size typography and side-by-side content (for illustration variants)

## Spacing Options

### Standard Padding (default)
- Mobile: 32px top
- Small: 40px top
- Medium: 60px top
- Large: 80px top

### Reduced Padding (`reducedTopPadding={true}`)
Use this when placing the hero section directly below the header navigation:
- Mobile: 16px top (half of standard)
- Small: 20px top (half of standard)
- Medium: 30px top (half of standard)
- Large: 40px top (half of standard)

## Typography

- **Heading**: Elza Narrow font, uppercase, responsive sizes (44px → 94px)
- **Description**: Satoshi Variable font, medium weight, responsive sizes (18px → 28px)

## Design System Integration

This component follows all website section rules:
- Responsive vertical padding: `py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]`
- Maximum content width: `1280px`
- Semantic color tokens (no hardcoded colors)
- Automatic dark mode support via CSS variables
- Uses existing Button and Illustration components

## Examples

See Storybook for interactive examples of all layout variants and theme modes.

## Notes

- The heading will always be displayed in uppercase (via Elza Narrow font rules)
- Illustrations are loaded from `src/illustrations/` directory
- Dark mode is handled automatically through semantic tokens (no need for `dark:` classes)
- Minimum height is set to 70vh to ensure impactful hero presence

