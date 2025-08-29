import type { Meta, StoryObj } from '@storybook/react'
import { P, Span, Code, Pre, Blockquote, Strong, Em, Small, Mark } from './Typography'

const meta: Meta<typeof P> = {
  title: 'Components/Typography',
  component: P,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive typography components with 90s BBS and TUI aesthetics, powered by Hasklug Nerd Font. Features multiple variants, terminal colors, and retro styling effects.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'terminal',
          value: '#001100',
        },
        {
          name: 'panel',
          value: '#001a1a',
        },
      ],
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content',
    },
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual style variant',
    },
    color: {
      control: { type: 'select' },
      options: ['green', 'cyan', 'yellow', 'orange', 'purple', 'gray', 'red', 'blue', 'white'],
      description: 'Terminal color theme',
    },
    glow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Text glow intensity',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
  },
}

export default meta

// Paragraph Stories
type PStory = StoryObj<typeof P>

export const ParagraphDefault: PStory = {
  name: 'Paragraph - Terminal (Default)',
  args: {
    children: 'This is a terminal-style paragraph with the classic BBS aesthetic. Notice the prompt character and authentic monospace styling.',
    variant: 'terminal',
    color: 'green',
    glow: 'sm',
  },
}

export const ParagraphMatrix: PStory = {
  name: 'Paragraph - Matrix',
  args: {
    children: 'Matrix-inspired text styling with enhanced readability and digital aesthetics. Perfect for code documentation.',
    variant: 'matrix',
    color: 'cyan',
    glow: 'md',
  },
}

export const ParagraphRetro: PStory = {
  name: 'Paragraph - Retro',
  args: {
    children: 'RETRO UPPERCASE STYLING WITH AUTHENTIC 80S COMPUTER VIBES AND INCREASED LETTER SPACING.',
    variant: 'retro',
    color: 'yellow',
    glow: 'sm',
  },
}

// Code Stories
type CodeStory = StoryObj<typeof Code>

export const InlineCode: CodeStory = {
  name: 'Code - Inline',
  render: (args) => <Code {...args} />,
  args: {
    children: 'npm install jadis',
    variant: 'matrix',
    color: 'cyan',
    glow: 'md',
  },
}

export const CodeWithLanguage: CodeStory = {
  name: 'Code - With Language',
  render: (args) => <Code {...args} />,
  args: {
    children: 'const jadis = new JadisLibrary();',
    variant: 'terminal',
    color: 'green',
    language: 'js',
  },
}

// Pre/Code Block Stories
type PreStory = StoryObj<typeof Pre>

export const CodeBlock: PreStory = {
  name: 'Pre - Code Block',
  render: (args) => <Pre {...args} />,
  args: {
    children: `import { H1, P, Code } from 'jadis'

function App() {
  return (
    <div>
      <H1 variant="box">Welcome to Jadis</H1>
      <P variant="terminal">
        A retro component library with <Code>ASCII</Code> styling.
      </P>
    </div>
  )
}`,
    variant: 'matrix',
    color: 'cyan',
    language: 'jsx',
  },
}

export const TerminalOutput: PreStory = {
  name: 'Pre - Terminal Output',
  render: (args) => <Pre {...args} />,
  args: {
    children: `jadis@system:~$ npm run storybook
> jadis@0.1.0 storybook
> storybook dev -p 3000

Storybook 9.1.3 for react-vite started
Local: http://localhost:3000/`,
    variant: 'terminal',
    color: 'green',
    glow: 'sm',
  },
}

// Blockquote Stories
type BlockquoteStory = StoryObj<typeof Blockquote>

export const Quote: BlockquoteStory = {
  name: 'Blockquote - Quote',
  render: (args) => <Blockquote {...args} />,
  args: {
    children: 'The best way to predict the future is to invent it.',
    variant: 'retro',
    color: 'yellow',
    glow: 'md',
  },
}

// Strong/Bold Stories
type StrongStory = StoryObj<typeof Strong>

export const BoldText: StrongStory = {
  name: 'Strong - Bold',
  render: (args) => <Strong {...args} />,
  args: {
    children: 'CRITICAL SYSTEM ALERT',
    variant: 'glow',
    color: 'red',
    glow: 'lg',
  },
}

// Em/Italic Stories
type EmStory = StoryObj<typeof Em>

export const ItalicText: EmStory = {
  name: 'Em - Italic',
  render: (args) => <Em {...args} />,
  args: {
    children: 'emphasized text with terminal styling',
    variant: 'terminal',
    color: 'purple',
    glow: 'sm',
  },
}

