# Jadis - Project Context

## Project Overview
Jadis is a modern React + TypeScript component library built with Vite. It provides reusable UI components styled with 90's BBS ASCII art and TUI aesthetics. The library includes Storybook integration for component development, documentation, and testing.

## Tech Stack
- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Component Documentation**: Storybook 9.1.3
- **UI Library**: Radix UI 1.4.2
- **Styling**: CSS + Sass 1.90.0 with CSS Custom Properties
- **Typography**: Hasklug Nerd Font integration
- **Testing**: Vitest 3.2.4 with Playwright 1.54.2
- **Linting**: ESLint 9.33.0 with TypeScript ESLint

## Project Structure
```
jadis/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── index.ts           # Library entry point
│   ├── styles.ts          # Style imports
│   ├── assets/            # Application assets
│   │   └── react.svg
│   ├── components/        # Library components
│   │   ├── Headers/       # ASCII art header components
│   │   │   ├── Headers.tsx        # H1-H6 components
│   │   │   ├── Headers.scss       # ASCII/TUI styling
│   │   │   ├── Headers.stories.tsx # Storybook stories
│   │   │   └── index.ts           # Component exports
│   │   ├── Typography/    # Comprehensive typography system
│   │   │   ├── Typography.tsx     # P, Span, Code, Pre, etc.
│   │   │   ├── Typography.scss    # Typography styling
│   │   │   ├── Typography.stories.tsx # Typography demos
│   │   │   └── index.ts           # Typography exports
│   │   ├── ThemeProvider/ # Theme management system
│   │   │   ├── ThemeProvider.tsx  # React context provider
│   │   │   ├── ThemeProvider.stories.tsx # Theme demos
│   │   │   └── index.ts           # Theme exports
│   │   └── SpecialEffects/ # Retro visual effects system
│   │       ├── SpecialEffects.tsx # Glitch, CRT, scanline effects
│   │       ├── SpecialEffects.stories.tsx # Effects showcase
│   │       └── index.ts           # Effects exports
│   ├── styles/            # Global styling system
│   │   ├── fonts.scss     # Hasklug Nerd Font + CSS variables
│   │   ├── themes.scss    # Multi-theme system (5 themes)
│   │   └── effects.scss   # Special effects animations
│   ├── stories/           # Example Storybook components
│   │   ├── Button.tsx     # Example button component
│   │   ├── Header.tsx     # Example header component
│   │   ├── Page.tsx       # Example page component
│   │   ├── *.stories.ts   # Story files
│   │   ├── *.css          # Component styles
│   │   └── assets/        # Storybook assets and documentation images
│   └── vite-env.d.ts      # Vite environment types
├── .storybook/            # Storybook configuration
│   ├── main.ts            # Main Storybook config
│   └── preview.ts         # Global preview settings
├── storybook-static/      # Static Storybook build
└── [config files]        # Various configuration files
```

## Key Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node-specific TypeScript config
- `eslint.config.js` - ESLint configuration with Storybook rules
- `.storybook/main.ts` - Storybook configuration

## Available Scripts
- `npm run dev` - Build library in watch mode for development
- `npm run build` - Build library for distribution (TypeScript + Vite)
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Library Distribution
- **Entry Point**: `src/index.ts` - Main library export
- **Build Output**: `dist/` directory containing:
  - `index.js` - Compiled JavaScript (ES modules)
  - `index.d.ts` - TypeScript declarations
  - `style.css` - Bundled styles
- **Package Exports**:
  - Main: `./dist/index.js` (components and types)
  - Styles: `./dist/style.css` (CSS bundle)

## Development Setup
The project uses modern React library development practices with:
- **Library Build Mode** via Vite with external React/ReactDOM
- **Component-driven development** with Storybook
- **Type safety** with TypeScript strict mode and declaration generation
- **Code quality** with ESLint and comprehensive rules
- **Testing capabilities** with Vitest and Playwright
- **Accessibility testing** with Storybook a11y addon

