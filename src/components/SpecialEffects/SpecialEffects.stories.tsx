import type { Meta, StoryObj } from '@storybook/react-vite'
import { 
  SpecialEffects, 
  GlitchText, 
  ScanlineContainer, 
  GlowText, 
  CRTScreen,
  RetroTerminal,
  MatrixMode,
  useSpecialEffects 
} from './SpecialEffects'
import { H1, H2 } from '../Headers'
import { P, Code, Strong } from '../Typography'
import { ThemeProvider } from '../ThemeProvider'

const meta: Meta<typeof SpecialEffects> = {
  title: 'Effects/SpecialEffects',
  component: SpecialEffects,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Classic CRT, glitch-art, and retro visual effects for authentic 90s computing aesthetics. Includes scanlines, RGB shift glitches, neon glow effects, and CRT monitor simulation.',
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
    glitch: {
      control: { type: 'multi-select' },
      options: ['glitch', 'glitch-rgb', 'glitch-static', 'glitch-corrupt'],
      description: 'Glitch art effects',
    },
    scanlines: {
      control: { type: 'multi-select' },
      options: ['scanlines', 'scanlines-heavy', 'scanlines-roll'],
      description: 'CRT scanline effects',
    },
    glow: {
      control: { type: 'multi-select' },
      options: ['glow-intense', 'glow-pulse', 'glow-rainbow', 'glow-neon'],
      description: 'Enhanced glow effects',
    },
    crt: {
      control: { type: 'multi-select' },
      options: ['crt', 'flicker', 'phosphor'],
      description: 'CRT monitor effects',
    },
    combo: {
      control: { type: 'select' },
      options: [undefined, 'retro-terminal', 'glitch-terminal', 'matrix-mode', 'crt-monitor'],
      description: 'Pre-configured effect combinations',
    },
  },
}

export default meta

type Story = StoryObj<typeof SpecialEffects>

// Individual Effect Stories
export const GlitchEffects: Story = {
  name: 'Glitch Effects',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem', minHeight: '100vh' }}>
        <H1 variant="box" style={{ marginBottom: '2rem' }}>GLITCH EFFECTS DEMO</H1>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div>
            <H2 variant="simple">Basic Glitch</H2>
            <GlitchText effect="glitch" text="ERROR_404">
              <P variant="terminal" color="red">ERROR_404: SYSTEM CORRUPTED</P>
            </GlitchText>
          </div>
          
          <div>
            <H2 variant="simple">RGB Shift</H2>
            <GlitchText effect="glitch-rgb">
              <P variant="matrix" color="cyan">DIGITAL_ANOMALY_DETECTED</P>
            </GlitchText>
          </div>
          
          <div>
            <H2 variant="simple">Static Noise</H2>
            <GlitchText effect="glitch-static">
              <P variant="retro" color="yellow">TRANSMISSION_INTERRUPTED</P>
            </GlitchText>
          </div>
          
          <div>
            <H2 variant="simple">Heavy Corruption</H2>
            <GlitchText effect="glitch-corrupt" text="CRITICAL">
              <Strong color="red">CRITICAL SYSTEM FAILURE</Strong>
            </GlitchText>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
}

export const ScanlineEffects: Story = {
  name: 'Scanline Effects',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ minHeight: '100vh' }}>
        <div style={{ padding: '2rem' }}>
          <H1 variant="box">CRT SCANLINE SIMULATION</H1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', minHeight: '80vh' }}>
          <ScanlineContainer effect="scanlines">
            <div style={{ padding: '2rem' }}>
              <H2 variant="simple">Subtle Scanlines</H2>
              <P variant="terminal">Classic CRT monitor scanline effect with subtle horizontal lines across the display.</P>
            </div>
          </ScanlineContainer>
          
          <ScanlineContainer effect="scanlines-heavy">
            <div style={{ padding: '2rem' }}>
              <H2 variant="simple">Heavy Scanlines</H2>
              <P variant="matrix">Intense scanline pattern simulating old phosphor monitors with prominent horizontal artifacts.</P>
            </div>
          </ScanlineContainer>
          
          <ScanlineContainer effect="scanlines-roll">
            <div style={{ padding: '2rem' }}>
              <H2 variant="simple">Rolling Scanlines</H2>
              <P variant="retro">Animated rolling scanline effect mimicking cathode ray tube beam refresh patterns.</P>
            </div>
          </ScanlineContainer>
        </div>
      </div>
    </ThemeProvider>
  ),
}

