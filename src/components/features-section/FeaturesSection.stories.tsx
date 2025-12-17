import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesSection } from './FeaturesSection';
import type { FeaturesSectionProps } from './FeaturesSection.types';
import { Illustration } from '../illustration';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Sections/Website/Features',
  component: FeaturesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive website section for showcasing features with alternating image and text layout. The Image Holder container can accept any transparent PNG illustration or image element.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    themeMode: {
      control: 'radio',
      options: ['auto', 'light', 'dark'],
      description: 'Theme mode for the section'
    },
    style: {
      control: 'radio',
      options: ['light', 'gray', 'dark'],
      description: 'Visual style variant'
    },
    heading: {
      control: 'text',
      description: 'Main section heading'
    },
    features: {
      control: 'object',
      description: 'Array of feature items to display'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

const mockFeatures: FeaturesSectionProps['features'] = [
  {
    id: '1',
    title: 'The Games you love the most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    buttonText: 'Learn More',
    onButtonClick: () => console.log('Feature 1 clicked'),
    imagePosition: 'left'
  },
  {
    id: '2',
    title: 'The Games you love the most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    buttonText: 'Learn More',
    onButtonClick: () => console.log('Feature 2 clicked'),
    imagePosition: 'right'
  },
  {
    id: '3',
    title: 'The Games you love the most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    buttonText: 'Learn More',
    onButtonClick: () => console.log('Feature 3 clicked'),
    imagePosition: 'left'
  },
  {
    id: '4',
    title: 'The Games you love the most',
    description: 'Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo\'s style just by typing.',
    buttonText: 'Learn More',
    onButtonClick: () => console.log('Feature 4 clicked'),
    imagePosition: 'right'
  }
];

// Illustration paths
const illustrations = {
  gaming: '/src/illustrations/Illustration-Gaming.svg',
  wallet: '/src/illustrations/Illustration-Wallet.svg',
  rewards: '/src/illustrations/Illustration-Rewards.svg',
  swap: '/src/illustrations/Illustration-Bitcoin-Ethereum.svg'
};

const mockFeaturesWithImages: FeaturesSectionProps['features'] = [
  {
    ...mockFeatures[0],
    imageElement: (
      <Illustration
        src={illustrations.gaming}
        alt="Gaming Illustration"
        size="full"
        objectFit="contain"
      />
    )
  },
  {
    ...mockFeatures[1],
    imageElement: (
      <Illustration
        src={illustrations.wallet}
        alt="Wallet Illustration"
        size="full"
        objectFit="contain"
      />
    )
  },
  {
    ...mockFeatures[2],
    imageElement: (
      <Illustration
        src={illustrations.rewards}
        alt="Rewards Illustration"
        size="full"
        objectFit="contain"
      />
    )
  },
  {
    ...mockFeatures[3],
    imageElement: (
      <Illustration
        src={illustrations.swap}
        alt="Swap Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
];

export const LightStyle: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Features',
    features: mockFeatures
  }
};

export const LightStyleWithImages: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Features',
    features: mockFeaturesWithImages
  }
};

export const GrayStyle: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Features',
    features: mockFeatures
  }
};

export const GrayStyleWithImages: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Features',
    features: mockFeaturesWithImages
  }
};

export const DarkStyle: Story = {
  args: {
    themeMode: 'auto',
    style: 'dark',
    heading: 'Features',
    features: mockFeatures
  }
};

export const DarkStyleWithImages: Story = {
  args: {
    themeMode: 'auto',
    style: 'dark',
    heading: 'Features',
    features: mockFeaturesWithImages
  }
};

export const SingleFeature: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Feature Highlight',
    features: [mockFeaturesWithImages[0]]
  }
};

export const TwoFeatures: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Key Features',
    features: mockFeaturesWithImages.slice(0, 2)
  }
};

export const CustomHeading: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Why Choose Us',
    features: mockFeaturesWithImages.slice(0, 3)
  }
};

export const ForceLightTheme: Story = {
  args: {
    themeMode: 'light',
    style: 'light',
    heading: 'Features',
    features: mockFeaturesWithImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Force light theme regardless of system preference'
      }
    }
  }
};

