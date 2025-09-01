import type { Meta, StoryObj } from '@storybook/react'
import { Navbar, NavbarBrand, NavbarItem, NavbarNav, NavbarDropdown } from './Navbar'
import { Button } from '../Buttons/Buttons'
import { Input } from '../Forms/Forms'
import { ASCIIIcon } from '../Icons/Icons'

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
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
        component: 'A comprehensive navigation system with terminal aesthetics and responsive features.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the navbar',
    },
    position: {
      control: { type: 'select' },
      options: ['static', 'sticky', 'fixed'],
      description: 'Positioning behavior',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'space-between', 'space-around'],
      description: 'Content alignment',
    },
    bordered: {
      control: 'boolean',
      description: 'Add border styling',
    },
    transparent: {
      control: 'boolean',
      description: 'Transparent background with blur',
    },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

// ===================================
// BASIC NAVBAR VARIANTS
// ===================================

export const Terminal: Story = {
  args: {
    variant: 'terminal',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="terminal" text="JADIS TERMINAL" logo={<ASCIIIcon icon="terminal" variant="terminal" />} />
      }
      actions={
        <Button variant="terminal" size="small" color="success">
          LOGIN
        </Button>
      }
    >
      <NavbarNav variant="terminal">
        <NavbarItem variant="terminal" active>
          HOME
        </NavbarItem>
        <NavbarItem variant="terminal" icon={<ASCIIIcon icon="database" variant="terminal" />}>
          DASHBOARD
        </NavbarItem>
        <NavbarItem variant="terminal" icon={<ASCIIIcon icon="settings" variant="terminal" />}>
          SETTINGS
        </NavbarItem>
        <NavbarItem variant="terminal" icon={<ASCIIIcon icon="folder" variant="terminal" />}>
          FILES
        </NavbarItem>
        <NavbarItem variant="terminal" badge={3}>
          ALERTS
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

export const Matrix: Story = {
  args: {
    variant: 'matrix',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="matrix" text="MATRIX PROTOCOL" logo="◉" />
      }
      actions={
        <Button variant="matrix" size="small" color="success">
          CONNECT
        </Button>
      }
    >
      <NavbarNav variant="matrix">
        <NavbarItem variant="matrix" active icon="◈">
          NETWORK
        </NavbarItem>
        <NavbarItem variant="matrix" icon="▓">
          DATA
        </NavbarItem>
        <NavbarItem variant="matrix" icon="⊡">
          SCAN
        </NavbarItem>
        <NavbarDropdown
          variant="matrix"
          trigger={
            <NavbarItem variant="matrix" dropdown icon="▲">
              TOOLS
            </NavbarItem>
          }
        >
          <NavbarItem variant="matrix">Code Analyzer</NavbarItem>
          <NavbarItem variant="matrix">System Monitor</NavbarItem>
          <NavbarItem variant="matrix">Debug Console</NavbarItem>
        </NavbarDropdown>
      </NavbarNav>
    </Navbar>
  ),
}

export const Retro: Story = {
  args: {
    variant: 'retro',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="retro" text="RETROWARE" logo="◆" />
      }
      actions={
        <Button variant="retro" size="small" color="warning">
          POWER
        </Button>
      }
    >
      <NavbarNav variant="retro">
        <NavbarItem variant="retro" active>
          MAIN
        </NavbarItem>
        <NavbarItem variant="retro" icon="▬">
          ARCHIVE
        </NavbarItem>
        <NavbarItem variant="retro" icon="⚙">
          CONFIG
        </NavbarItem>
        <NavbarItem variant="retro" icon="▪">
          SYSTEM
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    transparent: true,
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="minimal" text="Clean UI" logo="◯" />
      }
      actions={
        <Button variant="minimal" size="small">
          Sign In
        </Button>
      }
    >
      <NavbarNav variant="minimal">
        <NavbarItem variant="minimal" active>
          Home
        </NavbarItem>
        <NavbarItem variant="minimal">
          About
        </NavbarItem>
        <NavbarItem variant="minimal">
          Services
        </NavbarItem>
        <NavbarItem variant="minimal">
          Contact
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

