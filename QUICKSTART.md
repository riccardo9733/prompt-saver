# Quick Start Guide

Get up and running with CLI-UI in under 5 minutes.

---

## Prerequisites

- **Node.js**: 18.0 or higher
- **npm**: 9.0 or higher (or yarn/pnpm)

Check your versions:

```bash
node --version
npm --version
```

---

## Installation

### Step 1: Clone Repository

```bash
# Clone the repository
git clone <repository-url> cli-ui

# Navigate to project
cd cli-ui
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- Next.js 16+
- React 19+
- Tailwind CSS 4+
- shadcn/ui components
- Lucide React icons
- JetBrains Mono font

---

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://<your-ip>:3000

### Available Routes

| Route | Description |
|-------|-------------|
| `/` | Main dashboard |
| `/showcase` | Component showcase |

### Hot Reload

Changes to your code automatically trigger:
- Fast Refresh (React components)
- CSS updates
- TypeScript compilation

---

## Project Structure

```
cli-ui/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── showcase/page.tsx    # Component showcase
│   └── globals.css          # Global styles
│
├── components/
│   ├── layout/              # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   │
│   ├── cli/                 # CLI components
│   │   ├── terminal-output.tsx
│   │   └── command-input.tsx
│   │
│   └── ui/                  # UI components
│       ├── button.tsx
│       ├── badge.tsx
│       ├── progress.tsx
│       ├── card.tsx
│       ├── tabs.tsx
│       └── input.tsx
│
├── lib/
│   └── utils.ts             # Utilities (cn function)
│
└── public/                  # Static assets
```

---

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in `.next/` directory.

### Start Production Server

```bash
npm start
```

The production server runs on http://localhost:3000

### Build Output

```
✓ Creating an optimized production build ...
✓ Compiled successfully in 12.3s
✓ Linting checked
✓ Typescript verified
```

---

## Adding Components

### 1. Add shadcn/ui Component

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add dialog
```

### 2. Create Custom Component

Create file in `components/` directory:

```tsx
// components/ui/dialog.tsx
'use client'

import { cn } from '@/lib/utils'

interface DialogProps {
  className?: string
  // ... other props
}

export function Dialog({ className, ...props }: DialogProps) {
  return (
    <div className={cn('bg-[#0f0f0f] border border-[#3a3a3a]', className)}>
      {/* Component content */}
    </div>
  )
}
```

### 3. Import Component

```tsx
import { Dialog } from '@/components/ui/dialog'
```

---

## Styling Guide

### Using Tailwind Classes

```tsx
<div className="bg-[#0a0a0a] border border-[#2a2a2a] p-4">
  <h1 className="text-xl font-bold uppercase text-[#00d4ff]">
    Title
  </h1>
</div>
```

### Using CSS Variables

```tsx
<div className="bg-bg-primary border border-border-default">
  {/* Content */}
</div>
```

### Using cn Utility

```tsx
import { cn } from '@/lib/utils'

function MyComponent({ active, className }) {
  return (
    <div className={cn(
      'p-4 border transition-colors',
      active ? 'bg-[#1a1a1a] text-[#00d4ff]' : 'bg-[#0a0a0a]',
      className
    )}>
      {/* Content */}
    </div>
  )
}
```

---

## Common Tasks

### Adding a New Page

1. Create directory in `app/`:
```bash
mkdir app/dashboard
```

2. Create `page.tsx`:
```tsx
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
```

3. Navigate to `/dashboard`

### Adding Navigation Item

Edit `components/layout/sidebar.tsx`:

```tsx
<SidebarItem 
  icon={<Home className="w-4 h-4" />} 
  label="Home" 
  href="/"
/>
```

### Changing Theme Colors

Edit `app/globals.css`:

```css
:root {
  --accent-cyan: #00d4ff;  /* Change to desired color */
}
```

---

## Debugging

### TypeScript Errors

Run type checking:

```bash
npx tsc --noEmit
```

### ESLint Issues

Run linting:

```bash
npm run lint
```

### Build Errors

Check Next.js documentation:
```
node_modules/next/dist/docs/
```

### Console Debugging

Common issues:
- **Hydration errors**: Check client/server component boundaries
- **CSS not loading**: Verify CSS imports in layout
- **Font missing**: Check font imports in layout

---

## Best Practices

### Component Structure

```tsx
'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface Props {
  className?: string
  variant?: 'default' | 'accent'
}

const Component = forwardRef<HTMLElement, Props>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    )
  }
)

Component.displayName = 'Component'

export { Component }
```

### File Naming

- **Components**: `PascalCase.tsx`
- **Utilities**: `camelCase.ts`
- **Directories**: `kebab-case/`

### Imports Order

```tsx
1. React imports
2. Next.js imports
3. Third-party libraries
4. shadcn/ui components
5. Local components
6. Local utilities
7. CSS imports
```

---

## Troubleshooting

### Issue: Port 3000 already in use

**Solution**: Use a different port

```bash
PORT=3001 npm run dev
```

### Issue: TypeScript errors in components

**Solution**: Check tsconfig.json configuration

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Issue: Styles not updating

**Solution**: Clear Next.js cache

```bash
rm -rf .next
npm run dev
```

---

## Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

### Design System

- `DESIGN_SYSTEM.md` - Complete design system documentation
- `README.md` - Project overview and setup

---

## Next Steps

1. ✅ Start development server
2. ✅ Explore component showcase at `/showcase`
3. ✅ Read DESIGN_SYSTEM.md for guidelines
4. ✅ Create your first custom component
5. ✅ Build a sample page

Happy coding! 🚀
