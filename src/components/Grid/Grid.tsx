import React from 'react'
import './Grid.scss'

// Common Types
export type GridVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type GridGap = 'none' | 'small' | 'medium' | 'large' | 'xl'
export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'fit'
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6 | 'auto' | 'fit'
export type GridAlign = 'start' | 'center' | 'end' | 'stretch'
export type GridJustify = 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly'

// ===================================
// MAIN GRID COMPONENT
// ===================================

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GridVariant
  columns?: GridColumns
  rows?: GridRows
  gap?: GridGap
  columnGap?: GridGap
  rowGap?: GridGap
  alignItems?: GridAlign
  justifyItems?: GridAlign
  alignContent?: GridAlign
  justifyContent?: GridJustify
  autoFlow?: 'row' | 'column' | 'row-dense' | 'column-dense'
  minColumnWidth?: string
  dense?: boolean
  bordered?: boolean
  debug?: boolean
}

export const Grid: React.FC<GridProps> = ({
  variant = 'terminal',
  columns = 'auto',
  rows = 'auto',
  gap = 'medium',
  columnGap,
  rowGap,
  alignItems = 'stretch',
  justifyItems = 'stretch',
  alignContent = 'start',
  justifyContent = 'start',
  autoFlow = 'row',
  minColumnWidth,
  dense = false,
  bordered = false,
  debug = false,
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes = [
    'jadis-grid',
    `jadis-grid--${variant}`,
    `jadis-grid--gap-${gap}`,
    columnGap && `jadis-grid--column-gap-${columnGap}`,
    rowGap && `jadis-grid--row-gap-${rowGap}`,
    dense && 'jadis-grid--dense',
    bordered && 'jadis-grid--bordered',
    debug && 'jadis-grid--debug',
    className
  ].filter(Boolean).join(' ')

  const gridStyle: React.CSSProperties = {
    ...style,
    '--jadis-grid-columns': columns === 'auto' ? 'auto' : 
                           columns === 'fit' ? 'repeat(auto-fit, minmax(200px, 1fr))' :
                           typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    '--jadis-grid-rows': rows === 'auto' ? 'auto' : 
                        rows === 'fit' ? 'repeat(auto-fit, minmax(100px, 1fr))' :
                        typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    '--jadis-grid-align-items': alignItems,
    '--jadis-grid-justify-items': justifyItems,
    '--jadis-grid-align-content': alignContent,
    '--jadis-grid-justify-content': justifyContent,
    '--jadis-grid-auto-flow': autoFlow,
    '--jadis-grid-min-column-width': minColumnWidth || '200px'
  } as React.CSSProperties

  return (
    <div className={classes} style={gridStyle} {...props}>
      {children}
    </div>
  )
}

// ===================================
// GRID ITEM COMPONENT
// ===================================

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GridVariant
  columnSpan?: number | 'full'
  rowSpan?: number | 'full'
  columnStart?: number
  columnEnd?: number
  rowStart?: number
  rowEnd?: number
  alignSelf?: GridAlign
  justifySelf?: GridAlign
  area?: string
  bordered?: boolean
  interactive?: boolean
}

export const GridItem: React.FC<GridItemProps> = ({
  variant = 'terminal',
  columnSpan,
  rowSpan,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
  alignSelf,
  justifySelf,
  area,
  bordered = false,
  interactive = false,
  className = '',
  style = {},
  children,
  ...props
}) => {
  const classes = [
    'jadis-grid-item',
    `jadis-grid-item--${variant}`,
    bordered && 'jadis-grid-item--bordered',
    interactive && 'jadis-grid-item--interactive',
    className
  ].filter(Boolean).join(' ')

  const itemStyle: React.CSSProperties = {
    ...style,
    '--jadis-grid-item-column-span': columnSpan === 'full' ? '-1' : columnSpan || 'auto',
    '--jadis-grid-item-row-span': rowSpan === 'full' ? '-1' : rowSpan || 'auto',
    '--jadis-grid-item-column-start': columnStart || 'auto',
    '--jadis-grid-item-column-end': columnEnd || 'auto',
    '--jadis-grid-item-row-start': rowStart || 'auto',
    '--jadis-grid-item-row-end': rowEnd || 'auto',
    '--jadis-grid-item-align-self': alignSelf || 'auto',
    '--jadis-grid-item-justify-self': justifySelf || 'auto',
    '--jadis-grid-item-area': area || 'auto'
  } as React.CSSProperties

  return (
    <div className={classes} style={itemStyle} {...props}>
      <div className="jadis-grid-item__content">
        {children}
      </div>
    </div>
  )
}

// ===================================
// RESPONSIVE GRID COMPONENT
// ===================================

export interface ResponsiveGridProps extends Omit<GridProps, 'columns'> {
  xs?: GridColumns
  sm?: GridColumns
  md?: GridColumns
  lg?: GridColumns
  xl?: GridColumns
  xxl?: GridColumns
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  xs = 1,
  sm = 2,
  md = 3,
  lg = 4,
  xl = 5,
  xxl = 6,
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-responsive-grid',
    `jadis-responsive-grid--xs-${xs}`,
    `jadis-responsive-grid--sm-${sm}`,
    `jadis-responsive-grid--md-${md}`,
    `jadis-responsive-grid--lg-${lg}`,
    `jadis-responsive-grid--xl-${xl}`,
    `jadis-responsive-grid--xxl-${xxl}`,
    className
  ].filter(Boolean).join(' ')

  return <Grid {...props} className={classes} />
}