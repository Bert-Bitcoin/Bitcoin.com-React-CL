# AppButton Component

A customizable app download button component supporting App Store, Google Play, and QR code download options with multiple style variants.

## Features

- **Three Platform Types**: App Store (iOS), Google Play (Android), and QR Code download
- **Five Style Variants**: Light, Dark, Outline Light, Outline Dark, and Color
- **Responsive Sizes**: Small, medium, and large sizes
- **Hover Effects**: Subtle hover states with smooth transitions
- **Theme Support**: Automatically adapts to light and dark themes using semantic tokens
- **Icon Integration**: Uses the existing Icon component for QR code buttons
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **External Links**: Opens in new tab with proper `rel` attributes for security

## Usage

```tsx
import { AppButton } from '@/components/app-button';

// App Store badge
<AppButton
  platform="appstore"
  variant="dark"
  size="md"
  href="https://apps.apple.com/app/your-app-id"
/>

// Google Play badge
<AppButton
  platform="googleplay"
  variant="dark"
  size="md"
  href="https://play.google.com/store/apps/details?id=com.yourapp"
/>

// QR Code button
<AppButton
  platform="qr"
  variant="outline"
  size="md"
  href="https://yourapp.com/download"
/>
```

## Props

### `platform`
- **Type**: `'appstore' | 'googleplay' | 'qr'`
- **Default**: `'appstore'`
- **Description**: Determines which app button type to display

### `variant`
- **Type**: `'light' | 'dark' | 'outline-light' | 'outline-dark' | 'color'`
- **Default**: `'dark'`
- **Description**: Visual style variant
  - **light**: White background with light border
  - **dark**: Black background
  - **outline-light**: Transparent background with white border (2px) - for dark backgrounds
  - **outline-dark**: Transparent background with black border (2px) - for light backgrounds
  - **color**: Primary brand color background

### `size`
- **Type**: `'sm' | 'md' | 'lg'`
- **Default**: `'md'`
- **Description**: Size of the button
  - **sm**: 32px height
  - **md**: 40px height
  - **lg**: 48px height

### `href`
- **Type**: `string`
- **Required**: Yes
- **Description**: The URL to the app store listing or QR code destination

### `className`
- **Type**: `string`
- **Optional**: Yes
- **Description**: Additional CSS classes for customization

## Examples

### Basic Usage

```tsx
// App Store - Dark variant (default)
<AppButton
  platform="appstore"
  href="https://apps.apple.com/app/bitcoin-wallet"
/>

// Google Play - Light variant
<AppButton
  platform="googleplay"
  variant="light"
  href="https://play.google.com/store/apps/details?id=com.bitcoin.wallet"
/>

// QR Code - Outline Dark variant
<AppButton
  platform="qr"
  variant="outline-dark"
  href="https://bitcoin.com/download"
/>

// QR Code - Outline Light variant (for dark backgrounds)
<AppButton
  platform="qr"
  variant="outline-light"
  href="https://bitcoin.com/download"
/>
```

### All Variants

```tsx
// Dark variant (default)
<AppButton platform="appstore" variant="dark" href="#" />

// Light variant
<AppButton platform="appstore" variant="light" href="#" />

// Outline Dark variant (black border)
<AppButton platform="appstore" variant="outline-dark" href="#" />

// Outline Light variant (white border for dark backgrounds)
<AppButton platform="appstore" variant="outline-light" href="#" />

// Color variant (brand colors)
<AppButton platform="appstore" variant="color" href="#" />
```

### Different Sizes

```tsx
<AppButton platform="qr" variant="outline-dark" size="sm" href="#" />
<AppButton platform="qr" variant="outline-dark" size="md" href="#" />
<AppButton platform="qr" variant="outline-dark" size="lg" href="#" />
```

### Side by Side Layout

```tsx
<div className="flex gap-m">
  <AppButton
    platform="appstore"
    variant="dark"
    href="https://apps.apple.com/app/example"
  />
  <AppButton
    platform="googleplay"
    variant="dark"
    href="https://play.google.com/store/apps/details?id=example"
  />
  <AppButton
    platform="qr"
    variant="outline"
    href="https://example.com/download"
  />
</div>
```

### In Marketing Context

