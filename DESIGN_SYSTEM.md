# CLI-UI Design System

## Overview

This document defines the design system for CLI-UI, a terminal-inspired interface combining the aesthetics of command-line interfaces with modern UI components.

---

## 1. Colors

### 1.1 Background Colors

```css
--bg-primary: #0a0a0a      /* Main application background */
--bg-elevated: #0f0f0f     /* Elevated surfaces (cards, panels) */
--bg-card: #1a1a1a         /* Card headers, active states */
--bg-footer: #080808       /* Status bar background */
```

### 1.2 Border Colors

```css
--border-subtle: #1a1a1a   /* Subtle dividers */
--border-default: #2a2a2a  /* Default borders */
--border-strong: #3a3a3a   /* Emphasized borders */
```

### 1.3 Text Colors

```css
--text-primary: #ffffff    /* Primary text */
--text-secondary: #a0a0a0  /* Secondary text */
--text-muted: #666666      /* Muted/disabled text */
--text-disabled: #333333   /* Disabled state text */
```

### 1.4 Accent Colors

```css
--accent-cyan: #00d4ff     /* Primary accent */
--accent-green: #00ff88    /* Success states */
--accent-yellow: #ffcc00   /* Warning states */
--accent-red: #ff4444      /* Error states */
--accent-purple: #8888ff   /* Info/special states */
```

### 1.5 Usage Guidelines

**Accent Color Application:**
- Cyan: Primary actions, active states, focus
- Green: Success messages, running status, completion
- Yellow: Warnings, pending status, attention needed
- Red: Errors, failures, destructive actions
- Purple: Information, special features

**Opacity Modifiers:**
- Background with accent: Use 10% opacity (e.g., `bg-[#00d4ff10]`)
- Hover states: Use 20% opacity (e.g., `bg-[#00d4ff20]`)
- Glow effects: Use rgba with 0.3 alpha

---

## 2. Typography

### 2.1 Font Stack

```css
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

### 2.2 Type Scale

| Name | Size | Weight | Letter Spacing | Usage |
|------|------|--------|----------------|-------|
| h1 | 24px | 700 | 0.05em | Page titles |
| h2 | 20px | 600 | 0.03em | Section headers |
| h3 | 16px | 600 | normal | Subsections |
| body | 14px | 400 | normal | Body text |
| small | 12px | 500 | 0.05em | Labels, captions |
| tiny | 10px | 500 | 0.05em | Status bar, metadata |

### 2.3 Text Transforms

- **Headers**: All uppercase
- **Labels**: All uppercase
- **Body**: Sentence case
- **Code**: Preserve case

### 2.4 Line Heights

```css
--line-height-tight: 1.2    /* Headers */
--line-height-normal: 1.5   /* Body text */
--line-height-loose: 1.75   /* Logs, terminal output */
```

---

## 3. Spacing

### 3.1 Base Unit

Base unit: **4px**

### 3.2 Spacing Scale

```
0: 0px
1: 4px    (0.25rem)
2: 8px    (0.5rem)
3: 12px   (0.75rem)
4: 16px   (1rem)
5: 20px   (1.25rem)
6: 24px   (1.5rem)
8: 32px   (2rem)
10: 40px  (2.5rem)
12: 48px  (3rem)
```

### 3.3 Layout Spacing

```css
/* Header */
header-height: 48px
header-padding: 16px

/* Sidebar */
sidebar-width: 240px
sidebar-collapsed-width: 48px

/* Footer */
footer-height: 32px
footer-padding: 16px

/* Main Content */
content-padding: 24px
content-max-width: 1280px
```

---

## 4. Components

### 4.1 Buttons

#### Variants

**Default:**
```css
background: #1a1a1a
border: 1px solid #3a3a3a
color: #ffffff
hover-bg: #2a2a2a
hover-border: #00d4ff
```

**Accent:**
```css
background: rgba(0, 212, 255, 0.06)
border: 1px solid #00d4ff
color: #00d4ff
hover-bg: rgba(0, 212, 255, 0.12)
```

**Ghost:**
```css
background: transparent
border: 1px dashed #3a3a3a
color: #a0a0a0
hover-bg: #1a1a1a
hover-color: #ffffff
```

#### Sizes

| Size | Padding-X | Padding-Y | Font Size |
|------|-----------|-----------|-----------|
| sm | 12px | 6px | 12px |
| md | 16px | 8px | 14px |
| lg | 24px | 12px | 16px |

#### States

```css
/* Disabled */
opacity: 0.5
cursor: not-allowed
pointer-events: none