export const GlowEffects: Story = {
  name: 'Glow Effects',
  render: () => (
    <ThemeProvider defaultTheme="hacker">
      <div style={{ padding: '2rem', minHeight: '100vh' }}>
        <H1 variant="box">ENHANCED GLOW EFFECTS</H1>
        
        <div style={{ display: 'grid', gap: '3rem', marginTop: '2rem' }}>
          <div>
            <GlowText effect="glow-intense">
              <H2 variant="simple">Intense Glow</H2>
            </GlowText>
            <P variant="minimal">Multi-layered text shadow for maximum visibility and retro aesthetics.</P>
          </div>
          
          <div>
            <GlowText effect="glow-pulse">
              <H2 variant="simple">Pulsing Glow</H2>
            </GlowText>
            <P variant="minimal">Animated pulsing effect that breathes life into terminal displays.</P>
          </div>
          
          <div>
            <GlowText effect="glow-rainbow">
              <H2 variant="simple">Rainbow Glow</H2>
            </GlowText>
            <P variant="minimal">Cycling through spectrum colors for psychedelic 90s vibes.</P>
          </div>
          
          <div>
            <GlowText effect="glow-neon">
              <H2 variant="simple">Neon Sign</H2>
            </GlowText>
            <P variant="minimal">Classic neon sign aesthetic with bright white core and colored aura.</P>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
}

export const CRTEffects: Story = {
  name: 'CRT Monitor Effects',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <CRTScreen effects={['crt', 'flicker', 'phosphor']}>
        <div style={{ padding: '3rem', minHeight: '100vh' }}>
          <H1 variant="box">CRT MONITOR SIMULATION</H1>
          
          <div style={{ marginTop: '2rem' }}>
            <P variant="terminal">
              This container simulates a complete CRT monitor experience with:
            </P>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
              <li><Code>Screen curvature</Code> - Radial gradient vignetting</li>
              <li><Code>Phosphor trails</Code> - Ghosting effect from phosphor persistence</li>
              <li><Code>Screen flicker</Code> - Subtle brightness fluctuation</li>
              <li><Code>Scanlines</Code> - Horizontal raster lines</li>
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            border: '1px solid var(--jadis-color-green)', 
            background: 'rgba(0, 255, 0, 0.05)' 
          }}>
            <P variant="matrix">
              <Strong>SYSTEM STATUS:</Strong> All CRT effects active. Experiencing authentic 1990s computing nostalgia.
            </P>
          </div>
        </div>
      </CRTScreen>
    </ThemeProvider>
  ),
}

// Combo Effect Stories
export const ComboEffects: Story = {
  name: 'Combination Effects',
  render: () => (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)' }}>
        
        <RetroTerminal>
          <ThemeProvider defaultTheme="terminal">
            <div style={{ padding: '2rem' }}>
              <H2 variant="box">RETRO TERMINAL</H2>
              <P variant="terminal">Scanlines + pulsing glow + sepia filter for authentic retro computing.</P>
            </div>
          </ThemeProvider>
        </RetroTerminal>
        
        <SpecialEffects combo="glitch-terminal">
          <ThemeProvider defaultTheme="matrix">
            <div style={{ padding: '2rem' }}>
              <H2 variant="box">GLITCH TERMINAL</H2>
              <P variant="matrix">Heavy scanlines + RGB shift glitch for corrupted system aesthetics.</P>
            </div>
          </ThemeProvider>
        </SpecialEffects>
        
        <MatrixMode>
          <ThemeProvider defaultTheme="matrix">
            <div style={{ padding: '2rem' }}>
              <H2 variant="box">MATRIX MODE</H2>
              <P variant="matrix">Digital rain + neon glow + scanlines for cyberpunk atmosphere.</P>
            </div>
          </ThemeProvider>
        </MatrixMode>
        
        <SpecialEffects combo="crt-monitor">
          <ThemeProvider defaultTheme="amber">
            <div style={{ padding: '2rem' }}>
              <H2 variant="box">CRT MONITOR</H2>
              <P variant="terminal">Complete CRT simulation with curvature, flicker, phosphor trails, and scanlines.</P>
            </div>
          </ThemeProvider>
        </SpecialEffects>
        
      </div>
    </div>
  ),
}

