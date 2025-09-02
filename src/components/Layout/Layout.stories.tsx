import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PageLayout, AppHeader, AppFooter, Sidebar, Breadcrumbs, StatusBar, HeroBanner, PageBanner, FeatureSection } from './Layout'
import { Navbar, NavbarBrand, NavbarItem, NavbarNav, NavbarDropdown } from '../Navbar/Navbar'
import { H1, H2, H3 } from '../Headers/Headers'
import { P, Code } from '../Typography/Typography'
import { Button } from '../Buttons/Buttons'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { Grid, GridItem } from '../Grid/Grid'
import { ASCIIIcon } from '../Icons/Icons'

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  component: PageLayout,
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
        component: 'Complete page layout system with header, footer, sidebar, and main content areas. Includes specialized components for application headers, footers, breadcrumbs, and status bars.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the layout system',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Make layout take full viewport height',
    },
    sidebarCollapsed: {
      control: 'boolean',
      description: 'Collapse the sidebar',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageLayout>

// ===================================
// APP HEADER STORIES
// ===================================

const AppHeaderStory: Meta<typeof AppHeader> = {
  title: 'Layout/AppHeader',
  component: AppHeader,
}

export const BasicAppHeader: StoryObj<typeof AppHeader> = {
  ...AppHeaderStory,
  args: {
    variant: 'terminal',
    title: 'System Control Panel',
    subtitle: 'Advanced terminal interface',
    logo: <ASCIIIcon icon="▣" variant="terminal" size="large" />,
    actions: (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="terminal" size="small">Settings</Button>
        <Button variant="terminal" size="small">Logout</Button>
      </div>
    ),
  },
}

export const HeaderWithBreadcrumbs: StoryObj<typeof AppHeader> = {
  ...AppHeaderStory,
  args: {
    variant: 'matrix',
    title: 'Data Processing',
    subtitle: 'Matrix data analysis system',
    logo: <ASCIIIcon icon="◉" variant="matrix" size="large" />,
    breadcrumbs: (
      <Breadcrumbs
        variant="matrix"
        items={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Analytics', href: '/analytics' },
          { label: 'Processing', active: true }
        ]}
      />
    ),
    actions: (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <ASCIIIcon icon="◐" variant="matrix" />
        <P variant="matrix" style={{ margin: 0, fontSize: '0.875rem' }}>Processing...</P>
      </div>
    ),
  },
}

// ===================================
// APP FOOTER STORIES
// ===================================

const AppFooterStory: Meta<typeof AppFooter> = {
  title: 'Layout/AppFooter',
  component: AppFooter,
}

export const BasicAppFooter: StoryObj<typeof AppFooter> = {
  ...AppFooterStory,
  args: {
    variant: 'terminal',
    copyright: '© 2024 Terminal Systems. All rights reserved.',
    links: [
      { label: 'Documentation', href: '/docs', icon: '▦' },
      { label: 'Support', href: '/support', icon: '◈' },
      { label: 'API Reference', href: '/api', icon: '◊' }
    ],
    social: [
      { platform: 'GitHub', href: '#', icon: '◉' },
      { platform: 'Twitter', href: '#', icon: '◎' },
      { platform: 'Discord', href: '#', icon: '◈' }
    ]
  },
}

export const CompactFooter: StoryObj<typeof AppFooter> = {
  ...AppFooterStory,
  args: {
    variant: 'minimal',
    compact: true,
    copyright: '© 2024 Minimal Systems',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' }
    ]
  },
}

// ===================================
// SIDEBAR STORIES
// ===================================

const SidebarStory: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
}

