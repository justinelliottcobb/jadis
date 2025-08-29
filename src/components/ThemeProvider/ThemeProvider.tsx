import React, { createContext, useContext, useEffect, useState } from 'react'

export type JadisTheme = 'terminal' | 'matrix' | 'amber' | 'hacker' | 'mono'

interface ThemeContextType {
  theme: JadisTheme
  setTheme: (theme: JadisTheme) => void
  themes: JadisTheme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: JadisTheme
  className?: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'terminal',
  className = ''
}) => {
  const [theme, setTheme] = useState<JadisTheme>(defaultTheme)
  const themes: JadisTheme[] = ['terminal', 'matrix', 'amber', 'hacker', 'mono']

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      <div className={`jadis-themed ${className}`} data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeContext }