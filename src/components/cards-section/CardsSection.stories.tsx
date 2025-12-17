import type { Meta, StoryObj } from '@storybook/react';
import { CardsSection } from './CardsSection';
import type { CardsSectionProps } from './CardsSection.types';
import { 
  BitcoinCreditCardsIllustration,
  BitcoinGambleIllustration,
  BitcoinHandsWalletIllustration,
  BitcoinWalletNoteIllustration,
  SwapFuelCoinsIllustration,
  PoolBitcoinIllustration
} from '../mini-illustrations';
import { Pill } from '../pill';

const meta = {
  title: 'Sections/Website/Cards',
  component: CardsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive website section component that displays cards with optional icons, titles, optional descriptions, and optional action buttons. Supports 3-card and 6-card layouts with three visual styles (light, gray, black). The section can include an optional description under the heading. Cards support custom content injection at the start and end, as well as customizable button variants.'
      }
    }
  },
  argTypes: {
    themeMode: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description: 'Theme mode for the section wrapper'
    },
    style: {
      control: 'select',
      options: ['light', 'gray', 'black'],
      description: 'Visual style of the section'
    },
    layout: {
      control: 'select',
      options: [3, 6],
      description: 'Number of cards per row on desktop'
    },
    heading: {
      control: 'text',
      description: 'Section heading (displayed in uppercase)'
    },
    description: {
      control: 'text',
      description: 'Optional description text displayed under the heading'
    },
    cards: {
      control: 'object',
      description: 'Array of card items to display'
    },
    removeTopPadding: {
      control: 'boolean',
      description: 'Remove top padding - useful when stacking sections with the same style'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CardsSection>;

export default meta;
type Story = StoryObj<CardsSectionProps>;

// Sample card data for 3 cards
const threeCards: CardsSectionProps['cards'] = [
  {
    id: '1',
    icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
    title: 'Free Crypto Credit Cards',
    description: 'A short article summary of an article and why you should read more',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 1 clicked')
    }
  },
  {
    id: '2',
    icon: <BitcoinGambleIllustration className="w-full h-full" />,
    title: 'The Games You Love The Most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 2 clicked')
    }
  },
  {
    id: '3',
    icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
    title: 'Sharing Is Caring',
    description: 'Bring images to life with Veo 3. Let users upload a product photo and turn it into a dynamic video ad, or animate a character\'s portrait.',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 3 clicked')
    }
  }
];

// Sample card data for 6 cards
const sixCards: CardsSectionProps['cards'] = [
  ...threeCards,
  {
    id: '4',
    icon: <BitcoinWalletNoteIllustration className="w-full h-full" />,
    title: 'The Safer You Like The Most',
    description: 'Secure your assets with the most advanced security features available in the market.',
    action: {
      label: 'Learn More',
      onClick: () => console.log('Card 4 clicked')
    }
  },
  {
    id: '5',
    icon: <SwapFuelCoinsIllustration className="w-full h-full" />,
    title: 'Swapping Is Easier',
    description: 'Exchange cryptocurrencies instantly with the best rates and lowest fees.',
    action: {
      label: 'Get Started',
      onClick: () => console.log('Card 5 clicked')
    }
  },
  {
    id: '6',
    icon: <PoolBitcoinIllustration className="w-full h-full" />,
    title: 'Staking & Gains',
    description: 'Earn passive income by staking your crypto assets with competitive APY rates.',
    action: {
      label: 'Stake Now',
      onClick: () => console.log('Card 6 clicked')
    }
  }
];

// Cards without descriptions
const cardsWithoutDescriptions: CardsSectionProps['cards'] = threeCards.map(card => ({
  ...card,
  description: undefined
}));

// Cards without action buttons
const cardsWithoutActions: CardsSectionProps['cards'] = threeCards.map(card => ({
  ...card,
  action: undefined
}));

// Cards without icons
const cardsWithoutIcons: CardsSectionProps['cards'] = [
  {
    id: '1',
    title: 'Free Crypto Credit Cards',
    description: 'A short article summary of an article and why you should read more',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 1 clicked')
    }
  },
  {
    id: '2',
    title: 'The Games You Love The Most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 2 clicked')
    }
  },
  {
    id: '3',
    title: 'Sharing Is Caring',
    description: 'Bring images to life with Veo 3. Let users upload a product photo and turn it into a dynamic video ad, or animate a character\'s portrait.',
    action: {
      label: 'Action',
      onClick: () => console.log('Card 3 clicked')
    }
  }
];


/**
 * Default story with 3 cards in light style
 */
