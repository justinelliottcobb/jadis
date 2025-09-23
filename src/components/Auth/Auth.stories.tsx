import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { LoginForm, RegisterForm, SessionStatus, AuthGuard, LogoutConfirm, SessionUser } from './Auth'
import { H1, H2 } from '../Headers/Headers'
import { P } from '../Typography/Typography'
import { Button } from '../Buttons/Buttons'
import { Card, CardHeader, CardBody } from '../Cards/Cards'
import { Grid, GridItem } from '../Grid/Grid'
import { PageLayout, AppHeader } from '../Layout/Layout'

// ===================================
// LOGIN FORM STORIES
// ===================================

const LoginFormMeta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Terminal-styled login form component with support for all Jadis variants. Features username/password authentication, remember me functionality, and error handling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the login form',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state during authentication',
    },
    showRememberMe: {
      control: 'boolean',
      description: 'Show remember me checkbox',
    },
    showForgotPassword: {
      control: 'boolean',
      description: 'Show forgot password link',
    },
    showRegisterLink: {
      control: 'boolean',
      description: 'Show register account link',
    },
  },
}

export default LoginFormMeta
type LoginStory = StoryObj<typeof LoginForm>

export const TerminalLogin: LoginStory = {
  args: {
    variant: 'terminal',
    title: 'TERMINAL ACCESS',
    subtitle: 'Enter system credentials',
    onSubmit: (data) => {
      console.log('Terminal login:', data)
      alert(`Terminal authentication: ${data.username}`)
    },
    onForgotPassword: () => alert('Forgot password - Terminal'),
    onRegister: () => alert('Register - Terminal'),
  },
}

export const MatrixLogin: LoginStory = {
  args: {
    variant: 'matrix',
    title: 'MATRIX INTERFACE',
    subtitle: 'Jack into the system',
    onSubmit: (data) => {
      console.log('Matrix login:', data)
      alert(`Matrix authentication: ${data.username}`)
    },
    onForgotPassword: () => alert('Password recovery protocol initiated'),
    onRegister: () => alert('New user registration - Matrix'),
  },
}

export const RetroLogin: LoginStory = {
  args: {
    variant: 'retro',
    title: 'RETRO-COMP LOGIN',
    subtitle: 'Please identify yourself',
    onSubmit: (data) => {
      console.log('Retro login:', data)
      alert(`Retro system access: ${data.username}`)
    },
    onForgotPassword: () => alert('Password assistance - Retro system'),
    onRegister: () => alert('Create new account - Retro'),
  },
}

export const MinimalLogin: LoginStory = {
  args: {
    variant: 'minimal',
    title: 'Sign In',
    subtitle: 'Access your account',
    onSubmit: (data) => {
      console.log('Minimal login:', data)
      alert(`Authentication: ${data.username}`)
    },
    onForgotPassword: () => alert('Password reset'),
    onRegister: () => alert('Create account'),
  },
}

export const GlowLogin: LoginStory = {
  args: {
    variant: 'glow',
    title: 'COSMIC PORTAL',
    subtitle: 'Transcend into the system',
    onSubmit: (data) => {
      console.log('Glow login:', data)
      alert(`Cosmic authentication: ${data.username}`)
    },
    onForgotPassword: () => alert('Stellar password recovery'),
    onRegister: () => alert('Ascend to membership'),
  },
}

export const LoginWithError: LoginStory = {
  args: {
    variant: 'terminal',
    error: 'Invalid credentials. Access denied.',
    title: 'ACCESS DENIED',
    subtitle: 'Authentication failed',
    onSubmit: (data) => {
      console.log('Login with error:', data)
    },
  },
}

export const LoadingLogin: LoginStory = {
  args: {
    variant: 'matrix',
    loading: true,
    title: 'AUTHENTICATING...',
    subtitle: 'Verifying neural interface',
    username: 'neo',
    password: '••••••••',
  },
}

export const InteractiveLogin: LoginStory = {
  render: (args) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    const handleSubmit = (data: any) => {
      setLoading(true)
      setError(undefined)
      
      // Simulate authentication
      setTimeout(() => {
        if (data.username === 'admin' && data.password === 'password') {
          setLoading(false)
          alert(`Welcome ${data.username}!`)
        } else {
          setLoading(false)
          setError('Invalid username or password. Try admin/password')
        }
      }, 2000)
    }

    return (
      <LoginForm
        {...args}
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
        onForgotPassword={() => alert('Password reset initiated')}
        onRegister={() => alert('Redirecting to registration')}
      />
    )
  },
  args: {
    variant: 'terminal',
    title: 'INTERACTIVE DEMO',
    subtitle: 'Try admin/password',
  },
}

