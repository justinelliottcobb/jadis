import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/styles'
import './preview.css'

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
    docs: {
      theme: {
        base: 'dark',
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story) => {
      // Apply dark background globally
      React.useEffect(() => {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#00ff00';
        return () => {
          document.body.style.backgroundColor = '';
          document.body.style.color = '';
        };
      }, []);
      
      return React.createElement(
        'div',
        { 
          style: { 
            backgroundColor: '#000000',
            color: '#00ff00',
            minHeight: '100vh',
            padding: '1rem'
          } 
        },
        React.createElement(Story)
      );
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'paintbrush',
        items: ['dark', 'terminal', 'matrix'],
        showName: true,
      },
    },
  },
};

export default preview;