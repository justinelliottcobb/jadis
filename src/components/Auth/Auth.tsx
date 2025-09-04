import React, { useState } from 'react'
import { ASCIIIcon } from '../Icons/Icons'
import { Button } from '../Buttons/Buttons'
import { Input, Checkbox } from '../Forms/Forms'
import { Card, CardHeader, CardBody, CardActions } from '../Cards/Cards'
import { H1, H2, H3 } from '../Headers/Headers'
import { P, Code, Strong } from '../Typography/Typography'
import './Auth.scss'

// Common Types
export type AuthVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'

// ===================================
// LOGIN FORM COMPONENT
// ===================================

export interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> {
  variant?: AuthVariant
  title?: string
  subtitle?: string
  username?: string
  password?: string
  rememberMe?: boolean
  loading?: boolean
  error?: string
  onSubmit?: (data: {
    username: string
    password: string
    rememberMe: boolean
  }) => void
  onForgotPassword?: () => void
  onRegister?: () => void
  showRememberMe?: boolean
  showForgotPassword?: boolean
  showRegisterLink?: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({
  variant = 'terminal',
  title = 'SYSTEM ACCESS',
  subtitle = 'Enter your credentials',
  username: initialUsername = '',
  password: initialPassword = '',
  rememberMe: initialRememberMe = false,
  loading = false,
  error,
  onSubmit,
  onForgotPassword,
  onRegister,
  showRememberMe = true,
  showForgotPassword = true,
  showRegisterLink = true,
  className = '',
  ...props
}) => {
  const [username, setUsername] = useState(initialUsername)
  const [password, setPassword] = useState(initialPassword)
  const [rememberMe, setRememberMe] = useState(initialRememberMe)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit && !loading) {
      onSubmit({ username, password, rememberMe })
    }
  }

  const classes = [
    'jadis-login-form',
    `jadis-login-form--${variant}`,
    loading && 'jadis-login-form--loading',
    className
  ].filter(Boolean).join(' ')

  return (
    <Card variant={variant} className={classes}>
      <form onSubmit={handleSubmit} {...props}>
        <CardHeader>
          <div className="jadis-login-form__header">
            <ASCIIIcon icon="◐" variant={variant} size="large" />
            <div className="jadis-login-form__titles">
              <H2 variant="simple" className="jadis-login-form__title">
                {title}
              </H2>
              {subtitle && (
                <P variant={variant} className="jadis-login-form__subtitle">
                  {subtitle}
                </P>
              )}
            </div>
          </div>
        </CardHeader>

        <CardBody>
          {error && (
            <div className={`jadis-login-form__error jadis-login-form__error--${variant}`}>
              <ASCIIIcon icon="◎" variant={variant} />
              <span>{error}</span>
            </div>
          )}

          <div className="jadis-login-form__fields">
            <Input
              variant={variant}
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              required
              disabled={loading}
              icon="◐"
            />

            <Input
              variant={variant}
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              required
              disabled={loading}
              icon="◒"
            />

            {showRememberMe && (
              <Checkbox
                variant={variant}
                label="Remember me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />
            )}
          </div>
        </CardBody>

        <CardActions>
          <div className="jadis-login-form__actions">
            <Button
              variant={variant}
              type="submit"
              size="large"
              disabled={loading || !username || !password}
              className="jadis-login-form__submit"
            >
              {loading ? (
                <>
                  <ASCIIIcon icon="◐" variant={variant} />
                  AUTHENTICATING...
                </>
              ) : (
                <>
                  <ASCIIIcon icon="►" variant={variant} />
                  ACCESS SYSTEM
                </>
              )}
            </Button>

            {showForgotPassword && onForgotPassword && (
              <Button
                variant={variant}
                type="button"
                size="small"
                outline
                onClick={onForgotPassword}
                disabled={loading}
              >
                Forgot Password?
              </Button>
            )}
          </div>

          {showRegisterLink && onRegister && (
            <div className="jadis-login-form__register">
              <P variant={variant}>
                Don't have an account?{' '}
                <button
                  type="button"
                  className={`jadis-login-form__link jadis-login-form__link--${variant}`}
                  onClick={onRegister}
                  disabled={loading}
                >
                  Register here
                </button>
              </P>
            </div>
          )}
        </CardActions>
      </form>
    </Card>
  )
}

// ===================================
// REGISTER FORM COMPONENT
// ===================================

