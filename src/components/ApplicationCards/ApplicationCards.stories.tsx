import type { Meta, StoryObj } from '@storybook/react'
import { ApplicationCard, ServiceMonitorCard, SystemStatusCard } from './ApplicationCards'
import { Grid, GridItem } from '../Grid/Grid'
import { H2 } from '../Typography/Typography'

const meta: Meta<typeof ApplicationCard> = {
  title: 'Application/ApplicationCards',
  component: ApplicationCard,
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
        component: 'Application monitoring cards with system metrics, status tracking, and control actions.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the application card',
    },
    status: {
      control: { type: 'select' },
      options: ['running', 'stopped', 'error', 'loading', 'maintenance'],
      description: 'Current application status',
    },
    priority: {
      control: { type: 'select' },
      options: ['low', 'medium', 'high', 'critical'],
      description: 'Application priority level',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable interactive hover effects',
    },
  },
}

export default meta
type Story = StoryObj<typeof ApplicationCard>

// ===================================
// BASIC APPLICATION CARDS
// ===================================

export const RunningApplication: Story = {
  args: {
    variant: 'terminal',
    name: 'Web Server',
    version: '2.4.1',
    description: 'Primary HTTP server handling web traffic and API requests',
    status: 'running',
    priority: 'high',
    icon: 'server',
    uptime: '15d 8h 32m',
    lastUpdate: '2024-01-15',
    memoryUsage: 45,
    cpuUsage: 23,
    onStart: () => console.log('Starting application'),
    onStop: () => console.log('Stopping application'),
    onRestart: () => console.log('Restarting application'),
    onConfigure: () => console.log('Configuring application'),
    onViewLogs: () => console.log('Viewing logs'),
  },
}

export const StoppedApplication: Story = {
  args: {
    variant: 'terminal',
    name: 'Background Worker',
    version: '1.2.0',
    description: 'Background task processor for queue management',
    status: 'stopped',
    priority: 'medium',
    icon: 'tools',
    lastUpdate: '2024-01-10',
    onStart: () => console.log('Starting application'),
    onConfigure: () => console.log('Configuring application'),
    onViewLogs: () => console.log('Viewing logs'),
  },
}

export const ErrorApplication: Story = {
  args: {
    variant: 'terminal',
    name: 'Database Service',
    version: '5.1.3',
    description: 'Primary database connection service experiencing issues',
    status: 'error',
    priority: 'critical',
    icon: 'database',
    uptime: '0h 0m',
    lastUpdate: '2024-01-16',
    memoryUsage: 15,
    cpuUsage: 0,
    onRestart: () => console.log('Restarting application'),
    onConfigure: () => console.log('Configuring application'),
    onViewLogs: () => console.log('Viewing logs'),
  },
}

// ===================================
// VARIANT DEMONSTRATIONS
// ===================================

