'use client'

import { cn } from '@/lib/utils'
import { Terminal, Wifi, AlertCircle, CheckCircle2, Menu, X } from 'lucide-react'

interface HeaderProps {
  className?: string
  onMenuToggle?: () => void
  showMobileMenu?: boolean
}

export function Header({ className, onMenuToggle, showMobileMenu = false }: HeaderProps) {
  return (
    <header className={cn(
      'h-12 flex items-center justify-between px-4',
      'bg-[#0a0a0a] border-b border-[#2a2a2a]',
      className
    )}>
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1 hover:bg-[#1a1a1a] rounded-none"
        >
          {showMobileMenu ? (
            <X className="w-4 h-4 text-[#a0a0a0]" />
          ) : (
            <Menu className="w-4 h-4 text-[#a0a0a0]" />
          )}
        </button>
        
        <span className="text-[#00d4ff] font-bold">{'>_'}</span>
        <span className="font-mono font-bold text-sm tracking-wide hidden sm:inline">CLI-UI</span>
      </div>
      
      {/* Navigation Tabs - Hidden on mobile */}
      <nav className="hidden lg:flex items-center gap-1">
        <span className="text-[#666]">[</span>
        <button className="px-3 py-1 text-xs hover:bg-[#1a1a1a] transition-colors">
          DASHBOARD
        </button>
        <span className="text-[#666]">|</span>
        <button className="px-3 py-1 text-xs bg-[#1a1a1a] border border-[#00d4ff] text-[#00d4ff]">
          PROMPTS
        </button>
        <span className="text-[#666]">|</span>
        <button className="px-3 py-1 text-xs hover:bg-[#1a1a1a] transition-colors">
          SETTINGS
        </button>
        <span className="text-[#666]">]</span>
      </nav>
      
      {/* Status Indicators */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs">
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
          <span className="text-[#a0a0a0]">ONLINE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 text-[#00d4ff]" />
          <span className="hidden sm:inline text-[#a0a0a0]">READY</span>
        </div>
      </div>
    </header>
  )
}
