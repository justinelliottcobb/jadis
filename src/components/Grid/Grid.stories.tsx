import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid, GridItem, ResponsiveGrid } from './Grid'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { P } from '../Typography/Typography'
import { Button } from '../Buttons/Buttons'

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
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
        component: 'A comprehensive CSS Grid system with terminal aesthetics and responsive features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the grid',
    },
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fit'],
      description: 'Number of grid columns',
    },
    rows: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 'auto', 'fit'],
      description: 'Number of grid rows',
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'xl'],
      description: 'Gap size between grid items',
    },
    bordered: {
      control: 'boolean',
      description: 'Add border around the grid',
    },
    debug: {
      control: 'boolean',
      description: 'Show debug overlay',
    },
  },
}

export default meta
type Story = StoryObj<typeof Grid>

// Sample content component for demos
const SampleCard: React.FC<{ title: string; variant?: any; content?: string }> = ({ 
  title, 
  variant = 'terminal',
  content = 'Sample content for grid demonstration' 
}) => (
  <Card variant={variant} size="medium">
    <CardHeader title={title} />
    <CardBody>
      <P variant={variant}>{content}</P>
    </CardBody>
  </Card>
)

// ===================================
// BASIC GRID STORIES
// ===================================

export const Terminal: Story = {
  args: {
    variant: 'terminal',
    columns: 3,
    gap: 'medium',
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="terminal" bordered>
        <SampleCard title="System Monitor" variant="terminal" />
      </GridItem>
      <GridItem variant="terminal" bordered>
        <SampleCard title="Process List" variant="terminal" />
      </GridItem>
      <GridItem variant="terminal" bordered>
        <SampleCard title="Network Status" variant="terminal" />
      </GridItem>
      <GridItem variant="terminal" bordered columnSpan={2}>
        <SampleCard title="Console Output" variant="terminal" content="Extended console content spans two columns" />
      </GridItem>
      <GridItem variant="terminal" bordered>
        <SampleCard title="CPU Usage" variant="terminal" />
      </GridItem>
    </Grid>
  ),
}

export const Matrix: Story = {
  args: {
    variant: 'matrix',
    columns: 4,
    gap: 'large',
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="matrix" bordered>
        <SampleCard title="Data Stream 1" variant="matrix" />
      </GridItem>
      <GridItem variant="matrix" bordered>
        <SampleCard title="Data Stream 2" variant="matrix" />
      </GridItem>
      <GridItem variant="matrix" bordered columnSpan={2}>
        <SampleCard title="Matrix Core" variant="matrix" content="Central processing node" />
      </GridItem>
      <GridItem variant="matrix" bordered columnSpan="full">
        <SampleCard title="System Override" variant="matrix" content="Full width system control panel" />
      </GridItem>
    </Grid>
  ),
}

export const Retro: Story = {
  args: {
    variant: 'retro',
    columns: 2,
    gap: 'medium',
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="retro" bordered>
        <SampleCard title="Amber Display" variant="retro" />
      </GridItem>
      <GridItem variant="retro" bordered>
        <SampleCard title="Status Panel" variant="retro" />
      </GridItem>
      <GridItem variant="retro" bordered rowSpan={2}>
        <SampleCard title="Main Console" variant="retro" content="Tall console spanning two rows" />
      </GridItem>
      <GridItem variant="retro" bordered>
        <SampleCard title="Input Terminal" variant="retro" />
      </GridItem>
    </Grid>
  ),
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    columns: 3,
    gap: 'small',
    bordered: false,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="minimal" bordered>
        <SampleCard title="Clean Interface" variant="minimal" />
      </GridItem>
      <GridItem variant="minimal" bordered>
        <SampleCard title="Simple Layout" variant="minimal" />
      </GridItem>
      <GridItem variant="minimal" bordered>
        <SampleCard title="Minimal Design" variant="minimal" />
      </GridItem>
      <GridItem variant="minimal" bordered columnSpan={3}>
        <SampleCard title="Full Width Section" variant="minimal" content="Spans entire width with minimal styling" />
      </GridItem>
    </Grid>
  ),
}

export const Glow: Story = {
  args: {
    variant: 'glow',
    columns: 3,
    gap: 'large',
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="glow" bordered interactive>
        <SampleCard title="Neon Panel 1" variant="glow" />
      </GridItem>
      <GridItem variant="glow" bordered interactive>
        <SampleCard title="Neon Panel 2" variant="glow" />
      </GridItem>
      <GridItem variant="glow" bordered interactive>
        <SampleCard title="Neon Panel 3" variant="glow" />
      </GridItem>
      <GridItem variant="glow" bordered interactive columnSpan={2}>
        <SampleCard title="Cyberpunk Console" variant="glow" content="Enhanced glow effects with interaction" />
      </GridItem>
      <GridItem variant="glow" bordered interactive>
        <SampleCard title="Control Node" variant="glow" />
      </GridItem>
    </Grid>
  ),
}

// ===================================
// LAYOUT DEMONSTRATION STORIES
// ===================================

