'use client'

import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'error' | 'info'
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium',
      'border sharp transition-colors',
      className
    )
    
    const variants = {
      default: 'bg-[#1a1a1a] border-[#3a3a3a] text-[#a0a0a0]',
      outline: 'bg-transparent border-[#3a3a3a] text-[#a0a0a0]',
      success: 'bg-[#00ff8810] border-[#00ff88] text-[#00ff88]',
      warning: 'bg-[#ffcc0010] border-[#ffcc00] text-[#ffcc00]',
      error: 'bg-[#ff444410] border-[#ff4444] text-[#ff4444]',
      info: 'bg-[#00d4ff10] border-[#00d4ff] text-[#00d4ff]'
    }
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant])}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
