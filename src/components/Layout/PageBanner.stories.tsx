import type { Meta, StoryObj } from '@storybook/react'
import { PageBanner } from './Layout'
import { Button } from '../Buttons/Buttons'

const meta: Meta<typeof PageBanner> = {
  title: 'Layout/PageBanner',
  component: PageBanner,
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
        component: 'Page banner component for alerts, notifications, and announcements. Supports different types with dismissible functionality.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the banner',
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'announcement'],
      description: 'Type of banner (affects color and default icon)',
    },
    position: {
      control: { type: 'select' },
      options: ['inline', 'fixed-top', 'fixed-bottom'],
      description: 'Position of the banner',
    },
    dismissible: {
      control: 'boolean',
      description: 'Allow banner to be dismissed',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact styling',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const InfoBanner: Story = {
  args: {
    variant: 'terminal',
    type: 'info',
    title: 'System Information',
    message: 'Your terminal session is now active. All commands are being logged for security purposes.',
    dismissible: true
  },
}

export const SuccessBanner: Story = {
  args: {
    variant: 'terminal',
    type: 'success',
    message: 'Operation completed successfully! All systems are now online.',
    dismissible: true
  },
}

export const WarningBanner: Story = {
  args: {
    variant: 'terminal',
    type: 'warning',
    title: 'Warning',
    message: 'System resources are running low. Please save your work and restart when possible.',
    dismissible: true
  },
}

export const ErrorBanner: Story = {
  args: {
    variant: 'terminal',
    type: 'error',
    title: 'Critical Error',
    message: 'Connection to the mainframe has been lost. Attempting to reconnect...',
    dismissible: false
  },
}

export const AnnouncementBanner: Story = {
  args: {
    variant: 'matrix',
    type: 'announcement',
    title: 'System Upgrade',
    message: 'The Matrix will be undergoing maintenance tonight from 2:00-4:00 AM PST.',
    actions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="matrix" size="small">Learn More</Button>
        <Button variant="matrix" size="small" outline>Dismiss</Button>
      </div>
    ),
    dismissible: true
  },
}

export const CompactBanner: Story = {
  args: {
    variant: 'minimal',
    type: 'info',
    message: 'This is a compact notification banner.',
    compact: true,
    dismissible: true
  },
}

export const FixedTopBanner: Story = {
  args: {
    variant: 'retro',
    type: 'announcement',
    message: 'NEON NIGHTS UPDATE: New synthwave themes now available!',
    position: 'fixed-top',
    compact: true,
    dismissible: true
  },
}

export const GlowBanner: Story = {
  args: {
    variant: 'glow',
    type: 'success',
    title: 'Cosmic Achievement',
    message: 'You have successfully transcended to the next dimension of computing.',
    dismissible: true
  },
}