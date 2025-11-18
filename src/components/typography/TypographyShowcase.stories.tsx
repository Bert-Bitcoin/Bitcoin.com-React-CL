import type { Meta, StoryObj } from '@storybook/react';

import { TypographyShowcase } from './TypographyShowcase';

const meta: Meta<typeof TypographyShowcase> = {
  title: 'Foundation/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'Canvas',
      values: [
        { name: 'Canvas', value: '#f9f9fb' },
        { name: 'Dark', value: '#1c1c1c' }
      ]
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof TypographyShowcase>;

export const Gallery: Story = {};


