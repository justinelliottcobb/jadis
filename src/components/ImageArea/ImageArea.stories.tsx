import type { Meta, StoryObj } from '@storybook/react'
import { ImageArea, ASCIIArt, Gallery, ASCIIArtLibrary } from './ImageArea'

// ===================================
// STORYBOOK META
// ===================================

const meta: Meta<typeof ImageArea> = {
  title: 'Components/ImageArea',
  component: ImageArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Advanced image display components with CSS compositing effects and ASCII art decorations for authentic terminal aesthetics. Includes image layering, blend modes, and comprehensive visual effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual style variant - includes Japanese seasonal themes'
    },
    size: {
      control: 'select', 
      options: ['small', 'medium', 'large', 'fill'],
      description: 'Size preset for the image area'
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
      description: 'CSS object-fit behavior'
    },
    aspectRatio: {
      control: 'text',
      description: 'CSS aspect-ratio (e.g., "16 / 9", "1 / 1")'
    },
    bordered: {
      control: 'boolean',
      description: 'Show decorative border'
    },
    scanlines: {
      control: 'boolean',
      description: 'Apply scanline effect overlay'
    },
    glitch: {
      control: 'boolean', 
      description: 'Apply glitch distortion effect'
    },
    crt: {
      control: 'boolean',
      description: 'Apply CRT monitor curvature effect'
    },
    phosphor: {
      control: 'boolean',
      description: 'Apply phosphor trail effect'
    },
    pixelated: {
      control: 'boolean',
      description: 'Apply pixelation effect for 8-bit/16-bit aesthetic'
    },
    posterized: {
      control: 'boolean',
      description: 'Apply posterization effect to reduce color depth'
    },
    animated: {
      control: 'boolean',
      description: 'Enable hover animations'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// ===================================
// SAMPLE IMAGES 
// ===================================

const sampleImage = 'https://picsum.photos/400/300'
const sampleImages = [
  { src: 'https://picsum.photos/400/300?random=1', alt: 'Sample 1', caption: 'Terminal Display' },
  { src: 'https://picsum.photos/400/300?random=2', alt: 'Sample 2', caption: 'Matrix Node' },
  { src: 'https://picsum.photos/400/300?random=3', alt: 'Sample 3', caption: 'Retro Interface' },
  { src: 'https://picsum.photos/400/300?random=4', alt: 'Sample 4', caption: 'Minimal View' },
  { src: 'https://picsum.photos/400/300?random=5', alt: 'Sample 5', caption: 'Glow Effect' },
  { src: 'https://picsum.photos/400/300?random=6', alt: 'Sample 6', caption: 'Composite Layer' },
]

// ===================================
// BASIC IMAGE AREA STORIES
// ===================================

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'Sample image',
    variant: 'terminal',
    size: 'medium',
    bordered: true,
  }
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ImageArea 
        src={sampleImage} 
        variant="terminal" 
        size="medium" 
        bordered
        alt="Terminal"
      />
      <ImageArea 
        src={sampleImage} 
        variant="matrix" 
        size="medium" 
        bordered
        alt="Matrix"
      />
      <ImageArea 
        src={sampleImage} 
        variant="retro" 
        size="medium" 
        bordered
        alt="Retro"
      />
      <ImageArea 
        src={sampleImage} 
        variant="minimal" 
        size="medium" 
        bordered
        alt="Minimal"
      />
      <ImageArea 
        src={sampleImage} 
        variant="glow" 
        size="medium" 
        bordered
        alt="Glow"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All five visual variants showing different terminal aesthetics',
      },
    },
  }
}

export const WithEffects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ImageArea 
        src={sampleImage}
        variant="terminal"
        size="medium"
        bordered
        scanlines
        alt="With scanlines"
      />
      <ImageArea 
        src={sampleImage}
        variant="matrix"
        size="medium"
        bordered
        glitch
        alt="With glitch"
      />
      <ImageArea 
        src={sampleImage}
        variant="retro"
        size="medium"
        bordered
        crt
        alt="With CRT effect"
      />
      <ImageArea 
        src={sampleImage}
        variant="glow"
        size="medium"
        bordered
        phosphor
        animated
        alt="With phosphor and animation"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Image areas with various visual effects applied',
      },
    },
  }
}

