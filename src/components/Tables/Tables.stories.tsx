import type { Meta, StoryObj } from '@storybook/react'
import { 
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableHeaderCell,
  TableCell,
  DataTable,
  AsciiTable
} from './Tables'
import { ThemeProvider } from '../ThemeProvider'
import { H2 } from '../Headers'
import { P } from '../Typography'
import { Button } from '../Buttons'
import React from 'react'

const meta: Meta<typeof Table> = {
  title: 'Components/Tables',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'ASCII-art inspired table components with terminal aesthetics. Features multiple variants, sorting, selection, and data management capabilities.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['compact', 'normal', 'spacious'],
      description: 'Table size/spacing',
    },
    bordered: {
      control: 'boolean',
      description: 'Show borders',
    },
    striped: {
      control: 'boolean',
      description: 'Striped rows',
    },
    hoverable: {
      control: 'boolean',
      description: 'Hover effects',
    },
    responsive: {
      control: 'boolean',
      description: 'Responsive scrolling',
    },
    stickyHeader: {
      control: 'boolean',
      description: 'Sticky header',
    },
  },
}

export default meta

type Story = StoryObj<typeof Table>

// Sample data for examples
const sampleData = [
  { id: 1, name: 'System Process', cpu: 12.5, memory: 256, status: 'Running' },
  { id: 2, name: 'Terminal Server', cpu: 8.3, memory: 128, status: 'Running' },
  { id: 3, name: 'Matrix Engine', cpu: 45.7, memory: 512, status: 'Active' },
  { id: 4, name: 'Data Processor', cpu: 23.1, memory: 384, status: 'Idle' },
  { id: 5, name: 'Network Monitor', cpu: 5.9, memory: 64, status: 'Running' },
]

// ===================================
// BASIC TABLE STORIES
// ===================================

