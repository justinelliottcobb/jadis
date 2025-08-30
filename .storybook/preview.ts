import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'terminal',
          value: '#001100',
        },
        {
          name: 'panel',
          value: '#001a1a',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;