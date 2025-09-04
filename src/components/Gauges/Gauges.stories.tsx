import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { 
  ProgressBar, 
  CircularGauge, 
  LinearGauge, 
  ASCIIMeter,
  StatusLight,
  StatusBadge,
  LoadingSpinner,
  TrendIndicator,
  BatteryIndicator,
  SignalStrength,
  HealthIndicator,
  LevelIndicator
} from './index'
import { H1, H2, H3 } from '../Headers/Headers'
import { P } from '../Typography/Typography'
import { Button } from '../Buttons/Buttons'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { Grid, GridItem } from '../Grid/Grid'

// ===================================
// PROGRESS BAR STORIES
// ===================================

const ProgressBarMeta: Meta<typeof ProgressBar> = {
  title: 'Gauges/ProgressBar',
  component: ProgressBar,
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
        component: 'Horizontal progress bar component with ASCII styling and variant support. Perfect for showing completion progress, loading states, and metric values.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual variant of the progress bar - includes Japanese seasonal themes',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Color theme of the progress bar',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the progress bar',
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Show percentage',
    },
    animated: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
    striped: {
      control: 'boolean',
      description: 'Add striped pattern',
    },
    pulse: {
      control: 'boolean',
      description: 'Enable pulse effect',
    },
  },
}

export default ProgressBarMeta
type ProgressStory = StoryObj<typeof ProgressBar>

export const BasicProgressBar: ProgressStory = {
  args: {
    variant: 'terminal',
    value: 65,
    label: 'Download Progress',
    showPercentage: true,
    animated: true,
  },
}

export const ProgressBarSizes: ProgressStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <H3 variant="simple">Progress Bar Sizes</H3>
      
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Small</P>
        <ProgressBar variant="terminal" value={45} size="small" label="Small Progress" />
      </div>
      
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Medium</P>
        <ProgressBar variant="terminal" value={65} size="medium" label="Medium Progress" />
      </div>
      
      <div>
        <P variant="terminal" style={{ marginBottom: '0.5rem' }}>Large</P>
        <ProgressBar variant="terminal" value={85} size="large" label="Large Progress" />
      </div>
    </div>
  ),
}

export const ProgressBarColors: ProgressStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '400px' }}>
      <H3 variant="simple">Progress Bar Colors</H3>
      
      <ProgressBar variant="terminal" value={25} color="success" label="Success (25%)" />
      <ProgressBar variant="terminal" value={50} color="warning" label="Warning (50%)" />
      <ProgressBar variant="terminal" value={75} color="error" label="Error (75%)" />
      <ProgressBar variant="terminal" value={90} color="info" label="Info (90%)" />
    </div>
  ),
}

export const ProgressBarVariants: ProgressStory = {
  render: () => (
    <Grid variant="terminal" columns={1} gap="large">
      {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
        <GridItem key={variant}>
          <Card variant={variant}>
            <CardHeader title={`${variant.toUpperCase()} PROGRESS`} />
            <CardBody>
              <ProgressBar 
                variant={variant} 
                value={Math.random() * 100 | 0} 
                label="System Process"
                animated
                striped
              />
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
}

export const InteractiveProgressBar: ProgressStory = {
  render: () => {
    const [progress, setProgress] = useState(0)
    
    const startProgress = () => {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }
    
    return (
      <Card variant="terminal" style={{ width: '400px' }}>
        <CardHeader title="INTERACTIVE PROGRESS" />
        <CardBody>
          <ProgressBar
            variant="terminal"
            value={progress}
            label="Processing Data..."
            showValue
            showPercentage
            animated={progress > 0 && progress < 100}
            pulse={progress > 0 && progress < 100}
            color={progress === 100 ? 'success' : 'primary'}
          />
          <div style={{ marginTop: '1rem' }}>
            <Button variant="terminal" onClick={startProgress}>
              Start Process
            </Button>
          </div>
        </CardBody>
      </Card>
    )
  },
}

// ===================================
// CIRCULAR GAUGE STORIES
// ===================================

const CircularGaugeMeta: Meta<typeof CircularGauge> = {
  title: 'Gauges/CircularGauge',
  component: CircularGauge,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'ASCII art circular gauge component with multiple display styles. Creates authentic terminal-style circular progress indicators using ASCII characters.',
      },
    },
  },
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['classic', 'digital', 'retro', 'dots'],
      description: 'ASCII art style of the circular gauge',
    },
  },
}

