# FeaturesSection

A responsive website section component for showcasing features with an alternating image and text layout.

## Features

- **Responsive Design**: Adapts seamlessly across desktop, tablet, and mobile viewports
- **Alternating Layout**: Features automatically alternate between left and right image positioning
- **Theme Support**: Built-in support for light and dark themes via `themeMode` prop
- **Style Variants**: Three style variants (light, gray, dark) for different backgrounds
- **Image Flexibility**: The Image Holder container accepts any transparent PNG illustration or custom React element
- **Semantic Tokens**: Uses design system tokens for consistent styling

## Usage

### Basic Example

```tsx
import { FeatureSection } from '@/components/feature-section';

const features = [
  {
    id: '1',
    title: 'Easy Integration',
    description: 'Integrate our platform in minutes with simple APIs and comprehensive documentation.',
    buttonText: 'Learn More',
    onButtonClick: () => console.log('Feature clicked'),
    imagePosition: 'left'
  },
  {
    id: '2',
    title: 'Powerful Analytics',
    description: 'Get real-time insights into your data with our advanced analytics dashboard.',
    buttonText: 'Explore',
    imagePosition: 'right'
  }
];

<FeaturesSection
  heading="Features"
  features={features}
  style="light"
  themeMode="auto"
/>
```

### With Custom Images

```tsx
import { FeaturesSection } from '@/components/features-section';
import MyIllustration from './MyIllustration';

const featuresWithImages = [
  {
    id: '1',
    title: 'Feature Title',
    description: 'Feature description goes here.',
    buttonText: 'Learn More',
    imageElement: <MyIllustration />,
    imagePosition: 'left'
  }
];

<FeaturesSection
  heading="Our Features"
  features={featuresWithImages}
  style="light"
/>
```

## Props

### FeaturesSectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `style` | `'light' \| 'gray' \| 'dark'` | `'light'` | Visual style variant |
| `heading` | `string` | `'Features'` | Main section heading |
| `features` | `Feature[]` | `[]` | Array of feature items to display |
| `className` | `string` | - | Additional CSS classes |

### Feature

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `string` | ✓ | Unique identifier for the feature |
| `title` | `string` | ✓ | Feature title (displayed in Elza Narrow font) |
| `description` | `string` | ✓ | Feature description text |
| `buttonText` | `string` | ✓ | Text for the call-to-action button |
| `buttonHref` | `string` | - | Optional URL for the button (if it's a link) |
| `onButtonClick` | `() => void` | - | Click handler for the button |
| `imageElement` | `ReactNode` | - | Optional React element to display in the image container |
| `imagePosition` | `'left' \| 'right'` | - | Position of the image (auto-alternates if not specified) |

## Style Variants

### Light
- Background: White (`shades-white`)
- Best for: Standard light-themed pages

### Gray
- Background: Extra light gray (`shades-extra-light`)
- Best for: Adding visual separation on light pages

### Dark
- Background: Black (`shades-black`)
- Best for: Dark-themed pages or high-contrast sections

## Theme Support

The component supports three theme modes:
- `'auto'`: Automatically adapts to system/app theme
- `'light'`: Forces light theme
- `'dark'`: Forces dark theme

## Image Holder Container

The Image Holder is a flexible container designed to hold transparent PNG illustrations or any custom React element:

- **Desktop**: 300px height
- **Mobile**: 200px height
- **Rounded corners**: Uses `rounded-l` token (24px)
- **Background**: Automatically adapts to the style variant
- **Content**: Centered with padding

### Important Note
The blue/colored background visible in Figma is for demonstration purposes only and is **not included** in the code. The container is designed to accept transparent PNG illustrations or custom image elements that you provide.

## Responsive Behavior

### Desktop (lg and above)
- Features displayed in a row layout
- Image and text are 50/50 width
- 300px image height
- 40px gap between image and text

### Tablet (md)
- Features displayed in a row layout
- Slightly smaller spacing
- 300px image height

### Mobile (below md)
- Features stack vertically
- Image above text
- 200px image height
- Full-width layout

## Accessibility

- Semantic HTML5 `<section>` element
- Proper heading hierarchy (`<h2>` for section, `<h3>` for features)
- Icon `ariaHidden` prop for decorative icons
- Button component with proper ARIA attributes

## Examples

See `FeaturesSection.stories.tsx` for comprehensive examples including:
- Light, gray, and dark style variants
- With and without images
- Single and multiple features
- Custom headings
- Forced theme modes

## Design System Compliance

This component follows all design system rules:
- ✅ Uses semantic tokens only (no hardcoded colors)
- ✅ Follows responsive padding standards for website sections
- ✅ Uses correct typography mapping (Elza Narrow for headings, Satoshi for body)
- ✅ Supports both light and dark themes automatically
- ✅ Reuses existing components (Button, Icon)
- ✅ No `dark:` utility classes (handled via CSS variables)
