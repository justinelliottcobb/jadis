import React from 'react'

// ===================================
// ASCII ICON SET
// ===================================

/**
 * ASCII Icon Set for Terminal Aesthetics
 * 
 * A comprehensive collection of ASCII characters and symbols
 * that maintain the authentic terminal/BBS visual language
 */

export const ASCIIIcons = {
  // SYSTEM & NAVIGATION
  home: '▣',
  menu: '≡',
  close: '✕',
  back: '◄',
  forward: '►',
  up: '▲',
  down: '▼',
  left: '◄',
  right: '►',
  
  // FILES & DOCUMENTS
  file: '▤',
  folder: '▣',
  document: '▦',
  page: '▧',
  archive: '▬',
  
  // TECHNOLOGY & DATA
  database: '▓',
  server: '▪',
  network: '◈',
  data: '▓',
  code: '◊',
  
  // USER & PROFILE
  user: '◐',
  profile: '◑',
  account: '◒',
  group: '◓',
  
  // ACTIONS & TOOLS
  settings: '⚙',
  config: '※',
  tools: '⚙',
  edit: '◊',
  search: '⊕',
  filter: '⚟',
  sort: '▲▼',
  
  // STATUS & INDICATORS
  success: '◉',
  error: '◎',
  warning: '◈',
  info: '○',
  loading: '◐',
  active: '●',
  inactive: '○',
  
  // COMMUNICATION & SOCIAL
  message: '▤',
  mail: '▦',
  notification: '◆',
  alert: '◇',
  
  // MEDIA & CONTENT
  play: '►',
  pause: '▌▌',
  stop: '■',
  record: '●',
  
  // POWER & SYSTEM
  power: '◉',
  shutdown: '◎',
  restart: '↻',
  sleep: '◐',
  
  // CONNECTIVITY
  wifi: '◈',
  bluetooth: '◊',
  sync: '↻',
  link: '◈',
  
  // SPECIAL VARIANTS
  matrix: {
    node: '◉',
    data: '▓',
    flow: '◈',
    core: '◊',
  },
  
  terminal: {
    prompt: '►',
    cursor: '■',
    block: '▣',
    line: '▬',
  },
  
  retro: {
    diamond: '◆',
    square: '▪',
    bullet: '■',
    arrow: '►',
  },
  
  minimal: {
    dot: '•',
    circle: '○',
    dash: '—',
    line: '|',
  },
  
  glow: {
    star: '※',
    burst: '◈',
    ring: '◎',
    core: '◊',
  }
} as const

// ===================================
// ASCII ICON COMPONENT
// ===================================

export interface ASCIIIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: keyof typeof ASCIIIcons | string
  variant?: 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
  size?: 'small' | 'medium' | 'large'
}

export const ASCIIIcon: React.FC<ASCIIIconProps> = ({
  icon,
  variant = 'terminal',
  size = 'medium',
  className = '',
  ...props
}) => {
  const classes = [
    'jadis-ascii-icon',
    `jadis-ascii-icon--${variant}`,
    `jadis-ascii-icon--${size}`,
    className
  ].filter(Boolean).join(' ')

  // Get icon character
  const getIconChar = () => {
    // If it's already a string (custom icon), return it
    if (typeof icon === 'string' && icon.length <= 3) {
      return icon
    }
    
    // Otherwise look it up in the icon set
    return ASCIIIcons[icon as keyof typeof ASCIIIcons] || icon
  }

  return (
    <span className={classes} {...props}>
      {getIconChar()}
    </span>
  )
}

// ===================================
// ICON UTILITIES
// ===================================

/**
 * Get an icon character by name and variant
 */
export const getIcon = (
  iconName: keyof typeof ASCIIIcons,
  variant?: 'matrix' | 'terminal' | 'retro' | 'minimal' | 'glow'
): string => {
  const icon = ASCIIIcons[iconName]
  
  // If variant-specific icon exists, use it
  if (variant && typeof icon === 'object' && icon[variant]) {
    return icon[variant as keyof typeof icon] as string
  }
  
  return typeof icon === 'string' ? icon : '○'
}

/**
 * Icon categories for documentation and selection
 */
export const IconCategories = {
  navigation: ['home', 'menu', 'close', 'back', 'forward', 'up', 'down', 'left', 'right'],
  files: ['file', 'folder', 'document', 'page', 'archive'],
  technology: ['database', 'server', 'network', 'data', 'code', 'terminal'],
  user: ['user', 'profile', 'account', 'group'],
  actions: ['settings', 'config', 'tools', 'edit', 'search', 'filter', 'sort'],
  status: ['success', 'error', 'warning', 'info', 'loading', 'active', 'inactive'],
  communication: ['message', 'mail', 'notification', 'alert'],
  media: ['play', 'pause', 'stop', 'record'],
  power: ['power', 'shutdown', 'restart', 'sleep'],
  connectivity: ['wifi', 'bluetooth', 'sync', 'link']
} as const

// ===================================
// ICON DISPLAY NAMES
// ===================================

export const IconDisplayNames: Record<keyof typeof ASCIIIcons, string> = {
  home: 'Home',
  menu: 'Menu',
  close: 'Close',
  back: 'Back',
  forward: 'Forward',
  up: 'Up Arrow',
  down: 'Down Arrow',
  left: 'Left Arrow',
  right: 'Right Arrow',
  file: 'File',
  folder: 'Folder',
  document: 'Document',
  page: 'Page',
  archive: 'Archive',
  database: 'Database',
  server: 'Server',
  network: 'Network',
  data: 'Data',
  code: 'Code',
  terminal: 'Terminal',
  user: 'User',
  profile: 'Profile',
  account: 'Account',
  group: 'Group',
  settings: 'Settings',
  config: 'Configuration',
  tools: 'Tools',
  edit: 'Edit',
  search: 'Search',
  filter: 'Filter',
  sort: 'Sort',
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  info: 'Information',
  loading: 'Loading',
  active: 'Active',
  inactive: 'Inactive',
  message: 'Message',
  mail: 'Mail',
  notification: 'Notification',
  alert: 'Alert',
  play: 'Play',
  pause: 'Pause',
  stop: 'Stop',
  record: 'Record',
  power: 'Power',
  shutdown: 'Shutdown',
  restart: 'Restart',
  sleep: 'Sleep',
  wifi: 'WiFi',
  bluetooth: 'Bluetooth',
  sync: 'Sync',
  link: 'Link'
}