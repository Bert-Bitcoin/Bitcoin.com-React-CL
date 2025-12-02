import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../button';
import { CoinsIllustration } from '../mini-illustrations';
import { Modal } from './Modal';
import type { ModalProps } from './Modal.types';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal component for displaying confirmations, alerts, and important messages. Supports both portrait and landscape layouts with light/dark mode.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls modal visibility'
    },
    type: {
      control: 'select',
      options: ['confirm', 'alert'],
      description: 'Modal type - determines button layout'
    },
    style: {
      control: 'select',
      options: ['portrait', 'landscape'],
      description: 'Layout style'
    },
    size: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Modal size'
    },
    title: {
      control: 'text',
      description: 'Modal title'
    },
    description: {
      control: 'text',
      description: 'Modal description text'
    },
    confirmText: {
      control: 'text',
      description: 'Confirm button text'
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button (X) in landscape mode'
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Close modal when clicking backdrop'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper component for interactive stories
const ModalWrapper = (props: Omit<ModalProps, 'open' | 'onClose'>) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

// Default - Confirm Portrait
export const ConfirmPortraitDefault: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="portrait"
      size="default"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      cancelText="Cancel"
      onConfirm={() => console.log('Confirmed')}
      onCancel={() => console.log('Cancelled')}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default portrait modal with confirm and cancel buttons'
      }
    }
  }
};

// Confirm Portrait Compact
export const ConfirmPortraitCompact: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="portrait"
      size="compact"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      cancelText="Cancel"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact size portrait modal'
      }
    }
  }
};

// Alert Portrait Default
export const AlertPortraitDefault: Story = {
  render: () => (
    <ModalWrapper
      type="alert"
      style="portrait"
      size="default"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      onConfirm={() => console.log('Confirmed')}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert modal with only confirm button (no cancel)'
      }
    }
  }
};

// Alert Portrait Compact
export const AlertPortraitCompact: Story = {
  render: () => (
    <ModalWrapper
      type="alert"
      style="portrait"
      size="compact"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact alert modal'
      }
    }
  }
};

// Confirm Landscape Default
export const ConfirmLandscapeDefault: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="landscape"
      size="default"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      cancelText="Cancel"
      showCloseButton={false}
      onConfirm={() => console.log('Confirmed')}
      onCancel={() => console.log('Cancelled')}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Landscape modal with horizontal layout (switches to portrait on mobile)'
      }
    }
  }
};

// Confirm Landscape Compact
export const ConfirmLandscapeCompact: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="landscape"
      size="compact"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      cancelText="Cancel"
      showCloseButton={false}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact landscape modal'
      }
    }
  }
};

// Alert Landscape Default
export const AlertLandscapeDefault: Story = {
  render: () => (
    <ModalWrapper
      type="alert"
      style="landscape"
      size="default"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      showCloseButton={true}
      onConfirm={() => console.log('Confirmed')}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert landscape modal with close button'
      }
    }
  }
};

// Alert Landscape Compact
export const AlertLandscapeCompact: Story = {
  render: () => (
    <ModalWrapper
      type="alert"
      style="landscape"
      size="compact"
      title="Large Title"
      description="These modals are designed and built by the team, and include a variety of different styles and layouts."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Confirm"
      showCloseButton={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact alert landscape modal with close button'
      }
    }
  }
};

// Without Illustration
export const WithoutIllustration: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="portrait"
      size="default"
      title="Simple Modal"
      description="This modal does not have an illustration"
      confirmText="OK"
      cancelText="Cancel"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal without an illustration'
      }
    }
  }
};

// Custom Text
export const CustomText: Story = {
  render: () => (
    <ModalWrapper
      type="confirm"
      style="portrait"
      size="default"
      title="Delete Account"
      description="Are you sure you want to delete your account? This action cannot be undone."
      illustration={<CoinsIllustration className="w-full h-full" />}
      confirmText="Delete"
      cancelText="Keep Account"
      onConfirm={() => console.log('Account deleted')}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom confirmation text'
      }
    }
  }
};

// Dark Mode
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-shades-black p-8 min-h-screen">
      <ModalWrapper
        type="confirm"
        style="portrait"
        size="default"
        title="Large Title"
        description="These modals are designed and built by the team, and include a variety of different styles and layouts."
        illustration={<CoinsIllustration className="w-full h-full" />}
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal in dark mode'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
};

// Controlled Example
export const Controlled: Story = {
  render: function ControlledModal() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Button variant="default" onClick={() => setOpen(false)}>
            Close Modal
          </Button>
        </div>
        <p className="text-body-sm text-shades-dark">
          Modal is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          type="confirm"
          style="portrait"
          size="default"
          title="Controlled Modal"
          description="This modal's state is controlled externally"
          illustration={<CoinsIllustration className="w-full h-full" />}
          confirmText="Confirm"
          cancelText="Cancel"
          onConfirm={() => {
            console.log('Confirmed');
            setOpen(false);
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled modal with external state management'
      }
    }
  }
};

