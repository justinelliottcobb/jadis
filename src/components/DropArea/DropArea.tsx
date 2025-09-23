import React, { useState, useRef, useCallback } from 'react'
import './DropArea.scss'

// Common Types
export type DropAreaVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'sumi'
export type DropAreaSize = 'small' | 'medium' | 'large'
export type AcceptedFileType = 'image' | 'video' | 'audio' | 'document' | 'text' | 'any'

// ===================================
// FILE DROP EVENT INTERFACE
// ===================================

export interface DropEvent {
  files: FileList
  items: DataTransferItemList
  event: React.DragEvent<HTMLDivElement>
}

// ===================================
// MAIN DROP AREA COMPONENT
// ===================================

export interface DropAreaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  variant?: DropAreaVariant
  size?: DropAreaSize
  accept?: AcceptedFileType | AcceptedFileType[]
  multiple?: boolean
  disabled?: boolean
  loading?: boolean
  bordered?: boolean
  dashed?: boolean
  glitch?: boolean
  scanlines?: boolean
  animated?: boolean
  showPreview?: boolean
  maxFiles?: number
  maxSize?: number // in bytes
  placeholder?: React.ReactNode
  loadingText?: string
  errorText?: string
  onDrop?: (event: DropEvent) => void
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
  onFileSelect?: (files: FileList) => void
  onError?: (error: string) => void
}