export const BasicCircularGauge: StoryObj<typeof CircularGauge> = {
  args: {
    variant: 'terminal',
    value: 75,
    label: 'CPU Usage',
    style: 'classic',
    showPercentage: true,
    animated: true,
  },
}

export const CircularGaugeStyles: StoryObj<typeof CircularGauge> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
      <H3 variant="simple">ASCII Circular Gauge Styles</H3>
      
      <Grid variant="terminal" columns={2} gap="xlarge">
        <GridItem style={{ textAlign: 'center' }}>
          <P variant="terminal" style={{ marginBottom: '1rem' }}>Classic Style</P>
          <CircularGauge variant="terminal" value={65} style="classic" label="CPU" animated />
        </GridItem>
        
        <GridItem style={{ textAlign: 'center' }}>
          <P variant="matrix" style={{ marginBottom: '1rem' }}>Digital Style</P>
          <CircularGauge variant="matrix" value={78} style="digital" label="Memory" animated />
        </GridItem>
        
        <GridItem style={{ textAlign: 'center' }}>
          <P variant="retro" style={{ marginBottom: '1rem' }}>Retro Style</P>
          <CircularGauge variant="retro" value={45} style="retro" label="Disk" />
        </GridItem>
        
        <GridItem style={{ textAlign: 'center' }}>
          <P variant="glow" style={{ marginBottom: '1rem' }}>Dots Style</P>
          <CircularGauge variant="glow" value={89} style="dots" label="Network" />
        </GridItem>
      </Grid>
    </div>
  ),
}

export const CircularGaugeGrid: StoryObj<typeof CircularGauge> = {
  render: () => (
    <Grid variant="terminal" columns={3} gap="large">
      <GridItem>
        <Card variant="terminal">
          <CardBody style={{ textAlign: 'center' }}>
            <CircularGauge 
              variant="terminal" 
              value={45} 
              label="CPU" 
              style="classic"
              color="success" 
              animated
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card variant="matrix">
          <CardBody style={{ textAlign: 'center' }}>
            <CircularGauge 
              variant="matrix" 
              value={78} 
              label="Memory" 
              style="digital"
              color="warning" 
              animated
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card variant="glow">
          <CardBody style={{ textAlign: 'center' }}>
            <CircularGauge 
              variant="glow" 
              value={92} 
              label="Disk" 
              style="retro"
              color="error" 
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// LINEAR GAUGE STORIES
// ===================================

const LinearGaugeMeta: Meta<typeof LinearGauge> = {
  title: 'Gauges/LinearGauge',
  component: LinearGauge,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Linear gauge with scale indicators and orientation options. Perfect for detailed metric visualization with precise value indication.',
      },
    },
  },
}

export const HorizontalLinearGauge: StoryObj<typeof LinearGauge> = {
  args: {
    variant: 'terminal',
    value: 65,
    label: 'Network Throughput',
    orientation: 'horizontal',
    showValue: true,
    showScale: true,
    showTicks: true,
    animated: true,
  },
}

export const VerticalLinearGauge: StoryObj<typeof LinearGauge> = {
  args: {
    variant: 'matrix',
    value: 85,
    label: 'Signal Strength',
    orientation: 'vertical',
    showValue: true,
    showScale: true,
    showTicks: true,
    color: 'info',
  },
}

// ===================================
// ASCII METER STORIES
// ===================================

const ASCIIMeterMeta: Meta<typeof ASCIIMeter> = {
  title: 'Gauges/ASCIIMeter',
  component: ASCIIMeter,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'ASCII art meter component with multiple display styles. Creates authentic terminal-style meters using ASCII characters.',
      },
    },
  },
}

