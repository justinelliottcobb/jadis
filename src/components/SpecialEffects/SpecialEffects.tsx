import React from 'react'

// Special Effects Types
export type GlitchEffect = 'glitch' | 'glitch-rgb' | 'glitch-static' | 'glitch-corrupt'
export type ScanlineEffect = 'scanlines' | 'scanlines-heavy' | 'scanlines-roll'
export type GlowEffect = 'glow-intense' | 'glow-pulse' | 'glow-rainbow' | 'glow-neon'
export type CRTEffect = 'crt' | 'flicker' | 'phosphor'
export type ComboEffect = 'retro-terminal' | 'glitch-terminal' | 'matrix-mode' | 'crt-monitor'

export interface SpecialEffectsProps {
  children: React.ReactNode
  glitch?: GlitchEffect | GlitchEffect[]
  scanlines?: ScanlineEffect | ScanlineEffect[]
  glow?: GlowEffect | GlowEffect[]
  crt?: CRTEffect | CRTEffect[]
  combo?: ComboEffect
  text?: string // For glitch effects that need data-text attribute
  className?: string
  style?: React.CSSProperties
}

// Effect Wrapper Component
export const SpecialEffects: React.FC<SpecialEffectsProps> = ({
  children,
  glitch,
  scanlines,
  glow,
  crt,
  combo,
  text,
  className = '',
  style = {}
}) => {
  // Build class names from effects
  const effectClasses: string[] = []
  
  // Handle single or array of effects
  const normalizeEffect = (effect: string | string[] | undefined): string[] => {
    if (!effect) return []
    return Array.isArray(effect) ? effect : [effect]
  }
  
  // Add glitch effects
  normalizeEffect(glitch).forEach(effect => {
    effectClasses.push(`jadis-fx-${effect}`)
  })
  
  // Add scanline effects
  normalizeEffect(scanlines).forEach(effect => {
    effectClasses.push(`jadis-fx-${effect}`)
  })
  
  // Add glow effects
  normalizeEffect(glow).forEach(effect => {
    effectClasses.push(`jadis-fx-${effect}`)
  })
  
  // Add CRT effects
  normalizeEffect(crt).forEach(effect => {
    effectClasses.push(`jadis-fx-${effect}`)
  })
  
  // Add combo effect (overrides individual effects if present)
  if (combo) {
    effectClasses.length = 0 // Clear individual effects
    effectClasses.push(`jadis-fx-${combo}`)
  }
  
  const allClasses = [...effectClasses, className].filter(Boolean).join(' ')
  
  // Determine the appropriate HTML element/wrapper
  const elementProps: React.HTMLAttributes<HTMLDivElement> = {
    className: allClasses,
    style,
    ...(text && { 'data-text': text })
  }
  
  return <div {...elementProps}>{children}</div>
}

// Specialized effect components for convenience
export const GlitchText: React.FC<{
  children: React.ReactNode
  effect?: GlitchEffect
  text?: string
  className?: string
}> = ({ children, effect = 'glitch', text, className = '' }) => (
  <SpecialEffects
    glitch={effect}
    text={text || (typeof children === 'string' ? children : '')}
    className={className}
  >
    {children}
  </SpecialEffects>
)

export const ScanlineContainer: React.FC<{
  children: React.ReactNode
  effect?: ScanlineEffect
  className?: string
}> = ({ children, effect = 'scanlines', className = '' }) => (
  <SpecialEffects scanlines={effect} className={className}>
    {children}
  </SpecialEffects>
)

export const GlowText: React.FC<{
  children: React.ReactNode
  effect?: GlowEffect
  className?: string
}> = ({ children, effect = 'glow-intense', className = '' }) => (
  <SpecialEffects glow={effect} className={className}>
    {children}
  </SpecialEffects>
)

export const CRTScreen: React.FC<{
  children: React.ReactNode
  effects?: CRTEffect[]
  className?: string
}> = ({ children, effects = ['crt'], className = '' }) => (
  <SpecialEffects crt={effects} className={className}>
    {children}
  </SpecialEffects>
)

export const RetroTerminal: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => (
  <SpecialEffects combo="retro-terminal" className={className}>
    {children}
  </SpecialEffects>
)

export const MatrixMode: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => (
  <SpecialEffects combo="matrix-mode" className={className}>
    {children}
  </SpecialEffects>
)

// Utility hook for dynamic effect management
export const useSpecialEffects = () => {
  const [effects, setEffects] = React.useState<{
    glitch?: GlitchEffect[]
    scanlines?: ScanlineEffect[]
    glow?: GlowEffect[]
    crt?: CRTEffect[]
    combo?: ComboEffect
  }>({})
  
  const addEffect = (
    type: 'glitch' | 'scanlines' | 'glow' | 'crt',
    effect: string
  ) => {
    setEffects(prev => ({
      ...prev,
      [type]: [...(prev[type] || []), effect as any]
    }))
  }
  
  const removeEffect = (
    type: 'glitch' | 'scanlines' | 'glow' | 'crt',
    effect: string
  ) => {
    setEffects(prev => ({
      ...prev,
      [type]: (prev[type] || []).filter(e => e !== effect)
    }))
  }
  
  const setCombo = (combo?: ComboEffect) => {
    setEffects(prev => ({ ...prev, combo }))
  }
  
  const clearEffects = () => {
    setEffects({})
  }
  
  return {
    effects,
    addEffect,
    removeEffect,
    setCombo,
    clearEffects
  }
}