import React from 'react'
import './Typography.scss'

// Base typography props interface
export interface TypographyProps {
  children: React.ReactNode
  variant?: 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
  color?: 'green' | 'cyan' | 'yellow' | 'orange' | 'purple' | 'gray' | 'red' | 'blue' | 'white'
  glow?: 'none' | 'sm' | 'md' | 'lg'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  className?: string
}

// Paragraph component
export const P: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'terminal', 
  color = 'green',
  glow = 'sm',
  weight = 'normal',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-p'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

// Span component for inline text
export const Span: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'terminal', 
  color = 'green',
  glow = 'sm',
  weight = 'normal',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-span'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

// Code component for inline code
export interface CodeProps extends TypographyProps {
  language?: string
}

export const Code: React.FC<CodeProps> = ({ 
  children, 
  variant = 'matrix', 
  color = 'cyan',
  glow = 'md',
  weight = 'medium',
  className = '',
  language,
  ...props 
}) => {
  const baseClass = 'jadis-code'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <code className={classes} data-language={language} {...props}>
      {children}
    </code>
  )
}

// Pre component for code blocks
export const Pre: React.FC<CodeProps> = ({ 
  children, 
  variant = 'matrix', 
  color = 'cyan',
  glow = 'md',
  weight = 'normal',
  className = '',
  language,
  ...props 
}) => {
  const baseClass = 'jadis-pre'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <pre className={classes} data-language={language} {...props}>
      {children}
    </pre>
  )
}

// Blockquote component
export const Blockquote: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'retro', 
  color = 'yellow',
  glow = 'md',
  weight = 'medium',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-blockquote'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <blockquote className={classes} {...props}>
      <span className={`${baseClass}__quote-mark`}>»</span>
      <span className={`${baseClass}__content`}>{children}</span>
      <span className={`${baseClass}__quote-mark`}>«</span>
    </blockquote>
  )
}

// Strong/Bold component
export const Strong: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'glow', 
  color = 'white',
  glow = 'lg',
  weight = 'bold',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-strong'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <strong className={classes} {...props}>
      {children}
    </strong>
  )
}

// Em/Italic component
export const Em: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'retro', 
  color = 'purple',
  glow = 'sm',
  weight = 'medium',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-em'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <em className={classes} {...props}>
      {children}
    </em>
  )
}

// Small component
export const Small: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'minimal', 
  color = 'gray',
  glow = 'none',
  weight = 'light',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-small'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <small className={classes} {...props}>
      {children}
    </small>
  )
}

// Mark/Highlight component
export const Mark: React.FC<TypographyProps> = ({ 
  children, 
  variant = 'glow', 
  color = 'yellow',
  glow = 'lg',
  weight = 'semibold',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-mark'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${color} ${baseClass}--glow-${glow} ${baseClass}--${weight} ${className}`.trim()
  
  return (
    <mark className={classes} {...props}>
      {children}
    </mark>
  )
}