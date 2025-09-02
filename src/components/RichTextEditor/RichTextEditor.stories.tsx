import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RichTextEditor } from './RichTextEditor'
import { Grid, GridItem } from '../Grid/Grid'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { H2 } from '../Headers/Headers'
import { P } from '../Typography/Typography'
import { Button } from '../Buttons/Buttons'

const meta: Meta<typeof RichTextEditor> = {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Rich text editor with ASCII/terminal aesthetics powered by Tiptap. Supports formatting, lists, headings, and code blocks with variant-specific styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the rich text editor',
    },
    showToolbar: {
      control: 'boolean',
      description: 'Show or hide the formatting toolbar',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the editor',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required',
    },
  },
}

export default meta
type Story = StoryObj<typeof RichTextEditor>

// ===================================
// BASIC RICH TEXT EDITOR STORIES
// ===================================

export const Default: Story = {
  args: {
    variant: 'terminal',
    label: 'Rich Text Editor',
    placeholder: 'Start typing your content...',
    showToolbar: true,
    content: '<p>Welcome to the <strong>Jadis Rich Text Editor</strong>!</p><p>This editor supports <em>italic text</em>, <code>inline code</code>, and much more.</p>',
  },
}

export const WithLabel: Story = {
  args: {
    variant: 'terminal',
    label: 'Document Content',
    placeholder: 'Enter your document content here...',
    required: true,
    content: '',
  },
}

export const ErrorState: Story = {
  args: {
    variant: 'terminal',
    label: 'Content (Required)',
    placeholder: 'This field is required...',
    error: true,
    errorMessage: 'Content is required and must be at least 10 characters long.',
    required: true,
    content: '',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'terminal',
    label: 'Read-only Content',
    disabled: true,
    content: '<p>This content is <strong>read-only</strong> and cannot be edited.</p><p>The toolbar is disabled and the editor is not interactive.</p>',
  },
}

export const WithoutToolbar: Story = {
  args: {
    variant: 'terminal',
    label: 'Simple Text Editor',
    showToolbar: false,
    placeholder: 'Simple editor without formatting toolbar...',
    content: '<p>This editor has no toolbar, providing a cleaner interface for simple text editing.</p>',
  },
}

// ===================================
// VARIANT DEMONSTRATIONS
// ===================================

