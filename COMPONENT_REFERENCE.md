# Component Reference

Complete catalog of all components available in CLI-UI.

---

## Component Inventory

### Layout Components (3)

These components form the application shell and structural layout.

#### 1. Header
**Path**: `components/layout/header.tsx`

**Description**: Fixed 48px top navigation bar with brand, tabs, and status indicators.

**Features**:
- Logo with `>_` prefix in cyan
- Navigation tabs with bracket syntax `[ TAB | TAB ]`
- Status indicators (online, ready)
- Fixed height: 48px

**Usage**:
```tsx
import { Header } from '@/components/layout/header'

<Header />
```

---

#### 2. Sidebar
**Path**: `components/layout/sidebar.tsx`

**Description**: 240px collapsible navigation panel with categorized menu items.

**Features**:
- Categorized sections with comment-style dividers
- Icon + label navigation items
- Active state highlighting
- Hover effects

**Usage**:
```tsx
import { Sidebar } from '@/components/layout/sidebar'

<Sidebar />
```

---

#### 3. Footer
**Path**: `components/layout/footer.tsx`

**Description**: Fixed 32px status bar with path, shortcuts, stats, and live clock.

**Features**:
- Path breadcrumb
- Keyboard shortcuts hint
- Stats display (item count)
- Live clock (updates every second)
- Fixed height: 32px

**Usage**:
```tsx
import { Footer } from '@/components/layout/footer'

<Footer />
```

---

### CLI Components (2)

Terminal-inspired components for command-line interface aesthetics.

#### 4. TerminalOutput
**Path**: `components/cli/terminal-output.tsx`

**Description**: Log display component with timestamps, level badges, and auto-scroll.

**Features**:
- Timestamp prefix (HH:MM:SS format)
- Level badges: INFO, WARN, ERROR, SUCCESS
- Color-coded levels
- Auto-scroll to bottom
- Custom CLI-style scrollbar

**Interface**:
```tsx
interface TerminalOutputProps {
  logs: {
    timestamp: string
    level: 'INFO' | 'WARN' | 'ERROR' | 'SUCCESS'
    message: string
  }[]
  autoScroll?: boolean
  className?: string
}
```

**Usage**:
```tsx
import { TerminalOutput } from '@/components/cli/terminal-output'

<TerminalOutput
  logs={[
    { timestamp: '12:34:56', level: 'INFO', message: 'System started' }
  ]}
  autoScroll={true}
/>
```

---

#### 5. CommandInput
**Path**: `components/cli/command-input.tsx`

**Description**: Input field with terminal prefix (`❯`) and icon.

**Features**:
- Terminal icon in cyan
- Prefix symbol (customizable)
- Focus glow effect
- Monospace font

**Interface**:
```tsx
interface CommandInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  prefix?: string
}
```

**Usage**:
```tsx
import { CommandInput } from '@/components/cli/command-input'

<CommandInput
  placeholder="Enter command..."
  prefix="❯"
  onChange={(e) => setCommand(e.target.value)}
/>
```

---

### UI Components (6+)

Reusable UI components with CLI styling.

#### 6. Button
**Path**: `components/ui/button.tsx`

**Description**: Action buttons with three variants and three sizes.

**Features**:
- Sharp corners
- Hover glow effect
- Focus states
- Icon support

**Variants**:
- `default`: Dark background with light border
- `accent`: Cyan border and text
- `ghost`: Dashed border, minimal appearance

**Sizes**:
- `sm`: 12px font, compact padding
- `md`: 14px font, standard padding
- `lg`: 16px font, large padding

**Interface**:
```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}
```

**Usage**:
```tsx
import { Button } from '@/components/ui/button'

// Default button
<Button>DEFAULT</Button>

// Accent button with icon
<Button variant="accent">
  <Play className="w-4 h-4 mr-2" />
  RUN
</Button>

// Ghost button
<Button variant="ghost">CANCEL</Button>
```

