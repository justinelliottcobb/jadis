import React from 'react'
import './Gauges.scss'

// Common Types
export type GaugeVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type GaugeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type GaugeSize = 'small' | 'medium' | 'large'

// ===================================
// PROGRESS BAR COMPONENT
// ===================================

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GaugeVariant
  value: number
  max?: number
  min?: number
  color?: GaugeColor
  size?: GaugeSize
  showValue?: boolean
  showPercentage?: boolean
  label?: string
  animated?: boolean
  striped?: boolean
  pulse?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  variant = 'terminal',
  value,
  max = 100,
  min = 0,
  color = 'primary',
  size = 'medium',
  showValue = false,
  showPercentage = true,
  label,
  animated = false,
  striped = false,
  pulse = false,
  className = '',
  ...props
}) => {
  const normalizedValue = Math.max(min, Math.min(max, value))
  const percentage = ((normalizedValue - min) / (max - min)) * 100
  
  const classes = [
    'jadis-progress-bar',
    `jadis-progress-bar--${variant}`,
    `jadis-progress-bar--${size}`,
    animated && 'jadis-progress-bar--animated',
    striped && 'jadis-progress-bar--striped',
    pulse && 'jadis-progress-bar--pulse',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {label && (
        <div className="jadis-progress-bar__label">
          {label}
        </div>
      )}
      <div className="jadis-progress-bar__track">
        <div 
          className={`jadis-progress-bar__fill jadis-progress-bar__fill--${color}`}
          style={{ width: `${percentage}%` }}
        />
        {showValue || showPercentage ? (
          <div className="jadis-progress-bar__text">
            {showValue && `${normalizedValue}`}
            {showValue && showPercentage && '/'}
            {showPercentage && `${Math.round(percentage)}%`}
          </div>
        ) : null}
      </div>
    </div>
  )
}

// ===================================
// CIRCULAR GAUGE COMPONENT (ASCII ART)
// ===================================

