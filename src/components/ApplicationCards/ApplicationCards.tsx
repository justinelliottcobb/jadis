import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardActions } from '../Cards/Cards'
import { Button } from '../Buttons/Buttons'
import { ASCIIIcon, ASCIIIcons } from '../Icons/Icons'
import { P, Code, Strong } from '../Typography/Typography'
import './ApplicationCards.scss'

// Common Types
export type AppCardVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type AppStatus = 'running' | 'stopped' | 'error' | 'loading' | 'maintenance'
export type AppPriority = 'low' | 'medium' | 'high' | 'critical'

// ===================================
// APPLICATION CARD COMPONENT
// ===================================

export interface ApplicationCardProps {
  variant?: AppCardVariant
  name: string
  version?: string
  description?: string
  status?: AppStatus
  priority?: AppPriority
  icon?: keyof typeof ASCIIIcons | string
  uptime?: string
  lastUpdate?: string
  memoryUsage?: number
  cpuUsage?: number
  onStart?: () => void
  onStop?: () => void
  onRestart?: () => void
  onConfigure?: () => void
  onViewLogs?: () => void
  interactive?: boolean
  className?: string
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  variant = 'terminal',
  name,
  version,
  description,
  status = 'stopped',
  priority = 'medium',
  icon = 'server',
  uptime,
  lastUpdate,
  memoryUsage,
  cpuUsage,
  onStart,
  onStop,
  onRestart,
  onConfigure,
  onViewLogs,
  interactive = true,
  className = '',
  ...props
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'running': return 'success'
      case 'error': return 'error'
      case 'loading': return 'warning'
      case 'maintenance': return 'info'
      default: return 'secondary'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'running': return 'success'
      case 'error': return 'error'
      case 'loading': return 'loading'
      case 'maintenance': return 'warning'
      default: return 'inactive'
    }
  }

  const getPriorityIndicator = () => {
    switch (priority) {
      case 'critical': return '●●●●'
      case 'high': return '●●●○'
      case 'medium': return '●●○○'
      case 'low': return '●○○○'
      default: return '○○○○'
    }
  }

  return (
    <Card 
      variant={variant} 
      interactive={interactive}
      status={status === 'error' ? 'error' : status === 'running' ? 'success' : undefined}
      className={`jadis-app-card jadis-app-card--${status} ${className}`}
      {...props}
    >
      <CardHeader
        title={
          <div className="jadis-app-card__title">
            <ASCIIIcon icon={icon} variant={variant} size="medium" />
            <div className="jadis-app-card__title-text">
              <div className="jadis-app-card__name">
                {name}
                {version && <Code variant={variant} className="jadis-app-card__version">v{version}</Code>}
              </div>
              <div className="jadis-app-card__status">
                <ASCIIIcon icon={getStatusIcon()} variant={variant} size="small" />
                <Strong variant={variant}>{status.toUpperCase()}</Strong>
                <span className="jadis-app-card__priority" title={`Priority: ${priority}`}>
                  {getPriorityIndicator()}
                </span>
              </div>
            </div>
          </div>
        }
        actions={
          onConfigure && (
            <Button
              variant={variant}
              size="small"
              color="secondary"
              icon={<ASCIIIcon icon="settings" variant={variant} size="small" />}
              onClick={onConfigure}
              title="Configure Application"
            />
          )
        }
      />
      
      <CardBody>
        {description && (
          <P variant={variant} className="jadis-app-card__description">
            {description}
          </P>
        )}
        
        <div className="jadis-app-card__metrics">
          {uptime && (
            <div className="jadis-app-card__metric">
              <span className="jadis-app-card__metric-label">UPTIME:</span>
              <Code variant={variant}>{uptime}</Code>
            </div>
          )}
          
          {lastUpdate && (
            <div className="jadis-app-card__metric">
              <span className="jadis-app-card__metric-label">UPDATED:</span>
              <Code variant={variant}>{lastUpdate}</Code>
            </div>
          )}
          
          {memoryUsage !== undefined && (
            <div className="jadis-app-card__metric">
              <span className="jadis-app-card__metric-label">MEMORY:</span>
              <Code variant={variant}>{memoryUsage}%</Code>
              <div className="jadis-app-card__progress-bar">
                <div 
                  className="jadis-app-card__progress-fill" 
                  style={{ width: `${memoryUsage}%` }}
                />
              </div>
            </div>
          )}
          
          {cpuUsage !== undefined && (
            <div className="jadis-app-card__metric">
              <span className="jadis-app-card__metric-label">CPU:</span>
              <Code variant={variant}>{cpuUsage}%</Code>
              <div className="jadis-app-card__progress-bar">
                <div 
                  className="jadis-app-card__progress-fill" 
                  style={{ width: `${cpuUsage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </CardBody>
      
      <CardActions className="jadis-app-card__actions">
        {status === 'stopped' && onStart && (
          <Button
            variant={variant}
            color="success"
            size="small"
            icon={<ASCIIIcon icon="play" variant={variant} size="small" />}
            onClick={onStart}
          >
            START
          </Button>
        )}
        
        {status === 'running' && onStop && (
          <Button
            variant={variant}
            color="error"
            size="small"
            icon={<ASCIIIcon icon="stop" variant={variant} size="small" />}
            onClick={onStop}
          >
            STOP
          </Button>
        )}
        
        {(status === 'running' || status === 'error') && onRestart && (
          <Button
            variant={variant}
            color="warning"
            size="small"
            icon={<ASCIIIcon icon="restart" variant={variant} size="small" />}
            onClick={onRestart}
          >
            RESTART
          </Button>
        )}
        
        {onViewLogs && (
          <Button
            variant={variant}
            color="info"
            size="small"
            outline
            icon={<ASCIIIcon icon="document" variant={variant} size="small" />}
            onClick={onViewLogs}
          >
            LOGS
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

// ===================================
// SERVICE MONITOR CARD COMPONENT
// ===================================

export interface ServiceMonitorCardProps {
  variant?: AppCardVariant
  serviceName: string
  services: Array<{
    name: string
    status: AppStatus
    port?: number
    endpoint?: string
  }>
  onServiceAction?: (serviceName: string, action: 'start' | 'stop' | 'restart') => void
  className?: string
}

export const ServiceMonitorCard: React.FC<ServiceMonitorCardProps> = ({
  variant = 'terminal',
  serviceName,
  services,
  onServiceAction,
  className = '',
  ...props
}) => {
  const getOverallStatus = (): AppStatus => {
    const runningCount = services.filter(s => s.status === 'running').length
    const errorCount = services.filter(s => s.status === 'error').length
    
    if (errorCount > 0) return 'error'
    if (runningCount === services.length) return 'running'
    if (runningCount > 0) return 'loading'
    return 'stopped'
  }

  return (
    <Card 
      variant={variant} 
      status={getOverallStatus() === 'error' ? 'error' : getOverallStatus() === 'running' ? 'success' : undefined}
      className={`jadis-service-monitor-card ${className}`}
      {...props}
    >
      <CardHeader
        title={
          <div className="jadis-app-card__title">
            <ASCIIIcon icon="network" variant={variant} size="medium" />
            <div>
              <Strong variant={variant}>{serviceName}</Strong>
              <P variant={variant} style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                {services.length} services • {services.filter(s => s.status === 'running').length} running
              </P>
            </div>
          </div>
        }
      />
      
      <CardBody>
        <div className="jadis-service-list">
          {services.map((service, index) => (
            <div key={index} className="jadis-service-item">
              <div className="jadis-service-info">
                <ASCIIIcon 
                  icon={service.status === 'running' ? 'success' : service.status === 'error' ? 'error' : 'inactive'} 
                  variant={variant} 
                  size="small" 
                />
                <Code variant={variant}>{service.name}</Code>
                {service.port && <span className="jadis-service-port">:{service.port}</span>}
              </div>
              
              <div className="jadis-service-actions">
                {onServiceAction && (
                  <>
                    {service.status === 'stopped' && (
                      <Button
                        variant={variant}
                        size="small"
                        color="success"
                        icon={<ASCIIIcon icon="play" variant={variant} size="small" />}
                        onClick={() => onServiceAction(service.name, 'start')}
                        title="Start Service"
                      />
                    )}
                    
                    {service.status === 'running' && (
                      <Button
                        variant={variant}
                        size="small"
                        color="error"
                        icon={<ASCIIIcon icon="stop" variant={variant} size="small" />}
                        onClick={() => onServiceAction(service.name, 'stop')}
                        title="Stop Service"
                      />
                    )}
                    
                    <Button
                      variant={variant}
                      size="small"
                      color="warning"
                      icon={<ASCIIIcon icon="restart" variant={variant} size="small" />}
                      onClick={() => onServiceAction(service.name, 'restart')}
                      title="Restart Service"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

// ===================================
// SYSTEM STATUS CARD COMPONENT
// ===================================

export interface SystemStatusCardProps {
  variant?: AppCardVariant
  systemName: string
  status: AppStatus
  metrics: {
    cpu: number
    memory: number
    disk: number
    network?: number
  }
  alerts?: Array<{
    level: 'info' | 'warning' | 'error'
    message: string
    timestamp?: string
  }>
  onSystemAction?: (action: 'restart' | 'shutdown' | 'maintenance') => void
  className?: string
}

export const SystemStatusCard: React.FC<SystemStatusCardProps> = ({
  variant = 'terminal',
  systemName,
  status,
  metrics,
  alerts = [],
  onSystemAction,
  className = '',
  ...props
}) => {
  const getMetricColor = (value: number) => {
    if (value >= 90) return 'error'
    if (value >= 70) return 'warning'
    return 'success'
  }

  return (
    <Card 
      variant={variant} 
      status={status === 'error' ? 'error' : status === 'running' ? 'success' : undefined}
      className={`jadis-system-status-card ${className}`}
      {...props}
    >
      <CardHeader
        title={
          <div className="jadis-app-card__title">
            <ASCIIIcon icon="server" variant={variant} size="medium" />
            <div>
              <Strong variant={variant}>{systemName}</Strong>
              <div className="jadis-app-card__status">
                <ASCIIIcon 
                  icon={status === 'running' ? 'success' : status === 'error' ? 'error' : 'warning'} 
                  variant={variant} 
                  size="small" 
                />
                <Strong variant={variant}>{status.toUpperCase()}</Strong>
              </div>
            </div>
          </div>
        }
      />
      
      <CardBody>
        <div className="jadis-system-metrics">
          <div className="jadis-metric-row">
            <div className="jadis-metric">
              <span className="jadis-metric-label">CPU</span>
              <Code variant={variant} style={{ color: `var(--jadis-color-${getMetricColor(metrics.cpu)})` }}>
                {metrics.cpu}%
              </Code>
              <div className="jadis-app-card__progress-bar">
                <div 
                  className={`jadis-app-card__progress-fill jadis-app-card__progress-fill--${getMetricColor(metrics.cpu)}`}
                  style={{ width: `${metrics.cpu}%` }}
                />
              </div>
            </div>
            
            <div className="jadis-metric">
              <span className="jadis-metric-label">MEM</span>
              <Code variant={variant} style={{ color: `var(--jadis-color-${getMetricColor(metrics.memory)})` }}>
                {metrics.memory}%
              </Code>
              <div className="jadis-app-card__progress-bar">
                <div 
                  className={`jadis-app-card__progress-fill jadis-app-card__progress-fill--${getMetricColor(metrics.memory)}`}
                  style={{ width: `${metrics.memory}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="jadis-metric-row">
            <div className="jadis-metric">
              <span className="jadis-metric-label">DISK</span>
              <Code variant={variant} style={{ color: `var(--jadis-color-${getMetricColor(metrics.disk)})` }}>
                {metrics.disk}%
              </Code>
              <div className="jadis-app-card__progress-bar">
                <div 
                  className={`jadis-app-card__progress-fill jadis-app-card__progress-fill--${getMetricColor(metrics.disk)}`}
                  style={{ width: `${metrics.disk}%` }}
                />
              </div>
            </div>
            
            {metrics.network !== undefined && (
              <div className="jadis-metric">
                <span className="jadis-metric-label">NET</span>
                <Code variant={variant} style={{ color: `var(--jadis-color-${getMetricColor(metrics.network)})` }}>
                  {metrics.network}%
                </Code>
                <div className="jadis-app-card__progress-bar">
                  <div 
                    className={`jadis-app-card__progress-fill jadis-app-card__progress-fill--${getMetricColor(metrics.network)}`}
                    style={{ width: `${metrics.network}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {alerts.length > 0 && (
          <div className="jadis-system-alerts">
            <div className="jadis-alerts-header">
              <ASCIIIcon icon="alert" variant={variant} size="small" />
              <Strong variant={variant}>ALERTS ({alerts.length})</Strong>
            </div>
            <div className="jadis-alerts-list">
              {alerts.slice(0, 3).map((alert, index) => (
                <div key={index} className={`jadis-alert jadis-alert--${alert.level}`}>
                  <ASCIIIcon 
                    icon={alert.level === 'error' ? 'error' : alert.level === 'warning' ? 'warning' : 'info'} 
                    variant={variant} 
                    size="small" 
                  />
                  <P variant={variant} style={{ fontSize: '0.8rem', margin: 0 }}>
                    {alert.message}
                  </P>
                  {alert.timestamp && (
                    <Code variant={variant} style={{ fontSize: '0.7rem', opacity: 0.7 }}>
                      {alert.timestamp}
                    </Code>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardBody>
      
      {onSystemAction && (
        <CardActions className="jadis-app-card__actions">
          <Button
            variant={variant}
            color="warning"
            size="small"
            icon={<ASCIIIcon icon="restart" variant={variant} size="small" />}
            onClick={() => onSystemAction('restart')}
          >
            RESTART
          </Button>
          
          <Button
            variant={variant}
            color="info"
            size="small"
            icon={<ASCIIIcon icon="settings" variant={variant} size="small" />}
            onClick={() => onSystemAction('maintenance')}
          >
            MAINTENANCE
          </Button>
          
          <Button
            variant={variant}
            color="error"
            size="small"
            outline
            icon={<ASCIIIcon icon="power" variant={variant} size="small" />}
            onClick={() => onSystemAction('shutdown')}
          >
            SHUTDOWN
          </Button>
        </CardActions>
      )}
    </Card>
  )
}