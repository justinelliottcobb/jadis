import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label, ASCIILabel, StatusLabel, BadgeLabel, AnimatedLabel } from './Label'
import React from 'react'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Label components with ASCII art integration, effects, and animations for terminal/retro aesthetics.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual theme variant'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the label'
    },
    style: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'filled'],
      description: 'Visual style'
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment'
    },
    fontFamily: {
      control: 'select',
      options: ['mono', 'ascii', 'pixel'],
      description: 'Font family style'
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      description: 'Internal padding'
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Status color theme'
    },
    bordered: {
      control: 'boolean',
      description: 'Show border'
    },
    animated: {
      control: 'boolean',
      description: 'Enable hover animations'
    },
    glitch: {
      control: 'boolean',
      description: 'Apply glitch effect'
    },
    scanlines: {
      control: 'boolean',
      description: 'Apply scanline effect'
    },
    phosphor: {
      control: 'boolean',
      description: 'Apply phosphor glow effect'
    },
    pulse: {
      control: 'boolean',
      description: 'Apply pulse animation'
    },
    typewriter: {
      control: 'boolean',
      description: 'Apply typewriter animation'
    },
    uppercase: {
      control: 'boolean',
      description: 'Transform text to uppercase'
    },
    fixedWidth: {
      control: 'boolean',
      description: 'Use fixed-width font'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Label>

// ===================================
// BASIC STORIES
// ===================================

export const Default: Story = {
  args: {
    text: 'TERMINAL',
    variant: 'terminal',
    size: 'md',
    style: 'solid',
    bordered: true
  }
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', background: '#000' }}>
      <Label text="Extra Small" variant="terminal" size="xs" bordered />
      <Label text="Small" variant="terminal" size="sm" bordered />
      <Label text="Medium" variant="terminal" size="md" bordered />
      <Label text="Large" variant="terminal" size="lg" bordered />
      <Label text="Extra Large" variant="terminal" size="xl" bordered />
    </div>
  )
}

export const Styles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px', background: '#000', flexWrap: 'wrap' }}>
      <Label text="SOLID" variant="terminal" style="solid" bordered />
      <Label text="OUTLINE" variant="terminal" style="outline" bordered />
      <Label text="GHOST" variant="terminal" style="ghost" bordered />
      <Label text="FILLED" variant="terminal" style="filled" bordered />
    </div>
  )
}

export const StatusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px', background: '#000', flexWrap: 'wrap' }}>
      <Label text="DEFAULT" variant="terminal" status="default" bordered />
      <Label text="SUCCESS" variant="terminal" status="success" bordered />
      <Label text="WARNING" variant="terminal" status="warning" bordered />
      <Label text="ERROR" variant="terminal" status="error" bordered />
      <Label text="INFO" variant="terminal" status="info" bordered />
    </div>
  )
}

// ===================================
// THEME VARIATIONS
// ===================================

export const ThemeVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
      {[
        { variant: 'terminal', bg: '#000' },
        { variant: 'matrix', bg: '#000' },
        { variant: 'retro', bg: '#2a0845' },
        { variant: 'minimal', bg: '#f8f9fa' },
        { variant: 'glow', bg: '#0f051d' },
        { variant: 'haru', bg: '#fef7f0' },
        { variant: 'natsu', bg: '#f0f9ff' },
        { variant: 'aki', bg: '#fefbf3' },
        { variant: 'fuyu', bg: '#f8fafc' },
        { variant: 'sumi', bg: '#1c1c1c' }
      ].map(({ variant, bg }) => (
        <div key={variant} style={{ background: bg, padding: '16px', borderRadius: '4px' }}>
          <Label text={variant.toUpperCase()} variant={variant as any} bordered animated />
        </div>
      ))}
    </div>
  )
}

