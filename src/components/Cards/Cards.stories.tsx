import type { Meta, StoryObj } from '@storybook/react'
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardActions,
  TerminalCard,
  StatusCard,
  DataCard
} from './Cards'
import { ThemeProvider } from '../ThemeProvider'
import { H2 } from '../Headers'
import { P, Code } from '../Typography'
import { Input, Checkbox } from '../Forms'

const meta: Meta<typeof Card> = {
  title: 'Layout/Cards',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ASCII-art inspired card components with terminal aesthetics. Features multiple variants, sizes, and specialized card types for different use cases.',
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
      options: ['small', 'medium', 'large', 'full'],
      description: 'Card size',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable hover effects',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    status: {
      control: { type: 'select' },
      options: [undefined, 'success', 'warning', 'error', 'info'],
      description: 'Status indicator',
    },
    terminalWindow: {
      control: 'boolean',
      description: 'Terminal window styling',
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

// ===================================
// BASIC CARD STORIES
// ===================================

export const Terminal: Story = {
  name: 'Card - Terminal',
  args: {
    variant: 'terminal',
    children: (
      <>
        <CardHeader title="System Status" subtitle="Terminal Connection Active" />
        <CardBody>
          <P variant="terminal">
            Connection established to remote server. All systems operational.
          </P>
          <Code variant="terminal">ssh user@server.example.com</Code>
        </CardBody>
        <CardFooter>
          <P variant="terminal" style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>
            Last updated: 2025-08-31 14:23:45
          </P>
        </CardFooter>
      </>
    ),
  },
}

export const Matrix: Story = {
  name: 'Card - Matrix',
  args: {
    variant: 'matrix',
    children: (
      <>
        <CardHeader title="Data Stream" subtitle="Digital Matrix Interface" />
        <CardBody>
          <P variant="matrix">
            Analyzing data stream patterns. Matrix code detected in sector 7.
          </P>
          <Code variant="matrix">{"01010101 11001100 00110011"}</Code>
        </CardBody>
      </>
    ),
  },
}

export const Retro: Story = {
  name: 'Card - Retro',
  args: {
    variant: 'retro',
    children: (
      <>
        <CardHeader title="MAINFRAME ACCESS" subtitle="vintage computing interface" />
        <CardBody>
          <P variant="retro">
            ACCESSING MAINFRAME DATABASE. RETRO PROTOCOLS ENABLED.
          </P>
        </CardBody>
      </>
    ),
  },
}

export const Interactive: Story = {
  name: 'Card - Interactive',
  args: {
    variant: 'terminal',
    interactive: true,
    children: (
      <>
        <CardHeader title="Interactive Card" subtitle="Hover for effects" />
        <CardBody>
          <P variant="terminal">
            This card responds to hover with enhanced glow effects and subtle animations.
          </P>
        </CardBody>
      </>
    ),
  },
}

// ===================================
// SPECIALIZED CARD STORIES  
// ===================================

export const TerminalWindow: StoryObj<typeof TerminalCard> = {
  name: 'Terminal Card',
  render: (args) => <TerminalCard {...args} />,
  args: {
    title: 'jadis@system',
    command: 'npm run storybook',
    children: (
      <>
        <P variant="terminal" style={{ margin: '0.5rem 0', fontFamily: 'monospace' }}>
          {">"} jadis@0.1.0 storybook
        </P>
        <P variant="terminal" style={{ margin: '0.5rem 0', fontFamily: 'monospace' }}>
          {">"} storybook dev -p 3000
        </P>
        <P variant="terminal" style={{ margin: '0.5rem 0', color: 'var(--jadis-color-cyan)' }}>
          Storybook 9.1.3 for react-vite started
        </P>
        <P variant="terminal" style={{ margin: '0.5rem 0', color: 'var(--jadis-color-cyan)' }}>
          Local: http://localhost:3000/
        </P>
      </>
    ),
  },
}

export const StatusCards: StoryObj = {
  name: 'Status Cards',
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <StatusCard
        variant="terminal"
        status="success"
        title="Operation Complete"
        message="File transfer completed successfully. All data validated."
      />
      <StatusCard
        variant="matrix"
        status="warning"
        title="System Warning"
        message="Memory usage approaching critical threshold. Consider optimization."
      />
      <StatusCard
        variant="retro"
        status="error"
        title="Connection Failed"
        message="Unable to establish connection to remote server. Check network."
      />
      <StatusCard
        variant="glow"
        status="info"
        title="Information"
        message="New security update available. Update recommended for enhanced protection."
      />
    </div>
  ),
}

export const DataCards: StoryObj = {
  name: 'Data Cards',
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      <DataCard
        variant="terminal"
        label="CPU Usage"
        value={73}
        unit="%"
        trend="up"
      />
      <DataCard
        variant="matrix"
        label="Memory"
        value="4.2"
        unit="GB"
        trend="neutral"
      />
      <DataCard
        variant="retro"
        label="Network"
        value={1024}
        unit="MB/s"
        trend="down"
      />
      <DataCard
        variant="glow"
        label="Uptime"
        value="99.9"
        unit="%"
        trend="up"
      />
    </div>
  ),
}

