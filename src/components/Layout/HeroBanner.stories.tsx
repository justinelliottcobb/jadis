import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroBanner } from './Layout'
import { Button } from '../Buttons/Buttons'

const meta: Meta<typeof HeroBanner> = {
  title: 'Layout/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
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
        component: 'Hero banner component with customizable backgrounds, patterns, and call-to-action buttons. Perfect for landing pages and feature introductions.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the banner',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Size of the banner',
    },
    backgroundPattern: {
      control: { type: 'select' },
      options: ['none', 'dots', 'lines', 'grid', 'matrix'],
      description: 'Background pattern overlay',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Content alignment',
    },
    overlay: {
      control: 'boolean',
      description: 'Add dark overlay for better text readability',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const BasicHero: Story = {
  args: {
    variant: 'terminal',
    title: 'WELCOME TO THE TERMINAL',
    subtitle: 'Advanced Command Interface System',
    description: 'Experience the power of terminal-based computing with modern capabilities and classic aesthetics.',
    actions: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="terminal" size="large">Get Started</Button>
        <Button variant="terminal" size="large" outline>Learn More</Button>
      </div>
    ),
    size: 'large',
    backgroundPattern: 'grid'
  },
}

export const MatrixHero: Story = {
  args: {
    variant: 'matrix',
    title: 'ENTER THE MATRIX',
    subtitle: 'Reality is a simulation',
    description: 'Free your mind and see the code that underlies everything.',
    actions: (
      <Button variant="matrix" size="large">Take the Red Pill</Button>
    ),
    size: 'xlarge',
    backgroundPattern: 'matrix',
    align: 'center'
  },
}

export const RetroHero: Story = {
  args: {
    variant: 'retro',
    title: 'NEON NIGHTS',
    subtitle: 'Synthwave Computing Experience',
    description: 'Transport yourself to the digital frontier of the 1980s.',
    actions: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="retro" size="large">Enter the Grid</Button>
        <Button variant="retro" size="large" outline>View Gallery</Button>
      </div>
    ),
    size: 'large',
    backgroundPattern: 'lines',
    align: 'center'
  },
}

export const MinimalHero: Story = {
  args: {
    variant: 'minimal',
    title: 'CLEAN & SIMPLE',
    subtitle: 'Minimalist Design Philosophy',
    description: 'Sometimes less is more. Focus on what truly matters.',
    actions: (
      <Button variant="minimal" size="large">Get Started</Button>
    ),
    size: 'medium',
    backgroundPattern: 'dots',
    align: 'left'
  },
}

export const GlowHero: Story = {
  args: {
    variant: 'glow',
    title: 'COSMIC INTERFACE',
    subtitle: 'Beyond the ordinary',
    description: 'Illuminate your digital experience with ethereal glowing effects.',
    actions: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="glow" size="large">Ascend</Button>
        <Button variant="glow" size="large" outline>Explore</Button>
      </div>
    ),
    size: 'xlarge',
    backgroundPattern: 'grid',
    align: 'center',
    overlay: true
  },
}