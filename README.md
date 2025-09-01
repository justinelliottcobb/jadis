# Jadis

[![npm version](https://img.shields.io/npm/v/jadis.svg)](https://www.npmjs.com/package/jadis)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Ready-ff69b4.svg)](https://storybook.js.org/)

> A modern React component library with 90's BBS ASCII art and terminal user interface aesthetics

Jadis brings the nostalgic charm of vintage computing to modern web applications. Inspired by 90's BBS systems, terminal interfaces, and retro computing aesthetics, this component library provides a comprehensive set of React components styled with authentic ASCII art, terminal colors, and TUI design patterns.

## ✨ Features

- 🖥️ **Terminal Aesthetics** - Authentic 90's BBS and TUI styling
- 🎨 **5 Visual Variants** - terminal, matrix, retro, minimal, glow
- 📱 **Fully Responsive** - Works beautifully on all screen sizes
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives
- 🔧 **TypeScript Ready** - Complete TypeScript support with full type definitions
- 🎭 **Theme System** - Dynamic theme switching with CSS custom properties
- ⚡ **Modern Stack** - Built with React 19, TypeScript 5.8, and Vite 7
- 📚 **Storybook Integration** - Comprehensive component documentation and testing
- 🎪 **Special Effects** - Glitch effects, CRT simulation, scanlines, and more

## 🚀 Quick Start

### Installation

```bash
npm install jadis
# or
yarn add jadis
# or
pnpm add jadis
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

## 📚 Documentation

### Storybook
Explore all components interactively in our Storybook:

```bash
# Development server
npm run storybook

# Build static documentation
npm run build-storybook
```

### API Reference
Each component comes with comprehensive TypeScript definitions and JSDoc comments. Import any component to see full IntelliSense support.

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

MIT © [Your Name](https://github.com/your-username)

## 🙏 Acknowledgments

- Inspired by classic BBS systems and terminal interfaces
- Built with [Radix UI](https://radix-ui.com) primitives
- Typography powered by [Hasklug Nerd Font](https://www.nerdfonts.com)
- Developed with [Storybook](https://storybook.js.org)

## 💫 Show Your Support

Give us a ⭐ if this project helped you!

---

**Built with ❤️ for the terminal aesthetic community**