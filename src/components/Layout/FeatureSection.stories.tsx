import type { Meta, StoryObj } from '@storybook/react'
import { FeatureSection } from './Layout'
import { Button } from '../Buttons/Buttons'

const meta: Meta<typeof FeatureSection> = {
  title: 'Layout/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Feature section component for showcasing capabilities and features in a grid layout. Perfect for highlighting product features, services, or capabilities.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the feature section',
    },
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Number of columns in the grid',
    },
    centered: {
      control: 'boolean',
      description: 'Center align the feature items',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact spacing',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const terminalFeatures = [
  {
    icon: '◎',
    title: 'Advanced Terminal',
    description: 'Full-featured command line interface with syntax highlighting and auto-completion.'
  },
  {
    icon: '◈',
    title: 'System Monitoring',
    description: 'Real-time monitoring of system resources, processes, and network activity.'
  },
  {
    icon: '◊',
    title: 'Script Automation',
    description: 'Powerful scripting capabilities for automating complex system tasks.'
  },
  {
    icon: '○',
    title: 'Security Tools',
    description: 'Built-in security analysis and penetration testing utilities.'
  }
]

const matrixFeatures = [
  {
    icon: '▣',
    title: 'Data Streams',
    description: 'Visualize data flowing through the digital matrix in real-time.'
  },
  {
    icon: '▓',
    title: 'Code Analysis',
    description: 'Deep analysis of code structure and execution patterns.'
  },
  {
    icon: '◉',
    title: 'Network Nodes',
    description: 'Monitor and control network nodes across the digital landscape.'
  }
]

const retroFeatures = [
  {
    icon: '◆',
    title: 'Neon Graphics',
    description: 'Stunning retro-futuristic visual effects with neon aesthetics.'
  },
  {
    icon: '▪',
    title: 'Synthwave Audio',
    description: 'Immersive audio experience with classic 80s synthesizer sounds.'
  },
  {
    icon: '■',
    title: 'Grid Interface',
    description: 'Navigate through digital grids like in classic sci-fi movies.'
  },
  {
    icon: '►',
    title: 'Time Travel',
    description: 'Experience computing as it was imagined in the 1980s future.'
  }
]

export const TerminalFeatures: Story = {
  args: {
    variant: 'terminal',
    title: 'Terminal Capabilities',
    subtitle: 'Advanced Command Interface Features',
    features: terminalFeatures,
    columns: 2,
    actions: (
      <Button variant="terminal" size="large">Explore Terminal</Button>
    )
  },
}

export const MatrixFeatures: Story = {
  args: {
    variant: 'matrix',
    title: 'MATRIX PROTOCOLS',
    subtitle: 'Digital Reality Management',
    features: matrixFeatures,
    columns: 3,
    centered: true,
    actions: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="matrix" size="large">Enter Matrix</Button>
        <Button variant="matrix" size="large" outline>View Code</Button>
      </div>
    )
  },
}

export const RetroFeatures: Story = {
  args: {
    variant: 'retro',
    title: 'NEON FEATURES',
    subtitle: 'Synthwave Experience',
    description: 'Step into the digital frontier of the 1980s with these retro-futuristic capabilities.',
    features: retroFeatures,
    columns: 4,
    actions: (
      <Button variant="retro" size="large">Enter the Grid</Button>
    )
  },
}

export const MinimalFeatures: Story = {
  args: {
    variant: 'minimal',
    title: 'Core Features',
    features: [
      {
        icon: '•',
        title: 'Simple',
        description: 'Clean and straightforward interface design.'
      },
      {
        icon: '○',
        title: 'Efficient',
        description: 'Optimized for performance and speed.'
      },
      {
        icon: '—',
        title: 'Accessible',
        description: 'Built with accessibility in mind.'
      }
    ],
    columns: 3,
    compact: true
  },
}

export const GlowFeatures: Story = {
  args: {
    variant: 'glow',
    title: 'COSMIC CAPABILITIES',
    subtitle: 'Transcendent Features',
    description: 'Elevate your digital experience with these ethereal capabilities.',
    features: [
      {
        icon: '※',
        title: 'Luminous Interface',
        description: 'Experience computing through glowing, ethereal interfaces.'
      },
      {
        icon: '◈',
        title: 'Stellar Performance',
        description: 'Performance that reaches beyond the ordinary into the cosmic.'
      },
      {
        icon: '◎',
        title: 'Astral Navigation',
        description: 'Navigate through digital space with celestial precision.'
      },
      {
        icon: '◊',
        title: 'Quantum Processing',
        description: 'Harness the power of quantum-inspired computing paradigms.'
      }
    ],
    columns: 2,
    centered: true,
    actions: (
      <Button variant="glow" size="large">Transcend</Button>
    )
  },
}