export const RetroDigitalEffects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ImageArea 
        src={sampleImage}
        variant="terminal"
        size="medium"
        bordered
        pixelated
        alt="Pixelated terminal"
      />
      <ImageArea 
        src={sampleImage}
        variant="matrix"
        size="medium"
        bordered
        posterized
        alt="Posterized matrix"
      />
      <ImageArea 
        src={sampleImage}
        variant="retro"
        size="medium"
        bordered
        pixelated
        posterized
        alt="Pixelated + Posterized"
      />
      <ImageArea 
        src={sampleImage}
        variant="glow"
        size="medium"
        bordered
        posterized
        scanlines
        alt="Posterized with scanlines"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Retro digital effects: pixelation and posterization for authentic 8-bit/16-bit aesthetics',
      },
    },
  }
}

export const PixelArtShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '900px' }}>
      {['terminal', 'matrix', 'retro'].map((variant) => (
        <div key={variant} style={{ textAlign: 'center' }}>
          <ImageArea
            src={`https://picsum.photos/300/300?random=${variant === 'terminal' ? 100 : variant === 'matrix' ? 101 : 102}`}
            variant={variant as any}
            size="large"
            bordered
            pixelated
            aspectRatio="1 / 1"
            alt={`Pixelated ${variant}`}
          />
          <div style={{ 
            marginTop: '0.5rem', 
            fontSize: '0.8rem',
            color: variant === 'terminal' ? 'var(--jadis-color-green)' : 
                  variant === 'matrix' ? '#00ff41' : 'var(--jadis-color-amber)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {variant} Pixels
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pixelation effect applied across different variants for authentic retro gaming aesthetics',
      },
    },
  }
}

export const PosterizedPalettes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h3 style={{ color: 'var(--jadis-color-green)', marginBottom: '1rem', fontSize: '1rem' }}>
          Original vs Posterized
        </h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <ImageArea
              src="https://picsum.photos/200/200?random=200"
              variant="terminal"
              size="medium"
              bordered
              aspectRatio="1 / 1"
              alt="Original"
            />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--jadis-color-green)' }}>
              ORIGINAL
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ImageArea
              src="https://picsum.photos/200/200?random=200"
              variant="terminal"
              size="medium"
              bordered
              posterized
              aspectRatio="1 / 1"
              alt="Posterized"
            />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--jadis-color-green)' }}>
              POSTERIZED
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ color: '#00ff41', marginBottom: '1rem', fontSize: '1rem' }}>
          Combined Effects
        </h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <ImageArea
              src="https://picsum.photos/200/200?random=201"
              variant="matrix"
              size="medium"
              bordered
              pixelated
              posterized
              aspectRatio="1 / 1"
              alt="Pixel + Poster"
            />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: '#00ff41' }}>
              PIXEL + POSTER
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <ImageArea
              src="https://picsum.photos/200/200?random=202"
              variant="glow"
              size="medium"
              bordered
              posterized
              glitch
              aspectRatio="1 / 1"
              alt="Poster + Glitch"
            />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--jadis-color-cyan)' }}>
              POSTER + GLITCH
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Posterization effect comparison showing color depth reduction and combination with other effects',
      },
    },
  }
}

// ===================================
// COMPOSITE LAYERING STORIES  
// ===================================

export const CompositeLayering: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ImageArea
        src={sampleImage}
        variant="terminal"
        size="large"
        bordered
        layers={[
          {
            src: 'https://picsum.photos/400/300?random=10',
            opacity: 0.3,
            blendMode: 'multiply'
          },
          {
            src: 'https://picsum.photos/400/300?random=11', 
            opacity: 0.5,
            blendMode: 'screen',
            offset: { x: 10, y: 10 }
          }
        ]}
        alt="Composite layers"
      />
      <ImageArea
        src={sampleImage}
        variant="matrix"
        size="large"
        bordered
        scanlines
        layers={[
          {
            src: 'https://picsum.photos/400/300?random=12',
            opacity: 0.4,
            blendMode: 'overlay',
            filter: 'hue-rotate(120deg)'
          }
        ]}
        alt="Matrix composite"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Advanced CSS compositing with multiple image layers, blend modes, and transformations',
      },
    },
  }
}

