import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, ImageCarousel, TestimonialCarousel, CarouselItem } from './Carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: 'A flexible carousel component with multiple transition effects, autoplay, and theme variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual theme variant',
    },
    transition: {
      control: 'select',
      options: ['slide', 'fade', 'glitch', 'matrix', 'typewriter'],
      description: 'Transition effect between slides',
    },
    indicatorType: {
      control: 'select',
      options: ['dots', 'dashes', 'numbers', 'ascii', 'progress'],
      description: 'Indicator style',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Enable automatic slide progression',
    },
    loop: {
      control: 'boolean',
      description: 'Enable infinite loop',
    },
    showControls: {
      control: 'boolean',
      description: 'Show navigation controls',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Show slide indicators',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Pause autoplay on hover',
    },
    bordered: {
      control: 'boolean',
      description: 'Show border',
    },
    scanlines: {
      control: 'boolean',
      description: 'Apply scanline effect',
    },
    glitch: {
      control: 'boolean',
      description: 'Apply glitch effect',
    },
    keyboard: {
      control: 'boolean',
      description: 'Enable keyboard navigation',
    },
    swipeable: {
      control: 'boolean',
      description: 'Enable touch/swipe navigation',
    },
    height: {
      control: 'text',
      description: 'Carousel height',
    },
    autoPlayInterval: {
      control: 'number',
      description: 'Autoplay interval in milliseconds',
    },
    transitionDuration: {
      control: 'number',
      description: 'Transition duration in milliseconds',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

// Sample content items
const sampleItems: CarouselItem[] = [
  {
    id: 'slide-1',
    content: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        color: '#00ff00',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SLIDE 01</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Welcome to the Terminal Carousel</p>
        <pre style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
{`╔══════════════════════╗
║  > SYSTEM ONLINE     ║
║  > READY             ║
╚══════════════════════╝`}
        </pre>
      </div>
    ),
    caption: 'System Initialization',
    description: 'Terminal interface ready for input',
  },
  {
    id: 'slide-2',
    content: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        color: '#00ff41',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SLIDE 02</h1>
        <div style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>
          <div>10101010</div>
          <div>01010101</div>
          <div>10101010</div>
        </div>
      </div>
    ),
    caption: 'Matrix Protocol',
    description: 'Binary stream active',
  },
  {
    id: 'slide-3',
    content: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        color: '#ffa500',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>SLIDE 03</h1>
        <p style={{ fontSize: '1.2rem' }}>RETRO COMPUTING</p>
        <div style={{ marginTop: '2rem', fontSize: '2rem' }}>
          ▲ ▼ ◀ ▶
        </div>
      </div>
    ),
    caption: 'Retro Mode',
    description: 'Classic gaming aesthetics',
    link: {
      href: '#',
      text: 'Learn More'
    }
  },
]

export const Default: Story = {
  args: {
    variant: 'terminal',
    items: sampleItems,
    autoPlay: false,
    loop: true,
    showControls: true,
    showIndicators: true,
    indicatorType: 'dots',
    transition: 'slide',
    height: '400px',
    bordered: true,
  },
}

export const AllVariants: Story = {
  render: () => {
    const variants = ['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {variants.map((variant) => (
          <div key={variant}>
            <h3 style={{ 
              color: variant === 'terminal' ? '#00ff00' : 
                     variant === 'matrix' ? '#00ff41' : 
                     variant === 'retro' ? '#ffa500' : 
                     variant === 'minimal' ? '#61dafb' : '#00ffff',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              {variant} Variant
            </h3>
            <Carousel
              variant={variant}
              items={sampleItems}
              height="300px"
              showControls
              showIndicators
              indicatorType="dots"
              bordered
            />
          </div>
        ))}
      </div>
    )
  },
}