export interface RegisterFormProps extends React.HTMLAttributes<HTMLFormElement> {
  variant?: AuthVariant
  title?: string
  subtitle?: string
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
  acceptTerms?: boolean
  loading?: boolean
  error?: string
  onSubmit?: (data: {
    username: string
    email: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
  }) => void
  onLogin?: () => void
  showLoginLink?: boolean
  requireTerms?: boolean
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  variant = 'terminal',
  title = 'CREATE ACCOUNT',
  subtitle = 'Join the system',
  username: initialUsername = '',
  email: initialEmail = '',
  password: initialPassword = '',
  confirmPassword: initialConfirmPassword = '',
  acceptTerms: initialAcceptTerms = false,
  loading = false,
  error,
  onSubmit,
  onLogin,
  showLoginLink = true,
  requireTerms = true,
  className = '',
  ...props
}) => {
  const [username, setUsername] = useState(initialUsername)
  const [email, setEmail] = useState(initialEmail)
  const [password, setPassword] = useState(initialPassword)
  const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword)
  const [acceptTerms, setAcceptTerms] = useState(initialAcceptTerms)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit && !loading) {
      onSubmit({ username, email, password, confirmPassword, acceptTerms })
    }
  }

  const classes = [
    'jadis-register-form',
    `jadis-register-form--${variant}`,
    loading && 'jadis-register-form--loading',
    className
  ].filter(Boolean).join(' ')

  const isValid = username && email && password && confirmPassword && 
    password === confirmPassword && (!requireTerms || acceptTerms)

  return (
    <Card variant={variant} className={classes}>
      <form onSubmit={handleSubmit} {...props}>
        <CardHeader>
          <div className="jadis-register-form__header">
            <ASCIIIcon icon="◑" variant={variant} size="large" />
            <div className="jadis-register-form__titles">
              <H2 variant="simple" className="jadis-register-form__title">
                {title}
              </H2>
              {subtitle && (
                <P variant={variant} className="jadis-register-form__subtitle">
                  {subtitle}
                </P>
              )}
            </div>
          </div>
        </CardHeader>

        <CardBody>
          {error && (
            <div className={`jadis-register-form__error jadis-register-form__error--${variant}`}>
              <ASCIIIcon icon="◎" variant={variant} />
              <span>{error}</span>
            </div>
          )}

          <div className="jadis-register-form__fields">
            <Input
              variant={variant}
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose username..."
              required
              disabled={loading}
              icon="◐"
            />

            <Input
              variant={variant}
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address..."
              required
              disabled={loading}
              icon="▦"
            />

            <Input
              variant={variant}
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password..."
              required
              disabled={loading}
              icon="◒"
            />

            <Input
              variant={variant}
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password..."
              required
              disabled={loading}
              icon="◒"
              error={confirmPassword && password !== confirmPassword ? "Passwords don't match" : undefined}
            />

            {requireTerms && (
              <Checkbox
                variant={variant}
                label={
                  <>
                    I accept the{' '}
                    <button
                      type="button"
                      className={`jadis-register-form__link jadis-register-form__link--${variant}`}
                    >
                      Terms of Service
                    </button>
                  </>
                }
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                disabled={loading}
                required
              />
            )}
          </div>
        </CardBody>

        <CardActions>
          <div className="jadis-register-form__actions">
            <Button
              variant={variant}
              type="submit"
              size="large"
              disabled={loading || !isValid}
              className="jadis-register-form__submit"
            >
              {loading ? (
                <>
                  <ASCIIIcon icon="◐" variant={variant} />
                  CREATING ACCOUNT...
                </>
              ) : (
                <>
                  <ASCIIIcon icon="●" variant={variant} />
                  CREATE ACCOUNT
                </>
              )}
            </Button>
          </div>

          {showLoginLink && onLogin && (
            <div className="jadis-register-form__login">
              <P variant={variant}>
                Already have an account?{' '}
                <button
                  type="button"
                  className={`jadis-register-form__link jadis-register-form__link--${variant}`}
                  onClick={onLogin}
                  disabled={loading}
                >
                  Sign in here
                </button>
              </P>
            </div>
          )}
        </CardActions>
      </form>
    </Card>
  )
}

// ===================================
// SESSION STATUS COMPONENT
// ===================================

export interface SessionUser {
  username: string
  email?: string
  role?: string
  lastLogin?: string
  avatar?: React.ReactNode
}

export interface SessionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AuthVariant
  user: SessionUser | null
  loading?: boolean
  showDetails?: boolean
  compact?: boolean
  onLogout?: () => void
  onProfile?: () => void
}

