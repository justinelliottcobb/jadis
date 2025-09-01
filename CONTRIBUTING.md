# Contributing to Jadis

Thank you for your interest in contributing to Jadis! This guide will help you get started with contributing to our ASCII art and terminal-inspired React component library.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/jadis.git
   cd jadis
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development environment**:
   ```bash
   npm run storybook
   ```

5. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🎨 Design Philosophy

Jadis is built around the aesthetic of 90's BBS systems and terminal interfaces. When contributing, please keep these principles in mind:

### Visual Design
- **ASCII Art First** - Embrace box-drawing characters, terminal prompts, and text-based UI
- **Retro Color Palettes** - Green terminals, amber monitors, digital matrix themes
- **Monospace Typography** - Hasklug Nerd Font provides the foundation
- **Authentic Effects** - Glitch effects, CRT simulation, scanlines should feel genuine

### Component Architecture
- **Variant System** - All components support 5 variants: terminal, matrix, retro, minimal, glow
- **Accessibility** - Use Radix UI primitives where possible for keyboard navigation and screen readers
- **TypeScript First** - Comprehensive type definitions and JSDoc comments
- **Responsive Design** - Mobile-first approach with terminal aesthetics

## 📁 Project Structure

```
jadis/
├── src/
│   ├── components/           # Component implementations
│   │   ├── Headers/         # H1-H6 components
│   │   ├── Typography/      # Text components
│   │   ├── Forms/          # Form controls
│   │   ├── Buttons/        # Button system
│   │   ├── Cards/          # Card layouts
│   │   ├── Tables/         # Table system
│   │   ├── ThemeProvider/  # Theme management
│   │   └── SpecialEffects/ # Visual effects
│   ├── styles/             # Global styles
│   │   ├── fonts.scss      # Typography system
│   │   ├── themes.scss     # Theme definitions
│   │   └── effects.scss    # Special effects
│   └── stories/            # Legacy Storybook examples
├── .storybook/             # Storybook configuration
└── docs/                   # Additional documentation
```

## 🛠️ Development Workflow

### Adding New Components

1. **Create the component directory**:
   ```bash
   mkdir src/components/YourComponent
   ```

2. **Follow the standard structure**:
   ```
   YourComponent/
   ├── YourComponent.tsx     # Main component implementation
   ├── YourComponent.scss    # Component styles
   ├── YourComponent.stories.tsx  # Storybook stories
   └── index.ts             # Exports
   ```

3. **Implement the component** following these patterns:
   - Use TypeScript with comprehensive prop interfaces
   - Support all 5 variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
   - Include size variations when appropriate
   - Follow accessibility best practices

4. **Add SCSS styling**:
   - Import global fonts: `@import '../../styles/fonts.scss';`
   - Create variant-specific styles
   - Use CSS custom properties from the theme system
   - Include hover effects and animations where appropriate

5. **Create Storybook stories**:
   - Demonstrate all variants and features
   - Include interactive examples
   - Use dark backgrounds that complement the terminal aesthetic
   - Add comprehensive controls and documentation

6. **Update exports**:
   - Add to the component's `index.ts`
   - Update the main `src/index.ts`
   - Add styles import to `src/styles.ts`

### Component Checklist

Before submitting a new component, ensure:

- [ ] **TypeScript** - Complete prop interfaces with JSDoc comments
- [ ] **Variants** - All 5 variants implemented with appropriate styling
- [ ] **Accessibility** - ARIA attributes, keyboard navigation, screen reader support
- [ ] **Responsive** - Works on mobile and desktop
- [ ] **Storybook** - Comprehensive stories showing all features
- [ ] **Documentation** - Clear examples and API documentation
- [ ] **Testing** - Component works in all variants and sizes
- [ ] **ASCII Styling** - Authentic terminal/BBS aesthetic

### Styling Guidelines

#### SCSS Structure
```scss
// Import global fonts
@import '../../styles/fonts.scss';

// Base component styles
.jadis-your-component {
  font-family: var(--jadis-font-primary);
  // Common styles...
  
  // Size variants
  &--small { /* ... */ }
  &--medium { /* ... */ }
  &--large { /* ... */ }
}

// Variant-specific styles
.jadis-your-component--terminal {
  color: var(--jadis-color-green);
  border: 1px solid var(--jadis-color-green);
  // Terminal-specific styles...
}

.jadis-your-component--matrix {
  color: #00ff41;
  // Matrix-specific styles...
}

// Continue for all variants...
```

#### Color Palette
Use the predefined CSS custom properties:
- `--jadis-color-green` - Terminal green
- `--jadis-color-cyan` - Bright cyan
- `--jadis-color-amber` - Retro amber
- `--jadis-color-red` - Error red
- `--jadis-color-blue` - Info blue
- And more defined in `styles/themes.scss`

### Writing Stories

Follow this pattern for Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { YourComponent } from './YourComponent'

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
    },
  },
}

export default meta
type Story = StoryObj<typeof YourComponent>

export const Terminal: Story = {
  args: {
    variant: 'terminal',
    // other props...
  },
}

// Add stories for each variant and major features
```

## 🧪 Testing

### Manual Testing
1. **Visual Testing** - Check all variants in Storybook
2. **Responsive Testing** - Test on different screen sizes
3. **Accessibility Testing** - Use screen readers and keyboard navigation
4. **Theme Testing** - Verify appearance in all theme variants

### Automated Testing
We use Vitest for unit testing and Playwright for end-to-end testing:

```bash
# Run unit tests
npm run test

# Run e2e tests  
npm run test:e2e
```

## 📝 Documentation

### Code Documentation
- Use JSDoc comments for all public APIs
- Include examples in component documentation
- Document complex prop interfaces thoroughly

### README Updates
When adding significant features, update:
- `README.md` - Main project documentation
- `CONTEXT.md` - Internal project context
- Component examples in usage sections

## 🎯 Commit Guidelines

We follow conventional commits for clear history:

```bash
feat: add new DataTable component with sorting
fix: resolve checkbox alignment in tables
docs: update README with table examples
style: improve matrix variant animations
refactor: simplify theme system architecture
```

### Commit Types
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (no logic changes)
- `refactor:` - Code refactoring
- `test:` - Adding or modifying tests
- `chore:` - Maintenance tasks

## 🔍 Pull Request Process

1. **Create a descriptive PR title** following conventional commit format
2. **Fill out the PR template** with:
   - Summary of changes
   - Screenshots/GIFs of new components
   - Testing checklist
   - Breaking changes (if any)
3. **Request review** from maintainers
4. **Address feedback** promptly
5. **Ensure CI passes** before merging

### PR Checklist
- [ ] Code follows project conventions
- [ ] All variants implemented and tested
- [ ] Storybook stories added/updated
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Accessible to keyboard and screen reader users
- [ ] Works on mobile devices

## 💡 Ideas and Suggestions

We welcome ideas for new components or improvements! Before implementing large changes:

1. **Open an issue** to discuss the proposal
2. **Get feedback** from maintainers and community
3. **Create a design** or prototype if helpful
4. **Follow the contribution process** outlined above

## ❓ Getting Help

- **Discord** - Join our community chat
- **GitHub Issues** - Report bugs or request features
- **Discussions** - Ask questions or share ideas
- **Storybook** - Explore component examples

## 🙏 Recognition

Contributors are recognized in:
- `CONTRIBUTORS.md` file
- GitHub contributors page  
- Release notes for significant contributions
- Special thanks in documentation

Thank you for helping make Jadis the best terminal-aesthetic component library! 🚀

---

*Built with ❤️ for the ASCII art and terminal aesthetic community*