// Interactive Effect Controller
const EffectController = () => {
  const { effects, addEffect, removeEffect, setCombo, clearEffects } = useSpecialEffects()
  
  const toggleEffect = (type: 'glitch' | 'scanlines' | 'glow' | 'crt', effect: string) => {
    const currentEffects = effects[type] || []
    if (currentEffects.includes(effect as any)) {
      removeEffect(type, effect)
    } else {
      addEffect(type, effect)
    }
  }
  
  return (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem', minHeight: '100vh' }}>
        <H1 variant="box">INTERACTIVE EFFECTS CONTROLLER</H1>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: '2rem' }}>
          
          {/* Glitch Controls */}
          <div style={{ border: '1px solid var(--jadis-color-green)', padding: '1rem' }}>
            <H2 variant="simple">Glitch Effects</H2>
            {['glitch', 'glitch-rgb', 'glitch-static', 'glitch-corrupt'].map(effect => (
              <button
                key={effect}
                onClick={() => toggleEffect('glitch', effect)}
                style={{
                  display: 'block',
                  margin: '0.5rem 0',
                  padding: '0.5rem',
                  background: (effects.glitch || []).includes(effect as any) ? 'var(--jadis-color-green)' : 'transparent',
                  color: (effects.glitch || []).includes(effect as any) ? 'black' : 'var(--jadis-color-green)',
                  border: '1px solid var(--jadis-color-green)',
                  fontFamily: 'var(--jadis-font-primary)',
                  cursor: 'pointer',
                }}
              >
                {effect.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Scanline Controls */}
          <div style={{ border: '1px solid var(--jadis-color-cyan)', padding: '1rem' }}>
            <H2 variant="simple">Scanline Effects</H2>
            {['scanlines', 'scanlines-heavy', 'scanlines-roll'].map(effect => (
              <button
                key={effect}
                onClick={() => toggleEffect('scanlines', effect)}
                style={{
                  display: 'block',
                  margin: '0.5rem 0',
                  padding: '0.5rem',
                  background: (effects.scanlines || []).includes(effect as any) ? 'var(--jadis-color-cyan)' : 'transparent',
                  color: (effects.scanlines || []).includes(effect as any) ? 'black' : 'var(--jadis-color-cyan)',
                  border: '1px solid var(--jadis-color-cyan)',
                  fontFamily: 'var(--jadis-font-primary)',
                  cursor: 'pointer',
                }}
              >
                {effect.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Glow Controls */}
          <div style={{ border: '1px solid var(--jadis-color-yellow)', padding: '1rem' }}>
            <H2 variant="simple">Glow Effects</H2>
            {['glow-intense', 'glow-pulse', 'glow-rainbow', 'glow-neon'].map(effect => (
              <button
                key={effect}
                onClick={() => toggleEffect('glow', effect)}
                style={{
                  display: 'block',
                  margin: '0.5rem 0',
                  padding: '0.5rem',
                  background: (effects.glow || []).includes(effect as any) ? 'var(--jadis-color-yellow)' : 'transparent',
                  color: (effects.glow || []).includes(effect as any) ? 'black' : 'var(--jadis-color-yellow)',
                  border: '1px solid var(--jadis-color-yellow)',
                  fontFamily: 'var(--jadis-font-primary)',
                  cursor: 'pointer',
                }}
              >
                {effect.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Combo Controls */}
          <div style={{ border: '1px solid var(--jadis-color-purple)', padding: '1rem' }}>
            <H2 variant="simple">Combo Presets</H2>
            {['retro-terminal', 'glitch-terminal', 'matrix-mode', 'crt-monitor'].map(combo => (
              <button
                key={combo}
                onClick={() => setCombo(effects.combo === combo ? undefined : combo as any)}
                style={{
                  display: 'block',
                  margin: '0.5rem 0',
                  padding: '0.5rem',
                  background: effects.combo === combo ? 'var(--jadis-color-purple)' : 'transparent',
                  color: effects.combo === combo ? 'black' : 'var(--jadis-color-purple)',
                  border: '1px solid var(--jadis-color-purple)',
                  fontFamily: 'var(--jadis-font-primary)',
                  cursor: 'pointer',
                }}
              >
                {combo.toUpperCase()}
              </button>
            ))}
            <button
              onClick={clearEffects}
              style={{
                display: 'block',
                margin: '1rem 0 0.5rem 0',
                padding: '0.5rem',
                background: 'var(--jadis-color-red)',
                color: 'black',
                border: '1px solid var(--jadis-color-red)',
                fontFamily: 'var(--jadis-font-primary)',
                cursor: 'pointer',
              }}
            >
              CLEAR ALL
            </button>
          </div>
          
        </div>
        
        {/* Effect Preview Area */}
        <div style={{ marginTop: '2rem', minHeight: '200px', border: '2px solid var(--jadis-color-white)', padding: '2rem' }}>
          <SpecialEffects {...effects} text="PREVIEW TEXT">
            <H2 variant="box">EFFECT PREVIEW</H2>
            <P variant="terminal">
              This text demonstrates the currently selected effects. Use the controls above to experiment with different combinations.
            </P>
            <P variant="matrix">
              Active effects: {JSON.stringify(effects, null, 2) || 'None'}
            </P>
          </SpecialEffects>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const Interactive: Story = {
  name: 'Interactive Controller',
  render: () => <EffectController />,
}

// Full Demo Showcase
export const FullShowcase: Story = {
  name: 'Complete Effects Showcase',
  render: () => (
    <div style={{ background: '#000', minHeight: '200vh' }}>
      
      {/* Title Section with Matrix Mode */}
      <MatrixMode>
        <div style={{ padding: '3rem', textAlign: 'center', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ThemeProvider defaultTheme="matrix">
            <GlitchText effect="glitch-rgb" text="JADIS EFFECTS">
              <H1 variant="box" style={{ fontSize: '3rem', marginBottom: '1rem' }}>JADIS EFFECTS</H1>
            </GlitchText>
            <P variant="matrix" style={{ fontSize: '1.2rem' }}>
              Classic <Strong>90s Computing</Strong> Visual Effects Library
            </P>
          </ThemeProvider>
        </div>
      </MatrixMode>
      
      {/* Effects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        
        <RetroTerminal>
          <ThemeProvider defaultTheme="terminal">
            <div style={{ padding: '2rem', minHeight: '40vh' }}>
              <H2 variant="simple">RETRO TERMINAL</H2>
              <P variant="terminal">Authentic 1990s terminal experience with scanlines and phosphor glow effects.</P>
              <Code>jadis@system:~$ run --effect=retro</Code>
            </div>
          </ThemeProvider>
        </RetroTerminal>
        
        <SpecialEffects combo="glitch-terminal">
          <ThemeProvider defaultTheme="hacker">
            <div style={{ padding: '2rem', minHeight: '40vh' }}>
              <GlitchText effect="glitch-corrupt" text="SYSTEM ERROR">
                <H2 variant="simple">SYSTEM ERROR</H2>
              </GlitchText>
              <P variant="glow">Digital corruption and RGB channel separation creating cyberpunk aesthetics.</P>
              <Code>ERROR: MEMORY_LEAK_DETECTED</Code>
            </div>
          </ThemeProvider>
        </SpecialEffects>
        
        <CRTScreen effects={['crt', 'flicker', 'phosphor']}>
          <ThemeProvider defaultTheme="amber">
            <div style={{ padding: '2rem', minHeight: '40vh' }}>
              <H2 variant="simple">CRT MONITOR</H2>
              <P variant="retro">Complete cathode ray tube simulation with curvature, flicker, and phosphor persistence.</P>
              <Code>DISPLAY_MODE: 80x25_TEXT</Code>
            </div>
          </ThemeProvider>
        </CRTScreen>
        
        <ScanlineContainer effect="scanlines-roll">
          <ThemeProvider defaultTheme="mono">
            <div style={{ padding: '2rem', minHeight: '40vh' }}>
              <GlowText effect="glow-neon">
                <H2 variant="simple">NEON DREAMS</H2>
              </GlowText>
              <P variant="glow">Rolling scanlines with neon glow effects for authentic arcade aesthetics.</P>
              <Code>ARCADE_MODE: ENABLED</Code>
            </div>
          </ThemeProvider>
        </ScanlineContainer>
        
      </div>
      
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}