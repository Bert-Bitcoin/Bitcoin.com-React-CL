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
  ],
  viteFinal: async (config) => {
    // Suppress eval warnings from Storybook's internal code
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        onwarn(warning, warn) {
          // Ignore eval warnings from Storybook's runtime
          if (
            warning.code === 'EVAL' &&
            warning.id?.includes('@storybook/core')
          ) {
            return;
          }
          warn(warning);
        }
      };
    }
    return config;
  }
};

export default config;


