import React from 'react'
import './Headers.scss'

export interface HeaderProps {
  children: React.ReactNode
  variant?: 'box' | 'double-line' | 'dashed' | 'solid' | 'simple'
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const H1: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'box', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h1'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h1 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h1>
  )
}

export const H2: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'double-line', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h2'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h2 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h2>
  )
}

export const H3: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'dashed', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h3'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h3 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h3>
  )
}

export const H4: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'solid', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h4'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h4 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h4>
  )
}

export const H5: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'simple', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h5'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h5 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h5>
  )
}

export const H6: React.FC<HeaderProps> = ({ 
  children, 
  variant = 'simple', 
  align = 'left',
  className = '',
  ...props 
}) => {
  const baseClass = 'jadis-h6'
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${align} ${className}`.trim()
  
  return (
    <h6 className={classes} {...props}>
      <span className={`${baseClass}__content`}>
        {children}
      </span>
    </h6>
  )
}