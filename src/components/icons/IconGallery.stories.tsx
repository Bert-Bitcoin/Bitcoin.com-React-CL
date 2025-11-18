import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType, SVGProps } from 'react';
import * as Icons from '.';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconEntries = Object.entries(Icons).filter(
  ([name, value]) => typeof value === 'function' && name.endsWith('Icon')
) as Array<[string, IconComponent]>;

const IconGallery = () =>
  iconEntries.length > 0 ? (
    <div className="grid gap-s sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {iconEntries.map(([name, Icon]) => (
        <div
          key={name}
          className="flex items-center gap-s rounded-lg border border-shades-extra-light bg-shades-white p-m shadow-sm"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-10 text-primary-100">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-label">{name}</span>
            <span className="text-label-sm text-shades-mid">{`<${name} />`}</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-label text-shades-mid">
      No icons have been exported yet. Add SVG components to
      `src/components/icons` and export them from `index.ts`.
    </p>
  );

const meta: Meta<typeof IconGallery> = {
  title: 'Assets/Icons',
  component: IconGallery,
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

type Story = StoryObj<typeof IconGallery>;

export const Gallery: Story = {};