export const SessionStatus: React.FC<SessionStatusProps> = ({
  variant = 'terminal',
  user,
  loading = false,
  showDetails = true,
  compact = false,
  onLogout,
  onProfile,
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-session-status',
    `jadis-session-status--${variant}`,
    compact && 'jadis-session-status--compact',
    loading && 'jadis-session-status--loading',
    !user && 'jadis-session-status--guest',
    className
  ].filter(Boolean).join(' ')

  if (loading) {
    return (
      <div className={classes} {...props}>
        <ASCIIIcon icon="◐" variant={variant} />
        <span>Checking session...</span>
      </div>
    )
  }

  if (!user) {
    return (
      <div className={classes} {...props}>
        <ASCIIIcon icon="○" variant={variant} />
        <span>Guest Session</span>
      </div>
    )
  }

  return (
    <div className={classes} {...props}>
      <div className="jadis-session-status__user">
        <div className="jadis-session-status__avatar">
          {user.avatar || <ASCIIIcon icon="◐" variant={variant} />}
        </div>
        
        <div className="jadis-session-status__info">
          <div className="jadis-session-status__username">
            <Strong variant={variant}>{user.username}</Strong>
            {user.role && (
              <Code variant={variant} className="jadis-session-status__role">
                [{user.role}]
              </Code>
            )}
          </div>
          
          {showDetails && !compact && (
            <div className="jadis-session-status__details">
              {user.email && (
                <P variant={variant} className="jadis-session-status__email">
                  {user.email}
                </P>
              )}
              {user.lastLogin && (
                <P variant={variant} className="jadis-session-status__last-login">
                  Last: {user.lastLogin}
                </P>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="jadis-session-status__actions">
        {onProfile && (
          <Button
            variant={variant}
            size="small"
            outline
            onClick={onProfile}
          >
            <ASCIIIcon icon="◐" variant={variant} />
            {!compact && 'Profile'}
          </Button>
        )}
        
        {onLogout && (
          <Button
            variant={variant}
            size="small"
            color="error"
            onClick={onLogout}
          >
            <ASCIIIcon icon="◄" variant={variant} />
            {!compact && 'Logout'}
          </Button>
        )}
      </div>
    </div>
  )
}

// ===================================
// AUTH GUARD COMPONENT
// ===================================

export interface AuthGuardProps {
  variant?: AuthVariant
  user: SessionUser | null
  loading?: boolean
  fallback?: React.ReactNode
  children: React.ReactNode
  requireRole?: string
  onUnauthorized?: () => void
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  variant = 'terminal',
  user,
  loading = false,
  fallback,
  children,
  requireRole,
  onUnauthorized
}) => {
  if (loading) {
    return (
      <div className={`jadis-auth-guard jadis-auth-guard--${variant} jadis-auth-guard--loading`}>
        <ASCIIIcon icon="◐" variant={variant} size="large" />
        <P variant={variant}>Verifying authentication...</P>
      </div>
    )
  }

  if (!user) {
    if (onUnauthorized) {
      onUnauthorized()
    }
    
    return fallback || (
      <div className={`jadis-auth-guard jadis-auth-guard--${variant} jadis-auth-guard--unauthorized`}>
        <ASCIIIcon icon="◎" variant={variant} size="large" />
        <H3 variant="simple">ACCESS DENIED</H3>
        <P variant={variant}>Authentication required to access this resource.</P>
      </div>
    )
  }

  if (requireRole && user.role !== requireRole) {
    return (
      <div className={`jadis-auth-guard jadis-auth-guard--${variant} jadis-auth-guard--forbidden`}>
        <ASCIIIcon icon="◈" variant={variant} size="large" />
        <H3 variant="simple">INSUFFICIENT PRIVILEGES</H3>
        <P variant={variant}>
          Role <Code variant={variant}>{requireRole}</Code> required. 
          Current role: <Code variant={variant}>{user.role || 'none'}</Code>
        </P>
      </div>
    )
  }

  return <>{children}</>
}

// ===================================
// LOGOUT CONFIRMATION COMPONENT
// ===================================

export interface LogoutConfirmProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AuthVariant
  user: SessionUser
  onConfirm?: () => void
  onCancel?: () => void
  loading?: boolean
}

export const LogoutConfirm: React.FC<LogoutConfirmProps> = ({
  variant = 'terminal',
  user,
  onConfirm,
  onCancel,
  loading = false,
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-logout-confirm',
    `jadis-logout-confirm--${variant}`,
    loading && 'jadis-logout-confirm--loading',
    className
  ].filter(Boolean).join(' ')

  return (
    <Card variant={variant} className={classes} {...props}>
      <CardHeader>
        <div className="jadis-logout-confirm__header">
          <ASCIIIcon icon="◈" variant={variant} size="large" />
          <H3 variant="simple">Confirm Logout</H3>
        </div>
      </CardHeader>

      <CardBody>
        <P variant={variant}>
          Are you sure you want to logout <Strong variant={variant}>{user.username}</Strong>?
        </P>
        <P variant={variant} style={{ fontSize: '0.875rem', opacity: 0.8 }}>
          You will need to sign in again to access your account.
        </P>
      </CardBody>

      <CardActions>
        <div className="jadis-logout-confirm__actions">
          <Button
            variant={variant}
            color="error"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? (
              <>
                <ASCIIIcon icon="◐" variant={variant} />
                Logging out...
              </>
            ) : (
              <>
                <ASCIIIcon icon="◄" variant={variant} />
                Confirm Logout
              </>
            )}
          </Button>
          
          <Button
            variant={variant}
            outline
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
        </div>
      </CardActions>
    </Card>
  )
}