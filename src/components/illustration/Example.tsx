/**
 * Example implementation showing how to use the Illustration component
 * in a real-world application.
 * 
 * This file is for reference only and not part of the component library.
 */

import { Card } from '../card';
import { Button } from '../button';
import { Icon } from '../icon';
import { Illustration } from './Illustration';

// ========================================
// Example 1: Feature Cards
// ========================================

export function FeatureCards() {
  const features = [
    {
      title: 'Buy & Sell',
      description: 'Trade Bitcoin and cryptocurrencies instantly with low fees',
      illustration: '/src/illustrations/Illustration-Buy & Sell.svg',
      backgroundColor: 'rgb(var(--color-primary-10))'
    },
    {
      title: 'Earn Rewards',
      description: 'Get Bitcoin rewards on every purchase you make',
      illustration: '/src/illustrations/Illustration-Earn.svg',
      backgroundColor: 'rgb(var(--color-success-10))'
    },
    {
      title: 'Learn',
      description: 'Master cryptocurrency with our educational resources',
      illustration: '/src/illustrations/Illustration-Learn.svg',
      backgroundColor: 'rgb(var(--color-warning-10))'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-m">
      {features.map((feature) => (
        <Card key={feature.title}>
          <div className="flex flex-col gap-m">
            <Illustration
              src={feature.illustration}
              alt={feature.title}
              aspectRatio="16/9"
              rounded
              backgroundColor={feature.backgroundColor}
            />
            <Card.Header>
              <Card.Title variant="heading-md">{feature.title.toUpperCase()}</Card.Title>
              <Card.Description>{feature.description}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Button variant="text" trailingIcon={<Icon type="arrow-right" />}>
                Learn More
              </Button>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ========================================
// Example 2: Hero Section
// ========================================

export function HeroWithIllustration() {
  return (
    <section className="py-[32px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center">
          {/* Content */}
          <div className="flex flex-col gap-m">
            <h1 className="font-['Elza_Narrow'] text-[32px] md:text-[44px] lg:text-[70px] uppercase leading-none">
              The Future of Money
            </h1>
            <p className="text-body text-text-secondary text-lg">
              Join millions of users worldwide who are trading, earning, and learning about
              Bitcoin on our secure and easy-to-use platform.
            </p>
            <div className="flex flex-wrap gap-s">
              <Button variant="primary" size="lg">
                Get Started
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
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

// ========================================
// Example 3: Product Showcase
// ========================================

export function ProductShowcase() {
  return (
    <Card padding="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
        <div className="flex flex-col gap-m justify-center">
          <Card.Title variant="heading-lg" as="h2">
            BITCOIN REWARDS PROGRAM
          </Card.Title>
          <Card.Description className="text-base">
            Earn Bitcoin on every purchase. Our rewards program gives you cryptocurrency back on
            everyday spending. No complicated steps, just automatic rewards.
          </Card.Description>
          <ul className="flex flex-col gap-s">
            {['Instant Bitcoin rewards', 'No fees or hidden charges', 'Easy redemption'].map(
              (item) => (
                <li key={item} className="flex items-center gap-s">
                  <Icon type="check" className="text-success-100" />
                  <span className="text-body">{item}</span>
                </li>
              )
            )}
          </ul>
          <div className="flex gap-s pt-s">
            <Button variant="primary">Start Earning</Button>
            <Button variant="default">Learn How</Button>
          </div>
        </div>

        <Illustration
          src="/src/illustrations/Illustration-Rewards-Machine.svg"
          alt="Bitcoin Rewards Machine"
          size="full"
          aspectRatio="1/1"
          rounded
          backgroundColor="rgb(var(--color-surface-muted))"
        />
      </div>
    </Card>
  );
}

// ========================================
// Example 4: Banner with Fallback
// ========================================

export function DynamicBanner({ imageUrl }: { imageUrl?: string }) {
  return (
    <Card padding="none" className="overflow-hidden">
      <Illustration
        src={imageUrl || '/src/illustrations/Illustration-Platform-Alt.svg'}
        alt="Promotional Banner"
        aspectRatio="21/9"
        size="full"
        objectFit="cover"
        backgroundColor="rgb(var(--color-primary-10))"
        fallback={
          <div className="flex flex-col items-center justify-center gap-m p-xl bg-surface-muted w-full h-full">
            <Icon type="image" size="xl" className="text-text-secondary" />
            <div className="text-center">
              <p className="text-label font-semibold text-text-primary">Banner Unavailable</p>
              <p className="text-label-xs text-text-secondary">
                Unable to load promotional content
              </p>
            </div>
          </div>
        }
        onError={() => console.error('Failed to load banner image')}
      />
    </Card>
  );
}

// ========================================
// Example 5: Comparison Grid
// ========================================

export function ObjectFitComparison() {
  const fitModes: Array<'contain' | 'cover' | 'fill' | 'none' | 'scale-down'> = [
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down'
  ];

  return (
    <div>
      <h2 className="text-heading-md uppercase mb-m">Object Fit Comparison</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-m">
        {fitModes.map((mode) => (
          <Card key={mode} padding="sm">
            <div className="flex flex-col gap-xs">
              <Illustration
                src="/src/illustrations/Illustration-Wallet.svg"
                alt={`${mode} fit example`}
                objectFit={mode}
                aspectRatio="1/1"
                withBorder
                rounded
                backgroundColor="rgb(var(--color-surface-muted))"
              />
              <p className="text-label-xs text-text-secondary text-center uppercase">{mode}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ========================================
// Example 6: Responsive Gallery
// ========================================

export function IllustrationGallery() {
  const illustrations = [
    { name: 'Account', path: '/src/illustrations/Illustration-Account.svg' },
    { name: 'Swap', path: '/src/illustrations/Illustration-Swap.svg' },
    { name: 'Gaming', path: '/src/illustrations/Illustration-Gaming.svg' },
    { name: 'Maps', path: '/src/illustrations/Illustration-Maps.svg' },
    { name: 'Rocket', path: '/src/illustrations/Illustration-Rocket.svg' },
    { name: 'Wallet', path: '/src/illustrations/Illustration-Wallet.svg' }
  ];

  return (
    <div>
      <h2 className="text-heading-md uppercase mb-m">Explore Features</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-m">
        {illustrations.map((item) => (
          <Card key={item.name} padding="sm" interactive>
            <div className="flex flex-col gap-xs items-center">
              <Illustration
                src={item.path}
                alt={item.name}
                size="full"
                aspectRatio="1/1"
                rounded
                backgroundColor="rgb(var(--color-surface-muted))"
              />
              <p className="text-label-xs text-text-secondary text-center uppercase">{item.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ========================================
// Export all examples
// ========================================

export const IllustrationExamples = {
  FeatureCards,
  HeroWithIllustration,
  ProductShowcase,
  DynamicBanner,
  ObjectFitComparison,
  IllustrationGallery
};