---

#### 7. Badge
**Path**: `components/ui/badge.tsx`

**Description**: Status indicators with angular bracket syntax.

**Features**:
- Six color variants
- Sharp corners
- Border styling
- Works with angular brackets `<TAG>`

**Variants**:
- `default`: Gray background
- `outline`: Transparent background
- `success`: Green (online, running)
- `warning`: Yellow (attention)
- `error`: Red (error, failed)
- `info`: Cyan (information)

**Interface**:
```tsx
interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'error' | 'info'
}
```

**Usage**:
```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="success">&lt;RUNNING&gt;</Badge>
<Badge variant="error">&lt;ERROR&gt;</Badge>
<Badge variant="info">&lt;v1.0.0&gt;</Badge>
```

---

#### 8. Progress
**Path**: `components/ui/progress.tsx`

**Description**: Progress bar indicator with customizable color.

**Features**:
- Sharp corners
- Customizable indicator color
- Smooth transition animation
- ASCII style alternative

**Interface**:
```tsx
interface ProgressProps {
  value?: number
  max?: number
  className?: string
  indicatorClassName?: string
}
```

**Usage**:
```tsx
import { Progress } from '@/components/ui/progress'

// Standard progress
<Progress value={75} />

// Custom color
<Progress value={50} indicatorClassName="bg-[#00ff88]" />
```

---

#### 9. Card
**Path**: `components/ui/card.tsx`

**Description**: Content container with styled header and body.

**Features**:
- Styled header with border bottom
- Content padding
- Sharp corners
- Consistent borders

**Sub-components**:
- `CardHeader`: Container for title/description
- `CardTitle`: Card heading
- `CardDescription`: Subtitle text
- `CardContent`: Main content area

**Usage**:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here...
  </CardContent>
</Card>
```

---

#### 10. Tabs
**Path**: `components/ui/tabs.tsx`

**Description**: Tab navigation component for switching views.

**Features**:
- Multiple tab triggers
- Content panels
- Keyboard navigation
- Sharp styling

**Sub-components**:
- `Tabs`: Container
- `TabsList`: Tab buttons container
- `TabsTrigger`: Individual tab button
- `TabsContent`: Tab content panel

**Usage**:
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings...
  </TabsContent>
  <TabsContent value="password">
    Password settings...
  </TabsContent>
</Tabs>
```

---

#### 11. Input
**Path**: `components/ui/input.tsx`

**Description**: Form input field with CLI styling.

**Features**:
- Sharp corners
- Focus states
- Error states
- Monospace font

**Interface**:
```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
```

**Usage**:
```tsx
import { Input } from '@/components/ui/input'

<Input
  placeholder="Enter value..."
  type="text"
  className="w-full"
/>
```

---

## Component Quick Reference Table

| Component | Type | File | Props | Default Style |
|-----------|------|------|-------|---------------|
| Header | Layout | `layout/header.tsx` | `className` | 48px height |
| Sidebar | Layout | `layout/sidebar.tsx` | `className` | 240px width |
| Footer | Layout | `layout/footer.tsx` | `className` | 32px height |
| TerminalOutput | CLI | `cli/terminal-output.tsx` | `logs, autoScroll, className` | Dark bg |
| CommandInput | CLI | `cli/command-input.tsx` | `className, prefix, ...inputProps` | Terminal prefix |
| Button | UI | `ui/button.tsx` | `variant, size, className` | Sharp corners |
| Badge | UI | `ui/badge.tsx` | `variant, className` | Angular syntax |
| Progress | UI | `ui/progress.tsx` | `value, max, className` | Sharp bar |
| Card | UI | `ui/card.tsx` | `className` | Container |
| Tabs | UI | `ui/tabs.tsx` | `defaultValue, className` | Tab group |
| Input | UI | `ui/input.tsx` | `className, ...inputProps` | Form field |

---

