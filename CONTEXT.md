# Jadis - Project Context

## Project Overview
Jadis is a modern React + TypeScript component library built with Vite. It provides reusable UI components styled with 90's BBS ASCII art and TUI aesthetics. The library includes Storybook integration for component development, documentation, and testing.

## Tech Stack
- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Component Documentation**: Storybook 9.1.3
- **UI Library**: Radix UI 1.4.2
- **Styling**: CSS + Sass 1.90.0 with CSS Custom Properties
- **Typography**: Hasklug Nerd Font integration
- **Testing**: Vitest 3.2.4 with Playwright 1.54.2
- **Linting**: ESLint 9.33.0 with TypeScript ESLint

## Project Structure
```
jadis/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── index.ts           # Library entry point
│   ├── styles.ts          # Style imports
│   ├── assets/            # Application assets
│   │   └── react.svg
│   ├── components/        # Library components
│   │   ├── Headers/       # ASCII art header components
│   │   │   ├── Headers.tsx        # H1-H6 components
│   │   │   ├── Headers.scss       # ASCII/TUI styling
│   │   │   ├── Headers.stories.tsx # Storybook stories
│   │   │   └── index.ts           # Component exports
│   │   ├── Typography/    # Comprehensive typography system
│   │   │   ├── Typography.tsx     # P, Span, Code, Pre, etc.
│   │   │   ├── Typography.scss    # Typography styling
│   │   │   ├── Typography.stories.tsx # Typography demos
│   │   │   └── index.ts           # Typography exports
│   │   ├── ThemeProvider/ # Theme management system
│   │   │   ├── ThemeProvider.tsx  # React context provider
│   │   │   ├── ThemeProvider.stories.tsx # Theme demos
│   │   │   └── index.ts           # Theme exports
│   │   ├── SpecialEffects/ # Retro visual effects system
│   │   │   ├── SpecialEffects.tsx # Glitch, CRT, scanline effects
│   │   │   ├── SpecialEffects.stories.tsx # Effects showcase
│   │   │   └── index.ts           # Effects exports
│   │   ├── Forms/         # Form components with ASCII styling
│   │   │   ├── Forms.tsx          # Input, TextArea, Radio, Checkbox, Select
│   │   │   ├── Forms.scss         # Terminal-style form styling
│   │   │   ├── Forms.stories.tsx  # Form component demos
│   │   │   └── index.ts           # Form exports
│   │   ├── Cards/         # Card layout components
│   │   │   ├── Cards.tsx          # Card, CardHeader, CardBody, etc.
│   │   │   ├── Cards.scss         # ASCII border card styling
│   │   │   ├── Cards.stories.tsx  # Card component demos
│   │   │   └── index.ts           # Card exports
│   │   ├── Buttons/       # Comprehensive button system
│   │   │   ├── Buttons.tsx        # Button, IconButton, ButtonGroup, etc.
│   │   │   ├── Buttons.scss       # ASCII button styling with effects
│   │   │   ├── Buttons.stories.tsx # Button component demos
│   │   │   └── index.ts           # Button exports
│   │   ├── Tables/        # Comprehensive table system
│   │   │   ├── Tables.tsx         # Table, DataTable, AsciiTable, etc.
│   │   │   ├── Tables.scss        # ASCII table styling with variants
│   │   │   ├── Tables.stories.tsx # Table component demos
│   │   │   └── index.ts           # Table exports
│   │   ├── Grid/          # CSS Grid layout system
│   │   │   ├── Grid.tsx           # Grid, GridItem, ResponsiveGrid
│   │   │   ├── Grid.scss          # CSS Grid styling with variants
│   │   │   ├── Grid.stories.tsx   # Grid layout demos
│   │   │   └── index.ts           # Grid exports
│   │   ├── Navbar/        # Navigation system
│   │   │   ├── Navbar.tsx         # Navbar, NavbarBrand, NavbarItem, NavbarNav, NavbarDropdown
│   │   │   ├── Navbar.scss        # Navigation styling with responsive behavior
│   │   │   ├── Navbar.stories.tsx # Navigation component demos
│   │   │   └── index.ts           # Navbar exports
│   │   ├── Icons/         # ASCII icon system
│   │   │   ├── Icons.tsx          # ASCIIIcon component and icon definitions
│   │   │   ├── Icons.scss         # Icon styling with variant effects
│   │   │   ├── Icons.stories.tsx  # Icon showcase and examples
│   │   │   └── index.ts           # Icon exports
│   │   ├── ApplicationCards/ # Application monitoring cards
│   │       ├── ApplicationCards.tsx    # ApplicationCard, ServiceMonitorCard, SystemStatusCard
│   │       ├── ApplicationCards.scss   # Specialized card styling with metrics
│   │       ├── ApplicationCards.stories.tsx # Application monitoring demos
│   │       └── index.ts                # Application card exports
│   │   ├── Layout/         # Complete page layout system
│   │       ├── Layout.tsx              # PageLayout, AppHeader, AppFooter, Sidebar, Breadcrumbs, StatusBar, HeroBanner, PageBanner, FeatureSection
│   │       ├── Layout.scss             # Layout system styling with ASCII aesthetics
│   │       ├── Layout.stories.tsx      # Complete page layout examples
│   │       ├── HeroBanner.stories.tsx  # Hero banner component demos
│   │       ├── PageBanner.stories.tsx  # Alert/notification banner demos
│   │       ├── FeatureSection.stories.tsx # Feature showcase grid demos
│   │       └── index.ts                # Layout component exports
│   │   ├── Auth/           # Authentication and user management system
│   │       ├── Auth.tsx                # LoginForm, RegisterForm, SessionStatus, AuthGuard, LogoutConfirm
│   │       ├── Auth.scss               # Authentication component styling with variant support
│   │       ├── Auth.stories.tsx        # Comprehensive auth flow demos and examples
│   │       └── index.ts                # Auth component exports
│   │   ├── Gauges/         # ASCII art gauges and indicators system
│   │       ├── Gauges.tsx              # ProgressBar, CircularGauge, LinearGauge, ASCIIMeter
│   │       ├── Indicators.tsx          # StatusLight, StatusBadge, LoadingSpinner, TrendIndicator, BatteryIndicator, SignalStrength, HealthIndicator, LevelIndicator
│   │       ├── Gauges.scss             # Comprehensive gauge and indicator styling with animations
│   │       ├── Gauges.stories.tsx      # Complete gauge system demos and monitoring dashboard
│   │       └── index.ts                # Gauge and indicator exports
│   │   ├── ImageArea/      # Advanced image display and ASCII art system
│   │       ├── ImageArea.tsx           # ImageArea, ASCIIArt, Gallery components with CSS compositing
│   │       ├── ImageArea.scss          # Advanced image effects including pixelation and posterization
│   │       ├── ImageArea.stories.tsx   # Comprehensive image and ASCII art demos
│   │       └── index.ts                # Image area and ASCII art exports
│   │   └── RichTextEditor/ # Tiptap-powered rich text editor
│   │       ├── RichTextEditor.tsx      # WYSIWYG editor with terminal aesthetics
│   │       ├── RichTextEditor.scss     # Rich text editor styling with variants
│   │       ├── RichTextEditor.stories.tsx # Rich text editing demos
│   │       └── index.ts                # Rich text editor exports
│   ├── styles/            # Global styling system
│   │   ├── fonts.scss     # Hasklug Nerd Font + CSS variables
│   │   ├── themes.scss    # Multi-theme system (5 themes)
│   │   ├── effects.scss   # Special effects animations
│   │   ├── japanese-colors.scss # Traditional Japanese color system (200+ colors)
│   │   ├── japanese-colors.d.ts # TypeScript interfaces for Japanese colors
│   │   └── index.ts       # Style exports and Japanese color utilities
│   ├── stories/           # Example Storybook components
│   │   ├── Button.tsx     # Example button component
│   │   ├── Header.tsx     # Example header component
│   │   ├── Page.tsx       # Example page component
│   │   ├── *.stories.ts   # Story files
│   │   ├── *.css          # Component styles
│   │   └── assets/        # Storybook assets and documentation images
│   └── vite-env.d.ts      # Vite environment types
├── .storybook/            # Storybook configuration
│   ├── main.ts            # Main Storybook config
│   └── preview.ts         # Global preview settings
├── storybook-static/      # Static Storybook build
└── [config files]        # Various configuration files
```

## Key Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node-specific TypeScript config
- `eslint.config.js` - ESLint configuration with Storybook rules
- `.storybook/main.ts` - Storybook configuration

## Available Scripts
- `npm run dev` - Build library in watch mode for development
- `npm run build` - Build library for distribution (TypeScript + Vite)
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Library Distribution
- **Entry Point**: `src/index.ts` - Main library export
- **Build Output**: `dist/` directory containing:
  - `index.js` - Compiled JavaScript (ES modules)
  - `index.d.ts` - TypeScript declarations
  - `style.css` - Bundled styles
- **Package Exports**:
  - Main: `./dist/index.js` (components and types)
  - Styles: `./dist/style.css` (CSS bundle)

## Development Setup
The project uses modern React library development practices with:
- **Library Build Mode** via Vite with external React/ReactDOM
- **Component-driven development** with Storybook
- **Type safety** with TypeScript strict mode and declaration generation
- **Code quality** with ESLint and comprehensive rules
- **Testing capabilities** with Vitest and Playwright
- **Accessibility testing** with Storybook a11y addon

