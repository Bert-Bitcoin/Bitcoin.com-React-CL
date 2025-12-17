# Illustration Component - Usage Examples

## Quick Start

The Illustration component allows you to display SVG illustrations with flexible sizing and fit options.

### Basic Example

```tsx
import { Illustration } from '@/components/illustration';

export function MyFeature() {
  return (
    <Illustration
      src="/src/illustrations/Illustration-Rocket.svg"
      alt="Bitcoin Rocket launching"
      size="md"
    />
  );
}
```

## Common Use Cases

### 1. Feature Card with Illustration

```tsx
import { Card } from '@/components/card';
import { Illustration } from '@/components/illustration';
import { Button } from '@/components/button';

export function FeatureCard() {
  return (
    <Card>
      <div className="flex flex-col gap-m">
        <Illustration
          src="/src/illustrations/Illustration-Earn.svg"
          alt="Earn Bitcoin Rewards"
          aspectRatio="16/9"
          rounded
          backgroundColor="rgb(var(--color-success-10))"
        />
        <Card.Header>
          <Card.Title variant="heading-md">EARN BITCOIN</Card.Title>
          <Card.Description>
            Start earning Bitcoin rewards on every purchase
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          <Button variant="primary" fullWidth>
            Get Started
          </Button>
        </Card.Footer>
      </div>
    </Card>
  );
}
```

### 2. Hero Section with Side Illustration

```tsx
import { Illustration } from '@/components/illustration';
import { Button } from '@/components/button';

export function HeroSection() {
  return (
    <section className="py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center">
          {/* Content */}
          <div className="flex flex-col gap-m">
            <h1 className="font-['Elza_Narrow'] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-[0.94]">
              Trade Bitcoin With Confidence
            </h1>
            <p className="text-body text-text-secondary">
              Join millions of users worldwide trading, earning, and learning about Bitcoin
              on our secure platform.
            </p>
            <div className="flex gap-s">
              <Button variant="primary" size="lg">
                Start Trading
              </Button>
              <Button variant="default" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Illustration */}
          <Illustration
            src="/src/illustrations/Illustration-Platform.svg"
            alt="Bitcoin Trading Platform"
            size="full"
            aspectRatio="4/3"
          />
        </div>
      </div>
    </section>
  );
}
```

### 3. Feature Grid with Illustrations

```tsx
import { Illustration } from '@/components/illustration';

const features = [
  {
    title: 'Buy & Sell',
    description: 'Trade Bitcoin instantly',
    illustration: '/src/illustrations/Illustration-Buy & Sell.svg',
    color: 'rgb(var(--color-primary-10))'
  },
  {
    title: 'Earn Rewards',
    description: 'Get Bitcoin on purchases',
    illustration: '/src/illustrations/Illustration-Earn.svg',
    color: 'rgb(var(--color-success-10))'
  },
  {
    title: 'Learn',
    description: 'Master cryptocurrency',
    illustration: '/src/illustrations/Illustration-Learn.svg',
    color: 'rgb(var(--color-warning-10))'
  },
  {
    title: 'Gaming',
    description: 'Play and earn',
    illustration: '/src/illustrations/Illustration-Gaming.svg',
    color: 'rgb(var(--color-secondary-10))'
  }
];

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-m">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col gap-s">
          <Illustration
            src={feature.illustration}
            alt={feature.title}
            aspectRatio="1/1"
            rounded
            backgroundColor={feature.color}
          />
          <h3 className="text-heading-sm uppercase">{feature.title}</h3>
          <p className="text-body-xs text-text-secondary">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### 4. Object Fit Comparison

Different ways to fit illustrations in containers:

```tsx
import { Illustration } from '@/components/illustration';

export function ObjectFitDemo() {
  const illustration = '/src/illustrations/Illustration-Wallet.svg';
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-m">
      {/* Contain - Default, shows entire image */}
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustration}
          alt="Contain fit"
          objectFit="contain"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-center">Contain</p>
      </div>
      
      {/* Cover - Fills container, may crop */}
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustration}
          alt="Cover fit"
          objectFit="cover"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-center">Cover</p>
      </div>
      
      {/* Fill - Stretches to fill */}
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustration}
          alt="Fill fit"
          objectFit="fill"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-center">Fill</p>
      </div>
      
      {/* None - Original size */}
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustration}
          alt="None fit"
          objectFit="none"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-center">None</p>
      </div>
      
      {/* Scale-down - Prevents upscaling */}
      <div className="flex flex-col gap-xs">
        <Illustration
          src={illustration}
          alt="Scale-down fit"
          objectFit="scale-down"
          aspectRatio="1/1"
          withBorder
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
        <p className="text-label-xs text-center">Scale-Down</p>
      </div>
    </div>
  );
}
```

### 5. Responsive Sizing

```tsx
import { Illustration } from '@/components/illustration';