export const ClassicASCIIMeter: StoryObj<typeof ASCIIMeter> = {
  args: {
    variant: 'terminal',
    value: 42,
    max: 100,
    label: 'System Load',
    style: 'classic',
    showValue: true,
  },
}

export const ASCIIMeterStyles: StoryObj<typeof ASCIIMeter> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <H3 variant="simple">ASCII Meter Styles</H3>
      
      <div>
        <P variant="terminal" style={{ textAlign: 'center', marginBottom: '1rem' }}>Classic Style</P>
        <ASCIIMeter variant="terminal" value={65} style="classic" label="Temperature" />
      </div>
      
      <div>
        <P variant="matrix" style={{ textAlign: 'center', marginBottom: '1rem' }}>Digital Style</P>
        <ASCIIMeter variant="matrix" value={78} style="digital" label="Network Load" />
      </div>
      
      <div>
        <P variant="retro" style={{ textAlign: 'center', marginBottom: '1rem' }}>Retro Style</P>
        <ASCIIMeter variant="retro" value={45} style="retro" label="Power Level" />
      </div>
    </div>
  ),
}

// ===================================
// STATUS INDICATORS SHOWCASE
// ===================================

export const StatusIndicatorsShowcase: StoryObj = {
  title: 'Gauges/StatusIndicators',
  render: () => (
    <Grid variant="terminal" columns={2} gap="large">
      <GridItem>
        <Card variant="terminal">
          <CardHeader title="STATUS LIGHTS" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <StatusLight variant="terminal" status="success" label="System Online" pulse />
              <StatusLight variant="terminal" status="warning" label="High CPU Usage" animated />
              <StatusLight variant="terminal" status="error" label="Connection Failed" />
              <StatusLight variant="terminal" status="info" label="Maintenance Mode" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="matrix">
          <CardHeader title="STATUS BADGES" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <StatusBadge variant="matrix" status="online" pulse />
              <StatusBadge variant="matrix" status="busy" />
              <StatusBadge variant="matrix" status="away" />
              <StatusBadge variant="matrix" status="maintenance" />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="retro">
          <CardHeader title="LOADING SPINNERS" />
          <CardBody>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <LoadingSpinner variant="retro" style="spinner" text="Loading..." />
              <LoadingSpinner variant="retro" style="dots" text="Processing..." />
              <LoadingSpinner variant="retro" style="bars" text="Analyzing..." />
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="glow">
          <CardHeader title="TREND INDICATORS" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TrendIndicator variant="glow" trend="up" value="$1,234" change="15.2%" animated />
              <TrendIndicator variant="glow" trend="down" value="87.3%" change="3.1%" animated />
              <TrendIndicator variant="glow" trend="stable" value="42ms" />
              <TrendIndicator variant="glow" trend="volatile" value="1.23k" change="±8%" animated />
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// SPECIALIZED INDICATORS SHOWCASE
// ===================================

export const SpecializedIndicatorsShowcase: StoryObj = {
  title: 'Gauges/SpecializedIndicators',
  render: () => (
    <Grid variant="terminal" columns={2} gap="large">
      <GridItem>
        <Card variant="terminal">
          <CardHeader title="BATTERY & SIGNAL" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <BatteryIndicator variant="terminal" level={85} showPercentage />
              <BatteryIndicator variant="terminal" level={25} charging animated />
              <BatteryIndicator variant="terminal" level={5} />
              
              <div style={{ marginTop: '1rem' }}>
                <SignalStrength variant="terminal" strength={4} max={5} showValue />
                <SignalStrength variant="terminal" strength={2} max={5} />
                <SignalStrength variant="terminal" strength={1} max={5} />
              </div>
            </div>
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="matrix">
          <CardHeader title="HEALTH & LEVELS" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <HealthIndicator variant="matrix" health="excellent" showLabel animated />
              <HealthIndicator variant="matrix" health="good" value="95%" />
              <HealthIndicator variant="matrix" health="fair" value="72%" />
              <HealthIndicator variant="matrix" health="critical" value="12%" />
              
              <div style={{ marginTop: '1rem' }}>
                <LevelIndicator variant="matrix" level={8} maxLevel={10} showValue />
                <LevelIndicator variant="matrix" level={5} maxLevel={10} color="warning" />
                <LevelIndicator variant="matrix" level={2} maxLevel={10} color="error" />
              </div>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// SYSTEM MONITORING DASHBOARD
// ===================================

export const SystemMonitoringDashboard: StoryObj = {
  title: 'Gauges/SystemDashboard',
  render: () => {
    const [metrics, setMetrics] = useState({
      cpu: 45,
      memory: 67,
      disk: 34,
      network: 78,
      temperature: 65,
      power: 89
    })
    
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.random() * 100 | 0,
        memory: Math.random() * 100 | 0,
        disk: Math.random() * 100 | 0,
        network: Math.random() * 100 | 0,
        temperature: Math.random() * 100 | 0,
        power: Math.random() * 100 | 0,
      })
    }
    
    return (
      <div>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <H1 variant="box">SYSTEM MONITORING DASHBOARD</H1>
          <Button variant="terminal" onClick={updateMetrics} style={{ marginTop: '1rem' }}>
            Refresh Metrics
          </Button>
        </div>
        
        <Grid variant="terminal" columns={3} gap="large">
          {/* Row 1 - ASCII Circular Gauges */}
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="CPU USAGE" />
              <CardBody style={{ textAlign: 'center' }}>
                <CircularGauge
                  variant="terminal"
                  value={metrics.cpu}
                  style="classic"
                  color={metrics.cpu > 80 ? 'error' : metrics.cpu > 60 ? 'warning' : 'success'}
                  showPercentage
                  animated
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="matrix">
              <CardHeader title="MEMORY" />
              <CardBody style={{ textAlign: 'center' }}>
                <CircularGauge
                  variant="matrix"
                  value={metrics.memory}
                  style="digital"
                  color={metrics.memory > 80 ? 'error' : metrics.memory > 60 ? 'warning' : 'success'}
                  showPercentage
                  animated
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="glow">
              <CardHeader title="DISK USAGE" />
              <CardBody style={{ textAlign: 'center' }}>
                <CircularGauge
                  variant="glow"
                  value={metrics.disk}
                  style="retro"
                  color={metrics.disk > 80 ? 'error' : metrics.disk > 60 ? 'warning' : 'success'}
                  showPercentage
                  animated
                />
              </CardBody>
            </Card>
          </GridItem>
          
          {/* Row 2 - Progress Bars */}
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="NETWORK I/O" />
              <CardBody>
                <ProgressBar
                  variant="terminal"
                  value={metrics.network}
                  label="Throughput"
                  showPercentage
                  animated
                  color={metrics.network > 80 ? 'error' : 'primary'}
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="matrix">
              <CardHeader title="TEMPERATURE" />
              <CardBody>
                <ASCIIMeter
                  variant="matrix"
                  value={metrics.temperature}
                  label="CPU Temp"
                  style="digital"
                  showValue
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="retro">
              <CardHeader title="POWER LEVEL" />
              <CardBody>
                <BatteryIndicator
                  variant="retro"
                  level={metrics.power}
                  showPercentage
                  charging={metrics.power < 90}
                  animated
                />
              </CardBody>
            </Card>
          </GridItem>
          
          {/* Row 3 - Status Indicators */}
          <GridItem columnSpan={3}>
            <Card variant="terminal">
              <CardHeader title="SYSTEM STATUS" />
              <CardBody>
                <Grid variant="terminal" columns={4} gap="medium">
                  <GridItem style={{ textAlign: 'center' }}>
                    <StatusBadge 
                      variant="terminal" 
                      status={metrics.cpu < 80 ? 'online' : 'error'} 
                      text="CPU" 
                      pulse={metrics.cpu > 80}
                    />
                  </GridItem>
                  <GridItem style={{ textAlign: 'center' }}>
                    <StatusBadge 
                      variant="terminal" 
                      status={metrics.memory < 85 ? 'online' : 'error'} 
                      text="RAM" 
                      pulse={metrics.memory > 85}
                    />
                  </GridItem>
                  <GridItem style={{ textAlign: 'center' }}>
                    <StatusBadge 
                      variant="terminal" 
                      status={metrics.disk < 90 ? 'online' : 'error'} 
                      text="DISK" 
                      pulse={metrics.disk > 90}
                    />
                  </GridItem>
                  <GridItem style={{ textAlign: 'center' }}>
                    <StatusBadge 
                      variant="terminal" 
                      status={metrics.network > 20 ? 'online' : 'offline'} 
                      text="NET" 
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    )
  },
}

// ===================================
// JAPANESE SEASONAL THEME SHOWCASE
// ===================================

export const JapaneseSeasonalGauges: StoryObj = {
  render: () => {
    const [values] = useState({
      haru: 72,   // Spring
      natsu: 85,  // Summer  
      aki: 45,    // Autumn
      fuyu: 28,   // Winter
      sumi: 60    // Ink
    })

    return (
      <div style={{ padding: '2rem' }}>
        <H1 variant="terminal" style={{ marginBottom: '2rem', color: 'var(--jadis-jp-sumi-iro)' }}>
          四季計器 (Shiki Keiki) - Seasonal Gauges
        </H1>

        <Grid columns={1} gap="large">
          {/* Spring (Haru) - Cherry Blossom Theme */}
          <GridItem>
            <Card variant="minimal">
              <CardHeader>
                <H3 variant="minimal" style={{ color: 'var(--jadis-jp-sakura-iro)' }}>
                  春 (Haru) - Spring Metrics
                </H3>
              </CardHeader>
              <CardBody>
                <Grid columns={2} gap="medium">
                  <GridItem>
                    <ProgressBar
                      variant="haru"
                      value={values.haru}
                      label="桜開花 (Cherry Blossom Progress)"
                      showPercentage
                      animated
                      color="primary"
                    />
                  </GridItem>
                  <GridItem>
                    <CircularGauge
                      variant="haru"
                      value={values.haru}
                      label="春の暖かさ (Spring Warmth)"
                      showPercentage
                      style="dots"
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>

          {/* Summer (Natsu) - Deep Indigo Theme */}
          <GridItem>
            <Card variant="minimal">
              <CardHeader>
                <H3 variant="minimal" style={{ color: 'var(--jadis-jp-kon-iro)' }}>
                  夏 (Natsu) - Summer Metrics
                </H3>
              </CardHeader>
              <CardBody>
                <Grid columns={2} gap="medium">
                  <GridItem>
                    <ProgressBar
                      variant="natsu"
                      value={values.natsu}
                      label="夏の熱 (Summer Heat)"
                      showPercentage
                      striped
                      color="warning"
                    />
                  </GridItem>
                  <GridItem>
                    <LinearGauge
                      variant="natsu"
                      value={values.natsu}
                      orientation="horizontal"
                      label="波の高さ (Wave Height)"
                      showValue
                      animated
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>

          {/* Autumn (Aki) - Maple Red Theme */}
          <GridItem>
            <Card variant="minimal">
              <CardHeader>
                <H3 variant="minimal" style={{ color: 'var(--jadis-jp-momiji-iro)' }}>
                  秋 (Aki) - Autumn Metrics
                </H3>
              </CardHeader>
              <CardBody>
                <Grid columns={2} gap="medium">
                  <GridItem>
                    <ProgressBar
                      variant="aki"
                      value={values.aki}
                      label="紅葉進行 (Autumn Leaves Progress)"
                      showPercentage
                      color="error"
                    />
                  </GridItem>
                  <GridItem>
                    <ASCIIMeter
                      variant="aki"
                      value={values.aki}
                      style="blocks"
                      label="収穫量 (Harvest Level)"
                      showValue
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>

          {/* Winter (Fuyu) - Snow White Theme */}
          <GridItem>
            <Card variant="minimal">
              <CardHeader>
                <H3 variant="minimal" style={{ color: 'var(--jadis-jp-yukishiro)' }}>
                  冬 (Fuyu) - Winter Metrics
                </H3>
              </CardHeader>
              <CardBody>
                <Grid columns={2} gap="medium">
                  <GridItem>
                    <ProgressBar
                      variant="fuyu"
                      value={values.fuyu}
                      label="雪の深さ (Snow Depth)"
                      showPercentage
                      color="info"
                    />
                  </GridItem>
                  <GridItem>
                    <CircularGauge
                      variant="fuyu"
                      value={values.fuyu}
                      label="氷結度 (Freezing Level)"
                      showValue
                      style="retro"
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>

          {/* Traditional Sumi Ink Theme */}
          <GridItem>
            <Card variant="minimal">
              <CardHeader>
                <H3 variant="minimal" style={{ color: 'var(--jadis-jp-sumi-iro)' }}>
                  墨 (Sumi) - Ink Metrics
                </H3>
              </CardHeader>
              <CardBody>
                <Grid columns={3} gap="medium">
                  <GridItem>
                    <ProgressBar
                      variant="sumi"
                      value={values.sumi}
                      label="筆圧 (Brush Pressure)"
                      showValue
                    />
                  </GridItem>
                  <GridItem>
                    <ASCIIMeter
                      variant="sumi"
                      value={values.sumi}
                      style="retro"
                      label="墨濃度 (Ink Density)"
                    />
                  </GridItem>
                  <GridItem>
                    <LinearGauge
                      variant="sumi"
                      value={values.sumi}
                      orientation="vertical"
                      label="筆跡 (Stroke)"
                      height={150}
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>

        {/* Status Indicators with Japanese Themes */}
        <Card variant="minimal" style={{ marginTop: '2rem' }}>
          <CardHeader>
            <H2 variant="minimal" style={{ color: 'var(--jadis-jp-sumi-iro)' }}>
              和風状態指示器 (Japanese Status Indicators)
            </H2>
          </CardHeader>
          <CardBody>
            <Grid columns={5} gap="medium">
              <GridItem>
                <div style={{ textAlign: 'center' }}>
                  <StatusLight variant="haru" status="active" label="春" pulse />
                  <P variant="minimal" size="small" style={{ marginTop: '0.5rem', color: 'var(--jadis-jp-sakura-iro)' }}>
                    Haru Active
                  </P>
                </div>
              </GridItem>
              <GridItem>
                <div style={{ textAlign: 'center' }}>
                  <StatusBadge variant="natsu" status="online" text="夏" />
                  <P variant="minimal" size="small" style={{ marginTop: '0.5rem', color: 'var(--jadis-jp-kon-iro)' }}>
                    Natsu Online
                  </P>
                </div>
              </GridItem>
              <GridItem>
                <div style={{ textAlign: 'center' }}>
                  <TrendIndicator variant="aki" trend="down" value={-5} label="秋" />
                  <P variant="minimal" size="small" style={{ marginTop: '0.5rem', color: 'var(--jadis-jp-momiji-iro)' }}>
                    Aki Trend
                  </P>
                </div>
              </GridItem>
              <GridItem>
                <div style={{ textAlign: 'center' }}>
                  <HealthIndicator variant="fuyu" health={80} label="冬" />
                  <P variant="minimal" size="small" style={{ marginTop: '0.5rem', color: 'var(--jadis-jp-yukishiro)' }}>
                    Fuyu Health
                  </P>
                </div>
              </GridItem>
              <GridItem>
                <div style={{ textAlign: 'center' }}>
                  <BatteryIndicator variant="sumi" level={60} label="墨" animated />
                  <P variant="minimal" size="small" style={{ marginTop: '0.5rem', color: 'var(--jadis-jp-sumi-iro)' }}>
                    Sumi Battery
                  </P>
                </div>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </div>
    )
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Showcase of gauge components with Japanese seasonal themes inspired by traditional colors and aesthetics.',
      },
    },
  },
}

// Export all meta objects for proper Storybook organization
export { CircularGaugeMeta, LinearGaugeMeta, ASCIIMeterMeta }