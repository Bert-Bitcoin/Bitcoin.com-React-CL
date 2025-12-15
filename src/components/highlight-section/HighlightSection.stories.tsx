import type { Meta, StoryObj } from '@storybook/react';
import { HighlightSection } from './HighlightSection';
import { Illustration } from '../illustration';
import { Button } from '../button';
import { Icon } from '../icon';

const meta: Meta<typeof HighlightSection> = {
  title: 'Sections/Website/Highlight',
  component: HighlightSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive website section for highlighting a key feature or call-to-action with an image and text layout. The Image Holder container can accept any transparent PNG illustration or image element. On mobile, text appears first, followed by the image.'
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
      description: 'Main heading text'
    },
    description: {
      control: 'text',
      description: 'Description text'
    },
    buttonText: {
      control: 'text',
      description: 'CTA button text'
    },
    imagePosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the image (on desktop)'
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL (alternative to imageElement)'
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for image'
    }
  }
};

export default meta;
type Story = StoryObj<typeof HighlightSection>;

// Illustration paths
const illustrations = {
  learn: '/src/illustrations/Illustration-Learn.svg',
  gaming: '/src/illustrations/Illustration-Gaming.svg',
  wallet: '/src/illustrations/Illustration-Wallet.svg',
  rewards: '/src/illustrations/Illustration-Rewards.svg',
  swap: '/src/illustrations/Illustration-Bitcoin-Ethereum.svg'
};

export const LightStyleImageLeft: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const LightStyleImageRight: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'right',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const GrayStyleImageLeft: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const GrayStyleImageRight: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'right',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const DarkStyleImageLeft: Story = {
  args: {
    themeMode: 'auto',
    style: 'dark',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const DarkStyleImageRight: Story = {
  args: {
    themeMode: 'auto',
    style: 'dark',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'right',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const WithoutImage: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked')
  }
};

export const CustomContent: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Start Gaming with Bitcoin',
    description: 'Discover the best Bitcoin casino games and start playing today with instant deposits and withdrawals.',
    buttonText: 'Get Started',
    imagePosition: 'right',
    onButtonClick: () => console.log('Get Started clicked'),
    imageElement: (
      <Illustration
        src={illustrations.gaming}
        alt="Gaming Illustration"
        size="full"
        objectFit="contain"
      />
    )
  }
};

export const ForceLightTheme: Story = {
  args: {
    themeMode: 'light',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
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
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    onButtonClick: () => console.log('Learn More clicked'),
    imageElement: (
      <Illustration
        src={illustrations.learn}
        alt="Learn Illustration"
        size="full"
        objectFit="contain"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Force dark theme regardless of system preference'
      }
    }
  }
};

export const WithImageUrl: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    buttonText: 'Learn More',
    imagePosition: 'left',
    imageUrl: illustrations.learn,
    imageAlt: 'Bitcoin Platform Illustration',
    onButtonClick: () => console.log('Learn More clicked')
  },
  parameters: {
    docs: {
      description: {
        story: 'Using imageUrl prop instead of imageElement for easier image switching'
      }
    }
  }
};

export const WithCustomCTA: Story = {
  args: {
    themeMode: 'auto',
    style: 'light',
    heading: 'Your all-in-one Bitcoin platform',
    description: 'Browse and compare businesses and services that accept cryptocurrency, featuring expert reviews and real user feedback to help you make informed choices.',
    imagePosition: 'left',
    imageUrl: illustrations.learn,
    imageAlt: 'Bitcoin Platform Illustration',
    ctaElement: (
      <div className="flex gap-s">
        <Button
          variant="primary"
          size="md"
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </Button>
        <Button
          variant="secondary"
          size="md"
          trailingIcon={<Icon type="icon-right-arrow" size="sm" ariaHidden />}
          onClick={() => console.log('Learn More clicked')}
        >
          Learn More
        </Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom CTA with multiple buttons using the ctaElement prop'
      }
    }
  }
};

export const WithCustomCTALink: Story = {
  args: {
    themeMode: 'auto',
    style: 'gray',
    heading: 'Start Gaming Today',
    description: 'Join thousands of players enjoying Bitcoin casino games with instant deposits and withdrawals.',
    imagePosition: 'right',
    imageUrl: illustrations.gaming,
    imageAlt: 'Gaming Illustration',
    ctaElement: (
      <div className="flex flex-col gap-s">
        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log('Sign Up clicked')}
        >
          Sign Up Now
        </Button>
        <p className="font-['Satoshi_Variable'] text-sm text-shades-semi-dark">
          Already have an account?{' '}
          <a 
            href="#" 
            className="text-secondary-100 hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              console.log('Log In clicked');
            }}
          >
            Log In
          </a>
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom CTA with button and text link'
      }
    }
  }
};