export function ResponsiveIllustration() {
  return (
    <div className="w-full">
      {/* Mobile: full width, Tablet: 50%, Desktop: 33% */}
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto">
        <Illustration
          src="/src/illustrations/Illustration-Rewards.svg"
          alt="Bitcoin Rewards"
          size="full"
          aspectRatio="4/3"
          rounded
        />
      </div>
    </div>
  );
}
```

### 6. Loading States with Fallback

```tsx
import { Illustration } from '@/components/illustration';
import { Icon } from '@/components/icon';

export function IllustrationWithFallback() {
  return (
    <Illustration
      src="/api/user-illustration.svg"
      alt="User's custom illustration"
      size="lg"
      withBorder
      rounded
      fallback={
        <div className="flex flex-col items-center justify-center gap-s p-l bg-surface-muted w-full h-full">
          <Icon type="image" size="xl" className="text-text-secondary" />
          <div className="text-center">
            <p className="text-label font-semibold text-text-primary">
              Image unavailable
            </p>
            <p className="text-label-xs text-text-secondary">
              Unable to load illustration
            </p>
          </div>
        </div>
      }
      onError={() => console.error('Failed to load illustration')}
      onLoad={() => console.log('Illustration loaded successfully')}
    />
  );
}
```

### 7. Banner with Full Width

```tsx
import { Illustration } from '@/components/illustration';
import { Card } from '@/components/card';

export function PromoBanner() {
  return (
    <Card padding="none" className="overflow-hidden">
      <Illustration
        src="/src/illustrations/Illustration-Platform-Alt.svg"
        alt="Bitcoin Platform Features"
        aspectRatio="21/9"
        size="full"
        objectFit="cover"
        backgroundColor="rgb(var(--color-primary-10))"
      />
      <div className="p-l">
        <h2 className="text-heading-md uppercase">New Platform Features</h2>
        <p className="text-body text-text-secondary">
          Discover what's new in our latest update
        </p>
      </div>
    </Card>
  );
}
```

### 8. Illustration Gallery

```tsx
import { Illustration } from '@/components/illustration';
import { Card } from '@/components/card';

const illustrations = [
  { name: 'Account', src: '/src/illustrations/Illustration-Account.svg' },
  { name: 'Swap', src: '/src/illustrations/Illustration-Swap.svg' },
  { name: 'Maps', src: '/src/illustrations/Illustration-Maps.svg' },
  { name: 'Rocket', src: '/src/illustrations/Illustration-Rocket.svg' }
];

export function IllustrationGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-m">
      {illustrations.map((item) => (
        <Card key={item.name} padding="sm" interactive>
          <div className="flex flex-col gap-xs">
            <Illustration
              src={item.src}
              alt={item.name}
              aspectRatio="1/1"
              rounded
              backgroundColor="rgb(var(--color-surface-muted))"
            />
            <p className="text-label-xs text-text-secondary text-center uppercase">
              {item.name}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

## Tips

1. **Use semantic token colors** for backgrounds:
   - `rgb(var(--color-primary-10))` - Light primary tint
   - `rgb(var(--color-success-10))` - Light success tint
   - `rgb(var(--color-surface-muted))` - Muted surface color
   - These automatically adapt to light/dark themes

2. **Choose the right objectFit**:
   - `contain` (default) - Best for most illustrations, shows the entire image
   - `cover` - Use for decorative backgrounds where cropping is acceptable
   - `fill` - Rarely needed, can distort images
   - `none` - For pixel-perfect sizing when you control dimensions
   - `scale-down` - Prevents upscaling, useful for small images that shouldn't be enlarged

3. **Aspect ratios**:
   - `1/1` - Square, great for icon-like illustrations
   - `4/3` - Standard, balanced proportion
   - `16/9` - Widescreen, good for hero sections
   - `21/9` - Ultra-wide, perfect for banners
   - `auto` - Lets image determine height

4. **Performance**:
   - Lazy loading is enabled by default
   - Use `loading="eager"` for above-the-fold illustrations
   - SVG format is recommended for best quality and small file size

5. **Accessibility**:
   - Always provide meaningful `alt` text
   - Describe what the illustration represents, not just its filename
   - For decorative illustrations, use `alt=""` (empty string)

## Available Illustrations

All illustrations are located in `src/illustrations/`:

- Account management
- Buy & Sell trading
- Earn rewards
- Gaming features
- Learning resources
- Bitcoin maps
- Platform views
- Rewards machines
- Rocket (growth)
- Swap functionality
- Wallet management

Import them using the path: `/src/illustrations/Illustration-[Name].svg`


