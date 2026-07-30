'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

interface ProgressProps {
  value?: number
  max?: number
  className?: string
  indicatorClassName?: string
}

function Progress({ value = 0, max = 100, className, indicatorClassName }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  return (
    <div
      className={cn(
        'relative h-2 w-full overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] sharp',
        className
      )}
    >
      <div
        className={cn(
          'h-full bg-[#00d4ff] transition-all duration-300 sharp',
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  )
}

export { Progress }
