# Jadis

A modern React component library with 90's BBS ASCII art and terminal user interface aesthetics. Jadis brings nostalgic computing vibes to modern web applications with a comprehensive set of React components styled with retro ASCII art, terminal colors, and authentic monospace typography.

[![npm version](https://badge.fury.io/js/jadis.svg)](https://badge.fury.io/js/jadis)
[![CI](https://github.com/justinelliottcobb/jadis/workflows/CI/badge.svg)](https://github.com/justinelliottcobb/jadis/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Ready-ff69b4.svg)](https://storybook.js.org/)

Jadis brings the nostalgic charm of vintage computing to modern web applications. Inspired by 90's BBS systems, terminal interfaces, and retro computing aesthetics, this component library provides a comprehensive set of React components styled with authentic ASCII art, terminal colors, and TUI design patterns.

## ✨ Features

- 🖥️ **Terminal Aesthetics**: Authentic 90's BBS and terminal user interface styling
- 🎨 **Multiple Themes**: 5 distinct variants (terminal, matrix, retro, minimal, glow) + Japanese seasonal themes
- 🎭 **Special Effects**: Glitch effects, CRT monitor simulation, scanlines, and ASCII animations
- ⚡ **Modern React**: Built with React 19, TypeScript, and modern development practices
- 📚 **Comprehensive**: 15+ component families with 100+ individual components
- 🎯 **Accessible**: Built on Radix UI primitives for excellent accessibility
- 📖 **Storybook**: Interactive component documentation and examples
- 🌸 **Japanese Colors**: 200+ traditional Japanese colors integrated as CSS custom properties
- 🔧 **TypeScript**: Complete type safety with full TypeScript definitions
- 📱 **Responsive**: Mobile-first responsive design for all screen sizes

## 🚀 Quick Start

### Installation

```bash
npm install jadis
# or
yarn add jadis
# or
pnpm add jadis
```

### Peer Dependencies

Jadis requires React 18+ as a peer dependency:

```bash
npm install react react-dom
```

### Basic Usage

```tsx
import { 
  H1, 
  P, 
  Button, 
  Card, 
  CardHeader, 
  CardBody,
  ThemeProvider 
} from 'jadis'
import 'jadis/styles'

function App() {
  return (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem', backgroundColor: '#000' }}>
        <H1 variant="box" align="center">
          JADIS TERMINAL SYSTEM
        </H1>
        
        <Card variant="terminal" bordered>
          <CardHeader title="System Status" />
          <CardBody>
            <P variant="terminal" color="green">
              All systems operational. Welcome to Jadis.
            </P>
            <Button variant="terminal" color="success">
              CONTINUE
            </Button>
          </CardBody>
        </Card>
      </div>
    </ThemeProvider>
  )
}
```

## 🎨 Component Overview

### Typography System
- **Headers (H1-H6)** - ASCII art styled headers with box borders
- **Text Components** - P, Span, Code, Pre, Strong, Em with terminal styling
- **5 Variants** - Each with distinct visual characteristics
- **Color System** - 9-color terminal palette with glow effects

### Interactive Components
- **Buttons** - Comprehensive button system with loading states and effects
- **Forms** - Input, TextArea, Checkbox, Radio, Select with terminal prompts
- **Tables** - Advanced DataTable with sorting, selection, and ASCII borders
- **Cards** - Layout components with specialized variants

### Layout & Structure
- **Card System** - Flexible card components with ASCII borders
- **Table System** - Full-featured tables with sorting and selection
- **Button Groups** - Organized button layouts
- **Form Layouts** - Structured form components

### Effects & Theming
- **Special Effects** - Glitch, CRT, scanlines, matrix mode
- **Theme Provider** - Dynamic theme switching
- **Responsive Design** - Mobile-first responsive components

## 🎭 Visual Variants

Jadis comes with 5 distinct visual variants, each with its own aesthetic:

### Terminal (Default)
Classic green-on-black terminal styling with ASCII borders and glow effects.

### Matrix  
Digital rain inspired styling with sweep animations and enhanced glow.

### Retro
80's computer styling with amber colors, double borders, and shadow effects.

### Minimal
Clean, understated design with subtle transparency and simple lines.

### Glow
Cyberpunk-inspired styling with pulsing animations and intense glow effects.

## 📚 Component Examples

### Typography & Headers
```tsx
import { H1, H2, P, Code, Strong } from 'jadis'

<H1 variant="box" align="center">MAIN SYSTEM</H1>
<H2 variant="double-line">Configuration Menu</H2>
<P variant="terminal" color="green" glow="sm">
  Welcome to the <Strong variant="glow">JADIS</Strong> terminal system.
</P>
<Code variant="matrix" color="green">npm install jadis</Code>
```

### Forms & Inputs
```tsx
import { Input, TextArea, Button, Checkbox, Select, Form } from 'jadis'

<Form variant="terminal">
  <Input variant="terminal" label="Username" placeholder="Enter username..." />
  <TextArea variant="matrix" label="Message" rows={4} />
  <Checkbox variant="terminal" label="Remember me" />
  <Select variant="retro" label="Choose option">
    <option value="1">Option 1</option>
  </Select>
  <Button variant="terminal" type="submit">SUBMIT</Button>
</Form>
```

### Layout & Cards
```tsx
import { Grid, GridItem, Card, CardHeader, CardBody } from 'jadis'

<Grid variant="terminal" columns={3} gap="large">
  <GridItem columnSpan={2}>
    <Card variant="terminal" interactive>
      <CardHeader title="System Status" subtitle="All systems operational" />
      <CardBody>
        <P variant="terminal">Connection established.</P>
      </CardBody>
    </Card>
  </GridItem>
</Grid>
```

### Special Effects
```tsx
import { SpecialEffects, GlitchText, CRTScreen } from 'jadis'

<GlitchText effect="glitch-rgb">
  <H1>SYSTEM ERROR</H1>
</GlitchText>

<SpecialEffects
  glitch={['glitch-rgb']}
  scanlines={['scanlines']}
  glow={['glow-pulse']}
>
  <P>Enhanced retro effects</P>
</SpecialEffects>
```

## 🎨 Themes & Variants

### Core Variants
- **terminal**: Classic green-on-black terminal styling
- **matrix**: Digital rain and neon green effects
- **retro**: 80's gaming aesthetic with bold colors
- **minimal**: Clean, simplified ASCII styling
- **glow**: Enhanced effects with pulsing animations

### Japanese Seasonal Themes
- **haru** (春): Spring/Cherry Blossom theme
- **natsu** (夏): Summer/Deep Indigo theme
- **aki** (秋): Autumn/Maple Red theme
- **fuyu** (冬): Winter/Snow White theme
- **sumi** (墨): Traditional ink theme

```tsx
import { Button, Card, ThemeProvider } from 'jadis'

<ThemeProvider defaultTheme="matrix">
  <Button variant="terminal">Terminal Style</Button>
  <Card variant="haru">Spring Theme</Card>
</ThemeProvider>
```

## 📚 Documentation

### Storybook
Explore all components interactively in our Storybook:

```bash
# Development server
npm run storybook

# Build static documentation
npm run build-storybook
```

### TypeScript Support
Jadis provides comprehensive TypeScript definitions:

```tsx
import type { JadisVariant, ButtonProps, CardProps } from 'jadis'

interface MyComponentProps {
  variant: JadisVariant
  title: string
}
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/jadis.git
cd jadis

# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build the library
npm run build
```

### Scripts
- `npm run dev` - Development build with watch mode
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook

### Publishing (Maintainers)
```bash
# Patch release (0.1.0 -> 0.1.1)
npm run release:patch

# Minor release (0.1.0 -> 0.2.0)
npm run release:minor

# Major release (0.1.0 -> 1.0.0)
npm run release:major

# Prerelease (0.1.0 -> 0.1.1-0)
npm run release:prerelease
```

## 🎯 Browser Support

Jadis supports all modern browsers:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by 90's BBS culture and terminal aesthetics
- Built on [Radix UI](https://www.radix-ui.com/) primitives
- Typography powered by [Hasklug Nerd Font](https://www.nerdfonts.com/)
- Japanese color system based on traditional color names

## 📞 Support

- 🐛 [Report bugs](https://github.com/justinelliottcobb/jadis/issues)
- 💡 [Request features](https://github.com/justinelliottcobb/jadis/issues)
- 📖 [View documentation](https://jadis-storybook.vercel.app/)
- 💬 [Discussions](https://github.com/justinelliottcobb/jadis/discussions)

---

<div align="center">

**[🚀 Get Started](#-quick-start) • [📖 Documentation](https://jadis-storybook.vercel.app/) • [🐛 Issues](https://github.com/justinelliottcobb/jadis/issues)**

Made with ❤️ for the retro computing community

</div>
