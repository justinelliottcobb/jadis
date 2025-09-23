import React from 'react'
import { ASCIIIcon } from '../Icons/Icons'
import './Layout.scss'

// Common Types
export type LayoutVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'

// ===================================
// PAGE LAYOUT COMPONENT
// ===================================

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LayoutVariant
  header?: React.ReactNode
  footer?: React.ReactNode
  sidebar?: React.ReactNode
  sidebarCollapsed?: boolean
  onSidebarToggle?: () => void
  fullHeight?: boolean
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  variant = 'terminal',
  header,
  footer,
  sidebar,
  sidebarCollapsed = false,
  onSidebarToggle,
  fullHeight = true,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-page-layout',
    `jadis-page-layout--${variant}`,
    fullHeight && 'jadis-page-layout--full-height',
    sidebar && 'jadis-page-layout--with-sidebar',
    sidebarCollapsed && 'jadis-page-layout--sidebar-collapsed',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {header && (
        <header className="jadis-page-layout__header">
          {header}
        </header>
      )}
      
      <div className="jadis-page-layout__body">
        {sidebar && (
          <aside className={`jadis-page-layout__sidebar jadis-page-layout__sidebar--${variant}`}>
            {sidebar}
          </aside>
        )}
        
        <main className="jadis-page-layout__main">
          {children}
        </main>
      </div>
      
      {footer && (
        <footer className="jadis-page-layout__footer">
          {footer}
        </footer>
      )}
    </div>
  )
}

// ===================================
// APP HEADER COMPONENT
// ===================================

