import type { Meta, StoryObj } from '@storybook/react-vite'
import { H1, H2, H3, H4, H5, H6 } from './Headers'

const meta: Meta<typeof H1> = {
  title: 'Components/Headers',
  component: H1,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ASCII art style header components inspired by 90s BBS and TUI interfaces. Each header level has different styling variants and colors to create a retro terminal aesthetic.',
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
      ],
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Header text content',
      defaultValue: 'Sample Header'
    },
    variant: {
      control: { type: 'select' },
      options: ['box', 'double-line', 'dashed', 'solid', 'simple'],
      description: 'ASCII art style variant',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
}

export default meta

// H1 Stories
type H1Story = StoryObj<typeof H1>

export const H1Default: H1Story = {
  name: 'H1 - Box (Default)',
  args: {
    children: 'MAIN TITLE',
    variant: 'box',
    align: 'center',
  },
}

export const H1DoubleLine: H1Story = {
  name: 'H1 - Double Line',
  args: {
    children: 'SYSTEM STATUS',
    variant: 'double-line',
    align: 'left',
  },
}

export const H1Dashed: H1Story = {
  name: 'H1 - Dashed',
  args: {
    children: 'TERMINAL INTERFACE',
    variant: 'dashed',
    align: 'center',
  },
}

// H2 Stories
type H2Story = StoryObj<typeof H2>

export const H2Default: H2Story = {
  name: 'H2 - Double Line (Default)',
  render: (args) => <H2 {...args} />,
  args: {
    children: 'Section Header',
    variant: 'double-line',
    align: 'left',
  },
}

export const H2Box: H2Story = {
  name: 'H2 - Box',
  render: (args) => <H2 {...args} />,
  args: {
    children: 'Configuration Menu',
    variant: 'box',
    align: 'center',
  },
}

// H3 Stories
type H3Story = StoryObj<typeof H3>

export const H3Default: H3Story = {
  name: 'H3 - Dashed (Default)',
  render: (args) => <H3 {...args} />,
  args: {
    children: 'Subsection Title',
    variant: 'dashed',
    align: 'left',
  },
}

export const H3Simple: H3Story = {
  name: 'H3 - Simple',
  render: (args) => <H3 {...args} />,
  args: {
    children: 'File Operations',
    variant: 'simple',
    align: 'left',
  },
}

// H4 Stories
type H4Story = StoryObj<typeof H4>

export const H4Default: H4Story = {
  name: 'H4 - Solid (Default)',
  render: (args) => <H4 {...args} />,
  args: {
    children: 'Command Options',
    variant: 'solid',
    align: 'left',
  },
}

export const H4Simple: H4Story = {
  name: 'H4 - Simple',
  render: (args) => <H4 {...args} />,
  args: {
    children: 'Process Status',
    variant: 'simple',
    align: 'left',
  },
}

// H5 Stories
type H5Story = StoryObj<typeof H5>

export const H5Default: H5Story = {
  name: 'H5 - Simple (Default)',
  render: (args) => <H5 {...args} />,
  args: {
    children: 'Detail Item',
    variant: 'simple',
    align: 'left',
  },
}

export const H5Solid: H5Story = {
  name: 'H5 - Solid',
  render: (args) => <H5 {...args} />,
  args: {
    children: 'System Log',
    variant: 'solid',
    align: 'left',
  },
}

// H6 Stories
type H6Story = StoryObj<typeof H6>

export const H6Default: H6Story = {
  name: 'H6 - Simple (Default)',
  render: (args) => <H6 {...args} />,
  args: {
    children: 'Minor Detail',
    variant: 'simple',
    align: 'left',
  },
}

// Showcase all variants
export const AllVariants: StoryObj = {
  name: 'All Header Variants',
  render: () => (
    <div style={{ background: '#000', padding: '2rem', minHeight: '100vh' }}>
      <H1 variant="box" align="center">JADIS COMPONENT LIBRARY</H1>
      <H1 variant="double-line" align="left">System Overview</H1>
      <H1 variant="dashed" align="center">Terminal Interface</H1>
      
      <br />
      
      <H2 variant="box" align="center">Configuration Menu</H2>
      <H2 variant="double-line" align="left">Network Status</H2>
      <H2 variant="solid" align="left">File System</H2>
      
      <br />
      
      <H3 variant="dashed" align="left">User Management</H3>
      <H3 variant="simple" align="left">Security Settings</H3>
      <H3 variant="solid" align="left">Log Analysis</H3>
      
      <br />
      
      <H4 variant="solid" align="left">Process Monitor</H4>
      <H4 variant="simple" align="left">Memory Usage</H4>
      
      <br />
      
      <H5 variant="simple" align="left">Thread Count</H5>
      <H5 variant="solid" align="left">Error Rate</H5>
      
      <br />
      
      <H6 variant="simple" align="left">Debug Info</H6>
      <H6 variant="solid" align="left">Timestamp</H6>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// Alignment showcase
export const AlignmentShowcase: StoryObj = {
  name: 'Alignment Options',
  render: () => (
    <div style={{ background: '#000', padding: '2rem', minHeight: '50vh' }}>
      <H1 variant="box" align="left">Left Aligned</H1>
      <H1 variant="double-line" align="center">Center Aligned</H1>
      <H1 variant="dashed" align="right">Right Aligned</H1>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}