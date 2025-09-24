import React from 'react'
import './CodeBlock.scss'

export type CodeBlockVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type CodeBlockSize = 'small' | 'medium' | 'large'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
  variant?: CodeBlockVariant
  language?: string
  size?: CodeBlockSize
  numbered?: boolean
  copyable?: boolean
  title?: string
  glow?: 'none' | 'sm' | 'md' | 'lg'
  bordered?: boolean
  compact?: boolean
  wrap?: boolean
  onCopy?: (code: string) => void
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  variant = 'terminal',
  language,
  size = 'medium',
  numbered = false,
  copyable = false,
  title,
  glow = 'none',
  bordered = true,
  compact = false,
  wrap = false,
  onCopy,
  className,
  ...props
}) => {
  const codeRef = React.useRef<HTMLElement>(null)

  const classes = [
    'jadis-code-block',
    `jadis-code-block--${variant}`,
    `jadis-code-block--${size}`,
    numbered && 'jadis-code-block--numbered',
    copyable && 'jadis-code-block--copyable',
    title && 'jadis-code-block--titled',
    glow !== 'none' && `jadis-code-block--glow-${glow}`,
    bordered && 'jadis-code-block--bordered',
    compact && 'jadis-code-block--compact',
    wrap && 'jadis-code-block--wrap',
    className
  ].filter(Boolean).join(' ')

  const handleCopy = async () => {
    if (codeRef.current && onCopy) {
      const codeText = codeRef.current.textContent || ''
      try {
        await navigator.clipboard.writeText(codeText)
        onCopy(codeText)
      } catch (err) {
        console.warn('Failed to copy to clipboard:', err)
        onCopy(codeText)
      }
    }
  }

  const codeContent = typeof children === 'string' ? children :
    React.Children.map(children, child =>
      typeof child === 'string' ? child : ''
    )?.join('') || ''

  const lines = codeContent.split('\n')

  const renderLineNumbers = () => {
    return lines.map((_, index) => (
      <span key={index} className="jadis-code-block__line-number">
        {String(index + 1).padStart(3, ' ')}
      </span>
    ))
  }

  const renderCodeLines = () => {
    return lines.map((line, index) => (
      <span key={index} className="jadis-code-block__code-line">
        {line || '\u00A0'}
      </span>
    ))
  }

  return (
    <div className={classes}>
      {title && (
        <div className="jadis-code-block__header">
          <div className="jadis-code-block__title">
            {language && (
              <span className="jadis-code-block__language">[{language.toUpperCase()}]</span>
            )}
            {title}
          </div>
          {copyable && (
            <button
              type="button"
              className="jadis-code-block__copy"
              onClick={handleCopy}
              title="Copy code"
            >
              ▣
            </button>
          )}
        </div>
      )}
      <pre className="jadis-code-block__pre" {...props}>
        {numbered && (
          <div className="jadis-code-block__line-numbers">
            {renderLineNumbers()}
          </div>
        )}
        <code ref={codeRef} className="jadis-code-block__code" data-language={language}>
          {numbered ? renderCodeLines() : children}
        </code>
        {copyable && !title && (
          <button
            type="button"
            className="jadis-code-block__copy jadis-code-block__copy--floating"
            onClick={handleCopy}
            title="Copy code"
          >
            ▣
          </button>
        )}
      </pre>
    </div>
  )
}

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: CodeBlockVariant
  size?: CodeBlockSize
  glow?: 'none' | 'sm' | 'md' | 'lg'
  copyable?: boolean
  onCopy?: (code: string) => void
}

export const InlineCode: React.FC<InlineCodeProps> = ({
  children,
  variant = 'terminal',
  size = 'medium',
  glow = 'none',
  copyable = false,
  onCopy,
  className,
  ...props
}) => {
  const classes = [
    'jadis-inline-code',
    `jadis-inline-code--${variant}`,
    `jadis-inline-code--${size}`,
    glow !== 'none' && `jadis-inline-code--glow-${glow}`,
    copyable && 'jadis-inline-code--copyable',
    className
  ].filter(Boolean).join(' ')

  const handleCopy = async () => {
    if (onCopy) {
      const codeText = typeof children === 'string' ? children :
        React.Children.map(children, child =>
          typeof child === 'string' ? child : ''
        )?.join('') || ''

      try {
        await navigator.clipboard.writeText(codeText)
        onCopy(codeText)
      } catch (err) {
        console.warn('Failed to copy to clipboard:', err)
        onCopy(codeText)
      }
    }
  }

  return (
    <code className={classes} {...props}>
      {children}
      {copyable && (
        <button
          type="button"
          className="jadis-inline-code__copy"
          onClick={handleCopy}
          title="Copy code"
        >
          ▣
        </button>
      )}
    </code>
  )
}

export interface SyntaxHighlightProps extends CodeBlockProps {
  theme?: 'dark' | 'light' | 'matrix' | 'amber'
}

export const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({
  theme = 'dark',
  className,
  ...props
}) => {
  const classes = [
    'jadis-syntax-highlight',
    `jadis-syntax-highlight--${theme}`,
    className
  ].filter(Boolean).join(' ')

  return <CodeBlock className={classes} {...props} />
}