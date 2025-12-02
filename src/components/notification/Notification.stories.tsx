import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Notification } from './Notification';
import type { NotificationProps } from './Notification.types';

const meta: Meta<typeof Notification> = {
  title: 'Components/Overlays/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Notification component for displaying alerts, confirmations, and status updates. Supports multiple variants, positions, and animations with full dark mode support.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['basic', 'condensed', 'actions', 'full'],
      description: 'The visual variant of the notification'
    },
    position: {
      control: 'select',
      options: ['top-right', 'bottom-left', 'top-center'],
      description: 'Position on screen (mobile always shows top-center full-width)'
    },
    animation: {
      control: 'select',
      options: ['slide', 'fade', 'bounce'],
      description: 'Animation type when notification appears'
    },
    icon: {
      control: 'text',
      description: 'Icon name from the icon library'
    },
    iconColor: {
      control: 'text',
      description: 'Tailwind class for icon color'
    },
    visible: {
      control: 'boolean',
      description: 'Controls visibility of the notification'
    },
    autoHideDuration: {
      control: 'number',
      description: 'Auto-hide duration in milliseconds (0 = no auto-hide)'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Notification>;

// Interactive wrapper for controlled visibility
const NotificationWrapper = (args: NotificationProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="min-h-screen p-l bg-background">
      <div className="mb-l">
        <button
          onClick={() => setVisible(true)}
          className="px-m py-s bg-primary-100 text-white rounded-s font-medium hover:bg-primary-50 transition-colors"
        >
          Show Notification
        </button>
      </div>
      <Notification {...args} visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export const Basic: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Completion Notification',
    description: 'A description on why the task was completed and what to do next.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'slide'
  }
};

export const Condensed: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'condensed',
    title: 'Wallet archived',
    position: 'top-right',
    animation: 'slide',
    primaryAction: {
      label: 'Undo',
      onClick: () => console.log('Undo clicked')
    }
  }
};

export const WithActions: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'actions',
    title: 'Wallet moved',
    description: 'A description on why the task was completed and what to do next.',
    icon: 'icon-wallet',
    iconColor: 'text-primary-100',
    position: 'top-right',
    animation: 'slide',
    primaryAction: {
      label: 'Undo',
      onClick: () => console.log('Undo clicked')
    },
    secondaryAction: {
      label: 'Dismiss',
      onClick: () => console.log('Dismiss clicked')
    }
  }
};

export const FullWithButton: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'full',
    title: 'Transaction received',
    description: 'A description on why the task was completed and what to do next.',
    icon: 'icon-received',
    iconColor: 'text-primary-100',
    position: 'top-right',
    animation: 'slide',
    primaryAction: {
      label: 'View Details',
      onClick: () => console.log('View Details clicked')
    },
    secondaryAction: {
      label: 'Dismiss',
      onClick: () => console.log('Dismiss clicked')
    }
  }
};

export const TopRight: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Top Right Position',
    description: 'This notification appears in the top-right corner.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'slide'
  }
};

export const BottomLeft: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Bottom Left Position',
    description: 'This notification appears in the bottom-left corner.',
    icon: 'icon-info-circle',
    iconColor: 'text-primary-100',
    position: 'bottom-left',
    animation: 'slide'
  }
};

export const TopCenter: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Top Center Position',
    description: 'This notification appears centered at the top.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-center',
    animation: 'slide'
  }
};

export const SlideAnimation: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Slide Animation',
    description: 'This notification slides in from the right side.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'slide'
  }
};

export const FadeAnimation: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Fade Animation',
    description: 'This notification fades in smoothly.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'fade'
  }
};

export const BounceAnimation: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Bounce Animation',
    description: 'This notification bounces in with a spring effect.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'bounce'
  }
};

export const AutoHide: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Auto-Hide Notification',
    description: 'This notification will automatically hide after 5 seconds.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'slide',
    autoHideDuration: 5000
  }
};

export const SuccessNotification: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Success!',
    description: 'Your action was completed successfully.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'bounce',
    autoHideDuration: 3000
  }
};

export const WarningNotification: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Warning',
    description: 'Please review this information before proceeding.',
    icon: 'icon-danger',
    iconColor: 'text-warning-100',
    position: 'top-right',
    animation: 'slide'
  }
};

export const ErrorNotification: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'actions',
    title: 'Error Occurred',
    description: 'An error occurred while processing your request.',
    icon: 'icon-info-circle',
    iconColor: 'text-alerts-100',
    position: 'top-right',
    animation: 'slide',
    primaryAction: {
      label: 'Retry',
      onClick: () => console.log('Retry clicked')
    },
    secondaryAction: {
      label: 'Dismiss',
      onClick: () => console.log('Dismiss clicked')
    }
  }
};

export const InfoNotification: Story = {
  render: (args) => <NotificationWrapper {...args} />,
  args: {
    variant: 'basic',
    title: 'Information',
    description: 'Here is some helpful information for you.',
    icon: 'icon-info-circle',
    iconColor: 'text-primary-100',
    position: 'top-right',
    animation: 'fade'
  }
};

export const DarkMode: Story = {
  render: (args) => (
    <div data-theme="dark" className="min-h-screen bg-background">
      <NotificationWrapper {...args} />
    </div>
  ),
  args: {
    variant: 'full',
    title: 'Dark Mode Notification',
    description: 'This notification is displayed in dark mode.',
    icon: 'icon-checkmark',
    iconColor: 'text-success-100',
    position: 'top-right',
    animation: 'slide',
    primaryAction: {
      label: 'View Details',
      onClick: () => console.log('View Details clicked')
    },
    secondaryAction: {
      label: 'Dismiss',
      onClick: () => console.log('Dismiss clicked')
    }
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