export const DropArea: React.FC<DropAreaProps> = ({
  variant = 'terminal',
  size = 'medium',
  accept = 'any',
  multiple = true,
  disabled = false,
  loading = false,
  bordered = true,
  dashed = true,
  glitch = false,
  scanlines = false,
  animated = false,
  showPreview = true,
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024, // 10MB default
  placeholder,
  loadingText = 'Processing files...',
  errorText,
  className = '',
  onDrop,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onFileSelect,
  onError,
  ...props
}) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [droppedFiles, setDroppedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dragCounterRef = useRef(0)

  // Validate file type
  const isValidFileType = useCallback((file: File): boolean => {
    if (accept === 'any') return true
    
    const acceptedTypes = Array.isArray(accept) ? accept : [accept]
    
    return acceptedTypes.some(type => {
      switch (type) {
        case 'image':
          return file.type.startsWith('image/')
        case 'video':
          return file.type.startsWith('video/')
        case 'audio':
          return file.type.startsWith('audio/')
        case 'document':
          return ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)
        case 'text':
          return file.type.startsWith('text/')
        default:
          return false
      }
    })
  }, [accept])

  // Validate files
  const validateFiles = useCallback((files: FileList): string | null => {
    if (files.length > maxFiles) {
      return `Maximum ${maxFiles} files allowed`
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds maximum size of ${Math.round(maxSize / 1024 / 1024)}MB`
      }
      
      if (!isValidFileType(file)) {
        return `File type "${file.type}" is not accepted`
      }
    }

    return null
  }, [maxFiles, maxSize, isValidFileType])

  // Handle drag events
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    dragCounterRef.current++
    if (dragCounterRef.current === 1) {
      setIsDragOver(true)
    }
    
    onDragEnter?.(e)
  }, [onDragEnter])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    dragCounterRef.current--
    if (dragCounterRef.current === 0) {
      setIsDragOver(false)
    }
    
    onDragLeave?.(e)
  }, [onDragLeave])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onDragOver?.(e)
  }, [onDragOver])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsDragOver(false)
    dragCounterRef.current = 0
    
    if (disabled) return

    const files = e.dataTransfer.files
    const validationError = validateFiles(files)
    
    if (validationError) {
      setError(validationError)
      onError?.(validationError)
      return
    }

    setError(null)
    
    if (showPreview) {
      const fileArray = Array.from(files)
      setDroppedFiles(fileArray)
    }
    
    const dropEvent: DropEvent = {
      files,
      items: e.dataTransfer.items,
      event: e
    }
    
    onDrop?.(dropEvent)
  }, [disabled, validateFiles, showPreview, onDrop, onError])

  // Handle file input change
  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const validationError = validateFiles(files)
    
    if (validationError) {
      setError(validationError)
      onError?.(validationError)
      return
    }

    setError(null)
    
    if (showPreview) {
      const fileArray = Array.from(files)
      setDroppedFiles(fileArray)
    }
    
    onFileSelect?.(files)
  }, [validateFiles, showPreview, onFileSelect, onError])

  // Handle click to open file dialog
  const handleClick = useCallback(() => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [disabled])

  const classes = [
    'jadis-drop-area',
    `jadis-drop-area--${variant}`,
    `jadis-drop-area--${size}`,
    isDragOver && 'jadis-drop-area--drag-over',
    disabled && 'jadis-drop-area--disabled',
    loading && 'jadis-drop-area--loading',
    bordered && 'jadis-drop-area--bordered',
    dashed && 'jadis-drop-area--dashed',
    glitch && 'jadis-fx-glitch-static',
    scanlines && 'jadis-fx-scanlines',
    animated && 'jadis-drop-area--animated',
    error && 'jadis-drop-area--error',
    className
  ].filter(Boolean).join(' ')

  const acceptText = Array.isArray(accept) ? accept.join(', ') : accept
  const acceptedTypesText = accept === 'any' ? 'any files' : `${acceptText} files`

  return (
    <div
      {...props}
      className={classes}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={`Drop area for ${acceptedTypesText}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept === 'any' ? '*/*' : accept === 'image' ? 'image/*' : accept === 'video' ? 'video/*' : accept === 'audio' ? 'audio/*' : accept === 'text' ? 'text/*' : '*/*'}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />

      <div className="jadis-drop-area__content">
        {loading ? (
          <div className="jadis-drop-area__loading">
            <div className="jadis-drop-area__loading-icon">◐</div>
            <div className="jadis-drop-area__loading-text">{loadingText}</div>
          </div>
        ) : error || errorText ? (
          <div className="jadis-drop-area__error">
            <div className="jadis-drop-area__error-icon">⚠</div>
            <div className="jadis-drop-area__error-text">{error || errorText}</div>
          </div>
        ) : placeholder ? (
          placeholder
        ) : (
          <div className="jadis-drop-area__placeholder">
            <div className="jadis-drop-area__icon">
              {isDragOver ? '⬇' : '📁'}
            </div>
            <div className="jadis-drop-area__text">
              {isDragOver ? (
                <span>Drop files here</span>
              ) : (
                <>
                  <span className="jadis-drop-area__primary-text">
                    Drop {acceptedTypesText} here or click to select
                  </span>
                  <span className="jadis-drop-area__secondary-text">
                    {multiple ? `Up to ${maxFiles} files` : '1 file'}, max {Math.round(maxSize / 1024 / 1024)}MB each
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* File Preview */}
      {showPreview && droppedFiles.length > 0 && (
        <div className="jadis-drop-area__preview">
          <div className="jadis-drop-area__preview-title">Selected Files:</div>
          <div className="jadis-drop-area__file-list">
            {droppedFiles.map((file, index) => (
              <div key={index} className="jadis-drop-area__file-item">
                <span className="jadis-drop-area__file-name">{file.name}</span>
                <span className="jadis-drop-area__file-size">
                  ({(file.size / 1024 / 1024).toFixed(2)}MB)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Effect Overlay */}
      <div className="jadis-drop-area__overlay"></div>
    </div>
  )
}

// ===================================
// FILE UPLOAD ZONE COMPONENT
// ===================================

export interface FileUploadZoneProps extends Omit<DropAreaProps, 'showPreview'> {
  uploadUrl?: string
  headers?: Record<string, string>
  onUploadStart?: (files: File[]) => void
  onUploadProgress?: (progress: number, file: File) => void
  onUploadComplete?: (response: unknown, file: File) => void
  onUploadError?: (error: Error, file: File) => void
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  uploadUrl,
  headers,
  onUploadStart,
  onUploadProgress,
  onUploadComplete,
  onUploadError,
  onDrop,
  onFileSelect,
  ...props
}) => {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadFile = useCallback(async (file: File) => {
    if (!uploadUrl) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const xhr = new XMLHttpRequest()

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100
          setUploadProgress(progress)
          onUploadProgress?.(progress, file)
        }
      })

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText)
            onUploadComplete?.(response, file)
          } catch {
            onUploadComplete?.(xhr.responseText, file)
          }
        } else {
          onUploadError?.(new Error(`Upload failed: ${xhr.statusText}`), file)
        }
      }

      xhr.onerror = () => {
        onUploadError?.(new Error('Upload failed'), file)
      }

      xhr.open('POST', uploadUrl)
      
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value)
        })
      }

      xhr.send(formData)
    } catch (error) {
      onUploadError?.(error as Error, file)
    }
  }, [uploadUrl, headers, onUploadProgress, onUploadComplete, onUploadError])

  const handleDrop = useCallback((event: DropEvent) => {
    const files = Array.from(event.files)
    
    onDrop?.(event)
    
    if (uploadUrl) {
      setUploading(true)
      setUploadProgress(0)
      onUploadStart?.(files)
      
      files.forEach(uploadFile)
    }
  }, [onDrop, uploadUrl, onUploadStart, uploadFile])

  const handleFileSelect = useCallback((files: FileList) => {
    const fileArray = Array.from(files)
    
    onFileSelect?.(files)
    
    if (uploadUrl) {
      setUploading(true)
      setUploadProgress(0)
      onUploadStart?.(fileArray)
      
      fileArray.forEach(uploadFile)
    }
  }, [onFileSelect, uploadUrl, onUploadStart, uploadFile])

  return (
    <DropArea
      {...props}
      loading={uploading}
      loadingText={`Uploading... ${Math.round(uploadProgress)}%`}
      onDrop={handleDrop}
      onFileSelect={handleFileSelect}
      showPreview={false}
    />
  )
}