## Storybook Integration
Comprehensive Storybook setup includes:
- **Addons**: Chromatic, Docs, Onboarding, A11y, Vitest
- **Story locations**: `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- **MDX support**: `src/**/*.mdx`
- **React-Vite framework** for optimal performance

## Component Architecture
- **ASCII Art Styling**: 90's BBS and TUI-inspired visual design
- **Terminal Aesthetics**: Hasklug Nerd Font, retro colors, text shadows
- **Theme System**: 5 distinct ASCII-art aesthetic themes with CSS custom properties
- **Japanese Seasonal Themes**: Traditional Japanese color integration with 5 seasonal variants:
  - **Haru (春)**: Spring/Cherry Blossom theme with soft pink tones
  - **Natsu (夏)**: Summer/Deep Indigo theme representing summer nights
  - **Aki (秋)**: Autumn/Maple Red theme capturing autumn foliage
  - **Fuyu (冬)**: Winter/Snow White theme for winter purity
  - **Sumi (墨)**: Traditional black ink theme for calligraphy aesthetics
- **Japanese Color System**: 200+ traditional Japanese colors as CSS custom properties
  - Organized by color families (Red/Violet, Red, Yellow/Red, Yellow, etc.)
  - Preserved cultural naming (kanji, romanization, English translation)
  - Semantic mappings for terminal-friendly usage
  - Full TypeScript support with interfaces and types
- **Special Effects**: Glitch-art, CRT monitor simulation, scanlines, enhanced glow
- **Radix UI** as the foundational UI primitive library
- **SCSS styling** with component-specific stylesheets and global theme variables
- **TypeScript interfaces** for component props with strict typing
- **Comprehensive Storybook stories** with dark terminal backgrounds and interactive demos

### Available Components

#### **Core Typography System**
- **Headers (H1-H6)**: ASCII art styled headers with multiple variants
  - Variants: `box`, `double-line`, `dashed`, `solid`, `simple`
  - Colors: Terminal green, cyan, yellow, orange, purple, gray
  - Alignments: `left`, `center`, `right`
  - Features: Hasklug Nerd Font, ASCII borders, retro glow effects

- **Typography Components**: Complete text element system
  - **Components**: P, Span, Code, Pre, Blockquote, Strong, Em, Small, Mark
  - **Variants**: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - **Colors**: 9-color terminal palette (green, cyan, yellow, orange, purple, gray, red, blue, white)
  - **Effects**: Configurable glow intensity (none, sm, md, lg), font weights
  - **Features**: Terminal prompts, matrix-style formatting, retro uppercase styling

#### **Theme System**
- **ThemeProvider**: React context-based theme management
  - **Themes**: `terminal` (default), `matrix`, `amber`, `hacker`, `mono`
  - **Features**: Dynamic theme switching, CSS custom property integration
  - **Hook**: `useTheme()` for programmatic theme control

#### **Special Effects System**
- **Glitch Effects**: `glitch`, `glitch-rgb`, `glitch-static`, `glitch-corrupt`
- **Scanline Effects**: `scanlines`, `scanlines-heavy`, `scanlines-roll`
- **Enhanced Glow**: `glow-intense`, `glow-pulse`, `glow-rainbow`, `glow-neon`
- **CRT Effects**: `crt`, `flicker`, `phosphor`
- **Combo Presets**: `retro-terminal`, `glitch-terminal`, `matrix-mode`, `crt-monitor`
- **Convenience Components**: `GlitchText`, `ScanlineContainer`, `CRTScreen`, etc.
- **Accessibility**: Respects `prefers-reduced-motion` for users with motion sensitivity

#### **Form Components**
- **Input**: Terminal-styled text input with prompt indicators
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - Features: Error states, disabled states, size variations
  - Terminal prompts with '>' indicator
- **TextArea**: Multi-line text input with ASCII styling
  - Resizable with terminal aesthetics
  - Monospace font, configurable rows
- **Radio & RadioGroup**: ASCII-style radio buttons
  - Custom indicators: `[◉]` selected, `[ ]` unselected
  - Group management with orientation options
- **Checkbox**: Terminal checkbox with ASCII indicators
  - States: `[✓]` checked, `[ ]` unchecked
  - Indeterminate state support with `[■]`
- **Select**: Dropdown with terminal styling
  - Custom ASCII arrow indicators
  - Full keyboard navigation support
- **Form**: Container component with variant styling
  - Layout options: vertical, horizontal, inline

#### **Card Components**
- **Base Cards**: Card, CardHeader, CardBody, CardFooter, CardActions
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - Sizes: `small`, `medium`, `large`, `full`
  - ASCII border decorations with box-drawing characters
  - Interactive hover effects
- **Specialized Cards**:
  - **TerminalCard**: Terminal window with title bar
  - **StatusCard**: Status indicator cards with icons
  - **DataCard**: Metric display cards with trends
- **Features**: Status indicators, terminal window mode, interactive states

#### **Button Components**
- **Button**: Comprehensive button with multiple options
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`, `haru`, `natsu`, `aki`, `fuyu`, `sumi`
  - Colors: `primary`, `secondary`, `success`, `warning`, `error`, `info`
  - Sizes: `small`, `medium`, `large`, `full-width`
  - Features: Ripple effects, loading states, glow animations, outline styles
- **Specialized Buttons**:
  - **IconButton**: Icon-only buttons with accessibility
  - **ButtonGroup**: Grouped buttons (horizontal/vertical)
  - **LinkButton**: Button-styled links
  - **ToggleButton**: Stateful toggle buttons
  - **FAB**: Floating Action Buttons with positioning
- **Effects**: Terminal brackets, matrix sweep, retro shadows, pulse animations

#### **Table Components**
- **Base Table Components**: Table, TableHead, TableBody, TableFooter, TableRow, TableHeaderCell, TableCell
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - Sizes: `compact`, `normal`, `spacious`
  - Features: Bordered tables, striped rows, hoverable effects, responsive scrolling
  - ASCII border styling with box-drawing characters for terminal aesthetics
- **DataTable**: Advanced data table with full functionality
  - Column sorting with ASCII indicators (▲ ▼ ◆)
  - Row selection using custom Checkbox components
  - Custom column rendering and formatting
  - Empty state handling and click handlers
- **AsciiTable**: Pure text-based table with box-drawing characters
  - Generates ASCII art tables with proper alignment
  - Configurable column alignments (left, center, right)
  - Border toggle and padding options
  - Perfect for terminal/console display
- **Features**: Sticky headers, column alignment, numeric formatting, responsive design

#### **Grid Layout System**
- **Grid**: CSS Grid foundation component with comprehensive layout control
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - Column/Row Configuration: 1-12 columns, auto-fit, auto-fill options
  - Gap Control: `none`, `small`, `medium`, `large`, `xl` with separate column/row gaps
  - Alignment Options: Full control over item and content alignment/justification
  - Features: Bordered grids, debug mode, dense packing, interactive states
- **GridItem**: Flexible grid item positioning component
  - Column/Row Spanning: Numeric spans or 'full' width/height
  - Positioning: Start/end positioning with grid-area support
  - Self-Alignment: Individual item alignment overrides
  - Features: Bordered items, interactive hover effects, responsive behavior
- **ResponsiveGrid**: Breakpoint-aware grid component
  - Breakpoints: xs, sm, md, lg, xl, xxl with automatic column adjustment
  - Responsive Features: 6→3→1 column reduction for tablet/mobile optimization
  - iPad Optimization: Automatic layout simplification for smaller screens
  - Gap Adjustments: Responsive gap sizing for optimal spacing
- **Advanced Features**: 
  - Matrix scanline effects with proper z-index stacking
  - Debug visualization with grid overlay patterns
  - Container max-width constraints and centering
  - CSS Custom Properties integration for dynamic styling

