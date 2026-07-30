'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Keyboard, HardDrive, Clock } from 'lucide-react'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
  
  return (
    <footer className={cn(
      'h-8 flex items-center justify-between px-3 sm:px-4',
      'bg-[#080808] border-t border-[#1a1a1a]',
      'text-[9px] sm:text-[10px] uppercase tracking-wide text-[#666]',
      className
    )}>
      {/* Path Breadcrumb - Hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2">
        <span>[</span>
        <span className="text-[#a0a0a0]">/prompt-manager</span>
        <span>]</span>
      </div>
      
      {/* Stats & Info */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1">
          <HardDrive className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="hidden xs:inline">localStorage</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Keyboard className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="hidden sm:inline">CLI MODE</span>
        </div>
      </div>
      
      {/* Clock - Only render after mount to avoid hydration mismatch */}
      <div className="flex items-center gap-1">
        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span>{mounted ? formatTime(currentTime) : '--:--:--'}</span>
      </div>
    </footer>
  )
}
