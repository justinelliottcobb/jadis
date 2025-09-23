import React from 'react'
import './Label.scss'
import { ASCIIArt } from '../ImageArea'

export type LabelVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type LabelStyle = 'solid' | 'outline' | 'ghost' | 'filled'
export type LabelAlign = 'left' | 'center' | 'right'

// ===================================
// BASE LABEL COMPONENT
// ===================================

export interface LabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: LabelVariant
  size?: LabelSize
  style?: LabelStyle
  align?: LabelAlign
  text?: string
  children?: React.ReactNode
  bordered?: boolean
  animated?: boolean
  glitch?: boolean
  scanlines?: boolean
  phosphor?: boolean
  pixelated?: boolean
  pulse?: boolean
  typewriter?: boolean
  fixedWidth?: boolean
  fontFamily?: 'mono' | 'ascii' | 'pixel'
  uppercase?: boolean
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  badge?: string | number
  status?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

export const Label: React.FC<LabelProps> = ({
  variant = 'terminal',
  size = 'md',
  style = 'solid',
  align = 'left',
  text,
  children,
  bordered = false,
  animated = false,
  glitch = false,
  scanlines = false,
  phosphor = false,
  pixelated = false,
  pulse = false,
  typewriter = false,
  fixedWidth = false,
  fontFamily = 'mono',
  uppercase = false,
  padding = 'sm',
  icon,
  badge,
  status = 'default',
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-label',
    `jadis-label--${variant}`,
    `jadis-label--${size}`,
    `jadis-label--${style}`,
    `jadis-label--${align}`,
    `jadis-label--font-${fontFamily}`,
    `jadis-label--padding-${padding}`,
    `jadis-label--status-${status}`,
    bordered && 'jadis-label--bordered',
    animated && 'jadis-label--animated',
    glitch && 'jadis-fx-glitch-static',
    scanlines && 'jadis-fx-scanlines',
    phosphor && 'jadis-fx-phosphor',
    pixelated && 'jadis-fx-pixelated',
    pulse && 'jadis-label--pulse',
    typewriter && 'jadis-label--typewriter',
    fixedWidth && 'jadis-label--fixed-width',
    uppercase && 'jadis-label--uppercase',
    icon && 'jadis-label--with-icon',
    badge && 'jadis-label--with-badge',
    className
  ].filter(Boolean).join(' ')

  const content = text || children

  return (
    <div {...props} className={classes} role="img" aria-label={typeof content === 'string' ? content : undefined}>
      <div className="jadis-label__container">
        {icon && (
          <span className="jadis-label__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        
        <span className="jadis-label__content">
          {typewriter ? (
            <span className="jadis-label__typewriter" data-text={content}>
              {content}
            </span>
          ) : (
            content
          )}
        </span>
        
        {badge && (
          <span className="jadis-label__badge" aria-label={`Badge: ${badge}`}>
            {badge}
          </span>
        )}
      </div>
      
      {/* Effects Overlay */}
      <div className="jadis-label__overlay" aria-hidden="true"></div>
    </div>
  )
}

// ===================================
// ASCII LABEL COMPONENT
// ===================================

export interface ASCIILabelProps extends Omit<LabelProps, 'text' | 'children'> {
  text: string
  asciiStyle?: 'block' | 'outline' | 'shadow' | 'double' | 'thick' | 'thin' | 'rounded' | 'digital'
  asciiWidth?: number
  asciiHeight?: number
  customPattern?: string
  artVariant?: LabelVariant
  artEffects?: {
    glitch?: boolean
    scanlines?: boolean
    phosphor?: boolean
    crt?: boolean
    pixelated?: boolean
    posterized?: boolean
    animated?: boolean
  }
}

export const ASCIILabel: React.FC<ASCIILabelProps> = ({
  text,
  asciiStyle = 'block',
  asciiWidth = 80,
  asciiHeight = 20,
  customPattern,
  artVariant,
  artEffects = {},
  variant = 'terminal',
  ...props
}) => {
  // Generate ASCII art for the text
  const generateASCIIText = (text: string, style: string): string => {
    const patterns = {
      block: {
        chars: ['█', '▓', '▒', '░'],
        height: 3
      },
      outline: {
        chars: ['╔', '╗', '╚', '╝', '║', '═'],
        height: 3
      },
      shadow: {
        chars: ['▄', '▀', '█', '▌', '▐'],
        height: 3
      },
      double: {
        chars: ['╬', '╦', '╩', '╠', '╣'],
        height: 3
      },
      thick: {
        chars: ['█', '▆', '▄', '▂'],
        height: 4
      },
      thin: {
        chars: ['│', '─', '┌', '┐', '└', '┘'],
        height: 2
      },
      rounded: {
        chars: ['╭', '╮', '╯', '╰', '─', '│'],
        height: 3
      },
      digital: {
        chars: ['█', '▓', '▒', '░', '▄', '▀'],
        height: 5
      }
    }

    const pattern = patterns[style as keyof typeof patterns] || patterns.block
    
    if (customPattern) {
      return customPattern
    }
    
    // Simple ASCII art generation - this could be enhanced
    const lines = []
    for (let i = 0; i < pattern.height; i++) {
      let line = ''
      for (const char of text) {
        if (char === ' ') {
          line += '   '
        } else {
          // Generate pattern based on character and line
          const charIndex = char.charCodeAt(0) % pattern.chars.length
          const linePattern = pattern.chars[charIndex].repeat(3)
          line += linePattern
        }
      }
      lines.push(line)
    }
    
    return lines.join('\n')
  }

  const asciiArt = generateASCIIText(text, asciiStyle)

  return (
    <Label {...props} variant={variant}>
      <ASCIIArt
        variant={artVariant || variant}
        art={asciiArt}
        width={asciiWidth}
        height={asciiHeight}
        glitch={artEffects.glitch}
        scanlines={artEffects.scanlines}
        phosphor={artEffects.phosphor}
        crt={artEffects.crt}
        pixelated={artEffects.pixelated}
        posterized={artEffects.posterized}
        animated={artEffects.animated}
        className="jadis-ascii-label__art"
      />
    </Label>
  )
}

// ===================================
// STATUS LABELS
// ===================================

export interface StatusLabelProps extends Omit<LabelProps, 'status' | 'children'> {
  status: 'online' | 'offline' | 'busy' | 'away' | 'error' | 'warning' | 'success' | 'loading'
  showIndicator?: boolean
  pulse?: boolean
}

export const StatusLabel: React.FC<StatusLabelProps> = ({
  status,
  showIndicator = true,
  pulse = true,
  ...props
}) => {
  const statusConfig = {
    online: { text: 'ONLINE', icon: '●', color: 'success' },
    offline: { text: 'OFFLINE', icon: '●', color: 'error' },
    busy: { text: 'BUSY', icon: '●', color: 'warning' },
    away: { text: 'AWAY', icon: '◐', color: 'warning' },
    error: { text: 'ERROR', icon: '✕', color: 'error' },
    warning: { text: 'WARNING', icon: '⚠', color: 'warning' },
    success: { text: 'SUCCESS', icon: '✓', color: 'success' },
    loading: { text: 'LOADING', icon: '◦', color: 'info' }
  }

  const config = statusConfig[status]

  return (
    <Label
      {...props}
      text={config.text}
      status={config.color as LabelStatus}
      icon={showIndicator ? config.icon : undefined}
      pulse={pulse}
      animated={status === 'loading'}
      uppercase
    />
  )
}

// ===================================
// BADGE LABELS
// ===================================

export interface BadgeLabelProps extends Omit<LabelProps, 'children'> {
  label: string
  value: string | number
  separator?: string
  valueStatus?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

export const BadgeLabel: React.FC<BadgeLabelProps> = ({
  label,
  value,
  separator = ': ',
  valueStatus = 'default',
  ...props
}) => {
  return (
    <Label {...props}>
      <span className="jadis-badge-label__label">{label}</span>
      <span className="jadis-badge-label__separator">{separator}</span>
      <span className={`jadis-badge-label__value jadis-badge-label__value--${valueStatus}`}>
        {value}
      </span>
    </Label>
  )
}

// ===================================
// ANIMATED LABELS
// ===================================

export interface AnimatedLabelProps extends LabelProps {
  animation?: 'typewriter' | 'fade' | 'slide' | 'bounce' | 'pulse' | 'glitch' | 'matrix' | 'wave'
  duration?: number
  delay?: number
  loop?: boolean
}

export const AnimatedLabel: React.FC<AnimatedLabelProps> = ({
  animation = 'typewriter',
  duration = 2000,
  delay = 0,
  loop = false,
  text,
  children,
  ...props
}) => {
  const animationClasses = {
    typewriter: 'jadis-label--typewriter',
    fade: 'jadis-label--fade-in',
    slide: 'jadis-label--slide-in',
    bounce: 'jadis-label--bounce',
    pulse: 'jadis-label--pulse',
    glitch: 'jadis-fx-glitch-static',
    matrix: 'jadis-label--matrix',
    wave: 'jadis-label--wave'
  }

  const style = {
    '--animation-duration': `${duration}ms`,
    '--animation-delay': `${delay}ms`,
    '--animation-iteration': loop ? 'infinite' : '1'
  } as React.CSSProperties

  return (
    <Label
      {...props}
      text={text}
      className={`${props.className || ''} ${animationClasses[animation]} jadis-label--animated`}
      style={{ ...style, ...props.style }}
      animated
    >
      {children}
    </Label>
  )
}