#### **Navigation System**
- **Navbar**: Comprehensive navigation container with responsive behavior
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`
  - Positioning: `static`, `sticky`, `fixed` with proper z-index management
  - Alignment: `left`, `center`, `right`, `space-between`, `space-around`
  - Features: Responsive collapse, mobile toggle, transparent mode, bordered styling
- **NavbarBrand**: Logo/brand area with interactive states and link support
  - Logo Integration: Supports text, icons, or custom React components
  - Interactive States: Hover effects and click handling
  - Accessibility: Proper link semantics and ARIA attributes
- **NavbarItem**: Individual navigation items with comprehensive features
  - Interactive States: Active, disabled, hover effects with variant-specific styling
  - Icon Support: Integrated ASCII icon system with consistent aesthetics
  - Badge System: Notification badges with customizable content
  - Dropdown Support: Built-in dropdown trigger with accessibility
- **NavbarNav**: Navigation group container with alignment options
  - Direction: `horizontal`, `vertical` layouts with responsive behavior
  - Alignment: `left`, `center`, `right` positioning within container
  - Mobile Optimization: Automatic vertical stacking on small screens
- **NavbarDropdown**: Advanced dropdown menus with positioning control
  - Positioning: `left`, `right`, `center` alignment relative to trigger
  - Click Outside: Automatic close behavior with proper event handling
  - Mobile Adaptation: Full-width dropdowns on small screens
  - Animation: Smooth show/hide transitions with CSS transforms

#### **ASCII Icon System**
- **ASCIIIcon**: Terminal-authentic icon component with variant support
  - 60+ Curated Icons: Organized by category (navigation, files, technology, etc.)
  - Variants: Each icon supports all 5 visual variants with appropriate styling
  - Size Options: `small`, `medium`, `large` with consistent proportions
  - Custom Icons: Support for custom ASCII characters and symbols
- **Icon Categories**: Organized icon sets for different use cases
  - Navigation: `home`, `menu`, `back`, `forward`, `up`, `down`, `left`, `right`
  - Files: `file`, `folder`, `document`, `page`, `archive`
  - Technology: `database`, `server`, `network`, `data`, `code`, `terminal`
  - User: `user`, `profile`, `account`, `group`
  - Actions: `settings`, `config`, `tools`, `edit`, `search`, `filter`, `sort`
  - Status: `success`, `error`, `warning`, `info`, `loading`, `active`, `inactive`
  - Communication: `message`, `mail`, `notification`, `alert`
- **Variant-Specific Styling**: Each variant has custom icon effects
  - Terminal: Green glow with shadow effects
  - Matrix: Animated flicker with enhanced glow
  - Retro: Bold styling with drop shadows
  - Minimal: Clean styling without effects
  - Glow: Pulsing animations with intense glow effects
- **Developer Experience**: Type-safe icon names with utility functions
  - Auto-complete: Full TypeScript support with IntelliSense
  - Icon Lookup: Utility functions for programmatic icon access
  - Categories: Organized groupings for easy discovery
  - Display Names: Human-readable names for documentation

#### **Application Cards System**
- **ApplicationCard**: Specialized cards for application monitoring and management
  - Status Tracking: `running`, `stopped`, `error`, `loading`, `maintenance` with visual indicators
  - Priority System: Visual priority indicators from low (●○○○) to critical (●●●●)
  - Metrics Display: Memory and CPU usage with color-coded progress bars
  - Action Controls: Start, stop, restart, configure, and view logs functionality
  - Metadata: Version numbers, uptime tracking, and last update timestamps
  - Built on Card Foundation: Uses existing Card, CardHeader, CardBody, CardActions components
- **ServiceMonitorCard**: Multi-service monitoring with individual control
  - Service Lists: Display multiple services with individual status indicators
  - Port Information: Service endpoint and port number display
  - Individual Actions: Start, stop, restart controls for each service
  - Overall Status: Aggregated health summary across all services
  - Interactive Controls: Service-specific action buttons with ASCII icons
- **SystemStatusCard**: Comprehensive system resource monitoring
  - Resource Metrics: CPU, memory, disk, and network usage with thresholds
  - Color-Coded Indicators: Green (0-69%), yellow (70-89%), red (90%+) thresholds
  - Alert System: Categorized alerts (info, warning, error) with timestamps
  - System Actions: Restart, maintenance mode, and shutdown controls
  - Progress Visualization: Animated progress bars with variant-specific effects
- **Integration Features**: Built using existing Jadis components
  - Card System: Extends base Card components with specialized layouts
  - Button Integration: All actions use Button component with proper variants
  - Icon System: Consistent ASCII icons throughout all interactions
  - Typography: Uses P, Code, Strong components for consistent text styling
  - Grid Layout: Responsive dashboard layouts using Grid/GridItem components
- **Responsive Design**: Mobile-optimized layouts with adaptive behavior
  - Stacked Layouts: Actions stack vertically on mobile screens
  - Flexible Metrics: Progress bars adapt to container width
  - Touch-Friendly: Appropriately sized buttons for mobile interaction
  - Grid Integration: Works seamlessly with Grid component responsiveness

#### **Layout System**
- **PageLayout**: Master page layout container with responsive header, footer, sidebar, and main content areas
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow` with consistent ASCII-themed styling
  - Layout Control: Flexible header/footer configuration, collapsible sidebar with toggle functionality
  - Full Height Mode: Viewport-aware layouts for single-page applications
  - Component Integration: Works seamlessly with all other Jadis components
- **AppHeader**: Application-specific header with branding, navigation, and metadata
  - Logo Integration: Support for text logos, ASCII icons, or custom React components  
  - Navigation Features: Integrated breadcrumb support with customizable separators
  - Metadata Display: Version numbers, user information, system status indicators
  - Action Areas: Header-based buttons, dropdowns, and interactive elements
- **AppFooter**: Application footer with links, social media, and copyright information
  - Link Groups: Organized footer sections with category-based link organization
  - Social Integration: Social media links with ASCII icon support
  - Copyright Management: Automatic year updating and company information display
  - Multi-Column Layouts: Responsive footer columns that stack on mobile devices
- **Sidebar**: Collapsible navigation sidebar with comprehensive menu support
  - Navigation Structure: Multi-level menu support with nested items and icons
  - Collapse Behavior: Smooth animations with icon-only collapsed state
  - Active State Management: Automatic highlighting of current page/section
  - Mobile Optimization: Off-canvas behavior on mobile devices with overlay
- **Breadcrumbs**: Navigation trail component for showing current page hierarchy
  - Path Display: Automatic breadcrumb generation with customizable separators
  - Interactive Navigation: Clickable breadcrumb items for quick navigation
  - Icon Support: ASCII icons for each breadcrumb level
  - Overflow Handling: Responsive behavior with ellipsis for long paths
- **StatusBar**: System status and information display bar
  - System Metrics: Real-time display of system information and status indicators
  - Notification Center: Alert counts, message indicators, and status badges
  - User Context: Current user, session information, and quick settings access
  - Connection Status: Network connectivity, server status, and sync indicators

#### **Banner & Hero System**
- **HeroBanner**: Large hero sections perfect for landing pages and feature introductions
  - Background Patterns: Customizable patterns including dots, lines, grid, and matrix effects
  - Size Options: Small, medium, large, and xlarge configurations for different contexts
  - Content Structure: Title, subtitle, description text with call-to-action button areas
  - Alignment Control: Left, center, or right content alignment with overlay options
  - Image Integration: Background image support with overlay controls for text readability
  - Interactive Actions: Support for multiple call-to-action buttons with variant consistency
- **PageBanner**: Alert and notification banners for system messages and announcements
  - Banner Types: Info, success, warning, error, and announcement with type-specific styling
  - Dismissible Functionality: Optional close button with callback support for state management
  - Position Options: Inline content integration or fixed positioning (top/bottom)
  - Icon System: Automatic type-based icons or custom ASCII icon support
  - Action Integration: Support for banner-specific action buttons and links
  - Compact Mode: Space-efficient styling for subtle notifications
- **FeatureSection**: Grid-based sections for showcasing features, services, or capabilities
  - Grid Configuration: 1-4 column layouts with responsive behavior and gap control
  - Feature Items: Icon, title, and description structure with consistent typography
  - Content Management: Flexible feature data structure with custom rendering support
  - Call-to-Action: Section-level action buttons for engagement
  - Visual Variants: All 5 Jadis variants with appropriate feature highlighting

#### **Authentication System**
- **LoginForm**: Terminal-styled authentication form with comprehensive user login functionality
  - Variants: All 5 Jadis variants (terminal, matrix, retro, minimal, glow) with consistent ASCII theming
  - Authentication Fields: Username/password inputs with terminal-style prompts and ASCII icons
  - Remember Me: Optional persistent session checkbox with variant-specific styling
  - Error Handling: Contextual error messages with variant-appropriate colors and ASCII warning icons
  - Loading States: Animated authentication feedback with spinning ASCII icons and disabled form states
  - Navigation Links: Optional forgot password and registration redirect functionality
- **RegisterForm**: User registration component with validation and terms acceptance
  - Registration Fields: Username, email, password, and password confirmation with real-time validation
  - Email Validation: Built-in email format checking with error state feedback
  - Password Matching: Live password confirmation validation with error highlighting
  - Terms of Service: Optional terms acceptance checkbox with link integration
  - Form Validation: Comprehensive client-side validation with contextual error messaging
  - Success Handling: Registration completion flow with redirect to login functionality
- **SessionStatus**: Current user session display and management component
  - User Information: Username, email, role, and last login timestamp display
  - Avatar Support: Custom avatar display or default ASCII icon representation
  - Session Metadata: Role-based badges, session duration, and authentication status indicators
  - Quick Actions: Profile access and logout buttons with keyboard navigation support
  - Compact Mode: Space-efficient header/toolbar integration with responsive behavior
  - Guest States: Unauthenticated user display with appropriate messaging and styling
- **AuthGuard**: Route and content protection component with role-based access control
  - Authentication Gating: Protects content based on user authentication status with fallback handling
  - Role-Based Access Control (RBAC): Granular permission system with role requirement validation
  - Loading States: Authentication verification display with animated feedback during auth checks
  - Unauthorized Handling: Clear messaging for unauthenticated users with redirect functionality
  - Insufficient Privileges: Role-based denial screens with current vs required role display
  - Fallback Content: Customizable unauthorized content or automatic redirect capabilities
- **LogoutConfirm**: Secure logout confirmation dialog to prevent accidental session termination
  - Confirmation Dialog: Clear logout confirmation with user context display
  - User Identification: Shows current user information to prevent logout confusion
  - Loading States: Logout progress indication with animated feedback
  - Action Buttons: Clear confirm/cancel buttons with keyboard accessibility
  - Security Messaging: Informative text about session termination and re-authentication requirements

#### **Gauges and Indicators System**
- **ProgressBar**: Enhanced horizontal progress bars with ASCII styling and animation support
  - Multiple Variants: All 10 Jadis variants (including Japanese seasonal themes) with authentic terminal aesthetics and color theming
  - Value Display: Configurable percentage and absolute value display with text overlays
  - Visual Effects: Striped patterns, pulse animations, and customizable color schemes
  - Size Options: Small, medium, large scaling with proper thickness adjustment
  - Interactive Features: Real-time progress updates with smooth transitions
- **CircularGauge**: ASCII art circular progress indicators with multiple display styles
  - Style Options: Classic (dot segments), Digital (block characters), Retro (box drawing), Dots (matrix style)
  - Authentic ASCII: Pure text-based rendering using ●○▓░ characters instead of SVG
  - Positioning System: Mathematically calculated segment placement around circular perimeter
  - Animation Support: Pulse effects, segment glow, and variant-specific flicker animations
  - Terminal Integration: Monospace font optimization with perfect character alignment
- **LinearGauge**: Horizontal and vertical linear gauges with scale indicators and tick marks
  - Orientation Support: Both horizontal and vertical layouts with responsive behavior
  - Scale System: Configurable tick marks with numeric labels and value positioning
  - Indicator Needle: Moving indicator with glow effects showing exact value position
  - Measurement Display: Comprehensive value and scale representation
- **ASCIIMeter**: Authentic terminal-style meters using pure ASCII art characters
  - Style Variants: Classic (needle simulation), Digital (progress bars), Retro (bordered displays)
  - ASCII Authenticity: Hand-crafted character art using ┌─╮│╰─╯ and ▓░ characters
  - Scale Labels: Numeric ranges with proper spacing and alignment
  - Value Integration: Real-time value display with contextual formatting
