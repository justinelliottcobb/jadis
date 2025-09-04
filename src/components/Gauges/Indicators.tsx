import React from 'react'
import { ASCIIIcon } from '../Icons/Icons'
import './Gauges.scss'

// Common Types (reuse from Gauges)
export type IndicatorVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type IndicatorColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type IndicatorSize = 'small' | 'medium' | 'large'

// ===================================
// STATUS LIGHT COMPONENT
// ===================================

export interface StatusLightProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  status?: 'active' | 'inactive' | 'warning' | 'error' | 'success' | 'info'
  color?: IndicatorColor
  size?: IndicatorSize
  label?: string
  animated?: boolean
  pulse?: boolean
}

export const StatusLight: React.FC<StatusLightProps> = ({
  variant = 'terminal',
  status = 'inactive',
  color,
  size = 'medium',
  label,
  animated = false,
  pulse = false,
  className = '',
  ...props
}) => {
  const statusColor = color || (status === 'active' || status === 'success' ? 'success' : 
                               status === 'warning' ? 'warning' : 
                               status === 'error' ? 'error' : 
                               status === 'info' ? 'info' : 'secondary')
  
  const classes = [
    'jadis-status-light',
    `jadis-status-light--${variant}`,
    `jadis-status-light--${size}`,
    `jadis-status-light--${statusColor}`,
    animated && 'jadis-status-light--animated',
    pulse && 'jadis-status-light--pulse',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jadis-status-light__indicator" />
      {label && (
        <span className="jadis-status-light__label">{label}</span>
      )}
    </div>
  )
}

// ===================================
// STATUS BADGE COMPONENT
// ===================================

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  status?: 'online' | 'offline' | 'busy' | 'away' | 'error' | 'maintenance'
  color?: IndicatorColor
  size?: IndicatorSize
  icon?: string
  text?: string
  pulse?: boolean
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  variant = 'terminal',
  status = 'offline',
  color,
  size = 'medium',
  icon,
  text,
  pulse = false,
  className = '',
  ...props
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'online': return { color: 'success', icon: '●', text: 'ONLINE' }
      case 'busy': return { color: 'warning', icon: '◐', text: 'BUSY' }
      case 'away': return { color: 'warning', icon: '◯', text: 'AWAY' }
      case 'error': return { color: 'error', icon: '✗', text: 'ERROR' }
      case 'maintenance': return { color: 'info', icon: '⚡', text: 'MAINT' }
      default: return { color: 'secondary', icon: '○', text: 'OFFLINE' }
    }
  }

  const statusConfig = getStatusConfig()
  const badgeColor = color || statusConfig.color
  const badgeIcon = icon || statusConfig.icon
  const badgeText = text || statusConfig.text
  
  const classes = [
    'jadis-status-badge',
    `jadis-status-badge--${variant}`,
    `jadis-status-badge--${size}`,
    `jadis-status-badge--${badgeColor}`,
    pulse && 'jadis-status-badge--pulse',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <span className="jadis-status-badge__icon">{badgeIcon}</span>
      <span className="jadis-status-badge__text">{badgeText}</span>
    </div>
  )
}

// ===================================
// LOADING SPINNER COMPONENT
// ===================================

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  size?: IndicatorSize
  speed?: 'slow' | 'normal' | 'fast'
  style?: 'spinner' | 'dots' | 'bars' | 'matrix'
  text?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = 'terminal',
  size = 'medium',
  speed = 'normal',
  style = 'spinner',
  text,
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-loading-spinner',
    `jadis-loading-spinner--${variant}`,
    `jadis-loading-spinner--${size}`,
    `jadis-loading-spinner--${speed}`,
    `jadis-loading-spinner--${style}`,
    className
  ].filter(Boolean).join(' ')

  const renderSpinnerContent = () => {
    switch (style) {
      case 'dots':
        return <div className="jadis-loading-spinner__dots">●●●</div>
      case 'bars':
        return <div className="jadis-loading-spinner__bars">|||</div>
      case 'matrix':
        return <div className="jadis-loading-spinner__matrix">▓░▓</div>
      default:
        return <ASCIIIcon icon="loading" variant={variant} size={size} />
    }
  }

  return (
    <div className={classes} {...props}>
      {renderSpinnerContent()}
      {text && (
        <div className="jadis-loading-spinner__text">{text}</div>
      )}
    </div>
  )
}

