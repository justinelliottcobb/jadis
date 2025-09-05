import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input, TextArea, Radio, RadioGroup, Checkbox, Select, Combobox, Form } from './Forms'
import { ThemeProvider } from '../ThemeProvider'
import { H1, H2 } from '../Headers'
import { P } from '../Typography'

const meta: Meta<typeof Input> = {
  title: 'Forms/Form Components',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Terminal-inspired form components with ASCII aesthetics. Includes inputs, textareas, radios, checkboxes, and selects with multiple variants matching the Jadis design system.',
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'terminal', value: '#001100' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['terminal', 'matrix', 'retro', 'minimal', 'glow'],
      description: 'Visual style variant',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export default meta

// ===================================
// INPUT STORIES
// ===================================

type InputStory = StoryObj<typeof Input>

export const InputDefault: InputStory = {
  name: 'Input - Terminal',
  args: {
    variant: 'terminal',
    label: 'Username',
    placeholder: 'Enter username',
    required: true,
  },
}

export const InputMatrix: InputStory = {
  name: 'Input - Matrix',
  args: {
    variant: 'matrix',
    label: 'Access Code',
    placeholder: 'Enter access code',
    type: 'password',
  },
}

export const InputRetro: InputStory = {
  name: 'Input - Retro',
  args: {
    variant: 'retro',
    label: 'System Name',
    placeholder: 'ENTER SYSTEM NAME',
    defaultValue: 'MAINFRAME-01',
  },
}

export const InputWithError: InputStory = {
  name: 'Input - Error State',
  args: {
    variant: 'terminal',
    label: 'Email',
    type: 'email',
    placeholder: 'user@example.com',
    error: true,
    errorMessage: 'Invalid email format',
    defaultValue: 'not-an-email',
  },
}

// ===================================
// TEXTAREA STORIES
// ===================================

type TextAreaStory = StoryObj<typeof TextArea>

export const TextAreaDefault: TextAreaStory = {
  name: 'TextArea - Terminal',
  render: (args) => <TextArea {...args} />,
  args: {
    variant: 'terminal',
    label: 'System Log',
    placeholder: 'Enter log message...',
    rows: 5,
  },
}

export const TextAreaMatrix: TextAreaStory = {
  name: 'TextArea - Matrix',
  render: (args) => <TextArea {...args} />,
  args: {
    variant: 'matrix',
    label: 'Data Stream',
    placeholder: 'Input data stream...',
    defaultValue: '01010101 10101010\n11001100 00110011\n11110000 00001111',
    rows: 6,
  },
}

// ===================================
// RADIO STORIES
// ===================================

export const RadioGroupDefault: StoryObj = {
  name: 'Radio Group - Terminal',
  render: () => {
    const [value, setValue] = useState('option1')
    return (
      <RadioGroup
        name="terminal-radio"
        variant="terminal"
        label="Select Operating Mode"
        value={value}
        onChange={setValue}
        required
        options={[
          { value: 'option1', label: 'Normal Mode' },
          { value: 'option2', label: 'Safe Mode' },
          { value: 'option3', label: 'Recovery Mode' },
          { value: 'option4', label: 'Diagnostic Mode', disabled: true },
        ]}
      />
    )
  },
}

export const RadioGroupMatrix: StoryObj = {
  name: 'Radio Group - Matrix',
  render: () => {
    const [value, setValue] = useState('red')
    return (
      <RadioGroup
        name="matrix-radio"
        variant="matrix"
        label="Choose Your Pill"
        value={value}
        onChange={setValue}
        options={[
          { value: 'red', label: 'Red Pill' },
          { value: 'blue', label: 'Blue Pill' },
        ]}
      />
    )
  },
}

// ===================================
// CHECKBOX STORIES
// ===================================

export const CheckboxDefault: StoryObj = {
  name: 'Checkbox - Terminal',
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(true)
    const [checked3, setChecked3] = useState(false)
    
    return (
      <div>
        <Checkbox
          variant="terminal"
          label="Enable verbose logging"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <Checkbox
          variant="terminal"
          label="Auto-save configuration"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
        />
        <Checkbox
          variant="terminal"
          label="Developer mode"
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          disabled
        />
      </div>
    )
  },
}

