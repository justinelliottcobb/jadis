import React from 'react'
import './ErrorPages.scss'
import { ImageArea } from '../ImageArea'

export type ErrorVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type ErrorCode = '404' | '403' | '500' | '503' | '502' | '401' | '408' | '429' | 'network' | 'custom'

// ===================================
// ERROR PAGE INTERFACE
// ===================================

export interface ErrorPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: ErrorVariant
  errorCode?: ErrorCode
  title?: string
  message?: string
  description?: string
  showCode?: boolean
  showRetry?: boolean
  showHome?: boolean
  onRetry?: () => void
  onHome?: () => void
  customActions?: Array<{
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary' | 'danger'
  }>
  image?: {
    src: string
    alt: string
    fallback?: string
  }
  bordered?: boolean
  scanlines?: boolean
  glitch?: boolean
  animated?: boolean
  fullHeight?: boolean
  centerContent?: boolean
}

// Error code configurations
const ERROR_CONFIGS = {
  '404': {
    title: 'Page Not Found',
    message: 'The requested resource could not be located.',
    description: 'The page you are looking for might have been moved, deleted, or is temporarily unavailable.',
    ascii: `
 ▄▄▄  ▄▄▄  ▄▄▄  
▐▀░▀▌▐▀░▀▌▐▀░▀▌ 
 ▀▄▄▀ ▀▄▄▀ ▀▄▄▀  
                 
FILE NOT FOUND   
`
  },
  '403': {
    title: 'Access Forbidden',
    message: 'You do not have permission to access this resource.',
    description: 'Your current authentication level is insufficient for this operation.',
    ascii: `
╔═══════════════╗
║   ACCESS      ║
║   DENIED      ║
║               ║
║ ⚠ FORBIDDEN ⚠ ║
╚═══════════════╝
`
  },
  '500': {
    title: 'Server Error',
    message: 'Internal server error occurred.',
    description: 'An unexpected error occurred while processing your request. Please try again later.',
    ascii: `
⚠  SYSTEM ERROR  ⚠
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
ERROR 500
INTERNAL FAILURE
PLEASE STANDBY...
`
  },
  '503': {
    title: 'Service Unavailable',
    message: 'Service temporarily unavailable.',
    description: 'The server is currently undergoing maintenance or is overloaded.',
    ascii: `
⚡ MAINTENANCE MODE ⚡
║██████████████████║
║                  ║
║  SERVER OFFLINE  ║
║                  ║
║██████████████████║
`
  },
  '502': {
    title: 'Bad Gateway',
    message: 'Bad gateway error.',
    description: 'The server received an invalid response from an upstream server.',
    ascii: `
🔗 GATEWAY ERROR 🔗
┌──────────────────┐
│ ××××××××××××××× │
│ CONNECTION FAIL  │
│ ××××××××××××××× │
└──────────────────┘
`
  },
  '401': {
    title: 'Unauthorized',
    message: 'Authentication required.',
    description: 'You must be logged in to access this resource.',
    ascii: `
🔐 AUTHORIZATION 🔐
┌──────────────────┐
│ LOGIN REQUIRED   │
│                  │
│ ACCESS:  DENIED  │
│ STATUS:  401     │
└──────────────────┘
`
  },
  '408': {
    title: 'Request Timeout',
    message: 'Request timeout occurred.',
    description: 'The server timed out waiting for the request.',
    ascii: `
⏱  TIMEOUT ERROR  ⏱
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
CONNECTION LOST
RETRY RECOMMENDED
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`
  },
  '429': {
    title: 'Too Many Requests',
    message: 'Rate limit exceeded.',
    description: 'Too many requests have been sent in a given amount of time.',
    ascii: `
🚦 RATE LIMIT 🚦
║████████████████║
║ SLOW DOWN!     ║
║ TOO FAST       ║
║████████████████║
`
  },
  'network': {
    title: 'Network Error',
    message: 'Network connection failed.',
    description: 'Unable to establish a connection to the server.',
    ascii: `
📡 NETWORK ERROR 📡
╭─────────────────╮
│  ✕ ✕ ✕ ✕ ✕ ✕   │
│ CONNECTION LOST │
│  ✕ ✕ ✕ ✕ ✕ ✕   │
╰─────────────────╯
`
  },
  'custom': {
    title: 'Error',
    message: 'An error occurred.',
    description: 'Please try again or contact support if the problem persists.',
    ascii: `
⚠   SYSTEM ALERT   ⚠
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
UNKNOWN ERROR
PLEASE INVESTIGATE
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
`
  }
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  variant = 'terminal',
  errorCode = '404',
  title,
  message,
  description,
  showCode = true,
  showRetry = true,
  showHome = true,
  onRetry,
  onHome,
  customActions = [],
  image,
  bordered = true,
  scanlines = false,
  glitch = false,
  animated = false,
  fullHeight = true,
  centerContent = true,
  className = '',
  ...props
}) => {
  const config = ERROR_CONFIGS[errorCode]
  
  const classes = [
    'jadis-error',
    `jadis-error--${variant}`,
    bordered && 'jadis-error--bordered',
    scanlines && 'jadis-fx-scanlines',
    glitch && 'jadis-fx-glitch-static',
    animated && 'jadis-error--animated',
    fullHeight && 'jadis-error--full-height',
    centerContent && 'jadis-error--center',
    className
  ].filter(Boolean).join(' ')

  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  const handleHome = () => {
    if (onHome) {
      onHome()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div {...props} className={classes} role="alert" aria-live="assertive">
      <div className="jadis-error__container">
        {/* Error Code Display */}
        {showCode && (
          <div className="jadis-error__code">
            <span className="jadis-error__code-text">
              {errorCode.toUpperCase()}
            </span>
          </div>
        )}

        {/* ASCII Art */}
        <div className="jadis-error__ascii" aria-hidden="true">
          <pre>{config.ascii}</pre>
        </div>

        {/* Image */}
        {image && (
          <div className="jadis-error__image">
            <ImageArea
              variant={variant}
              size="medium"
              src={image.src}
              alt={image.alt}
              fallback={image.fallback}
              bordered={bordered}
              scanlines={scanlines}
              glitch={glitch}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
        )}

        {/* Content */}
        <div className="jadis-error__content">
          <h1 className="jadis-error__title">
            {title || config.title}
          </h1>
          
          <p className="jadis-error__message">
            {message || config.message}
          </p>
          
          {(description || config.description) && (
            <p className="jadis-error__description">
              {description || config.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="jadis-error__actions">
          {showRetry && (
            <button
              className="jadis-error__action jadis-error__action--primary"
              onClick={handleRetry}
            >
              ↻ Retry
            </button>
          )}
          
          {showHome && (
            <button
              className="jadis-error__action jadis-error__action--secondary"
              onClick={handleHome}
            >
              ← Home
            </button>
          )}
          
          {customActions.map((action, index) => (
            <button
              key={index}
              className={`jadis-error__action jadis-error__action--${action.variant || 'secondary'}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="jadis-error__footer">
          <div className="jadis-error__timestamp">
            {new Date().toISOString()}
          </div>
          <div className="jadis-error__reference">
            REF: ERROR_{errorCode.toUpperCase()}_{Date.now().toString(36).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Effects Overlay */}
      <div className="jadis-error__overlay"></div>
    </div>
  )
}

// ===================================
// SPECIALIZED ERROR COMPONENTS
// ===================================

export const NotFound: React.FC<Omit<ErrorPageProps, 'errorCode'>> = (props) => (
  <ErrorPage {...props} errorCode="404" />
)

export const Forbidden: React.FC<Omit<ErrorPageProps, 'errorCode'>> = (props) => (
  <ErrorPage {...props} errorCode="403" />
)

export const ServerError: React.FC<Omit<ErrorPageProps, 'errorCode'>> = (props) => (
  <ErrorPage {...props} errorCode="500" />
)

export const Unauthorized: React.FC<Omit<ErrorPageProps, 'errorCode'>> = (props) => (
  <ErrorPage {...props} errorCode="401" />
)