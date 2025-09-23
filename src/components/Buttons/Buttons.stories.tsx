import type { Meta, StoryObj } from '@storybook/react-vite'
import { 
  Button, 
  IconButton,
  ButtonGroup,
  LinkButton,
  ToggleButton,
  FAB
} from './Buttons'
import { ThemeProvider } from '../ThemeProvider'
import { H2 } from '../Headers'
import { P } from '../Typography'
import React from 'react'

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ASCII-art inspired button components with terminal aesthetics. Features multiple variants, sizes, colors, and specialized button types.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Color scheme',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style',
    },
    glow: {
      control: 'boolean',
      description: 'Glow effect',
    },
    ripple: {
      control: 'boolean',
      description: 'Ripple effect on click',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

// ===================================
// BASIC BUTTON STORIES
// ===================================

export const Terminal: Story = {
  name: 'Button - Terminal',
  args: {
    variant: 'terminal',
    children: 'EXECUTE',
  },
}

export const Matrix: Story = {
  name: 'Button - Matrix',
  args: {
    variant: 'matrix',
    children: 'ENTER MATRIX',
  },
}

export const Retro: Story = {
  name: 'Button - Retro',
  args: {
    variant: 'retro',
    children: 'PLAY GAME',
  },
}

export const Minimal: Story = {
  name: 'Button - Minimal',
  args: {
    variant: 'minimal',
    children: 'CONTINUE',
  },
}

export const Glow: Story = {
  name: 'Button - Glow',
  args: {
    variant: 'glow',
    children: 'ACTIVATE',
    glow: true,
  },
}

// ===================================
// SIZE VARIATIONS
// ===================================

export const ButtonSizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="terminal" size="small">SMALL</Button>
      <Button variant="terminal" size="medium">MEDIUM</Button>
      <Button variant="terminal" size="large">LARGE</Button>
    </div>
  ),
}

// ===================================
// COLOR VARIATIONS
// ===================================

export const ButtonColors: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <Button variant="terminal" color="primary">PRIMARY</Button>
      <Button variant="terminal" color="secondary">SECONDARY</Button>
      <Button variant="terminal" color="success">SUCCESS</Button>
      <Button variant="terminal" color="warning">WARNING</Button>
      <Button variant="terminal" color="error">ERROR</Button>
      <Button variant="terminal" color="info">INFO</Button>
    </div>
  ),
}

// ===================================
// STATE VARIATIONS
// ===================================

export const ButtonStates: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <Button variant="terminal">NORMAL</Button>
      <Button variant="terminal" active>ACTIVE</Button>
      <Button variant="terminal" loading>LOADING</Button>
      <Button variant="terminal" disabled>DISABLED</Button>
      <Button variant="terminal" outline>OUTLINE</Button>
    </div>
  ),
}

// ===================================
// WITH ICONS
// ===================================

export const ButtonsWithIcons: StoryObj = {
  name: 'Buttons with Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      <Button variant="terminal" icon="▶">PLAY</Button>
      <Button variant="matrix" icon="⚡" iconPosition="right">POWER</Button>
      <Button variant="retro" icon="★">FAVORITE</Button>
      <Button variant="glow" icon="⚙" iconPosition="right">SETTINGS</Button>
    </div>
  ),
}

// ===================================
// ICON BUTTONS
// ===================================

export const IconButtons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton variant="terminal" icon="✕" label="Close" size="small" />
      <IconButton variant="matrix" icon="⚙" label="Settings" />
      <IconButton variant="retro" icon="★" label="Star" size="large" />
      <IconButton variant="glow" icon="◉" label="Record" glow />
    </div>
  ),
}

// ===================================
// BUTTON GROUPS
// ===================================

export const ButtonGroups: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <P variant="terminal" style={{ marginBottom: '1rem' }}>Horizontal Group</P>
        <ButtonGroup variant="terminal">
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </div>
      
      <div>
        <P variant="matrix" style={{ marginBottom: '1rem' }}>Vertical Group</P>
        <ButtonGroup variant="matrix" vertical>
          <Button>TOP</Button>
          <Button>MIDDLE</Button>
          <Button>BOTTOM</Button>
        </ButtonGroup>
      </div>

      <div>
        <P variant="retro" style={{ marginBottom: '1rem' }}>Full Width Group</P>
        <ButtonGroup variant="retro" fullWidth>
          <Button>OPTION 1</Button>
          <Button>OPTION 2</Button>
          <Button>OPTION 3</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}

// ===================================
// TOGGLE BUTTONS
// ===================================

