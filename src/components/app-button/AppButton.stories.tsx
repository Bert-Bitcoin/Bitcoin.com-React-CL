import type { Meta, StoryObj } from '@storybook/react';
import { AppButton } from './AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'Components/buttons/AppButton',
  component: AppButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'select',
      options: ['appstore', 'googleplay', 'qr'],
      description: 'Platform - determines which app button type to display'
    },
    variant: {
      control: 'select',
      options: ['light', 'dark', 'outline-light', 'outline-dark', 'color'],
      description: 'Visual variant - light, dark, outline-light, outline-dark, or color style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
    },
    href: {
      control: 'text',
      description: 'The URL to the app store listing or QR code destination'
    }
  }
};

export default meta;
type Story = StoryObj<typeof AppButton>;

// App Store variations
export const AppStoreDark: Story = {
  args: {
    platform: 'appstore',
    variant: 'dark',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

export const AppStoreLight: Story = {
  args: {
    platform: 'appstore',
    variant: 'light',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

export const AppStoreOutlineLight: Story = {
  args: {
    platform: 'appstore',
    variant: 'outline-light',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

export const AppStoreOutlineDark: Story = {
  args: {
    platform: 'appstore',
    variant: 'outline-dark',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

export const AppStoreColor: Story = {
  args: {
    platform: 'appstore',
    variant: 'color',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

// Google Play variations
export const GooglePlayDark: Story = {
  args: {
    platform: 'googleplay',
    variant: 'dark',
    size: 'md',
    href: 'https://play.google.com/store/apps/details?id=example'
  }
};

export const GooglePlayLight: Story = {
  args: {
    platform: 'googleplay',
    variant: 'light',
    size: 'md',
    href: 'https://play.google.com/store/apps/details?id=example'
  }
};

export const GooglePlayOutlineLight: Story = {
  args: {
    platform: 'googleplay',
    variant: 'outline-light',
    size: 'md',
    href: 'https://play.google.com/store/apps/details?id=example'
  }
};

export const GooglePlayOutlineDark: Story = {
  args: {
    platform: 'googleplay',
    variant: 'outline-dark',
    size: 'md',
    href: 'https://play.google.com/store/apps/details?id=example'
  }
};

export const GooglePlayColor: Story = {
  args: {
    platform: 'googleplay',
    variant: 'color',
    size: 'md',
    href: 'https://play.google.com/store/apps/details?id=example'
  }
};

// QR variations
export const QRDark: Story = {
  args: {
    platform: 'qr',
    variant: 'dark',
    size: 'md',
    href: 'https://example.com/download'
  }
};

export const QRLight: Story = {
  args: {
    platform: 'qr',
    variant: 'light',
    size: 'md',
    href: 'https://example.com/download'
  }
};

export const QROutlineLight: Story = {
  args: {
    platform: 'qr',
    variant: 'outline-light',
    size: 'md',
    href: 'https://example.com/download'
  }
};

export const QROutlineDark: Story = {
  args: {
    platform: 'qr',
    variant: 'outline-dark',
    size: 'md',
    href: 'https://example.com/download'
  }
};

export const QRColor: Story = {
  args: {
    platform: 'qr',
    variant: 'color',
    size: 'md',
    href: 'https://example.com/download'
  }
};

// Size variations
export const Small: Story = {
  args: {
    platform: 'appstore',
    variant: 'dark',
    size: 'sm',
    href: 'https://apps.apple.com/app/example'
  }
};

export const Medium: Story = {
  args: {
    platform: 'appstore',
    variant: 'dark',
    size: 'md',
    href: 'https://apps.apple.com/app/example'
  }
};

export const Large: Story = {
  args: {
    platform: 'appstore',
    variant: 'dark',
    size: 'lg',
    href: 'https://apps.apple.com/app/example'
  }
};

// Complete matrix showcase
export const AllVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-xl p-l">
      {/* App Store */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-md">App Store</h3>
        
        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="appstore" variant="dark" size="sm" href="#" />
            <AppButton platform="appstore" variant="dark" size="md" href="#" />
            <AppButton platform="appstore" variant="dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-extra-light p-m rounded-lg">
            <AppButton platform="appstore" variant="light" size="sm" href="#" />
            <AppButton platform="appstore" variant="light" size="md" href="#" />
            <AppButton platform="appstore" variant="light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="appstore" variant="outline-dark" size="sm" href="#" />
            <AppButton platform="appstore" variant="outline-dark" size="md" href="#" />
            <AppButton platform="appstore" variant="outline-dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-black p-m rounded-lg">
            <AppButton platform="appstore" variant="outline-light" size="sm" href="#" />
            <AppButton platform="appstore" variant="outline-light" size="md" href="#" />
            <AppButton platform="appstore" variant="outline-light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Color</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="appstore" variant="color" size="sm" href="#" />
            <AppButton platform="appstore" variant="color" size="md" href="#" />
            <AppButton platform="appstore" variant="color" size="lg" href="#" />
          </div>
        </div>
      </div>

      {/* Google Play */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-md">Google Play</h3>
        
        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="googleplay" variant="dark" size="sm" href="#" />
            <AppButton platform="googleplay" variant="dark" size="md" href="#" />
            <AppButton platform="googleplay" variant="dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-extra-light p-m rounded-lg">
            <AppButton platform="googleplay" variant="light" size="sm" href="#" />
            <AppButton platform="googleplay" variant="light" size="md" href="#" />
            <AppButton platform="googleplay" variant="light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="googleplay" variant="outline-dark" size="sm" href="#" />
            <AppButton platform="googleplay" variant="outline-dark" size="md" href="#" />
            <AppButton platform="googleplay" variant="outline-dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-black p-m rounded-lg">
            <AppButton platform="googleplay" variant="outline-light" size="sm" href="#" />
            <AppButton platform="googleplay" variant="outline-light" size="md" href="#" />
            <AppButton platform="googleplay" variant="outline-light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Color</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="googleplay" variant="color" size="sm" href="#" />
            <AppButton platform="googleplay" variant="color" size="md" href="#" />
            <AppButton platform="googleplay" variant="color" size="lg" href="#" />
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col gap-m">
        <h3 className="text-heading-md">QR Code</h3>
        
        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="qr" variant="dark" size="sm" href="#" />
            <AppButton platform="qr" variant="dark" size="md" href="#" />
            <AppButton platform="qr" variant="dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-extra-light p-m rounded-lg">
            <AppButton platform="qr" variant="light" size="sm" href="#" />
            <AppButton platform="qr" variant="light" size="md" href="#" />
            <AppButton platform="qr" variant="light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Dark</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="qr" variant="outline-dark" size="sm" href="#" />
            <AppButton platform="qr" variant="outline-dark" size="md" href="#" />
            <AppButton platform="qr" variant="outline-dark" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Outline Light</p>
          <div className="flex flex-wrap gap-m items-center bg-shades-black p-m rounded-lg">
            <AppButton platform="qr" variant="outline-light" size="sm" href="#" />
            <AppButton platform="qr" variant="outline-light" size="md" href="#" />
            <AppButton platform="qr" variant="outline-light" size="lg" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-s">
          <p className="text-label-sm text-text-secondary">Color</p>
          <div className="flex flex-wrap gap-m items-center">
            <AppButton platform="qr" variant="color" size="sm" href="#" />
            <AppButton platform="qr" variant="color" size="md" href="#" />
            <AppButton platform="qr" variant="color" size="lg" href="#" />
          </div>
        </div>
      </div>
    </div>
  )
};

// In context usage
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-l p-l max-w-[600px]">
      <div className="flex flex-col gap-m">
        <h2 className="text-heading-lg">Download Our App</h2>
        <p className="text-body text-text-secondary">
          Get started with our mobile app. Available on iOS and Android, or scan the QR code for instant access.
        </p>
        <div className="flex flex-wrap gap-m">
          <AppButton
            platform="appstore"
            variant="dark"
            size="md"
            href="https://apps.apple.com/app/example"
          />
          <AppButton
            platform="googleplay"
            variant="dark"
            size="md"
            href="https://play.google.com/store/apps/details?id=example"
          />
          <AppButton
            platform="qr"
            variant="outline-dark"
            size="md"
            href="https://example.com/download"
          />
        </div>
      </div>
    </div>
  )
};

// Theme variations
export const LightTheme: Story = {
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  render: () => (
    <div className="flex flex-col gap-l p-l">
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Dark Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="dark" size="md" href="#" />
          <AppButton platform="googleplay" variant="dark" size="md" href="#" />
          <AppButton platform="qr" variant="dark" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Light Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="light" size="md" href="#" />
          <AppButton platform="googleplay" variant="light" size="md" href="#" />
          <AppButton platform="qr" variant="light" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Outline Dark Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="outline-dark" size="md" href="#" />
          <AppButton platform="googleplay" variant="outline-dark" size="md" href="#" />
          <AppButton platform="qr" variant="outline-dark" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Outline Light Variant</h4>
        <div className="flex flex-wrap gap-m bg-shades-black p-m rounded-lg">
          <AppButton platform="appstore" variant="outline-light" size="md" href="#" />
          <AppButton platform="googleplay" variant="outline-light" size="md" href="#" />
          <AppButton platform="qr" variant="outline-light" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Color Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="color" size="md" href="#" />
          <AppButton platform="googleplay" variant="color" size="md" href="#" />
          <AppButton platform="qr" variant="color" size="md" href="#" />
        </div>
      </div>
    </div>
  )
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    (Story) => (
      <div data-theme="dark">
        <Story />
      </div>
    )
  ],
  render: () => (
    <div className="flex flex-col gap-l p-l">
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Dark Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="dark" size="md" href="#" />
          <AppButton platform="googleplay" variant="dark" size="md" href="#" />
          <AppButton platform="qr" variant="dark" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Light Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="light" size="md" href="#" />
          <AppButton platform="googleplay" variant="light" size="md" href="#" />
          <AppButton platform="qr" variant="light" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Outline Dark Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="outline-dark" size="md" href="#" />
          <AppButton platform="googleplay" variant="outline-dark" size="md" href="#" />
          <AppButton platform="qr" variant="outline-dark" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Outline Light Variant</h4>
        <div className="flex flex-wrap gap-m bg-shades-black p-m rounded-lg">
          <AppButton platform="appstore" variant="outline-light" size="md" href="#" />
          <AppButton platform="googleplay" variant="outline-light" size="md" href="#" />
          <AppButton platform="qr" variant="outline-light" size="md" href="#" />
        </div>
      </div>
      
      <div className="flex flex-col gap-m">
        <h4 className="text-heading-sm">Color Variant</h4>
        <div className="flex flex-wrap gap-m">
          <AppButton platform="appstore" variant="color" size="md" href="#" />
          <AppButton platform="googleplay" variant="color" size="md" href="#" />
          <AppButton platform="qr" variant="color" size="md" href="#" />
        </div>
      </div>
    </div>
  )
};
