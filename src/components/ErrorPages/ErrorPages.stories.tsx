import type { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorPage, NotFound, Forbidden, ServerError, Unauthorized } from './ErrorPages'
import { useState } from 'react'

const meta: Meta<typeof ErrorPage> = {
  title: 'Components/ErrorPages',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Error page components for displaying various error states with terminal/ASCII aesthetic and Japanese seasonal themes.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual theme variant'
    },
    errorCode: {
      control: 'select',
      options: ['404', '403', '500', '503', '502', '401', '408', '429', 'network', 'custom'],
      description: 'Type of error to display'
    },
    showCode: {
      control: 'boolean',
      description: 'Show error code number'
    },
    showRetry: {
      control: 'boolean',
      description: 'Show retry button'
    },
    showHome: {
      control: 'boolean',
      description: 'Show home button'
    },
    bordered: {
      control: 'boolean',
      description: 'Add border around error page'
    },
    scanlines: {
      control: 'boolean',
      description: 'Add CRT scanline effect'
    },
    glitch: {
      control: 'boolean',
      description: 'Add glitch effect'
    },
    animated: {
      control: 'boolean',
      description: 'Enable animations'
    },
    fullHeight: {
      control: 'boolean',
      description: 'Make error page full viewport height'
    },
    centerContent: {
      control: 'boolean',
      description: 'Center align content'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ErrorPage>

// ===================================
// BASIC STORIES
// ===================================

export const Default: Story = {
  args: {
    variant: 'terminal',
    errorCode: '404',
    showCode: true,
    showRetry: true,
    showHome: true,
    bordered: true,
    fullHeight: false
  }
}

export const Terminal404: Story = {
  args: {
    variant: 'terminal',
    errorCode: '404',
    animated: true,
    scanlines: true,
    fullHeight: false
  }
}

export const Matrix500: Story = {
  args: {
    variant: 'matrix',
    errorCode: '500',
    glitch: true,
    animated: true,
    fullHeight: false
  }
}

export const Retro403: Story = {
  args: {
    variant: 'retro',
    errorCode: '403',
    animated: true,
    fullHeight: false
  }
}

// ===================================
// ERROR CODE VARIATIONS
// ===================================

export const AllErrorCodes: Story = {
  args: {
    variant: 'terminal',
    fullHeight: false
  },
  render: (args) => {
    const errorCodes = ['404', '403', '500', '503', '502', '401', '408', '429', 'network'] as const
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
        {errorCodes.map((code) => (
          <div key={code} style={{ height: '400px', border: '1px solid #333' }}>
            <ErrorPage {...args} errorCode={code} />
          </div>
        ))}
      </div>
    )
  }
}

// ===================================
// THEME VARIATIONS
// ===================================

export const ThemeVariants: Story = {
  args: {
    errorCode: '404',
    animated: true,
    fullHeight: false
  },
  render: (args) => {
    const variants = ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'] as const
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ height: '400px', border: '1px solid #333' }}>
            <ErrorPage {...args} variant={variant} />
          </div>
        ))}
      </div>
    )
  }
}

// ===================================
// JAPANESE SEASONAL THEMES
// ===================================

export const JapaneseSeasons: Story = {
  args: {
    errorCode: '404',
    animated: true,
    fullHeight: false
  },
  render: (args) => {
    const seasons = [
      { variant: 'haru', name: 'Haru (Spring)' },
      { variant: 'natsu', name: 'Natsu (Summer)' },
      { variant: 'aki', name: 'Aki (Autumn)' },
      { variant: 'fuyu', name: 'Fuyu (Winter)' }
    ] as const
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
        {seasons.map(({ variant, name }) => (
          <div key={variant} style={{ height: '400px', border: '1px solid #333' }}>
            <ErrorPage 
              {...args} 
              variant={variant}
              title={name}
              message={`Error page with ${name} theme`}
            />
          </div>
        ))}
      </div>
    )
  }
}

// ===================================
// EFFECTS SHOWCASE
// ===================================

export const WithEffects: Story = {
  args: {
    variant: 'terminal',
    errorCode: '500',
    scanlines: true,
    glitch: true,
    animated: true,
    bordered: true,
    fullHeight: false
  }
}

