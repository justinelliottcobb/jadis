import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DropArea, FileUploadZone, DropEvent, DropAreaVariant, AcceptedFileType } from './DropArea'

const meta: Meta<typeof DropArea> = {
  title: 'Components/DropArea',
  component: DropArea,
  parameters: {
    docs: {
      description: {
        component: 'A drag-and-drop file upload area with support for multiple file types, validation, and theming variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow', 'haru', 'natsu', 'aki', 'fuyu', 'sumi'],
      description: 'Visual theme variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the drop area',
    },
    accept: {
      control: 'select',
      options: ['any', 'image', 'video', 'audio', 'document', 'text'],
      description: 'Accepted file types',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the drop area',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    bordered: {
      control: 'boolean',
      description: 'Show border',
    },
    dashed: {
      control: 'boolean',
      description: 'Use dashed border style',
    },
    glitch: {
      control: 'boolean',
      description: 'Apply glitch effect',
    },
    scanlines: {
      control: 'boolean',
      description: 'Apply scanline effect',
    },
    animated: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
    showPreview: {
      control: 'boolean',
      description: 'Show file preview after drop',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropArea>

// Interactive handler for demos
const createDropHandler = (variant: string) => (event: DropEvent) => {
  const files = Array.from(event.files)
  console.log(`[${variant}] Files dropped:`, files.map(f => ({ name: f.name, size: f.size, type: f.type })))
  alert(`Dropped ${files.length} file(s) in ${variant} variant:\\n${files.map(f => f.name).join('\\n')}`)
}

const createFileSelectHandler = (variant: string) => (files: FileList) => {
  const fileArray = Array.from(files)
  console.log(`[${variant}] Files selected:`, fileArray.map(f => ({ name: f.name, size: f.size, type: f.type })))
  alert(`Selected ${fileArray.length} file(s) in ${variant} variant:\\n${fileArray.map(f => f.name).join('\\n')}`)
}

const createErrorHandler = (variant: string) => (error: string) => {
  console.error(`[${variant}] Error:`, error)
  alert(`Error in ${variant} variant: ${error}`)
}

export const Default: Story = {
  args: {
    variant: 'terminal',
    size: 'medium',
    accept: 'any',
    multiple: true,
    disabled: false,
    loading: false,
    bordered: true,
    dashed: true,
    glitch: false,
    scanlines: false,
    animated: false,
    showPreview: true,
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024, // 10MB
  },
  render: (args) => (
    <DropArea
      {...args}
      onDrop={createDropHandler('default')}
      onFileSelect={createFileSelectHandler('default')}
      onError={createErrorHandler('default')}
    />
  ),
}

export const AllVariants: Story = {
  render: () => {
    const variants: DropAreaVariant[] = ['terminal', 'matrix', 'retro', 'minimal', 'glow']
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: '#00ff00', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {variant}
            </h3>
            <DropArea
              variant={variant}
              size="medium"
              accept="any"
              onDrop={createDropHandler(variant)}
              onFileSelect={createFileSelectHandler(variant)}
              onError={createErrorHandler(variant)}
            />
          </div>
        ))}
      </div>
    )
  },
}

export const JapaneseSeasonalThemes: Story = {
  render: () => {
    const japaneseVariants: DropAreaVariant[] = ['haru', 'natsu', 'aki', 'fuyu', 'sumi']
    const themes = {
      haru: { name: '春 (Haru)', description: 'Spring - Cherry Blossom' },
      natsu: { name: '夏 (Natsu)', description: 'Summer - Deep Indigo' },
      aki: { name: '秋 (Aki)', description: 'Autumn - Maple Red' },
      fuyu: { name: '冬 (Fuyu)', description: 'Winter - Snow White' },
      sumi: { name: '墨 (Sumi)', description: 'Ink - Traditional Black' },
    }
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {japaneseVariants.map((variant) => (
          <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: 'var(--jadis-jp-yukishiro, #fff)', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
              {themes[variant].name}
            </h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {themes[variant].description}
            </p>
            <DropArea
              variant={variant}
              size="medium"
              accept="image"
              onDrop={createDropHandler(variant)}
              onFileSelect={createFileSelectHandler(variant)}
              onError={createErrorHandler(variant)}
            />
          </div>
        ))}
      </div>
    )
  },
}

