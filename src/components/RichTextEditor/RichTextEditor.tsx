import React, { forwardRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { ASCIIIcon } from '../Icons/Icons'
import './RichTextEditor.scss'

// Common Types
export type RichTextEditorVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'

// ===================================
// RICH TEXT EDITOR COMPONENT
// ===================================

export interface RichTextEditorProps {
  variant?: RichTextEditorVariant
  label?: string
  placeholder?: string
  content?: string
  onChange?: (content: string) => void
  error?: boolean
  errorMessage?: string
  required?: boolean
  disabled?: boolean
  showToolbar?: boolean
  minHeight?: string
  maxHeight?: string
  className?: string
  id?: string
}

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(({
  variant = 'terminal',
  label,
  placeholder = 'Start typing...',
  content = '',
  onChange,
  error = false,
  errorMessage,
  required = false,
  disabled = false,
  showToolbar = true,
  minHeight = '200px',
  maxHeight,
  className = '',
  id
}, ref) => {
  const editorId = id || `rte-${Math.random().toString(36).substr(2, 9)}`
  
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange?.(html)
    },
    editable: !disabled,
    editorProps: {
      attributes: {
        class: `jadis-rte-content jadis-rte-content--${variant}`,
        style: `min-height: ${minHeight}; ${maxHeight ? `max-height: ${maxHeight};` : ''}`
      }
    }
  })

  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  const toggleBold = () => editor?.chain().focus().toggleBold().run()
  const toggleItalic = () => editor?.chain().focus().toggleItalic().run()
  const toggleCode = () => editor?.chain().focus().toggleCode().run()
  const toggleHeading = (level: 1 | 2 | 3) => () => 
    editor?.chain().focus().toggleHeading({ level }).run()
  const toggleBulletList = () => editor?.chain().focus().toggleBulletList().run()
  const toggleOrderedList = () => editor?.chain().focus().toggleOrderedList().run()
  const toggleCodeBlock = () => editor?.chain().focus().toggleCodeBlock().run()
  const insertHorizontalRule = () => editor?.chain().focus().setHorizontalRule().run()
  const undo = () => editor?.chain().focus().undo().run()
  const redo = () => editor?.chain().focus().redo().run()

  if (!editor) {
    return (
      <div className={`jadis-rte-loading jadis-rte-loading--${variant}`}>
        <ASCIIIcon icon="◐" variant={variant} />
        Loading editor...
      </div>
    )
  }

  return (
    <div ref={ref} className={`jadis-form-group ${className}`}>
      {label && (
        <label 
          htmlFor={editorId}
          className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      
      <div 
        className={`jadis-rte jadis-rte--${variant} ${error ? 'jadis-rte--error' : ''} ${disabled ? 'jadis-rte--disabled' : ''}`}
        id={editorId}
        aria-invalid={error}
        aria-describedby={errorMessage ? `${editorId}-error` : undefined}
      >
        {showToolbar && (
          <div className={`jadis-rte-toolbar jadis-rte-toolbar--${variant}`}>
            <div className="jadis-rte-toolbar__section">
              <button
                type="button"
                onClick={undo}
                disabled={!editor.can().undo()}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant}`}
                title="Undo"
              >
                <ASCIIIcon icon="◄" variant={variant} />
              </button>
              <button
                type="button"
                onClick={redo}
                disabled={!editor.can().redo()}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant}`}
                title="Redo"
              >
                <ASCIIIcon icon="►" variant={variant} />
              </button>
            </div>

            <div className="jadis-rte-toolbar__divider" />

            <div className="jadis-rte-toolbar__section">
              <button
                type="button"
                onClick={toggleHeading(1)}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('heading', { level: 1 }) ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Heading 1"
              >
                H1
              </button>
              <button
                type="button"
                onClick={toggleHeading(2)}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('heading', { level: 2 }) ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Heading 2"
              >
                H2
              </button>
              <button
                type="button"
                onClick={toggleHeading(3)}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('heading', { level: 3 }) ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Heading 3"
              >
                H3
              </button>
            </div>

            <div className="jadis-rte-toolbar__divider" />

            <div className="jadis-rte-toolbar__section">
              <button
                type="button"
                onClick={toggleBold}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('bold') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Bold"
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                onClick={toggleItalic}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('italic') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Italic"
              >
                <em>I</em>
              </button>
              <button
                type="button"
                onClick={toggleCode}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('code') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Code"
              >
                <ASCIIIcon icon="◊" variant={variant} />
              </button>
            </div>

            <div className="jadis-rte-toolbar__divider" />

            <div className="jadis-rte-toolbar__section">
              <button
                type="button"
                onClick={toggleBulletList}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('bulletList') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Bullet List"
              >
                <ASCIIIcon icon="≡" variant={variant} />
              </button>
              <button
                type="button"
                onClick={toggleOrderedList}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('orderedList') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Ordered List"
              >
                1.
              </button>
            </div>

            <div className="jadis-rte-toolbar__divider" />

            <div className="jadis-rte-toolbar__section">
              <button
                type="button"
                onClick={toggleCodeBlock}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant} ${editor.isActive('codeBlock') ? 'jadis-rte-toolbar__button--active' : ''}`}
                title="Code Block"
              >
                <ASCIIIcon icon="▣" variant={variant} />
              </button>
              <button
                type="button"
                onClick={insertHorizontalRule}
                className={`jadis-rte-toolbar__button jadis-rte-toolbar__button--${variant}`}
                title="Horizontal Rule"
              >
                ---
              </button>
            </div>
          </div>
        )}

        <div className={`jadis-rte-editor jadis-rte-editor--${variant}`}>
          <EditorContent editor={editor} />
          {!content && placeholder && !editor.isFocused && (
            <div className={`jadis-rte-placeholder jadis-rte-placeholder--${variant}`}>
              {placeholder}
            </div>
          )}
        </div>
      </div>

      {errorMessage && (
        <div id={`${editorId}-error`} className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
})

RichTextEditor.displayName = 'RichTextEditor'