## Storybook Integration
Comprehensive Storybook setup includes:
- **Addons**: Chromatic, Docs, Onboarding, A11y, Vitest
- **Story locations**: `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **MDX support**: `src/**/*.mdx`
- **React-Vite framework** for optimal performance

## Component Architecture
- **ASCII Art Styling**: 90's BBS and TUI-inspired visual design
- **Terminal Aesthetics**: Hasklug Nerd Font, retro colors, text shadows
- **Theme System**: 5 distinct ASCII-art aesthetic themes with CSS custom properties
- **Special Effects**: Glitch-art, CRT monitor simulation, scanlines, enhanced glow
- **Radix UI** as the foundational UI primitive library
- **SCSS styling** with component-specific stylesheets and global theme variables
- **TypeScript interfaces** for component props with strict typing
- **Comprehensive Storybook stories** with dark terminal backgrounds and interactive demos

### Available Components

#### **Core Typography System**
- **Headers (H1-H6)**: ASCII art styled headers with multiple variants
  - Variants: `box`, `double-line`, `dashed`, `solid`, `simple`
  - Colors: Terminal green, cyan, yellow, orange, purple, gray
  - Alignments: `left`, `center`, `right`
  - Features: Hasklug Nerd Font, ASCII borders, retro glow effects

- **Typography Components**: Complete text element system
  - **Components**: P, Span, Code, Pre, Blockquote, Strong, Em, Small, Mark
  - **Variants**: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - **Colors**: 9-color terminal palette (green, cyan, yellow, orange, purple, gray, red, blue, white)
  - **Effects**: Configurable glow intensity (none, sm, md, lg), font weights
  - **Features**: Terminal prompts, matrix-style formatting, retro uppercase styling

#### **Theme System**
- **ThemeProvider**: React context-based theme management
  - **Themes**: `terminal` (default), `matrix`, `amber`, `hacker`, `mono`
  - **Features**: Dynamic theme switching, CSS custom property integration
  - **Hook**: `useTheme()` for programmatic theme control

#### **Special Effects System**
- **Glitch Effects**: `glitch`, `glitch-rgb`, `glitch-static`, `glitch-corrupt`
- **Scanline Effects**: `scanlines`, `scanlines-heavy`, `scanlines-roll`
- **Enhanced Glow**: `glow-intense`, `glow-pulse`, `glow-rainbow`, `glow-neon`
- **CRT Effects**: `crt`, `flicker`, `phosphor`
- **Combo Presets**: `retro-terminal`, `glitch-terminal`, `matrix-mode`, `crt-monitor`
- **Convenience Components**: `GlitchText`, `ScanlineContainer`, `CRTScreen`, etc.
- **Accessibility**: Respects `prefers-reduced-motion` for users with motion sensitivity

## Library Build & Distribution
- **Library build**: TypeScript declaration generation + Vite library bundling
- **External dependencies**: React and ReactDOM marked as external (peer dependencies)
- **Modern ES modules** with tree-shaking support for consuming applications
- **CSS preprocessing** with Sass support and CSS bundling
- **Package distribution**: Ready for npm publishing with proper exports configuration

## Testing Strategy
- **Unit/Integration**: Vitest with browser testing capabilities
- **E2E**: Playwright integration
- **Visual**: Storybook for component testing
- **Accessibility**: Built-in a11y testing with Storybook addon
- **Coverage**: V8 coverage reporting

## Git Workflow
- **Main branch**: `main`
- **Clean repository** status
- **Conventional commits** recommended for consistency

## Development Notes
- Project is in early development phase (version 0.1.0)
- **Design Focus**: 90's BBS ASCII art and terminal user interface aesthetics
- **Component Philosophy**: Nostalgic computing experience with modern React patterns
- Radix UI provides accessible, unstyled components as foundation
- Storybook serves as both development environment and documentation platform
- **Static Storybook**: Use `npm run build-storybook` for deployable documentation

## Usage Examples
```typescript
// Import components
import { 
  H1, H2, P, Code, Strong,
  ThemeProvider, 
  GlitchText, RetroTerminal,
  SpecialEffects 
} from 'jadis'

// Import styles (includes all themes and effects)
import 'jadis/styles'

// Basic usage with headers
<H1 variant="box" align="center">MAIN SYSTEM</H1>
<H2 variant="double-line" align="left">Configuration Menu</H2>

// Typography with variants and colors
<P variant="terminal" color="green" glow="sm">
  Welcome to the <Strong variant="glow">JADIS</Strong> terminal system.
</P>

<P variant="matrix" color="cyan">
  Execute: <Code variant="matrix" color="green">npm install jadis</Code>
</P>

// Theme system usage
<ThemeProvider defaultTheme="matrix">
  <H1 variant="box">MATRIX MODE ENABLED</H1>
  <P variant="matrix">All components inherit theme automatically.</P>
</ThemeProvider>

// Special effects
<GlitchText effect="glitch-rgb" text="SYSTEM ERROR">
  <H1>SYSTEM ERROR</H1>
</GlitchText>

<RetroTerminal>
  <P variant="terminal">Authentic 90s terminal experience</P>
</RetroTerminal>

// Custom effect combinations
<SpecialEffects 
  glitch={['glitch-rgb']} 
  scanlines={['scanlines']} 
  glow={['glow-pulse']}
>
  <P>Custom retro effects stack</P>
</SpecialEffects>
```