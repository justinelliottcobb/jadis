import React from 'react'
import './Navbar.scss'

// Common Types
export type NavbarVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type NavbarPosition = 'fixed' | 'sticky' | 'static'
export type NavbarAlign = 'left' | 'center' | 'right' | 'space-between' | 'space-around'

// ===================================
// NAVBAR COMPONENT
// ===================================

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: NavbarVariant
  position?: NavbarPosition
  align?: NavbarAlign
  bordered?: boolean
  transparent?: boolean
  collapse?: boolean
  brand?: React.ReactNode
  actions?: React.ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({
  variant = 'terminal',
  position = 'static',
  align = 'space-between',
  bordered = true,
  transparent = false,
  collapse = true,
  brand,
  actions,
  className = '',
  children,
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  
  const classes = [
    'jadis-navbar',
    `jadis-navbar--${variant}`,
    `jadis-navbar--${position}`,
    `jadis-navbar--${align}`,
    bordered && 'jadis-navbar--bordered',
    transparent && 'jadis-navbar--transparent',
    collapse && 'jadis-navbar--collapse',
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <nav className={classes} {...props}>
      <div className="jadis-navbar__container">
        {brand && (
          <div className="jadis-navbar__brand">
            {brand}
          </div>
        )}
        
        {collapse && (
          <button
            className="jadis-navbar__toggle"
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={!isCollapsed}
          >
            <span className="jadis-navbar__toggle-icon">
              {isCollapsed ? '≡' : '✕'}
            </span>
          </button>
        )}
        
        <div className={`jadis-navbar__content ${isCollapsed ? 'jadis-navbar__content--collapsed' : ''}`}>
          {children && (
            <div className="jadis-navbar__nav">
              {children}
            </div>
          )}
          
          {actions && (
            <div className="jadis-navbar__actions">
              {actions}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

// ===================================
// NAVBAR BRAND COMPONENT
// ===================================

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NavbarVariant
  href?: string
  logo?: React.ReactNode
  text?: string
  interactive?: boolean
}

export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  variant = 'terminal',
  href,
  logo,
  text,
  interactive = true,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const classes = [
    'jadis-navbar-brand',
    `jadis-navbar-brand--${variant}`,
    interactive && 'jadis-navbar-brand--interactive',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {logo && <span className="jadis-navbar-brand__logo">{logo}</span>}
      {text && <span className="jadis-navbar-brand__text">{text}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {content}
      </a>
    )
  }

  return (
    <div className={classes} onClick={onClick} {...props}>
      {content}
    </div>
  )
}

// ===================================
// NAVBAR ITEM COMPONENT
// ===================================

export interface NavbarItemProps extends React.HTMLAttributes<HTMLElement> {
  variant?: NavbarVariant
  href?: string
  active?: boolean
  disabled?: boolean
  dropdown?: boolean
  icon?: React.ReactNode
  badge?: string | number
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  variant = 'terminal',
  href,
  active = false,
  disabled = false,
  dropdown = false,
  icon,
  badge,
  className = '',
  children,
  onClick,
  ...props
}) => {
  const classes = [
    'jadis-navbar-item',
    `jadis-navbar-item--${variant}`,
    active && 'jadis-navbar-item--active',
    disabled && 'jadis-navbar-item--disabled',
    dropdown && 'jadis-navbar-item--dropdown',
    className
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <span className="jadis-navbar-item__icon">{icon}</span>}
      <span className="jadis-navbar-item__text">{children}</span>
      {badge && <span className="jadis-navbar-item__badge">{badge}</span>}
      {dropdown && <span className="jadis-navbar-item__arrow">▼</span>}
    </>
  )

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {content}
      </a>
    )
  }

  return (
    <span className={classes} onClick={!disabled ? onClick : undefined} {...props}>
      {content}
    </span>
  )
}

// ===================================
// NAVBAR NAV COMPONENT
// ===================================

export interface NavbarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NavbarVariant
  direction?: 'horizontal' | 'vertical'
  align?: 'left' | 'center' | 'right'
}

export const NavbarNav: React.FC<NavbarNavProps> = ({
  variant = 'terminal',
  direction = 'horizontal',
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-navbar-nav',
    `jadis-navbar-nav--${variant}`,
    `jadis-navbar-nav--${direction}`,
    `jadis-navbar-nav--${align}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// ===================================
// NAVBAR DROPDOWN COMPONENT
// ===================================

export interface NavbarDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NavbarVariant
  trigger: React.ReactNode
  position?: 'left' | 'right' | 'center'
  show?: boolean
  onToggle?: (show: boolean) => void
}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  variant = 'terminal',
  trigger,
  position = 'left',
  show: controlledShow,
  onToggle,
  className = '',
  children,
  ...props
}) => {
  const [internalShow, setInternalShow] = React.useState(false)
  const isControlled = controlledShow !== undefined
  const show = isControlled ? controlledShow : internalShow
  
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const classes = [
    'jadis-navbar-dropdown',
    `jadis-navbar-dropdown--${variant}`,
    `jadis-navbar-dropdown--${position}`,
    show && 'jadis-navbar-dropdown--show',
    className
  ].filter(Boolean).join(' ')

  const handleToggle = () => {
    const newShow = !show
    if (isControlled) {
      onToggle?.(newShow)
    } else {
      setInternalShow(newShow)
    }
  }

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isControlled) {
          onToggle?.(false)
        } else {
          setInternalShow(false)
        }
      }
    }

    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [show, isControlled, onToggle])

  return (
    <div className={classes} ref={dropdownRef} {...props}>
      <div className="jadis-navbar-dropdown__trigger" onClick={handleToggle}>
        {trigger}
      </div>
      {show && (
        <div className="jadis-navbar-dropdown__menu">
          <div className="jadis-navbar-dropdown__content">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}