export const JapaneseSeasonalThemes: Story = {
  render: () => {
    const japaneseVariants = ['haru', 'natsu', 'aki', 'fuyu', 'sumi'] as const
    const themes = {
      haru: { name: '春 (Haru)', description: 'Spring - Cherry Blossom', color: 'var(--jadis-jp-sakura-iro, #fcc9b9)' },
      natsu: { name: '夏 (Natsu)', description: 'Summer - Deep Indigo', color: 'var(--jadis-jp-kon-iro, #31349b)' },
      aki: { name: '秋 (Aki)', description: 'Autumn - Maple Red', color: 'var(--jadis-jp-momiji-iro, #ca5254)' },
      fuyu: { name: '冬 (Fuyu)', description: 'Winter - Snow White', color: 'var(--jadis-jp-yukishiro, #fffffc)' },
      sumi: { name: '墨 (Sumi)', description: 'Ink - Traditional Black', color: 'var(--jadis-jp-sumi-iro, #101010)' },
    }
    
    const seasonalItems = (variant: string) => [
      {
        id: `${variant}-1`,
        content: (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: themes[variant].color,
            textAlign: 'center',
            padding: '2rem'
          }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{themes[variant].name}</h1>
            <p style={{ fontSize: '1.1rem' }}>{themes[variant].description}</p>
          </div>
        ),
      },
      {
        id: `${variant}-2`,
        content: (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: themes[variant].color,
            fontSize: '4rem'
          }}>
            {variant === 'haru' ? '🌸' : 
             variant === 'natsu' ? '🌊' : 
             variant === 'aki' ? '🍁' : 
             variant === 'fuyu' ? '❄️' : '🖤'}
          </div>
        ),
      },
    ]
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {japaneseVariants.map((variant) => (
          <div key={variant}>
            <h3 style={{ 
              color: themes[variant].color,
              fontFamily: 'monospace',
              marginBottom: '1rem'
            }}>
              {themes[variant].name} - {themes[variant].description}
            </h3>
            <Carousel
              variant={variant}
              items={seasonalItems(variant)}
              height="250px"
              showControls
              showIndicators
              indicatorType="ascii"
              bordered
              autoPlay
              autoPlayInterval={3000}
            />
          </div>
        ))}
      </div>
    )
  },
}