// ===================================
// TREND INDICATOR COMPONENT
// ===================================

export interface TrendIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  trend?: 'up' | 'down' | 'stable' | 'volatile'
  value?: number | string
  change?: number | string
  size?: IndicatorSize
  showValue?: boolean
  showChange?: boolean
  animated?: boolean
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  variant = 'terminal',
  trend = 'stable',
  value,
  change,
  size = 'medium',
  showValue = true,
  showChange = true,
  animated = true,
  className = '',
  ...props
}) => {
  const getTrendConfig = () => {
    switch (trend) {
      case 'up': return { color: 'success', icon: '▲', symbol: '+' }
      case 'down': return { color: 'error', icon: '▼', symbol: '-' }
      case 'volatile': return { color: 'warning', icon: '◈', symbol: '±' }
      default: return { color: 'info', icon: '▬', symbol: '' }
    }
  }

  const trendConfig = getTrendConfig()
  
  const classes = [
    'jadis-trend-indicator',
    `jadis-trend-indicator--${variant}`,
    `jadis-trend-indicator--${size}`,
    `jadis-trend-indicator--${trend}`,
    animated && 'jadis-trend-indicator--animated',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jadis-trend-indicator__icon">
        {trendConfig.icon}
      </div>
      <div className="jadis-trend-indicator__content">
        {showValue && value && (
          <div className="jadis-trend-indicator__value">{value}</div>
        )}
        {showChange && change && (
          <div className="jadis-trend-indicator__change">
            {trendConfig.symbol}{change}
          </div>
        )}
      </div>
    </div>
  )
}

// ===================================
// BATTERY INDICATOR COMPONENT
// ===================================

export interface BatteryIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  level: number
  charging?: boolean
  size?: IndicatorSize
  showPercentage?: boolean
  animated?: boolean
}

export const BatteryIndicator: React.FC<BatteryIndicatorProps> = ({
  variant = 'terminal',
  level,
  charging = false,
  size = 'medium',
  showPercentage = true,
  animated = false,
  className = '',
  ...props
}) => {
  const normalizedLevel = Math.max(0, Math.min(100, level))
  const batteryColor = normalizedLevel > 50 ? 'success' : normalizedLevel > 20 ? 'warning' : 'error'
  
  const classes = [
    'jadis-battery-indicator',
    `jadis-battery-indicator--${variant}`,
    `jadis-battery-indicator--${size}`,
    `jadis-battery-indicator--${batteryColor}`,
    charging && 'jadis-battery-indicator--charging',
    animated && 'jadis-battery-indicator--animated',
    className
  ].filter(Boolean).join(' ')

  const generateBatteryDisplay = () => {
    const segments = 8
    const filledSegments = Math.round((normalizedLevel / 100) * segments)
    
    let display = '['
    for (let i = 0; i < segments; i++) {
      if (i < filledSegments) {
        display += '▓'
      } else {
        display += '░'
      }
    }
    display += ']'
    
    if (charging) {
      display += '⚡'
    }
    
    return display
  }

  return (
    <div className={classes} {...props}>
      <div className="jadis-battery-indicator__display">
        {generateBatteryDisplay()}
      </div>
      {showPercentage && (
        <div className="jadis-battery-indicator__percentage">
          {normalizedLevel}%
        </div>
      )}
    </div>
  )
}

// ===================================
// SIGNAL STRENGTH COMPONENT
// ===================================

export interface SignalStrengthProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  strength: number
  max?: number
  size?: IndicatorSize
  showValue?: boolean
  animated?: boolean
}

