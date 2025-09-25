/* eslint-disable no-useless-escape */
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CodeBlock, InlineCode } from './CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    glow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg']
    },
    language: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    numbered: {
      control: 'boolean'
    },
    copyable: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    compact: {
      control: 'boolean'
    },
    wrap: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof CodeBlock>

const sampleCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate the 10th Fibonacci number
const result = fibonacci(10);
console.log('Fibonacci(10):', result);`

const sampleJavaScript = `// ES6 Modern JavaScript Example
class DataProcessor {
  constructor(config = {}) {
    this.config = { timeout: 5000, ...config };
    this.cache = new Map();
  }

  async processData(data) {
    try {
      const processed = await this.transform(data);
      this.cache.set(data.id, processed);
      return processed;
    } catch (error) {
      console.error('Processing failed:', error.message);
      throw new Error(\`Data processing failed: \${error.message}\`);
    }
  }

  transform(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data || typeof data !== 'object') {
          reject(new Error('Invalid data format'));
          return;
        }

        const result = {
          ...data,
          processed: true,
          timestamp: Date.now(),
          hash: this.generateHash(data)
        };

        resolve(result);
      }, Math.random() * 1000);
    });
  }

  generateHash(obj) {
    return btoa(JSON.stringify(obj)).substring(0, 8);
  }
}

// Usage example
const processor = new DataProcessor({ timeout: 3000 });
const sample = { id: 'user_123', name: 'John Doe', age: 30 };

processor.processData(sample)
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));`

const sampleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JADIS Terminal Interface</title>
    <link rel="stylesheet" href="jadis.css">
</head>
<body class="jadis-themed" data-theme="terminal">
    <header class="jadis-app-header">
        <h1 class="jadis-header jadis-header--box">
            ╔═══════════════════════════════╗
            ║        SYSTEM CONTROL         ║
            ╚═══════════════════════════════╝
        </h1>
    </header>

    <main class="jadis-page-layout">
        <section class="jadis-card jadis-card--terminal">
            <div class="jadis-card__header">
                <h2>Terminal Status</h2>
            </div>
            <div class="jadis-card__body">
                <p class="jadis-text--terminal">
                    All systems operational
                </p>
                <button class="jadis-button jadis-button--terminal">
                    Execute Command
                </button>
            </div>
        </section>
    </main>
</body>
</html>`

const sampleCSS = `.jadis-terminal-theme {
  --primary-color: #00ff41;
  --bg-color: #000000;
  --text-shadow: 0 0 10px currentColor;

  font-family: 'Courier New', monospace;
  background: var(--bg-color);
  color: var(--primary-color);
  text-shadow: var(--text-shadow);
}

.jadis-button {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--bg-color);
    box-shadow:
      0 0 20px rgba(0, 255, 65, 0.5),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
}`

const sampleBash = `#!/bin/bash

# JADIS System Deployment Script
# Automated deployment with terminal aesthetics

set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"
readonly PROJECT_NAME="jadis-ui"
readonly VERSION=\$(node -p "require('./package.json').version")
readonly BUILD_DIR="dist"
readonly DEPLOY_DIR="/var/www/jadis"

# ASCII Art Banner
echo "
╔════════════════════════════════════════╗
║         JADIS DEPLOYMENT SYSTEM        ║
║              Version \${VERSION}             ║
╚════════════════════════════════════════╝
"

# Logging functions
log() {
    echo "[\$(date +'%Y-%m-%d %H:%M:%S')] \$*" >&2
}

error() {
    log "ERROR: \$*"
    exit 1
}

success() {
    log "SUCCESS: \$*"
}

# Deployment functions
build_project() {
    log "Building project..."
    npm run build || error "Build failed"
    success "Project built successfully"
}

run_tests() {
    log "Running tests..."
    npm test || error "Tests failed"
    success "All tests passed"
}

deploy_files() {
    log "Deploying files to \${DEPLOY_DIR}..."

    # Create deployment directory
    sudo mkdir -p "\${DEPLOY_DIR}"

    # Copy build files
    sudo cp -r "\${BUILD_DIR}"/* "\${DEPLOY_DIR}/" || error "Deployment failed"

    # Set permissions
    sudo chown -R www-data:www-data "\${DEPLOY_DIR}"
    sudo chmod -R 755 "\${DEPLOY_DIR}"

    success "Files deployed successfully"
}

# Main deployment process
main() {
    log "Starting deployment process..."

    build_project
    run_tests
    deploy_files

    echo "
╔════════════════════════════════════════╗
║          DEPLOYMENT COMPLETE           ║
║       JADIS \${VERSION} is now LIVE        ║
╚════════════════════════════════════════╝
    "
}

# Run main function
main "\$@"`

export const Default: Story = {
  args: {
    children: sampleCode,
    variant: 'terminal',
    language: 'javascript',
    bordered: true,
    numbered: false,
    copyable: false,
    highlight: true
  }
}

export const WithTitle: Story = {
  args: {
    children: sampleCode,
    variant: 'terminal',
    language: 'javascript',
    title: 'Fibonacci Calculator',
    bordered: true,
    numbered: true,
    copyable: true,
    highlight: true
  }
}

export const LargeWithNumbers: Story = {
  args: {
    children: sampleJavaScript,
    variant: 'matrix',
    language: 'javascript',
    title: 'Data Processor Class',
    size: 'large',
    bordered: true,
    numbered: true,
    copyable: true,
    glow: 'md',
    highlight: true
  }
}

export const CompactMode: Story = {
  args: {
    children: 'npm install jadis-ui',
    variant: 'terminal',
    language: 'bash',
    size: 'small',
    compact: true,
    bordered: true,
    copyable: true,
    highlight: true
  }
}

export const HTMLExample: Story = {
  args: {
    children: sampleHTML,
    variant: 'retro',
    language: 'html',
    title: 'JADIS HTML Template',
    bordered: true,
    numbered: true,
    copyable: true,
    glow: 'sm',
    highlight: true
  }
}

export const CSSExample: Story = {
  args: {
    children: sampleCSS,
    variant: 'glow',
    language: 'css',
    title: 'Terminal Theme Styles',
    bordered: true,
    numbered: true,
    copyable: true,
    glow: 'lg',
    highlight: true
  }
}

export const BashScript: Story = {
  args: {
    children: sampleBash,
    variant: 'minimal',
    language: 'bash',
    title: 'deployment.sh',
    bordered: true,
    numbered: true,
    copyable: true,
    wrap: true,
    highlight: true
  }
}

export const VariantShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
        <div key={variant}>
          <h3 style={{
            color: 'var(--jadis-color-white)',
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {variant} VARIANT
          </h3>
          <CodeBlock
            variant={variant}
            language="javascript"
            title={`${variant.toUpperCase()} Code Block`}
            bordered
            numbered
            copyable
            glow="sm"
            highlight
          >
            {`// ${variant.toUpperCase()} variant example
const ${variant}Theme = {
  primary: '${variant === 'terminal' ? '#00ff41' :
                variant === 'matrix' ? '#00ffff' :
                variant === 'retro' ? '#ff8800' :
                variant === 'minimal' ? '#888888' :
                '#9900ff'}',
  background: '#000000',
  glow: true
};

console.log('${variant} theme loaded');`}
          </CodeBlock>
        </div>
      ))}
    </div>
  )
}

export const JapaneseThemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {([
        { variant: 'haru', season: 'Spring (桜)', color: 'Cherry Blossom' },
        { variant: 'natsu', season: 'Summer (夏)', color: 'Deep Indigo' },
        { variant: 'aki', season: 'Autumn (秋)', color: 'Maple Red' },
        { variant: 'fuyu', season: 'Winter (冬)', color: 'Snow White' },
        { variant: 'sumi', season: 'Ink (墨)', color: 'Calligraphy Black' }
      ] as const).map(({ variant, season, color }) => (
        <div key={variant}>
          <h3 style={{
            color: 'var(--jadis-color-white)',
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {season} - {color}
          </h3>
          <CodeBlock
            variant={variant}
            language="javascript"
            title={`${season} Theme`}
            bordered
            numbered
            copyable
            glow="md"
            highlight
          >
            {`// ${season} Japanese seasonal theme
const ${variant}Config = {
  theme: '${variant}',
  season: '${season}',
  aesthetic: '${color}',
  traditional: true
};

// Apply traditional Japanese aesthetics
applyTheme(${variant}Config);`}
          </CodeBlock>
        </div>
      ))}
    </div>
  )
}

export const SyntaxHighlighting: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{
          color: 'var(--jadis-color-white)',
          fontSize: '1.2rem',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          AUTOMATIC SYNTAX HIGHLIGHTING
        </h3>
        <CodeBlock
          variant="terminal"
          language="javascript"
          title="JavaScript with Syntax Highlighting"
          bordered
          numbered
          copyable
          glow="sm"
          highlight
        >
          {`// Real syntax highlighting with automatic detection
class TerminalEmulator {
  constructor(config = {}) {
    this.prompt = config.prompt || '$>';
    this.history = [];
    this.commands = new Map();
    this.isActive = true;
  }

  async execute(command) {
    const trimmed = command.trim();
    if (!trimmed) return '';

    try {
      const result = await this.processCommand(trimmed);
      this.history.push({ command: trimmed, result, timestamp: Date.now() });
      return result;
    } catch (error) {
      console.error('Command execution failed:', error.message);
      return 'Error: Command execution failed';
    }
  }

  processCommand(cmd) {
    const [command, ...args] = cmd.split(' ');
    const handler = this.commands.get(command);

    return handler ? handler(args) : 'Command not found';
  }
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 style={{
          color: 'var(--jadis-color-white)',
          fontSize: '1.2rem',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          MULTIPLE LANGUAGE SUPPORT
        </h3>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <CodeBlock
            variant="matrix"
            language="css"
            title="CSS Styling"
            bordered
            numbered
            copyable
            highlight
          >
            {`.terminal-theme {
  background: linear-gradient(135deg, #001a00 0%, #003300 100%);
  color: #00ff41;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px currentColor;
  border: 2px solid #00ff41;
  border-radius: 8px;
  padding: 20px;

  animation: terminal-glow 2s ease-in-out infinite alternate;
}

@keyframes terminal-glow {
  from {
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  }
  to {
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.6);
  }
}`}
          </CodeBlock>

          <CodeBlock
            variant="retro"
            language="bash"
            title="Shell Script"
            bordered
            numbered
            copyable
            highlight
          >
            {`#!/bin/bash
# System monitoring script
set -euo pipefail

LOG_FILE="/var/log/system-monitor.log"
THRESHOLD=80

check_disk_usage() {
    local usage=\$(df / | tail -1 | awk '{print \$5}' | sed 's/%//')

    if [ "\$usage" -gt "\$THRESHOLD" ]; then
        echo "WARNING: Disk usage is \${usage}%" >> "\$LOG_FILE"
        return 1
    fi

    echo "INFO: Disk usage is \${usage}%" >> "\$LOG_FILE"
    return 0
}

main() {
    echo "Starting system check at \$(date)" >> "\$LOG_FILE"

    if check_disk_usage; then
        echo "All systems normal"
    else
        echo "System requires attention!"
        exit 1
    fi
}

main "\$@"`}
          </CodeBlock>
        </div>
      </div>
    </div>
  )
}

export const InlineCodeStory: Story = {
  render: () => (
    <div style={{
      color: 'var(--jadis-color-white)',
      fontSize: '1rem',
      lineHeight: '1.6',
      maxWidth: '600px'
    }}>
      <p>
        Install the JADIS library using <InlineCode variant="terminal" copyable>npm install jadis-ui</InlineCode> or
        with yarn using <InlineCode variant="matrix" copyable>yarn add jadis-ui</InlineCode>.
      </p>

      <p>
        Import components like <InlineCode variant="retro" glow="sm">import {`{ Button, Card }`} from 'jadis-ui'</InlineCode> and
        start building your terminal-themed interface.
      </p>

      <p>
        The library supports multiple variants including <InlineCode variant="terminal">terminal</InlineCode>,
        <InlineCode variant="matrix">matrix</InlineCode>, <InlineCode variant="retro">retro</InlineCode>,
        <InlineCode variant="glow" glow="md">glow</InlineCode>, and Japanese themes like
        <InlineCode variant="haru">haru</InlineCode> and <InlineCode variant="aki">aki</InlineCode>.
      </p>

      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--jadis-color-green)' }}>
        <h4 style={{ margin: '0 0 1rem 0', color: 'var(--jadis-color-green)' }}>Quick Example:</h4>
        <CodeBlock
          variant="terminal"
          language="jsx"
          bordered
          copyable
          compact
        >
{`import { CodeBlock, InlineCode } from 'jadis-ui'

function MyComponent() {
  return (
    <div>
      <p>Use <InlineCode>jadis-ui</InlineCode> components</p>
      <CodeBlock variant="matrix" language="bash">
        npm run dev
      </CodeBlock>
    </div>
  )
}`}
        </CodeBlock>
      </div>
    </div>
  )
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <div key={size}>
          <h4 style={{
            color: 'var(--jadis-color-white)',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            textTransform: 'uppercase'
          }}>
            {size} SIZE
          </h4>
          <CodeBlock
            variant="terminal"
            language="javascript"
            size={size}
            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Code Block`}
            bordered
            numbered
            copyable
          >
            {`// ${size} size example
const config = {
  size: '${size}',
  fontSize: '${size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem'}'
};`}
          </CodeBlock>
        </div>
      ))}
    </div>
  )
}

export const Interactive: Story = {
  args: {
    children: sampleJavaScript,
    variant: 'glow',
    language: 'javascript',
    title: 'Interactive Code Block',
    size: 'medium',
    bordered: true,
    numbered: true,
    copyable: true,
    glow: 'lg',
    highlight: true,
    onCopy: (code: string) => {
      alert(`Copied ${code.length} characters to clipboard!`)
    }
  }
}

export const LineWrapping: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--jadis-color-white)' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--jadis-color-green)' }}>Without Wrapping (Default)</h3>
        <CodeBlock
          variant="terminal"
          language="javascript"
          title="Long lines overflow"
          bordered
          numbered
          copyable
          highlight
        >
{`// This is a very long line of code that would normally extend beyond the container width and require horizontal scrolling
const veryLongVariableName = someReallyLongFunctionName(withALotOfParameters, andEvenMoreParameters, thatMakeTheLineVeryLong);

// Another example of a long line
console.log('This is a very long string that demonstrates what happens when code lines are longer than the available container width and need to be handled properly');`}
        </CodeBlock>
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--jadis-color-cyan)' }}>With Wrapping Enabled</h3>
        <CodeBlock
          variant="matrix"
          language="javascript"
          title="Long lines wrap within numbered lines"
          bordered
          numbered
          copyable
          wrap
          highlight
        >
{`// This is a very long line of code that would normally extend beyond the container width and require horizontal scrolling
const veryLongVariableName = someReallyLongFunctionName(withALotOfParameters, andEvenMoreParameters, thatMakeTheLineVeryLong);

// Another example of a long line
console.log('This is a very long string that demonstrates what happens when code lines are longer than the available container width and need to be handled properly');`}
        </CodeBlock>
      </div>
    </div>
  )
}