- **StatusLight**: Simple status indicators with animated pulse and blink effects
  - Status Types: Active, inactive, warning, error, success, info states
  - Animation Options: Pulse, blink, and static display modes
  - Color Integration: Automatic color selection based on status with manual override
  - Label Support: Optional text labels with consistent typography
- **StatusBadge**: Enhanced status displays with icons and text combinations
  - Predefined States: Online, offline, busy, away, error, maintenance with appropriate icons
  - ASCII Icons: ●◐◯✗⚡○ characters for authentic terminal appearance
  - Text Integration: Status text with uppercase formatting and letter spacing
  - Badge Styling: Bordered containers with background colors and animations
- **LoadingSpinner**: ASCII-based loading animations with multiple styles
  - Animation Types: Spinner, dots, bars, matrix patterns with configurable speed
  - Text Support: Optional loading text with synchronized animations
  - Style Variants: Different ASCII patterns for varied visual effects
  - Performance: CSS-based animations optimized for terminal aesthetics
- **TrendIndicator**: Directional trend arrows with value and change display
  - Trend Types: Up (▲), Down (▼), Stable (▬), Volatile (◈) with color coding
  - Value Display: Current values with change indicators and mathematical symbols
  - Animation Effects: Bounce animations for active trends
  - Data Formatting: Flexible value and change representation
- **BatteryIndicator**: ASCII battery charge level display with charging animation
  - Charge Visualization: Segmented battery using [▓▓▓░░░░░] characters
  - Charging State: Animated charging indicator with ⚡ symbol
  - Level Coloring: Green, yellow, red color schemes based on charge percentage
  - Percentage Display: Optional numeric percentage alongside visual indicator
- **SignalStrength**: Signal strength bars with progressive height indicators
  - Bar Visualization: Multiple bars with increasing heights for signal representation
  - Strength Levels: Configurable maximum levels with filled/empty state indication
  - Color Coding: Automatic color changes based on signal strength thresholds
  - Value Display: Optional numeric strength display
- **HealthIndicator**: Multi-level health status using dot progression indicators
  - Health Levels: Excellent (●●●●●), Good (●●●●○), Fair (●●●○○), Poor (●●○○○), Critical (●○○○○)
  - Status Colors: Automatic color assignment based on health level
  - Label Integration: Status text with uppercase formatting
  - Value Support: Optional numeric health values
- **LevelIndicator**: Step-based level progression with visual feedback
  - Step Visualization: Progressive steps using ▓░ characters
  - Level Display: Current level vs maximum level with fraction formatting
  - Color Theming: All Jadis variant color support
  - Animation Effects: Glow animations for active level indicators

#### **Image Area and ASCII Art System**
- **ImageArea**: Advanced image display component with CSS compositing and retro digital effects
  - Variants: `terminal`, `matrix`, `retro`, `minimal`, `glow`, `haru`, `natsu`, `aki`, `fuyu`, `sumi`
  - CSS Compositing: Multiple image layers with blend modes (multiply, screen, overlay, darken, lighten, color-dodge, etc.)
  - Layer System: Image layer transformations including offset, scale, rotate, opacity, and custom filters
  - Retro Digital Effects: Pixelation and posterization effects for authentic 8-bit/16-bit aesthetics
  - Visual Effects Integration: Full integration with existing Jadis effects (scanlines, glitch, CRT, phosphor)
  - Loading States: Placeholder and error fallback handling with ASCII-styled loading indicators
  - Responsive Design: Flexible aspect ratios, multiple size presets, and mobile optimization
- **ASCIIArt**: Specialized component for terminal-style text art and decorative elements
  - Variants: All 10 variants including Japanese seasonal themes for culturally-themed ASCII art
  - Typewriter Effect: Character-by-character animation revealing for authentic terminal feel
  - ASCII Art Library: Curated collection of terminal, matrix, and retro ASCII artwork
  - Interactive Animations: Floating, glowing, and pulsing effects for ASCII art display
  - Bordered Display: Optional ASCII-styled borders using box-drawing characters
  - Caption System: Titled ASCII art with variant-consistent caption styling
- **Gallery**: Grid-based image gallery with compositing and effects support
  - Variants: Full Japanese theme support for seasonal gallery presentations
  - Composite Galleries: Each gallery image supports full layer compositing system
  - Responsive Grids: Configurable columns with automatic mobile adaptation
  - Click Handling: Interactive image selection with callback support
  - Effect Integration: Gallery-wide effects application with consistent styling
- **Retro Digital Effects**: CSS-based image processing for authentic vintage aesthetics
  - Pixelation: CSS `image-rendering: pixelated` with scale transformations for 8-bit look
  - Posterization: CSS filter combinations (contrast, brightness, saturate, sepia) for color depth reduction
  - Variant-Specific Tuning: Each Jadis variant has optimized posterization settings
  - Combined Effects: Pixelation and posterization can be layered for maximum retro impact
- **ASCII Art Library**: Comprehensive collection of terminal-style artwork
  - Terminal Category: Computer, server, network, database ASCII art
  - Matrix Category: Digital rain, nodes, data flow patterns
  - Retro Category: Gaming-inspired artwork, neon signs, explosion effects
  - Developer Integration: Easy import and usage with TypeScript support

#### **Rich Text Editor System**
- **RichTextEditor**: WYSIWYG editor powered by Tiptap with terminal aesthetics
  - Rich Text Features: Bold, italic, code, headings (H1-H3), bullet lists, ordered lists, code blocks, horizontal rules
  - Toolbar Controls: Comprehensive formatting toolbar with undo/redo, text formatting, structure tools
  - Editor States: Error states, disabled states, loading states, and focus management
  - Content Management: Real-time content updates with HTML output, placeholder support
  - Size Configuration: Configurable minimum and maximum heights with scrollable content
  - Built on Tiptap Foundation: Uses Tiptap React editor with StarterKit extensions for robust functionality
- **Terminal Aesthetics Integration**: Styled to match existing Jadis form components
  - Variant Support: All 5 variants (terminal, matrix, retro, minimal, glow) with unique visual effects
  - ASCII Toolbar: Terminal-inspired toolbar buttons using ASCII icons and symbols
  - Form Consistency: Follows same patterns as Input, TextArea, and other form components
  - Typography Styling: Rich text content styled with variant-specific colors and effects
- **Advanced Editor Features**: Professional-grade editing capabilities
  - Keyboard Navigation: Full keyboard shortcuts and accessibility support
  - Content Validation: Error states and validation message support
  - Toolbar Customization: Show/hide toolbar option for different use cases
  - Mobile Optimization: Responsive toolbar and touch-friendly editing experience
- **Integration Capabilities**: Seamless integration with Jadis ecosystem
  - Form Integration: Compatible with Form component and validation patterns  
  - Icon System: Uses ASCIIIcon components for consistent terminal aesthetics
  - Theme Support: Automatically inherits theme colors and effects
  - Grid Layout: Works perfectly within Grid/GridItem responsive layouts

## Library Build & Distribution
- **Library build**: TypeScript declaration generation + Vite library bundling
- **External dependencies**: React and ReactDOM marked as external (peer dependencies)
- **Modern ES modules** with tree-shaking support for consuming applications
- **CSS preprocessing** with Sass support and CSS bundling
- **Package distribution**: Ready for npm publishing with proper exports configuration

## Testing Strategy
- **Unit/Integration**: Vitest with browser testing capabilities
- **E2E**: Playwright integration
- **Visual**: Storybook for component testing
- **Accessibility**: Built-in a11y testing with Storybook addon
- **Coverage**: V8 coverage reporting

## Git Workflow
- **Main branch**: `main`
- **Clean repository** status
- **Conventional commits** recommended for consistency

## NPM Publishing & Release Infrastructure

### Package Information
- **Package Name**: `jadis-ui` (published on NPM)
- **Current Version**: 0.1.1-1 (prerelease)
- **NPM Registry**: https://www.npmjs.com/package/jadis-ui
- **Installation**: `npm install jadis-ui`

### Automated Release Pipeline
- **CI/CD**: Complete GitHub Actions workflow for testing and releases
- **Automated Testing**: ESLint, TypeScript compilation, and build verification
- **Release Types**: patch, minor, major, prerelease via manual workflow dispatch
- **NPM Publishing**: Automatic publishing to NPM registry with proper tagging
- **GitHub Releases**: Automated GitHub release creation with build artifacts

### Release Configuration Files
- **.github/workflows/ci.yml**: Comprehensive CI testing on Node 18, 20, 22 across Ubuntu, Windows, macOS
- **.github/workflows/release.yml**: Release automation with version bumping and NPM publishing
- **.npmignore**: Excludes development files from published package
- **package.json**: Configured with proper NPM fields, exports, and release scripts
- **vite.config.ts**: Enhanced with vite-plugin-dts for TypeScript declaration generation

### Release Scripts
```bash
npm run release:patch      # Bug fixes (0.1.0 → 0.1.1)
npm run release:minor      # New features (0.1.0 → 0.2.0)
npm run release:major      # Breaking changes (0.1.0 → 1.0.0)
npm run release:prerelease # Beta versions (0.1.0 → 0.1.1-0)
```

### Build Artifacts
- **dist/index.js**: Compiled JavaScript library (ES modules)
- **dist/index.css**: Bundled CSS styles with all themes
- **dist/index.d.ts**: TypeScript declaration files
- **Package Size**: ~954KB compressed, ~1.9MB unpacked

### Code Quality Pipeline
- **Strict ESLint Configuration**: Separate rules for core library vs Storybook files
- **TypeScript Strict Mode**: Full type safety with declaration generation
- **Cross-Platform Testing**: Windows, macOS, Ubuntu compatibility verified
- **Storybook Integration**: @storybook/react-vite framework with proper imports

