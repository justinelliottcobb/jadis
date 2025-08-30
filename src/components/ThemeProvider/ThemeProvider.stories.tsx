import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme, type JadisTheme } from './ThemeProvider'
import { H1, H2 } from '../Headers'
import { P, Code, Strong } from '../Typography'

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Theme provider for Jadis components. Supports multiple ASCII-art aesthetic themes including terminal, matrix, amber, hacker, and monochrome styles.',
      },
    },
  },
  argTypes: {
    defaultTheme: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'amber', 'hacker', 'mono'],
      description: 'Default theme to apply',
    },
  },
}

export default meta

type Story = StoryObj<typeof ThemeProvider>

const ThemeDemo = ({ theme }: { theme: JadisTheme }) => (
  <div style={{ padding: '2rem', minHeight: '50vh' }}>
    <H1 variant="box">Theme: {theme.toUpperCase()}</H1>
    <H2 variant="simple">ASCII Art Component Library</H2>
    <P variant="terminal">
      This is a <Strong>paragraph</Strong> demonstrating the {theme} theme with various styling elements.
    </P>
    <P variant="matrix">
      Code integration: <Code>const theme = '{theme}'</Code>
    </P>
    <P variant="retro">
      RETRO STYLING MAINTAINS THE AESTHETIC WHILE PROVIDING EXCELLENT READABILITY.
    </P>
    <div style={{ 
      marginTop: '1rem', 
      padding: '1rem', 
      border: '1px solid var(--jadis-border-secondary)',
      background: 'var(--jadis-bg-secondary)'
    }}>
      <P variant="minimal">
        Theme colors automatically adapt: text uses <Code>var(--jadis-text-primary)</Code> and 
        backgrounds use <Code>var(--jadis-bg-primary)</Code>
      </P>
    </div>
  </div>
)

export const Terminal: Story = {
  name: 'Terminal Theme (Default)',
  args: {
    defaultTheme: 'terminal',
    children: <ThemeDemo theme="terminal" />,
  },
}

export const Matrix: Story = {
  name: 'Matrix Theme',
  args: {
    defaultTheme: 'matrix',
    children: <ThemeDemo theme="matrix" />,
  },
}

export const Amber: Story = {
  name: 'Amber Retro Theme',
  args: {
    defaultTheme: 'amber',
    children: <ThemeDemo theme="amber" />,
  },
}

export const Hacker: Story = {
  name: 'Purple Hacker Theme',
  args: {
    defaultTheme: 'hacker',
    children: <ThemeDemo theme="hacker" />,
  },
}

export const Mono: Story = {
  name: 'Monochrome Theme',
  args: {
    defaultTheme: 'mono',
    children: <ThemeDemo theme="mono" />,
  },
}

// Interactive theme switcher component
const ThemeSwitcherDemo = () => {
  const { theme, setTheme, themes } = useTheme()
  
  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      <H1 variant="box">Interactive Theme Switcher</H1>
      
      <div style={{ marginBottom: '2rem' }}>
        <P variant="terminal">
          Current theme: <Strong>{theme}</Strong>
        </P>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginTop: '1rem',
          flexWrap: 'wrap'
        }}>
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                padding: '0.5rem 1rem',
                background: t === theme ? 'var(--jadis-text-primary)' : 'var(--jadis-bg-secondary)',
                color: t === theme ? 'var(--jadis-bg-primary)' : 'var(--jadis-text-primary)',
                border: '1px solid var(--jadis-border-primary)',
                fontFamily: 'var(--jadis-font-primary)',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        <div style={{ 
          padding: '1.5rem',
          border: '1px solid var(--jadis-border-primary)',
          background: 'var(--jadis-bg-secondary)'
        }}>
          <H2 variant="simple">Headers</H2>
          <H1 variant="box" style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>Box Style</H1>
          <H2 variant="double-line" style={{ fontSize: '1rem', margin: '0.5rem 0' }}>Double Line</H2>
          <H2 variant="simple" style={{ fontSize: '0.9rem', margin: '0.5rem 0' }}>Simple</H2>
        </div>

        <div style={{ 
          padding: '1.5rem',
          border: '1px solid var(--jadis-border-primary)',
          background: 'var(--jadis-bg-secondary)'
        }}>
          <H2 variant="simple">Typography</H2>
          <P variant="terminal">Terminal variant with prompts</P>
          <P variant="matrix">Matrix digital styling</P>
          <P variant="retro">RETRO UPPERCASE FORMAT</P>
          <P variant="minimal">Minimal clean text</P>
          <P variant="glow">Glowing emphasis text</P>
        </div>

        <div style={{ 
          padding: '1.5rem',
          border: '1px solid var(--jadis-border-primary)',
          background: 'var(--jadis-bg-secondary)'
        }}>
          <H2 variant="simple">Code Elements</H2>
          <P variant="matrix">
            Inline: <Code>npm install jadis</Code>
          </P>
          <P variant="terminal">
            With language: <Code language="js">const x = 42</Code>
          </P>
        </div>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  name: 'Interactive Theme Switcher',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <ThemeSwitcherDemo />
    </ThemeProvider>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

export const AllThemes: Story = {
  name: 'All Themes Showcase',
  render: () => (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {(['terminal', 'matrix', 'amber', 'hacker', 'mono'] as JadisTheme[]).map((theme) => (
        <ThemeProvider key={theme} defaultTheme={theme}>
          <div style={{ 
            borderBottom: '2px solid #333',
            marginBottom: '1rem'
          }}>
            <ThemeDemo theme={theme} />
          </div>
        </ThemeProvider>
      ))}
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}