export const Glow: Story = {
  args: {
    variant: 'glow',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="glow" text="NEON SYSTEM" logo="◈" />
      }
      actions={
        <Button variant="glow" size="small" color="info">
          SYNC
        </Button>
      }
    >
      <NavbarNav variant="glow">
        <NavbarItem variant="glow" active icon="◊">
          CORE
        </NavbarItem>
        <NavbarItem variant="glow" icon="※">
          PLASMA
        </NavbarItem>
        <NavbarItem variant="glow" icon="◎">
          PULSE
        </NavbarItem>
        <NavbarItem variant="glow" badge="∞">
          QUANTUM
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

// ===================================
// LAYOUT DEMONSTRATIONS
// ===================================

export const WithSearch: Story = {
  args: {
    variant: 'terminal',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="terminal" text="SEARCH SYSTEM" logo="⊕" />
      }
      actions={
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Input
            variant="terminal"
            placeholder="Search..."
            style={{ width: '200px', marginRight: '0.5rem' }}
          />
          <Button variant="terminal" size="small" color="info">
            GO
          </Button>
        </div>
      }
    >
      <NavbarNav variant="terminal">
        <NavbarItem variant="terminal" active>
          DATABASE
        </NavbarItem>
        <NavbarItem variant="terminal" icon="▤">
          RESULTS
        </NavbarItem>
        <NavbarItem variant="terminal" icon="⚙">
          FILTERS
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

export const ResponsiveDemo: Story = {
  args: {
    variant: 'terminal',
    bordered: true,
    collapse: true,
  },
  render: (args) => (
    <div style={{ width: '100%' }}>
      <Navbar
        {...args}
        brand={
          <NavbarBrand variant="terminal" text="MOBILE READY" logo="▣" />
        }
        actions={
          <Button variant="terminal" size="small">
            ACTION
          </Button>
        }
      >
        <NavbarNav variant="terminal">
          <NavbarItem variant="terminal" active>
            HOME
          </NavbarItem>
          <NavbarItem variant="terminal">
            FEATURES
          </NavbarItem>
          <NavbarItem variant="terminal">
            DOCS
          </NavbarItem>
          <NavbarItem variant="terminal">
            SUPPORT
          </NavbarItem>
        </NavbarNav>
      </Navbar>
      <div style={{ padding: '2rem', color: 'var(--jadis-text-primary)' }}>
        <p>Resize your browser window to see the responsive behavior!</p>
        <p>The navbar will collapse on mobile screens and show a toggle button.</p>
      </div>
    </div>
  ),
}

export const WithDropdowns: Story = {
  args: {
    variant: 'terminal',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="terminal" text="DROPDOWN DEMO" logo="▼" />
      }
    >
      <NavbarNav variant="terminal">
        <NavbarItem variant="terminal" active>
          HOME
        </NavbarItem>
        
        <NavbarDropdown
          variant="terminal"
          position="left"
          trigger={
            <NavbarItem variant="terminal" dropdown>
              SERVICES
            </NavbarItem>
          }
        >
          <NavbarItem variant="terminal">Web Development</NavbarItem>
          <NavbarItem variant="terminal">System Admin</NavbarItem>
          <NavbarItem variant="terminal">Database Design</NavbarItem>
          <NavbarItem variant="terminal">Network Security</NavbarItem>
        </NavbarDropdown>
        
        <NavbarDropdown
          variant="terminal"
          position="center"
          trigger={
            <NavbarItem variant="terminal" dropdown badge={2}>
              RESOURCES
            </NavbarItem>
          }
        >
          <NavbarItem variant="terminal" icon="▤">Documentation</NavbarItem>
          <NavbarItem variant="terminal" icon="◈">Tutorials</NavbarItem>
          <NavbarItem variant="terminal" icon="◊">Examples</NavbarItem>
          <NavbarItem variant="terminal" icon="⚙">Tools</NavbarItem>
        </NavbarDropdown>
        
        <NavbarItem variant="terminal">
          CONTACT
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

// ===================================
// POSITIONING EXAMPLES
// ===================================

export const FixedPosition: Story = {
  args: {
    variant: 'matrix',
    position: 'fixed',
    bordered: true,
  },
  render: (args) => (
    <div style={{ height: '200vh', paddingTop: '80px' }}>
      <Navbar
        {...args}
        brand={
          <NavbarBrand variant="matrix" text="FIXED HEADER" logo="▲" />
        }
      >
        <NavbarNav variant="matrix">
          <NavbarItem variant="matrix" active>
            SCROLL
          </NavbarItem>
          <NavbarItem variant="matrix">
            TEST
          </NavbarItem>
        </NavbarNav>
      </Navbar>
      
      <div style={{ padding: '2rem', color: 'var(--jadis-text-primary)' }}>
        <h2>Fixed Navbar Demo</h2>
        <p>The navbar above is fixed to the top of the viewport.</p>
        <p>Scroll down to see it remain in place!</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Add more content for scrolling */}
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>
            This is paragraph {i + 1} to demonstrate scrolling behavior with a fixed navbar.
          </p>
        ))}
      </div>
    </div>
  ),
}