export const CheckboxVariants: StoryObj = {
  name: 'Checkbox - All Variants',
  render: () => {
    return (
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Checkbox variant="terminal" label="Terminal Style" defaultChecked />
        <Checkbox variant="matrix" label="Matrix Style" defaultChecked />
        <Checkbox variant="retro" label="Retro Style" defaultChecked />
        <Checkbox variant="minimal" label="Minimal Style" defaultChecked />
        <Checkbox variant="glow" label="Glow Style" defaultChecked />
      </div>
    )
  },
}

// ===================================
// SELECT STORIES
// ===================================

type SelectStory = StoryObj<typeof Select>

export const SelectDefault: SelectStory = {
  name: 'Select - Terminal',
  render: (args) => <Select {...args} />,
  args: {
    variant: 'terminal',
    label: 'Terminal Type',
    required: true,
    placeholder: 'Choose terminal',
    options: [
      { value: 'vt100', label: 'VT100' },
      { value: 'vt220', label: 'VT220' },
      { value: 'xterm', label: 'XTerm' },
      { value: 'ansi', label: 'ANSI' },
      { value: 'tty', label: 'TTY', disabled: true },
    ],
  },
}

export const SelectMatrix: SelectStory = {
  name: 'Select - Matrix',
  render: (args) => <Select {...args} />,
  args: {
    variant: 'matrix',
    label: 'Select Construct',
    placeholder: 'Choose construct',
    options: [
      { value: 'agent', label: 'Agent Smith' },
      { value: 'oracle', label: 'The Oracle' },
      { value: 'architect', label: 'The Architect' },
      { value: 'merovingian', label: 'The Merovingian' },
    ],
  },
}

// ===================================
// COMPLETE FORM DEMO
// ===================================

