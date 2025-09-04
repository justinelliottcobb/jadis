// ===================================
// JAPANESE COLOR SYSTEM INTERFACES
// ===================================

export type JapaneseColorFamily = 
  | 'red-violet'
  | 'red'
  | 'yellow-red'
  | 'yellow'
  | 'yellow-green'
  | 'green'
  | 'blue-green'
  | 'blue'
  | 'blue-violet'
  | 'violet'
  | 'achromatic'

export type JapaneseSeasonalTheme = 
  | 'haru'    // Spring - Cherry blossom
  | 'natsu'   // Summer - Deep indigo
  | 'aki'     // Autumn - Maple red
  | 'fuyu'    // Winter - Snow white
  | 'sumi'    // Ink - Traditional black ink

export interface JapaneseColor {
  /** Original Japanese name in kanji */
  kanji: string
  /** Romanized Japanese name */
  romaji: string
  /** English translation/meaning */
  english: string
  /** Hex color value */
  hex: string
  /** RGB color values */
  rgb: {
    r: number
    g: number
    b: number
  }
  /** Traditional color family classification */
  family: JapaneseColorFamily
  /** Cultural/historical context */
  context?: string
}

export interface JapaneseColorPalette {
  /** Primary brand colors from Japanese palette */
  primary: {
    light: string
    main: string
    dark: string
  }
  /** Secondary accent colors */
  secondary: {
    light: string
    main: string
    dark: string
  }
  /** Semantic colors for UI states */
  semantic: {
    success: string
    warning: string
    error: string
    info: string
  }
  /** Terminal-optimized color selections */
  terminal: {
    foreground: string
    background: string
    accent: string
    dim: string
  }
  /** Seasonal theme colors */
  seasonal: {
    haru: string    // 桜色 - Cherry blossom
    natsu: string   // 紺色 - Deep indigo
    aki: string     // 紅葉色 - Maple red
    fuyu: string    // 雪白 - Snow white
    sumi: string    // 墨色 - Ink black
  }
}

export interface JapaneseThemeConfig {
  /** Theme identifier */
  name: JapaneseSeasonalTheme
  /** Display name */
  displayName: string
  /** Primary color for the theme */
  primaryColor: string
  /** Background tint */
  backgroundTint: string
  /** Text shadow configuration */
  textShadow: string
  /** Border styling */
  borderStyle: string
  /** Filter effects for images */
  imageFilter: string
  /** Animation name for theme-specific effects */
  animation?: string
  /** Cultural description */
  description: string
  /** Associated season/concept */
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'traditional'
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

export declare function getJapaneseColor(colorName: string): string
export declare function getJapaneseColorRGB(colorName: string): string
export declare function createJapaneseTheme(theme: JapaneseSeasonalTheme): JapaneseThemeConfig
export declare function getSeasonalPalette(season: JapaneseSeasonalTheme): JapaneseColorPalette

// ===================================
// COLOR CONSTANTS
// ===================================

export declare const JAPANESE_COLORS: Record<string, JapaneseColor>
export declare const JAPANESE_THEMES: Record<JapaneseSeasonalTheme, JapaneseThemeConfig>
export declare const SEASONAL_PALETTES: Record<JapaneseSeasonalTheme, JapaneseColorPalette>

// ===================================
// COMPONENT PROP EXTENSIONS
// ===================================

export interface JapaneseColorProps {
  /** Japanese seasonal theme variant */
  japaneseTheme?: JapaneseSeasonalTheme
  /** Use traditional color naming */
  traditionalColors?: boolean
  /** Seasonal animation effects */
  seasonalEffects?: boolean
}

// ===================================
// CSS CUSTOM PROPERTY TYPES
// ===================================

export type JapaneseColorVariable = 
  // Primary colors
  | '--jadis-jp-sakura-iro'      // 桜色 - Cherry blossom
  | '--jadis-jp-kon-iro'         // 紺色 - Deep indigo
  | '--jadis-jp-momiji-iro'      // 紅葉色 - Maple red
  | '--jadis-jp-yukishiro'       // 雪白 - Snow white
  | '--jadis-jp-sumi-iro'        // 墨色 - Ink black
  
  // Terminal semantic colors
  | '--jadis-jp-terminal-fg'
  | '--jadis-jp-terminal-bg'
  | '--jadis-jp-terminal-accent'
  | '--jadis-jp-terminal-dim'
  
  // Extended palette (200+ colors available)
  | `--jadis-jp-${string}`       // Any Japanese color name

export type JapaneseColorRGBVariable = `${JapaneseColorVariable}-rgb`

// ===================================
// STORYBOOK INTEGRATION
// ===================================

export interface JapaneseColorStoryArgs {
  variant: JapaneseSeasonalTheme
  showColorInfo: boolean
  enableAnimations: boolean
  size: 'small' | 'medium' | 'large'
  bordered: boolean
  culturalContext: boolean
}