export const WithCustomImage: Story = {
  args: {
    variant: 'retro',
    errorCode: '404',
    animated: true,
    fullHeight: false,
    image: {
      src: 'https://picsum.photos/200/200?random=1',
      alt: 'Custom error image',
      fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4='
    }
  }
}

// ===================================
// INTERACTIVE EXAMPLES
// ===================================

export const WithCustomActions: Story = {
  args: {
    variant: 'glow',
    errorCode: '403',
    showRetry: false,
    showHome: false,
    fullHeight: false,
    customActions: [
      {
        label: 'Sign In',
        onClick: () => alert('Sign in clicked'),
        variant: 'primary'
      },
      {
        label: 'Contact Support',
        onClick: () => alert('Contact support clicked'),
        variant: 'secondary'
      },
      {
        label: 'Report Issue',
        onClick: () => alert('Report issue clicked'),
        variant: 'danger'
      }
    ]
  }
}

export const InteractiveDemo: Story = {
  render: () => {
    const [errorCode, setErrorCode] = useState<'404' | '403' | '500' | '503'>('404')
    const [variant, setVariant] = useState<'terminal' | 'matrix' | 'retro' | 'glow'>('terminal')
    
    return (
      <div>
        <div style={{ 
          padding: '20px', 
          background: '#f5f5f5', 
          marginBottom: '20px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div>
            <label>Error Code: </label>
            <select 
              value={errorCode} 
              onChange={(e) => setErrorCode(e.target.value as any)}
              style={{ padding: '5px', marginLeft: '10px' }}
            >
              <option value="404">404 - Not Found</option>
              <option value="403">403 - Forbidden</option>
              <option value="500">500 - Server Error</option>
              <option value="503">503 - Service Unavailable</option>
            </select>
          </div>
          <div>
            <label>Theme: </label>
            <select 
              value={variant} 
              onChange={(e) => setVariant(e.target.value as any)}
              style={{ padding: '5px', marginLeft: '10px' }}
            >
              <option value="terminal">Terminal</option>
              <option value="matrix">Matrix</option>
              <option value="retro">Retro</option>
              <option value="glow">Glow</option>
            </select>
          </div>
        </div>
        <div style={{ height: '500px', border: '1px solid #ccc' }}>
          <ErrorPage 
            variant={variant}
            errorCode={errorCode}
            animated={true}
            onRetry={() => alert('Retry clicked!')}
            onHome={() => alert('Home clicked!')}
          />
        </div>
      </div>
    )
  }
}

// ===================================
// SPECIALIZED COMPONENTS
// ===================================

export const NotFoundPage: Story = {
  render: () => (
    <NotFound 
      variant="matrix" 
      animated={true}
      fullHeight={false}
      title="Page Lost in the Matrix"
      message="The page you seek has been absorbed into the digital void."
    />
  )
}

export const ForbiddenPage: Story = {
  render: () => (
    <Forbidden 
      variant="retro" 
      animated={true}
      fullHeight={false}
      glitch={true}
      title="Access Denied - Neon Zone"
      message="Your clearance level is insufficient."
    />
  )
}

export const ServerErrorPage: Story = {
  render: () => (
    <ServerError 
      variant="terminal" 
      animated={true}
      fullHeight={false}
      scanlines={true}
      title="System Malfunction"
      message="Critical error in the mainframe."
    />
  )
}

export const UnauthorizedPage: Story = {
  render: () => (
    <Unauthorized 
      variant="glow" 
      animated={true}
      fullHeight={false}
      title="Authentication Required"
      message="Please verify your digital identity."
    />
  )
}

// ===================================
// RESPONSIVE DEMO
// ===================================

export const ResponsiveDemo: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc' }}>
      <ErrorPage 
        variant="haru"
        errorCode="404"
        animated={true}
        fullHeight={false}
        title="Mobile-Friendly Error"
        message="This error page adapts to mobile screens."
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}

// ===================================
// FULL HEIGHT DEMO
// ===================================

export const FullHeightDemo: Story = {
  args: {
    variant: 'sumi',
    errorCode: '500',
    animated: true,
    scanlines: true,
    fullHeight: true,
    title: 'Full Height Error Page',
    message: 'This error page fills the entire viewport height.'
  },
  parameters: {
    layout: 'fullscreen'
  }
}