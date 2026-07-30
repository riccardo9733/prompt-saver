'use client'

import { cn } from '@/lib/utils'
import { Terminal } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'

interface CommandInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  prefix?: string
}

const CommandInput = forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, prefix = '❯', ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
          <Terminal className="w-4 h-4 text-[#00d4ff]" />
          <span className="text-[#00d4ff] font-bold">{prefix}</span>
        </div>
        <input
          ref={ref}
          className={cn(
            'w-full bg-[#0a0a0a] border border-[#3a3a3a]',
            'pl-16 pr-4 py-2',
            'text-[#ffffff] font-mono text-sm',
            'placeholder:text-[#666]',
            'focus:outline-none focus:border-[#00d4ff]',
            'transition-colors',
            'sharp'
          )}
          {...props}
        />
      </div>
    )
  }
)

CommandInput.displayName = 'CommandInput'

export { CommandInput }
