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
    <div className="jadis-form-group" role="radiogroup" aria-required={required}>
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