export const TransitionEffects: Story = {
  render: () => {
    const transitions = ['slide', 'fade', 'glitch', 'matrix', 'typewriter'] as const
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {transitions.map((transition) => (
          <div key={transition}>
            <h3 style={{ 
              color: '#00ff00',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              {transition} Transition
            </h3>
            <Carousel
              variant="terminal"
              items={sampleItems}
              height="300px"
              transition={transition}
              transitionDuration={transition === 'typewriter' ? 1000 : 500}
              showControls
              showIndicators
              bordered
            />
          </div>
        ))}
      </div>
    )
  },
}

export const IndicatorTypes: Story = {
  render: () => {
    const indicators = ['dots', 'dashes', 'numbers', 'ascii', 'progress'] as const
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {indicators.map((indicatorType) => (
          <div key={indicatorType}>
            <h3 style={{ 
              color: '#00ffff',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              {indicatorType} Indicators
            </h3>
            <Carousel
              variant="glow"
              items={sampleItems}
              height="250px"
              showControls
              showIndicators
              indicatorType={indicatorType}
              bordered
            />
          </div>
        ))}
      </div>
    )
  },
}

export const AutoPlayDemo: Story = {
  render: () => {
    const [isPaused, setIsPaused] = useState(false)
    
    return (
      <div style={{ padding: '2rem', backgroundColor: '#000' }}>
        <h2 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>
          AUTOPLAY CAROUSEL (Press Space to Pause/Resume)
        </h2>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setIsPaused(prev => !prev)}
            style={{
              background: isPaused ? '#ff3333' : '#00ff00',
              color: '#000',
              border: 'none',
              padding: '0.5rem 1rem',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {isPaused ? '▶ RESUME' : '⏸ PAUSE'}
          </button>
        </div>
        <Carousel
          variant="matrix"
          items={sampleItems}
          height="400px"
          autoPlay={!isPaused}
          autoPlayInterval={2000}
          pauseOnHover
          loop
          showControls
          showIndicators
          indicatorType="progress"
          bordered
          keyboard
        />
        <p style={{ color: '#666', marginTop: '1rem', fontFamily: 'monospace' }}>
          Hover over the carousel to pause, or use keyboard arrows to navigate
        </p>
      </div>
    )
  },
}

// Image Carousel Stories
const imageItems = [
  {
    src: 'https://via.placeholder.com/800x400/001100/00ff00?text=TERMINAL',
    alt: 'Terminal theme image',
    caption: 'Terminal Interface',
    description: 'Classic green phosphor display with scanlines',
  },
  {
    src: 'https://via.placeholder.com/800x400/001100/00ff41?text=MATRIX',
    alt: 'Matrix theme image',
    caption: 'Matrix Code',
    description: 'Digital rain effect with glitch overlay',
    layers: [
      {
        src: 'https://via.placeholder.com/800x400/000000/00ff41?text=OVERLAY',
        opacity: 0.3,
        blendMode: 'screen' as const
      }
    ]
  },
  {
    src: 'https://via.placeholder.com/800x400/8b4513/ffa500?text=RETRO',
    alt: 'Retro theme image',
    caption: 'Retro Computing',
    description: 'Vintage amber monitor with CRT effect',
    link: {
      href: '#',
      text: 'View Gallery'
    }
  },
]

// Advanced ImageArea effects demo images
const advancedImageItems = [
  {
    id: 'terminal-phosphor',
    src: 'https://via.placeholder.com/800x400/001100/00ff00?text=PHOSPHOR+SCREEN',
    alt: 'Terminal with phosphor effect',
    caption: 'Phosphor Display',
    description: 'Green phosphor glow with scanlines',
  },
  {
    id: 'matrix-glitch',
    src: 'https://via.placeholder.com/800x400/001100/00ff41?text=GLITCH+MATRIX',
    alt: 'Matrix with glitch effect',
    caption: 'Glitch Matrix',
    description: 'Digital distortion effects',
    layers: [
      {
        src: 'https://via.placeholder.com/400x200/ff0000/ffffff?text=ERROR',
        opacity: 0.2,
        blendMode: 'multiply' as const,
        offset: { x: 50, y: 50 }
      }
    ]
  },
  {
    id: 'retro-crt',
    src: 'https://via.placeholder.com/800x400/8b4513/ffa500?text=CRT+MONITOR',
    alt: 'Retro CRT display',
    caption: 'CRT Monitor',
    description: 'Vintage cathode ray tube display',
  },
  {
    id: 'pixelated-art',
    src: 'https://via.placeholder.com/800x400/4a4a4a/61dafb?text=PIXEL+ART',
    alt: 'Pixelated artwork',
    caption: '8-Bit Graphics',
    description: 'Pixel art with posterization',
  }
]

export const ImageCarouselDemo: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000' }}>
      <h2 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '2rem' }}>
        IMAGE CAROUSEL WITH IMAGEAREA INTEGRATION
      </h2>
      <ImageCarousel
        variant="terminal"
        images={imageItems}
        height="500px"
        objectFit="cover"
        showControls
        showIndicators
        indicatorType="dots"
        transition="fade"
        autoPlay
        autoPlayInterval={4000}
        pauseOnHover
        bordered
        imageBordered
        imageScanlines
      />
    </div>
  ),
}

export const AdvancedImageEffects: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000' }}>
      <h2 style={{ color: '#00ffff', fontFamily: 'monospace', marginBottom: '2rem' }}>
        ADVANCED IMAGE EFFECTS CAROUSEL
      </h2>
      <div style={{ display: 'grid', gap: '3rem' }}>
        {/* Phosphor Effect */}
        <div>
          <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>
            PHOSPHOR + SCANLINES
          </h3>
          <ImageCarousel
            variant="terminal"
            images={[advancedImageItems[0]]}
            height="300px"
            showControls={false}
            showIndicators={false}
            bordered
            imagePhosphor
            imageScanlines
            imageBordered
          />
        </div>

        {/* Glitch Effect with Layers */}
        <div>
          <h3 style={{ color: '#00ff41', fontFamily: 'monospace', marginBottom: '1rem' }}>
            GLITCH + LAYERS + MATRIX
          </h3>
          <ImageCarousel
            variant="matrix"
            images={[advancedImageItems[1]]}
            height="300px"
            showControls={false}
            showIndicators={false}
            bordered
            imageGlitch
            imageBordered
          />
        </div>

        {/* CRT Effect */}
        <div>
          <h3 style={{ color: '#ffa500', fontFamily: 'monospace', marginBottom: '1rem' }}>
            CRT MONITOR SIMULATION
          </h3>
          <ImageCarousel
            variant="retro"
            images={[advancedImageItems[2]]}
            height="300px"
            showControls={false}
            showIndicators={false}
            bordered
            imageCrt
            imageBordered
          />
        </div>

        {/* Pixel Art Effect */}
        <div>
          <h3 style={{ color: '#61dafb', fontFamily: 'monospace', marginBottom: '1rem' }}>
            PIXELATED + POSTERIZED
          </h3>
          <ImageCarousel
            variant="minimal"
            images={[advancedImageItems[3]]}
            height="300px"
            showControls={false}
            showIndicators={false}
            bordered
            imagePixelated
            imagePosterized
            imageBordered
          />
        </div>
      </div>
    </div>
  ),
}