export const JapaneseSeasons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
      <div style={{ background: '#fef7f0', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#7c2d92', fontFamily: 'monospace', marginBottom: '16px' }}>
          🌸 Haru (Spring)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Label text="SAKURA" variant="haru" style="solid" bordered />
          <Label text="SPRING BLOOM" variant="haru" style="outline" />
          <Label text="CHERRY BLOSSOM" variant="haru" style="filled" pulse />
        </div>
      </div>

      <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#0c4a6e', fontFamily: 'monospace', marginBottom: '16px' }}>
          ☀️ Natsu (Summer)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Label text="OCEAN BLUE" variant="natsu" style="solid" bordered />
          <Label text="SUMMER SKY" variant="natsu" style="outline" />
          <Label text="ENDLESS SUMMER" variant="natsu" style="filled" pulse />
        </div>
      </div>

      <div style={{ background: '#fefbf3', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#9a3412', fontFamily: 'monospace', marginBottom: '16px' }}>
          🍂 Aki (Autumn)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Label text="MAPLE LEAF" variant="aki" style="solid" bordered />
          <Label text="AUTUMN GOLD" variant="aki" style="outline" />
          <Label text="HARVEST MOON" variant="aki" style="filled" pulse />
        </div>
      </div>

      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#1e293b', fontFamily: 'monospace', marginBottom: '16px' }}>
          ❄️ Fuyu (Winter)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Label text="SNOW CRYSTAL" variant="fuyu" style="solid" bordered />
          <Label text="WINTER FROST" variant="fuyu" style="outline" />
          <Label text="SILENT SNOW" variant="fuyu" style="filled" pulse />
        </div>
      </div>
    </div>
  )
}

// ===================================
// EFFECT DEMONSTRATIONS
// ===================================

export const EffectsShowcase: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#00ff41', marginBottom: '16px', fontFamily: 'monospace' }}>
            GLITCH EFFECTS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Label text="SYSTEM ERROR" variant="terminal" glitch bordered />
            <Label text="DATA CORRUPT" variant="matrix" glitch style="outline" />
            <Label text="MALFUNCTION" variant="retro" glitch style="filled" />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#00ff41', marginBottom: '16px', fontFamily: 'monospace' }}>
            SCANLINES & PHOSPHOR
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Label text="CRT MONITOR" variant="terminal" scanlines bordered />
            <Label text="PHOSPHOR GLOW" variant="glow" phosphor style="outline" />
            <Label text="RETRO DISPLAY" variant="retro" scanlines phosphor style="filled" />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h4 style={{ color: '#00ff41', marginBottom: '16px', fontFamily: 'monospace' }}>
            ANIMATIONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Label text="PULSE BEAT" variant="terminal" pulse bordered />
            <Label text="TYPEWRITER" variant="matrix" typewriter style="outline" />
            <Label text="ANIMATED" variant="glow" animated pulse style="filled" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ===================================
// ASCII LABEL STORIES
// ===================================

export const ASCIILabels: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        ASCII ART LABELS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        <div>
          <h3 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '16px' }}>
            Block Style
          </h3>
          <ASCIILabel 
            text="HELLO"
            variant="terminal"
            asciiStyle="block"
            bordered
            artEffects={{ scanlines: true }}
          />
        </div>

        <div>
          <h3 style={{ color: '#ff6b9d', fontFamily: 'monospace', marginBottom: '16px' }}>
            Digital Style with Effects
          </h3>
          <ASCIILabel 
            text="CYBER"
            variant="retro"
            asciiStyle="digital"
            bordered
            artEffects={{ glitch: true, phosphor: true }}
          />
        </div>

        <div>
          <h3 style={{ color: '#a78bfa', fontFamily: 'monospace', marginBottom: '16px' }}>
            Outline Style with Animation
          </h3>
          <ASCIILabel 
            text="GLOW"
            variant="glow"
            asciiStyle="outline"
            bordered
            artEffects={{ animated: true }}
            pulse
          />
        </div>
      </div>
    </div>
  )
}

export const CustomASCIIPattern: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        CUSTOM ASCII PATTERNS
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <ASCIILabel 
          text="CUSTOM"
          variant="terminal"
          customPattern={`
╔══════════════════╗
║   SYSTEM READY   ║
║  [████████████]  ║
║   STATUS: OK     ║
╚══════════════════╝`}
          bordered
          artEffects={{ scanlines: true }}
        />

        <ASCIILabel 
          text="MATRIX"
          variant="matrix"
          customPattern={`
┌─ MATRIX PROTOCOL ─┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓ AUTHENTICATED ▓ │  
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└─ ACCESS GRANTED ─┘`}
          bordered
          artEffects={{ glitch: true, animated: true }}
        />
      </div>
    </div>
  )
}

// ===================================
// STATUS LABELS
// ===================================

