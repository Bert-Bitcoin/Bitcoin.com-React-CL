import type { Meta, StoryObj } from '@storybook/react';
import { FeaturesSection } from './FeaturesSection';
import type { FeaturesSectionProps } from './FeaturesSection.types';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Sections/Website/Features Section',
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

const mockFeaturesWithImages: FeaturesSectionProps['features'] = mockFeatures.map((feature) => ({
  ...feature,
  imageElement: (
    <div className="w-full h-full flex items-center justify-center text-[#FFF] text-sm font-medium bg-alerts-100">
      <div className="text-center">
        <div className="text-4xl mb-2">🎮</div>
        <p>Your illustration here</p>
      </div>
    </div>
  )
}));

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
