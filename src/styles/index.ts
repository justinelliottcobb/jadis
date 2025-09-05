// Import all SCSS styles
import './themes.scss'
import './fonts.scss' 
import './effects.scss'
import './japanese-colors.scss'

// Export Japanese color system types
export * from './japanese-colors.d.ts'

// Export color utility constants
export const JAPANESE_SEASONAL_THEMES = [
  'haru',   // Spring - Cherry blossom
  'natsu',  // Summer - Deep indigo  
  'aki',    // Autumn - Maple red
  'fuyu',   // Winter - Snow white
  'sumi'    // Ink - Traditional black
] as const

export const JAPANESE_THEME_DESCRIPTIONS = {
  haru: {
    name: '春 (Haru)',
    english: 'Spring',
    description: 'Cherry blossom theme with soft pink tones',
    primaryColor: 'var(--jadis-jp-sakura-iro)',
    season: 'spring'
  },
  natsu: {
    name: '夏 (Natsu)', 
    english: 'Summer',
    description: 'Deep indigo theme representing summer nights',
    primaryColor: 'var(--jadis-jp-kon-iro)',
    season: 'summer'
  },
  aki: {
    name: '秋 (Aki)',
    english: 'Autumn', 
    description: 'Maple red theme capturing autumn foliage',
    primaryColor: 'var(--jadis-jp-momiji-iro)',
    season: 'autumn'
  },
  fuyu: {
    name: '冬 (Fuyu)',
    english: 'Winter',
    description: 'Snow white theme for winter purity',
    primaryColor: 'var(--jadis-jp-yukishiro)', 
    season: 'winter'
  },
  sumi: {
    name: '墨 (Sumi)',
    english: 'Ink',
    description: 'Traditional black ink theme for calligraphy',
    primaryColor: 'var(--jadis-jp-sumi-iro)',
    season: 'traditional'
  }
} as const

// Utility functions
export function getJapaneseColorVariable(colorName: string): string {
  return `var(--jadis-jp-${colorName})`
}

export function getJapaneseColorRGBVariable(colorName: string): string {
  return `var(--jadis-jp-${colorName}-rgb)`
}