export const StatusLabels: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        STATUS INDICATORS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            CONNECTION STATUS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <StatusLabel status="online" variant="terminal" bordered />
            <StatusLabel status="offline" variant="terminal" bordered />
            <StatusLabel status="busy" variant="terminal" bordered />
            <StatusLabel status="away" variant="terminal" bordered />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            SYSTEM STATUS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <StatusLabel status="success" variant="terminal" bordered />
            <StatusLabel status="warning" variant="terminal" bordered />
            <StatusLabel status="error" variant="terminal" bordered />
            <StatusLabel status="loading" variant="terminal" bordered />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            WITH EFFECTS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <StatusLabel status="online" variant="glow" bordered pulse />
            <StatusLabel status="error" variant="retro" bordered glitch />
            <StatusLabel status="loading" variant="matrix" bordered animated />
            <StatusLabel status="success" variant="terminal" bordered scanlines />
          </div>
        </div>
      </div>
    </div>
  )
}

// ===================================
// BADGE LABELS
// ===================================

export const BadgeLabels: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        BADGE LABELS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            SYSTEM METRICS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <BadgeLabel label="CPU" value="45%" variant="terminal" bordered />
            <BadgeLabel label="MEMORY" value="67%" valueStatus="warning" variant="terminal" bordered />
            <BadgeLabel label="DISK" value="89%" valueStatus="error" variant="terminal" bordered />
            <BadgeLabel label="NETWORK" value="OK" valueStatus="success" variant="terminal" bordered />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            CONNECTION INFO
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <BadgeLabel label="PING" value="25ms" variant="matrix" bordered />
            <BadgeLabel label="BANDWIDTH" value="100MB" valueStatus="success" variant="matrix" bordered />
            <BadgeLabel label="PACKETS" value="1,432" valueStatus="info" variant="matrix" bordered />
            <BadgeLabel label="ERRORS" value="0" valueStatus="success" variant="matrix" bordered />
          </div>
        </div>
      </div>
    </div>
  )
}

// ===================================
// ANIMATED LABELS
// ===================================

export const AnimatedLabels: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        ANIMATED LABELS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '16px', fontFamily: 'monospace' }}>
            TEXT ANIMATIONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AnimatedLabel text="TYPEWRITER EFFECT" animation="typewriter" variant="terminal" bordered duration={3000} />
            <AnimatedLabel text="FADE IN" animation="fade" variant="matrix" bordered duration={2000} />
            <AnimatedLabel text="SLIDE IN" animation="slide" variant="retro" bordered duration={1500} />
            <AnimatedLabel text="BOUNCE" animation="bounce" variant="glow" bordered duration={1000} />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '16px', fontFamily: 'monospace' }}>
            CONTINUOUS ANIMATIONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AnimatedLabel text="PULSE LOOP" animation="pulse" variant="terminal" bordered loop />
            <AnimatedLabel text="MATRIX SWEEP" animation="matrix" variant="matrix" bordered loop />
            <AnimatedLabel text="WAVE MOTION" animation="wave" variant="glow" bordered loop />
            <AnimatedLabel text="GLITCH LOOP" animation="glitch" variant="retro" bordered loop />
          </div>
        </div>
      </div>
    </div>
  )
}

// ===================================
// FONT VARIATIONS
// ===================================

export const FontVariations: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        FONT VARIATIONS
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            MONO FONT (DEFAULT)
          </h4>
          <Label text="Regular monospace font - clean and readable" variant="terminal" fontFamily="mono" bordered />
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            ASCII FONT
          </h4>
          <Label text="ASCII terminal font with letter spacing" variant="terminal" fontFamily="ascii" bordered />
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            PIXEL FONT
          </h4>
          <Label text="Pixelated retro gaming font" variant="retro" fontFamily="pixel" bordered />
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            FIXED WIDTH + UPPERCASE
          </h4>
          <Label text="Fixed width tabular numbers 12345" variant="terminal" fixedWidth uppercase bordered />
        </div>
      </div>
    </div>
  )
}

// ===================================
// ICON LABELS
// ===================================

