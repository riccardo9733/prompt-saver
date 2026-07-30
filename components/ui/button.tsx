'use client'

import { cn } from '@/lib/utils'
import { forwardRef, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = cn(
      'font-mono text-sm font-medium transition-all duration-150',
      'hover:border-[#00d4ff] hover:shadow-[0_0_10px_1px_rgba(0,212,255,0.3)]',
      'focus:outline-none focus:border-[#00d4ff]',
      'sharp',
      className
    )
    
    const variants = {
      default: cn(
        'bg-[#1a1a1a] border border-[#3a3a3a] text-[#ffffff]',
        'hover:bg-[#2a2a2a]'
      ),
      accent: cn(
        'bg-[#00d4ff10] border border-[#00d4ff] text-[#00d4ff]',
        'hover:bg-[#00d4ff20]'
      ),
      ghost: cn(
        'bg-transparent border border-dashed border-[#3a3a3a] text-[#a0a0a0]',
        'hover:bg-[#1a1a1a] hover:text-[#ffffff]'
      )
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-base'
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size])}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
