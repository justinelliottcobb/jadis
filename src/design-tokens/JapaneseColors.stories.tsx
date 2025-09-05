import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { JAPANESE_SEASONAL_THEMES, JAPANESE_THEME_DESCRIPTIONS } from '../styles/index'

/**
 * ## Japanese Traditional Color System
 * 
 * Our design system features over 200+ traditional Japanese colors, organized into seasonal themes
 * that reflect Japan's deep connection with nature and the changing seasons.
 * 
 * ### Seasonal Themes
 * - **春 (Haru) - Spring**: Cherry blossom colors with soft pink tones
 * - **夏 (Natsu) - Summer**: Deep indigo representing summer nights
 * - **秋 (Aki) - Autumn**: Maple red capturing autumn foliage  
 * - **冬 (Fuyu) - Winter**: Snow white for winter purity
 * - **墨 (Sumi) - Ink**: Traditional black ink for calligraphy
 * 
 * ### Color Categories
 * - **Primary Colors**: Core seasonal theme colors
 * - **Terminal Semantic**: Optimized for terminal interfaces
 * - **Traditional Palette**: 200+ authentic Japanese colors
 * - **UI Semantic**: Success, warning, error, info variants
 */
const meta: Meta = {
  title: 'Design Tokens/Japanese Colors',
  parameters: {
    docs: {
      description: {
        component: 'Japanese traditional color system with 200+ authentic colors organized by seasonal themes.',
      },
    },
    designToken: {
      styleInjection: `
        /* Import our Japanese color CSS variables */
        @import url('../styles/japanese-colors.scss');
      `,
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

// Design Token Categories for the addon
const seasonalColors = [
  {
    name: 'Haru (Spring)',
    description: 'Cherry blossom theme',
    tokens: [
      { name: 'Sakura-iro (Cherry Blossom)', value: 'var(--jadis-jp-sakura-iro)', type: 'color' },
      { name: 'Wakakusa-iro (Young Grass)', value: 'var(--jadis-jp-wakakusa-iro)', type: 'color' },
      { name: 'Yamabuki-iro (Mountain Rose)', value: 'var(--jadis-jp-yamabuki-iro)', type: 'color' },
      { name: 'Fujimurasaki (Wisteria Purple)', value: 'var(--jadis-jp-fujimurasaki)', type: 'color' },
    ]
  },
  {
    name: 'Natsu (Summer)', 
    description: 'Deep indigo theme',
    tokens: [
      { name: 'Kon-iro (Deep Indigo)', value: 'var(--jadis-jp-kon-iro)', type: 'color' },
      { name: 'Asagi-iro (Light Blue)', value: 'var(--jadis-jp-asagi-iro)', type: 'color' },
      { name: 'Seiji-iro (Celadon)', value: 'var(--jadis-jp-seiji-iro)', type: 'color' },
      { name: 'Ai-iro (Indigo)', value: 'var(--jadis-jp-ai-iro)', type: 'color' },
    ]
  },
  {
    name: 'Aki (Autumn)',
    description: 'Maple red theme', 
    tokens: [
      { name: 'Momiji-iro (Maple Red)', value: 'var(--jadis-jp-momiji-iro)', type: 'color' },
      { name: 'Karakurenai (Deep Red)', value: 'var(--jadis-jp-karakurenai)', type: 'color' },
      { name: 'Kaki-iro (Persimmon)', value: 'var(--jadis-jp-kaki-iro)', type: 'color' },
      { name: 'Enji-iro (Dark Red)', value: 'var(--jadis-jp-enji-iro)', type: 'color' },
    ]
  },
  {
    name: 'Fuyu (Winter)',
    description: 'Snow white theme',
    tokens: [
      { name: 'Yukishiro (Snow White)', value: 'var(--jadis-jp-yukishiro)', type: 'color' },
      { name: 'Gofun-iro (Oyster Shell)', value: 'var(--jadis-jp-gofun-iro)', type: 'color' },
      { name: 'Ginmei-cha (Silver Brown)', value: 'var(--jadis-jp-ginmei-cha)', type: 'color' },
      { name: 'Nezumi-iro (Mouse Gray)', value: 'var(--jadis-jp-nezumi-iro)', type: 'color' },
    ]
  },
  {
    name: 'Sumi (Ink)',
    description: 'Traditional calligraphy', 
    tokens: [
      { name: 'Sumi-iro (Ink Black)', value: 'var(--jadis-jp-sumi-iro)', type: 'color' },
      { name: 'Kuro (Black)', value: 'var(--jadis-jp-kuro)', type: 'color' },
      { name: 'Hai-iro (Ash Gray)', value: 'var(--jadis-jp-hai-iro)', type: 'color' },
      { name: 'Kuro-chatya (Black Tea)', value: 'var(--jadis-jp-kuro-chatya)', type: 'color' },
    ]
  }
]

const terminalColors = [
  { name: 'Terminal Foreground', value: 'var(--jadis-jp-terminal-fg)', type: 'color' },
  { name: 'Terminal Background', value: 'var(--jadis-jp-terminal-bg)', type: 'color' },
  { name: 'Terminal Accent', value: 'var(--jadis-jp-terminal-accent)', type: 'color' },
  { name: 'Terminal Dim', value: 'var(--jadis-jp-terminal-dim)', type: 'color' },
]

export const SeasonalThemes: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--jadis-jp-yukishiro)', marginBottom: '2rem', fontFamily: 'monospace' }}>
        🌸 Japanese Seasonal Color Themes
      </h1>
      
      <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
        {JAPANESE_SEASONAL_THEMES.map((theme) => {
          const themeData = JAPANESE_THEME_DESCRIPTIONS[theme]
          return (
            <div 
              key={theme}
              style={{
                padding: '1.5rem',
                border: `2px solid ${themeData.primaryColor}`,
                borderRadius: '8px',
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
            >
              <h2 style={{ color: themeData.primaryColor, marginBottom: '1rem', fontFamily: 'monospace' }}>
                {themeData.name} - {themeData.english}
              </h2>
              <p style={{ color: 'var(--jadis-jp-yukishiro)', marginBottom: '1rem' }}>
                {themeData.description}
              </p>
              <div style={{ 
                width: '100px', 
                height: '50px', 
                backgroundColor: themeData.primaryColor,
                borderRadius: '4px',
                border: '1px solid #333'
              }} />
            </div>
          )
        })}
      </div>

      <h2 style={{ color: 'var(--jadis-jp-yukishiro)', marginBottom: '1rem', fontFamily: 'monospace' }}>
        💻 Terminal Optimized Colors
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {terminalColors.map((token) => (
          <div key={token.name} style={{
            padding: '1rem',
            border: '1px solid #333',
            borderRadius: '4px',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: '100%',
              height: '60px',
              backgroundColor: token.value,
              borderRadius: '4px',
              marginBottom: '0.5rem',
              border: '1px solid #666'
            }} />
            <div style={{ color: 'var(--jadis-jp-yukishiro)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
              {token.name}
            </div>
            <div style={{ color: '#999', fontSize: '0.8rem', fontFamily: 'monospace' }}>
              {token.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    designToken: {
      categories: [
        {
          name: 'Seasonal Themes',
          tokens: seasonalColors.flatMap(season => season.tokens)
        },
        {
          name: 'Terminal Colors',
          tokens: terminalColors
        }
      ]
    }
  }
}

export const ColorPalette: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--jadis-jp-yukishiro)', marginBottom: '2rem', fontFamily: 'monospace' }}>
        🎨 Complete Japanese Color Palette
      </h1>
      
      {seasonalColors.map((season) => (
        <div key={season.name} style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: season.tokens[0].value, 
            marginBottom: '1rem', 
            fontFamily: 'monospace',
            fontSize: '1.5rem'
          }}>
            {season.name}
          </h2>
          <p style={{ color: '#ccc', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {season.description}
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            {season.tokens.map((token) => (
              <div key={token.name} style={{
                padding: '1rem',
                border: `1px solid ${token.value}`,
                borderRadius: '6px',
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: token.value,
                  borderRadius: '4px',
                  marginBottom: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.1)'
                }} />
                <div style={{ 
                  color: 'var(--jadis-jp-yukishiro)', 
                  fontSize: '1rem', 
                  fontFamily: 'monospace',
                  marginBottom: '0.25rem'
                }}>
                  {token.name}
                </div>
                <div style={{ 
                  color: token.value, 
                  fontSize: '0.85rem', 
                  fontFamily: 'monospace',
                  opacity: 0.8
                }}>
                  {token.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    designToken: {
      categories: seasonalColors.map(season => ({
        name: season.name,
        tokens: season.tokens
      }))
    }
  }
}

export const UsageExamples: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000', color: 'var(--jadis-jp-yukishiro)' }}>
      <h1 style={{ marginBottom: '2rem', fontFamily: 'monospace' }}>
        📖 Using Japanese Colors in Components
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--jadis-jp-sakura-iro)', fontFamily: 'monospace', marginBottom: '1rem' }}>
          CSS Usage
        </h2>
        <pre style={{ 
          backgroundColor: '#111', 
          padding: '1rem', 
          borderRadius: '6px',
          border: '1px solid #333',
          overflow: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
{`/* Use seasonal theme colors */
.spring-button {
  background-color: var(--jadis-jp-sakura-iro);
  border: 1px solid var(--jadis-jp-wakakusa-iro);
  color: var(--jadis-jp-sumi-iro);
}

/* Use RGB values for opacity */  
.autumn-overlay {
  background-color: rgba(var(--jadis-jp-momiji-iro-rgb), 0.8);
}

/* Terminal optimized colors */
.terminal-interface {
  background: var(--jadis-jp-terminal-bg);
  color: var(--jadis-jp-terminal-fg);
  accent-color: var(--jadis-jp-terminal-accent);
}`}
        </pre>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--jadis-jp-kon-iro)', fontFamily: 'monospace', marginBottom: '1rem' }}>
          TypeScript Usage
        </h2>
        <pre style={{ 
          backgroundColor: '#111', 
          padding: '1rem', 
          borderRadius: '6px',
          border: '1px solid #333',
          overflow: 'auto',
          fontFamily: 'monospace',
          fontSize: '0.9rem'
        }}>
{`import { getJapaneseColorVariable, JapaneseSeasonalTheme } from '@/styles'

// Get color CSS variable
const springColor = getJapaneseColorVariable('sakura-iro')

// Component with seasonal theme
interface Props {
  japaneseTheme?: JapaneseSeasonalTheme
}

const MyComponent = ({ japaneseTheme = 'haru' }: Props) => (
  <div className={\`my-component my-component--\${japaneseTheme}\`}>
    Seasonal themed component
  </div>
)`}
        </pre>
      </div>

      <div>
        <h2 style={{ color: 'var(--jadis-jp-momiji-iro)', fontFamily: 'monospace', marginBottom: '1rem' }}>
          Live Examples
        </h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {JAPANESE_SEASONAL_THEMES.map((theme) => {
            const themeData = JAPANESE_THEME_DESCRIPTIONS[theme]
            return (
              <button 
                key={theme}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: themeData.primaryColor,
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                {themeData.name} Button - {themeData.english}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  ),
  parameters: {
    designToken: {
      categories: [
        {
          name: 'Interactive Examples',
          tokens: JAPANESE_SEASONAL_THEMES.map(theme => {
            const themeData = JAPANESE_THEME_DESCRIPTIONS[theme]
            return {
              name: `${themeData.name} Primary`,
              value: themeData.primaryColor,
              type: 'color'
            }
          })
        }
      ]
    }
  }
}