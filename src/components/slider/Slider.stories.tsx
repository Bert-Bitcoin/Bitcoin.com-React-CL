import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Slider } from './Slider';

const meta = {
  title: 'Components/Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A slider component for selecting a value within a range. Based on the Bitcoin.com design system.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'Current value of the slider',
      control: { type: 'number' }
    },
    onChange: {
      description: 'Callback when value changes',
      action: 'changed'
    },
    min: {
      description: 'Minimum value',
      control: { type: 'number' }
    },
    max: {
      description: 'Maximum value',
      control: { type: 'number' }
    },
    step: {
      description: 'Step increment',
      control: { type: 'number' }
    },
    disabled: {
      description: 'Whether the slider is disabled',
      control: { type: 'boolean' }
    },
    className: {
      description: 'Optional CSS class name',
      control: { type: 'text' }
    },
    ariaLabel: {
      description: 'Accessible label for the slider',
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default slider with value from 0 to 100
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(42);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Volume"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Value: {value}
        </div>
      </div>
    );
  }
};

/**
 * Slider at minimum value
 */
export const AtMinimum: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Progress"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Value: {value}
        </div>
      </div>
    );
  }
};

/**
 * Slider at maximum value
 */
export const AtMaximum: Story = {
  render: () => {
    const [value, setValue] = useState(100);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Brightness"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Value: {value}
        </div>
      </div>
    );
  }
};

/**
 * Slider with custom range (0-10)
 */
export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          min={0}
          max={10}
          ariaLabel="Rating"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Rating: {value}/10
        </div>
      </div>
    );
  }
};

/**
 * Slider with step increments of 10
 */
export const WithSteps: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          step={10}
          ariaLabel="Volume"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Value: {value}% (increments of 10)
        </div>
      </div>
    );
  }
};

/**
 * Slider with custom range (100-1000)
 */
export const LargeRange: Story = {
  render: () => {
    const [value, setValue] = useState(500);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          min={100}
          max={1000}
          step={50}
          ariaLabel="Price"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Price: ${value}
        </div>
      </div>
    );
  }
};

/**
 * Disabled slider
 */
export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(65);
    return (
      <div style={{ width: '300px' }}>
        <Slider
          value={value}
          onChange={setValue}
          disabled
          ariaLabel="Locked setting"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Value: {value} (disabled)
        </div>
      </div>
    );
  }
};

/**
 * Full width slider
 */
export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState(75);
    return (
      <div style={{ width: '600px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Progress"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Progress: {value}%
        </div>
      </div>
    );
  }
};

/**
 * Compact slider (narrower width)
 */
export const Compact: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return (
      <div style={{ width: '200px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Volume"
        />
        <div className="mt-4 text-center text-shades-dark font-['Satoshi_Variable'] text-sm">
          Volume: {value}%
        </div>
      </div>
    );
  }
};

/**
 * Slider with label and description
 */
export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div style={{ width: '400px' }}>
        <div className="mb-2">
          <label className="font-['Satoshi_Variable'] font-medium text-[14px] text-shades-black mb-1 block">
            Volume Control
          </label>
          <p className="font-['Satoshi_Variable'] text-[12px] text-shades-dark mb-3">
            Adjust the volume level from 0 to 100
          </p>
        </div>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Volume Control"
        />
        <div className="mt-2 text-right text-shades-dark font-['Satoshi_Variable'] text-sm">
          {value}%
        </div>
      </div>
    );
  }
};

/**
 * Multiple sliders in a group
 */
export const MultipleSliders: Story = {
  render: () => {
    const [volume, setVolume] = useState(70);
    const [brightness, setBrightness] = useState(85);
    const [contrast, setContrast] = useState(50);
    
    return (
      <div style={{ width: '350px' }}>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-['Satoshi_Variable'] font-medium text-[14px] text-shades-black">
                Volume
              </label>
              <span className="font-['Satoshi_Variable'] text-[14px] text-shades-dark">
                {volume}%
              </span>
            </div>
            <Slider
              value={volume}
              onChange={setVolume}
              ariaLabel="Volume"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-['Satoshi_Variable'] font-medium text-[14px] text-shades-black">
                Brightness
              </label>
              <span className="font-['Satoshi_Variable'] text-[14px] text-shades-dark">
                {brightness}%
              </span>
            </div>
            <Slider
              value={brightness}
              onChange={setBrightness}
              ariaLabel="Brightness"
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-['Satoshi_Variable'] font-medium text-[14px] text-shades-black">
                Contrast
              </label>
              <span className="font-['Satoshi_Variable'] text-[14px] text-shades-dark">
                {contrast}%
              </span>
            </div>
            <Slider
              value={contrast}
              onChange={setContrast}
              ariaLabel="Contrast"
            />
          </div>
        </div>
      </div>
    );
  }
};

/**
 * Dark mode slider
 */
export const DarkMode: Story = {
  render: () => {
    const [value, setValue] = useState(60);
    return (
      <div className="dark bg-shades-black p-8 rounded-lg" style={{ width: '350px' }}>
        <Slider
          value={value}
          onChange={setValue}
          ariaLabel="Dark mode slider"
        />
        <div className="mt-4 text-center text-shades-white font-['Satoshi_Variable'] text-sm">
          Value: {value}%
        </div>
      </div>
    );
  }
};

