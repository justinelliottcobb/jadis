import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Carousel.scss'

// Common Types
export type CarouselVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type CarouselTransition = 'slide' | 'fade' | 'glitch' | 'matrix' | 'typewriter'
export type CarouselIndicator = 'dots' | 'dashes' | 'numbers' | 'ascii' | 'progress'

// ===================================
// CAROUSEL ITEM INTERFACE
// ===================================

export interface CarouselItem {
  id: string
  content: React.ReactNode
  caption?: string
  description?: string
  link?: {
    href: string
    text: string
    target?: '_blank' | '_self'
  }
}

// ===================================
// MAIN CAROUSEL COMPONENT
// ===================================

export interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: CarouselVariant
  items: CarouselItem[]
  activeIndex?: number
  onChange?: (index: number, item: CarouselItem) => void
  onNext?: () => void
  onPrevious?: () => void
  autoPlay?: boolean
  autoPlayInterval?: number
  pauseOnHover?: boolean
  loop?: boolean
  showControls?: boolean
  showIndicators?: boolean
  indicatorType?: CarouselIndicator
  transition?: CarouselTransition
  transitionDuration?: number
  height?: string
  bordered?: boolean
  scanlines?: boolean
  glitch?: boolean
  animated?: boolean
  keyboard?: boolean
  swipeable?: boolean
}