export const ImageCarouselCompositing: Story = {
  render: () => {
    const compositingImages = [
      {
        src: 'https://via.placeholder.com/800x400/001100/00ff00?text=BASE+IMAGE',
        alt: 'Base terminal image',
        caption: 'Multi-Layer Compositing',
        description: 'Base image with multiple overlay layers',
        layers: [
          {
            src: 'https://via.placeholder.com/400x200/ff0000/ffffff?text=LAYER+1',
            opacity: 0.3,
            blendMode: 'screen' as const,
            offset: { x: 100, y: 50 }
          },
          {
            src: 'https://via.placeholder.com/300x150/0000ff/ffffff?text=LAYER+2',
            opacity: 0.5,
            blendMode: 'multiply' as const,
            offset: { x: 200, y: 100 },
            scale: 0.8
          }
        ]
      },
      {
        src: 'https://via.placeholder.com/800x400/001100/00ff41?text=MATRIX+BASE',
        alt: 'Matrix themed image',
        caption: 'Digital Distortion',
        description: 'Layered digital effects with rotation',
        layers: [
          {
            src: 'https://via.placeholder.com/200x200/00ff41/000000?text=ROTATE',
            opacity: 0.4,
            blendMode: 'overlay' as const,
            offset: { x: 300, y: 150 },
            rotate: 45,
            scale: 1.2
          }
        ]
      }
    ]
    
    return (
      <div style={{ padding: '2rem', backgroundColor: '#000' }}>
        <h2 style={{ color: '#00ffff', fontFamily: 'monospace', marginBottom: '1rem' }}>
          IMAGE COMPOSITING CAROUSEL
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem', fontFamily: 'monospace' }}>
          Demonstrates ImageArea's advanced layering and compositing effects
        </p>
        <ImageCarousel
          variant="glow"
          images={compositingImages}
          height="500px"
          showControls
          showIndicators
          indicatorType="ascii"
          transition="fade"
          autoPlay
          autoPlayInterval={6000}
          pauseOnHover
          bordered
          imageBordered
          imageAnimated
        />
      </div>
    )
  },
}

// Testimonial Carousel Stories
const testimonials = [
  {
    quote: "This terminal-inspired design system brings me back to the golden age of computing. Absolutely brilliant!",
    author: "Sarah Chen",
    title: "Senior Developer",
    company: "Tech Corp",
    avatar: "https://via.placeholder.com/60/00ff00/000000?text=SC"
  },
  {
    quote: "The attention to detail in recreating that authentic terminal aesthetic is remarkable. It's both nostalgic and modern.",
    author: "Marcus Johnson",
    title: "UI/UX Designer",
    company: "Design Studio",
    avatar: "https://via.placeholder.com/60/00ff41/000000?text=MJ"
  },
  {
    quote: "Finally, a component library that understands the beauty of ASCII art and terminal interfaces!",
    author: "Emily Rodriguez",
    title: "Full Stack Engineer",
    company: "StartupCo",
    avatar: "https://via.placeholder.com/60/ffa500/000000?text=ER"
  },
]

