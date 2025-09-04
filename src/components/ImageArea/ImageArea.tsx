import React, { useState, useEffect } from 'react'
import './ImageArea.scss'

// Common Types
export type ImageVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type ImageSize = 'small' | 'medium' | 'large' | 'fill'
export type ImageFit = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
export type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'

// ===================================
// IMAGE LAYER INTERFACE
// ===================================

export interface ImageLayer {
  src: string
  alt?: string
  opacity?: number
  blendMode?: BlendMode
  filter?: string
  offset?: { x: number; y: number }
  scale?: number
  rotate?: number
}

// ===================================
// MAIN IMAGE AREA COMPONENT
// ===================================

export interface ImageAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ImageVariant
  size?: ImageSize
  src?: string
  alt?: string
  layers?: ImageLayer[]
  objectFit?: ImageFit
  loading?: 'lazy' | 'eager'
  placeholder?: string
  fallback?: string
  aspectRatio?: string
  bordered?: boolean
  scanlines?: boolean
  glitch?: boolean
  crt?: boolean
  phosphor?: boolean
  pixelated?: boolean
  posterized?: boolean
  animated?: boolean
  onLoad?: () => void
  onError?: () => void
}

export const ImageArea: React.FC<ImageAreaProps> = ({
  variant = 'terminal',
  size = 'medium',
  src,
  alt = '',
  layers = [],
  objectFit = 'cover',
  loading = 'lazy',
  placeholder,
  fallback,
  aspectRatio,
  bordered = false,
  scanlines = false,
  glitch = false,
  crt = false,
  phosphor = false,
  pixelated = false,
  posterized = false,
  animated = false,
  className = '',
  onLoad,
  onError,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
    onLoad?.()
  }

  const handleImageError = () => {
    setImageError(true)
    onError?.()
  }

  const classes = [
    'jadis-image-area',
    `jadis-image-area--${variant}`,
    `jadis-image-area--${size}`,
    bordered && 'jadis-image-area--bordered',
    scanlines && 'jadis-fx-scanlines',
    glitch && 'jadis-fx-glitch-static',
    crt && 'jadis-fx-crt',
    phosphor && 'jadis-fx-phosphor',
    pixelated && 'jadis-image-area--pixelated',
    posterized && 'jadis-image-area--posterized',
    animated && 'jadis-image-area--animated',
    className
  ].filter(Boolean).join(' ')

  const containerStyle = {
    aspectRatio: aspectRatio || undefined,
    ...props.style
  }

  return (
    <div 
      {...props} 
      className={classes}
      style={containerStyle}
    >
      {/* Main Image */}
      {src && !imageError && (
        <img
          className="jadis-image-area__main"
          src={src}
          alt={alt}
          loading={loading}
          style={{ objectFit }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {/* Composite Layers */}
      {layers.map((layer, index) => (
        <img
          key={index}
          className="jadis-image-area__layer"
          src={layer.src}
          alt={layer.alt || ''}
          loading={loading}
          style={{
            objectFit,
            opacity: layer.opacity || 1,
            mixBlendMode: layer.blendMode || 'normal',
            filter: layer.filter || 'none',
            transform: `
              translate(${layer.offset?.x || 0}px, ${layer.offset?.y || 0}px)
              scale(${layer.scale || 1})
              rotate(${layer.rotate || 0}deg)
            `,
            zIndex: index + 1
          }}
        />
      ))}

      {/* Placeholder/Loading State */}
      {!imageLoaded && !imageError && (
        <div className="jadis-image-area__placeholder">
          {placeholder || (
            <div className="jadis-image-area__placeholder-content">
              <span className="jadis-image-area__placeholder-icon">▣</span>
              <span className="jadis-image-area__placeholder-text">Loading...</span>
            </div>
          )}
        </div>
      )}

      {/* Error/Fallback State */}
      {imageError && (
        <div className="jadis-image-area__fallback">
          {fallback ? (
            <img 
              src={fallback} 
              alt="Fallback" 
              style={{ objectFit }}
            />
          ) : (
            <div className="jadis-image-area__error-content">
              <span className="jadis-image-area__error-icon">◎</span>
              <span className="jadis-image-area__error-text">Image failed to load</span>
            </div>
          )}
        </div>
      )}

      {/* Effects Overlay */}
      <div className="jadis-image-area__overlay"></div>
    </div>
  )
}

// ===================================
// ASCII ART COMPONENT
// ===================================

export interface ASCIIArtProps extends React.HTMLAttributes<HTMLPreElement> {
  variant?: ImageVariant
  size?: ImageSize
  art: string
  title?: string
  animated?: boolean
  glitch?: boolean
  glow?: boolean
  scanlines?: boolean
  typewriter?: boolean
  typewriterSpeed?: number
  centered?: boolean
  bordered?: boolean
}

export const ASCIIArt: React.FC<ASCIIArtProps> = ({
  variant = 'terminal',
  size = 'medium',
  art,
  title,
  animated = false,
  glitch = false,
  glow = false,
  scanlines = false,
  typewriter = false,
  typewriterSpeed = 50,
  centered = false,
  bordered = false,
  className = '',
  ...props
}) => {
  const [displayedArt, setDisplayedArt] = useState(typewriter ? '' : art)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (typewriter && currentIndex < art.length) {
      const timer = setTimeout(() => {
        setDisplayedArt(art.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, typewriterSpeed)
      return () => clearTimeout(timer)
    }
  }, [typewriter, currentIndex, art, typewriterSpeed])

  useEffect(() => {
    if (typewriter) {
      setDisplayedArt('')
      setCurrentIndex(0)
    }
  }, [art, typewriter])

  const classes = [
    'jadis-ascii-art',
    `jadis-ascii-art--${variant}`,
    `jadis-ascii-art--${size}`,
    animated && 'jadis-ascii-art--animated',
    glitch && 'jadis-fx-glitch-rgb',
    glow && 'jadis-fx-glow-pulse',
    scanlines && 'jadis-fx-scanlines',
    typewriter && 'jadis-ascii-art--typewriter',
    centered && 'jadis-ascii-art--centered',
    bordered && 'jadis-ascii-art--bordered',
    className
  ].filter(Boolean).join(' ')

  return (
    <figure className="jadis-ascii-art-figure">
      {title && (
        <figcaption className={`jadis-ascii-art-caption jadis-ascii-art-caption--${variant}`}>
          {title}
        </figcaption>
      )}
      <pre
        {...props}
        className={classes}
      >
        {displayedArt}
        {typewriter && currentIndex < art.length && (
          <span className="jadis-ascii-art__cursor">■</span>
        )}
      </pre>
    </figure>
  )
}

// ===================================
// GALLERY COMPONENT
// ===================================

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ImageVariant
  images: Array<{
    src: string
    alt?: string
    caption?: string
    layers?: ImageLayer[]
  }>
  columns?: number
  gap?: string
  aspectRatio?: string
  objectFit?: ImageFit
  bordered?: boolean
  scanlines?: boolean
  onImageClick?: (index: number) => void
}

export const Gallery: React.FC<GalleryProps> = ({
  variant = 'terminal',
  images,
  columns = 3,
  gap = '1rem',
  aspectRatio = '1 / 1',
  objectFit = 'cover',
  bordered = false,
  scanlines = false,
  className = '',
  onImageClick,
  ...props
}) => {
  const classes = [
    'jadis-gallery',
    `jadis-gallery--${variant}`,
    className
  ].filter(Boolean).join(' ')

  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap
  }

  return (
    <div
      {...props}
      className={classes}
      style={{ ...gridStyle, ...props.style }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="jadis-gallery__item"
          onClick={() => onImageClick?.(index)}
          style={{ cursor: onImageClick ? 'pointer' : 'default' }}
        >
          <ImageArea
            variant={variant}
            src={image.src}
            alt={image.alt}
            layers={image.layers}
            aspectRatio={aspectRatio}
            objectFit={objectFit}
            bordered={bordered}
            scanlines={scanlines}
          />
          {image.caption && (
            <div className={`jadis-gallery__caption jadis-gallery__caption--${variant}`}>
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ===================================
// PRESET ASCII ART LIBRARY
// ===================================

export const ASCIIArtLibrary = {
  terminal: {
    computer: `
    ┌─────────────────┐
    │  ████████████   │
    │  ████████████   │ 
    │  ████████████   │
    └─────────────────┘
         │      │
        ═╧══════╧═`,
    
    server: `
    ╔═══════════════╗
    ║ ████ ████ ████║
    ║ ████ ████ ████║
    ╠═══════════════╣
    ║ ████ ████ ████║
    ║ ████ ████ ████║
    ╚═══════════════╝`,
    
    network: `
        ◉
       ╱│╲
      ◉ ◉ ◉
     ╱│╲│╱│╲
    ◉ ◉ ◉ ◉ ◉`,
    
    database: `
    ╭───────────────╮
    │ ████████████  │
    ├───────────────┤
    │ ████████████  │
    ├───────────────┤
    │ ████████████  │
    ╰───────────────╯`
  },

  matrix: {
    digitalRain: `
    1010101
    0101010
    1010101
    0101010
    1010101`,
    
    node: `
      ◉─────◉
      │     │
      │  ◊  │
      │     │
      ◉─────◉`,
    
    flow: `
    ◈ ─→ ◈ ─→ ◈
    │    │    │
    ↓    ↓    ↓
    ◈ ←─ ◈ ←─ ◈`
  },

  retro: {
    boom: `
    ★ ♦ ★ BOOM ★ ♦ ★
    ♦ ★ ★ ★ ★ ★ ★ ♦
    ★ ★ BANG! ★ ★ ★
    ♦ ★ ★ ★ ★ ★ ★ ♦
    ★ ♦ ★ POW! ★ ♦ ★`,
    
    gaming: `
    ▲▲▲ GAME OVER ▲▲▲
    ▼ HIGH SCORE: ▼
    ◆ 999,999,999 ◆
    ▼▼▼ PLAY AGAIN? ▼▼▼`,
    
    neon: `
    ╔═══ NEON ═══╗
    ║ ◉ ◉ ◉ ◉ ◉ ║
    ║ ◉ CITY ◉ ║
    ║ ◉ ◉ ◉ ◉ ◉ ║
    ╚═════════════╝`
  }
}