export const StickyPosition: Story = {
  args: {
    variant: 'glow',
    position: 'sticky',
    bordered: true,
  },
  render: (args) => (
    <div style={{ height: '200vh' }}>
      <div style={{ padding: '2rem', color: 'var(--jadis-text-primary)' }}>
        <h2>Content Before Sticky Navbar</h2>
        <p>Scroll down to see the sticky navbar behavior.</p>
      </div>
      
      <Navbar
        {...args}
        brand={
          <NavbarBrand variant="glow" text="STICKY NAV" logo="◎" />
        }
      >
        <NavbarNav variant="glow">
          <NavbarItem variant="glow" active>
            STICKY
          </NavbarItem>
          <NavbarItem variant="glow">
            DEMO
          </NavbarItem>
        </NavbarNav>
      </Navbar>
      
      <div style={{ padding: '2rem', color: 'var(--jadis-text-primary)' }}>
        <h2>Content After Sticky Navbar</h2>
        <p>The navbar above will stick to the top when scrolling.</p>
        {Array.from({ length: 15 }, (_, i) => (
          <p key={i}>
            Content paragraph {i + 1} for sticky navbar demonstration.
          </p>
        ))}
      </div>
    </div>
  ),
}

// ===================================
// ALIGNMENT EXAMPLES
// ===================================

export const CenteredNavbar: Story = {
  args: {
    variant: 'retro',
    align: 'center',
    bordered: true,
  },
  render: (args) => (
    <Navbar {...args}>
      <NavbarNav variant="retro">
        <NavbarItem variant="retro" active>
          HOME
        </NavbarItem>
        <NavbarItem variant="retro">
          ABOUT
        </NavbarItem>
        <NavbarItem variant="retro">
          CONTACT
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}

export const MultiActionNavbar: Story = {
  args: {
    variant: 'terminal',
    bordered: true,
  },
  render: (args) => (
    <Navbar
      {...args}
      brand={
        <NavbarBrand variant="terminal" text="MULTI-ACTION" logo="⚡" />
      }
      actions={
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Button variant="terminal" size="small" outline>
            HELP
          </Button>
          <Button variant="terminal" size="small" color="warning">
            SETTINGS
          </Button>
          <Button variant="terminal" size="small" color="success">
            LOGIN
          </Button>
        </div>
      }
    >
      <NavbarNav variant="terminal">
        <NavbarItem variant="terminal" active>
          DASHBOARD
        </NavbarItem>
        <NavbarItem variant="terminal" badge={5}>
          NOTIFICATIONS
        </NavbarItem>
        <NavbarItem variant="terminal" icon="◐">
          PROFILE
        </NavbarItem>
      </NavbarNav>
    </Navbar>
  ),
}