export const Carousel: React.FC<CarouselProps> = ({
  variant = 'terminal',
  items,
  activeIndex: controlledIndex,
  onChange,
  onNext,
  onPrevious,
  autoPlay = false,
  autoPlayInterval = 5000,
  pauseOnHover = true,
  loop = true,
  showControls = true,
  showIndicators = true,
  indicatorType = 'dots',
  transition = 'slide',
  transitionDuration = 500,
  height = '400px',
  bordered = true,
  scanlines = false,
  glitch = false,
  animated = false,
  keyboard = true,
  swipeable = true,
  className = '',
  ...props
}) => {
  const [internalIndex, setInternalIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Determine if controlled or uncontrolled
  const isControlled = controlledIndex !== undefined
  const activeIndex = isControlled ? controlledIndex : internalIndex

  // Handle index changes
  const handleIndexChange = useCallback((newIndex: number) => {
    if (isTransitioning) return
    
    let targetIndex = newIndex
    
    // Handle looping
    if (loop) {
      if (newIndex >= items.length) targetIndex = 0
      else if (newIndex < 0) targetIndex = items.length - 1
    } else {
      targetIndex = Math.max(0, Math.min(items.length - 1, newIndex))
    }
    
    if (targetIndex === activeIndex) return
    
    setIsTransitioning(true)
    
    if (!isControlled) {
      setInternalIndex(targetIndex)
    }
    
    onChange?.(targetIndex, items[targetIndex])
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, transitionDuration)
  }, [activeIndex, isControlled, isTransitioning, items, loop, onChange, transitionDuration])

  // Navigation handlers
  const goToNext = useCallback(() => {
    handleIndexChange(activeIndex + 1)
    onNext?.()
  }, [activeIndex, handleIndexChange, onNext])

  const goToPrevious = useCallback(() => {
    handleIndexChange(activeIndex - 1)
    onPrevious?.()
  }, [activeIndex, handleIndexChange, onPrevious])

  const goToIndex = useCallback((index: number) => {
    handleIndexChange(index)
  }, [handleIndexChange])

  // AutoPlay logic
  useEffect(() => {
    if (autoPlay && !isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [autoPlay, autoPlayInterval, goToNext, isPaused, items.length])

  // Keyboard navigation
  useEffect(() => {
    if (!keyboard) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          goToNext()
          break
        case ' ':
          e.preventDefault()
          setIsPaused(prev => !prev)
          break
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [keyboard, goToNext, goToPrevious])

  // Touch/Swipe handlers
  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!swipeable) return
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!swipeable) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!swipeable || !touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover && autoPlay) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover && autoPlay) {
      setIsPaused(false)
    }
  }

  // Generate indicator content
  const getIndicatorContent = (index: number) => {
    switch (indicatorType) {
      case 'numbers':
        return index + 1
      case 'dashes':
        return '─'
      case 'ascii':
        return index === activeIndex ? '◉' : '◯'
      case 'progress':
        return null
      case 'dots':
      default:
        return ''
    }
  }

  const classes = [
    'jadis-carousel',
    `jadis-carousel--${variant}`,
    `jadis-carousel--${transition}`,
    bordered && 'jadis-carousel--bordered',
    scanlines && 'jadis-fx-scanlines',
    glitch && 'jadis-fx-glitch-static',
    animated && 'jadis-carousel--animated',
    isTransitioning && 'jadis-carousel--transitioning',
    className
  ].filter(Boolean).join(' ')

  const transitionStyle = {
    transition: `all ${transitionDuration}ms ease-in-out`
  }

  const slideStyle = transition === 'slide' ? {
    transform: `translateX(-${activeIndex * 100}%)`,
    ...transitionStyle
  } : {}

  return (
    <div
      {...props}
      ref={carouselRef}
      className={classes}
      style={{ height, ...props.style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={keyboard ? 0 : -1}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
    >
      {/* Content Container */}
      <div className="jadis-carousel__container">
        <div 
          ref={contentRef}
          className="jadis-carousel__content"
          style={slideStyle}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={[
                'jadis-carousel__item',
                index === activeIndex && 'jadis-carousel__item--active',
                transition === 'fade' && index !== activeIndex && 'jadis-carousel__item--hidden'
              ].filter(Boolean).join(' ')}
              style={transition === 'fade' ? {
                opacity: index === activeIndex ? 1 : 0,
                ...transitionStyle
              } : {}}
              aria-hidden={index !== activeIndex}
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              <div className="jadis-carousel__item-content">
                {item.content}
              </div>
              
              {(item.caption || item.description || item.link) && (
                <div className="jadis-carousel__item-info">
                  {item.caption && (
                    <h3 className="jadis-carousel__caption">{item.caption}</h3>
                  )}
                  {item.description && (
                    <p className="jadis-carousel__description">{item.description}</p>
                  )}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target={item.link.target || '_self'}
                      className="jadis-carousel__link"
                    >
                      {item.link.text} →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Controls */}
        {showControls && items.length > 1 && (
          <>
            <button
              className="jadis-carousel__control jadis-carousel__control--prev"
              onClick={goToPrevious}
              disabled={!loop && activeIndex === 0}
              aria-label="Previous slide"
            >
              ◀
            </button>
            <button
              className="jadis-carousel__control jadis-carousel__control--next"
              onClick={goToNext}
              disabled={!loop && activeIndex === items.length - 1}
              aria-label="Next slide"
            >
              ▶
            </button>
          </>
        )}
      </div>
      
      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="jadis-carousel__indicators">
          {indicatorType === 'progress' ? (
            <div className="jadis-carousel__progress">
              <div 
                className="jadis-carousel__progress-bar"
                style={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
              />
            </div>
          ) : (
            items.map((_, index) => (
              <button
                key={index}
                className={[
                  'jadis-carousel__indicator',
                  `jadis-carousel__indicator--${indicatorType}`,
                  index === activeIndex && 'jadis-carousel__indicator--active'
                ].filter(Boolean).join(' ')}
                onClick={() => goToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
              >
                {getIndicatorContent(index)}
              </button>
            ))
          )}
        </div>
      )}
      
      {/* Status (for screen readers) */}
      <div className="jadis-carousel__status" aria-live="polite" aria-atomic="true">
        Slide {activeIndex + 1} of {items.length}
      </div>
      
      {/* Effects Overlay */}
      <div className="jadis-carousel__overlay"></div>
    </div>
  )
}

// ===================================
// IMAGE CAROUSEL COMPONENT
// ===================================

export interface ImageCarouselProps extends Omit<CarouselProps, 'items'> {
  images: Array<{
    id?: string
    src: string
    alt: string
    caption?: string
    description?: string
    link?: {
      href: string
      text: string
      target?: '_blank' | '_self'
    }
  }>
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none'
  lazyLoad?: boolean
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  objectFit = 'cover',
  lazyLoad = true,
  ...props
}) => {
  const items: CarouselItem[] = images.map((img, index) => ({
    id: img.id || `image-${index}`,
    content: (
      <img
        src={img.src}
        alt={img.alt}
        loading={lazyLoad ? 'lazy' : 'eager'}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit,
          display: 'block'
        }}
      />
    ),
    caption: img.caption,
    description: img.description,
    link: img.link
  }))

  return <Carousel {...props} items={items} />
}

// ===================================
// TESTIMONIAL CAROUSEL COMPONENT
// ===================================

export interface TestimonialCarouselProps extends Omit<CarouselProps, 'items'> {
  testimonials: Array<{
    id?: string
    quote: string
    author: string
    title?: string
    company?: string
    avatar?: string
  }>
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  ...props
}) => {
  const items: CarouselItem[] = testimonials.map((testimonial, index) => ({
    id: testimonial.id || `testimonial-${index}`,
    content: (
      <div className="jadis-carousel__testimonial">
        <blockquote className="jadis-carousel__quote">
          "{testimonial.quote}"
        </blockquote>
        <div className="jadis-carousel__author">
          {testimonial.avatar && (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author}
              className="jadis-carousel__avatar"
            />
          )}
          <div className="jadis-carousel__author-info">
            <cite className="jadis-carousel__author-name">
              — {testimonial.author}
            </cite>
            {(testimonial.title || testimonial.company) && (
              <div className="jadis-carousel__author-title">
                {testimonial.title}
                {testimonial.title && testimonial.company && ', '}
                {testimonial.company}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }))

  return <Carousel {...props} items={items} />
}