import React from 'react'
import './Tables.scss'
import { Checkbox } from '../Forms'

// Common Types
export type TableVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type TableSize = 'compact' | 'normal' | 'spacious'
export type TableAlign = 'left' | 'center' | 'right'

// ===================================
// BASE TABLE COMPONENT
// ===================================

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  variant?: TableVariant
  size?: TableSize
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  responsive?: boolean
  fixed?: boolean
  stickyHeader?: boolean
  caption?: React.ReactNode
  captionSide?: 'top' | 'bottom'
}

export const Table: React.FC<TableProps> = ({
  variant = 'terminal',
  size = 'normal',
  bordered = true,
  striped = false,
  hoverable = false,
  responsive = false,
  fixed = false,
  stickyHeader = false,
  caption,
  captionSide = 'top',
  className = '',
  children,
  ...props
}) => {
  const tableClasses = [
    'jadis-table',
    `jadis-table--${variant}`,
    `jadis-table--${size}`,
    bordered && 'jadis-table--bordered',
    striped && 'jadis-table--striped',
    hoverable && 'jadis-table--hoverable',
    fixed && 'jadis-table--fixed',
    stickyHeader && 'jadis-table--sticky-header',
    className
  ].filter(Boolean).join(' ')

  const table = (
    <table className={tableClasses} {...props}>
      {caption && (
        <caption className={`jadis-table__caption jadis-table__caption--${captionSide}`}>
          {caption}
        </caption>
      )}
      {children}
    </table>
  )

  if (responsive) {
    return (
      <div className="jadis-table-container jadis-table-container--responsive">
        {table}
      </div>
    )
  }

  return table
}

// ===================================
// TABLE HEAD COMPONENT
// ===================================

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: TableVariant
  sticky?: boolean
}

export const TableHead: React.FC<TableHeadProps> = ({
  variant,
  sticky = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-table__head',
    variant && `jadis-table__head--${variant}`,
    sticky && 'jadis-table__head--sticky',
    className
  ].filter(Boolean).join(' ')

  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  )
}

// ===================================
// TABLE BODY COMPONENT
// ===================================

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  // Empty interface for potential future extension
}

export const TableBody: React.FC<TableBodyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <tbody className={`jadis-table__body ${className}`} {...props}>
      {children}
    </tbody>
  )
}

// ===================================
// TABLE FOOTER COMPONENT
// ===================================

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  // Empty interface for potential future extension
}

