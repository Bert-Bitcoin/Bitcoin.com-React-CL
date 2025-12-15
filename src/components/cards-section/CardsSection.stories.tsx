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

const meta = {
  title: 'Sections/Website/Cards',
  component: CardsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive website section component that displays cards with icons, titles, optional descriptions, and optional action buttons. Supports 3-card and 6-card layouts with three visual styles (light, gray, black).'
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
    cards: {
      control: 'object',
      description: 'Array of card items to display'
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