export const BasicSidebar: StoryObj<typeof Sidebar> = {
  ...SidebarStory,
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false)
    
    return (
      <div style={{ height: '400px', display: 'flex', background: 'var(--jadis-bg-primary)' }}>
        <Sidebar
          {...args}
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        >
          <div style={{ padding: '1rem' }}>
            <H3 variant="simple">Navigation</H3>
            <nav style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ASCIIIcon icon="▣" variant={args.variant} />
                  {!collapsed && 'Dashboard'}
                </a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ASCIIIcon icon="◊" variant={args.variant} />
                  {!collapsed && 'Analytics'}
                </a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ASCIIIcon icon="⚙" variant={args.variant} />
                  {!collapsed && 'Settings'}
                </a>
              </div>
            </nav>
          </div>
        </Sidebar>
        <div style={{ flex: 1, padding: '2rem' }}>
          <H2 variant="simple">Main Content</H2>
          <P>This is the main content area. The sidebar can be collapsed using the toggle button.</P>
        </div>
      </div>
    )
  },
  args: {
    variant: 'terminal',
    width: '250px',
    collapsedWidth: '60px',
  },
}

// ===================================
// BREADCRUMBS STORIES  
// ===================================

const BreadcrumbsStory: Meta<typeof Breadcrumbs> = {
  title: 'Layout/Breadcrumbs',
  component: Breadcrumbs,
}

export const BasicBreadcrumbs: StoryObj<typeof Breadcrumbs> = {
  ...BreadcrumbsStory,
  args: {
    variant: 'terminal',
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'System', href: '/system' },
      { label: 'Monitoring', href: '/monitoring' },
      { label: 'Alerts', active: true }
    ]
  },
}

export const BreadcrumbsWithIcons: StoryObj<typeof Breadcrumbs> = {
  ...BreadcrumbsStory,
  args: {
    variant: 'matrix',
    items: [
      { label: 'Root', href: '/', icon: '▣' },
      { label: 'Data', href: '/data', icon: '▓' },
      { label: 'Processing', href: '/processing', icon: '◊' },
      { label: 'Analysis', active: true, icon: '◈' }
    ],
    separator: '→',
    showHome: false
  },
}

// ===================================
// STATUS BAR STORIES
// ===================================

const StatusBarStory: Meta<typeof StatusBar> = {
  title: 'Layout/StatusBar',
  component: StatusBar,
}

export const BasicStatusBar: StoryObj<typeof StatusBar> = {
  ...StatusBarStory,
  args: {
    variant: 'terminal',
    items: [
      { label: 'CPU', value: '45%', icon: '▓' },
      { label: 'Memory', value: '2.4GB', icon: '◈' },
      { label: 'Network', value: 'Connected', icon: '◉' },
      { label: 'Status', value: 'Online', icon: '●' }
    ]
  },
}

// ===================================
// COMPLETE PAGE LAYOUTS
// ===================================

export const SimplePageLayout: Story = {
  args: {
    variant: 'terminal',
    fullHeight: true,
    header: (
      <AppHeader
        variant="terminal"
        title="Terminal System"
        subtitle="Advanced command interface"
        logo={<ASCIIIcon icon="▣" variant="terminal" size="large" />}
        actions={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="terminal" size="small">Settings</Button>
            <Button variant="terminal" size="small">Help</Button>
          </div>
        }
      />
    ),
    footer: (
      <AppFooter
        variant="terminal"
        copyright="© 2024 Terminal Systems"
        links={[
          { label: 'Docs', href: '/docs', icon: '▦' },
          { label: 'Support', href: '/support', icon: '◈' }
        ]}
      />
    ),
    children: (
      <div>
        <H1 variant="box" align="center">SYSTEM DASHBOARD</H1>
        <Grid variant="terminal" columns={3} gap="medium">
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="System Status" />
              <CardBody>
                <P variant="terminal">All systems operational</P>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="Active Processes" />
              <CardBody>
                <P variant="terminal">247 processes running</P>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="Network Status" />
              <CardBody>
                <P variant="terminal">Connection stable</P>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    )
  },
}