const FormDemo = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    description: '',
    notifications: false,
    theme: '',
    mode: 'normal',
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted! Check console for data.')
  }
  
  return (
    <Form onSubmit={handleSubmit} variant="terminal">
      <H2 variant="simple">System Configuration</H2>
      
      <Input
        variant="terminal"
        label="Username"
        required
        placeholder="Enter username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      
      <Input
        variant="terminal"
        label="Email"
        type="email"
        required
        placeholder="user@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      
      <Input
        variant="terminal"
        label="Password"
        type="password"
        required
        placeholder="Enter password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      
      <Select
        variant="terminal"
        label="User Role"
        required
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        options={[
          { value: 'admin', label: 'Administrator' },
          { value: 'user', label: 'Standard User' },
          { value: 'guest', label: 'Guest' },
        ]}
      />
      
      <RadioGroup
        name="mode"
        variant="terminal"
        label="Operating Mode"
        value={formData.mode}
        onChange={(mode) => setFormData({ ...formData, mode })}
        options={[
          { value: 'normal', label: 'Normal' },
          { value: 'safe', label: 'Safe Mode' },
          { value: 'debug', label: 'Debug Mode' },
        ]}
      />
      
      <TextArea
        variant="terminal"
        label="Description"
        placeholder="Enter additional details..."
        rows={4}
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      
      <Checkbox
        variant="terminal"
        label="Enable email notifications"
        checked={formData.notifications}
        onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
      />
      
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <button
          type="submit"
          style={{
            padding: '0.5rem 1.5rem',
            background: 'var(--jadis-color-green)',
            color: 'black',
            border: 'none',
            fontFamily: 'var(--jadis-font-primary)',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          [ SUBMIT ]
        </button>
        <button
          type="reset"
          style={{
            padding: '0.5rem 1.5rem',
            background: 'transparent',
            color: 'var(--jadis-color-red)',
            border: '1px solid var(--jadis-color-red)',
            fontFamily: 'var(--jadis-font-primary)',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
          onClick={() => setFormData({
            username: '',
            email: '',
            password: '',
            role: '',
            description: '',
            notifications: false,
            theme: '',
            mode: 'normal',
          })}
        >
          [ RESET ]
        </button>
      </div>
    </Form>
  )
}

export const CompleteForm: StoryObj = {
  name: 'Complete Form Demo',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <FormDemo />
      </div>
    </ThemeProvider>
  ),
}

// ===================================
// VARIANT SHOWCASE
// ===================================

export const AllVariants: StoryObj = {
  name: 'All Form Variants',
  render: () => (
    <div style={{ padding: '2rem' }}>
      <H1 variant="box">FORM COMPONENT VARIANTS</H1>
      
      <div style={{ display: 'grid', gap: '3rem', marginTop: '2rem' }}>
        {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
          <ThemeProvider key={variant} defaultTheme={variant === 'matrix' ? 'matrix' : 'terminal'}>
            <div style={{ 
              padding: '1.5rem', 
              border: '1px solid var(--jadis-border-primary)',
              background: 'var(--jadis-bg-secondary)'
            }}>
              <H2 variant="simple">{variant.toUpperCase()} VARIANT</H2>
              
              <Input
                variant={variant}
                label="Input Field"
                placeholder="Enter text..."
                defaultValue="Sample input"
              />
              
              <Select
                variant={variant}
                label="Select Field"
                defaultValue="option1"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Radio
                  variant={variant}
                  label="Radio A"
                  name={`${variant}-radio`}
                  defaultChecked
                />
                <Radio
                  variant={variant}
                  label="Radio B"
                  name={`${variant}-radio`}
                />
              </div>
              
              <Checkbox
                variant={variant}
                label="Checkbox option"
                defaultChecked
              />
            </div>
          </ThemeProvider>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}

// ===================================
// VALIDATION STATES
// ===================================

export const ValidationStates: StoryObj = {
  name: 'Validation States',
  render: () => (
    <ThemeProvider defaultTheme="terminal">
      <div style={{ padding: '2rem', maxWidth: '500px' }}>
        <H2 variant="simple">Form Validation States</H2>
        
        <Input
          variant="terminal"
          label="Valid Input"
          defaultValue="valid.user@example.com"
          type="email"
        />
        
        <Input
          variant="terminal"
          label="Invalid Input"
          defaultValue="not-an-email"
          type="email"
          error
          errorMessage="Please enter a valid email address"
        />
        
        <Input
          variant="terminal"
          label="Required Field"
          required
          placeholder="This field is required"
        />
        
        <Input
          variant="terminal"
          label="Disabled Input"
          defaultValue="Cannot edit this"
          disabled
        />
        
        <Select
          variant="terminal"
          label="Error Select"
          error
          errorMessage="Please select an option"
          options={[
            { value: 'opt1', label: 'Option 1' },
            { value: 'opt2', label: 'Option 2' },
          ]}
        />
        
        <RadioGroup
          name="error-radio"
          variant="terminal"
          label="Error Radio Group"
          error
          errorMessage="Please select one option"
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]}
        />
      </div>
    </ThemeProvider>
  ),
}

// ===================================
// COMBOBOX STORIES
// ===================================

const languageOptions = [
  { value: 'js', label: 'JavaScript', description: 'Dynamic programming language' },
  { value: 'ts', label: 'TypeScript', description: 'JavaScript with static types' },
  { value: 'py', label: 'Python', description: 'High-level programming language' },
  { value: 'rs', label: 'Rust', description: 'Systems programming language' },
  { value: 'go', label: 'Go', description: 'Fast and simple language' },
  { value: 'cpp', label: 'C++', description: 'Low-level programming language' },
  { value: 'java', label: 'Java', description: 'Object-oriented language' },
  { value: 'cs', label: 'C#', description: 'Microsoft .NET language' },
]

const frameworkOptions = [
  { value: 'react', label: 'React', description: 'UI component library' },
  { value: 'vue', label: 'Vue.js', description: 'Progressive framework' },
  { value: 'angular', label: 'Angular', description: 'Full-featured framework' },
  { value: 'svelte', label: 'Svelte', description: 'Compile-time framework' },
  { value: 'next', label: 'Next.js', description: 'React with SSR' },
  { value: 'nuxt', label: 'Nuxt.js', description: 'Vue with SSR' },
]

export const Combobox_Default: StoryObj<typeof Combobox> = {
  render: () => {
    const [value, setValue] = useState('')
    
    return (
      <ThemeProvider theme="terminal">
        <div style={{ padding: '2rem', maxWidth: '400px' }}>
          <H2>Default Combobox</H2>
          <Combobox
            variant="terminal"
            label="Select Programming Language"
            options={languageOptions}
            value={value}
            onChange={(val, option) => {
              setValue(val)
              console.log('Selected:', val, option)
            }}
            placeholder="Search languages..."
          />
          <P style={{ marginTop: '1rem', color: '#00ff00' }}>
            Selected: {value || 'None'}
          </P>
        </div>
      </ThemeProvider>
    )
  },
}

export const Combobox_AllVariants: StoryObj<typeof Combobox> = {
  render: () => {
    const variants = ['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const
    const [values, setValues] = useState<Record<string, string>>({})
    
    return (
      <ThemeProvider theme="terminal">
        <div style={{ padding: '2rem' }}>
          <H1>Combobox Variants</H1>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {variants.map((variant) => (
              <div key={variant}>
                <H2 style={{ textTransform: 'uppercase', marginBottom: '1rem' }}>{variant}</H2>
                <Combobox
                  variant={variant}
                  label={`${variant} Framework`}
                  options={frameworkOptions}
                  value={values[variant] || ''}
                  onChange={(val) => setValues(prev => ({ ...prev, [variant]: val }))}
                  placeholder="Search frameworks..."
                />
              </div>
            ))}
          </div>
        </div>
      </ThemeProvider>
    )
  },
}

export const Combobox_CustomFiltering: StoryObj<typeof Combobox> = {
  render: () => {
    const [value, setValue] = useState('')
    
    // Custom filter that prioritizes exact matches
    const customFilter = (query: string, options: typeof languageOptions) => {
      const lowerQuery = query.toLowerCase()
      
      // Exact matches first
      const exactMatches = options.filter(opt => 
        opt.label.toLowerCase() === lowerQuery || opt.value.toLowerCase() === lowerQuery
      )
      
      // Then partial matches
      const partialMatches = options.filter(opt => 
        !exactMatches.includes(opt) && 
        (opt.label.toLowerCase().includes(lowerQuery) || 
         opt.description?.toLowerCase().includes(lowerQuery))
      )
      
      return [...exactMatches, ...partialMatches]
    }
    
    return (
      <ThemeProvider theme="matrix">
        <div style={{ padding: '2rem', maxWidth: '400px' }}>
          <H2>Custom Filtering</H2>
          <P style={{ marginBottom: '1rem' }}>
            This combobox uses custom filtering logic that prioritizes exact matches.
          </P>
          <Combobox
            variant="matrix"
            label="Programming Language"
            options={languageOptions}
            value={value}
            onChange={(val) => setValue(val)}
            onFilter={customFilter}
            placeholder="Try typing 'js' or 'python'..."
          />
          <P style={{ marginTop: '1rem', color: '#00ff41' }}>
            Selected: {value || 'None'}
          </P>
        </div>
      </ThemeProvider>
    )
  },
}

export const Combobox_AsyncLoading: StoryObj<typeof Combobox> = {
  render: () => {
    const [value, setValue] = useState('')
    const [options, setOptions] = useState<typeof languageOptions>([])
    const [loading, setLoading] = useState(false)
    
    const simulateAsyncSearch = (query: string) => {
      if (!query.trim()) {
        setOptions([])
        return
      }
      
      setLoading(true)
      
      // Simulate API delay
      setTimeout(() => {
        const filtered = languageOptions.filter(opt =>
          opt.label.toLowerCase().includes(query.toLowerCase()) ||
          opt.description?.toLowerCase().includes(query.toLowerCase())
        )
        setOptions(filtered)
        setLoading(false)
      }, 500)
    }
    
    return (
      <ThemeProvider theme="glow">
        <div style={{ padding: '2rem', maxWidth: '400px' }}>
          <H2>Async Loading</H2>
          <P style={{ marginBottom: '1rem' }}>
            This combobox simulates async data loading with a 500ms delay.
          </P>
          <Combobox
            variant="glow"
            label="Search Languages"
            options={options}
            value={value}
            onChange={(val) => setValue(val)}
            onFilter={(query) => {
              simulateAsyncSearch(query)
              return options // Return current options during filtering
            }}
            loading={loading}
            loadingText="Searching..."
            noOptionsText="No languages found"
            placeholder="Start typing to search..."
          />
          <P style={{ marginTop: '1rem', color: '#00ffff' }}>
            Selected: {value || 'None'}
          </P>
        </div>
      </ThemeProvider>
    )
  },
}

export const Combobox_States: StoryObj<typeof Combobox> = {
  render: () => {
    const [errorValue, setErrorValue] = useState('')
    const [loadingValue, setLoadingValue] = useState('')
    const [customValue, setCustomValue] = useState('')
    
    return (
      <ThemeProvider theme="retro">
        <div style={{ padding: '2rem' }}>
          <H1>Combobox States</H1>
          
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Error State */}
            <div>
              <H2>Error State</H2>
              <Combobox
                variant="retro"
                label="Framework Selection"
                options={frameworkOptions}
                value={errorValue}
                onChange={(val) => setErrorValue(val)}
                error
                errorMessage="Please select a valid framework"
                placeholder="Select framework..."
              />
            </div>
            
            {/* Loading State */}
            <div>
              <H2>Loading State</H2>
              <Combobox
                variant="retro"
                label="Fetching Data"
                options={frameworkOptions}
                value={loadingValue}
                onChange={(val) => setLoadingValue(val)}
                loading
                loadingText="Loading frameworks..."
                placeholder="Please wait..."
              />
            </div>
            
            {/* Custom Values Allowed */}
            <div>
              <H2>Custom Values</H2>
              <Combobox
                variant="retro"
                label="Custom Language"
                options={languageOptions}
                value={customValue}
                onChange={(val, option) => {
                  setCustomValue(val)
                  if (!option) {
                    console.log('Custom value entered:', val)
                  }
                }}
                allowCustomValue
                clearable
                placeholder="Type or select..."
              />
              <P style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
                Try typing a custom language name
              </P>
            </div>
            
            {/* Non-clearable */}
            <div>
              <H2>Non-clearable</H2>
              <Combobox
                variant="retro"
                label="Required Selection"
                options={frameworkOptions}
                value=""
                onChange={() => {}}
                clearable={false}
                placeholder="Must select option..."
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  },
}

export const Combobox_Interactive: StoryObj<typeof Combobox> = {
  render: () => {
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [selectedFramework, setSelectedFramework] = useState('')
    const [customOptions, setCustomOptions] = useState(frameworkOptions)
    
    const addCustomFramework = () => {
      const name = prompt('Enter framework name:')
      if (name) {
        const newOption = {
          value: name.toLowerCase().replace(/\s+/g, '-'),
          label: name,
          description: 'Custom framework'
        }
        setCustomOptions(prev => [...prev, newOption])
      }
    }
    
    return (
      <ThemeProvider theme="minimal">
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
          <H1>Interactive Combobox Demo</H1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <Combobox
                variant="minimal"
                label="Primary Language"
                options={languageOptions}
                value={selectedLanguage}
                onChange={(val, option) => {
                  setSelectedLanguage(val)
                  console.log('Language selected:', val, option)
                }}
                placeholder="Choose your main programming language..."
              />
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <label style={{ color: '#61dafb', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Favorite Framework
                </label>
                <button
                  onClick={addCustomFramework}
                  style={{
                    background: '#61dafb',
                    color: '#000',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    borderRadius: '2px'
                  }}
                >
                  Add Custom
                </button>
              </div>
              <Combobox
                variant="minimal"
                options={customOptions}
                value={selectedFramework}
                onChange={(val) => setSelectedFramework(val)}
                placeholder="Select or search frameworks..."
                maxHeight="150px"
              />
            </div>
            
            {(selectedLanguage || selectedFramework) && (
              <div style={{
                padding: '1rem',
                border: '2px solid #61dafb',
                borderRadius: '4px',
                backgroundColor: 'rgba(97, 218, 251, 0.05)'
              }}>
                <H2 style={{ marginBottom: '1rem' }}>Your Selection</H2>
                <P>
                  <strong>Language:</strong> {selectedLanguage || 'None selected'}
                </P>
                <P>
                  <strong>Framework:</strong> {selectedFramework || 'None selected'}
                </P>
                {selectedLanguage && selectedFramework && (
                  <P style={{ color: '#61dafb', marginTop: '1rem' }}>
                    Great choice! {languageOptions.find(l => l.value === selectedLanguage)?.label} + {' '}
                    {customOptions.find(f => f.value === selectedFramework)?.label} is a powerful combination.
                  </P>
                )}
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    )
  },
}