export const AutoFitColumns: Story = {
  args: {
    variant: 'terminal',
    columns: 'fit',
    gap: 'medium',
    bordered: true,
    minColumnWidth: '200px',
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i} variant="terminal" bordered>
          <SampleCard title={`Auto Item ${i + 1}`} variant="terminal" />
        </GridItem>
      ))}
    </Grid>
  ),
}

export const ComplexLayout: Story = {
  args: {
    variant: 'terminal',
    columns: 6,
    rows: 4,
    gap: 'medium',
    bordered: true,
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Grid 
        {...args} 
        style={{ 
          minHeight: '400px',
          '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto'
          }
        }}
      >
        <GridItem variant="terminal" bordered columnSpan={2} rowSpan={2}>
          <SampleCard title="Large Panel" variant="terminal" content="2x2 grid area" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={4}>
          <SampleCard title="Header Section" variant="terminal" content="Full width header" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={2}>
          <SampleCard title="Side Panel 1" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={2}>
          <SampleCard title="Side Panel 2" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={3}>
          <SampleCard title="Content Left" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={3}>
          <SampleCard title="Content Right" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan="full">
          <SampleCard title="Footer" variant="terminal" content="Full width footer section" />
        </GridItem>
      </Grid>
    </div>
  ),
}

export const ResponsiveDemo: Story = {
  render: () => (
    <ResponsiveGrid
      variant="terminal"
      xs={1}
      sm={2}
      md={3}
      lg={4}
      xl={5}
      xxl={6}
      gap="medium"
      bordered
    >
      {Array.from({ length: 12 }, (_, i) => (
        <GridItem key={i} variant="terminal" bordered>
          <SampleCard title={`Responsive ${i + 1}`} variant="terminal" />
        </GridItem>
      ))}
    </ResponsiveGrid>
  ),
}

export const TabletOptimized: Story = {
  args: {
    variant: 'terminal',
    columns: 4,
    gap: 'medium',
    bordered: true,
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '1024px', margin: '0 auto' }}>
      <Grid {...args}>
        <GridItem variant="terminal" bordered columnSpan="full">
          <SampleCard title="Header - Full Width" variant="terminal" content="Always spans full width on all devices" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan={2}>
          <SampleCard title="Main Content" variant="terminal" content="2 columns on desktop, 1 on mobile" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Sidebar 1" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Sidebar 2" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Card 1" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Card 2" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Card 3" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered>
          <SampleCard title="Card 4" variant="terminal" />
        </GridItem>
        <GridItem variant="terminal" bordered columnSpan="full">
          <SampleCard title="Footer - Full Width" variant="terminal" content="Always spans full width" />
        </GridItem>
      </Grid>
    </div>
  ),
}

// ===================================
// INTERACTIVE FEATURES
// ===================================

export const InteractiveGrid: Story = {
  args: {
    variant: 'glow',
    columns: 3,
    gap: 'large',
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="glow" bordered interactive>
        <Card variant="glow" interactive>
          <CardHeader title="Interactive Card 1" />
          <CardBody>
            <P variant="glow">Hover to see effects</P>
            <Button variant="glow" color="success">Click Me</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem variant="glow" bordered interactive>
        <Card variant="glow" interactive>
          <CardHeader title="Interactive Card 2" />
          <CardBody>
            <P variant="glow">Interactive grid item</P>
            <Button variant="glow" color="warning">Action</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem variant="glow" bordered interactive>
        <Card variant="glow" interactive>
          <CardHeader title="Interactive Card 3" />
          <CardBody>
            <P variant="glow">Animated hover states</P>
            <Button variant="glow" color="error">Submit</Button>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// DEBUGGING AND DEVELOPMENT
// ===================================

export const DebugMode: Story = {
  args: {
    variant: 'terminal',
    columns: 4,
    gap: 'medium',
    debug: true,
    bordered: true,
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem variant="terminal">
        <P variant="terminal">Item 1</P>
      </GridItem>
      <GridItem variant="terminal" columnSpan={2}>
        <P variant="terminal">Item 2 (spans 2 columns)</P>
      </GridItem>
      <GridItem variant="terminal">
        <P variant="terminal">Item 3</P>
      </GridItem>
      <GridItem variant="terminal" columnSpan="full">
        <P variant="terminal">Item 4 (full width)</P>
      </GridItem>
    </Grid>
  ),
}

export const GapVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Gap: None</P>
        <Grid variant="terminal" columns={3} gap="none" bordered>
          <GridItem variant="terminal" bordered><P variant="terminal">No gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">No gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">No gap</P></GridItem>
        </Grid>
      </div>
      
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Gap: Small</P>
        <Grid variant="terminal" columns={3} gap="small" bordered>
          <GridItem variant="terminal" bordered><P variant="terminal">Small gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">Small gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">Small gap</P></GridItem>
        </Grid>
      </div>
      
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Gap: Large</P>
        <Grid variant="terminal" columns={3} gap="large" bordered>
          <GridItem variant="terminal" bordered><P variant="terminal">Large gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">Large gap</P></GridItem>
          <GridItem variant="terminal" bordered><P variant="terminal">Large gap</P></GridItem>
        </Grid>
      </div>
    </div>
  ),
}