// ===================================
// REGISTER FORM STORIES
// ===================================

const RegisterFormMeta: Meta<typeof RegisterForm> = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'User registration form with email validation, password confirmation, and terms acceptance. Supports all Jadis visual variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the registration form',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state during registration',
    },
    requireTerms: {
      control: 'boolean',
      description: 'Require terms acceptance',
    },
    showLoginLink: {
      control: 'boolean',
      description: 'Show login redirect link',
    },
  },
}

export { RegisterFormMeta }

export const TerminalRegister: StoryObj<typeof RegisterForm> = {
  args: {
    variant: 'terminal',
    title: 'CREATE ACCOUNT',
    subtitle: 'Join the terminal network',
    onSubmit: (data) => {
      console.log('Terminal registration:', data)
      alert(`Account created: ${data.username} (${data.email})`)
    },
    onLogin: () => alert('Redirecting to login'),
  },
}

export const MatrixRegister: StoryObj<typeof RegisterForm> = {
  args: {
    variant: 'matrix',
    title: 'MATRIX REGISTRATION',
    subtitle: 'Enter the simulation',
    onSubmit: (data) => {
      console.log('Matrix registration:', data)
      alert(`Neural interface created: ${data.username}`)
    },
    onLogin: () => alert('Return to matrix login'),
  },
}

export const RetroRegister: StoryObj<typeof RegisterForm> = {
  args: {
    variant: 'retro',
    title: 'NEW USER SETUP',
    subtitle: 'Configure your account',
    onSubmit: (data) => {
      console.log('Retro registration:', data)
      alert(`Retro account established: ${data.username}`)
    },
    onLogin: () => alert('Back to login screen'),
  },
}

export const InteractiveRegister: StoryObj<typeof RegisterForm> = {
  render: (args) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    const handleSubmit = (data: any) => {
      setLoading(true)
      setError(undefined)
      
      // Simulate registration
      setTimeout(() => {
        if (data.username.length < 3) {
          setError('Username must be at least 3 characters')
          setLoading(false)
        } else if (!data.email.includes('@')) {
          setError('Please enter a valid email address')
          setLoading(false)
        } else if (data.password !== data.confirmPassword) {
          setError('Passwords do not match')
          setLoading(false)
        } else {
          setLoading(false)
          alert(`Account created successfully: ${data.username}!`)
        }
      }, 2000)
    }

    return (
      <RegisterForm
        {...args}
        loading={loading}
        error={error}
        onSubmit={handleSubmit}
        onLogin={() => alert('Switching to login form')}
      />
    )
  },
  args: {
    variant: 'glow',
    title: 'ASCENSION PROTOCOL',
    subtitle: 'Begin your cosmic journey',
  },
}

// ===================================
// SESSION STATUS STORIES
// ===================================

const SessionStatusMeta: Meta<typeof SessionStatus> = {
  title: 'Auth/SessionStatus',
  component: SessionStatus,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Session status display component showing current user information, login state, and quick action buttons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the session status',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    compact: {
      control: 'boolean',
      description: 'Use compact layout',
    },
    showDetails: {
      control: 'boolean',
      description: 'Show user details (email, last login)',
    },
  },
}

export { SessionStatusMeta }

const sampleUser: SessionUser = {
  username: 'admin',
  email: 'admin@system.local',
  role: 'Administrator',
  lastLogin: '2024-03-15 14:30:00'
}

const matrixUser: SessionUser = {
  username: 'neo',
  email: 'neo@thematrix.net',
  role: 'The One',
  lastLogin: '2199-06-11 23:59:59'
}

export const TerminalSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'terminal',
    user: sampleUser,
    onLogout: () => alert('Terminal logout'),
    onProfile: () => alert('Terminal profile'),
  },
}

export const MatrixSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'matrix',
    user: matrixUser,
    onLogout: () => alert('Matrix logout - returning to reality'),
    onProfile: () => alert('Neural profile configuration'),
  },
}

export const RetroSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'retro',
    user: {
      username: 'user1984',
      email: 'user@retrocomp.sys',
      role: 'Operator',
      lastLogin: '1984-12-25 08:00:00'
    },
    onLogout: () => alert('Retro system logout'),
    onProfile: () => alert('User profile editor'),
  },
}

export const CompactSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'minimal',
    user: sampleUser,
    compact: true,
    showDetails: false,
    onLogout: () => alert('Compact logout'),
    onProfile: () => alert('Quick profile'),
  },
}