export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  title?: string
  subtitle?: string
  logo?: React.ReactNode
  actions?: React.ReactNode
  breadcrumbs?: React.ReactNode
  bordered?: boolean
  compact?: boolean
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  variant = 'terminal',
  title,
  subtitle,
  logo,
  actions,
  breadcrumbs,
  bordered = true,
  compact = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-app-header',
    `jadis-app-header--${variant}`,
    bordered && 'jadis-app-header--bordered',
    compact && 'jadis-app-header--compact',
    className
  ].filter(Boolean).join(' ')

  return (
    <header className={classes} {...props}>
      <div className="jadis-app-header__container">
        <div className="jadis-app-header__main">
          {logo && (
            <div className="jadis-app-header__logo">
              {logo}
            </div>
          )}
          
          {(title || subtitle) && (
            <div className="jadis-app-header__titles">
              {title && (
                <h1 className="jadis-app-header__title">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="jadis-app-header__subtitle">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {children}
        </div>
        
        {actions && (
          <div className="jadis-app-header__actions">
            {actions}
          </div>
        )}
      </div>
      
      {breadcrumbs && (
        <div className="jadis-app-header__breadcrumbs">
          {breadcrumbs}
        </div>
      )}
    </header>
  )
}

// ===================================
// APP FOOTER COMPONENT
// ===================================

export interface AppFooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  copyright?: string
  links?: Array<{ label: string; href: string; icon?: string }>
  social?: Array<{ platform: string; href: string; icon: string }>
  bordered?: boolean
  compact?: boolean
}

export const AppFooter: React.FC<AppFooterProps> = ({
  variant = 'terminal',
  copyright,
  links = [],
  social = [],
  bordered = true,
  compact = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-app-footer',
    `jadis-app-footer--${variant}`,
    bordered && 'jadis-app-footer--bordered',
    compact && 'jadis-app-footer--compact',
    className
  ].filter(Boolean).join(' ')

  return (
    <footer className={classes} {...props}>
      <div className="jadis-app-footer__container">
        <div className="jadis-app-footer__content">
          {children}
          
          {links.length > 0 && (
            <div className="jadis-app-footer__links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="jadis-app-footer__link"
                >
                  {link.icon && (
                    <ASCIIIcon icon={link.icon} variant={variant} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
        
        <div className="jadis-app-footer__meta">
          {social.length > 0 && (
            <div className="jadis-app-footer__social">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="jadis-app-footer__social-link"
                  title={item.platform}
                >
                  <ASCIIIcon icon={item.icon} variant={variant} />
                </a>
              ))}
            </div>
          )}
          
          {copyright && (
            <div className="jadis-app-footer__copyright">
              {copyright}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

// ===================================
// SIDEBAR COMPONENT
// ===================================

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  collapsed?: boolean
  position?: 'left' | 'right'
  width?: string
  collapsedWidth?: string
  overlay?: boolean
  onToggle?: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  variant = 'terminal',
  collapsed = false,
  position = 'left',
  width = '280px',
  collapsedWidth = '60px',
  overlay = false,
  onToggle,
  className = '',
  children,
  style,
  ...props
}) => {
  const classes = [
    'jadis-sidebar',
    `jadis-sidebar--${variant}`,
    `jadis-sidebar--${position}`,
    collapsed && 'jadis-sidebar--collapsed',
    overlay && 'jadis-sidebar--overlay',
    className
  ].filter(Boolean).join(' ')

  const sidebarStyle = {
    width: collapsed ? collapsedWidth : width,
    ...style
  }

  return (
    <>
      <aside className={classes} style={sidebarStyle} {...props}>
        {onToggle && (
          <button
            className="jadis-sidebar__toggle"
            onClick={onToggle}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ASCIIIcon 
              icon={collapsed ? '►' : '◄'} 
              variant={variant} 
            />
          </button>
        )}
        
        <div className="jadis-sidebar__content">
          {children}
        </div>
      </aside>
      
      {overlay && !collapsed && (
        <div 
          className="jadis-sidebar__backdrop"
          onClick={onToggle}
        />
      )}
    </>
  )
}

// ===================================
// BREADCRUMBS COMPONENT
// ===================================

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
  active?: boolean
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  items: BreadcrumbItem[]
  separator?: string
  showHome?: boolean
  homeIcon?: string
  maxItems?: number
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  variant = 'terminal',
  items,
  separator = '►',
  showHome = true,
  homeIcon = '▣',
  maxItems,
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-breadcrumbs',
    `jadis-breadcrumbs--${variant}`,
    className
  ].filter(Boolean).join(' ')

  let displayItems = [...items]
  
  // Add home item if requested
  if (showHome && displayItems.length > 0 && displayItems[0].href !== '/') {
    displayItems.unshift({
      label: 'Home',
      href: '/',
      icon: homeIcon
    })
  }

  // Truncate if maxItems specified
  if (maxItems && displayItems.length > maxItems) {
    const firstItems = displayItems.slice(0, 1)
    const lastItems = displayItems.slice(-(maxItems - 2))
    displayItems = [
      ...firstItems,
      { label: '...', active: false },
      ...lastItems
    ]
  }

  return (
    <nav className={classes} aria-label="Breadcrumb" {...props}>
      <ol className="jadis-breadcrumbs__list">
        {displayItems.map((item, index) => (
          <li key={index} className="jadis-breadcrumbs__item">
            {item.href && !item.active ? (
              <a 
                href={item.href} 
                className="jadis-breadcrumbs__link"
              >
                {item.icon && (
                  <ASCIIIcon icon={item.icon} variant={variant} />
                )}
                {item.label}
              </a>
            ) : (
              <span 
                className={`jadis-breadcrumbs__text ${item.active ? 'jadis-breadcrumbs__text--active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.icon && (
                  <ASCIIIcon icon={item.icon} variant={variant} />
                )}
                {item.label}
              </span>
            )}
            
            {index < displayItems.length - 1 && (
              <span className="jadis-breadcrumbs__separator" aria-hidden="true">
                <ASCIIIcon icon={separator} variant={variant} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ===================================
// STATUS BAR COMPONENT
// ===================================

export interface StatusBarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  items?: Array<{
    label: string
    value?: string
    icon?: string
    color?: string
    href?: string
  }>
  position?: 'top' | 'bottom'
}

export const StatusBar: React.FC<StatusBarProps> = ({
  variant = 'terminal',
  items = [],
  position = 'bottom',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-status-bar',
    `jadis-status-bar--${variant}`,
    `jadis-status-bar--${position}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jadis-status-bar__container">
        {children}
        
        {items.length > 0 && (
          <div className="jadis-status-bar__items">
            {items.map((item, index) => (
              <div key={index} className="jadis-status-bar__item">
                {item.href ? (
                  <a href={item.href} className="jadis-status-bar__link">
                    {item.icon && (
                      <ASCIIIcon icon={item.icon} variant={variant} />
                    )}
                    <span className="jadis-status-bar__label">{item.label}</span>
                    {item.value && (
                      <span className="jadis-status-bar__value">{item.value}</span>
                    )}
                  </a>
                ) : (
                  <>
                    {item.icon && (
                      <ASCIIIcon icon={item.icon} variant={variant} />
                    )}
                    <span className="jadis-status-bar__label">{item.label}</span>
                    {item.value && (
                      <span className="jadis-status-bar__value">{item.value}</span>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ===================================
// HERO BANNER COMPONENT
// ===================================

export interface HeroBannerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  title: string
  subtitle?: string
  description?: string
  actions?: React.ReactNode
  image?: React.ReactNode
  backgroundPattern?: 'dots' | 'lines' | 'grid' | 'matrix' | 'none'
  size?: 'small' | 'medium' | 'large' | 'full'
  align?: 'left' | 'center' | 'right'
  overlay?: boolean
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  variant = 'terminal',
  title,
  subtitle,
  description,
  actions,
  image,
  backgroundPattern = 'none',
  size = 'medium',
  align = 'center',
  overlay = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-hero-banner',
    `jadis-hero-banner--${variant}`,
    `jadis-hero-banner--${size}`,
    `jadis-hero-banner--${align}`,
    `jadis-hero-banner--pattern-${backgroundPattern}`,
    overlay && 'jadis-hero-banner--overlay',
    className
  ].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
      <div className="jadis-hero-banner__container">
        <div className="jadis-hero-banner__content">
          <h1 className="jadis-hero-banner__title">
            {title}
          </h1>
          
          {subtitle && (
            <div className="jadis-hero-banner__subtitle">
              {subtitle}
            </div>
          )}
          
          {description && (
            <p className="jadis-hero-banner__description">
              {description}
            </p>
          )}
          
          {actions && (
            <div className="jadis-hero-banner__actions">
              {actions}
            </div>
          )}
          
          {children}
        </div>
        
        {image && (
          <div className="jadis-hero-banner__image">
            {image}
          </div>
        )}
      </div>
    </section>
  )
}

// ===================================
// PAGE BANNER COMPONENT
// ===================================

export interface PageBannerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  type?: 'info' | 'success' | 'warning' | 'error' | 'announcement'
  title?: string
  message: string
  icon?: React.ReactNode
  actions?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  position?: 'top' | 'inline'
  compact?: boolean
}

export const PageBanner: React.FC<PageBannerProps> = ({
  variant = 'terminal',
  type = 'info',
  title,
  message,
  icon,
  actions,
  dismissible = false,
  onDismiss,
  position = 'inline',
  compact = false,
  className = '',
  children,
  ...props
}) => {
  const [isDismissed, setIsDismissed] = React.useState(false)

  if (isDismissed) {
    return null
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    onDismiss?.()
  }

  const classes = [
    'jadis-page-banner',
    `jadis-page-banner--${variant}`,
    `jadis-page-banner--${type}`,
    `jadis-page-banner--${position}`,
    compact && 'jadis-page-banner--compact',
    className
  ].filter(Boolean).join(' ')

  const defaultIcons = {
    info: '○',
    success: '●',
    warning: '◈',
    error: '◎',
    announcement: '◆'
  }

  return (
    <div className={classes} role="alert" {...props}>
      <div className="jadis-page-banner__container">
        <div className="jadis-page-banner__content">
          {(icon || defaultIcons[type]) && (
            <div className="jadis-page-banner__icon">
              {icon || <ASCIIIcon icon={defaultIcons[type]} variant={variant} />}
            </div>
          )}
          
          <div className="jadis-page-banner__text">
            {title && (
              <div className="jadis-page-banner__title">
                {title}
              </div>
            )}
            <div className="jadis-page-banner__message">
              {message}
            </div>
            {children}
          </div>
          
          {actions && (
            <div className="jadis-page-banner__actions">
              {actions}
            </div>
          )}
        </div>
        
        {dismissible && (
          <button
            className="jadis-page-banner__dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <ASCIIIcon icon="✕" variant={variant} />
          </button>
        )}
      </div>
    </div>
  )
}

// ===================================
// FEATURE SECTION COMPONENT
// ===================================

export interface FeatureSectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LayoutVariant
  title?: string
  subtitle?: string
  features: Array<{
    icon?: React.ReactNode
    title: string
    description: string
    action?: React.ReactNode
  }>
  columns?: 1 | 2 | 3 | 4
  align?: 'left' | 'center' | 'right'
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  variant = 'terminal',
  title,
  subtitle,
  features,
  columns = 3,
  align = 'center',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-feature-section',
    `jadis-feature-section--${variant}`,
    `jadis-feature-section--${align}`,
    `jadis-feature-section--cols-${columns}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <section className={classes} {...props}>
      {(title || subtitle) && (
        <div className="jadis-feature-section__header">
          {title && (
            <h2 className="jadis-feature-section__title">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="jadis-feature-section__subtitle">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="jadis-feature-section__grid">
        {features.map((feature, index) => (
          <div key={index} className="jadis-feature-section__item">
            {feature.icon && (
              <div className="jadis-feature-section__icon">
                {feature.icon}
              </div>
            )}
            <h3 className="jadis-feature-section__item-title">
              {feature.title}
            </h3>
            <p className="jadis-feature-section__item-description">
              {feature.description}
            </p>
            {feature.action && (
              <div className="jadis-feature-section__item-action">
                {feature.action}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {children}
    </section>
  )
}