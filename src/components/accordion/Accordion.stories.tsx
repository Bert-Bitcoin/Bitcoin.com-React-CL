import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import type { AccordionItemData } from './Accordion.types';

const meta = {
  title: 'Components/Content/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collapsible content component that displays a list of items that can be expanded and collapsed. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of accordion items to display',
      control: { type: 'object' }
    },
    defaultExpanded: {
      description: 'Array of initially expanded item IDs',
      control: { type: 'object' }
    },
    allowMultiple: {
      description: 'Allow multiple items to be expanded at once',
      control: { type: 'boolean' }
    },
    allowToggle: {
      description: 'Allow all items to be collapsed',
      control: { type: 'boolean' }
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    },
    onChange: {
      description: 'Callback when an item is expanded/collapsed',
      action: 'changed'
    }
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleItems: AccordionItemData[] = [
  {
    id: '1',
    title: 'Buy Bitcoin',
    content:
      'Bitcoin tends to crash when BOTH unemployment spikes AND yields jump, creating a "risk-off" environment. Historical examples include the COVID shock (March 2020: UNRATE hit 14.8%) and Fed tightening cycle (Oct 2022: DGS10 peaked at 4.2%). The data is updated monthly for UNRATE and daily for DGS10, sourced from Federal Reserve Economic Data (FRED).'
  },
  {
    id: '2',
    title: 'Self-Custody',
    content:
      'Self-custody gives you complete control over your cryptocurrency. You hold your private keys and are responsible for the security of your assets. This means no third party can freeze, lose, or take away your funds.'
  },
  {
    id: '3',
    title: 'Earn Rewards',
    content:
      'Earn rewards on your cryptocurrency holdings through various programs. Stake your assets, participate in DeFi protocols, or earn interest on your deposits. Rewards vary depending on the asset and platform.'
  },
  {
    id: '4',
    title: 'Swap Crypto',
    content:
      'Exchange one cryptocurrency for another quickly and easily. Compare rates across multiple exchanges and choose the best deal. Swaps are typically processed within minutes.'
  }
];

const shortItems: AccordionItemData[] = [
  {
    id: '1',
    title: 'What is Bitcoin?',
    content: 'Bitcoin is a decentralized digital currency created in 2009.'
  },
  {
    id: '2',
    title: 'How do I buy Bitcoin?',
    content: 'You can buy Bitcoin through various cryptocurrency exchanges and platforms.'
  }
];

/**
 * Default accordion with the first item expanded
 */
export const Default: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['1'],
    allowMultiple: true,
    allowToggle: true
  }
};

/**
 * All items collapsed by default
 */
export const AllCollapsed: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: [],
    allowMultiple: true,
    allowToggle: true
  }
};

/**
 * Multiple items expanded
 */
export const MultipleExpanded: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['1', '3'],
    allowMultiple: true,
    allowToggle: true
  }
};

/**
 * Single item mode - only one item can be expanded at a time
 */
export const SingleItemMode: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['2'],
    allowMultiple: false,
    allowToggle: true
  }
};

/**
 * Always one item expanded - at least one item must be open
 */
export const AlwaysOneExpanded: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['1'],
    allowMultiple: false,
    allowToggle: false
  }
};

/**
 * Short content items
 */
export const ShortContent: Story = {
  args: {
    items: shortItems,
    defaultExpanded: ['1'],
    allowMultiple: true,
    allowToggle: true
  }
};

/**
 * Custom width accordion
 */
export const CustomWidth: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['1'],
    allowMultiple: true,
    allowToggle: true,
    className: 'max-w-[600px]'
  }
};

/**
 * With onChange callback
 */
export const WithOnChange: Story = {
  args: {
    items: sampleItems,
    defaultExpanded: ['1'],
    allowMultiple: true,
    allowToggle: true,
    onChange: (expandedIds) => {
      console.log('Expanded items:', expandedIds);
    }
  }
};