export const IconLabels: Story = {
  render: () => (
    <div style={{ padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '2rem' }}>
        LABELS WITH ICONS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            SYSTEM ICONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label text="POWER" variant="terminal" icon="⚡" bordered />
            <Label text="SECURITY" variant="terminal" icon="🔒" bordered />
            <Label text="NETWORK" variant="terminal" icon="📡" bordered />
            <Label text="DATABASE" variant="terminal" icon="💾" bordered />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            STATUS ICONS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label text="ONLINE" variant="terminal" icon="●" status="success" bordered />
            <Label text="WARNING" variant="terminal" icon="⚠" status="warning" bordered />
            <Label text="ERROR" variant="terminal" icon="✕" status="error" bordered />
            <Label text="INFO" variant="terminal" icon="ℹ" status="info" bordered />
          </div>
        </div>

        <div>
          <h4 style={{ color: '#00ff41', marginBottom: '12px', fontFamily: 'monospace' }}>
            WITH BADGES
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Label text="MESSAGES" variant="terminal" icon="✉" badge="5" bordered />
            <Label text="TASKS" variant="terminal" icon="✓" badge="12" bordered />
            <Label text="ALERTS" variant="terminal" icon="⚠" badge="3" status="warning" bordered />
            <Label text="ERRORS" variant="terminal" icon="✕" badge="1" status="error" bordered />
          </div>
        </div>
      </div>
    </div>
  )
}

// ===================================
// RESPONSIVE DEMO
// ===================================

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', background: '#000' }}>
      <h2 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '1rem', fontSize: '1rem' }}>
        MOBILE RESPONSIVE
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Label text="EXTRA LARGE LABEL" variant="terminal" size="xl" bordered />
        <Label text="LARGE LABEL" variant="terminal" size="lg" bordered />
        <Label text="MEDIUM LABEL" variant="terminal" size="md" bordered />
        <Label text="SMALL LABEL" variant="terminal" size="sm" bordered />
        <Label text="EXTRA SMALL" variant="terminal" size="xs" bordered />
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}

// ===================================
// INTERACTIVE PLAYGROUND
// ===================================

export const InteractivePlayground: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      text: 'INTERACTIVE LABEL',
      variant: 'terminal' as const,
      size: 'md' as const,
      style: 'solid' as const,
      bordered: true,
      animated: true,
      glitch: false,
      scanlines: false,
      pulse: false,
      typewriter: false
    })

    return (
      <div style={{ padding: '20px', background: '#000' }}>
        <div style={{ marginBottom: '30px', padding: '20px', background: '#111', borderRadius: '8px' }}>
          <h3 style={{ color: '#00ff41', marginBottom: '20px', fontFamily: 'monospace' }}>
            LABEL PLAYGROUND
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ color: '#00ff41', fontFamily: 'monospace', fontSize: '0.8rem' }}>Text:</label>
              <input 
                type="text" 
                value={settings.text}
                onChange={(e) => setSettings({...settings, text: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '4px 8px', 
                  background: '#000', 
                  color: '#00ff41', 
                  border: '1px solid #333',
                  fontFamily: 'monospace'
                }}
              />
            </div>
            
            <div>
              <label style={{ color: '#00ff41', fontFamily: 'monospace', fontSize: '0.8rem' }}>Variant:</label>
              <select 
                value={settings.variant}
                onChange={(e) => setSettings({...settings, variant: e.target.value as any})}
                style={{ 
                  width: '100%', 
                  padding: '4px', 
                  background: '#000', 
                  color: '#00ff41', 
                  border: '1px solid #333',
                  fontFamily: 'monospace'
                }}
              >
                <option value="terminal">Terminal</option>
                <option value="matrix">Matrix</option>
                <option value="retro">Retro</option>
                <option value="glow">Glow</option>
              </select>
            </div>
            
            <div>
              <label style={{ color: '#00ff41', fontFamily: 'monospace', fontSize: '0.8rem' }}>Size:</label>
              <select 
                value={settings.size}
                onChange={(e) => setSettings({...settings, size: e.target.value as any})}
                style={{ 
                  width: '100%', 
                  padding: '4px', 
                  background: '#000', 
                  color: '#00ff41', 
                  border: '1px solid #333',
                  fontFamily: 'monospace'
                }}
              >
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {Object.entries({
              bordered: 'Border',
              animated: 'Animation', 
              glitch: 'Glitch',
              scanlines: 'Scanlines',
              pulse: 'Pulse',
              typewriter: 'Typewriter'
            }).map(([key, label]) => (
              <label key={key} style={{ color: '#00ff41', fontFamily: 'monospace', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <input 
                  type="checkbox" 
                  checked={settings[key as keyof typeof settings] as boolean}
                  onChange={(e) => setSettings({...settings, [key]: e.target.checked})}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '100px',
          background: settings.variant === 'minimal' ? '#f8f9fa' : '#000',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <Label {...settings} />
        </div>
      </div>
    )
  }
}