export const FileTypeRestrictions: Story = {
  render: () => {
    const fileTypes: AcceptedFileType[] = ['image', 'video', 'audio', 'document', 'text']
    const descriptions = {
      image: 'Images only (PNG, JPG, GIF, etc.)',
      video: 'Video files (MP4, AVI, MOV, etc.)',
      audio: 'Audio files (MP3, WAV, OGG, etc.)',
      document: 'Documents (PDF, DOC, DOCX)',
      text: 'Text files (TXT, MD, JSON, etc.)',
    }
    
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
        {fileTypes.map((fileType) => (
          <div key={fileType} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ color: '#00ff00', fontFamily: 'monospace', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {fileType} Files
            </h3>
            <p style={{ color: '#ccc', fontSize: '0.8rem', marginBottom: '1rem' }}>
              {descriptions[fileType]}
            </p>
            <DropArea
              variant="terminal"
              size="small"
              accept={fileType}
              multiple={true}
              maxFiles={5}
              onDrop={createDropHandler(fileType)}
              onFileSelect={createFileSelectHandler(fileType)}
              onError={createErrorHandler(fileType)}
            />
          </div>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>SMALL</h3>
        <DropArea
          variant="terminal"
          size="small"
          accept="any"
          onDrop={createDropHandler('small')}
          onFileSelect={createFileSelectHandler('small')}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>MEDIUM</h3>
        <DropArea
          variant="matrix"
          size="medium"
          accept="any"
          onDrop={createDropHandler('medium')}
          onFileSelect={createFileSelectHandler('medium')}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>LARGE</h3>
        <DropArea
          variant="glow"
          size="large"
          accept="any"
          onDrop={createDropHandler('large')}
          onFileSelect={createFileSelectHandler('large')}
        />
      </div>
    </div>
  ),
}

export const WithEffects: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>WITH SCANLINES</h3>
        <DropArea
          variant="terminal"
          accept="any"
          scanlines
          onDrop={createDropHandler('scanlines')}
          onFileSelect={createFileSelectHandler('scanlines')}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>WITH GLITCH</h3>
        <DropArea
          variant="matrix"
          accept="any"
          glitch
          onDrop={createDropHandler('glitch')}
          onFileSelect={createFileSelectHandler('glitch')}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>ANIMATED</h3>
        <DropArea
          variant="glow"
          accept="any"
          animated
          onDrop={createDropHandler('animated')}
          onFileSelect={createFileSelectHandler('animated')}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>SOLID BORDER</h3>
        <DropArea
          variant="retro"
          accept="any"
          dashed={false}
          onDrop={createDropHandler('solid')}
          onFileSelect={createFileSelectHandler('solid')}
        />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '2rem', backgroundColor: '#000' }}>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>LOADING</h3>
        <DropArea
          variant="terminal"
          accept="any"
          loading={true}
          loadingText="Uploading files..."
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>DISABLED</h3>
        <DropArea
          variant="matrix"
          accept="any"
          disabled={true}
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>WITH ERROR</h3>
        <DropArea
          variant="retro"
          accept="any"
          errorText="File size too large!"
        />
      </div>
      <div>
        <h3 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '1rem' }}>CUSTOM PLACEHOLDER</h3>
        <DropArea
          variant="glow"
          accept="image"
          placeholder={
            <div style={{ textAlign: 'center', color: '#00ffff' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Custom Image Drop Zone</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Drop your images here for processing</div>
            </div>
          }
          onDrop={createDropHandler('custom')}
          onFileSelect={createFileSelectHandler('custom')}
        />
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const handleDrop = (event: DropEvent) => {
      setError(null)
      setIsLoading(true)
      
      // Simulate processing delay
      setTimeout(() => {
        const fileArray = Array.from(event.files)
        setFiles(prev => [...prev, ...fileArray])
        setIsLoading(false)
      }, 1000)
    }
    
    const handleError = (errorMessage: string) => {
      setError(errorMessage)
    }
    
    const clearFiles = () => {
      setFiles([])
      setError(null)
    }
    
    return (
      <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh' }}>
        <h2 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '2rem' }}>
          INTERACTIVE FILE DROP DEMO
        </h2>
        
        <DropArea
          variant="terminal"
          size="large"
          accept="any"
          loading={isLoading}
          errorText={error}
          maxFiles={5}
          maxSize={5 * 1024 * 1024} // 5MB
          onDrop={handleDrop}
          onError={handleError}
          showPreview={false}
        />
        
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <h3 style={{ color: '#00ff00', fontFamily: 'monospace' }}>
              UPLOADED FILES ({files.length})
            </h3>
            {files.length > 0 && (
              <button
                onClick={clearFiles}
                style={{
                  background: '#ff3333',
                  color: '#000',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                CLEAR ALL
              </button>
            )}
          </div>
          
          {files.length === 0 ? (
            <p style={{ color: '#666', fontFamily: 'monospace' }}>No files uploaded yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {files.map((file, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem',
                    border: '1px solid #00ff00',
                    backgroundColor: 'rgba(0, 255, 0, 0.05)',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                  }}
                >
                  <span style={{ color: '#00ff00' }}>{file.name}</span>
                  <span style={{ color: '#ffff00' }}>
                    {(file.size / 1024 / 1024).toFixed(2)}MB
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
}

// File Upload Zone Stories
export const FileUploadZoneDemo: Story = {
  render: () => {
    const [uploadStatus, setUploadStatus] = useState<string>('')
    
    const handleUploadStart = (files: File[]) => {
      setUploadStatus(`Starting upload of ${files.length} files...`)
    }
    
    const handleUploadProgress = (progress: number, file: File) => {
      setUploadStatus(`Uploading ${file.name}: ${Math.round(progress)}%`)
    }
    
    const handleUploadComplete = (response: any, file: File) => {
      setUploadStatus(`✅ Upload complete: ${file.name}`)
    }
    
    const handleUploadError = (error: Error, file: File) => {
      setUploadStatus(`❌ Upload failed: ${file.name} - ${error.message}`)
    }
    
    return (
      <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh' }}>
        <h2 style={{ color: '#00ff00', fontFamily: 'monospace', marginBottom: '2rem' }}>
          FILE UPLOAD ZONE DEMO
        </h2>
        
        <FileUploadZone
          variant="matrix"
          size="large"
          accept="image"
          uploadUrl="/api/upload" // This would be your actual upload endpoint
          onUploadStart={handleUploadStart}
          onUploadProgress={handleUploadProgress}
          onUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
        />
        
        {uploadStatus && (
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            border: '1px solid #00ff41',
            backgroundColor: 'rgba(0, 255, 65, 0.05)',
            color: '#00ff41',
            fontFamily: 'monospace',
          }}>
            Status: {uploadStatus}
          </div>
        )}
        
        <div style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
          <p>Note: This demo uses a mock upload URL. In a real application, you would provide a valid endpoint.</p>
        </div>
      </div>
    )
  },
}