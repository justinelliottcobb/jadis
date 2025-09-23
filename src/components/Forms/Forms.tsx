import React, { forwardRef } from 'react'
import './Forms.scss'

// Common Types
export type FormVariant = 'terminal' | 'matrix' | 'retro' | 'minimal' | 'glow'
export type FormColor = 'green' | 'cyan' | 'yellow' | 'orange' | 'purple' | 'gray' | 'red' | 'blue' | 'white'

// ===================================
// INPUT COMPONENT
// ===================================

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: FormVariant
  error?: boolean
  errorMessage?: string
  label?: string
  required?: boolean
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'terminal',
  error = false,
  errorMessage,
  label,
  required = false,
  className = '',
  id,
  type = 'text',
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="jadis-form-group">
      {label && (
        <label 
          htmlFor={inputId}
          className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <div className={`jadis-input-wrapper jadis-input-wrapper--${variant}`}>
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={`jadis-input jadis-input--${variant} ${error ? 'jadis-input--error' : ''} ${className}`}
          aria-invalid={error}
          aria-describedby={errorMessage ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>
      {errorMessage && (
        <div id={`${inputId}-error`} className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'

// ===================================
// TEXTAREA COMPONENT
// ===================================

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: FormVariant
  error?: boolean
  errorMessage?: string
  label?: string
  required?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  variant = 'terminal',
  error = false,
  errorMessage,
  label,
  required = false,
  className = '',
  id,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="jadis-form-group">
      {label && (
        <label 
          htmlFor={textareaId}
          className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={`jadis-textarea jadis-textarea--${variant} ${error ? 'jadis-textarea--error' : ''} ${className}`}
        aria-invalid={error}
        aria-describedby={errorMessage ? `${textareaId}-error` : undefined}
        {...props}
      />
      {errorMessage && (
        <div id={`${textareaId}-error`} className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
})

TextArea.displayName = 'TextArea'

// ===================================
// RADIO BUTTON COMPONENT
// ===================================

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: FormVariant
  label: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  variant = 'terminal',
  label,
  className = '',
  id,
  ...props
}, ref) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <label className={`jadis-radio jadis-radio--${variant} ${className}`} htmlFor={radioId}>
      <input
        ref={ref}
        id={radioId}
        type="radio"
        className="jadis-radio__input"
        {...props}
      />
      <span className="jadis-radio__indicator" />
      <span className="jadis-radio__label">{label}</span>
    </label>
  )
})

Radio.displayName = 'Radio'

// ===================================
// RADIO GROUP COMPONENT
// ===================================

export interface RadioGroupProps {
  name: string
  options: { value: string; label: string; disabled?: boolean }[]
  variant?: FormVariant
  value?: string
  onChange?: (value: string) => void
  label?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  variant = 'terminal',
  value,
  onChange,
  label,
  required = false,
  error = false,
  errorMessage
}) => {
  return (
    <div className={`jadis-form-group ${error ? 'jadis-form-group--error' : ''}`} role="radiogroup" aria-required={required}>
      {label && (
        <div className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}>
          {label}
        </div>
      )}
      <div>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={option.disabled}
            variant={variant}
          />
        ))}
      </div>
      {errorMessage && (
        <div className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

// ===================================
// CHECKBOX COMPONENT
// ===================================

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: FormVariant
  label: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  variant = 'terminal',
  label,
  className = '',
  id,
  indeterminate = false,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`
  
  React.useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.indeterminate = indeterminate
    }
  }, [indeterminate, ref])
  
  return (
    <label className={`jadis-checkbox jadis-checkbox--${variant} ${className}`} htmlFor={checkboxId}>
      <input
        ref={ref}
        id={checkboxId}
        type="checkbox"
        className="jadis-checkbox__input"
        {...props}
      />
      <span className="jadis-checkbox__indicator" />
      <span className="jadis-checkbox__label">{label}</span>
    </label>
  )
})

Checkbox.displayName = 'Checkbox'

// ===================================
// SELECT/DROPDOWN COMPONENT
// ===================================

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: FormVariant
  error?: boolean
  errorMessage?: string
  label?: string
  required?: boolean
  options: { value: string; label: string; disabled?: boolean }[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  variant = 'terminal',
  error = false,
  errorMessage,
  label,
  required = false,
  options,
  placeholder = 'Select an option',
  className = '',
  id,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="jadis-form-group">
      {label && (
        <label 
          htmlFor={selectId}
          className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      <div className={`jadis-select jadis-select--${variant}`}>
        <select
          ref={ref}
          id={selectId}
          className={`jadis-select__control ${error ? 'jadis-select__control--error' : ''} ${className}`}
          aria-invalid={error}
          aria-describedby={errorMessage ? `${selectId}-error` : undefined}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value} 
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="jadis-select__arrow" aria-hidden="true" />
      </div>
      {errorMessage && (
        <div id={`${selectId}-error`} className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
})

Select.displayName = 'Select'

// ===================================
// FORM COMPONENT WRAPPER
// ===================================

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  variant?: FormVariant
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form = forwardRef<HTMLFormElement, FormProps>(({
  variant = 'terminal',
  children,
  className = '',
  ...props
}, ref) => {
  return (
    <form
      ref={ref}
      className={`jadis-form jadis-form--${variant} ${className}`}
      {...props}
    >
      {children}
    </form>
  )
})

Form.displayName = 'Form'

// ===================================
// COMBOBOX COMPONENT
// ===================================

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
  description?: string
}

export interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  variant?: FormVariant
  options: ComboboxOption[]
  value?: string
  onChange?: (value: string, option: ComboboxOption | null) => void
  onFilter?: (query: string, options: ComboboxOption[]) => ComboboxOption[]
  label?: string
  required?: boolean
  error?: boolean
  errorMessage?: string
  placeholder?: string
  clearable?: boolean
  loading?: boolean
  loadingText?: string
  noOptionsText?: string
  maxHeight?: string
  allowCustomValue?: boolean
}

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(({
  variant = 'terminal',
  options,
  value = '',
  onChange,
  onFilter,
  label,
  required = false,
  error = false,
  errorMessage,
  placeholder = 'Search or select...',
  clearable = true,
  loading = false,
  loadingText = 'Loading...',
  noOptionsText = 'No options found',
  maxHeight = '200px',
  allowCustomValue = false,
  className = '',
  id,
  onFocus,
  onBlur,
  onKeyDown,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState(value)
  const [filteredOptions, setFilteredOptions] = React.useState(options)
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1)
  const [isFocused, setIsFocused] = React.useState(false)
  
  const comboboxId = id || `combobox-${Math.random().toString(36).substr(2, 9)}`
  const listboxId = `${comboboxId}-listbox`
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)

  // Combine refs
  React.useImperativeHandle(ref, () => inputRef.current!, [])

  // Update input value when prop changes
  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  // Filter options based on input
  React.useEffect(() => {
    if (!inputValue.trim()) {
      setFilteredOptions(options)
      return
    }

    if (onFilter) {
      setFilteredOptions(onFilter(inputValue, options))
    } else {
      // Default filtering logic
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.value.toLowerCase().includes(inputValue.toLowerCase())
      )
      setFilteredOptions(filtered)
    }
  }, [inputValue, options, onFilter])

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Scroll highlighted option into view
  React.useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        })
      }
    }
  }, [highlightedIndex])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    setIsOpen(true)
    setHighlightedIndex(-1)
    
    // If allowing custom values, call onChange immediately
    if (allowCustomValue) {
      onChange?.(newValue, null)
    }
  }

  const handleOptionSelect = (option: ComboboxOption) => {
    if (option.disabled) return
    
    setInputValue(option.label)
    setIsOpen(false)
    setHighlightedIndex(-1)
    onChange?.(option.value, option)
    inputRef.current?.blur()
  }

  const handleClear = () => {
    setInputValue('')
    setIsOpen(false)
    setHighlightedIndex(-1)
    onChange?.('', null)
    inputRef.current?.focus()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    setIsOpen(true)
    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    
    // Delay closing to allow option clicks
    setTimeout(() => {
      setIsOpen(false)
      setHighlightedIndex(-1)
    }, 200)
    
    onBlur?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setIsOpen(true)
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        )
        break
        
      case 'ArrowUp':
        e.preventDefault()
        setIsOpen(true)
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        )
        break
        
      case 'Enter':
        e.preventDefault()
        if (isOpen && highlightedIndex >= 0) {
          handleOptionSelect(filteredOptions[highlightedIndex])
        } else if (isOpen && allowCustomValue) {
          setIsOpen(false)
          onChange?.(inputValue, null)
        }
        break
        
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
        
      case 'Tab':
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
    }
    
    onKeyDown?.(e)
  }

  const showClearButton = clearable && inputValue && !loading

  const comboboxClasses = [
    'jadis-combobox',
    `jadis-combobox--${variant}`,
    isOpen && 'jadis-combobox--open',
    isFocused && 'jadis-combobox--focused',
    error && 'jadis-combobox--error',
    loading && 'jadis-combobox--loading',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className="jadis-form-group">
      {label && (
        <label 
          htmlFor={comboboxId}
          className={`jadis-label jadis-label--${variant} ${required ? 'jadis-label--required' : ''}`}
        >
          {label}
        </label>
      )}
      
      <div className={comboboxClasses} ref={dropdownRef}>
        <div className="jadis-combobox__input-wrapper">
          <input
            ref={inputRef}
            id={comboboxId}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="jadis-combobox__input"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? listboxId : undefined}
            aria-activedescendant={
              isOpen && highlightedIndex >= 0 
                ? `${comboboxId}-option-${highlightedIndex}` 
                : undefined
            }
            aria-invalid={error}
            aria-describedby={errorMessage ? `${comboboxId}-error` : undefined}
            autoComplete="off"
            {...props}
          />
          
          {loading && (
            <div className="jadis-combobox__loading" aria-hidden="true">
              ◐
            </div>
          )}
          
          {showClearButton && (
            <button
              type="button"
              className="jadis-combobox__clear"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              ✕
            </button>
          )}
          
          <div className="jadis-combobox__arrow" aria-hidden="true">
            ▼
          </div>
        </div>
        
        {isOpen && (
          <ul
            ref={listRef}
            id={listboxId}
            className="jadis-combobox__listbox"
            role="listbox"
            style={{ maxHeight }}
          >
            {loading ? (
              <li className="jadis-combobox__option jadis-combobox__option--loading">
                {loadingText}
              </li>
            ) : filteredOptions.length === 0 ? (
              <li className="jadis-combobox__option jadis-combobox__option--empty">
                {noOptionsText}
              </li>
            ) : (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  id={`${comboboxId}-option-${index}`}
                  className={[
                    'jadis-combobox__option',
                    index === highlightedIndex && 'jadis-combobox__option--highlighted',
                    option.value === value && 'jadis-combobox__option--selected',
                    option.disabled && 'jadis-combobox__option--disabled'
                  ].filter(Boolean).join(' ')}
                  role="option"
                  aria-selected={option.value === value}
                  aria-disabled={option.disabled}
                  onMouseDown={(e) => {
                    e.preventDefault() // Prevent input blur
                    handleOptionSelect(option)
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  <div className="jadis-combobox__option-content">
                    <div className="jadis-combobox__option-label">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="jadis-combobox__option-description">
                        {option.description}
                      </div>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      
      {errorMessage && (
        <div id={`${comboboxId}-error`} className="jadis-form-error" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  )
})

Combobox.displayName = 'Combobox'