export const BlendModeShowcase: Story = {
  render: () => {
    const blendModes = ['multiply', 'screen', 'overlay', 'soft-light', 'hard-light', 'difference', 'exclusion', 'hue']
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', maxWidth: '800px' }}>
        {blendModes.map((mode) => (
          <div key={mode} style={{ textAlign: 'center' }}>
            <ImageArea
              src={sampleImage}
              variant="terminal"
              size="small"
              bordered
              layers={[
                {
                  src: 'https://picsum.photos/400/300?random=20',
                  opacity: 0.7,
                  blendMode: mode as any
                }
              ]}
              alt={`${mode} blend`}
            />
            <div style={{ 
              fontSize: '0.7rem', 
              color: 'var(--jadis-color-green)', 
              marginTop: '0.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {mode}
            </div>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of different CSS blend modes for image composition',
      },
    },
  }
}

// ===================================
// ASCII ART STORIES
// ===================================

const ASCIIArtMeta: Meta<typeof ASCIIArt> = {
  title: 'Components/ImageArea/ASCIIArt',
  component: ASCIIArt,
  parameters: {
    layout: 'centered',
  }
}

export const SimpleASCIIArt: StoryObj<typeof ASCIIArt> = {
  args: {
    art: ASCIIArtLibrary.terminal.computer,
    title: 'Terminal Computer',
    variant: 'terminal',
    bordered: true,
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic ASCII art display with terminal styling',
      },
    },
  }
}

export const AllASCIIVariants: StoryObj<typeof ASCIIArt> = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ASCIIArt
        art={ASCIIArtLibrary.terminal.server}
        title="Terminal Server"
        variant="terminal"
        bordered
        size="medium"
      />
      <ASCIIArt
        art={ASCIIArtLibrary.matrix.digitalRain}
        title="Digital Rain"
        variant="matrix"
        bordered
        glow
        size="medium"
      />
      <ASCIIArt
        art={ASCIIArtLibrary.retro.boom}
        title="Retro Explosion"
        variant="retro"
        bordered
        size="medium"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ASCII art rendered with different visual variants and effects',
      },
    },
  }
}

export const InteractiveASCII: StoryObj<typeof ASCIIArt> = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ASCIIArt
        art={ASCIIArtLibrary.terminal.network}
        title="Network Animation"
        variant="terminal"
        bordered
        animated
        glow
        size="large"
      />
      <ASCIIArt
        art={ASCIIArtLibrary.matrix.flow}
        title="Data Flow"
        variant="matrix"
        bordered
        glitch
        scanlines
        size="large"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ASCII art with interactive animations and special effects',
      },
    },
  }
}

export const TypewriterEffect: StoryObj<typeof ASCIIArt> = {
  args: {
    art: ASCIIArtLibrary.retro.gaming,
    title: 'Game Over Screen',
    variant: 'retro',
    bordered: true,
    typewriter: true,
    typewriterSpeed: 30,
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'ASCII art revealed with typewriter animation effect',
      },
    },
  }
}

// ===================================
// GALLERY STORIES
// ===================================

const GalleryMeta: Meta<typeof Gallery> = {
  title: 'Components/ImageArea/Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
  }
}

export const BasicGallery: StoryObj<typeof Gallery> = {
  args: {
    images: sampleImages.slice(0, 6),
    variant: 'terminal',
    columns: 3,
    bordered: true,
    aspectRatio: '16 / 9'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic image gallery with terminal styling',
      },
    },
  }
}

export const ResponsiveGallery: StoryObj<typeof Gallery> = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Gallery
        images={sampleImages}
        variant="matrix"
        columns={4}
        gap="1.5rem"
        bordered
        scanlines
        aspectRatio="1 / 1"
        onImageClick={(index) => console.log(`Clicked image ${index}`)}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive gallery with click handling and matrix effects',
      },
    },
  }
}

export const CompositeGallery: StoryObj<typeof Gallery> = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Gallery
        images={[
          {
            src: sampleImage,
            caption: 'Base Layer',
            layers: []
          },
          {
            src: sampleImage,
            caption: 'Multiply Blend',
            layers: [{
              src: 'https://picsum.photos/400/300?random=30',
              opacity: 0.6,
              blendMode: 'multiply'
            }]
          },
          {
            src: sampleImage, 
            caption: 'Screen Blend',
            layers: [{
              src: 'https://picsum.photos/400/300?random=31',
              opacity: 0.5,
              blendMode: 'screen'
            }]
          },
          {
            src: sampleImage,
            caption: 'Complex Composite',
            layers: [
              {
                src: 'https://picsum.photos/400/300?random=32',
                opacity: 0.4,
                blendMode: 'overlay'
              },
              {
                src: 'https://picsum.photos/400/300?random=33',
                opacity: 0.3,
                blendMode: 'soft-light',
                offset: { x: 5, y: 5 }
              }
            ]
          }
        ]}
        variant="glow"
        columns={2}
        gap="2rem"
        bordered
        aspectRatio="4 / 3"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Gallery showcasing different composite layering techniques',
      },
    },
  }
}

// ===================================
// SYSTEM INTEGRATION SHOWCASE
// ===================================