export interface CircularGaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GaugeVariant
  value: number
  max?: number
  min?: number
  color?: GaugeColor
  size?: GaugeSize
  showValue?: boolean
  showPercentage?: boolean
  label?: string
  style?: 'classic' | 'digital' | 'retro' | 'dots'
  animated?: boolean
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
  variant = 'terminal',
  value,
  max = 100,
  min = 0,
  color: _color = 'primary',
  size = 'medium',
  showValue = false,
  showPercentage = true,
  label,
  style = 'classic',
  animated = true,
  className = '',
  ...props
}) => {
  const normalizedValue = Math.max(min, Math.min(max, value))
  const percentage = ((normalizedValue - min) / (max - min)) * 100
  
  const classes = [
    'jadis-circular-gauge',
    `jadis-circular-gauge--${variant}`,
    `jadis-circular-gauge--${size}`,
    `jadis-circular-gauge--${style}`,
    animated && 'jadis-circular-gauge--animated',
    className
  ].filter(Boolean).join(' ')

  const generateCircularDisplay = () => {
    switch (style) {
      case 'digital':
        return generateDigitalCircle()
      case 'retro':
        return generateRetroCircle()
      case 'dots':
        return generateDotCircle()
      default:
        return generateClassicCircle()
    }
  }

  const generateClassicCircle = () => {
    const totalSegments = 16 // 16 positions around the circle
    const filledSegments = Math.round((percentage / 100) * totalSegments)
    
    
    // Create filled circle representation
    const lines = [
      '   ╭─╮   ',
      ' ╭─╯ ╰─╮ ',
      '╭╯     ╰╮',
      '╰╮     ╱╯',
      ' ╰─╮ ╱─╯ ',
      '   ╰─╯   '
    ]
    
    return (
      <div className="jadis-circular-gauge__display">
        {lines.map((line, i) => (
          <div key={i} className="jadis-circular-gauge__line">{line}</div>
        ))}
        <div className="jadis-circular-gauge__progress-indicator">
          {Array.from({ length: totalSegments }, (_, i) => {
            const angle = (i / totalSegments) * 360
            const isFilled = i < filledSegments
            const char = isFilled ? '●' : '○'
            return (
              <span
                key={i}
                className={`jadis-circular-gauge__segment ${isFilled ? 'jadis-circular-gauge__segment--filled' : ''}`}
                style={{
                  transform: `rotate(${angle}deg) translateX(3rem)`,
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 0'
                }}
              >
                {char}
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  const generateDigitalCircle = () => {
    // Create a digital-style circular progress using block characters
    const radius = 6
    const center = radius
    const filledAngle = (percentage / 100) * 2 * Math.PI
    
    const grid = Array.from({ length: radius * 2 + 1 }, () => 
      Array.from({ length: radius * 2 + 1 }, () => ' ')
    )
    
    // Draw circle outline and filled portion
    for (let angle = 0; angle < 2 * Math.PI; angle += 0.1) {
      const x = Math.round(center + (radius - 1) * Math.cos(angle - Math.PI / 2))
      const y = Math.round(center + (radius - 1) * Math.sin(angle - Math.PI / 2))
      
      if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
        if (angle <= filledAngle) {
          grid[y][x] = '▓'
        } else if (grid[y][x] === ' ') {
          grid[y][x] = '░'
        }
      }
    }
    
    return (
      <div className="jadis-circular-gauge__display">
        {grid.map((row, i) => (
          <div key={i} className="jadis-circular-gauge__line">
            {row.join('')}
          </div>
        ))}
      </div>
    )
  }

  const generateRetroCircle = () => {
    // Simple retro-style circular indicator with concentric rings
    return (
      <div className="jadis-circular-gauge__display">
        <div className="jadis-circular-gauge__retro">
          <div className="jadis-circular-gauge__line">   ╭───╮   </div>
          <div className="jadis-circular-gauge__line"> ╭─╯   ╰─╮ </div>
          <div className="jadis-circular-gauge__line">╱       ╲</div>
          <div className="jadis-circular-gauge__line">│   {percentage > 50 ? '▓▓▓' : percentage > 25 ? '▓▓░' : percentage > 0 ? '▓░░' : '░░░'}   │</div>
          <div className="jadis-circular-gauge__line">╲       ╱</div>
          <div className="jadis-circular-gauge__line"> ╰─╮   ╭─╯ </div>
          <div className="jadis-circular-gauge__line">   ╰───╯   </div>
        </div>
      </div>
    )
  }

  const generateDotCircle = () => {
    // Dot-matrix style circular gauge
    const dotPattern = [
      '   ● ● ●   ',
      ' ●       ● ',
      '●         ●',
      '●    %    ●',
      '●         ●',
      ' ●       ● ',
      '   ● ● ●   '
    ]
    
    return (
      <div className="jadis-circular-gauge__display">
        {dotPattern.map((line, i) => (
          <div key={i} className="jadis-circular-gauge__line">
            {i === 3 ? line.replace('%', Math.round(percentage).toString().padStart(3, ' ')) : line}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={classes} {...props}>
      {label && (
        <div className="jadis-circular-gauge__label">
          {label}
        </div>
      )}
      <div className="jadis-circular-gauge__container">
        {generateCircularDisplay()}
        {(showValue || showPercentage) && (
          <div className="jadis-circular-gauge__text">
            <div className="jadis-circular-gauge__value">
              {showValue && `${normalizedValue}`}
              {showValue && showPercentage && '/'}
              {showPercentage && `${Math.round(percentage)}%`}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ===================================
// LINEAR GAUGE COMPONENT
// ===================================

export interface LinearGaugeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GaugeVariant
  value: number
  max?: number
  min?: number
  color?: GaugeColor
  size?: GaugeSize
  orientation?: 'horizontal' | 'vertical'
  showValue?: boolean
  showScale?: boolean
  showTicks?: boolean
  tickCount?: number
  label?: string
  animated?: boolean
}

export const LinearGauge: React.FC<LinearGaugeProps> = ({
  variant = 'terminal',
  value,
  max = 100,
  min = 0,
  color = 'primary',
  size = 'medium',
  orientation = 'horizontal',
  showValue = true,
  showScale = true,
  showTicks = true,
  tickCount = 5,
  label,
  animated = true,
  className = '',
  ...props
}) => {
  const normalizedValue = Math.max(min, Math.min(max, value))
  const percentage = ((normalizedValue - min) / (max - min)) * 100
  
  const classes = [
    'jadis-linear-gauge',
    `jadis-linear-gauge--${variant}`,
    `jadis-linear-gauge--${size}`,
    `jadis-linear-gauge--${orientation}`,
    animated && 'jadis-linear-gauge--animated',
    className
  ].filter(Boolean).join(' ')

  const generateTicks = () => {
    const ticks = []
    for (let i = 0; i <= tickCount; i++) {
      const tickValue = min + (max - min) * (i / tickCount)
      const tickPosition = (i / tickCount) * 100
      ticks.push(
        <div 
          key={i}
          className="jadis-linear-gauge__tick"
          style={{ 
            [orientation === 'horizontal' ? 'left' : 'bottom']: `${tickPosition}%` 
          }}
        >
          {showScale && (
            <span className="jadis-linear-gauge__tick-label">
              {Math.round(tickValue)}
            </span>
          )}
        </div>
      )
    }
    return ticks
  }

  return (
    <div className={classes} {...props}>
      {label && (
        <div className="jadis-linear-gauge__label">
          {label}
        </div>
      )}
      <div className="jadis-linear-gauge__container">
        <div className="jadis-linear-gauge__track">
          <div 
            className={`jadis-linear-gauge__fill jadis-linear-gauge__fill--${color}`}
            style={{ 
              [orientation === 'horizontal' ? 'width' : 'height']: `${percentage}%` 
            }}
          />
          <div 
            className="jadis-linear-gauge__indicator"
            style={{ 
              [orientation === 'horizontal' ? 'left' : 'bottom']: `${percentage}%` 
            }}
          />
        </div>
        {showTicks && (
          <div className="jadis-linear-gauge__ticks">
            {generateTicks()}
          </div>
        )}
        {showValue && (
          <div className="jadis-linear-gauge__value">
            {normalizedValue}
          </div>
        )}
      </div>
    </div>
  )
}

// ===================================
// ASCII METER COMPONENT
// ===================================

export interface ASCIIMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GaugeVariant
  value: number
  max?: number
  min?: number
  color?: GaugeColor
  size?: GaugeSize
  showValue?: boolean
  label?: string
  style?: 'classic' | 'digital' | 'retro'
}

export const ASCIIMeter: React.FC<ASCIIMeterProps> = ({
  variant = 'terminal',
  value,
  max = 100,
  min = 0,
  color: _color = 'primary',
  size = 'medium',
  showValue = true,
  label,
  style = 'classic',
  className = '',
  ...props
}) => {
  const normalizedValue = Math.max(min, Math.min(max, value))
  const percentage = ((normalizedValue - min) / (max - min)) * 100
  
  const classes = [
    'jadis-ascii-meter',
    `jadis-ascii-meter--${variant}`,
    `jadis-ascii-meter--${size}`,
    `jadis-ascii-meter--${style}`,
    className
  ].filter(Boolean).join(' ')

  const generateMeterDisplay = () => {
    switch (style) {
      case 'digital':
        return generateDigitalMeter()
      case 'retro':
        return generateRetroMeter()
      default:
        return generateClassicMeter()
    }
  }

  const generateClassicMeter = () => {
    const needlePosition = Math.round((percentage / 100) * 20) // 0-20 positions
    const scale = '┌─────────────────────┐'
    const bottom = '└─────────────────────┘'
    
    let needle = '│'
    for (let i = 0; i < 21; i++) {
      if (i === needlePosition) {
        needle += '●'
      } else {
        needle += ' '
      }
    }
    needle += '│'

    return (
      <div className="jadis-ascii-meter__display">
        <div>{scale}</div>
        <div>{needle}</div>
        <div>{bottom}</div>
        <div className="jadis-ascii-meter__scale-labels">
          <span>{min}</span>
          <span>{Math.round((min + max) / 2)}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }

  const generateDigitalMeter = () => {
    const barCount = 20
    const filledBars = Math.round((percentage / 100) * barCount)
    
    let display = '['
    for (let i = 0; i < barCount; i++) {
      if (i < filledBars) {
        display += '▓'
      } else {
        display += '░'
      }
    }
    display += ']'

    return (
      <div className="jadis-ascii-meter__display">
        <div className="jadis-ascii-meter__digital-bar">{display}</div>
        <div className="jadis-ascii-meter__scale-labels">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }

  const generateRetroMeter = () => {
    const segments = 10
    const activeSegments = Math.round((percentage / 100) * segments)
    
    const topLine = '╭' + '─'.repeat(segments * 2) + '╮'
    const bottomLine = '╰' + '─'.repeat(segments * 2) + '╯'
    
    let meterLine = '│'
    for (let i = 0; i < segments; i++) {
      if (i < activeSegments) {
        meterLine += '██'
      } else {
        meterLine += '  '
      }
    }
    meterLine += '│'

    return (
      <div className="jadis-ascii-meter__display">
        <div>{topLine}</div>
        <div>{meterLine}</div>
        <div>{bottomLine}</div>
      </div>
    )
  }

  return (
    <div className={classes} {...props}>
      {label && (
        <div className="jadis-ascii-meter__label">
          {label}
        </div>
      )}
      {generateMeterDisplay()}
      {showValue && (
        <div className="jadis-ascii-meter__value">
          {normalizedValue} / {max}
        </div>
      )}
    </div>
  )
}