## Component Composition Examples

### Dashboard Layout

```tsx
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          {/* Main content */}
        </main>
      </div>
      <Footer />
    </div>
  )
}
```

---

### Terminal Console

```tsx
import { TerminalOutput } from '@/components/cli/terminal-output'
import { CommandInput } from '@/components/cli/command-input'
import { Button } from '@/components/ui/button'

export function ConsolePanel() {
  const [logs, setLogs] = useState([...])
  const [command, setCommand] = useState('')

  return (
    <div className="space-y-4">
      <TerminalOutput logs={logs} autoScroll={true} />
      <div className="flex gap-2">
        <CommandInput
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command..."
        />
        <Button variant="accent">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
```

---

### Status Display

```tsx
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export function StatusPanel() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Badge variant="success">RUNNING</Badge>
        <Badge variant="info">v2.1.0</Badge>
        <Badge variant="warning">HIGH LOAD</Badge>
      </div>
      
      <div className="flex justify-between text-xs text-[#666]">
        <span>CPU Usage</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  )
}
```

---

### Action Toolbar

```tsx
import { Button } from '@/components/ui/button'
import { Play, Download, Trash2, Settings } from 'lucide-react'

export function Toolbar() {
  return (
    <div className="flex gap-2">
      <Button variant="accent" size="sm">
        <Play className="w-4 h-4 mr-2" />
        RUN
      </Button>
      <Button variant="default" size="sm">
        <Download className="w-4 h-4 mr-2" />
        EXPORT
      </Button>
      <Button variant="ghost" size="sm">
        <Trash2 className="w-4 h-4 mr-2" />
        CLEAR
      </Button>
      <Button variant="default" size="sm">
        <Settings className="w-4 h-4" />
      </Button>
    </div>
  )
}
```

---

### Data Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function DataCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>System Status</CardTitle>
          <Badge variant="success">ONLINE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-[#a0a0a0]">
          <div className="flex justify-between">
            <span>Memory Usage</span>
            <span>75%</span>
          </div>
          <Progress value={75} />
        </div>
      </CardContent>
    </Card>
  )
}
```

---

## Component Styling Guidelines

### Sharp Corners

All components use sharp corners by default:

```css
/* Sharp corners */
border-radius: 0;
/* or */
@apply sharp;
```

### Monospace Font

```css
font-family: 'JetBrains Mono', monospace;
```

### Border Colors

```css
/* Default border */
border: 1px solid #2a2a2a;

/* Strong border */
border: 1px solid #3a3a3a;

/* Subtle border */
border: 1px solid #1a1a1a;
```

### Hover Effects

```css
transition: all 150ms ease;

:hover {
  background-color: #1a1a1a;
  border-color: #00d4ff;
}
```

### Focus States

```css
:focus {
  outline: none;
  border-color: #00d4ff;
  box-shadow: 0 0 0 1px #00d4ff;
}
```

---

## Import Paths

All components use absolute imports from the `@` alias:

```tsx
// Layout components
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'

// CLI components
import { TerminalOutput } from '@/components/cli/terminal-output'
import { CommandInput } from '@/components/cli/command-input'

// UI components
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Card } from '@/components/ui/card'
import { Tabs } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'

// Utilities
import { cn } from '@/lib/utils'
```

---

## Component Testing

### Basic Test Pattern

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="accent">Accent</Button>)
    expect(screen.getByText('Accent')).toHaveClass('border-[#00d4ff]')
  })
})
```

---

## Accessibility Checklist

All components should meet these standards:

- [x] Semantic HTML elements
- [x] Proper ARIA attributes
- [x] Keyboard navigation support
- [x] Focus visible states
- [x] Screen reader labels
- [x] Color contrast compliance (WCAG 2.1 AA)
- [x] Reduced motion support

---

**Last Updated**: 2026-07-30  
**Total Components**: 11+  
**Coverage**: Layout, CLI, UI