export const Default: Story = {
  args: {
    style: 'light',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Light style with 3 cards
 */
export const LightStyle3Cards: Story = {
  args: {
    style: 'light',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Light style with 6 cards
 */
export const LightStyle6Cards: Story = {
  args: {
    style: 'light',
    heading: 'Cards',
    cards: sixCards,
    layout: 6
  }
};

/**
 * Gray style with 3 cards
 */
export const GrayStyle3Cards: Story = {
  args: {
    style: 'gray',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Gray style with 6 cards
 */
export const GrayStyle6Cards: Story = {
  args: {
    style: 'gray',
    heading: 'Cards',
    cards: sixCards,
    layout: 6
  }
};

/**
 * Black style with 3 cards
 */
export const BlackStyle3Cards: Story = {
  args: {
    style: 'black',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Black style with 6 cards
 */
export const BlackStyle6Cards: Story = {
  args: {
    style: 'black',
    heading: 'Cards',
    cards: sixCards,
    layout: 6
  }
};

/**
 * Cards without descriptions
 */
export const WithoutDescriptions: Story = {
  args: {
    style: 'light',
    heading: 'Cards',
    cards: cardsWithoutDescriptions,
    layout: 3
  }
};

/**
 * Cards without action buttons
 */
export const WithoutActions: Story = {
  args: {
    style: 'gray',
    heading: 'Cards',
    cards: cardsWithoutActions,
    layout: 3
  }
};

/**
 * Custom heading
 */
export const CustomHeading: Story = {
  args: {
    style: 'light',
    heading: 'Explore Our Services',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Theme mode: Light
 */
export const ThemeModeLight: Story = {
  args: {
    themeMode: 'light',
    style: 'light',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Theme mode: Dark
 */
export const ThemeModeDark: Story = {
  args: {
    themeMode: 'dark',
    style: 'black',
    heading: 'Cards',
    cards: threeCards,
    layout: 3
  }
};

/**
 * With section description
 */
export const WithDescription: Story = {
  args: {
    style: 'light',
    heading: 'Cards',
    description: 'This is a descriptive text that appears under the heading to provide more context about the section content.',
    cards: threeCards,
    layout: 3
  }
};

/**
 * With longer section description
 */
export const WithLongDescription: Story = {
  args: {
    style: 'gray',
    heading: 'Explore Our Services',
    description: 'Discover the full range of Bitcoin.com services designed to help you buy, sell, trade, and earn cryptocurrency rewards with ease and security.',
    cards: threeCards,
    layout: 3
  }
};

/**
 * Cards without icons
 */
export const WithoutIcons: Story = {
  args: {
    style: 'light',
    heading: 'Simple Cards',
    description: 'These cards display content without icons, perfect for text-focused information.',
    cards: cardsWithoutIcons,
    layout: 3
  }
};

/**
 * Cards without icons (6-card layout)
 */
export const WithoutIcons6Cards: Story = {
  args: {
    style: 'gray',
    heading: 'Features',
    cards: [
      ...cardsWithoutIcons,
      {
        id: '4',
        title: 'The Safer You Like The Most',
        description: 'Secure your assets with the most advanced security features available in the market.',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 4 clicked')
        }
      },
      {
        id: '5',
        title: 'Swapping Is Easier',
        description: 'Exchange cryptocurrencies instantly with the best rates and lowest fees.',
        action: {
          label: 'Get Started',
          onClick: () => console.log('Card 5 clicked')
        }
      },
      {
        id: '6',
        title: 'Staking & Gains',
        description: 'Earn passive income by staking your crypto assets with competitive APY rates.',
        action: {
          label: 'Stake Now',
          onClick: () => console.log('Card 6 clicked')
        }
      }
    ],
    layout: 6
  }
};

/**
 * Cards with custom content at start
 * Demonstrates the ability to inject custom HTML at the beginning of each card
 */
export const WithCustomContentStart: Story = {
  args: {
    style: 'light',
    heading: 'Featured Services',
    description: 'Check out our most popular services with custom badges',
    cards: [
      {
        id: '1',
        icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
        title: 'Free Crypto Credit Cards',
        description: 'A short article summary of an article and why you should read more',
        customContentStart: (
          <div className="flex justify-start">
            <Pill type="green" style="outline">Popular</Pill>
          </div>
        ),
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 1 clicked')
        }
      },
      {
        id: '2',
        icon: <BitcoinGambleIllustration className="w-full h-full" />,
        title: 'The Games You Love The Most',
        description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
        customContentStart: (
          <div className="flex justify-start">
            <Pill type="purple" style="outline">New</Pill>
          </div>
        ),
        action: {
          label: 'Try Now',
          onClick: () => console.log('Card 2 clicked')
        }
      },
      {
        id: '3',
        icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
        title: 'Sharing Is Caring',
        description: 'Bring images to life with Veo 3. Let users upload a product photo and turn it into a dynamic video ad, or animate a character\'s portrait.',
        customContentStart: (
          <div className="flex justify-start">
            <Pill type="red" style="outline">Limited</Pill>
          </div>
        ),
        action: {
          label: 'Get Started',
          onClick: () => console.log('Card 3 clicked')
        }
      }
    ],
    layout: 3
  }
};

/**
 * Cards with custom content at end
 * Demonstrates the ability to inject custom HTML at the end of each card
 */
export const WithCustomContentEnd: Story = {
  args: {
    style: 'gray',
    heading: 'Service Statistics',
    description: 'View our services with real-time statistics',
    cards: [
      {
        id: '1',
        icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
        title: 'Free Crypto Credit Cards',
        description: 'A short article summary of an article and why you should read more',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 1 clicked')
        },
        customContentEnd: (
          <div className="text-sm text-shades-semi-dark font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            <div className="flex justify-between">
              <span>Active Users:</span>
              <span className="font-['IBMPlexSans'] font-semibold">10,234</span>
            </div>
          </div>
        )
      },
      {
        id: '2',
        icon: <BitcoinGambleIllustration className="w-full h-full" />,
        title: 'The Games You Love The Most',
        description: 'Add powerful photo editing to your app.',
        action: {
          label: 'Try Now',
          onClick: () => console.log('Card 2 clicked')
        },
        customContentEnd: (
          <div className="text-sm text-shades-semi-dark font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            <div className="flex justify-between">
              <span>Games Available:</span>
              <span className="font-['IBMPlexSans'] font-semibold">250+</span>
            </div>
          </div>
        )
      },
      {
        id: '3',
        icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
        title: 'Sharing Is Caring',
        description: 'Bring images to life with Veo 3.',
        action: {
          label: 'Get Started',
          onClick: () => console.log('Card 3 clicked')
        },
        customContentEnd: (
          <div className="text-sm text-shades-semi-dark font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            <div className="flex justify-between">
              <span>Shared Items:</span>
              <span className="font-['IBMPlexSans'] font-semibold">1.2M</span>
            </div>
          </div>
        )
      }
    ],
    layout: 3
  }
};

/**
 * Cards with different button variants
 * Demonstrates the ability to customize button styles per card
 */
export const WithDifferentButtonVariants: Story = {
  args: {
    style: 'light',
    heading: 'Choose Your Service',
    description: 'Different service tiers with varying call-to-action styles',
    cards: [
      {
        id: '1',
        icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
        title: 'Basic Plan',
        description: 'Perfect for getting started with cryptocurrency',
        action: {
          label: 'Get Started',
          onClick: () => console.log('Basic plan clicked'),
          variant: 'default'
        }
      },
      {
        id: '2',
        icon: <BitcoinGambleIllustration className="w-full h-full" />,
        title: 'Pro Plan',
        description: 'Advanced features for power users',
        action: {
          label: 'Upgrade Now',
          onClick: () => console.log('Pro plan clicked'),
          variant: 'primary'
        }
      },
      {
        id: '3',
        icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
        title: 'Enterprise Plan',
        description: 'Complete solution for businesses',
        action: {
          label: 'Contact Sales',
          onClick: () => console.log('Enterprise plan clicked'),
          variant: 'strong'
        }
      }
    ],
    layout: 3
  }
};

/**
 * Cards with placeholder images
 * Demonstrates using customContentStart to add images with 360:200 aspect ratio
 */
export const WithPlaceholderImages: Story = {
  args: {
    style: 'light',
    heading: 'Featured Articles',
    description: 'Explore our latest articles with featured images',
    cards: [
      {
        id: '1',
        title: 'Getting Started with Bitcoin',
        description: 'Learn the fundamentals of Bitcoin and how to start your cryptocurrency journey',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#0052FF] to-[#0041CC] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read Article',
          onClick: () => console.log('Article 1 clicked'),
          variant: 'secondary'
        }
      },
      {
        id: '2',
        title: 'Cryptocurrency Trading Tips',
        description: 'Essential tips and strategies for successful cryptocurrency trading',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#00D37F] to-[#00A863] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read Article',
          onClick: () => console.log('Article 2 clicked'),
          variant: 'secondary'
        }
      },
      {
        id: '3',
        title: 'Understanding Blockchain',
        description: 'Dive deep into blockchain technology and its revolutionary applications',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#7B3FF2] to-[#6230C2] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read Article',
          onClick: () => console.log('Article 3 clicked'),
          variant: 'secondary'
        }
      }
    ],
    layout: 3
  }
};

/**
 * Cards with placeholder images (6-card layout)
 * Demonstrates using customContentStart with images in a 6-card grid layout
 */
export const WithPlaceholderImages6Cards: Story = {
  args: {
    style: 'gray',
    heading: 'Latest News',
    description: 'Stay updated with the latest cryptocurrency news and updates',
    cards: [
      {
        id: '1',
        title: 'Bitcoin Reaches New High',
        description: 'Bitcoin hits record-breaking price milestone in global markets',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#0052FF] to-[#0041CC] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 1 clicked')
        }
      },
      {
        id: '2',
        title: 'New DeFi Protocol Launch',
        description: 'Revolutionary decentralized finance protocol launches today',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#00D37F] to-[#00A863] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 2 clicked')
        }
      },
      {
        id: '3',
        title: 'Crypto Regulation Update',
        description: 'Major regulatory developments in the cryptocurrency space',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#7B3FF2] to-[#6230C2] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 3 clicked')
        }
      },
      {
        id: '4',
        title: 'NFT Market Trends',
        description: 'Analysis of current trends in the NFT marketplace',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#FF6B6B] to-[#CC5555] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 4 clicked')
        }
      },
      {
        id: '5',
        title: 'Staking Rewards Increase',
        description: 'Major staking platforms announce increased APY rates',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#4ECDC4] to-[#3EA49D] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 5 clicked')
        }
      },
      {
        id: '6',
        title: 'Wallet Security Tips',
        description: 'Best practices for securing your cryptocurrency wallet',
        customContentStart: (
          <div className="w-full aspect-[360/200] bg-gradient-to-br from-[#F39C12] to-[#C27D0E] rounded-[8px] overflow-hidden mb-0 flex items-center justify-center">
            <div className="text-center text-white">
            </div>
          </div>
        ),
        action: {
          label: 'Read More',
          onClick: () => console.log('News 6 clicked')
        }
      }
    ],
    layout: 6
  }
};

/**
 * Stacked sections without top padding
 * Demonstrates using removeTopPadding to seamlessly stack sections with the same style
 */
export const StackedSectionsNoTopPadding: Story = {
  render: (args) => (
    <div>
      {/* First section - normal padding */}
      <CardsSection
        style="light"
        heading="First Section"
        description="This section has normal top and bottom padding"
        cards={[
          {
            id: '1',
            icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
            title: 'Free Crypto Credit Cards',
            description: 'A short article summary',
            action: {
              label: 'Learn More',
              onClick: () => console.log('Card 1 clicked')
            }
          },
          {
            id: '2',
            icon: <BitcoinGambleIllustration className="w-full h-full" />,
            title: 'The Games You Love',
            description: 'Play your favorite games',
            action: {
              label: 'Play Now',
              onClick: () => console.log('Card 2 clicked')
            }
          },
          {
            id: '3',
            icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
            title: 'Sharing Is Caring',
            description: 'Share with your friends',
            action: {
              label: 'Share',
              onClick: () => console.log('Card 3 clicked')
            }
          }
        ]}
        layout={3}
      />
      
      {/* Second section - removeTopPadding to eliminate gap */}
      <CardsSection
        style="light"
        heading="Second Section"
        description="This section removes top padding to eliminate the gap between sections"
        removeTopPadding={true}
        cards={[
          {
            id: '4',
            icon: <BitcoinWalletNoteIllustration className="w-full h-full" />,
            title: 'Secure Wallet',
            description: 'Keep your crypto safe',
            action: {
              label: 'Get Started',
              onClick: () => console.log('Card 4 clicked')
            }
          },
          {
            id: '5',
            icon: <SwapFuelCoinsIllustration className="w-full h-full" />,
            title: 'Easy Swaps',
            description: 'Exchange crypto instantly',
            action: {
              label: 'Swap Now',
              onClick: () => console.log('Card 5 clicked')
            }
          },
          {
            id: '6',
            icon: <PoolBitcoinIllustration className="w-full h-full" />,
            title: 'Earn Rewards',
            description: 'Stake and earn passive income',
            action: {
              label: 'Start Earning',
              onClick: () => console.log('Card 6 clicked')
            }
          }
        ]}
        layout={3}
      />
    </div>
  )
};

/**
 * Cards with images at the end
 * Demonstrates using customContentEnd to add images at the bottom of each card
 */
export const WithImagesAtEnd: Story = {
  args: {
    style: 'light',
    heading: 'Featured Services',
    description: 'Explore our services with visual representations at the bottom of each card',
    cards: [
      {
        id: '1',
        title: 'Crypto Credit Cards',
        description: 'Get cashback rewards on every purchase with our Bitcoin credit card',
        action: {
          label: 'Apply Now',
          onClick: () => console.log('Card 1 clicked'),
          variant: 'primary'
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '2',
        title: 'Gaming Platform',
        description: 'Play your favorite games and earn crypto rewards while having fun',
        action: {
          label: 'Start Playing',
          onClick: () => console.log('Card 2 clicked'),
          variant: 'primary'
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '3',
        title: 'Secure Wallet',
        description: 'Keep your crypto safe with our industry-leading security features',
        action: {
          label: 'Get Wallet',
          onClick: () => console.log('Card 3 clicked'),
          variant: 'primary'
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      }
    ],
    layout: 3
  }
};

/**
 * Cards with images at the end (6-card layout)
 * Demonstrates using customContentEnd with images in a 6-card grid layout
 */
export const WithImagesAtEnd6Cards: Story = {
  args: {
    style: 'gray',
    heading: 'Our Complete Suite',
    description: 'All the tools you need for your crypto journey',
    cards: [
      {
        id: '1',
        title: 'Credit Cards',
        description: 'Spend crypto anywhere',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 1 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '2',
        title: 'Gaming',
        description: 'Play and earn rewards',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 2 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '3',
        title: 'Wallet',
        description: 'Secure storage solution',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 3 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '4',
        title: 'Notes & Transfers',
        description: 'Easy money management',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 4 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '5',
        title: 'Swap & Exchange',
        description: 'Instant crypto swaps',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 5 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      },
      {
        id: '6',
        title: 'Staking Pool',
        description: 'Earn passive income',
        action: {
          label: 'Learn More',
          onClick: () => console.log('Card 6 clicked')
        },
        customContentEnd: (
          <div className="w-full aspect-[360/200] bg-secondary-100 rounded-[8px] overflow-hidden mb-0 flex items-center justify-center"></div>
        )
      }
    ],
    layout: 6
  }
};

/**
 * Cards with all custom features combined
 * Demonstrates using customContentStart, customContentEnd, and custom button variants together
 */
export const WithAllCustomFeatures: Story = {
  args: {
    style: 'black',
    heading: 'Premium Features',
    description: 'Explore our premium offerings with badges, stats, and custom actions',
    cards: [
      {
        id: '1',
        icon: <BitcoinCreditCardsIllustration className="w-full h-full" />,
        title: 'Premium Credit Cards',
        description: 'Exclusive benefits and rewards for premium members',
        customContentStart: (
          <div className="flex justify-between items-center">
            <Pill type="green"style="outline">Best Value</Pill>
            <span className="text-xs text-shades-mid font-medium font-['IBMPlexSans']">Save 20%</span>
          </div>
        ),
        action: {
          label: 'Subscribe Now',
          onClick: () => console.log('Premium card clicked'),
          variant: 'primary'
        },
        customContentEnd: (
          <div className="text-xs text-shades-mid font-medium font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            4.8/5 rating from 2,345 users
          </div>
        )
      },
      {
        id: '2',
        icon: <BitcoinGambleIllustration className="w-full h-full" />,
        title: 'VIP Gaming Access',
        description: 'Exclusive games and tournaments for VIP members',
        customContentStart: (
          <div className="flex justify-between items-center">
            <Pill type="purple"style="outline">Trending</Pill>
            <span className="text-xs text-shades-mid font-medium font-['IBMPlexSans']">+150 games</span>
          </div>
        ),
        action: {
          label: 'Join VIP',
          onClick: () => console.log('VIP gaming clicked'),
          variant: 'strong'
        },
        customContentEnd: (
          <div className="text-xs text-shades-mid font-medium font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            12,458 active players
          </div>
        )
      },
      {
        id: '3',
        icon: <BitcoinHandsWalletIllustration className="w-full h-full" />,
        title: 'Elite Wallet Services',
        description: 'Advanced security and priority support',
        customContentStart: (
          <div className="flex justify-between items-center">
            <Pill type="default" style="outline">Premium</Pill>
            <span className="text-xs text-shades-mid font-medium font-['IBMPlexSans']">24/7 Support</span>
          </div>
        ),
        action: {
          label: 'Upgrade',
          onClick: () => console.log('Elite wallet clicked'),
          variant: 'secondary'
        },
        customContentEnd: (
          <div className="text-xs text-shades-mid font-medium font-['Satoshi_Variable'] pt-s border-t border-shades-light">
            Bank-level security • Insured up to $1M
          </div>
        )
      }
    ],
    layout: 3
  }
};