/* Focus */
border-color: #00d4ff
outline: none
box-shadow: 0 0 10px 1px rgba(0, 212, 255, 0.3)

/* Active */
transform: scale(0.98)
```

### 4.2 Badges

#### Variants

All badges use angular bracket syntax and sharp corners.

```css
/* Default */
background: #1a1a1a
border: 1px solid #3a3a3a
color: #a0a0a0

/* Success */
background: rgba(0, 255, 136, 0.06)
border: 1px solid #00ff88
color: #00ff88

/* Warning */
background: rgba(255, 204, 0, 0.06)
border: 1px solid #ffcc00
color: #ffcc00

/* Error */
background: rgba(255, 68, 68, 0.06)
border: 1px solid #ff4444
color: #ff4444

/* Info */
background: rgba(0, 212, 255, 0.06)
border: 1px solid #00d4ff
color: #00d4ff
```

#### Content Format

Badges should use angular bracket syntax:
```
<RUNNING>
<ERROR>
<v1.0.0>
```

### 4.3 Input Fields

#### Command Input

```css
background: #0a0a0a
border: 1px solid #3a3a3a
padding-left: 64px  /* Space for prefix and icon */
padding-right: 16px
padding-top: 8px
padding-bottom: 8px
font-size: 14px
color: #ffffff
```

**Prefix:**
- Symbol: `❯` or `$`
- Color: #00d4ff
- Font weight: bold
- Icon: Terminal (16px)

**Focus State:**
```css
border-color: #00d4ff
box-shadow: 0 0 0 1px #00d4ff
```

**Placeholder:**
```css
color: #666666
font-style: normal
```

### 4.4 Terminal Output

#### Container

```css
background: #0f0f0f
border: 1px solid #2a2a2a
font-family: monospace
font-size: 14px
line-height: 1.75
```

#### Header

```css
background: #1a1a1a
border-bottom: 1px solid #2a2a2a
padding: 8px 16px
font-size: 12px
text-transform: uppercase
letter-spacing: 0.05em
color: #666666
```

Format: `// output ────────────────────`

#### Log Entry

```css
display: flex
gap: 8px
padding: 2px 0
```

**Timestamp:**
```css
color: #666666
width: 80px
flex-shrink: 0
```

**Level Badge:**
```css
font-weight: bold
width: 56px
flex-shrink: 0
```

Level colors:
- INFO: #00d4ff
- WARN: #ffcc00
- ERROR: #ff4444
- SUCCESS: #00ff88

**Message:**
```css
color: #a0a0a0
word-break: break-all
```

### 4.5 Progress Bars

#### Container

```css
background: #1a1a1a
border: 1px solid #2a2a2a
height: 8px
overflow: hidden
```

#### Indicator

```css
background: #00d4ff
transition: width 0.3s ease
```

#### Variants

```css
/* Success */
background-color: #00ff88

/* Warning */
background-color: #ffcc00

/* Error */
background-color: #ff4444
```

#### ASCII Style Alternative

```css
font-family: monospace
font-size: 12px
color: #a0a0a0
```

Format: `[████████░░░░░░] 60%`

### 4.6 Tables

#### Container

```css
background: #0f0f0f
border: 1px solid #2a2a2a
overflow-x: auto
```

#### Header

```css
background: #1a1a1a
border-bottom: 1px solid #2a2a2a
font-size: 12px
text-transform: uppercase
letter-spacing: 0.05em
color: #666666
```

#### Rows

```css
/* Even rows */
background: #0a0a0a

/* Odd rows */
background: #0f0f0f

/* Hover */
background: #1a1a1a
border-left: 2px solid #00d4ff
```