export const ToggleButtons: StoryObj = {
  render: () => {
    const [pressed1, setPressed1] = React.useState(false)
    const [pressed2, setPressed2] = React.useState(true)
    const [pressed3, setPressed3] = React.useState(false)

    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <ToggleButton 
          variant="terminal"
          pressed={pressed1}
          onToggle={setPressed1}
        >
          {pressed1 ? 'ON' : 'OFF'}
        </ToggleButton>
        
        <ToggleButton 
          variant="matrix"
          pressed={pressed2}
          onToggle={setPressed2}
          icon={pressed2 ? '✓' : '✗'}
        >
          TOGGLE
        </ToggleButton>
        
        <ToggleButton 
          variant="retro"
          pressed={pressed3}
          onToggle={setPressed3}
          color={pressed3 ? 'success' : 'error'}
        >
          {pressed3 ? 'ENABLED' : 'DISABLED'}
        </ToggleButton>
      </div>
    )
  },
}

// ===================================
// LINK BUTTONS
// ===================================

export const LinkButtons: StoryObj = {
  name: 'Link Buttons',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <LinkButton 
        href="https://github.com" 
        target="_blank"
        variant="terminal"
      >
        GITHUB
      </LinkButton>
      
      <LinkButton 
        href="#docs" 
        variant="matrix"
        icon="📚"
      >
        DOCUMENTATION
      </LinkButton>
      
      <LinkButton 
        href="https://example.com" 
        target="_blank"
        variant="glow"
        glow
      >
        EXTERNAL LINK
      </LinkButton>
    </div>
  ),
}

// ===================================
// FLOATING ACTION BUTTONS
// ===================================

export const FloatingActionButtons: StoryObj = {
  name: 'Floating Action Buttons',
  render: () => (
    <div style={{ position: 'relative', height: '400px', border: '1px solid #333' }}>
      <P variant="terminal" style={{ padding: '1rem' }}>
        Floating Action Buttons positioned in corners
      </P>
      
      <FAB 
        variant="terminal"
        position="bottom-right"
        icon="+"
        onClick={() => console.log('FAB clicked')}
      />
      
      <FAB 
        variant="matrix"
        position="bottom-left"
        icon="✉"
        extended
      >
        MESSAGE
      </FAB>
      
      <FAB 
        variant="glow"
        position="top-right"
        icon="★"
        glow
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// ===================================
// ALL VARIANTS SHOWCASE
// ===================================

export const AllVariants: StoryObj = {
  name: 'All Button Variants',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem' }}>
        <H2 variant="simple">BUTTON COMPONENT VARIANTS</H2>
        
        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          marginTop: '2rem'
        }}>
          {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
            <div key={variant} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem',
              padding: '1rem',
              border: '1px solid #333'
            }}>
              <P variant={variant} style={{ marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {variant} variant
              </P>
              <Button variant={variant}>DEFAULT</Button>
              <Button variant={variant} color="success">SUCCESS</Button>
              <Button variant={variant} color="error">ERROR</Button>
              <Button variant={variant} outline>OUTLINE</Button>
              <Button variant={variant} disabled>DISABLED</Button>
              <Button variant={variant} icon="★">WITH ICON</Button>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// ===================================
// INTERACTIVE DEMO
// ===================================

export const InteractiveDemo: StoryObj = {
  name: 'Interactive Button Demo',
  render: () => {
    const [clickCount, setClickCount] = React.useState(0)
    const [loading, setLoading] = React.useState(false)

    const handleAsyncClick = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setClickCount(c => c + 1)
      }, 2000)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '600px' }}>
        <div>
          <P variant="terminal" style={{ marginBottom: '1rem' }}>
            Click Counter: {clickCount}
          </P>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button 
              variant="terminal"
              onClick={() => setClickCount(c => c + 1)}
            >
              INCREMENT
            </Button>
            <Button 
              variant="terminal"
              color="error"
              onClick={() => setClickCount(0)}
            >
              RESET
            </Button>
          </div>
        </div>

        <div>
          <P variant="matrix" style={{ marginBottom: '1rem' }}>
            Async Operation
          </P>
          <Button 
            variant="matrix"
            loading={loading}
            onClick={handleAsyncClick}
            icon="⚡"
          >
            {loading ? 'PROCESSING...' : 'START PROCESS'}
          </Button>
        </div>

        <div>
          <P variant="retro" style={{ marginBottom: '1rem' }}>
            Ripple Effect Demo
          </P>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="terminal" ripple>RIPPLE ON</Button>
            <Button variant="matrix" ripple glow>RIPPLE + GLOW</Button>
          </div>
        </div>
      </div>
    )
  },
}