### Development Notes
- Project successfully published as first NPM package (milestone achievement!)
- **Design Focus**: 90's BBS ASCII art and terminal user interface aesthetics
- **Component Philosophy**: Nostalgic computing experience with modern React patterns
- Radix UI provides accessible, unstyled components as foundation
- Storybook serves as both development environment and documentation platform
- **Static Storybook**: Use `npm run build-storybook` for deployable documentation

## Usage Examples
```typescript
// Import components
import { 
  H1, H2, P, Code, Strong,
  ThemeProvider, 
  GlitchText, RetroTerminal,
  SpecialEffects,
  Button, IconButton, ButtonGroup,
  Card, CardHeader, CardBody,
  Input, TextArea, Checkbox, Select,
  Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell,
  DataTable, AsciiTable,
  Grid, GridItem, ResponsiveGrid,
  Navbar, NavbarBrand, NavbarItem, NavbarNav, NavbarDropdown,
  ASCIIIcon, ASCIIIcons, getIcon,
  ApplicationCard, ServiceMonitorCard, SystemStatusCard,
  PageLayout, AppHeader, AppFooter, Sidebar, Breadcrumbs, StatusBar,
  HeroBanner, PageBanner, FeatureSection,
  LoginForm, RegisterForm, SessionStatus, AuthGuard, LogoutConfirm,
  ProgressBar, CircularGauge, LinearGauge, ASCIIMeter,
  StatusLight, StatusBadge, LoadingSpinner, TrendIndicator,
  BatteryIndicator, SignalStrength, HealthIndicator, LevelIndicator,
  ImageArea, ASCIIArt, Gallery, ASCIIArtLibrary,
  RichTextEditor
} from 'jadis'

// Import styles (includes all themes and effects)
import 'jadis/styles'

// Basic usage with headers
<H1 variant="box" align="center">MAIN SYSTEM</H1>
<H2 variant="double-line" align="left">Configuration Menu</H2>

// Typography with variants and colors
<P variant="terminal" color="green" glow="sm">
  Welcome to the <Strong variant="glow">JADIS</Strong> terminal system.
</P>

<P variant="matrix" color="cyan">
  Execute: <Code variant="matrix" color="green">npm install jadis</Code>
</P>

// Theme system usage
<ThemeProvider defaultTheme="matrix">
  <H1 variant="box">MATRIX MODE ENABLED</H1>
  <P variant="matrix">All components inherit theme automatically.</P>
</ThemeProvider>

// Special effects
<GlitchText effect="glitch-rgb" text="SYSTEM ERROR">
  <H1>SYSTEM ERROR</H1>
</GlitchText>

<RetroTerminal>
  <P variant="terminal">Authentic 90s terminal experience</P>
</RetroTerminal>

// Custom effect combinations
<SpecialEffects 
  glitch={['glitch-rgb']} 
  scanlines={['scanlines']} 
  glow={['glow-pulse']}
>
  <P>Custom retro effects stack</P>
</SpecialEffects>

// Button components
<Button variant="terminal" color="success">
  EXECUTE
</Button>

<ButtonGroup variant="matrix">
  <Button>OPTION 1</Button>
  <Button>OPTION 2</Button>
  <Button>OPTION 3</Button>
</ButtonGroup>

<IconButton variant="retro" icon="★" label="Favorite" />

// Card components
<Card variant="terminal" interactive>
  <CardHeader title="System Status" subtitle="All systems operational" />
  <CardBody>
    <P variant="terminal">Connection established.</P>
  </CardBody>
</Card>

// Form components
<Input 
  variant="terminal" 
  label="Username" 
  placeholder="Enter username..." 
/>

<TextArea 
  variant="matrix" 
  label="Message" 
  rows={4}
/>

<Checkbox 
  variant="terminal" 
  label="Enable notifications" 
  defaultChecked 
/>

<Select variant="retro" label="Choose option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>

// Table components
<Table variant="terminal" bordered hoverable>
  <TableHead>
    <TableRow>
      <TableHeaderCell sortable>PROCESS</TableHeaderCell>
      <TableHeaderCell align="right" numeric>CPU %</TableHeaderCell>
      <TableHeaderCell>STATUS</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>System Process</TableCell>
      <TableCell align="right" numeric>45.2</TableCell>
      <TableCell>Running</TableCell>
    </TableRow>
  </TableBody>
</Table>

// DataTable with sorting and selection
const columns = [
  { key: 'name', header: 'Process', sortable: true },
  { key: 'cpu', header: 'CPU %', align: 'right', numeric: true, sortable: true },
  { key: 'status', header: 'Status' }
]

<DataTable
  variant="matrix"
  data={processData}
  columns={columns}
  selectable
  bordered
  striped
/>

// ASCII Table for terminal display
const data = [
  ['NAME', 'TYPE', 'SIZE'],
  ['config.sys', 'CONFIG', '4KB'],
  ['boot.exe', 'SYSTEM', '128KB']
]

<AsciiTable
  data={data}
  variant="terminal"
  columnAlignments={['left', 'center', 'right']}
/>

// Grid Layout System
// Basic Grid Layout
<Grid variant="terminal" columns={3} gap="medium" bordered>
  <GridItem variant="terminal" bordered>
    <Card variant="terminal">
      <CardHeader title="Panel 1" />
    </Card>
  </GridItem>
  <GridItem variant="terminal" bordered columnSpan={2}>
    <Card variant="terminal">
      <CardHeader title="Panel 2 (2 columns wide)" />
    </Card>
  </GridItem>
</Grid>

// Responsive Grid
<ResponsiveGrid
  variant="matrix"
  xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}
  gap="large"
  bordered
>
  {items.map((item, i) => (
    <GridItem key={i} variant="matrix" bordered interactive>
      <Card variant="matrix">
        <CardBody>{item.content}</CardBody>
      </Card>
    </GridItem>
  ))}
</ResponsiveGrid>

// Complex Dashboard Layout
<Grid variant="glow" columns={6} rows={4} gap="medium" bordered>
  <GridItem variant="glow" bordered columnSpan={2} rowSpan={2}>
    <Card variant="glow">
      <CardHeader title="Main Dashboard" />
    </Card>
  </GridItem>
  <GridItem variant="glow" bordered columnSpan={4}>
    <Card variant="glow">
      <CardHeader title="Header Panel" />
    </Card>
  </GridItem>
  <GridItem variant="glow" bordered columnSpan="full">
    <Card variant="glow">
      <CardHeader title="Full Width Footer" />
    </Card>
  </GridItem>
</Grid>

// Navigation System
// Basic Navbar
<Navbar variant="terminal" bordered>
  <NavbarBrand 
    variant="terminal" 
    text="SYSTEM CONTROL" 
    logo={<ASCIIIcon icon="terminal" variant="terminal" />}
  />
  <NavbarNav variant="terminal">
    <NavbarItem variant="terminal" active icon={<ASCIIIcon icon="home" variant="terminal" />}>
      HOME
    </NavbarItem>
    <NavbarItem variant="terminal" icon={<ASCIIIcon icon="settings" variant="terminal" />}>
      CONFIG
    </NavbarItem>
    <NavbarItem variant="terminal" badge={5}>
      ALERTS
    </NavbarItem>
  </NavbarNav>
</Navbar>

// Responsive Navbar with Dropdown
<Navbar variant="matrix" collapse bordered>
  <NavbarBrand variant="matrix" text="MATRIX NET" />
  <NavbarNav variant="matrix">
    <NavbarDropdown
      variant="matrix"
      trigger={<NavbarItem variant="matrix" dropdown>PROTOCOLS</NavbarItem>}
    >
      <NavbarItem variant="matrix">HTTP Scanner</NavbarItem>
      <NavbarItem variant="matrix">Port Monitor</NavbarItem>
      <NavbarItem variant="matrix">Packet Analyzer</NavbarItem>
    </NavbarDropdown>
  </NavbarNav>
</Navbar>

// ASCII Icon System
// Basic Icon Usage
<ASCIIIcon icon="database" variant="terminal" size="large" />
<ASCIIIcon icon="network" variant="matrix" size="medium" />
<ASCIIIcon icon="settings" variant="retro" size="small" />

// Icons in Buttons and UI
<Button variant="terminal">
  <ASCIIIcon icon="search" variant="terminal" />
  SCAN SYSTEM
</Button>

<Card variant="glow">
  <CardHeader 
    title={
      <>
        <ASCIIIcon icon="warning" variant="glow" /> ALERT STATUS
      </>
    } 
  />
</Card>

// Custom Icons
<ASCIIIcon icon="╬" variant="matrix" size="large" />
<ASCIIIcon icon="▲▼" variant="terminal" />

// Application Cards System
// Application Monitoring
<ApplicationCard
  variant="terminal"
  name="Web Server"
  version="2.4.1"
  description="Primary HTTP server handling web traffic"
  status="running"
  priority="high"
  icon="server"
  uptime="15d 8h 32m"
  memoryUsage={45}
  cpuUsage={23}
  onStop={() => console.log('Stopping server')}
  onRestart={() => console.log('Restarting server')}
  onViewLogs={() => console.log('Viewing logs')}
/>

// Service Group Monitoring
<ServiceMonitorCard
  variant="matrix"
  serviceName="Web Stack Services"
  services={[
    { name: 'nginx', status: 'running', port: 80 },
    { name: 'nodejs', status: 'running', port: 3000 },
    { name: 'redis', status: 'error', port: 6379 }
  ]}
  onServiceAction={(service, action) => 
    console.log(`${action} service: ${service}`)
  }
/>

// System Resource Monitoring
<SystemStatusCard
  variant="glow"
  systemName="Production Server"
  status="running"
  metrics={{
    cpu: 76,
    memory: 89,
    disk: 45,
    network: 23
  }}
  alerts={[
    { level: 'warning', message: 'Memory usage high', timestamp: '14:32' },
    { level: 'error', message: 'Disk cleanup needed', timestamp: '10:15' }
  ]}
  onSystemAction={(action) => console.log(`System ${action}`)}
/>

// Dashboard Layout with Mixed Cards
<Grid variant="terminal" columns={3} gap="medium">
  <GridItem>
    <ApplicationCard variant="terminal" name="API Server" status="running" />
  </GridItem>
  <GridItem>
    <ServiceMonitorCard variant="matrix" serviceName="Background Services" />
  </GridItem>
  <GridItem>
    <SystemStatusCard variant="glow" systemName="Main Node" />
  </GridItem>
</Grid>

// Rich Text Editor System
// Basic Rich Text Editor
<RichTextEditor
  variant="terminal"
  label="Document Content"
  placeholder="Start typing your content..."
  content="<h2>Welcome</h2><p>This is a <strong>rich text editor</strong> with terminal aesthetics!</p>"
  onChange={(content) => console.log('Content:', content)}
/>

// Advanced Rich Text Editor with Size Control
<RichTextEditor
  variant="matrix"
  label="Technical Documentation"
  required
  minHeight="300px"
  maxHeight="600px"
  content={`
    <h1>API Documentation</h1>
    <h2>Authentication</h2>
    <p>All API requests require authentication using a <strong>Bearer token</strong>.</p>
    <h3>Example Request</h3>
    <pre><code>curl -H "Authorization: Bearer TOKEN" \\
  https://api.example.com/v1/users</code></pre>
    <ul>
      <li><code>success</code>: Boolean indicating request status</li>
      <li><code>data</code>: The requested data or null</li>
      <li><code>error</code>: Error message if applicable</li>
    </ul>
    <blockquote>
      <strong>Note:</strong> Rate limiting is enforced at 1000 requests per hour.
    </blockquote>
  `}
  onChange={(content) => setDocumentation(content)}
/>

// Simple Editor without Toolbar
<RichTextEditor
  variant="minimal"
  label="Quick Note"
  showToolbar={false}
  placeholder="Simple text editing without formatting toolbar..."
  minHeight="150px"
/>

// Error State and Validation
<RichTextEditor
  variant="retro"
  label="Content (Required)"
  required
  error
  errorMessage="Content is required and must be at least 10 characters long."
  placeholder="Enter your content here..."
/>

// Rich Text Editor in Form Layout
<Form variant="glow">
  <Input variant="glow" label="Title" placeholder="Document title..." />
  <RichTextEditor
    variant="glow"
    label="Content"
    placeholder="Write your content..."
    minHeight="400px"
    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
  />
  <Button variant="glow" type="submit">Save Document</Button>
</Form>

// Layout System
// Complete Page Layout
<PageLayout
  variant="terminal"
  fullHeight
  header={
    <AppHeader
      variant="terminal"
      logo={<ASCIIIcon icon="terminal" variant="terminal" />}
      title="SYSTEM CONTROL"
      version="v2.1.0"
      user="admin@system.local"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'System', href: '/system' },
        { label: 'Monitor', href: '/system/monitor' }
      ]}
      actions={
        <Button variant="terminal" size="small">Settings</Button>
      }
    />
  }
  footer={
    <AppFooter
      variant="terminal"
      company="Terminal Systems Inc."
      year={2024}
      links={{
        'Company': [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ],
        'Support': [
          { label: 'Documentation', href: '/docs' },
          { label: 'Help', href: '/help' }
        ]
      }}
      socialLinks={[
        { type: 'github', href: 'https://github.com/company' }
      ]}
    />
  }
  sidebar={
    <Sidebar
      variant="terminal"
      title="Navigation"
      items={[
        { 
          label: 'Dashboard', 
          href: '/', 
          icon: <ASCIIIcon icon="home" variant="terminal" />,
          active: true 
        },
        { 
          label: 'System Monitor', 
          href: '/monitor',
          icon: <ASCIIIcon icon="server" variant="terminal" />
        },
        {
          label: 'Configuration',
          href: '/config',
          icon: <ASCIIIcon icon="settings" variant="terminal" />,
          children: [
            { label: 'Network', href: '/config/network' },
            { label: 'Security', href: '/config/security' }
          ]
        }
      ]}
    />
  }
>
  <main>
    <H1 variant="box">System Dashboard</H1>
    <P variant="terminal">Welcome to the terminal control system.</P>
  </main>
</PageLayout>

// Hero Banner System
// Landing Page Hero
<HeroBanner
  variant="matrix"
  size="xlarge"
  title="ENTER THE MATRIX"
  subtitle="Digital Reality Management System"
  description="Experience the power of the matrix with advanced digital reality controls and real-time system monitoring."
  backgroundPattern="matrix"
  align="center"
  overlay
  actions={
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="matrix" size="large">Enter System</Button>
      <Button variant="matrix" size="large" outline>View Demo</Button>
    </div>
  }
/>

// Feature Introduction Hero
<HeroBanner
  variant="terminal"
  size="large"
  title="ADVANCED TERMINAL"
  subtitle="Command Line Interface Evolution"
  description="Professional-grade terminal with modern features and classic aesthetics."
  backgroundPattern="grid"
  align="left"
  actions={
    <Button variant="terminal" size="large">Get Started</Button>
  }
/>

// Page Banner System
// System Alerts
<PageBanner
  variant="terminal"
  type="warning"
  title="System Maintenance"
  message="The system will undergo maintenance tonight from 2:00-4:00 AM PST. Please save your work."
  position="fixed-top"
  dismissible
  onDismiss={() => console.log('Banner dismissed')}
  actions={
    <Button variant="terminal" size="small" outline>Learn More</Button>
  }
/>

// Success Notifications
<PageBanner
  variant="matrix"
  type="success"
  message="Configuration updated successfully! All changes have been applied."
  dismissible
/>

// Error Alerts
<PageBanner
  variant="retro"
  type="error"
  title="Connection Failed"
  message="Unable to connect to the remote server. Please check your network connection."
  actions={
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button variant="retro" size="small">Retry</Button>
      <Button variant="retro" size="small" outline>Troubleshoot</Button>
    </div>
  }
/>

// Feature Section System
// Product Features Showcase
<FeatureSection
  variant="terminal"
  title="TERMINAL CAPABILITIES"
  subtitle="Advanced Command Interface Features"
  description="Discover the powerful features that make our terminal the professional choice for system administration."
  features={[
    {
      icon: '◎',
      title: 'Advanced Scripting',
      description: 'Powerful scripting capabilities with syntax highlighting and auto-completion.'
    },
    {
      icon: '◈',
      title: 'System Monitoring',
      description: 'Real-time monitoring of system resources and network activity.'
    },
    {
      icon: '◊',
      title: 'Security Tools',
      description: 'Built-in security analysis and penetration testing utilities.'
    },
    {
      icon: '○',
      title: 'Remote Access',
      description: 'Secure remote terminal access with encrypted connections.'
    }
  ]}
  columns={2}
  actions={
    <Button variant="terminal" size="large">Explore Features</Button>
  }
/>

// Service Capabilities Grid
<FeatureSection
  variant="glow"
  title="COSMIC CAPABILITIES"
  subtitle="Transcendent Digital Experience"
  features={[
    {
      icon: '※',
      title: 'Stellar Performance',
      description: 'Performance that reaches beyond ordinary computing paradigms.'
    },
    {
      icon: '◈',
      title: 'Quantum Processing',
      description: 'Harness quantum-inspired computing for complex operations.'
    },
    {
      icon: '◊',
      title: 'Astral Navigation',
      description: 'Navigate digital space with celestial precision and grace.'
    }
  ]}
  columns={3}
  centered
  actions={
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="glow" size="large">Transcend</Button>
      <Button variant="glow" size="large" outline>Learn More</Button>
    </div>
  }
/>

// Complete Dashboard Layout Example
<PageLayout variant="matrix" fullHeight>
  {/* Hero Section */}
  <HeroBanner
    variant="matrix"
    size="large" 
    title="SYSTEM DASHBOARD"
    subtitle="Real-time Monitoring & Control"
    backgroundPattern="matrix"
    align="center"
    compact
  />
  
  {/* Alert Banner */}
  <PageBanner
    variant="matrix"
    type="info"
    message="All systems operational. Last sync: 2 minutes ago."
    compact
    dismissible
  />
  
  {/* Main Content Grid */}
  <Grid variant="matrix" columns={3} gap="medium">
    <GridItem columnSpan={2}>
      <SystemStatusCard
        variant="matrix"
        systemName="Main Server"
        status="running"
        metrics={{ cpu: 45, memory: 67, disk: 23, network: 15 }}
      />
    </GridItem>
    <GridItem>
      <ApplicationCard
        variant="matrix"
        name="API Server"
        status="running"
        priority="high"
      />
    </GridItem>
  </Grid>
  
  {/* Feature Showcase */}
  <FeatureSection
    variant="matrix"
    title="SYSTEM FEATURES"
    features={[
      { icon: '▣', title: 'Real-time Monitoring', description: 'Live system metrics' },
      { icon: '▓', title: 'Automated Alerts', description: 'Smart notification system' },
      { icon: '◉', title: 'Remote Control', description: 'Secure remote management' }
    ]}
    columns={3}
    compact
  />
</PageLayout>

// Authentication System
// Login Form with Terminal Aesthetics
<LoginForm
  variant="terminal"
  title="SYSTEM ACCESS"
  subtitle="Enter your credentials"
  onSubmit={(data) => {
    console.log('Authentication:', data)
    // Handle login: data.username, data.password, data.rememberMe
    authenticateUser(data.username, data.password, data.rememberMe)
  }}
  onForgotPassword={() => redirectToPasswordReset()}
  onRegister={() => showRegistrationForm()}
  error={authError}
  loading={isAuthenticating}
  showRememberMe={true}
  showForgotPassword={true}
  showRegisterLink={true}
/>

// Registration Form with Validation
<RegisterForm
  variant="matrix"
  title="MATRIX REGISTRATION"
  subtitle="Join the neural network"
  onSubmit={(data) => {
    console.log('Registration:', data)
    // Handle registration: data.username, data.email, data.password, data.acceptTerms
    if (data.password !== data.confirmPassword) {
      setRegistrationError("Passwords don't match")
      return
    }
    registerUser(data)
  }}
  onLogin={() => showLoginForm()}
  error={registrationError}
  loading={isRegistering}
  requireTerms={true}
  showLoginLink={true}
/>

// Session Status Display
<SessionStatus
  variant="terminal"
  user={{
    username: 'admin',
    email: 'admin@system.local',
    role: 'Administrator',
    lastLogin: '2024-03-15 14:30:00'
  }}
  showDetails={true}
  compact={false}
  onLogout={() => {
    setShowLogoutConfirm(true)
  }}
  onProfile={() => {
    navigateToProfile()
  }}
/>

// Compact Session Status for Headers
<SessionStatus
  variant="matrix"
  user={currentUser}
  compact={true}
  showDetails={false}
  onLogout={handleLogout}
/>

// Authentication Guard for Protected Content
<AuthGuard
  variant="terminal"
  user={currentUser}
  loading={isCheckingAuth}
  requireRole="Administrator"
  onUnauthorized={() => {
    redirectToLogin()
  }}
  fallback={
    <Card variant="terminal">
      <CardHeader title="Access Required" />
      <CardBody>
        <P variant="terminal">Please log in to access this content.</P>
        <Button variant="terminal" onClick={showLogin}>
          Login
        </Button>
      </CardBody>
    </Card>
  }
>
  <Card variant="terminal">
    <CardHeader title="Admin Panel" />
    <CardBody>
      <P variant="terminal">
        This content is only visible to authenticated administrators.
      </P>
      <Button variant="terminal">Manage System</Button>
    </CardBody>
  </Card>
</AuthGuard>

// Role-Based Content Protection
<AuthGuard
  variant="matrix"
  user={currentUser}
  requireRole="Operator"
  fallback={<div>Insufficient privileges - Operator role required</div>}
>
  <div>This content requires Operator role or higher</div>
</AuthGuard>

// Logout Confirmation Dialog
<LogoutConfirm
  variant="terminal"
  user={currentUser}
  onConfirm={() => {
    performLogout()
    setShowLogoutConfirm(false)
  }}
  onCancel={() => {
    setShowLogoutConfirm(false)
  }}
  loading={isLoggingOut}
/>

// Complete Authentication Flow Example
const AuthenticatedApp = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [authView, setAuthView] = useState('login') // 'login' | 'register' | 'dashboard'
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (data) => {
    setIsLoading(true)
    setError('')
    
    try {
      const user = await authenticateUser(data.username, data.password)
      setCurrentUser(user)
      setAuthView('dashboard')
    } catch (err) {
      setError('Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (data) => {
    setIsLoading(true)
    setError('')
    
    try {
      const user = await registerUser(data)
      setCurrentUser(user)
      setAuthView('dashboard')
    } catch (err) {
      setError('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setAuthView('login')
    clearAuthToken()
  }

  if (authView === 'dashboard' && currentUser) {
    return (
      <PageLayout
        variant="terminal"
        header={
          <AppHeader
            variant="terminal"
            title="SECURE DASHBOARD"
            actions={
              <SessionStatus
                variant="terminal"
                user={currentUser}
                compact
                onLogout={handleLogout}
              />
            }
          />
        }
      >
        <AuthGuard
          variant="terminal"
          user={currentUser}
          loading={false}
        >
          <H1 variant="box">Welcome, {currentUser.username}!</H1>
          <P variant="terminal">You have successfully authenticated.</P>
          
          <Grid variant="terminal" columns={2} gap="large">
            <GridItem>
              <Card variant="terminal">
                <CardHeader title="Profile Information" />
                <CardBody>
                  <P variant="terminal">Email: {currentUser.email}</P>
                  <P variant="terminal">Role: {currentUser.role}</P>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem>
              <AuthGuard
                variant="terminal"
                user={currentUser}
                requireRole="Administrator"
                fallback={
                  <Card variant="terminal">
                    <CardHeader title="Admin Panel" />
                    <CardBody>
                      <P variant="terminal">Administrator access required.</P>
                    </CardBody>
                  </Card>
                }
              >
                <Card variant="terminal">
                  <CardHeader title="Admin Controls" />
                  <CardBody>
                    <Button variant="terminal">Manage Users</Button>
                  </CardBody>
                </Card>
              </AuthGuard>
            </GridItem>
          </Grid>
        </AuthGuard>
      </PageLayout>
    )
  }

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      {authView === 'login' ? (
        <LoginForm
          variant="terminal"
          title="SYSTEM LOGIN"
          subtitle="Enter your credentials"
          loading={isLoading}
          error={error}
          onSubmit={handleLogin}
          onRegister={() => setAuthView('register')}
          onForgotPassword={() => alert('Password reset functionality')}
        />
      ) : (
        <RegisterForm
          variant="terminal"
          title="CREATE ACCOUNT"
          subtitle="Join the system"
          loading={isLoading}
          error={error}
          onSubmit={handleRegister}
          onLogin={() => setAuthView('login')}
        />
      )}
    </div>
  )
}

// Multi-Variant Auth Showcase
<div>
  {(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
    <div key={variant}>
      <H2 variant="double-line">{variant.toUpperCase()} AUTH</H2>
      
      <Grid variant={variant} columns={2} gap="large">
        <GridItem>
          <LoginForm
            variant={variant}
            title={`${variant.toUpperCase()} ACCESS`}
            onSubmit={(data) => console.log(`${variant} login:`, data)}
          />
        </GridItem>
        
        <GridItem>
          <SessionStatus
            variant={variant}
            user={{
              username: `${variant}_user`,
              email: `user@${variant}.sys`,
              role: 'User'
            }}
            compact
            onLogout={() => console.log(`${variant} logout`)}
          />
        </GridItem>
      </Grid>
    </div>
  ))}
</div>

// Gauges and Indicators System
// Progress Bar Examples
<ProgressBar
  variant="terminal"
  value={75}
  label="System Load"
  showPercentage={true}
  animated={true}
  striped={true}
/>

<ProgressBar
  variant="matrix"
  value={89}
  color="warning"
  size="large"
  showValue={true}
  showPercentage={true}
  pulse={true}
/>

// ASCII Circular Gauge Examples
<CircularGauge
  variant="terminal"
  value={65}
  style="classic"
  label="CPU Usage"
  showPercentage={true}
  animated={true}
/>

<CircularGauge
  variant="matrix"
  value={78}
  style="digital"
  label="Memory"
  color="warning"
  animated={true}
/>

<CircularGauge
  variant="retro"
  value={45}
  style="retro"
  label="Disk Usage"
  showValue={true}
/>

<CircularGauge
  variant="glow"
  value={92}
  style="dots"
  label="Network"
  color="error"
/>

// Linear Gauge Examples
<LinearGauge
  variant="terminal"
  value={85}
  orientation="horizontal"
  label="Signal Strength"
  showScale={true}
  showTicks={true}
  tickCount={10}
  animated={true}
/>

<LinearGauge
  variant="matrix"
  value={67}
  orientation="vertical"
  label="Power Level"
  color="success"
  showValue={true}
/>

// ASCII Meter Examples
<ASCIIMeter
  variant="terminal"
  value={42}
  max={100}
  style="classic"
  label="Temperature"
  showValue={true}
/>

<ASCIIMeter
  variant="matrix"
  value={78}
  style="digital"
  label="Network Load"
/>

<ASCIIMeter
  variant="retro"
  value={56}
  style="retro"
  label="Power Output"
/>

// Status Indicators Examples
<StatusLight
  variant="terminal"
  status="success"
  label="System Online"
  pulse={true}
/>

<StatusBadge
  variant="matrix"
  status="online"
  pulse={true}
/>

<StatusBadge
  variant="terminal"
  status="error"
  text="OFFLINE"
/>

// Loading Spinners
<LoadingSpinner
  variant="terminal"
  style="spinner"
  text="Loading..."
  speed="normal"
/>

<LoadingSpinner
  variant="matrix"
  style="dots"
  text="Processing..."
/>

<LoadingSpinner
  variant="retro"
  style="bars"
  text="Analyzing..."
/>

// Trend Indicators
<TrendIndicator
  variant="terminal"
  trend="up"
  value="$1,234"
  change="15.2%"
  animated={true}
/>

<TrendIndicator
  variant="matrix"
  trend="down"
  value="87.3%"
  change="3.1%"
  animated={true}
/>

<TrendIndicator
  variant="glow"
  trend="volatile"
  value="1.23k"
  change="±8%"
/>

// Battery and Signal Indicators
<BatteryIndicator
  variant="terminal"
  level={85}
  showPercentage={true}
  animated={true}
/>

<BatteryIndicator
  variant="matrix"
  level={25}
  charging={true}
  animated={true}
/>

<SignalStrength
  variant="terminal"
  strength={4}
  max={5}
  showValue={true}
/>

<SignalStrength
  variant="glow"
  strength={2}
  max={5}
  animated={true}
/>

// Health and Level Indicators
<HealthIndicator
  variant="terminal"
  health="excellent"
  showLabel={true}
  animated={true}
/>

<HealthIndicator
  variant="matrix"
  health="critical"
  value="12%"
/>

<LevelIndicator
  variant="terminal"
  level={8}
  maxLevel={10}
  showValue={true}
  animated={true}
/>

<LevelIndicator
  variant="glow"
  level={5}
  maxLevel={10}
  color="warning"
/>

// System Monitoring Dashboard Example
const SystemDashboard = () => {
  const [metrics, setMetrics] = useState({
    cpu: 45, memory: 67, disk: 34, network: 78
  })

  return (
    <Grid variant="terminal" columns={3} gap="large">
      {/* Circular Gauges */}
      <GridItem>
        <Card variant="terminal">
          <CardHeader title="CPU USAGE" />
          <CardBody style={{ textAlign: 'center' }}>
            <CircularGauge
              variant="terminal"
              value={metrics.cpu}
              style="classic"
              showPercentage
              animated
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem>
        <Card variant="matrix">
          <CardHeader title="MEMORY" />
          <CardBody style={{ textAlign: 'center' }}>
            <CircularGauge
              variant="matrix"
              value={metrics.memory}
              style="digital"
              color="warning"
              showPercentage
              animated
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem>
        <Card variant="glow">
          <CardHeader title="NETWORK" />
          <CardBody>
            <ProgressBar
              variant="glow"
              value={metrics.network}
              label="Throughput"
              animated
              striped
            />
          </CardBody>
        </Card>
      </GridItem>

      {/* Status Row */}
      <GridItem columnSpan={3}>
        <Card variant="terminal">
          <CardHeader title="SYSTEM STATUS" />
          <CardBody>
            <Grid variant="terminal" columns={4} gap="medium">
              <GridItem style={{ textAlign: 'center' }}>
                <StatusBadge 
                  variant="terminal" 
                  status={metrics.cpu < 80 ? 'online' : 'error'} 
                  text="CPU"
                />
              </GridItem>
              <GridItem style={{ textAlign: 'center' }}>
                <BatteryIndicator
                  variant="terminal"
                  level={85}
                  showPercentage
                />
              </GridItem>
              <GridItem style={{ textAlign: 'center' }}>
                <SignalStrength
                  variant="terminal"
                  strength={4}
                  max={5}
                />
              </GridItem>
              <GridItem style={{ textAlign: 'center' }}>
                <HealthIndicator
                  variant="terminal"
                  health="excellent"
                  showLabel
                />
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  )
}

// ImageArea and ASCII Art System
// Advanced Image Display with CSS Compositing
<ImageArea
  variant="terminal"
  src="https://picsum.photos/400/300"
  size="large"
  bordered
  scanlines
  pixelated
  layers={[
    {
      src: "https://picsum.photos/400/300?random=1",
      opacity: 0.4,
      blendMode: "multiply",
      offset: { x: 5, y: 5 }
    },
    {
      src: "https://picsum.photos/400/300?random=2", 
      opacity: 0.3,
      blendMode: "screen"
    }
  ]}
  aspectRatio="16 / 9"
  alt="Composite terminal display"
/>

// Retro Digital Effects Showcase
<div style={{ display: 'flex', gap: '2rem' }}>
  <ImageArea
    variant="retro"
    src="https://picsum.photos/300/300"
    size="medium"
    bordered
    pixelated
    posterized
    aspectRatio="1 / 1"
    alt="8-bit pixel art"
  />
  
  <ImageArea
    variant="matrix"
    src="https://picsum.photos/300/300"
    size="medium"
    bordered
    posterized
    glitch
    aspectRatio="1 / 1"
    alt="Matrix posterized"
  />
</div>

// ASCII Art Display
<ASCIIArt
  variant="terminal"
  art={ASCIIArtLibrary.terminal.computer}
  title="Terminal Computer"
  bordered
  glow
  typewriter
  typewriterSpeed={30}
/>

<ASCIIArt
  variant="matrix"
  art={ASCIIArtLibrary.matrix.digitalRain}
  title="Digital Rain"
  bordered
  animated
  scanlines
/>

<ASCIIArt
  variant="retro"
  art={ASCIIArtLibrary.retro.boom}
  title="Retro Explosion"
  bordered
  glitch
/>

// Custom ASCII Art
<ASCIIArt
  variant="glow"
  art={`
    ╔═══════════════╗
    ║ ████████████  ║
    ║ JADIS  v2.0   ║
    ║ ████████████  ║
    ╚═══════════════╝
  `}
  title="Custom System Banner"
  bordered
  centered
  glow
/>

// Image Gallery with Compositing
<Gallery
  variant="terminal"
  images={[
    {
      src: "https://picsum.photos/400/300?random=10",
      caption: "Terminal Display",
      layers: [{
        src: "https://picsum.photos/400/300?random=15",
        opacity: 0.3,
        blendMode: "multiply"
      }]
    },
    {
      src: "https://picsum.photos/400/300?random=11", 
      caption: "Matrix Node",
      layers: [{
        src: "https://picsum.photos/400/300?random=16",
        opacity: 0.4,
        blendMode: "screen"
      }]
    },
    {
      src: "https://picsum.photos/400/300?random=12",
      caption: "Retro Interface",
      layers: [{
        src: "https://picsum.photos/400/300?random=17",
        opacity: 0.5,
        blendMode: "overlay"
      }]
    }
  ]}
  columns={3}
  gap="1.5rem"
  bordered
  scanlines
  aspectRatio="4 / 3"
  onImageClick={(index) => console.log(`Clicked image ${index}`)}
/>

// Retro Gaming Interface Example
<div style={{
  background: 'var(--jadis-color-black)',
  padding: '2rem',
  minHeight: '100vh'
}}>
  <ASCIIArt
    variant="retro"
    art={ASCIIArtLibrary.retro.neon}
    title="Retro Gaming Zone" 
    bordered
    centered
    size="large"
  />
  
  <Gallery
    variant="retro"
    images={[
      { src: "https://picsum.photos/300/300?random=20", caption: "Pixel Fighter" },
      { src: "https://picsum.photos/300/300?random=21", caption: "Mega Quest" },
      { src: "https://picsum.photos/300/300?random=22", caption: "Cyber Runner" },
      { src: "https://picsum.photos/300/300?random=23", caption: "Neon Racer" }
    ]}
    columns={4}
    gap="1rem"
    bordered
    aspectRatio="1 / 1"
  />
  
  {/* Apply pixelated and posterized effects via CSS */}
  <style>{`
    .jadis-gallery .jadis-image-area .jadis-image-area__main {
      image-rendering: pixelated !important;
      filter: contrast(200%) brightness(1.3) saturate(130%) hue-rotate(30deg) !important;
    }
  `}</style>
  
  <ASCIIArt
    variant="retro"
    art={ASCIIArtLibrary.retro.gaming}
    bordered
    typewriter
    typewriterSpeed={50}
    size="large"
  />
</div>

// System Dashboard with ASCII Art Headers
<PageLayout variant="terminal" fullHeight>
  <main>
    <ASCIIArt
      variant="terminal"
      art={ASCIIArtLibrary.terminal.server}
      title="System Control Dashboard"
      bordered
      glow
      centered
    />
    
    <Grid variant="terminal" columns={2} gap="large">
      <GridItem>
        <ImageArea
          variant="terminal"
          src="https://picsum.photos/400/300?random=30"
          size="large"
          bordered
          scanlines
          crt
          aspectRatio="4 / 3"
          alt="System monitor display"
        />
      </GridItem>
      
      <GridItem>
        <Card variant="terminal">
          <CardHeader title="Network Status" />
          <CardBody>
            <ASCIIArt
              variant="terminal"
              art={ASCIIArtLibrary.terminal.network}
              bordered={false}
              animated
              size="small"
            />
            <P variant="terminal">All nodes operational</P>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  </main>
</PageLayout>

// Multi-Variant Image Effects Showcase
{(['terminal', 'matrix', 'retro', 'glow'] as const).map((variant) => (
  <div key={variant}>
    <H2 variant="double-line">{variant.toUpperCase()} IMAGES</H2>
    
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ImageArea
        variant={variant}
        src={`https://picsum.photos/200/200?random=${variant}`}
        size="medium"
        bordered
        aspectRatio="1 / 1"
        alt={`${variant} original`}
      />
      
      <ImageArea
        variant={variant}
        src={`https://picsum.photos/200/200?random=${variant}`}
        size="medium"
        bordered
        pixelated
        aspectRatio="1 / 1"
        alt={`${variant} pixelated`}
      />
      
      <ImageArea
        variant={variant}
        src={`https://picsum.photos/200/200?random=${variant}`}
        size="medium"
        bordered
        posterized
        aspectRatio="1 / 1"
        alt={`${variant} posterized`}
      />
      
      <ImageArea
        variant={variant}
        src={`https://picsum.photos/200/200?random=${variant}`}
        size="medium"
        bordered
        pixelated
        posterized
        aspectRatio="1 / 1"
        alt={`${variant} pixel + poster`}
      />
    </div>
    
    <ASCIIArt
      variant={variant}
      art={
        variant === 'terminal' ? ASCIIArtLibrary.terminal.computer :
        variant === 'matrix' ? ASCIIArtLibrary.matrix.digitalRain :
        variant === 'retro' ? ASCIIArtLibrary.retro.boom : 
        ASCIIArtLibrary.terminal.database
      }
      bordered
      glow={variant === 'glow'}
      animated={variant === 'matrix'}
      typewriter={variant === 'retro'}
    />
  </div>
))}

// Multi-Variant Gauge Showcase
{(['terminal', 'matrix', 'retro', 'minimal', 'glow'] as const).map((variant) => (
  <div key={variant}>
    <H2 variant="double-line">{variant.toUpperCase()} GAUGES</H2>
    
    <Grid variant={variant} columns={3} gap="large">
      <GridItem style={{ textAlign: 'center' }}>
        <CircularGauge
          variant={variant}
          value={Math.random() * 100 | 0}
          style="classic"
          label="System"
          animated
        />
      </GridItem>
      
      <GridItem>
        <ProgressBar
          variant={variant}
          value={Math.random() * 100 | 0}
          label="Progress"
          animated
          striped
        />
      </GridItem>
      
      <GridItem style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <StatusBadge variant={variant} status="online" />
          <TrendIndicator variant={variant} trend="up" value="↗" />
          <BatteryIndicator variant={variant} level={75} />
        </div>
      </GridItem>
    </Grid>
  </div>
))}
```