import type { Meta, StoryObj } from '@storybook/react';
import { WebLayout } from './WebLayout';

const meta = {
  title: 'Layouts/WebLayout',
  component: WebLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A full-page layout component for marketing/website pages with header and footer.

## Features
- Header with navigation and action button
- Flexible content area that grows to fill available space
- Website footer with links and app download badges
- Full viewport height layout
- Responsive design

## Usage
This layout is designed for marketing pages, landing pages, and public-facing website content.
The content area is meant to be filled with section components.

\`\`\`tsx
import { WebLayout } from '@bitcoin-portal/design-system';

function MyPage() {
  return (
    <WebLayout>
      <YourContentSections />
    </WebLayout>
  );
}
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content to be rendered in the main content area',
      control: false
    },
    headerProps: {
      description: 'Props to pass to the Header component',
      control: 'object'
    },
    footerProps: {
      description: 'Props to pass to the WebsiteFooter component',
      control: 'object'
    },
    className: {
      description: 'Additional CSS classes for the layout container',
      control: 'text'
    },
    contentClassName: {
      description: 'Additional CSS classes for the content area',
      control: 'text'
    }
  }
} satisfies Meta<typeof WebLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default WebLayout with placeholder content
 */
export const Default: Story = {
  args: {
    children: (
      <div className="flex items-center justify-center min-h-[400px] bg-shades-white">
        <p className="text-heading-md text-shades-semi-dark">Content Placeholder</p>
      </div>
    )
  }
};

