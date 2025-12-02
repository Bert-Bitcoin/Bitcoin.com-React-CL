import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType, SVGProps } from 'react';
import { useState } from 'react';
import * as Illustrations from '.';

type IllustrationComponent = ComponentType<SVGProps<SVGSVGElement>>;

const illustrationEntries = Object.entries(Illustrations).filter(
  ([name, value]) => typeof value === 'function' && name.endsWith('Illustration') && name !== 'MiniIllustration'
) as Array<[string, IllustrationComponent]>;

const MiniIllustrationGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');

  const filteredIllustrations = illustrationEntries.filter(([name]) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className="space-y-m">
      {/* Header */}
      <div className="space-y-s">
        <h1 className="text-heading-lg font-display text-text-primary">
          Mini Illustrations
        </h1>
        <p className="text-body text-text-secondary">
          {filteredIllustrations.length} illustrations available from the Figma design system
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-s">
        <input
          type="text"
          placeholder="Search illustrations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-s py-s border border-field-border rounded-sm bg-field-background text-text-primary placeholder:text-field-placeholder focus:outline-none focus:border-field-border-active"
        />
        <div className="flex gap-xs">
          <button
            onClick={() => setSelectedSize('sm')}
            className={`px-s py-s rounded-sm border transition-colors ${
              selectedSize === 'sm'
                ? 'bg-primary-100 text-white border-primary-100'
                : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
            }`}
          >
            Small
          </button>
          <button
            onClick={() => setSelectedSize('md')}
            className={`px-s py-s rounded-sm border transition-colors ${
              selectedSize === 'md'
                ? 'bg-primary-100 text-white border-primary-100'
                : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setSelectedSize('lg')}
            className={`px-s py-s rounded-sm border transition-colors ${
              selectedSize === 'lg'
                ? 'bg-primary-100 text-white border-primary-100'
                : 'bg-field-background text-text-primary border-field-border hover:border-field-border-active'
            }`}
          >
            Large
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredIllustrations.length > 0 ? (
        <div className="grid gap-m grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredIllustrations.map(([name, Illustration]) => (
            <div
              key={name}
              className="flex flex-col items-center gap-s p-m rounded-sm border border-border bg-surface"
            >
              <div className="flex items-center justify-center">
                <Illustration className={sizeClasses[selectedSize]} aria-hidden />
              </div>
              <div className="text-center space-y-xs">
                <span className="block font-medium text-label text-text-primary">
                  {name.replace('Illustration', '')}
                </span>
                <code className="block text-label-sm text-text-secondary bg-surface-muted px-xs py-xs rounded-xs">
                  {`<${name} />`}
                </code>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-xl">
          <p className="text-label text-text-secondary">
            No illustrations found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof MiniIllustrationGallery> = {
  title: 'Assets/Mini Illustrations/Gallery',
  component: MiniIllustrationGallery,
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

type Story = StoryObj<typeof MiniIllustrationGallery>;

export const Gallery: Story = {};