export const Terminal: Story = {
  name: 'Table - Terminal',
  args: {
    variant: 'terminal',
    bordered: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>PROCESS</TableHeaderCell>
            <TableHeaderCell align="right">CPU %</TableHeaderCell>
            <TableHeaderCell align="right">MEMORY</TableHeaderCell>
            <TableHeaderCell>STATUS</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>System Process</TableCell>
            <TableCell align="right" numeric>12.5</TableCell>
            <TableCell align="right" numeric>256 MB</TableCell>
            <TableCell>Running</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Terminal Server</TableCell>
            <TableCell align="right" numeric>8.3</TableCell>
            <TableCell align="right" numeric>128 MB</TableCell>
            <TableCell>Running</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const Matrix: Story = {
  name: 'Table - Matrix',
  args: {
    variant: 'matrix',
    bordered: true,
    striped: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>NODE</TableHeaderCell>
            <TableHeaderCell>MATRIX ID</TableHeaderCell>
            <TableHeaderCell>STATUS</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Node-001</TableCell>
            <TableCell>MTX-7749</TableCell>
            <TableCell>CONNECTED</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Node-002</TableCell>
            <TableCell>MTX-3318</TableCell>
            <TableCell>SYNCHRONIZED</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const Retro: Story = {
  name: 'Table - Retro',
  args: {
    variant: 'retro',
    bordered: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>GAME</TableHeaderCell>
            <TableHeaderCell align="center">SCORE</TableHeaderCell>
            <TableHeaderCell align="center">LEVEL</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>SPACE INVADERS</TableCell>
            <TableCell align="center">99999</TableCell>
            <TableCell align="center">15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ASTEROIDS</TableCell>
            <TableCell align="center">75420</TableCell>
            <TableCell align="center">12</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

// ===================================
// DATA TABLE WITH SORTING
// ===================================

export const DataTableSorting: StoryObj = {
  name: 'DataTable with Sorting',
  render: () => {
    const columns = [
      { 
        key: 'name', 
        header: 'Process Name',
        sortable: true 
      },
      { 
        key: 'cpu', 
        header: 'CPU Usage (%)',
        align: 'right' as const,
        numeric: true,
        sortable: true 
      },
      { 
        key: 'memory', 
        header: 'Memory (MB)',
        align: 'right' as const,
        numeric: true,
        sortable: true 
      },
      { 
        key: 'status', 
        header: 'Status',
        sortable: true 
      }
    ]

    return (
      <DataTable
        variant="terminal"
        data={sampleData}
        columns={columns}
        bordered
        hoverable
      />
    )
  }
}

// ===================================
// DATA TABLE WITH SELECTION
// ===================================

export const DataTableSelection: StoryObj = {
  name: 'DataTable with Selection',
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<Set<string | number>>(new Set([2, 4]))

    const columns = [
      { key: 'name', header: 'Process Name' },
      { key: 'cpu', header: 'CPU %', align: 'right' as const, numeric: true },
      { key: 'memory', header: 'Memory', align: 'right' as const, numeric: true },
      { key: 'status', header: 'Status' }
    ]

    return (
      <div>
        <DataTable
          variant="matrix"
          data={sampleData}
          columns={columns}
          selectable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          bordered
          striped
        />
        <P variant="terminal" style={{ marginTop: '1rem' }}>
          Selected: {Array.from(selectedRows).join(', ') || 'None'}
        </P>
      </div>
    )
  }
}

// ===================================
// RESPONSIVE TABLE
// ===================================

export const ResponsiveTable: Story = {
  name: 'Responsive Table',
  args: {
    variant: 'terminal',
    responsive: true,
    bordered: true,
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Process Name</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>CPU</TableHeaderCell>
            <TableHeaderCell>Memory</TableHeaderCell>
            <TableHeaderCell>Threads</TableHeaderCell>
            <TableHeaderCell>Priority</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              <TableCell>{1000 + i}</TableCell>
              <TableCell>Process_{i}</TableCell>
              <TableCell>System background process handling critical operations</TableCell>
              <TableCell align="right" numeric>{Math.random() * 100 | 0}%</TableCell>
              <TableCell align="right" numeric>{Math.random() * 512 | 0} MB</TableCell>
              <TableCell align="center">{Math.random() * 20 | 0}</TableCell>
              <TableCell>Normal</TableCell>
              <TableCell>Running</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
}

// ===================================
// ASCII TABLE
// ===================================

export const AsciiTableStory: StoryObj = {
  name: 'ASCII Table',
  render: () => {
    const data = [
      ['NAME', 'TYPE', 'SIZE', 'MODIFIED'],
      ['system.cfg', 'CONFIG', '4KB', '2025-08-31'],
      ['boot.sys', 'SYSTEM', '128KB', '2025-08-30'],
      ['matrix.exe', 'EXEC', '256KB', '2025-08-29'],
      ['data.db', 'DATA', '1024KB', '2025-08-28'],
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <H2 variant="simple">Terminal ASCII Table</H2>
          <AsciiTable data={data} variant="terminal" />
        </div>
        
        <div>
          <H2 variant="simple">Matrix ASCII Table</H2>
          <AsciiTable data={data} variant="matrix" padding={2} />
        </div>
        
        <div>
          <H2 variant="simple">Minimal ASCII Table (No Borders)</H2>
          <AsciiTable data={data} variant="minimal" showBorder={false} />
        </div>
      </div>
    )
  }
}

// ===================================
// TABLE SIZES
// ===================================

export const TableSizes: StoryObj = {
  name: 'Table Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <P variant="terminal" style={{ marginBottom: '1rem' }}>Compact Size</P>
        <Table variant="terminal" size="compact" bordered>
          <TableHead>
            <TableRow>
              <TableHeaderCell>NAME</TableHeaderCell>
              <TableHeaderCell>VALUE</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CPU Usage</TableCell>
              <TableCell>45%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Memory</TableCell>
              <TableCell>2048 MB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <P variant="matrix" style={{ marginBottom: '1rem' }}>Normal Size</P>
        <Table variant="matrix" size="normal" bordered>
          <TableHead>
            <TableRow>
              <TableHeaderCell>NAME</TableHeaderCell>
              <TableHeaderCell>VALUE</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CPU Usage</TableCell>
              <TableCell>45%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Memory</TableCell>
              <TableCell>2048 MB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <P variant="retro" style={{ marginBottom: '1rem' }}>Spacious Size</P>
        <Table variant="retro" size="spacious" bordered>
          <TableHead>
            <TableRow>
              <TableHeaderCell>NAME</TableHeaderCell>
              <TableHeaderCell>VALUE</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CPU Usage</TableCell>
              <TableCell>45%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Memory</TableCell>
              <TableCell>2048 MB</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
}

// ===================================
// TABLE FEATURES
// ===================================

export const TableFeatures: StoryObj = {
  name: 'Table Features',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <P variant="terminal" style={{ marginBottom: '1rem' }}>Striped Table</P>
        <Table variant="terminal" bordered striped>
          <TableHead>
            <TableRow>
              <TableHeaderCell>INDEX</TableHeaderCell>
              <TableHeaderCell>NAME</TableHeaderCell>
              <TableHeaderCell>STATUS</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>Item {i + 1}</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div>
        <P variant="matrix" style={{ marginBottom: '1rem' }}>Hoverable Table</P>
        <Table variant="matrix" bordered hoverable>
          <TableHead>
            <TableRow>
              <TableHeaderCell>NODE</TableHeaderCell>
              <TableHeaderCell>CONNECTION</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>Node-{String(i + 1).padStart(3, '0')}</TableCell>
                <TableCell>ESTABLISHED</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
}

// ===================================
// ALL VARIANTS SHOWCASE
// ===================================

export const AllVariants: StoryObj = {
  name: 'All Table Variants',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem' }}>
        <H2 variant="simple">TABLE COMPONENT VARIANTS</H2>
        
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
            <div key={variant}>
              <P variant={variant} style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
                {variant} variant
              </P>
              <Table variant={variant} bordered>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>PROPERTY</TableHeaderCell>
                    <TableHeaderCell>VALUE</TableHeaderCell>
                    <TableHeaderCell align="right">STATUS</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>System</TableCell>
                    <TableCell>Online</TableCell>
                    <TableCell align="right">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Network</TableCell>
                    <TableCell>Connected</TableCell>
                    <TableCell align="right">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Database</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell align="right">✓</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// ===================================
// INTERACTIVE DEMO
// ===================================

export const InteractiveDemo: StoryObj = {
  name: 'Interactive Table Demo',
  render: () => {
    const [data, setData] = React.useState(sampleData)
    const [selectedRows, setSelectedRows] = React.useState<Set<string | number>>(new Set())

    const columns = [
      { key: 'name', header: 'Process', sortable: true },
      { 
        key: 'cpu', 
        header: 'CPU %',
        align: 'right' as const,
        numeric: true,
        sortable: true,
        accessor: (row: any) => `${row.cpu}%`
      },
      { 
        key: 'memory', 
        header: 'Memory',
        align: 'right' as const,
        numeric: true,
        sortable: true,
        accessor: (row: any) => `${row.memory} MB`
      },
      { key: 'status', header: 'Status' },
      {
        key: 'actions',
        header: 'Actions',
        align: 'center' as const,
        accessor: (row: any) => (
          <Button
            variant="terminal"
            size="small"
            onClick={(e) => {
              e.stopPropagation()
              alert(`Action for ${row.name}`)
            }}
          >
            TERMINATE
          </Button>
        )
      }
    ]

    const handleRowClick = (row: any) => {
      console.log('Row clicked:', row)
    }

    const addProcess = () => {
      const newProcess = {
        id: Math.max(...data.map(d => d.id)) + 1,
        name: `New Process ${data.length + 1}`,
        cpu: Math.random() * 100 | 0,
        memory: Math.random() * 512 | 0,
        status: ['Running', 'Idle', 'Active'][Math.random() * 3 | 0]
      }
      setData([...data, newProcess])
    }

    return (
      <div>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
          <Button variant="terminal" onClick={addProcess}>
            ADD PROCESS
          </Button>
          <Button 
            variant="terminal" 
            color="error"
            onClick={() => {
              const remaining = data.filter(d => !selectedRows.has(d.id))
              setData(remaining)
              setSelectedRows(new Set())
            }}
            disabled={selectedRows.size === 0}
          >
            DELETE SELECTED ({selectedRows.size})
          </Button>
        </div>
        
        <DataTable
          variant="terminal"
          data={data}
          columns={columns}
          bordered
          striped
          hoverable
          selectable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          onRowClick={handleRowClick}
          emptyMessage="No processes running"
        />
      </div>
    )
  }
}