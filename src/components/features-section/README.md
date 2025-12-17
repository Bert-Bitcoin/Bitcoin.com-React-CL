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
import { FeaturesSection } from '@/components/features-section';

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
| `imageBgColor` | `string` | - | Custom background color for the image container (e.g., `'bg-primary-100'` or `'bg-[#FF5733]'`) |
| `imageExtendToBottom` | `boolean` | - | Allow the image to extend to the bottom edge of the container for a more dynamic look |

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
- **Background**: Automatically adapts to the style variant (or use custom `imageBgColor`)
- **Content**: Centered with padding

### Important Note
The blue/colored background visible in Figma is for demonstration purposes only and is **not included** in the code. The container is designed to accept transparent PNG illustrations or custom image elements that you provide.

### Custom Background Colors

You can customize the background color of each feature's image container:

```tsx
const features = [
  {
    id: '1',
    title: 'Feature Title',
    description: 'Description',
    buttonText: 'Learn More',
    imageElement: <MyIllustration />,
    imageBgColor: 'bg-gradient-to-br from-[#E8E3FF] to-[#F5F3FF]' // Custom gradient
  }
];
```

### Image Extend to Bottom

For a more dynamic, mobile-app-like appearance (similar to the image you provided), use the `imageExtendToBottom` prop to allow illustrations to touch the bottom edge of the container:

```tsx
const features = [
  {
    id: '1',
    title: 'Instant Transactions',
    description: 'Send and receive crypto instantly',
    buttonText: 'Get Started',
    imageElement: <PhoneIllustration />,
    imageExtendToBottom: true, // Image touches the bottom edge
    imageBgColor: 'bg-gradient-to-br from-[#E8E3FF] to-[#F5F3FF]'
  }
];
```

**When to use `imageExtendToBottom`:**
- ✅ Mobile phone mockups or device illustrations
- ✅ Vertical illustrations that should "stand" on the bottom edge
- ✅ Creating a more dynamic, modern look
- ✅ When the illustration naturally extends downward

**When NOT to use:**
- ❌ Floating or centered illustrations
- ❌ Small icons or simple graphics
- ❌ Illustrations that need breathing room on all sides

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
