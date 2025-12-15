# FeaturesSection Usage Examples

## Table of Contents
- [Basic Usage](#basic-usage)
- [With Custom Images](#with-custom-images)
- [With Mini Illustrations](#with-mini-illustrations)
- [Different Style Variants](#different-style-variants)
- [Theme Control](#theme-control)
- [Advanced Patterns](#advanced-patterns)

## Basic Usage

### Simple Feature List

```tsx
import { FeaturesSection } from '@/components/features-section';

function MyPage() {
  const features = [
    {
      id: 'feature-1',
      title: 'Fast and Secure',
      description: 'Lightning-fast transactions with bank-level security. Your assets are protected with multi-layer encryption.',
      buttonText: 'Learn More',
      onButtonClick: () => console.log('Security clicked')
    },
    {
      id: 'feature-2',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for both beginners and experts. Start trading in minutes.',
      buttonText: 'Get Started',
      onButtonClick: () => console.log('Easy to use clicked')
    }
  ];

  return <FeaturesSection heading="Why Choose Us" features={features} />;
}
```

## With Custom Images

### Using PNG Illustrations

```tsx
import { FeaturesSection } from '@/components/features-section';

function FeaturesPage() {
  const features = [
    {
      id: 'bitcoin',
      title: 'Bitcoin Trading',
      description: 'Trade Bitcoin with zero fees and instant settlement. Access global markets 24/7.',
      buttonText: 'Start Trading',
      imageElement: (
        <img 
          src="/illustrations/bitcoin-trading.png" 
          alt="Bitcoin trading illustration"
          className="w-full h-full object-contain"
        />
      )
    },
    {
      id: 'security',
      title: 'Bank-Level Security',
      description: 'Multi-signature wallets and cold storage keep your assets safe. SOC 2 Type II certified.',
      buttonText: 'Learn About Security',
      imageElement: (
        <img 
          src="/illustrations/security.png" 
          alt="Security illustration"
          className="w-full h-full object-contain"
        />
      )
    }
  ];

  return (
    <FeaturesSection 
      heading="Features" 
      features={features}
      style="light" 
    />
  );
}
```

## With Mini Illustrations

### Reusing Component Library Illustrations

```tsx
import { FeaturesSection } from '@/components/features-section';
import { MiniIllustration } from '@/components/mini-illustrations';

function ProductPage() {
  const features = [
    {
      id: 'wallet',
      title: 'Digital Wallet',
      description: 'Store, send, and receive cryptocurrency with our secure digital wallet.',
      buttonText: 'Create Wallet',
      imageElement: (
        <MiniIllustration 
          type="wallet" 
          className="w-48 h-48 mx-auto"
        />
      ),
      onButtonClick: () => window.location.href = '/wallet/create'
    },
    {
      id: 'trading',
      title: 'Advanced Trading',
      description: 'Professional trading tools with real-time charts and advanced order types.',
      buttonText: 'Start Trading',
      imageElement: (
        <MiniIllustration 
          type="chart" 
          className="w-48 h-48 mx-auto"
        />
      ),
      onButtonClick: () => window.location.href = '/trade'
    }
  ];

  return <FeaturesSection heading="What We Offer" features={features} />;
}
```

## Different Style Variants

### Light Background (Default)

```tsx
<FeaturesSection 
  style="light"
  heading="Features"
  features={myFeatures}
/>
```

### Gray Background

```tsx
<FeaturesSection 
  style="gray"
  heading="Features"
  features={myFeatures}
/>
```

### Dark Background

```tsx
<FeaturesSection 
  style="dark"
  heading="Features"
  features={myFeatures}
/>
```

## Theme Control

### Auto Theme (Follows System/App Theme)

```tsx
<FeaturesSection 
  themeMode="auto"
  heading="Features"
  features={myFeatures}
/>
```

### Force Light Theme

```tsx
<FeaturesSection 
  themeMode="light"
  style="light"
  heading="Features"
  features={myFeatures}
/>
```

### Force Dark Theme

```tsx
<FeaturesSection 
  themeMode="dark"
  style="dark"
  heading="Features"
  features={myFeatures}
/>
```

## Advanced Patterns

### Controlling Image Position

By default, features alternate between left and right image positioning. You can override this:

```tsx
const features = [
  {
    id: '1',
    title: 'Feature One',
    description: 'Description...',
    buttonText: 'Learn More',
    imagePosition: 'right' // Force image to the right
  },
  {
    id: '2',
    title: 'Feature Two',
    description: 'Description...',
    buttonText: 'Learn More',
    imagePosition: 'right' // Both images on the right
  }
];

<FeaturesSection features={features} />
```

### With Button Links

```tsx
const features = [
  {
    id: 'docs',
    title: 'Documentation',
    description: 'Comprehensive guides and API references.',
    buttonText: 'Read Docs',
    buttonHref: 'https://docs.example.com',
    onButtonClick: () => {
      // Track analytics
      trackEvent('docs_clicked');
    }
  }
];

<FeaturesSection features={features} />
```

### With Custom Styling

```tsx
<FeaturesSection 
  heading="Our Platform"
  features={myFeatures}
  className="shadow-xl"
/>
```

### Dynamic Features from API

```tsx
import { useState, useEffect } from 'react';
import { FeaturesSection } from '@/components/features-section';

function DynamicFeatures() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/api/features')
      .then(res => res.json())
      .then(data => {
        const formattedFeatures = data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          buttonText: item.ctaText,
          onButtonClick: () => window.location.href = item.ctaLink,
          imageElement: item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-contain"
            />
          ) : null
        }));
        setFeatures(formattedFeatures);
      });
  }, []);

  return (
    <FeaturesSection 
      heading="Platform Features" 
      features={features}
    />
  );
}
```

### Interactive Features with State

```tsx
import { useState } from 'react';
import { FeaturesSection } from '@/components/features-section';
import { Modal } from '@/components/modal';

function InteractiveFeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 'crypto-wallet',
      title: 'Crypto Wallet',
      description: 'Secure multi-currency wallet with instant transactions.',
      buttonText: 'Learn More',
      onButtonClick: () => setSelectedFeature('wallet'),
      imageElement: <img src="/wallet.png" alt="Wallet" className="w-full h-full object-contain" />
    },
    {
      id: 'trading-bot',
      title: 'Trading Bot',
      description: 'Automated trading with AI-powered strategies.',
      buttonText: 'Explore',
      onButtonClick: () => setSelectedFeature('bot'),
      imageElement: <img src="/bot.png" alt="Bot" className="w-full h-full object-contain" />
    }
  ];

  return (
    <>
      <FeaturesSection heading="Our Products" features={features} />
      
      {selectedFeature && (
        <Modal 
          isOpen={!!selectedFeature} 
          onClose={() => setSelectedFeature(null)}
        >
          <h2>More about {selectedFeature}</h2>
          {/* Modal content */}
        </Modal>
      )}
    </>
  );
}
```

### Full Page Example

```tsx
import { FeaturesSection } from '@/components/features-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

function HomePage() {
  const mainFeatures = [
    {
      id: 'earn',
      title: 'Earn While You Hold',
      description: 'Stake your crypto and earn up to 12% APY. No lock-up periods, withdraw anytime.',
      buttonText: 'Start Earning',
      onButtonClick: () => window.location.href = '/earn',
      imageElement: <img src="/earn.png" alt="Earn" className="w-full h-full object-contain" />
    },
    {
      id: 'trade',
      title: 'Trade 200+ Coins',
      description: 'Access the largest selection of cryptocurrencies with instant settlement.',
      buttonText: 'View Markets',
      onButtonClick: () => window.location.href = '/markets',
      imageElement: <img src="/trade.png" alt="Trade" className="w-full h-full object-contain" />
    },
    {
      id: 'secure',
      title: 'Military-Grade Security',
      description: 'Your assets are protected with 2FA, biometric login, and cold storage.',
      buttonText: 'Security Details',
      onButtonClick: () => window.location.href = '/security',
      imageElement: <img src="/secure.png" alt="Security" className="w-full h-full object-contain" />
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero section */}
      <section className="py-20 bg-primary-100 text-white">
        <h1 className="text-center text-5xl font-bold">Welcome to Bitcoin.com</h1>
      </section>

      {/* Features section */}
      <FeaturesSection 
        heading="Why Bitcoin.com"
        features={mainFeatures}
        style="light"
      />
      
      <Footer />
    </div>
  );
}

export default HomePage;
```

## Tips and Best Practices

### Image Guidelines

1. **Image Format**: Use transparent PNG for illustrations
2. **Image Size**: Recommended 400x300px minimum for sharp display
3. **Aspect Ratio**: Images should work in a container that's 300px tall on desktop, 200px on mobile
4. **File Size**: Optimize images to < 100KB for fast loading

### Content Guidelines

1. **Title Length**: Keep titles under 50 characters for best display
2. **Description Length**: Aim for 150-250 characters to maintain visual balance
3. **Button Text**: Use action-oriented text (e.g., "Learn More", "Get Started", "Explore")

### Layout Tips

1. Features automatically alternate left/right for visual interest
2. Maximum of 4-6 features per section for optimal user engagement
3. Use consistent style variants within the same page
4. For multiple feature sections on one page, alternate style variants (light → gray → dark)

### Accessibility

1. Always provide meaningful button text
2. When using images, include alt text or descriptive content
3. Test with keyboard navigation (Tab, Enter)
4. Verify color contrast in both light and dark modes
