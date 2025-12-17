import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../button';
import { Input } from '../input';
import { Table } from '../table';
import { TextArea } from '../textarea';
import { Window } from './Window';
import type { WindowProps } from './Window.types';

const meta: Meta<typeof Window> = {
  title: 'Components/Overlays/Window',
  component: Window,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Window component that displays content in an overlay with a header and scrollable content area. Windows appear centered on the screen with a maximum height of 90vh.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the window is visible'
    },
    title: {
      control: 'text',
      description: 'The title text displayed in the window header'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in the header'
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking the backdrop should close the window'
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when the window should close'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const WindowWithState = (props: Omit<WindowProps, 'open' | 'onClose'>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Window</Button>
      <Window {...props} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

/**
 * Default window with simple content
 */
export const Default: Story = {
  render: () => (
    <WindowWithState
      title="Window Title"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m">
        <p className="text-shades-dark mb-4">
          This is the default window with some simple content.
        </p>
        <p className="text-shades-dark">
          The content area is scrollable when the content exceeds the available height.
        </p>
      </div>
    </WindowWithState>
  )
};

/**
 * Window with long scrollable content
 */
export const LongContent: Story = {
  render: () => (
    <WindowWithState
      title="Scrollable Content"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m">
        <h3 className="font-['Elza_Narrow'] font-black text-[20px] leading-[0.94] text-shades-black uppercase mb-4">
          Long Content Example
        </h3>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-shades-dark mb-4">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>
    </WindowWithState>
  )
};

/**
 * Window with a form
 */
export const WithForm: Story = {
  render: () => (
    <WindowWithState
      title="Contact Form"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m">
        <form className="space-y-4">
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            fullWidth
            size="md"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            fullWidth
            size="md"
          />

          <TextArea
            label="Message"
            rows={5}
            placeholder="Enter your message"
            size="md"
          />

          <div className="flex gap-s justify-end pt-2">
            <Button variant="default">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </div>
        </form>
      </div>
    </WindowWithState>
  )
};

/**
 * Window with rich content including headings and lists
 */
export const WithRichContent: Story = {
  render: () => (
    <WindowWithState
      title="Terms and Conditions"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m space-y-6">
        <section>
          <h3 className="font-['Elza_Narrow'] font-black text-[20px] leading-[0.94] text-shades-black uppercase mb-4">
            Introduction
          </h3>
          <p className="text-shades-dark mb-4">
            These terms and conditions outline the rules and regulations for the use of our
            services.
          </p>
        </section>

        <section>
          <h3 className="font-['Elza_Narrow'] font-black text-[20px] leading-[0.94] text-shades-black uppercase mb-4">
            User Agreement
          </h3>
          <ul className="list-disc list-inside text-shades-dark space-y-2">
            <li>You must be at least 18 years old to use our services</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You agree not to use our services for any unlawful purpose</li>
            <li>We reserve the right to suspend or terminate accounts at our discretion</li>
          </ul>
        </section>

        <section>
          <h3 className="font-['Elza_Narrow'] font-black text-[20px] leading-[0.94] text-shades-black uppercase mb-4">
            Privacy Policy
          </h3>
          <p className="text-shades-dark mb-4">
            We collect and process your personal data in accordance with applicable data protection
            laws. Your information is used to provide and improve our services.
          </p>
        </section>

        <section>
          <h3 className="font-['Elza_Narrow'] font-black text-[20px] leading-[0.94] text-shades-black uppercase mb-4">
            Limitation of Liability
          </h3>
          <p className="text-shades-dark ">
            In no event shall our company be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of the service.
          </p>
        </section>

        <div className="pt-4 border-t border-shades-light">
          <Button variant="primary" fullWidth>
            Accept Terms
          </Button>
        </div>
      </div>
    </WindowWithState>
  )
};

/**
 * Window without close button
 */
export const NoCloseButton: Story = {
  render: () => (
    <WindowWithState
      title="No Close Button"
      showCloseButton={false}
      closeOnBackdropClick={false}
    >
      <div className="p-m">
        <p className="text-shades-dark mb-4">
          This window has no close button. You must use the cancel button to close it.
        </p>
        <div className="flex gap-s justify-end">
          <Button variant="default">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    </WindowWithState>
  )
};

/**
 * Window with custom styling
 */
export const CustomStyling: Story = {
  render: () => (
    <WindowWithState
      title="Custom Styled Window"
      className="max-w-[600px]"
      contentClassName="bg-shades-off-white "
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-l">
        <p className="text-shades-dark mb-4">
          This window has custom styling applied through className and contentClassName props.
        </p>
        <p className="text-shades-dark">
          The content area has a different background color and the window has a custom max width.
        </p>
      </div>
    </WindowWithState>
  )
};

/**
 * Window with image gallery
 */
export const WithImageGallery: Story = {
  render: () => (
    <WindowWithState
      title="Image Gallery"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="aspect-square bg-shades-light  rounded flex items-center justify-center"
            >
              <span className="text-shades-mid ">Image {i + 1}</span>
            </div>
          ))}
        </div>
        <p className="text-shades-dark text-center">
          Scroll to see all images in the gallery
        </p>
      </div>
    </WindowWithState>
  )
};

/**
 * Window with data table
 */
export const WithDataTable: Story = {
  render: () => (
    <WindowWithState
      title="Transaction History"
      showCloseButton={true}
      closeOnBackdropClick={true}
    >
      <div className="p-m">
        <Table
          columns={[
            {
              id: 'date',
              label: 'Date',
              accessor: 'date',
              type: 'text',
              align: 'left',
              sortable: true
            },
            {
              id: 'description',
              label: 'Description',
              accessor: 'description',
              type: 'text',
              align: 'left'
            },
            {
              id: 'amount',
              label: 'Amount',
              accessor: 'amount',
              type: 'numeric',
              align: 'right',
              sortable: true
            }
          ]}
          data={Array.from({ length: 15 }, (_, i) => ({
            id: i + 1,
            date: `2024-${String(i + 1).padStart(2, '0')}-15`,
            description: `Transaction #${i + 1}`,
            amount: `$${(Math.random() * 1000).toFixed(2)}`
          }))}
          variant="default"
          enableSorting={true}
          getRowKey={(row) => row.id}
        />
      </div>
    </WindowWithState>
  )
};

