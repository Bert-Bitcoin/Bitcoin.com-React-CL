import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Icon } from '../icon';
import { MenuDropdown } from './MenuDropdown';

const meta = {
  title: 'Components/Navigation/MenuDropdown',
  component: MenuDropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component with smart positioning, mobile support, and optional icons. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['auto', 'bottom-left', 'bottom-right', 'top-left', 'top-right']
    }
  }
} satisfies Meta<typeof MenuDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default menu with icons
 */
export const Default: Story = {
  args: {
    sections: [
      {
        items: [
          {
            id: 'read',
            label: 'Read',
            icon: 'icon-book-saved',
            onClick: () => alert('Read clicked')
          },
          {
            id: 'duplicate',
            label: 'Duplicate',
            icon: 'icon-copy',
            onClick: () => alert('Duplicate clicked')
          }
        ]
      },
      {
        items: [
          {
            id: 'archive',
            label: 'Archive',
            icon: 'icon-archive',
            onClick: () => alert('Archive clicked')
          },
          {
            id: 'move',
            label: 'Move',
            icon: 'icon-backup',
            onClick: () => alert('Move clicked')
          }
        ]
      },
      {
        items: [
          {
            id: 'delete',
            label: 'Delete',
            icon: 'icon-delete',
            variant: 'danger',
            onClick: () => alert('Delete clicked')
          }
        ]
      }
    ]
  }
};

/**
 * Menu without icons (text only)
 */
export const WithoutIcons: Story = {
  args: {
    sections: [
      {
        items: [
          {
            id: 'edit',
            label: 'Edit',
            onClick: () => alert('Edit clicked')
          },
          {
            id: 'duplicate',
            label: 'Duplicate',
            onClick: () => alert('Duplicate clicked')
          },
          {
            id: 'share',
            label: 'Share',
            onClick: () => alert('Share clicked')
          }
        ]
      },
      {
        items: [
          {
            id: 'delete',
            label: 'Delete',
            variant: 'danger',
            onClick: () => alert('Delete clicked')
          }
        ]
      }
    ]
  }
};

/**
 * Menu with mixed items (some with icons, some without)
 */
export const MixedItems: Story = {
  args: {
    sections: [
      {
        items: [
          {
            id: 'view',
            label: 'View Details',
            icon: 'icon-eye',
            onClick: () => alert('View clicked')
          },
          {
            id: 'edit',
            label: 'Edit',
            onClick: () => alert('Edit clicked')
          },
          {
            id: 'copy',
            label: 'Copy Link',
            icon: 'icon-link',
            onClick: () => alert('Copy clicked')
          }
        ]
      }
    ]
  }
};

/**
 * Custom trigger button
 */
export const CustomTrigger: Story = {
  args: {
    trigger: (
      <Button variant="secondary" size="md">
        <Icon type="icon-more" size="sm" />
      </Button>
    ),
    sections: [
      {
        items: [
          {
            id: 'settings',
            label: 'Settings',
            icon: 'icon-setting',
            onClick: () => alert('Settings clicked')
          },
          {
            id: 'profile',
            label: 'Profile',
            icon: 'icon-profile',
            onClick: () => alert('Profile clicked')
          }
        ]
      },
      {
        items: [
          {
            id: 'logout',
            label: 'Logout',
            icon: 'icon-logout',
            variant: 'danger',
            onClick: () => alert('Logout clicked')
          }
        ]
      }
    ]
  }
};

/**
 * Menu with disabled items
 */
export const WithDisabledItems: Story = {
  args: {
    sections: [
      {
        items: [
          {
            id: 'available',
            label: 'Available Action',
            icon: 'icon-tick-circle',
            onClick: () => alert('Available clicked')
          },
          {
            id: 'disabled',
            label: 'Disabled Action',
            icon: 'icon-close-circle',
            disabled: true,
            onClick: () => alert('This should not appear')
          },
          {
            id: 'another',
            label: 'Another Action',
            onClick: () => alert('Another clicked')
          }
        ]
      }
    ]
  }
};

/**
 * Fixed bottom-right position
 */
export const BottomRight: Story = {
  args: {
    position: 'bottom-right',
    sections: [
      {
        items: [
          {
            id: 'option1',
            label: 'Option 1',
            icon: 'icon-star',
            onClick: () => alert('Option 1')
          },
          {
            id: 'option2',
            label: 'Option 2',
            icon: 'icon-heart',
            onClick: () => alert('Option 2')
          }
        ]
      }
    ]
  }
};

/**
 * Fixed bottom-left position
 */
export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
    sections: [
      {
        items: [
          {
            id: 'option1',
            label: 'Option 1',
            icon: 'icon-star',
            onClick: () => alert('Option 1')
          },
          {
            id: 'option2',
            label: 'Option 2',
            icon: 'icon-heart',
            onClick: () => alert('Option 2')
          }
        ]
      }
    ]
  }
};

/**
 * Mobile-friendly example
 */
export const MobileFriendly: Story = {
  args: {
    position: 'auto',
    sections: [
      {
        items: [
          {
            id: 'share',
            label: 'Share',
            icon: 'icon-share',
            onClick: () => alert('Share')
          },
          {
            id: 'save',
            label: 'Save',
            icon: 'icon-save-2',
            onClick: () => alert('Save')
          },
          {
            id: 'download',
            label: 'Download',
            icon: 'icon-document-download',
            onClick: () => alert('Download')
          }
        ]
      },
      {
        items: [
          {
            id: 'report',
            label: 'Report',
            icon: 'icon-warning-2',
            variant: 'danger',
            onClick: () => alert('Report')
          }
        ]
      }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <p className="text-label mb-m">
          This menu uses 'auto' positioning to adapt based on available screen space.
          Try resizing the viewport!
        </p>
        <Story />
      </div>
    )
  ]
};

/**
 * Multiple sections example
 */
export const MultipleSections: Story = {
  args: {
    sections: [
      {
        items: [
          {
            id: 'view',
            label: 'View',
            icon: 'icon-eye'
          },
          {
            id: 'edit',
            label: 'Edit',
            icon: 'icon-edit'
          }
        ]
      },
      {
        items: [
          {
            id: 'copy',
            label: 'Copy',
            icon: 'icon-copy'
          },
          {
            id: 'move',
            label: 'Move',
            icon: 'icon-export'
          }
        ]
      },
      {
        items: [
          {
            id: 'archive',
            label: 'Archive',
            icon: 'icon-archive'
          }
        ]
      },
      {
        items: [
          {
            id: 'delete',
            label: 'Delete',
            icon: 'icon-trash',
            variant: 'danger'
          }
        ]
      }
    ]
  }
};