// ===================================
// SIZE VARIATIONS
// ===================================

export const CardSizes: StoryObj = {
  name: 'Card Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Card variant="terminal" size="small">
        <CardHeader title="Small Card" />
        <CardBody>
          <P variant="terminal">Compact card layout for minimal content display.</P>
        </CardBody>
      </Card>
      
      <Card variant="matrix" size="medium">
        <CardHeader title="Medium Card" subtitle="Default size" />
        <CardBody>
          <P variant="matrix">Standard card size providing balanced content space and visual presence.</P>
        </CardBody>
      </Card>
      
      <Card variant="retro" size="large">
        <CardHeader title="Large Card" subtitle="Expanded content area" />
        <CardBody>
          <P variant="retro">
            LARGE CARD FORMAT WITH INCREASED PADDING AND CONTENT SPACE. PERFECT FOR DETAILED INFORMATION DISPLAY 
            AND COMPLEX LAYOUTS REQUIRING MORE VISUAL PROMINENCE.
          </P>
        </CardBody>
        <CardFooter>
          <P variant="retro" style={{ margin: 0, opacity: 0.7 }}>ADDITIONAL FOOTER CONTENT</P>
        </CardFooter>
      </Card>
    </div>
  ),
}

// ===================================
// VARIANT SHOWCASE
// ===================================

export const AllVariants: StoryObj = {
  name: 'All Card Variants',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem' }}>
        <H2 variant="simple">CARD COMPONENT VARIANTS</H2>
        
        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          marginTop: '2rem'
        }}>
          {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
            <Card key={variant} variant={variant} interactive>
              <CardHeader 
                title={`${variant.toUpperCase()} VARIANT`} 
                subtitle={`${variant} styling demonstration`} 
              />
              <CardBody>
                <P variant={variant} style={{ marginBottom: '1rem' }}>
                  This card showcases the {variant} variant with authentic styling elements and effects.
                </P>
                <Code variant={variant}>
                  variant="{variant}"
                </Code>
              </CardBody>
              <CardFooter>
                <CardActions>
                  <button style={{
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    color: 'currentColor',
                    border: '1px solid currentColor',
                    fontFamily: 'var(--jadis-font-primary)',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}>
                    ACTION
                  </button>
                </CardActions>
              </CardFooter>
            </Card>
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
// COMPLEX CARD DEMO
// ===================================

export const ComplexCard: StoryObj = {
  name: 'Complex Card Example',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <Card variant="terminal" size="large" interactive>
        <CardHeader 
          title="System Configuration" 
          subtitle="Advanced settings and monitoring"
          actions={
            <button style={{
              padding: '0.25rem 0.5rem',
              background: 'var(--jadis-color-green)',
              color: 'black',
              border: 'none',
              fontFamily: 'var(--jadis-font-primary)',
              cursor: 'pointer',
              fontSize: '0.7rem'
            }}>
              EDIT
            </button>
          }
        />
        
        <CardBody>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <P variant="terminal" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                Server Status
              </P>
              <P variant="terminal" style={{ margin: 0, color: 'var(--jadis-color-green)' }}>
                ● ONLINE
              </P>
            </div>
            
            <div>
              <P variant="terminal" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                Active Connections
              </P>
              <P variant="terminal" style={{ margin: 0 }}>
                247 users
              </P>
            </div>
            
            <div>
              <P variant="terminal" style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                Last Backup
              </P>
              <P variant="terminal" style={{ margin: 0 }}>
                2025-08-31 02:00
              </P>
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <Input 
              variant="terminal" 
              label="Server Name" 
              defaultValue="production-01"
              size={20}
            />
            <Checkbox 
              variant="terminal" 
              label="Enable automatic backups" 
              defaultChecked 
            />
            <Checkbox 
              variant="terminal" 
              label="Send notification alerts" 
              defaultChecked 
            />
          </div>
        </CardBody>
        
        <CardFooter>
          <CardActions align="between">
            <P variant="terminal" style={{ margin: 0, fontSize: '0.7rem', opacity: 0.6 }}>
              Configuration ID: SYS-2025-001
            </P>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{
                padding: '0.5rem 1rem',
                background: 'transparent',
                color: 'var(--jadis-color-red)',
                border: '1px solid var(--jadis-color-red)',
                fontFamily: 'var(--jadis-font-primary)',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>
                RESET
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                background: 'var(--jadis-color-green)',
                color: 'black',
                border: 'none',
                fontFamily: 'var(--jadis-font-primary)',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}>
                SAVE
              </button>
            </div>
          </CardActions>
        </CardFooter>
      </Card>
    </ThemeProvider>
  ),
}