#### Cells

```css
padding: 8px 16px
font-size: 14px
border-bottom: 1px solid #1a1a1a
```

### 4.7 Cards

#### Container

```css
background: #0f0f0f
border: 1px solid #2a2a2a
```

#### Header

```css
background: #1a1a1a
border-bottom: 1px solid #2a2a2a
padding: 12px 16px
```

#### Title

```css
font-size: 14px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.05em
color: #666666
```

Format: `// section-name ─────────────`

#### Content

```css
padding: 16px
```

### 4.8 Tabs

#### Container

```css
display: flex
gap: 0
align-items: center
```

Format: `[ tab1 | tab2 | tab3 ]`

#### Tab Item

```css
/* Inactive */
color: #a0a0a0
padding: 8px 12px
hover-background: #1a1a1a

/* Active */
background: #1a1a1a
border: 1px solid #00d4ff
color: #00d4ff
```

#### Divider

```css
color: #3a3a3a
padding: 0 4px
```

### 4.9 Modals / Dialogs

#### Overlay

```css
background: rgba(0, 0, 0, 0.8)
position: fixed
inset: 0
```

#### Box

```css
background: #0f0f0f
border: 1px solid #3a3a3a
padding: 0
min-width: 480px
max-width: 640px
```

#### Header

```css
background: #1a1a1a
border-bottom: 1px solid #2a2a2a
padding: 16px
display: flex
justify-content: space-between
align-items: center
```

#### Close Button

```css
position: absolute
top: 16px
right: 16px
background: transparent
border: none
color: #666666
font-size: 20px
cursor: pointer
hover-color: #ffffff
```

Format: `[X]`

#### Animation

```css
animation: fadeIn 150ms ease-out
transform-origin: center center
```

### 4.10 Toasts / Notifications

#### Container

```css
position: fixed
bottom: 48px
right: 24px
display: flex
flex-direction: column
gap: 8px
max-width: 400px
z-index: 9999
```

#### Toast Item

```css
background: #0f0f0f
border: 1px solid #2a2a2a
padding: 12px 16px
display: flex
gap: 12px
align-items: flex-start
```

#### Format

```
[14:20:01] ✖ Action failed: Item not found
```

**Timestamp:**
```css
color: #666666
font-size: 12px
```

**Icon:**
```css
width: 16px
height: 16px
flex-shrink: 0
```

Icon colors match severity:
- success: #00ff88
- error: #ff4444
- warning: #ffcc00

**Message:**
```css
color: #a0a0a0
font-size: 14px
```

#### Auto-dismiss

```css
animation: slideIn 150ms ease-out
transition: opacity 150ms ease-out
```

Duration: 5 seconds

---

## 5. Layout Patterns

### 5.1 Header-Sidebar-Footer

```
┌─────────────────────────────┐
│         Header (48px)       │
├──────────┬──────────────────┤
│          │                  │
│ Sidebar  │   Main Content   │
│ (240px)  │                  │
│          │                  │
├──────────┴──────────────────┤
│      Footer (32px)          │
└─────────────────────────────┘
```

### 5.2 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  sidebar: hidden
  header: collapse to icons
  footer: simplify
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  sidebar: collapsible
  main: full width when collapsed
}

/* Desktop */
@media (min-width: 1025px) {
  sidebar: always visible
  main: max-width 1280px
}
```

### 5.3 Grid Systems

#### Dashboard Grid

```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 24px
```

#### Stats Grid

```css
grid-template-columns: repeat(4, 1fr)
gap: 16px
```

---

## 6. Interactions

### 6.1 Hover Effects

#### Default Hover

```css
transition: all 150ms ease
background-color: #1a1a1a
border-color: #00d4ff
```

#### Glow Effect

```css
box-shadow: 0 0 10px 1px rgba(0, 212, 255, 0.3)
```

### 6.2 Focus States

```css
outline: none
border-color: #00d4ff
box-shadow: 0 0 0 1px #00d4ff
```

### 6.3 Active States

```css
transform: scale(0.98)
transition-duration: 50ms
```

### 6.4 Transitions

```css
transition-timing-function: ease
transition-duration: 150ms