export const SystemDashboard: Story = {
  render: () => (
    <div style={{
      padding: '2rem',
      background: 'var(--jadis-bg-dark)',
      minHeight: '100vh',
      color: 'var(--jadis-color-green)'
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <ASCIIArt
          art={ASCIIArtLibrary.terminal.server}
          title="System Status Dashboard"
          variant="terminal"
          bordered
          glow
          size="large"
        />
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {[
          { title: 'CPU Monitor', effect: 'scanlines' },
          { title: 'Memory Usage', effect: 'glitch' },
          { title: 'Network Traffic', effect: 'crt' },
          { title: 'Disk Activity', effect: 'phosphor' }
        ].map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <ImageArea
              src={`https://picsum.photos/300/200?random=${40 + index}`}
              variant="terminal"
              size="medium"
              bordered
              animated
              {...{ [item.effect]: true }}
              aspectRatio="3 / 2"
              alt={item.title}
            />
            <div style={{ 
              marginTop: '0.5rem', 
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              opacity: 0.8
            }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <ASCIIArt
          art={ASCIIArtLibrary.terminal.network}
          title="Network Topology"
          variant="terminal"
          bordered
          animated
          size="medium"
        />
        <ASCIIArt
          art={ASCIIArtLibrary.terminal.database}
          title="Database Status"
          variant="terminal"
          bordered
          glow
          size="medium"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete system monitoring dashboard using ImageArea and ASCIIArt components with various effects',
      },
    },
  }
}

export const RetroGamingInterface: Story = {
  render: () => (
    <div style={{
      padding: '2rem',
      background: 'var(--jadis-color-black)',
      minHeight: '100vh',
      color: 'var(--jadis-color-amber)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <ASCIIArt
          art={ASCIIArtLibrary.retro.neon}
          title="Retro Gaming Zone"
          variant="retro"
          bordered
          size="large"
        />
      </div>

      <Gallery
        images={[
          {
            src: 'https://picsum.photos/400/300?random=50',
            caption: 'Space Invaders',
            layers: [{
              src: 'https://picsum.photos/400/300?random=55',
              opacity: 0.3,
              blendMode: 'multiply'
            }]
          },
          {
            src: 'https://picsum.photos/400/300?random=51',
            caption: 'Pac-Man',
            layers: [{
              src: 'https://picsum.photos/400/300?random=56', 
              opacity: 0.4,
              blendMode: 'screen'
            }]
          },
          {
            src: 'https://picsum.photos/400/300?random=52',
            caption: 'Tetris',
            layers: [{
              src: 'https://picsum.photos/400/300?random=57',
              opacity: 0.35,
              blendMode: 'overlay'
            }]
          }
        ]}
        variant="retro"
        columns={3}
        gap="1.5rem"
        bordered
        aspectRatio="4 / 3"
      />

      {/* Add new pixelated gaming section */}
      <div style={{ margin: '3rem 0', textAlign: 'center' }}>
        <h2 style={{ 
          color: 'var(--jadis-color-amber)', 
          fontSize: '1.2rem', 
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em'
        }}>
          8-Bit Pixel Art Gallery
        </h2>
        <Gallery
          images={[
            {
              src: 'https://picsum.photos/300/300?random=60',
              caption: 'Pixel Fighter',
              layers: [{
                src: 'https://picsum.photos/300/300?random=65',
                opacity: 0.4,
                blendMode: 'multiply'
              }]
            },
            {
              src: 'https://picsum.photos/300/300?random=61',
              caption: 'Mega Quest',
              layers: [{
                src: 'https://picsum.photos/300/300?random=66', 
                opacity: 0.5,
                blendMode: 'overlay'
              }]
            },
            {
              src: 'https://picsum.photos/300/300?random=62',
              caption: 'Cyber Runner',
              layers: [{
                src: 'https://picsum.photos/300/300?random=67',
                opacity: 0.3,
                blendMode: 'screen'
              }]
            },
            {
              src: 'https://picsum.photos/300/300?random=63',
              caption: 'Neon Racer',
              layers: [{
                src: 'https://picsum.photos/300/300?random=68',
                opacity: 0.45,
                blendMode: 'hard-light'
              }]
            }
          ]}
          variant="retro"
          columns={4}
          gap="1rem"
          bordered
          aspectRatio="1 / 1"
          onImageClick={(index) => console.log(`Clicked pixel game ${index}`)}
        />
      </div>

      {/* Replace existing Gallery component props */}
      <style>{`
        .jadis-gallery .jadis-image-area {
          --pixelated: true;
          --posterized: true;
        }
        .jadis-gallery .jadis-image-area .jadis-image-area__main,
        .jadis-gallery .jadis-image-area .jadis-image-area__layer {
          image-rendering: pixelated !important;
          image-rendering: -moz-crisp-edges !important;
          image-rendering: crisp-edges !important;
          filter: contrast(200%) brightness(1.3) saturate(130%) hue-rotate(30deg) sepia(40%) !important;
        }
      `}</style>

      <Gallery
        images={[
          {
            src: 'https://picsum.photos/400/300?random=50',
            caption: 'Space Invaders',
            layers: [{
              src: 'https://picsum.photos/400/300?random=55',
              opacity: 0.3,
              blendMode: 'multiply'
            }]
          },
          {
            src: 'https://picsum.photos/400/300?random=51',
            caption: 'Pac-Man',
            layers: [{
              src: 'https://picsum.photos/400/300?random=56', 
              opacity: 0.4,
              blendMode: 'screen'
            }]
          },
          {
            src: 'https://picsum.photos/400/300?random=52',
            caption: 'Tetris',
            layers: [{
              src: 'https://picsum.photos/400/300?random=57',
              opacity: 0.35,
              blendMode: 'overlay'
            }]
          }
        ]}
        variant="retro"
        columns={3}
        gap="1.5rem"
        bordered
        aspectRatio="4 / 3"
      />

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <ASCIIArt
          art={ASCIIArtLibrary.retro.gaming}
          variant="retro"
          bordered
          typewriter
          typewriterSpeed={50}
          size="large"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Retro gaming interface showcasing image compositing and ASCII art with typewriter effects',
      },
    },
  }
}

// ===================================
// JAPANESE SEASONAL THEME STORIES
// ===================================

export const JapaneseSeasons: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        color: 'var(--jadis-jp-sumi-iro)',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        四季 (Shiki) - The Four Seasons
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '2rem',
        marginBottom: '3rem' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--jadis-jp-sakura-iro)', marginBottom: '1rem' }}>
            春 (Haru) - Spring
          </h3>
          <ImageArea
            variant="haru"
            src="https://picsum.photos/300/300?random=100"
            alt="Cherry blossoms"
            size="medium"
            aspectRatio="1 / 1"
            bordered
          />
          <p style={{ 
            color: 'var(--jadis-jp-sakura-iro)', 
            fontSize: '0.8rem', 
            marginTop: '0.5rem',
            opacity: 0.8
          }}>
            Cherry blossom theme
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--jadis-jp-kon-iro)', marginBottom: '1rem' }}>
            夏 (Natsu) - Summer
          </h3>
          <ImageArea
            variant="natsu"
            src="https://picsum.photos/300/300?random=101"
            alt="Summer night"
            size="medium"
            aspectRatio="1 / 1"
            bordered
          />
          <p style={{ 
            color: 'var(--jadis-jp-kon-iro)', 
            fontSize: '0.8rem', 
            marginTop: '0.5rem',
            opacity: 0.8
          }}>
            Deep indigo theme
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--jadis-jp-momiji-iro)', marginBottom: '1rem' }}>
            秋 (Aki) - Autumn
          </h3>
          <ImageArea
            variant="aki"
            src="https://picsum.photos/300/300?random=102"
            alt="Autumn leaves"
            size="medium"
            aspectRatio="1 / 1"
            bordered
          />
          <p style={{ 
            color: 'var(--jadis-jp-momiji-iro)', 
            fontSize: '0.8rem', 
            marginTop: '0.5rem',
            opacity: 0.8
          }}>
            Maple red theme
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--jadis-jp-yukishiro)', marginBottom: '1rem' }}>
            冬 (Fuyu) - Winter
          </h3>
          <ImageArea
            variant="fuyu"
            src="https://picsum.photos/300/300?random=103"
            alt="Snow landscape"
            size="medium"
            aspectRatio="1 / 1"
            bordered
          />
          <p style={{ 
            color: 'var(--jadis-jp-yukishiro)', 
            fontSize: '0.8rem', 
            marginTop: '0.5rem',
            opacity: 0.8
          }}>
            Snow white theme
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--jadis-jp-sumi-iro)', marginBottom: '1rem' }}>
          墨 (Sumi) - Traditional Ink
        </h3>
        <ImageArea
          variant="sumi"
          src="https://picsum.photos/400/300?random=104"
          alt="Traditional landscape"
          size="large"
          aspectRatio="4 / 3"
          bordered
        />
        <p style={{ 
          color: 'var(--jadis-jp-sumi-iro)', 
          fontSize: '0.8rem', 
          marginTop: '0.5rem',
          opacity: 0.8
        }}>
          Calligraphy ink theme for monochrome aesthetics
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Showcase of Japanese seasonal themes inspired by traditional color theory and cultural aesthetics.'
      }
    }
  }
}