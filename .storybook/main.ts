import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: [
    { from: '../src/illustrations', to: 'src/illustrations' },
    { from: '../src/images', to: 'src/images' },
    { from: '../src/fonts', to: 'src/fonts' },
    { from: '../src/icons', to: 'src/icons' },
    { from: '../src/mini-illustrations', to: 'src/mini-illustrations' },
    { from: '../src/assets-icons', to: 'src/assets-icons' }
  ]
};

export default config;


