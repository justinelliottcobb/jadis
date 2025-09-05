import React from 'react'
import './Buttons.scss'

// Common Types
export type ButtonVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type ButtonSize = 'small' | 'medium' | 'large' | 'full'
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'

// ===================================
// BASE BUTTON COMPONENT
// ===================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  active?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  ripple?: boolean
  glow?: boolean
  outline?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'terminal',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  loading = false,
  disabled = false,
  active = false,
  icon,
  iconPosition = 'left',
  ripple = false,
  glow = false,
  outline = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const [isRippling, setIsRippling] = React.useState(false)
  const [rippleCoords, setRippleCoords] = React.useState({ x: -1, y: -1 })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !disabled && !loading) {
      const rect = e.currentTarget.getBoundingClientRect()
      setRippleCoords({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      })
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 600)
    }
    onClick?.(e)
  }

  const classes = [
    'jadis-button',
    `jadis-button--${variant}`,
    `jadis-button--${size}`,
    `jadis-button--${color}`,
    fullWidth && 'jadis-button--full-width',
    loading && 'jadis-button--loading',
    disabled && 'jadis-button--disabled',
    active && 'jadis-button--active',
    glow && 'jadis-button--glow',
    outline && 'jadis-button--outline',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <span className="jadis-button__loader" aria-hidden="true">
          {variant === 'terminal' ? '[■□□]' : '◌'}
        </span>
      )}
      
      {icon && iconPosition === 'left' && (
        <span className="jadis-button__icon jadis-button__icon--left">
          {icon}
        </span>
      )}
      
      <span className="jadis-button__content">
        {children}
      </span>
      
      {icon && iconPosition === 'right' && (
        <span className="jadis-button__icon jadis-button__icon--right">
          {icon}
        </span>
      )}

      {ripple && isRippling && (
        <span 
          className="jadis-button__ripple"
          style={{
            left: rippleCoords.x,
            top: rippleCoords.y
          }}
        />
      )}
    </button>
  )
}

// ===================================
// ICON BUTTON COMPONENT
// ===================================

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> {
  icon: React.ReactNode
  label?: string // For accessibility
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  size = 'medium',
  className = '',
  ...props
}) => {
  return (
    <Button
      className={`jadis-button--icon-only ${className}`}
      size={size}
      aria-label={label}
      {...props}
    >
      {icon}
    </Button>
  )
}

// ===================================
// BUTTON GROUP COMPONENT
// ===================================

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  vertical?: boolean
  fullWidth?: boolean
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = 'terminal',
  size = 'medium',
  vertical = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-button-group',
    `jadis-button-group--${variant}`,
    vertical && 'jadis-button-group--vertical',
    fullWidth && 'jadis-button-group--full-width',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Button) {
          return React.cloneElement(child as React.ReactElement<ButtonProps>, {
            variant,
            size,
            ...child.props
          })
        }
        return child
      })}
    </div>
  )
}

// ===================================
// LINK BUTTON COMPONENT
// ===================================

export interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string
  target?: string
  rel?: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  target,
  rel,
  className = '',
  children,
  ...buttonProps
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`jadis-button-link ${className}`}
      style={{ textDecoration: 'none' }}
    >
      <Button {...buttonProps}>
        {children}
      </Button>
    </a>
  )
}

// ===================================
// TOGGLE BUTTON COMPONENT
// ===================================

export interface ToggleButtonProps extends Omit<ButtonProps, 'active'> {
  pressed?: boolean
  onToggle?: (pressed: boolean) => void
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  pressed = false,
  onToggle,
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onToggle?.(!pressed)
    onClick?.(e)
  }

  return (
    <Button
      active={pressed}
      aria-pressed={pressed}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  )
}

// ===================================
// FLOATING ACTION BUTTON
// ===================================

export interface FABProps extends Omit<ButtonProps, 'fullWidth' | 'size'> {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  extended?: boolean
}

export const FAB: React.FC<FABProps> = ({
  position = 'bottom-right',
  extended = false,
  className = '',
  children,
  icon,
  ...props
}) => {
  const classes = [
    'jadis-fab',
    `jadis-fab--${position}`,
    extended && 'jadis-fab--extended',
    className
  ].filter(Boolean).join(' ')

  return (
    <Button
      className={classes}
      size="large"
      glow
      icon={icon}
      {...props}
    >
      {extended && children}
    </Button>
  )
}