// Small Text Stories
type SmallStory = StoryObj<typeof Small>

export const SmallText: SmallStory = {
  name: 'Small - Fine Print',
  render: (args) => <Small {...args} />,
  args: {
    children: 'Version 2.1.3 - Last updated: 2025-08-29',
    variant: 'minimal',
    color: 'gray',
    glow: 'none',
  },
}

// Mark/Highlight Stories
type MarkStory = StoryObj<typeof Mark>

export const HighlightText: MarkStory = {
  name: 'Mark - Highlight',
  render: (args) => <Mark {...args} />,
  args: {
    children: 'HIGHLIGHTED TEXT',
    variant: 'glow',
    color: 'yellow',
    glow: 'lg',
  },
}

// Comprehensive Typography Showcase
export const TypographyShowcase: StoryObj = {
  name: 'All Typography Components',
  render: () => (
    <div className="jadis-themed" style={{ padding: '2rem', minHeight: '100vh', maxWidth: '800px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <P variant="terminal" color="green" glow="md">
          <Strong variant="glow" color="white" glow="lg">JADIS TYPOGRAPHY SYSTEM</Strong> - 
          Powered by <Code variant="matrix" color="cyan">Hasklug Nerd Font</Code>
        </P>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <P variant="matrix" color="cyan">
          This comprehensive typography system provides <Strong variant="terminal" color="white">authentic 90s BBS styling</Strong> with 
          modern React component architecture. Each component supports multiple variants, colors, and effects.
        </P>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <P variant="retro" color="yellow">
          FEATURES INCLUDE: TERMINAL PROMPTS, MATRIX-STYLE FORMATTING, RETRO UPPERCASE STYLING, 
          AND <Mark variant="glow" color="orange">GLOWING HIGHLIGHT EFFECTS</Mark>.
        </P>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Blockquote variant="terminal" color="purple" glow="sm">
          The aesthetic of early computing, when every character mattered and 
          <Em variant="matrix" color="cyan"> visual clarity was paramount</Em>.
        </Blockquote>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <P variant="minimal" color="white">
          Code examples integrate seamlessly: <Code variant="matrix" color="green">import &#123; P, Code &#125; from 'jadis'</Code>
        </P>
      </div>

      <Pre variant="terminal" color="green" glow="sm" language="bash">
{`# Install the library
npm install jadis

# Import components
import { P, Code, Strong } from 'jadis'`}
      </Pre>

      <div style={{ marginTop: '2rem' }}>
        <Small variant="terminal" color="gray">
          Built with Hasklug Nerd Font • Terminal aesthetics • React + TypeScript
        </Small>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// Color Palette Showcase
export const ColorShowcase: StoryObj = {
  name: 'Color Palette',
  render: () => (
    <div className="jadis-themed" style={{ padding: '2rem', minHeight: '50vh' }}>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <P variant="terminal" color="green" glow="md">Terminal Green - Classic BBS primary color</P>
        <P variant="matrix" color="cyan" glow="md">Matrix Cyan - Digital aesthetic</P>
        <P variant="retro" color="yellow" glow="sm">RETRO YELLOW - ATTENTION GRABBING</P>
        <P variant="glow" color="orange" glow="lg">Orange Glow - Warning systems</P>
        <P variant="minimal" color="purple" glow="sm">Purple - Highlighted elements</P>
        <P variant="terminal" color="red" glow="md">Red Alert - Error states</P>
        <P variant="matrix" color="blue" glow="sm">Blue Data - Information display</P>
        <P variant="glow" color="white" glow="lg">White Bright - Maximum visibility</P>
        <P variant="minimal" color="gray" glow="none">Gray Muted - Secondary text</P>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// Variant Comparison
export const VariantComparison: StoryObj = {
  name: 'Style Variants',
  render: () => (
    <div className="jadis-themed" style={{ padding: '2rem', minHeight: '50vh' }}>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <P variant="terminal" color="green">Terminal: Features command prompt styling and authentic BBS aesthetics</P>
        <P variant="matrix" color="cyan">Matrix: Digital-inspired formatting with enhanced readability</P>
        <P variant="retro" color="yellow">RETRO: UPPERCASE STYLING WITH INCREASED LETTER SPACING</P>
        <P variant="minimal" color="white">Minimal: Clean, understated styling for secondary content</P>
        <P variant="glow" color="purple">Glow: Enhanced visibility with bright effects and emphasis</P>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}