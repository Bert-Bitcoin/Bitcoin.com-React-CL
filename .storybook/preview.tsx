import type { Preview } from '@storybook/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#f9f9fb' }, // shades-off-white
        { name: 'Dark', value: '#1c1c1c' }, // shades-almost-black
        { name: 'Canvas', value: '#ffffff' }, // white surface
        { name: 'Surface Dark', value: '#232326' } // dark surface
      ]
    },
    options: {
      storySort: {
        order: ['Design System', 'Components', 'Assets']
      }
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';

      const ThemeProvider = ({ children }: { children: ReactNode }) => {
        useEffect(() => {
          document.documentElement.setAttribute('data-theme', theme);
          
          const backgroundColor = theme === 'dark' ? '#1c1c1c' : '#f9f9fb';
          
          // Update Canvas view background
          const storybookRoot = document.querySelector('.sb-show-main');
          if (storybookRoot) {
            storybookRoot.setAttribute('style', `background-color: ${backgroundColor} !important;`);
          }
          
          // Update only the preview windows in Docs view (not the entire Docs page)
          const docsStories = document.querySelectorAll('.docs-story');
          docsStories.forEach((docsStory) => {
            (docsStory as HTMLElement).setAttribute('style', `background-color: ${backgroundColor} !important;`);
          });
        }, [theme]);

        return <>{children}</>;
      };

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    }
  ]
};

export default preview;

