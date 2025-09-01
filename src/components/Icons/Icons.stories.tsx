import type { Meta, StoryObj } from '@storybook/react'
import { ASCIIIcon, ASCIIIcons, IconCategories, IconDisplayNames, getIcon } from './Icons'
import { Grid, GridItem } from '../Grid/Grid'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { H2, P } from '../Typography/Typography'

const meta: Meta<typeof ASCIIIcon> = {
  title: 'Foundation/Icons',
  component: ASCIIIcon,
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
        component: 'ASCII icons designed for terminal aesthetics and authentic retro computing feel.',
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(ASCIIIcons),
      description: 'Icon name from the ASCII icon set',
    },
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the icon',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the icon',
    },
  },
}

export default meta
type Story = StoryObj<typeof ASCIIIcon>

// ===================================
// BASIC ICON EXAMPLES
// ===================================

export const Default: Story = {
  args: {
    icon: 'home',
    variant: 'terminal',
    size: 'medium',
  },
}

export const AllVariants: Story = {
  render: () => (
    <Grid variant="terminal" columns={5} gap="large" bordered>
      <GridItem variant="terminal" bordered>
        <Card variant="terminal">
          <CardHeader title="TERMINAL" />
          <CardBody>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASCIIIcon icon="home" variant="terminal" size="large" />
              <ASCIIIcon icon="settings" variant="terminal" size="large" />
              <ASCIIIcon icon="user" variant="terminal" size="large" />
              <ASCIIIcon icon="database" variant="terminal" size="large" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem variant="matrix" bordered>
        <Card variant="matrix">
          <CardHeader title="MATRIX" />
          <CardBody>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASCIIIcon icon="network" variant="matrix" size="large" />
              <ASCIIIcon icon="data" variant="matrix" size="large" />
              <ASCIIIcon icon="code" variant="matrix" size="large" />
              <ASCIIIcon icon="search" variant="matrix" size="large" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem variant="retro" bordered>
        <Card variant="retro">
          <CardHeader title="RETRO" />
          <CardBody>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASCIIIcon icon="archive" variant="retro" size="large" />
              <ASCIIIcon icon="config" variant="retro" size="large" />
              <ASCIIIcon icon="power" variant="retro" size="large" />
              <ASCIIIcon icon="tools" variant="retro" size="large" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem variant="minimal" bordered>
        <Card variant="minimal">
          <CardHeader title="MINIMAL" />
          <CardBody>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASCIIIcon icon="file" variant="minimal" size="large" />
              <ASCIIIcon icon="folder" variant="minimal" size="large" />
              <ASCIIIcon icon="document" variant="minimal" size="large" />
              <ASCIIIcon icon="page" variant="minimal" size="large" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem variant="glow" bordered>
        <Card variant="glow">
          <CardHeader title="GLOW" />
          <CardBody>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASCIIIcon icon="success" variant="glow" size="large" />
              <ASCIIIcon icon="warning" variant="glow" size="large" />
              <ASCIIIcon icon="info" variant="glow" size="large" />
              <ASCIIIcon icon="error" variant="glow" size="large" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// SIZE VARIATIONS
// ===================================

export const SizeVariations: Story = {
  render: () => (
    <Card variant="terminal" size="large">
      <CardHeader title="SIZE VARIATIONS" />
      <CardBody>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="home" variant="terminal" size="small" />
            <P variant="terminal" style={{ marginTop: '0.5rem' }}>Small</P>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="home" variant="terminal" size="medium" />
            <P variant="terminal" style={{ marginTop: '0.5rem' }}>Medium</P>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="home" variant="terminal" size="large" />
            <P variant="terminal" style={{ marginTop: '0.5rem' }}>Large</P>
          </div>
        </div>
      </CardBody>
    </Card>
  ),
}

// ===================================
// ICON CATEGORIES
// ===================================

const IconCategoryDisplay: React.FC<{ 
  category: keyof typeof IconCategories; 
  variant: 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' 
}> = ({ category, variant }) => (
  <GridItem variant={variant} bordered>
    <Card variant={variant}>
      <CardHeader title={category.toUpperCase()} />
      <CardBody>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {IconCategories[category].map((iconName) => (
            <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
              <ASCIIIcon icon={iconName as keyof typeof ASCIIIcons} variant={variant} size="medium" />
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  </GridItem>
)

export const NavigationIcons: Story = {
  render: () => (
    <Grid variant="terminal" columns={1} gap="medium" bordered>
      <IconCategoryDisplay category="navigation" variant="terminal" />
    </Grid>
  ),
}

export const FileIcons: Story = {
  render: () => (
    <Grid variant="terminal" columns={1} gap="medium" bordered>
      <IconCategoryDisplay category="files" variant="retro" />
    </Grid>
  ),
}

export const TechnologyIcons: Story = {
  render: () => (
    <Grid variant="matrix" columns={1} gap="medium" bordered>
      <IconCategoryDisplay category="technology" variant="matrix" />
    </Grid>
  ),
}

export const StatusIcons: Story = {
  render: () => (
    <Grid variant="glow" columns={1} gap="medium" bordered>
      <IconCategoryDisplay category="status" variant="glow" />
    </Grid>
  ),
}

// ===================================
// COMPREHENSIVE ICON SHOWCASE
// ===================================

export const AllIcons: Story = {
  render: () => (
    <div style={{ padding: '1rem' }}>
      <H2 variant="terminal" align="center" style={{ marginBottom: '2rem' }}>
        COMPLETE ASCII ICON SET
      </H2>
      
      <Grid variant="terminal" columns="fit" gap="small" bordered>
        {Object.entries(ASCIIIcons).map(([iconName, iconChar]) => {
          if (typeof iconChar === 'object') return null // Skip nested objects
          
          return (
            <GridItem key={iconName} variant="terminal" bordered>
              <Card variant="terminal" size="small">
                <CardBody>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    minHeight: '60px',
                    justifyContent: 'center'
                  }}>
                    <ASCIIIcon 
                      icon={iconName as keyof typeof ASCIIIcons} 
                      variant="terminal" 
                      size="large" 
                    />
                    <P variant="terminal" style={{ fontSize: '0.7rem', textAlign: 'center' }}>
                      {IconDisplayNames[iconName as keyof typeof IconDisplayNames] || iconName}
                    </P>
                    <P variant="terminal" style={{ fontSize: '0.6rem', opacity: 0.6, textAlign: 'center' }}>
                      {iconName}
                    </P>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          )
        })}
      </Grid>
      
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--jadis-border-primary)' }}>
        <P variant="terminal" style={{ textAlign: 'center', opacity: 0.8 }}>
          Usage: {`<ASCIIIcon icon="home" variant="terminal" size="medium" />`}
        </P>
      </div>
    </div>
  ),
}

// ===================================
// USAGE EXAMPLES
// ===================================

export const InButtons: Story = {
  render: () => (
    <Card variant="terminal" size="large">
      <CardHeader title="ICONS IN UI COMPONENTS" />
      <CardBody>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ 
            background: 'var(--jadis-bg-secondary)', 
            border: '1px solid var(--jadis-border-primary)', 
            color: 'var(--jadis-text-primary)',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ASCIIIcon icon="settings" variant="terminal" />
            Settings
          </button>
          
          <button style={{ 
            background: 'var(--jadis-bg-secondary)', 
            border: '1px solid var(--jadis-border-primary)', 
            color: 'var(--jadis-text-primary)',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ASCIIIcon icon="search" variant="terminal" />
            Search
          </button>
          
          <button style={{ 
            background: 'var(--jadis-bg-secondary)', 
            border: '1px solid var(--jadis-border-primary)', 
            color: 'var(--jadis-text-primary)',
            padding: '0.5rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ASCIIIcon icon="user" variant="terminal" />
            Profile
          </button>
        </div>
      </CardBody>
    </Card>
  ),
}

export const CustomIcons: Story = {
  render: () => (
    <Card variant="matrix" size="large">
      <CardHeader title="CUSTOM ASCII CHARACTERS" />
      <CardBody>
        <P variant="matrix" style={{ marginBottom: '1rem', textAlign: 'center' }}>
          You can also pass custom ASCII characters directly:
        </P>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="╬" variant="matrix" size="large" />
            <P variant="matrix" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Custom: ╬</P>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="▲▼" variant="matrix" size="large" />
            <P variant="matrix" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Custom: ▲▼</P>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ASCIIIcon icon="◊◈" variant="matrix" size="large" />
            <P variant="matrix" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Custom: ◊◈</P>
          </div>
        </div>
      </CardBody>
    </Card>
  ),
}