```tsx
<section className="flex flex-col items-center gap-l p-xl">
  <h2 className="text-heading-xl">Download Our App</h2>
  <p className="text-body text-center max-w-[600px]">
    Experience the future of crypto on your mobile device. 
    Available for iOS and Android, or scan the QR code for instant access.
  </p>
  <div className="flex flex-wrap gap-m justify-center">
    <AppButton
      platform="appstore"
      variant="dark"
      size="lg"
      href="https://apps.apple.com/app/example"
    />
    <AppButton
      platform="googleplay"
      variant="dark"
      size="lg"
      href="https://play.google.com/store/apps/details?id=example"
    />
  <AppButton
    platform="qr"
    variant="outline-dark"
    size="lg"
    href="https://example.com/download"
  />
  </div>
</section>
```

## Platform Types

### App Store (`appstore`)
Displays the official "Download on the App Store" badge with Apple branding.
- Full SVG badge with Apple logo
- "App Store" text and branding
- Scales appropriately with size prop

### Google Play (`googleplay`)
Displays the official "Get it on Google Play" badge with Google Play branding.
- Full SVG badge with Google Play logo
- "Google Play" text and branding
- Scales appropriately with size prop

### QR Code (`qr`)
Displays a button with QR icon and "Scan to Download" text.
- Uses the existing `Icon` component with `icon-qr` type
- "Scan to Download" text
- Works well with all variant styles
- Ideal for print materials or secondary download options

## Design Tokens

The component uses semantic tokens from the design system:

### Colors
- **light variant**: `shades-white` background, `shades-light` border, `shades-black` text
- **dark variant**: `shades-black` background and border, `shades-white` text
- **outline-light variant**: Transparent background, `shades-white` border (2px), `shades-white` text
- **outline-dark variant**: Transparent background, `shades-black` border (2px), `shades-black` text
- **color variant**: `primary-100` background, `primary-50` hover, `shades-white` text
- **primary-100**: Focus ring color

### Spacing
- `xs`: Small gap and padding
- `s`: Medium padding
- `m`: Large padding

### Typography
- `text-label-sm`: Small size text
- `text-label`: Medium size text (default)
- `text-label-lg`: Large size text

## Variants Explained

### Light Variant
Best for dark backgrounds or when you need a subtle, professional look.
- White background with light gray border
- Hover: Slightly darker background and border

### Dark Variant (Default)
Bold and prominent, works well on light backgrounds.
- Black background
- Hover: Slightly lighter black with shadow

### Outline Dark Variant
Clean and minimal for light backgrounds.
- Transparent background with 2px black border
- Hover: Light gray background fill
- Perfect for QR code buttons on light backgrounds

### Outline Light Variant
Clean and minimal for dark backgrounds.
- Transparent background with 2px white border
- Hover: Semi-transparent white background fill
- Perfect for QR code buttons on dark backgrounds

### Color Variant
Brand-focused with primary colors.
- Primary brand color background
- Hover: Lighter primary shade with shadow
- Most prominent option

## Accessibility

- **ARIA Labels**: Each button has descriptive `aria-label` attributes
  - App Store: "Download on the App Store"
  - Google Play: "Get it on Google Play"
  - QR: "Scan QR code to download app"
- **Keyboard Navigation**: Fully navigable via keyboard (Tab, Enter)
- **Focus States**: Clear focus indicators with focus-visible styles
- **External Link Handling**: Opens in new tab with proper `rel` attributes
- **SVG Accessibility**: Badge SVG graphics are marked as `aria-hidden`
- **Icon Accessibility**: QR icon uses the Icon component with proper sizing

## Theme Support

The component automatically adapts to your theme mode:
- Semantic token colors adjust based on `data-theme` attribute
- SVG fills use `currentColor` to inherit text color
- All variants work in both light and dark themes
- No manual theme switching required

## Hover States

The component includes subtle hover effects for each variant:
- **Light variant**: Background lightens, border darkens, subtle shadow
- **Dark variant**: Background lightens slightly, shadow increases
- **Outline Dark variant**: Background fills with light gray
- **Outline Light variant**: Background fills with semi-transparent white
- **Color variant**: Background lightens to secondary shade, shadow increases
- **Smooth transitions**: All state changes animate smoothly (200ms)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- SVG support required

## Related Components

- `Button`: Primary button component
- `IconButton`: Icon-only button variant
- `Icon`: Icon component (used for QR button)
- `Logo`: Logo component for branding

## Notes

- Badge graphics are inline SVG for optimal theming and performance
- External links automatically open in new tabs
- QR button uses the existing `icon-qr` from the Icon component
- All variations respect the design system's spacing and color tokens
- Component follows platform-specific design guidelines for app store badges
- Outline variants are perfect for QR codes as they don't compete visually with actual QR code images
- Use outline-dark for light backgrounds and outline-light for dark backgrounds
