---

## Deployment

### Production Build

```bash
# Build optimization check
npm run build

# Start production server
npm start
```

### Platform Requirements

- Node.js 18+
- Environment variables for API endpoints
- Port configuration (default: 3000)

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## 🎛️ Configuration

### Tailwind Configuration

The application uses Tailwind CSS v4 with inline theme configuration in `globals.css`. No separate `tailwind.config.js` file is needed.

### Font Configuration

The application uses JetBrains Mono as the primary font. To change fonts:

1. Update import in `app/layout.tsx`
2. Modify CSS variables in `app/globals.css`

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Minimum supported versions follow Next.js 16 baseline.

## 🎯 Component API Reference

### Button

```tsx
interface ButtonProps {
  variant?: 'default' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}
```

### Badge

```tsx
interface BadgeProps {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}
```

### Progress

```tsx
interface ProgressProps {
  value?: number
  max?: number
  className?: string
  indicatorClassName?: string
}
```

### TerminalOutput

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

### CommandInput

```tsx
interface CommandInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  className?: string
}
```

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### Code Quality

- TypeScript strict mode enabled
- ESLint rules configured
- Component documentation required
- Test coverage for utilities

---

**Last Updated**: 2026-07-30