export const TestimonialCarouselDemo: Story = {
  render: () => (
    <div style={{ padding: '2rem', backgroundColor: '#000' }}>
      <h2 style={{ color: '#00ffff', fontFamily: 'monospace', marginBottom: '2rem', textAlign: 'center' }}>
        CLIENT TESTIMONIALS
      </h2>
      <TestimonialCarousel
        variant="glow"
        testimonials={testimonials}
        height="350px"
        showControls
        showIndicators
        indicatorType="dashes"
        transition="fade"
        autoPlay
        autoPlayInterval={5000}
        pauseOnHover
        bordered
      />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [history, setHistory] = useState<string[]>(['Carousel initialized'])
    
    const interactiveItems: CarouselItem[] = [
      {
        id: 'interactive-1',
        content: (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#00ff00',
            padding: '2rem'
          }}>
            <h1>INTERACTIVE MODE</h1>
            <p style={{ marginTop: '1rem' }}>Use controls or keyboard to navigate</p>
            <div style={{ marginTop: '2rem', fontSize: '3rem' }}>1️⃣</div>
          </div>
        ),
      },
      {
        id: 'interactive-2',
        content: (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#00ff41'
          }}>
            <h1>SLIDE TWO</h1>
            <div style={{ marginTop: '2rem', fontSize: '3rem' }}>2️⃣</div>
          </div>
        ),
      },
      {
        id: 'interactive-3',
        content: (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#ffa500'
          }}>
            <h1>SLIDE THREE</h1>
            <div style={{ marginTop: '2rem', fontSize: '3rem' }}>3️⃣</div>
          </div>
        ),
      },
    ]
    
    const handleChange = (index: number, item: CarouselItem) => {
      setCurrentIndex(index)
      setHistory(prev => [...prev.slice(-4), `Navigated to slide ${index + 1} (${item.id})`])
    }
    
    return (
      <div style={{ padding: '2rem', backgroundColor: '#000' }}>
        <h2 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '2rem' }}>
          INTERACTIVE CAROUSEL DEMO
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          <div>
            <Carousel
              variant="terminal"
              items={interactiveItems}
              activeIndex={currentIndex}
              onChange={handleChange}
              height="400px"
              showControls
              showIndicators
              indicatorType="numbers"
              transition="slide"
              loop
              bordered
              keyboard
              swipeable
            />
            
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setCurrentIndex(0)}
                style={{
                  background: currentIndex === 0 ? '#00ff00' : 'transparent',
                  color: currentIndex === 0 ? '#000' : '#00ff00',
                  border: '2px solid #00ff00',
                  padding: '0.5rem 1rem',
                  fontFamily: 'monospace',
                  cursor: 'pointer',
                }}
              >
                FIRST
              </button>
              <button
                onClick={() => setCurrentIndex(1)}
                style={{
                  background: currentIndex === 1 ? '#00ff00' : 'transparent',
                  color: currentIndex === 1 ? '#000' : '#00ff00',
                  border: '2px solid #00ff00',
                  padding: '0.5rem 1rem',
                  fontFamily: 'monospace',
                  cursor: 'pointer',
                }}
              >
                SECOND
              </button>
              <button
                onClick={() => setCurrentIndex(2)}
                style={{
                  background: currentIndex === 2 ? '#00ff00' : 'transparent',
                  color: currentIndex === 2 ? '#000' : '#00ff00',
                  border: '2px solid #00ff00',
                  padding: '0.5rem 1rem',
                  fontFamily: 'monospace',
                  cursor: 'pointer',
                }}
              >
                THIRD
              </button>
            </div>
          </div>
          
          <div style={{
            padding: '1rem',
            border: '2px solid #00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
            fontFamily: 'monospace',
            fontSize: '0.85rem'
          }}>
            <h3 style={{ color: '#00ff00', marginBottom: '1rem' }}>EVENT LOG</h3>
            <div style={{ color: '#00ff00', opacity: 0.8 }}>
              {history.map((event, index) => (
                <div key={index} style={{ marginBottom: '0.25rem' }}>
                  &gt; {event}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #00ff00' }}>
              <strong>Current Index:</strong> {currentIndex}
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem', color: '#666', fontFamily: 'monospace', fontSize: '0.85rem' }}>
          <p>• Use arrow keys to navigate</p>
          <p>• Click indicators or controls</p>
          <p>• Swipe on touch devices</p>
          <p>• Press Space to pause/resume autoplay</p>
        </div>
      </div>
    )
  },
}