# CTASection Component

A flexible Call-to-Action (CTA) section component designed for marketing pages and conversion-focused layouts. The CTASection component provides multiple style variations, customizable content slots, and responsive design to create compelling calls-to-action throughout your website.

## Features

- **4 Style Variations**: light, gray, dark, and highlight (with 10 customizable highlight colors)
- **Flexible Content Slots**: Optional title, description, and buttons with custom HTML slots above title and below actions
- **Responsive Design**: Mobile-first approach with responsive padding, typography, and button sizes
- **Alignment Options**: Left, center, or right alignment for all content
- **SEO-Friendly**: Includes optional `id` prop for anchor linking and deep navigation
- **Theme Support**: Works seamlessly with light and dark theme modes
- **Semantic Tokens**: Uses design system tokens for colors, spacing, and typography

## Installation

```tsx
import { CTASection } from '@/components/cta-section';
```

## Basic Usage

```tsx
<CTASection
  title="Ready to Get Started?"
  description="Join thousands of users who trust our platform."
  primaryButtonText="Get Started"
  onPrimaryClick={() => console.log('Get Started clicked')}
  secondaryButtonText="Learn More"
  onSecondaryClick={() => console.log('Learn More clicked')}
/>
```

## Style Variations

### 1. Light (Default)

Clean white background, suitable for main content areas.

```tsx
<CTASection
  style="light"
  title="Start Your Journey"
  primaryButtonText="Get Started"
/>
```

### 2. Gray

Subtle gray background for visual separation between sections.

```tsx
<CTASection
  style="gray"
  title="Need Help?"
  primaryButtonText="Contact Support"
/>
```

### 3. Dark

Dark background for high-contrast CTAs and dramatic effect.

```tsx
<CTASection
  style="dark"
  title="Join the Revolution"
  primaryButtonText="Sign Up"
/>
```

### 4. Highlight

Customizable highlight color background. Choose from 10 colors:

```tsx
<CTASection
  style="highlight"
  highlightColor="primary-100"      // Orange
  title="Limited Time Offer"
  primaryButtonText="Claim Now"
/>

<CTASection
  style="highlight"
  highlightColor="secondary-100"    // Blue
  title="Secure Your Future"
  primaryButtonText="Get Started"
/>

<CTASection
  style="highlight"
  highlightColor="success-100"      // Green
  title="Account Verified"
  primaryButtonText="Continue"
/>
```

**Available highlight colors:**
- `primary-100` - Orange
- `secondary-100` - Blue
- `success-100` - Green
- `extra-cyan-100` - Cyan
- `extra-navy-100` - Navy
- `extra-violet-100` - Violet
- `extra-gold-100` - Gold
- `extra-pink-100` - Pink
- `extra-green-100` - Green
- `extra-purple-100` - Purple

## Alignment Options

### Center (Default)

Best for most CTAs, creates balanced, focused attention.

```tsx
<CTASection
  alignment="center"
  title="Ready to Start?"
  primaryButtonText="Get Started"
/>
```

### Left

Good for content-heavy sections or when aligning with other left-aligned content.

```tsx
<CTASection
  alignment="left"
  title="Build with Our API"
  description="Access powerful developer tools."
  primaryButtonText="View Docs"
/>
```

### Right

Useful for specific layouts or design patterns.

```tsx
<CTASection
  alignment="right"
  title="Questions?"
  primaryButtonText="Contact Us"
/>
```

## Custom Content Slots

### Above Title

Add custom content above the title (badges, pills, eyebrows).

```tsx
import { Pill } from '@/components/pill';

<CTASection
  aboveTitle={
    <div className="flex justify-center">
      <Pill type="blue" style="fill">New Feature</Pill>
    </div>
  }
  title="Introducing Bitcoin Rewards"
  primaryButtonText="Learn More"
/>
```

### Custom Actions

Replace default buttons with custom action elements (email inputs, app store badges, etc.).

```tsx
import { Input } from '@/components/input';
import { Button } from '@/components/button';

<CTASection
  title="Subscribe to Newsletter"
  description="Get weekly crypto insights."
  customActions={
    <div className="flex gap-s max-w-[500px]">
      <Input placeholder="Your email" type="email" className="flex-1" />
      <Button variant="secondary" size="lg">Subscribe</Button>
    </div>
  }
/>
```

### Below Actions

Add content below the buttons (disclaimers, trust signals, fine print).

```tsx
<CTASection
  title="Start Trading"
  primaryButtonText="Sign Up"
  belowActions={
    <p className="text-sm text-shades-semi-dark">
      By signing up, you agree to our Terms of Service.
    </p>
  }
/>
```

## Optional Content

All main content elements are optional, allowing for flexible compositions:

### Title Only

```tsx
<CTASection
  title="The Future of Finance"
/>
```

### No Title

```tsx
<CTASection
  description="The simplest way to manage cryptocurrency."
  primaryButtonText="Get Started"
/>
```

### Single Button

```tsx
<CTASection
  title="Ready When You Are"
  primaryButtonText="Get Started"
/>
```

### Custom Content Only

```tsx
<CTASection
  customActions={
    <div className="flex flex-col items-center gap-m">
      <h3 className="text-2xl font-bold">Have Questions?</h3>
      <Button variant="secondary">Chat with Support</Button>
    </div>
  }
/>
```

## Real-World Examples

### Email Signup CTA

```tsx
<CTASection
  style="dark"
  title="Stay in the Loop"
  description="Get the latest crypto news and exclusive offers."
  customActions={
    <div className="flex flex-col sm:flex-row gap-s w-full max-w-[500px]">
      <Input 
        placeholder="Enter your email"
        type="email"
        className="flex-1"
      />
      <Button variant="secondary" size="lg">Subscribe</Button>
    </div>
  }
  belowActions={
    <p className="text-sm text-shades-semi-light">
      No spam. Unsubscribe anytime.
    </p>
  }
/>
```