export const LoadingSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'glow',
    user: null,
    loading: true,
  },
}

export const GuestSession: StoryObj<typeof SessionStatus> = {
  args: {
    variant: 'terminal',
    user: null,
    loading: false,
  },
}

// ===================================
// AUTH GUARD STORIES
// ===================================

const AuthGuardMeta: Meta<typeof AuthGuard> = {
  title: 'Auth/AuthGuard',
  component: AuthGuard,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Authentication guard component that protects content based on user authentication and role requirements.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual variant of the auth guard',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
  },
}

export { AuthGuardMeta }

export const AuthorizedAccess: StoryObj<typeof AuthGuard> = {
  args: {
    variant: 'terminal',
    user: sampleUser,
    children: (
      <Card variant="terminal">
        <CardHeader title="Protected Content" />
        <CardBody>
          <P variant="terminal">
            This content is protected and only visible to authenticated users.
            Welcome, {sampleUser.username}!
          </P>
        </CardBody>
      </Card>
    ),
  },
}

export const UnauthorizedAccess: StoryObj<typeof AuthGuard> = {
  args: {
    variant: 'terminal',
    user: null,
    onUnauthorized: () => alert('Redirecting to login'),
    children: (
      <Card variant="terminal">
        <CardHeader title="Secret Data" />
        <CardBody>
          <P variant="terminal">This should not be visible!</P>
        </CardBody>
      </Card>
    ),
  },
}

export const RoleBasedAccess: StoryObj<typeof AuthGuard> = {
  args: {
    variant: 'matrix',
    user: { username: 'agent_smith', role: 'Agent' },
    requireRole: 'Administrator',
    children: (
      <Card variant="matrix">
        <CardHeader title="Admin Panel" />
        <CardBody>
          <P variant="matrix">Administrator-only content.</P>
        </CardBody>
      </Card>
    ),
  },
}

export const LoadingAuth: StoryObj<typeof AuthGuard> = {
  args: {
    variant: 'glow',
    user: null,
    loading: true,
    children: (
      <Card variant="glow">
        <CardHeader title="Loading Protected Content" />
        <CardBody>
          <P variant="glow">This is loading...</P>
        </CardBody>
      </Card>
    ),
  },
}

// ===================================
// LOGOUT CONFIRM STORIES
// ===================================

const LogoutConfirmMeta: Meta<typeof LogoutConfirm> = {
  title: 'Auth/LogoutConfirm',
  component: LogoutConfirm,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
        { name: 'matrix', value: '#000000' },
        { name: 'retro', value: '#2a1810' },
        { name: 'glow', value: '#0a0015' },
      ],
    },
    docs: {
      description: {
        component: 'Logout confirmation dialog to prevent accidental logouts with clear action buttons.',
      },
    },
  },
}

export { LogoutConfirmMeta }

export const TerminalLogout: StoryObj<typeof LogoutConfirm> = {
  args: {
    variant: 'terminal',
    user: sampleUser,
    onConfirm: () => alert('Terminal logout confirmed'),
    onCancel: () => alert('Logout cancelled'),
  },
}

export const MatrixLogout: StoryObj<typeof LogoutConfirm> = {
  args: {
    variant: 'matrix',
    user: matrixUser,
    onConfirm: () => alert('Disconnecting from the Matrix'),
    onCancel: () => alert('Staying in the Matrix'),
  },
}

export const LogoutInProgress: StoryObj<typeof LogoutConfirm> = {
  args: {
    variant: 'retro',
    user: sampleUser,
    loading: true,
  },
}

// ===================================
// COMPLETE AUTH FLOWS
// ===================================

