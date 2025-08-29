# Jadis - Project Context

## Project Overview
Jadis is a modern React + TypeScript component library built with Vite. It provides reusable UI components with Storybook integration for component development, documentation, and testing.

## Tech Stack
- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Component Documentation**: Storybook 9.1.2
- **UI Library**: Radix UI 1.4.2
- **Styling**: CSS + Sass 1.90.0
- **Testing**: Vitest 3.2.4 with Playwright 1.54.2
- **Linting**: ESLint 9.33.0 with TypeScript ESLint

## Project Structure
```
jadis/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── assets/            # Application assets
│   │   └── react.svg
│   ├── stories/           # Storybook components and stories
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
- **Radix UI** as the foundational UI primitive library
- **CSS Modules** approach with component-specific stylesheets
- **TypeScript interfaces** for component props
- **Storybook stories** for each component with comprehensive examples

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
- Focus on component library and design system establishment
- Radix UI provides accessible, unstyled components as foundation
- Storybook serves as both development environment and documentation platform
- Library can be consumed by importing components: `import { Button } from 'jadis'`
- Styles can be imported separately: `import 'jadis/styles'`