export const LayoutWithSidebar: Story = {
  render: () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    
    return (
      <PageLayout
        variant="matrix"
        fullHeight
        header={
          <AppHeader
            variant="matrix"
            title="Data Processing Center"
            subtitle="Matrix analysis system"
            logo={<ASCIIIcon icon="◉" variant="matrix" size="large" />}
            breadcrumbs={
              <Breadcrumbs
                variant="matrix"
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Analytics', href: '/analytics' },
                  { label: 'Real-time', active: true }
                ]}
              />
            }
            actions={
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <ASCIIIcon icon="◐" variant="matrix" />
                <Code variant="matrix">PROCESSING</Code>
              </div>
            }
          />
        }
        sidebar={
          <Sidebar
            variant="matrix"
            collapsed={sidebarCollapsed}
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <div style={{ padding: sidebarCollapsed ? '0.5rem' : '1.5rem' }}>
              {!sidebarCollapsed && <H3 variant="simple">Navigation</H3>}
              <nav style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: '▣', label: 'Dashboard', href: '#' },
                    { icon: '◊', label: 'Analytics', href: '#' },
                    { icon: '▓', label: 'Data Streams', href: '#' },
                    { icon: '◈', label: 'Matrix Core', href: '#' },
                    { icon: '⚙', label: 'Configuration', href: '#' }
                  ].map((item) => (
                    <a 
                      key={item.label}
                      href={item.href} 
                      style={{ 
                        color: 'inherit', 
                        textDecoration: 'none', 
                        padding: '0.75rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        borderRadius: '2px',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <ASCIIIcon icon={item.icon} variant="matrix" />
                      {!sidebarCollapsed && item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </Sidebar>
        }
        footer={
          <div>
            <StatusBar
              variant="matrix"
              items={[
                { label: 'Data Rate', value: '1.2GB/s', icon: '▓' },
                { label: 'Processes', value: '847', icon: '◊' },
                { label: 'Matrix Load', value: '76%', icon: '◈' },
                { label: 'Uptime', value: '47d 8h', icon: '●' }
              ]}
            />
            <AppFooter
              variant="matrix"
              compact
              copyright="© 2024 Matrix Systems - Reality.exe has stopped working"
              links={[
                { label: 'Neural Interface', href: '/neural', icon: '◉' },
                { label: 'Code Injection', href: '/inject', icon: '◊' }
              ]}
            />
          </div>
        }
        sidebarCollapsed={sidebarCollapsed}
      >
        <H1 variant="box" align="center">MATRIX DATA PROCESSING</H1>
        
        <div style={{ marginBottom: '2rem' }}>
          <H2 variant="double-line">Real-time Analytics</H2>
          <P variant="matrix">
            Monitoring data streams in real-time. Processing <Code variant="matrix">1,247,832</Code> data points 
            across <Code variant="matrix">42</Code> active nodes in the matrix network.
          </P>
        </div>
        
        <Grid variant="matrix" columns={sidebarCollapsed ? 3 : 2} gap="large">
          <GridItem>
            <Card variant="matrix" interactive>
              <CardHeader title="Stream Processing" />
              <CardBody>
                <P variant="matrix">
                  Data flowing through neural pathways at optimal rates. 
                  All synaptic connections are stable.
                </P>
                <div style={{ marginTop: '1rem' }}>
                  <Button variant="matrix" size="small">View Details</Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="matrix" interactive>
              <CardHeader title="Matrix Core Status" />
              <CardBody>
                <P variant="matrix">
                  Core systems operating within normal parameters. 
                  Reality simulation stable.
                </P>
                <div style={{ marginTop: '1rem' }}>
                  <Button variant="matrix" size="small">Monitor Core</Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          
          {!sidebarCollapsed && (
            <GridItem columnSpan={2}>
              <Card variant="matrix" interactive>
                <CardHeader title="Network Topology" />
                <CardBody>
                  <P variant="matrix">
                    Visualizing the complete network structure across all connected nodes. 
                    <Code variant="matrix">99.7%</Code> uptime maintained.
                  </P>
                  <div style={{ marginTop: '1rem' }}>
                    <Button variant="matrix" size="small">Expand View</Button>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          )}
        </Grid>
      </PageLayout>
    )
  }
}

export const RetroApplicationLayout: Story = {
  args: {
    variant: 'retro',
    fullHeight: true,
    header: (
      <AppHeader
        variant="retro"
        title="RETRO-COMP 3000"
        subtitle="Classic computing environment"
        logo={<ASCIIIcon icon="◐" variant="retro" size="large" />}
        actions={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="retro" size="small">FILE</Button>
            <Button variant="retro" size="small">EDIT</Button>
            <Button variant="retro" size="small">VIEW</Button>
          </div>
        }
      />
    ),
    footer: (
      <div>
        <StatusBar
          variant="retro"
          items={[
            { label: 'MODE', value: 'READY', icon: '●' },
            { label: 'CAPS', value: 'OFF', icon: '○' },
            { label: 'NUM', value: 'ON', icon: '●' },
            { label: 'TIME', value: '15:42', icon: '◐' }
          ]}
        />
        <AppFooter
          variant="retro"
          compact
          copyright="© 1984-2024 RetroComp Industries"
          links={[
            { label: 'MANUAL', href: '/manual' },
            { label: 'SPECS', href: '/specs' }
          ]}
        />
      </div>
    ),
    children: (
      <div>
        <Breadcrumbs
          variant="retro"
          items={[
            { label: 'ROOT', href: '/', icon: '▣' },
            { label: 'APPS', href: '/apps', icon: '▦' },
            { label: 'TERMINAL', active: true, icon: '►' }
          ]}
          separator="//"
        />
        
        <div style={{ marginTop: '2rem' }}>
          <H1 variant="box" align="center">WELCOME TO RETRO-COMP</H1>
          
          <div style={{ marginTop: '2rem' }}>
            <H2 variant="dashed">SYSTEM STATUS</H2>
            <P variant="retro">
              Welcome to the RETRO-COMP 3000 computing environment. 
              This system provides an authentic 1980s computing experience 
              with modern capabilities.
            </P>
          </div>
          
          <Grid variant="retro" columns={2} gap="large" style={{ marginTop: '2rem' }}>
            <GridItem>
              <Card variant="retro">
                <CardHeader title="SYSTEM INFO" />
                <CardBody>
                  <P variant="retro">
                    <Code variant="retro">CPU:</Code> Z80A @ 4MHz<br/>
                    <Code variant="retro">RAM:</Code> 64KB<br/>
                    <Code variant="retro">STORAGE:</Code> 5.25" Floppy
                  </P>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card variant="retro">
                <CardHeader title="APPLICATIONS" />
                <CardBody>
                  <P variant="retro">
                    • WORD PROCESSOR<br/>
                    • SPREADSHEET<br/>
                    • DATABASE<br/>
                    • GAMES
                  </P>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </div>
      </div>
    )
  },
}

// ===================================
// HERO BANNER STORIES
// ===================================

const HeroBannerStory: Meta<typeof HeroBanner> = {
  title: 'Layout/HeroBanner',
  component: HeroBanner,
}

export const BasicHeroBanner: StoryObj<typeof HeroBanner> = {
  ...HeroBannerStory,
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

export const HeroBannerWithImage: StoryObj<typeof HeroBanner> = {
  ...HeroBannerStory,
  args: {
    variant: 'matrix',
    title: 'ENTER THE MATRIX',
    subtitle: 'Reality is a simulation',
    description: 'Free your mind and see the code that underlies everything.',
    actions: (
      <Button variant="matrix" size="large">Take the Red Pill</Button>
    ),
    image: (
      <div style={{ fontSize: '4rem', opacity: 0.5 }}>
        <ASCIIIcon icon="◉" variant="matrix" />
      </div>
    ),
    size: 'medium',
    backgroundPattern: 'matrix'
  },
}

export const FullScreenHero: StoryObj<typeof HeroBanner> = {
  ...HeroBannerStory,
  args: {
    variant: 'glow',
    title: 'CYBERPUNK 2084',
    subtitle: 'The future is now',
    description: 'Immerse yourself in a neon-soaked digital landscape.',
    actions: (
      <Button variant="glow" size="large">Enter Cyberspace</Button>
    ),
    size: 'full',
    align: 'center',
    backgroundPattern: 'dots',
    overlay: true
  },
}

// ===================================
// PAGE BANNER STORIES
// ===================================

const PageBannerStory: Meta<typeof PageBanner> = {
  title: 'Layout/PageBanner',
  component: PageBanner,
}

export const InfoBanner: StoryObj<typeof PageBanner> = {
  ...PageBannerStory,
  args: {
    variant: 'terminal',
    type: 'info',
    title: 'System Update',
    message: 'A new version of the terminal is available. Please update to get the latest features and security improvements.',
    dismissible: true,
    actions: (
      <Button variant="terminal" size="small">Update Now</Button>
    )
  },
}

export const SuccessBanner: StoryObj<typeof PageBanner> = {
  ...PageBannerStory,
  args: {
    variant: 'terminal',
    type: 'success',
    message: 'Operation completed successfully. All systems are functioning normally.',
    dismissible: true
  },
}

export const WarningBanner: StoryObj<typeof PageBanner> = {
  ...PageBannerStory,
  args: {
    variant: 'retro',
    type: 'warning',
    title: 'Low Memory Warning',
    message: 'System memory is running low. Consider closing unnecessary applications.',
    actions: (
      <Button variant="retro" size="small">Free Memory</Button>
    )
  },
}

export const ErrorBanner: StoryObj<typeof PageBanner> = {
  ...PageBannerStory,
  args: {
    variant: 'matrix',
    type: 'error',
    title: 'Connection Failed',
    message: 'Unable to establish connection to the matrix. Please check your neural interface.',
    dismissible: true
  },
}

export const AnnouncementBanner: StoryObj<typeof PageBanner> = {
  ...PageBannerStory,
  args: {
    variant: 'glow',
    type: 'announcement',
    title: 'New Feature Released!',
    message: 'Introducing the new cyberpunk mode with enhanced neon effects and synthwave aesthetics.',
    position: 'top',
    actions: (
      <Button variant="glow" size="small">Try It Now</Button>
    )
  },
}

// ===================================
// FEATURE SECTION STORIES
// ===================================

const FeatureSectionStory: Meta<typeof FeatureSection> = {
  title: 'Layout/FeatureSection',
  component: FeatureSection,
}

export const BasicFeatureSection: StoryObj<typeof FeatureSection> = {
  ...FeatureSectionStory,
  args: {
    variant: 'terminal',
    title: 'Core Features',
    subtitle: 'Everything you need for terminal excellence',
    features: [
      {
        icon: <ASCIIIcon icon="▣" variant="terminal" size="large" />,
        title: 'Fast Processing',
        description: 'Lightning-fast command execution with minimal latency.',
        action: <Button variant="terminal" size="small">Learn More</Button>
      },
      {
        icon: <ASCIIIcon icon="◊" variant="terminal" size="large" />,
        title: 'Secure Environment',
        description: 'Military-grade encryption for all your operations.',
        action: <Button variant="terminal" size="small">Learn More</Button>
      },
      {
        icon: <ASCIIIcon icon="◈" variant="terminal" size="large" />,
        title: 'Extensible System',
        description: 'Customize and extend with powerful plugins.',
        action: <Button variant="terminal" size="small">Learn More</Button>
      }
    ],
    columns: 3,
    align: 'center'
  },
}

export const MatrixFeatures: StoryObj<typeof FeatureSection> = {
  ...FeatureSectionStory,
  args: {
    variant: 'matrix',
    title: 'Matrix Capabilities',
    subtitle: 'See beyond the code',
    features: [
      {
        icon: <ASCIIIcon icon="◉" variant="matrix" size="large" />,
        title: 'Reality Manipulation',
        description: 'Bend the rules of the simulation to your will.'
      },
      {
        icon: <ASCIIIcon icon="◎" variant="matrix" size="large" />,
        title: 'Time Dilation',
        description: 'Experience bullet-time in cyberspace.'
      },
      {
        icon: <ASCIIIcon icon="◈" variant="matrix" size="large" />,
        title: 'Neural Interface',
        description: 'Direct connection to the digital realm.'
      },
      {
        icon: <ASCIIIcon icon="◊" variant="matrix" size="large" />,
        title: 'Data Streaming',
        description: 'Process infinite data streams in real-time.'
      }
    ],
    columns: 4
  },
}

// ===================================
// COMPLETE PAGE WITH HERO AND BANNERS
// ===================================

export const LandingPageWithHero: Story = {
  render: () => (
    <PageLayout
      variant="terminal"
      header={
        <AppHeader
          variant="terminal"
          title="JADIS Terminal"
          logo={<ASCIIIcon icon="▣" variant="terminal" size="large" />}
          actions={
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button variant="terminal" size="small">Login</Button>
              <Button variant="terminal" size="small" outline>Sign Up</Button>
            </div>
          }
        />
      }
      footer={
        <AppFooter
          variant="terminal"
          copyright="© 2024 Terminal Systems Inc."
          links={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Support', href: '/support' },
            { label: 'API', href: '/api' }
          ]}
        />
      }
    >
      <HeroBanner
        variant="terminal"
        title="WELCOME TO THE FUTURE OF COMPUTING"
        subtitle="Terminal-Based Excellence"
        description="Experience the perfect blend of nostalgic terminal aesthetics with cutting-edge modern capabilities."
        actions={
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="terminal" size="large">Start Free Trial</Button>
            <Button variant="terminal" size="large" outline>View Demo</Button>
          </div>
        }
        size="large"
        align="center"
        backgroundPattern="grid"
      />

      <PageBanner
        variant="terminal"
        type="announcement"
        title="Limited Time Offer"
        message="Get 50% off your first month when you sign up today!"
        dismissible
        actions={
          <Button variant="terminal" size="small">Claim Offer</Button>
        }
      />

      <FeatureSection
        variant="terminal"
        title="Why Choose Our Terminal?"
        subtitle="Built for developers, by developers"
        features={[
          {
            icon: <ASCIIIcon icon="►" variant="terminal" size="large" />,
            title: 'Lightning Fast',
            description: 'Optimized for speed with near-instant command execution.',
            action: <Button variant="terminal" size="small">Benchmark</Button>
          },
          {
            icon: <ASCIIIcon icon="◊" variant="terminal" size="large" />,
            title: 'Highly Secure',
            description: 'Enterprise-grade security with end-to-end encryption.',
            action: <Button variant="terminal" size="small">Security</Button>
          },
          {
            icon: <ASCIIIcon icon="⚙" variant="terminal" size="large" />,
            title: 'Fully Customizable',
            description: 'Tailor every aspect to match your workflow.',
            action: <Button variant="terminal" size="small">Customize</Button>
          }
        ]}
        columns={3}
        align="center"
      />

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <H2 variant="double-line">Ready to Get Started?</H2>
        <P variant="terminal" style={{ marginBottom: '2rem' }}>
          Join thousands of developers who have already made the switch.
        </P>
        <Button variant="terminal" size="large">Create Free Account</Button>
      </div>
    </PageLayout>
  )
}

// ===================================
// RESPONSIVE LAYOUTS
// ===================================

export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <H2 variant="glow" align="center" style={{ marginBottom: '2rem' }}>
        RESPONSIVE LAYOUT SYSTEM
      </H2>
      
      <PageLayout
        variant="glow"
        header={
          <AppHeader
            variant="glow"
            title="Adaptive Interface"
            subtitle="Responds to screen size changes"
            logo={<ASCIIIcon icon="◈" variant="glow" size="large" />}
            actions={
              <Button variant="glow" size="small">Menu</Button>
            }
          />
        }
        footer={
          <AppFooter
            variant="glow"
            compact
            copyright="© 2024 Adaptive Systems"
            links={[{ label: 'Responsive Guide', href: '/guide' }]}
          />
        }
      >
        <P variant="glow" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Resize your browser window to see the responsive behavior!
        </P>
        
        <Grid variant="glow" columns="fit" gap="medium" minColumnWidth="250px">
          <GridItem>
            <Card variant="glow">
              <CardHeader title="Mobile First" />
              <CardBody>
                <P variant="glow">Adapts to mobile screens</P>
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="glow">
              <CardHeader title="Tablet Ready" />
              <CardBody>
                <P variant="glow">Optimized for tablets</P>
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="glow">
              <CardHeader title="Desktop Enhanced" />
              <CardBody>
                <P variant="glow">Full desktop experience</P>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </PageLayout>
    </div>
  )
}