export const SignalStrength: React.FC<SignalStrengthProps> = ({
  variant = 'terminal',
  strength,
  max = 5,
  size = 'medium',
  showValue = false,
  animated = false,
  className = '',
  ...props
}) => {
  const normalizedStrength = Math.max(0, Math.min(max, strength))
  const strengthColor = normalizedStrength > max * 0.7 ? 'success' : 
                        normalizedStrength > max * 0.3 ? 'warning' : 'error'
  
  const classes = [
    'jadis-signal-strength',
    `jadis-signal-strength--${variant}`,
    `jadis-signal-strength--${size}`,
    `jadis-signal-strength--${strengthColor}`,
    animated && 'jadis-signal-strength--animated',
    className
  ].filter(Boolean).join(' ')

  const generateSignalBars = () => {
    const bars = []
    for (let i = 0; i < max; i++) {
      const barHeight = ((i + 1) / max) * 4 + 1
      const isFilled = i < normalizedStrength
      bars.push(
        <div
          key={i}
          className={`jadis-signal-strength__bar ${isFilled ? 'jadis-signal-strength__bar--filled' : ''}`}
          style={{ height: `${barHeight * 0.25}rem` }}
        />
      )
    }
    return bars
  }

  return (
    <div className={classes} {...props}>
      <div className="jadis-signal-strength__bars">
        {generateSignalBars()}
      </div>
      {showValue && (
        <div className="jadis-signal-strength__value">
          {normalizedStrength}/{max}
        </div>
      )}
    </div>
  )
}

// ===================================
// HEALTH INDICATOR COMPONENT
// ===================================

export interface HealthIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  health: 'excellent' | 'good' | 'fair' | 'poor' | 'critical'
  value?: number
  size?: IndicatorSize
  showLabel?: boolean
  animated?: boolean
}

export const HealthIndicator: React.FC<HealthIndicatorProps> = ({
  variant = 'terminal',
  health,
  value,
  size = 'medium',
  showLabel = true,
  animated = false,
  className = '',
  ...props
}) => {
  const getHealthConfig = () => {
    switch (health) {
      case 'excellent': return { color: 'success', icon: '●●●●●', label: 'EXCELLENT' }
      case 'good': return { color: 'success', icon: '●●●●○', label: 'GOOD' }
      case 'fair': return { color: 'warning', icon: '●●●○○', label: 'FAIR' }
      case 'poor': return { color: 'warning', icon: '●●○○○', label: 'POOR' }
      case 'critical': return { color: 'error', icon: '●○○○○', label: 'CRITICAL' }
      default: return { color: 'secondary', icon: '○○○○○', label: 'UNKNOWN' }
    }
  }

  const healthConfig = getHealthConfig()
  
  const classes = [
    'jadis-health-indicator',
    `jadis-health-indicator--${variant}`,
    `jadis-health-indicator--${size}`,
    `jadis-health-indicator--${healthConfig.color}`,
    animated && 'jadis-health-indicator--animated',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div className="jadis-health-indicator__icon">
        {healthConfig.icon}
      </div>
      <div className="jadis-health-indicator__content">
        {showLabel && (
          <div className="jadis-health-indicator__label">
            {healthConfig.label}
          </div>
        )}
        {value !== undefined && (
          <div className="jadis-health-indicator__value">
            {value}
          </div>
        )}
      </div>
    </div>
  )
}

// ===================================
// LEVEL INDICATOR COMPONENT
// ===================================

export interface LevelIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant
  level: number
  maxLevel?: number
  size?: IndicatorSize
  showValue?: boolean
  showSteps?: boolean
  color?: IndicatorColor
  animated?: boolean
}

export const LevelIndicator: React.FC<LevelIndicatorProps> = ({
  variant = 'terminal',
  level,
  maxLevel = 10,
  size = 'medium',
  showValue = true,
  showSteps = true,
  color = 'primary',
  animated = false,
  className = '',
  ...props
}) => {
  const normalizedLevel = Math.max(0, Math.min(maxLevel, level))
  
  const classes = [
    'jadis-level-indicator',
    `jadis-level-indicator--${variant}`,
    `jadis-level-indicator--${size}`,
    `jadis-level-indicator--${color}`,
    animated && 'jadis-level-indicator--animated',
    className
  ].filter(Boolean).join(' ')

  const generateLevelSteps = () => {
    const steps = []
    for (let i = 1; i <= maxLevel; i++) {
      const isActive = i <= normalizedLevel
      steps.push(
        <div
          key={i}
          className={`jadis-level-indicator__step ${isActive ? 'jadis-level-indicator__step--active' : ''}`}
        >
          {isActive ? '▓' : '░'}
        </div>
      )
    }
    return steps
  }

  return (
    <div className={classes} {...props}>
      {showSteps && (
        <div className="jadis-level-indicator__steps">
          {generateLevelSteps()}
        </div>
      )}
      {showValue && (
        <div className="jadis-level-indicator__value">
          {normalizedLevel} / {maxLevel}
        </div>
      )}
    </div>
  )
}