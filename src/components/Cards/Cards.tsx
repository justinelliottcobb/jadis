import React from 'react'
import './Cards.scss'

// Common Types
export type CardVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type CardSize = 'small' | 'medium' | 'large' | 'full'
export type CardStatus = 'success' | 'warning' | 'error' | 'info'

// ===================================
// BASE CARD COMPONENT
// ===================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  size?: CardSize
  interactive?: boolean
  disabled?: boolean
  status?: CardStatus
  terminalWindow?: boolean
}

export const Card: React.FC<CardProps> = ({
  variant = 'terminal',
  size = 'medium',
  interactive = false,
  disabled = false,
  status,
  terminalWindow = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-card',
    `jadis-card--${variant}`,
    `jadis-card--${size}`,
    interactive && 'jadis-card--interactive',
    disabled && 'jadis-card--disabled',
    status && 'jadis-card--status',
    status && `jadis-card--${status}`,
    terminalWindow && 'jadis-card--terminal-window',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jadis-card__content">
        {children}
      </div>
    </div>
  )
}

// ===================================
// CARD HEADER COMPONENT
// ===================================

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  actions,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`jadis-card__header ${className}`} {...props}>
      {(title || subtitle) && (
        <div>
          {title && <h3 className="jadis-card__title">{title}</h3>}
          {subtitle && <p className="jadis-card__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
      {actions && <div className="jadis-card__actions">{actions}</div>}
    </div>
  )
}

// ===================================
// CARD BODY/CONTENT COMPONENT
// ===================================

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  // Empty interface for potential future extension
}

export const CardBody: React.FC<CardBodyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`jadis-card__body ${className}`} {...props}>
      {children}
    </div>
  )
}

// ===================================
// CARD FOOTER COMPONENT
// ===================================

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = ({
  actions,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`jadis-card__footer ${className}`} {...props}>
      {children}
      {actions && <div className="jadis-card__actions">{actions}</div>}
    </div>
  )
}

// ===================================
// CARD ACTIONS COMPONENT
// ===================================

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right' | 'between'
}

export const CardActions: React.FC<CardActionsProps> = ({
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center', 
    right: 'justify-end',
    between: 'justify-between'
  }[align]

  return (
    <div 
      className={`jadis-card__actions ${alignmentClass} ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}

// ===================================
// SPECIALIZED CARD COMPONENTS
// ===================================

// Terminal Window Card
export interface TerminalCardProps extends Omit<CardProps, 'variant' | 'terminalWindow'> {
  title?: string
  command?: string
}

export const TerminalCard: React.FC<TerminalCardProps> = ({
  title = 'Terminal',
  command,
  children,
  ...props
}) => {
  return (
    <Card variant="terminal" terminalWindow {...props}>
      <CardHeader title={title} />
      <CardBody>
        {command && (
          <div style={{ 
            marginBottom: '1rem', 
            color: 'var(--jadis-color-green)', 
            opacity: 0.7 
          }}>
            $ {command}
          </div>
        )}
        {children}
      </CardBody>
    </Card>
  )
}

// Status Card
export interface StatusCardProps extends CardProps {
  title: string
  message: string
  status: CardStatus
}

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  message,
  status,
  ...props
}) => {
  const statusIcons = {
    success: '✓',
    warning: '⚠',
    error: '✗',
    info: 'ⓘ'
  }

  return (
    <Card status={status} {...props}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.2rem' }}>{statusIcons[status]}</span>
          <h3 className="jadis-card__title">{title}</h3>
        </div>
      </CardHeader>
      <CardBody>
        {message}
      </CardBody>
    </Card>
  )
}

// Data Card
export interface DataCardProps extends CardProps {
  label: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
}

export const DataCard: React.FC<DataCardProps> = ({
  label,
  value,
  unit,
  trend,
  ...props
}) => {
  const trendIcons = {
    up: '↗',
    down: '↘', 
    neutral: '→'
  }

  return (
    <Card size="small" {...props}>
      <CardBody>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '0.8rem', 
            opacity: 0.7,
            marginBottom: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {label}
          </div>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'var(--jadis-font-bold)',
            lineHeight: 1,
            marginBottom: '0.25rem'
          }}>
            {value}
            {unit && <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{unit}</span>}
          </div>
          {trend && (
            <div style={{ 
              fontSize: '0.9rem',
              opacity: 0.6
            }}>
              {trendIcons[trend]}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}