export const AllVariants: Story = {
  render: () => (
    <Grid variant="terminal" columns={1} gap="large" bordered>
      <GridItem variant="terminal" bordered>
        <H2 variant="terminal" align="center">APPLICATION MONITORING SYSTEM</H2>
      </GridItem>
      
      <GridItem>
        <Grid columns={3} gap="medium">
          <GridItem>
            <ApplicationCard
              variant="terminal"
              name="Terminal Server"
              version="3.2.1"
              description="Main terminal access server"
              status="running"
              priority="high"
              icon="terminal"
              uptime="7d 12h 15m"
              memoryUsage={67}
              cpuUsage={34}
              onStop={() => console.log('Stop terminal')}
              onRestart={() => console.log('Restart terminal')}
              onViewLogs={() => console.log('View logs')}
            />
          </GridItem>
          
          <GridItem>
            <ApplicationCard
              variant="matrix"
              name="Data Processor"
              version="4.1.0"
              description="Matrix data processing engine"
              status="running"
              priority="critical"
              icon="data"
              uptime="23d 4h 8m"
              memoryUsage={89}
              cpuUsage={76}
              onStop={() => console.log('Stop matrix')}
              onRestart={() => console.log('Restart matrix')}
              onConfigure={() => console.log('Configure matrix')}
            />
          </GridItem>
          
          <GridItem>
            <ApplicationCard
              variant="retro"
              name="Archive System"
              version="2.0.5"
              description="Legacy data archival system"
              status="maintenance"
              priority="low"
              icon="archive"
              lastUpdate="2024-01-12"
              memoryUsage={12}
              cpuUsage={3}
              onStart={() => console.log('Start retro')}
              onConfigure={() => console.log('Configure retro')}
            />
          </GridItem>
        </Grid>
      </GridItem>
      
      <GridItem>
        <Grid columns={2} gap="medium">
          <GridItem>
            <ApplicationCard
              variant="minimal"
              name="Clean Service"
              version="1.0.0"
              description="Minimalist background service"
              status="running"
              priority="low"
              icon="settings"
              uptime="30d 1h 45m"
              memoryUsage={8}
              cpuUsage={2}
              onStop={() => console.log('Stop minimal')}
            />
          </GridItem>
          
          <GridItem>
            <ApplicationCard
              variant="glow"
              name="Neon Gateway"
              version="2.5.0"
              description="High-performance API gateway"
              status="running"
              priority="critical"
              icon="network"
              uptime="45d 18h 22m"
              memoryUsage={92}
              cpuUsage={88}
              onStop={() => console.log('Stop glow')}
              onRestart={() => console.log('Restart glow')}
              onConfigure={() => console.log('Configure glow')}
              onViewLogs={() => console.log('View glow logs')}
            />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// SERVICE MONITOR CARD STORIES
// ===================================

export const ServiceMonitor: Story = {
  render: () => (
    <ServiceMonitorCard
      variant="terminal"
      serviceName="Web Stack Services"
      services={[
        { name: 'nginx', status: 'running', port: 80 },
        { name: 'nodejs', status: 'running', port: 3000 },
        { name: 'redis', status: 'running', port: 6379 },
        { name: 'postgres', status: 'stopped', port: 5432 },
        { name: 'elasticsearch', status: 'error', port: 9200 },
      ]}
      onServiceAction={(service, action) => 
        console.log(`${action} service: ${service}`)
      }
    />
  ),
}

export const ServiceMonitorMatrix: Story = {
  render: () => (
    <ServiceMonitorCard
      variant="matrix"
      serviceName="Matrix Protocol Stack"
      services={[
        { name: 'core-matrix', status: 'running', port: 8080 },
        { name: 'data-sync', status: 'running', port: 8081 },
        { name: 'stream-proc', status: 'loading', port: 8082 },
        { name: 'auth-service', status: 'running', port: 8083 },
      ]}
      onServiceAction={(service, action) => 
        console.log(`Matrix ${action}: ${service}`)
      }
    />
  ),
}

// ===================================
// SYSTEM STATUS CARD STORIES
// ===================================

export const SystemStatus: Story = {
  render: () => (
    <SystemStatusCard
      variant="terminal"
      systemName="Production Server 01"
      status="running"
      metrics={{
        cpu: 76,
        memory: 89,
        disk: 45,
        network: 23
      }}
      alerts={[
        {
          level: 'warning',
          message: 'Memory usage above 85% threshold',
          timestamp: '14:32:15'
        },
        {
          level: 'info',
          message: 'System backup completed successfully',
          timestamp: '12:00:00'
        },
        {
          level: 'error',
          message: 'Disk cleanup required in /tmp directory',
          timestamp: '10:15:30'
        }
      ]}
      onSystemAction={(action) => console.log(`System ${action}`)}
    />
  ),
}

export const SystemStatusCritical: Story = {
  render: () => (
    <SystemStatusCard
      variant="matrix"
      systemName="Matrix Core Node"
      status="error"
      metrics={{
        cpu: 95,
        memory: 98,
        disk: 92,
        network: 87
      }}
      alerts={[
        {
          level: 'error',
          message: 'CPU temperature critical - immediate action required',
          timestamp: '15:45:22'
        },
        {
          level: 'error',
          message: 'Memory allocation failure detected',
          timestamp: '15:44:18'
        },
        {
          level: 'warning',
          message: 'Network latency above acceptable limits',
          timestamp: '15:43:05'
        }
      ]}
      onSystemAction={(action) => console.log(`Critical system ${action}`)}
    />
  ),
}

// ===================================
// DASHBOARD LAYOUT EXAMPLE
// ===================================

export const DashboardLayout: Story = {
  render: () => (
    <Grid variant="terminal" columns={4} gap="medium" bordered>
      {/* System Overview */}
      <GridItem columnSpan={2}>
        <SystemStatusCard
          variant="terminal"
          systemName="Main Server"
          status="running"
          metrics={{ cpu: 45, memory: 67, disk: 34, network: 12 }}
          alerts={[
            { level: 'info', message: 'All systems operational', timestamp: '16:00:00' }
          ]}
          onSystemAction={(action) => console.log(`Server ${action}`)}
        />
      </GridItem>
      
      {/* Critical Application */}
      <GridItem columnSpan={2}>
        <ApplicationCard
          variant="matrix"
          name="Core API"
          version="3.1.4"
          description="Primary application programming interface"
          status="running"
          priority="critical"
          icon="network"
          uptime="12d 6h 18m"
          memoryUsage={78}
          cpuUsage={56}
          onStop={() => console.log('Stop API')}
          onRestart={() => console.log('Restart API')}
          onConfigure={() => console.log('Configure API')}
          onViewLogs={() => console.log('View API logs')}
        />
      </GridItem>
      
      {/* Service Monitor */}
      <GridItem columnSpan={3}>
        <ServiceMonitorCard
          variant="retro"
          serviceName="Background Services"
          services={[
            { name: 'worker-1', status: 'running' },
            { name: 'worker-2', status: 'running' },
            { name: 'scheduler', status: 'running' },
            { name: 'monitor', status: 'stopped' }
          ]}
          onServiceAction={(service, action) => 
            console.log(`${action} ${service}`)
          }
        />
      </GridItem>
      
      {/* Individual App */}
      <GridItem>
        <ApplicationCard
          variant="glow"
          name="Cache Service"
          version="1.8.2"
          status="running"
          priority="medium"
          icon="database"
          uptime="8d 14h"
          memoryUsage={23}
          cpuUsage={8}
          onRestart={() => console.log('Restart cache')}
          onViewLogs={() => console.log('View cache logs')}
        />
      </GridItem>
    </Grid>
  ),
}

// ===================================
// RESPONSIVE BEHAVIOR
// ===================================

export const ResponsiveDashboard: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <H2 variant="terminal" align="center" style={{ marginBottom: '2rem' }}>
        RESPONSIVE APPLICATION DASHBOARD
      </H2>
      
      <Grid variant="terminal" columns="fit" gap="medium" minColumnWidth="300px" bordered>
        <GridItem>
          <ApplicationCard
            variant="terminal"
            name="Web Server"
            version="2.4.1"
            description="Primary HTTP server"
            status="running"
            priority="high"
            icon="server"
            uptime="15d 8h 32m"
            memoryUsage={45}
            cpuUsage={23}
            onStop={() => console.log('Stop web server')}
            onRestart={() => console.log('Restart web server')}
            onViewLogs={() => console.log('View web server logs')}
          />
        </GridItem>
        
        <GridItem>
          <ApplicationCard
            variant="matrix"
            name="Data Processor"
            version="4.1.0"
            status="running"
            priority="critical"
            icon="data"
            uptime="23d 4h 8m"
            memoryUsage={89}
            cpuUsage={76}
            onStop={() => console.log('Stop processor')}
            onRestart={() => console.log('Restart processor')}
          />
        </GridItem>
        
        <GridItem>
          <SystemStatusCard
            variant="glow"
            systemName="Node Alpha"
            status="running"
            metrics={{ cpu: 67, memory: 45, disk: 78 }}
            onSystemAction={(action) => console.log(`Node ${action}`)}
          />
        </GridItem>
      </Grid>
      
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--jadis-border-primary)' }}>
        <p style={{ color: 'var(--jadis-text-primary)', textAlign: 'center', margin: 0 }}>
          Resize your browser window to see responsive behavior!
        </p>
      </div>
    </div>
  ),
}