export const ForceDarkTheme: Story = {
  args: {
    themeMode: 'dark',
    style: 'dark',
    heading: 'Features',
    features: mockFeaturesWithImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Force dark theme regardless of system preference'
      }
    }
  }
};

export const CustomBackgroundColors: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Custom Backgrounds',
    features: [
      {
        ...mockFeaturesWithImages[0],
        imageBgColor: 'bg-primary-100/10'
      },
      {
        ...mockFeaturesWithImages[1],
        imageBgColor: 'bg-secondary-100/10'
      },
      {
        ...mockFeaturesWithImages[2],
        imageBgColor: 'bg-[#E8F5E9]'
      },
      {
        ...mockFeaturesWithImages[3],
        imageBgColor: 'bg-shades-extra-light'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom background colors for each feature\'s image container. You can use semantic tokens (e.g., bg-primary-100) or arbitrary values (e.g., bg-[#E8F5E9])'
      }
    }
  }
};

export const ImageExtendToBottom: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Dynamic Image Placement',
    features: [
      {
        id: '1',
        title: 'Instant Transactions',
        description: 'Send and receive crypto instantly with our advanced blockchain technology. Experience lightning-fast transactions with minimal fees.',
        buttonText: 'Get Started',
        onButtonClick: () => console.log('Feature 1 clicked'),
        imagePosition: 'left',
        imageExtendToBottom: true,
        imageBgColor: 'bg-gradient-to-br from-[#E8E3FF] to-[#F5F3FF]',
        imageElement: (
          <Illustration
            src={illustrations.wallet}
            alt="Wallet Illustration"
            size="full"
            objectFit="contain"
          />
        )
      },
      {
        id: '2',
        title: 'Secure By Design',
        description: 'Industry-leading security features to keep your crypto safe. Multi-factor authentication, biometric login, and encrypted storage.',
        buttonText: 'Learn More',
        onButtonClick: () => console.log('Feature 2 clicked'),
        imagePosition: 'right',
        imageExtendToBottom: true,
        imageBgColor: 'bg-gradient-to-br from-[#FFE8E8] to-[#FFF5F5]',
        imageElement: (
          <Illustration
            src={illustrations.gaming}
            alt="Gaming Illustration"
            size="full"
            objectFit="contain"
          />
        )
      },
      {
        id: '3',
        title: 'Transparent Rates',
        description: 'No hidden fees. See exactly what you\'re paying for every transaction with our clear and transparent pricing structure.',
        buttonText: 'View Pricing',
        onButtonClick: () => console.log('Feature 3 clicked'),
        imagePosition: 'left',
        imageExtendToBottom: true,
        imageBgColor: 'bg-gradient-to-br from-[#E8F5FF] to-[#F0F9FF]',
        imageElement: (
          <Illustration
            src={illustrations.rewards}
            alt="Rewards Illustration"
            size="full"
            objectFit="contain"
          />
        )
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the imageExtendToBottom feature where illustrations extend to the bottom edge of the container, creating a more dynamic and modern look similar to mobile app interfaces.'
      }
    }
  }
};

export const MixedImagePlacement: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Flexible Layouts',
    features: [
      {
        ...mockFeaturesWithImages[0],
        imageExtendToBottom: true,
        imageBgColor: 'bg-gradient-to-br from-[#E8E3FF] to-[#F5F3FF]'
      },
      {
        ...mockFeaturesWithImages[1],
        imageExtendToBottom: false, // Standard placement
        imageBgColor: 'bg-shades-off-white'
      },
      {
        ...mockFeaturesWithImages[2],
        imageExtendToBottom: true,
        imageBgColor: 'bg-gradient-to-br from-[#FFE8E8] to-[#FFF5F5]'
      },
      {
        ...mockFeaturesWithImages[3],
        imageExtendToBottom: false, // Standard placement
        imageBgColor: 'bg-shades-off-white'
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a mix of standard and bottom-extended image placements within the same section, demonstrating the flexibility of the component.'
      }
    }
  }
};