/* Fast interactions */
button: 150ms
hover: 150ms

/* Slow transitions */
progress: 300ms
fade: 200ms
```

---

## 7. Accessibility

### 7.1 Color Contrast

All text meets WCAG 2.1 AA standards:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

### 7.2 Keyboard Navigation

- Tab order follows visual flow
- Focus visible on all interactive elements
- Escape closes modals and dropdowns
- Enter/Space activates buttons

### 7.3 Screen Reader Support

- Semantic HTML elements
- ARIA labels where needed
- Icon buttons have accessible names
- Status updates use live regions

### 7.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## 8. Examples

### 8.1 Button Combinations

```tsx
// Primary action toolbar
<div className="flex gap-2">
  <Button variant="accent">
    <Play className="w-4 h-4 mr-2" />
    RUN
  </Button>
  <Button variant="default">
    <Download className="w-4 h-4 mr-2" />
    EXPORT
  </Button>
  <Button variant="ghost">
    <Trash2 className="w-4 h-4 mr-2" />
    CLEAR
  </Button>
</div>
```

### 8.2 Status Display

```tsx
<div className="flex items-center gap-2">
  <Badge variant="success">&lt;RUNNING&gt;</Badge>
  <Badge variant="info">&lt;v2.1.0&gt;</Badge>
  <Badge variant="warning">&lt;LOAD: 85%&gt;</Badge>
</div>
```

### 8.3 Form with Feedback

```tsx
<form className="space-y-4">
  <div>
    <label className="text-xs uppercase text-[#666] tracking-wide">
      Command
    </label>
    <CommandInput placeholder="Enter command..." />
  </div>
  
  <div className="flex items-center gap-2">
    <Button type="submit" variant="accent">EXECUTE</Button>
    <Badge variant="error" if={error}>
      &lt;ERROR&gt;
    </Badge>
  </div>
</form>
```

---

## 9. Iconography

### 9.1 Icon Library

**Lucide React** - Consistent 24x24 grid icons

### 9.2 Common Icons

| Use Case | Icon |
|----------|------|
| Terminal | `<Terminal />` |
| Settings | `<Settings />` |
| Play/Run | `<Play />` |
| Stop | `<Square />` |
| Download | `<Download />` |
| Upload | `<Upload />` |
| Delete | `<Trash2 />` |
| Edit | `<Edit />` |
| View | `<Eye />` |
| Refresh | `<RefreshCw />` |
| Error | `<XCircle />` |
| Success | `<CheckCircle2 />` |
| Warning | `<AlertTriangle />` |
| Info | `<Info />` |

### 9.3 Icon Sizes

```css
small: 16px (1rem)
default: 20px (1.25rem)
large: 24px (1.5rem)
```

### 9.4 Icon Colors

Icons follow the text color context or use accent colors for status.

---

## 10. Animation Keyframes

### 10.1 Fade In

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### 10.2 Slide In

```css
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### 10.3 Cursor Blink

```css
@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
```

Usage: `animation: blink 1s infinite`

---

## 11. Implementation Checklist

### Component Development

- [ ] Sharp corners (no border-radius)
- [ ] Monospace font throughout
- [ ] Correct color palette
- [ ] Hover/focus states
- [ ] Disabled states
- [ ] Loading states
- [ ] Responsive behavior
- [ ] Keyboard navigation
- [ ] Screen reader support

### Page Layout

- [ ] Header fixed at 48px
- [ ] Sidebar at 240px (collapsible)
- [ ] Footer fixed at 32px
- [ ] Main content padding 24px
- [ ] Max width 1280px
- [ ] Mobile responsive

### Theme Configuration

- [ ] All CSS variables defined
- [ ] Dark mode support (default)
- [ ] Custom scrollbar
- [ ] Custom utilities (sharp, glow, etc.)
- [ ] Font imports configured

---

**Version**: 1.0.0  
**Last Updated**: 2026-07-30  
**Maintained By**: CLI-UI Design Team