### App Download CTA

```tsx
import { Icon } from '@/components/icon';

<CTASection
  style="highlight"
  highlightColor="secondary-100"
  title="Download Our App"
  description="Trade crypto on the go. Available on iOS and Android."
  customActions={
    <div className="flex flex-wrap gap-m justify-center">
      <Button 
        variant="strong" 
        size="lg" 
        leadingIcon={<Icon type="icon-apple" size="lg" />}
      >
        App Store
      </Button>
      <Button 
        variant="strong" 
        size="lg" 
        leadingIcon={<Icon type="icon-google-play" size="lg" />}
      >
        Google Play
      </Button>
    </div>
  }
/>
```

### Promotional CTA

```tsx
<CTASection
  style="highlight"
  highlightColor="extra-violet-100"
  id="promo-cta"
  aboveTitle={
    <div className="flex justify-center">
      <Pill type="purple" style="fill">🎉 Launch Week Special</Pill>
    </div>
  }
  title="Join 10 Million Users"
  description="Start your crypto journey with the most trusted platform."
  primaryButtonText="Sign Up with Email"
  secondaryButtonText="Continue with Google"
  belowActions={
    <div className="flex items-center gap-s">
      <Icon type="icon-shield-check" size="sm" className="text-success-100" />
      <p className="text-sm text-shades-semi-dark">
        Bank-level security • Insured up to $250,000
      </p>
    </div>
  }
/>
```

## Props

### CTASectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `themeMode` | `'auto' \| 'light' \| 'dark'` | `'auto'` | Theme mode for the section |
| `style` | `'light' \| 'gray' \| 'dark' \| 'highlight'` | `'light'` | Visual style variant |
| `highlightColor` | `CTAHighlightColor` | `'primary-100'` | Background color when style is "highlight" |
| `aboveTitle` | `ReactNode` | - | Custom content above the title |
| `title` | `string` | - | Main heading text (optional) |
| `description` | `string` | - | Description text (optional) |
| `primaryButtonText` | `string` | - | Primary button label (optional) |
| `onPrimaryClick` | `() => void` | - | Primary button click handler |
| `secondaryButtonText` | `string` | - | Secondary button label (optional) |
| `onSecondaryClick` | `() => void` | - | Secondary button click handler |
| `customActions` | `ReactNode` | - | Custom content to replace default buttons |
| `belowActions` | `ReactNode` | - | Custom content below buttons/actions |
| `alignment` | `'left' \| 'center' \| 'right'` | `'center'` | Text and content alignment |
| `className` | `string` | - | Additional CSS classes |
| `id` | `string` | - | HTML id attribute for anchor linking |

### CTAHighlightColor

Available highlight colors:
- `'primary-100'` - Orange
- `'secondary-100'` - Blue
- `'success-100'` - Green
- `'extra-cyan-100'` - Cyan
- `'extra-navy-100'` - Navy
- `'extra-violet-100'` - Violet
- `'extra-gold-100'` - Gold
- `'extra-pink-100'` - Pink
- `'extra-green-100'` - Green
- `'extra-purple-100'` - Purple

## Responsive Behavior

The CTASection component follows the standard website section responsive padding pattern:

- **Mobile** (default): `py-[32px]`
- **Small** (sm): `py-[40px]`
- **Medium** (md): `py-[60px]`
- **Large** (lg): `py-[80px]`

Typography also scales responsively:

**Title:**
- Mobile: `32px`
- Tablet: `44px`
- Desktop: `70px`

**Description:**
- Mobile: `18px`
- Tablet: `22px`
- Desktop: `26px`

**Buttons:**
- Mobile: `md` size
- Tablet and above: `lg` size

## SEO Best Practices

### Anchor Linking

Use the `id` prop to enable deep linking to specific CTA sections:

```tsx
<CTASection
  id="get-started"
  title="Ready to Begin?"
  primaryButtonText="Get Started"
/>
```

Users can now link directly to this section: `yoursite.com/page#get-started`

### Semantic HTML

The component uses proper semantic HTML:
- `<section>` element for the main container
- `<h2>` for the title (using Elza Narrow font with uppercase)
- `<p>` for the description

## Accessibility

- Proper semantic HTML structure
- Focus management for interactive elements
- Button click handlers properly bound
- Text remains readable in all style variations
- Sufficient color contrast in all themes

## Best Practices

1. **Keep titles concise** - Use clear, action-oriented language (3-7 words ideal)
2. **Limit description length** - 1-2 sentences work best for conversion
3. **Use highlight colors strategically** - Match the emotion/action you want to evoke
4. **Test alignment** - Center works best for most CTAs, left for content-heavy sections
5. **Mobile-first testing** - Always test on mobile devices to ensure readability
6. **Button hierarchy** - Use primary button for main action, secondary for alternative
7. **Custom actions** - Use for email signups, app downloads, or multi-step actions
8. **Below actions content** - Keep disclaimers short and scannable

## Theme Support

The component automatically adapts to light and dark themes using the design system's semantic tokens. You can also force a specific theme:

```tsx
<CTASection
  themeMode="dark"
  title="Dark Mode CTA"
/>
```

## Browser Support

Works in all modern browsers with CSS custom properties support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- `Button` - Used for CTA buttons
- `Input` - Common in email signup CTAs
- `Pill` - Often used in `aboveTitle` slot
- `Icon` - For button icons and decorative elements
- `HeroSection` - Similar structure, more prominent
- `HighlightSection` - Alternative CTA layout

## Storybook

View all variations and examples in Storybook:
```bash
npm run storybook
```

Navigate to: **Website Sections > CTASection**