export const TableFooter: React.FC<TableFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <tfoot className={`jadis-table__footer ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

// ===================================
// TABLE ROW COMPONENT
// ===================================

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean
  disabled?: boolean
  clickable?: boolean
}

export const TableRow: React.FC<TableRowProps> = ({
  selected = false,
  disabled = false,
  clickable = false,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'jadis-table__row',
    selected && 'jadis-table__row--selected',
    disabled && 'jadis-table__row--disabled',
    clickable && 'jadis-table__row--clickable',
    className
  ].filter(Boolean).join(' ')

  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  )
}

// ===================================
// TABLE HEADER CELL COMPONENT
// ===================================

export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: TableAlign
  sortable?: boolean
  sorted?: 'asc' | 'desc' | false
  onSort?: () => void
  width?: string | number
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  align = 'left',
  sortable = false,
  sorted = false,
  onSort,
  width,
  className = '',
  children,
  style,
  ...props
}) => {
  const classes = [
    'jadis-table__header-cell',
    `jadis-table__header-cell--${align}`,
    sortable && 'jadis-table__header-cell--sortable',
    sorted && `jadis-table__header-cell--sorted-${sorted}`,
    className
  ].filter(Boolean).join(' ')

  const handleClick = () => {
    if (sortable && onSort) {
      onSort()
    }
  }

  return (
    <th 
      className={classes} 
      onClick={handleClick}
      style={{ ...style, width }}
      {...props}
    >
      <div className="jadis-table__header-content">
        <span>{children}</span>
        {sortable && (
          <span className="jadis-table__sort-indicator">
            {sorted === 'asc' ? '▲' : sorted === 'desc' ? '▼' : '◆'}
          </span>
        )}
      </div>
    </th>
  )
}

// ===================================
// TABLE CELL COMPONENT
// ===================================

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: TableAlign
  numeric?: boolean
  truncate?: boolean
  width?: string | number
}

export const TableCell: React.FC<TableCellProps> = ({
  align = 'left',
  numeric = false,
  truncate = false,
  width,
  className = '',
  children,
  style,
  ...props
}) => {
  const classes = [
    'jadis-table__cell',
    `jadis-table__cell--${align}`,
    numeric && 'jadis-table__cell--numeric',
    truncate && 'jadis-table__cell--truncate',
    className
  ].filter(Boolean).join(' ')

  return (
    <td 
      className={classes}
      style={{ ...style, width }}
      {...props}
    >
      {truncate ? (
        <div className="jadis-table__cell-content jadis-table__cell-content--truncate">
          {children}
        </div>
      ) : (
        children
      )}
    </td>
  )
}

// ===================================
// DATA TABLE COMPONENT
// ===================================

export interface Column<T = any> {
  key: string
  header: React.ReactNode
  accessor?: string | ((row: T) => React.ReactNode)
  width?: string | number
  align?: TableAlign
  sortable?: boolean
  numeric?: boolean
}

export interface DataTableProps<T = any> extends Omit<TableProps, 'children'> {
  data: T[]
  columns: Column<T>[]
  keyField?: string
  onRowClick?: (row: T, index: number) => void
  selectedRows?: Set<string | number>
  onSelectionChange?: (selectedRows: Set<string | number>) => void
  selectable?: boolean
  emptyMessage?: React.ReactNode
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  keyField = 'id',
  onRowClick,
  selectedRows,
  onSelectionChange,
  selectable = false,
  emptyMessage = 'No data available',
  variant = 'terminal',
  ...tableProps
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string
    direction: 'asc' | 'desc'
  } | null>(null)

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return

    setSortConfig(current => {
      if (!current || current.key !== column.key) {
        return { key: column.key, direction: 'asc' }
      }
      if (current.direction === 'asc') {
        return { key: column.key, direction: 'desc' }
      }
      return null
    })
  }

  const getValue = (row: T, column: Column<T>) => {
    if (typeof column.accessor === 'function') {
      return column.accessor(row)
    }
    if (column.accessor) {
      return row[column.accessor]
    }
    return row[column.key]
  }

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const column = columns.find(col => col.key === sortConfig.key)
      if (!column) return 0

      const aValue = getValue(a, column)
      const bValue = getValue(b, column)

      if (aValue === bValue) return 0
      
      const modifier = sortConfig.direction === 'asc' ? 1 : -1
      
      if (column.numeric) {
        return (Number(aValue) - Number(bValue)) * modifier
      }
      
      return String(aValue).localeCompare(String(bValue)) * modifier
    })
  }, [data, sortConfig, columns])

  const handleRowSelection = (row: T) => {
    if (!selectable || !onSelectionChange) return

    const key = row[keyField]
    const newSelection = new Set(selectedRows || [])
    
    if (newSelection.has(key)) {
      newSelection.delete(key)
    } else {
      newSelection.add(key)
    }
    
    onSelectionChange(newSelection)
  }

  return (
    <Table variant={variant} {...tableProps}>
      <TableHead>
        <TableRow>
          {selectable && (
            <TableHeaderCell width="60px" align="center">
              <Checkbox
                variant={variant}
                label=""
                checked={selectedRows?.size === data.length && data.length > 0}
                indeterminate={selectedRows && selectedRows.size > 0 && selectedRows.size < data.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    onSelectionChange?.(new Set(data.map(row => row[keyField])))
                  } else {
                    onSelectionChange?.(new Set())
                  }
                }}
              />
            </TableHeaderCell>
          )}
          {columns.map(column => (
            <TableHeaderCell
              key={column.key}
              align={column.align}
              sortable={column.sortable}
              sorted={sortConfig?.key === column.key ? sortConfig.direction : false}
              onSort={() => handleSort(column)}
              width={column.width}
            >
              {column.header}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.length === 0 ? (
          <TableRow>
            <TableCell 
              colSpan={columns.length + (selectable ? 1 : 0)}
              align="center"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        ) : (
          sortedData.map((row, index) => {
            const rowKey = row[keyField]
            const isSelected = selectedRows?.has(rowKey)
            
            return (
              <TableRow
                key={rowKey}
                selected={isSelected}
                clickable={!!onRowClick}
                onClick={() => onRowClick?.(row, index)}
              >
                {selectable && (
                  <TableCell width="60px" align="center">
                    <Checkbox
                      variant={variant}
                      label=""
                      checked={isSelected}
                      onChange={() => handleRowSelection(row)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                )}
                {columns.map(column => (
                  <TableCell
                    key={column.key}
                    align={column.align}
                    numeric={column.numeric}
                  >
                    {getValue(row, column)}
                  </TableCell>
                ))}
              </TableRow>
            )
          })
        )}
      </TableBody>
    </Table>
  )
}

// ===================================
// ASCII TABLE COMPONENT
// ===================================

export interface AsciiTableProps {
  data: string[][]
  variant?: TableVariant
  showBorder?: boolean
  padding?: number
  columnAlignments?: ('left' | 'center' | 'right')[]
}

export const AsciiTable: React.FC<AsciiTableProps> = ({
  data,
  variant = 'terminal',
  showBorder = true,
  padding = 1,
  columnAlignments = []
}) => {
  const generateAsciiTable = () => {
    if (data.length === 0) return ''

    // Calculate column widths based on all data
    const columnWidths = data[0].map((_, colIndex) => {
      return Math.max(...data.map(row => String(row[colIndex] || '').length))
    })

    const padCell = (content: string, width: number, align: 'left' | 'center' | 'right' = 'left') => {
      const str = String(content || '')
      const cellWidth = width + (padding * 2)
      
      if (align === 'center') {
        const spacesNeeded = cellWidth - str.length
        const leftPad = Math.floor(spacesNeeded / 2)
        const rightPad = spacesNeeded - leftPad
        return ' '.repeat(leftPad) + str + ' '.repeat(rightPad)
      } else if (align === 'right') {
        const spacesNeeded = cellWidth - str.length
        return ' '.repeat(spacesNeeded - padding) + str + ' '.repeat(padding)
      } else {
        // left align
        const spacesNeeded = cellWidth - str.length
        return ' '.repeat(padding) + str + ' '.repeat(spacesNeeded - padding)
      }
    }

    const lines: string[] = []
    
    if (showBorder) {
      // Top border
      const topBorder = '┌' + columnWidths.map(w => '─'.repeat(w + padding * 2)).join('┬') + '┐'
      lines.push(topBorder)
    }

    // Header row (always center-aligned for headers)
    if (data.length > 0) {
      const headerCells = data[0].map((cell, i) => padCell(cell, columnWidths[i], 'center'))
      const headerRow = showBorder ? '│' + headerCells.join('│') + '│' : headerCells.join(' ')
      lines.push(headerRow)
      
      if (showBorder && data.length > 1) {
        // Header separator
        const separator = '├' + columnWidths.map(w => '─'.repeat(w + padding * 2)).join('┼') + '┤'
        lines.push(separator)
      }
    }

    // Data rows
    for (let i = 1; i < data.length; i++) {
      const cells = data[i].map((cell, j) => {
        const align = columnAlignments[j] || 'left'
        return padCell(cell, columnWidths[j], align)
      })
      const row = showBorder ? '│' + cells.join('│') + '│' : cells.join(' ')
      lines.push(row)
    }

    if (showBorder) {
      // Bottom border
      const bottomBorder = '└' + columnWidths.map(w => '─'.repeat(w + padding * 2)).join('┴') + '┘'
      lines.push(bottomBorder)
    }

    return lines.join('\n')
  }

  return (
    <pre className={`jadis-ascii-table jadis-ascii-table--${variant}`}>
      {generateAsciiTable()}
    </pre>
  )
}