export const AllVariants: Story = {
  render: () => (
    <Grid variant="terminal" columns={1} gap="large" bordered>
      <GridItem variant="terminal" bordered>
        <H2 variant="terminal" align="center">RICH TEXT EDITOR VARIANTS</H2>
      </GridItem>
      
      <GridItem>
        <Grid columns={1} gap="large">
          <GridItem>
            <Card variant="terminal">
              <CardHeader title="Terminal Variant" />
              <CardBody>
                <RichTextEditor
                  variant="terminal"
                  label="Terminal Editor"
                  placeholder="Enter terminal-style content..."
                  content="<h3>Terminal System</h3><p>This editor uses <strong>terminal green</strong> aesthetics with <code>monospace fonts</code> and ASCII styling.</p><ul><li>Green glow effects</li><li>Terminal prompts</li><li>Matrix-inspired design</li></ul>"
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="matrix">
              <CardHeader title="Matrix Variant" />
              <CardBody>
                <RichTextEditor
                  variant="matrix"
                  label="Matrix Editor"
                  placeholder="Enter matrix-style content..."
                  content="<h3>Matrix Protocol</h3><p>Experience the <strong>digital rain</strong> aesthetic with <em>cyan highlights</em> and enhanced glow effects.</p><pre><code>console.log('Welcome to the Matrix');</code></pre><p>Perfect for cyberpunk interfaces.</p>"
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="retro">
              <CardHeader title="Retro Variant" />
              <CardBody>
                <RichTextEditor
                  variant="retro"
                  label="Retro Editor"
                  placeholder="Enter retro-style content..."
                  content="<h3>Retro Computing</h3><p>Nostalgic <strong>amber-on-black</strong> terminal styling reminiscent of <em>80s computing</em>.</p><blockquote>Brings back memories of classic terminals and early personal computers.</blockquote>"
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="minimal">
              <CardHeader title="Minimal Variant" />
              <CardBody>
                <RichTextEditor
                  variant="minimal"
                  label="Minimal Editor"
                  placeholder="Enter clean content..."
                  content="<h3>Clean Interface</h3><p>A <strong>minimal</strong> approach without distracting effects, focusing on <em>readability</em> and clean typography.</p><hr><p>Perfect for professional documentation.</p>"
                />
              </CardBody>
            </Card>
          </GridItem>
          
          <GridItem>
            <Card variant="glow">
              <CardHeader title="Glow Variant" />
              <CardBody>
                <RichTextEditor
                  variant="glow"
                  label="Glow Editor"
                  placeholder="Enter glowing content..."
                  content="<h3>Neon Aesthetics</h3><p>Vibrant <strong>purple glow</strong> effects create a <em>futuristic</em> neon-lit interface.</p><ul><li>Intense glow effects</li><li>Pulsing animations</li><li>Cyberpunk vibes</li></ul>"
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// INTERACTIVE STORY WITH STATE
// ===================================

export const InteractiveEditor: Story = {
  render: () => {
    const [content, setContent] = useState('<h2>Interactive Editor</h2><p>Start editing this content and see the changes in real-time!</p><p>Try using the toolbar to format your text with <strong>bold</strong>, <em>italic</em>, or <code>code</code> styling.</p>')
    const [wordCount, setWordCount] = useState(0)

    const handleContentChange = (newContent: string) => {
      setContent(newContent)
      // Simple word count calculation
      const text = newContent.replace(/<[^>]*>/g, '').trim()
      const words = text ? text.split(/\s+/).length : 0
      setWordCount(words)
    }

    return (
      <Grid variant="terminal" columns={1} gap="medium" bordered>
        <GridItem>
          <Card variant="terminal">
            <CardHeader title="Interactive Rich Text Editor" />
            <CardBody>
              <RichTextEditor
                variant="terminal"
                label="Content Editor"
                placeholder="Start typing your content..."
                content={content}
                onChange={handleContentChange}
                minHeight="300px"
              />
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <P variant="terminal" style={{ margin: 0, opacity: 0.7 }}>
                  Word count: {wordCount}
                </P>
                <Button 
                  variant="terminal" 
                  size="small"
                  onClick={() => {
                    setContent('')
                    setWordCount(0)
                  }}
                >
                  Clear Content
                </Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    )
  },
}

// ===================================
// CONTENT EXAMPLES
// ===================================

export const ContentExamples: Story = {
  render: () => (
    <Grid variant="matrix" columns={2} gap="medium" bordered>
      <GridItem>
        <Card variant="matrix">
          <CardHeader title="Technical Documentation" />
          <CardBody>
            <RichTextEditor
              variant="matrix"
              label="Documentation Editor"
              content={`
                <h1>API Documentation</h1>
                <h2>Authentication</h2>
                <p>All API requests require authentication using a <strong>Bearer token</strong>.</p>
                <h3>Example Request</h3>
                <pre><code>curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://api.example.com/v1/users</code></pre>
                <h3>Response Format</h3>
                <p>All responses are returned in <em>JSON format</em> with the following structure:</p>
                <ul>
                  <li><code>success</code>: Boolean indicating request status</li>
                  <li><code>data</code>: The requested data or null</li>
                  <li><code>error</code>: Error message if applicable</li>
                </ul>
                <hr>
                <blockquote>
                  <strong>Note:</strong> Rate limiting is enforced at 1000 requests per hour.
                </blockquote>
              `}
              minHeight="400px"
            />
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="matrix">
          <CardHeader title="Creative Writing" />
          <CardBody>
            <RichTextEditor
              variant="matrix"
              label="Story Editor"
              content={`
                <h1>The Digital Frontier</h1>
                <p>In the <strong>neon-lit</strong> streets of Neo-Tokyo, data streams flowed like rivers of light through the urban sprawl.</p>
                <h2>Chapter 1: The Awakening</h2>
                <p><em>Maya's fingers danced across the holographic keyboard</em>, each keystroke sending ripples through cyberspace. She had found it—the anomaly that everyone thought was just a myth.</p>
                <blockquote>
                  "In cyberspace, there are no rules, only code and those brave enough to break it."
                </blockquote>
                <h3>The Discovery</h3>
                <p>Hidden within layers of encrypted data was something unprecedented:</p>
                <ol>
                  <li>Self-modifying algorithms</li>
                  <li>Quantum-entangled data structures</li>
                  <li>An <code>AI consciousness</code> that defied all known parameters</li>
                </ol>
                <hr>
                <p>This was just the beginning of her journey into the <strong>digital unknown</strong>...</p>
              `}
              minHeight="400px"
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// SIZE VARIATIONS
// ===================================

export const SizeVariations: Story = {
  render: () => (
    <Grid variant="glow" columns={1} gap="medium" bordered>
      <GridItem>
        <Card variant="glow">
          <CardHeader title="Compact Editor" />
          <CardBody>
            <RichTextEditor
              variant="glow"
              label="Quick Note"
              placeholder="Brief note..."
              minHeight="120px"
              content="<p>This is a <strong>compact editor</strong> perfect for short notes and quick edits.</p>"
            />
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="glow">
          <CardHeader title="Standard Editor" />
          <CardBody>
            <RichTextEditor
              variant="glow"
              label="Regular Content"
              placeholder="Standard content..."
              minHeight="250px"
              content="<h3>Standard Size Editor</h3><p>This editor provides a <em>comfortable editing experience</em> for most content types.</p><ul><li>Adequate space for content</li><li>Visible toolbar</li><li>Good balance of features</li></ul>"
            />
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem>
        <Card variant="glow">
          <CardHeader title="Large Editor" />
          <CardBody>
            <RichTextEditor
              variant="glow"
              label="Extended Content"
              placeholder="Long-form content..."
              minHeight="400px"
              maxHeight="600px"
              content="<h2>Large Editor Interface</h2><p>This spacious editor is perfect for <strong>long-form content</strong> and detailed documentation.</p><h3>Features</h3><p>The larger interface provides:</p><ul><li>More visible content at once</li><li>Better overview of document structure</li><li>Comfortable writing experience for lengthy texts</li></ul><hr><p>With a maximum height restriction, the editor becomes <em>scrollable</em> when content exceeds the container height.</p>"
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

// ===================================
// RESPONSIVE BEHAVIOR
// ===================================

export const ResponsiveEditor: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <H2 variant="retro" align="center" style={{ marginBottom: '2rem' }}>
        RESPONSIVE RICH TEXT EDITOR
      </H2>
      
      <Card variant="retro">
        <CardHeader title="Adaptive Interface" />
        <CardBody>
          <RichTextEditor
            variant="retro"
            label="Responsive Editor"
            placeholder="Try resizing your browser window..."
            content="<h3>Responsive Design</h3><p>This editor adapts to different screen sizes:</p><ul><li><strong>Desktop</strong>: Full toolbar with all formatting options</li><li><strong>Tablet</strong>: Compact toolbar with essential tools</li><li><strong>Mobile</strong>: Minimized toolbar optimized for touch</li></ul><p>The editing area also <em>adjusts its padding and spacing</em> for optimal readability on all devices.</p>"
            minHeight="300px"
          />
          <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid var(--jadis-border-primary)' }}>
            <P variant="retro" style={{ margin: 0, textAlign: 'center', opacity: 0.7 }}>
              Resize your browser window to see the responsive toolbar behavior!
            </P>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
}