export const AuthFlow: StoryObj<typeof LoginForm> = {
  title: 'Auth/Complete Auth Flow',
  render: () => {
    const [currentView, setCurrentView] = useState<'login' | 'register' | 'dashboard'>('login')
    const [user, setUser] = useState<SessionUser | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    const handleLogin = (data: any) => {
      setLoading(true)
      setError(undefined)
      
      setTimeout(() => {
        if (data.username === 'demo' && data.password === 'demo') {
          setUser({
            username: data.username,
            email: 'demo@jadis.dev',
            role: 'User',
            lastLogin: new Date().toLocaleString()
          })
          setCurrentView('dashboard')
          setLoading(false)
        } else {
          setError('Invalid credentials. Try demo/demo')
          setLoading(false)
        }
      }, 1500)
    }

    const handleRegister = (data: any) => {
      setLoading(true)
      setError(undefined)
      
      setTimeout(() => {
        if (data.password !== data.confirmPassword) {
          setError('Passwords do not match')
          setLoading(false)
        } else {
          setUser({
            username: data.username,
            email: data.email,
            role: 'User',
            lastLogin: new Date().toLocaleString()
          })
          setCurrentView('dashboard')
          setLoading(false)
        }
      }, 2000)
    }

    const handleLogout = () => {
      setUser(null)
      setCurrentView('login')
      setError(undefined)
    }

    if (currentView === 'dashboard' && user) {
      return (
        <PageLayout
          variant="terminal"
          header={
            <AppHeader
              variant="terminal"
              title="JADIS DASHBOARD"
              subtitle="Authenticated session"
              actions={
                <SessionStatus
                  variant="terminal"
                  user={user}
                  compact
                  onLogout={handleLogout}
                />
              }
            />
          }
        >
          <H1 variant="box" align="center">WELCOME TO JADIS</H1>
          <P variant="terminal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            You have successfully authenticated, {user.username}!
          </P>
          
          <Grid variant="terminal" columns={2} gap="large">
            <GridItem>
              <Card variant="terminal">
                <CardHeader title="User Profile" />
                <CardBody>
                  <P variant="terminal">Username: {user.username}</P>
                  <P variant="terminal">Email: {user.email}</P>
                  <P variant="terminal">Role: {user.role}</P>
                  <P variant="terminal">Last Login: {user.lastLogin}</P>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <Card variant="terminal">
                <CardHeader title="Session Actions" />
                <CardBody>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button 
                      variant="terminal" 
                      onClick={() => alert('Profile settings')}
                    >
                      Settings
                    </Button>
                    <Button 
                      variant="terminal" 
                      color="error"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </PageLayout>
      )
    }

    return (
      <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
        <H1 variant="box" align="center" style={{ marginBottom: '2rem' }}>
          JADIS AUTH DEMO
        </H1>
        
        {currentView === 'login' ? (
          <LoginForm
            variant="terminal"
            title="DEMO LOGIN"
            subtitle="Use demo/demo to login"
            loading={loading}
            error={error}
            onSubmit={handleLogin}
            onRegister={() => setCurrentView('register')}
            onForgotPassword={() => alert('Password reset demo')}
          />
        ) : (
          <RegisterForm
            variant="terminal"
            title="CREATE DEMO ACCOUNT"
            subtitle="Register a new account"
            loading={loading}
            error={error}
            onSubmit={handleRegister}
            onLogin={() => setCurrentView('login')}
          />
        )}
      </div>
    )
  },
}

// ===================================
// ALL VARIANTS SHOWCASE
// ===================================

export const AllVariantsShowcase: StoryObj<typeof LoginForm> = {
  title: 'Auth/All Variants Showcase',
  render: () => (
    <div>
      <H1 variant="box" align="center" style={{ marginBottom: '3rem' }}>
        JADIS AUTH VARIANTS
      </H1>
      
      <Grid columns={1} gap="xl">
        {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
          <GridItem key={variant}>
            <H2 variant="double-line" style={{ marginBottom: '2rem' }}>
              {variant.toUpperCase()} VARIANT
            </H2>
            
            <Grid variant={variant} columns={3} gap="large">
              <GridItem>
                <LoginForm
                  variant={variant}
                  title={`${variant.toUpperCase()} LOGIN`}
                  subtitle="Authentication form"
                  showRegisterLink={false}
                  showForgotPassword={false}
                  onSubmit={(data) => alert(`${variant} login: ${data.username}`)}
                />
              </GridItem>
              
              <GridItem>
                <div style={{ marginBottom: '1rem' }}>
                  <SessionStatus
                    variant={variant}
                    user={{
                      username: 'demo_user',
                      email: 'demo@example.com',
                      role: 'User'
                    }}
                    compact
                    onLogout={() => alert(`${variant} logout`)}
                  />
                </div>
                
                <Card variant={variant}>
                  <CardHeader title="Protected Content" />
                  <CardBody>
                    <P variant={variant}>
                      This content is protected by AuthGuard and only visible to authenticated users.
                    </P>
                  </CardBody>
                </Card>
              </GridItem>
              
              <GridItem>
                <LogoutConfirm
                  variant={variant}
                  user={{ username: 'demo_user' }}
                  onConfirm={() => alert(`${variant} logout confirmed`)}
                  onCancel={() => alert(`${variant} logout cancelled`)}
                />
              </GridItem>
            </Grid>
          </GridItem>
        ))}
      </Grid>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}