'use client'

import { cn } from '@/lib/utils'
import { Terminal as TerminalIcon, Settings, FolderOpen, FileText, GitBranch, X } from 'lucide-react'

interface SidebarProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ className, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        'fixed lg:static inset-y-0 left-0 z-50',
        'w-64 bg-[#0a0a0a] border-r border-[#2a2a2a] py-4',
        'transform transition-transform duration-200 ease-in-out',
        'lg:transform-none',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        className
      )}>
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end px-4 mb-2">
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#1a1a1a]"
          >
            <X className="w-4 h-4 text-[#a0a0a0]" />
          </button>
        </div>
        
        {/* Create Button */}
        <div className="px-4 mb-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#00d4ff10] border border-[#00d4ff] text-[#00d4ff] text-xs font-mono font-medium hover:bg-[#00d4ff20] transition-colors">
            <span className="text-lg leading-none">+</span>
            NEW PROMPT
          </button>
        </div>
        
        {/* Search */}
        <div className="px-4 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#0a0a0a] border border-[#3a3a3a] px-3 py-2 text-xs text-[#ffffff] placeholder:text-[#666] focus:outline-none focus:border-[#00d4ff]"
            />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="px-2 space-y-6 overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-cli">
          {/* Section 1: Main */}
          <div>
            <div className="px-2 mb-2 text-xs uppercase tracking-wider text-[#666]">
              // ──── main ────
            </div>
            <div className="space-y-0.5">
              <SidebarItem icon={<TerminalIcon className="w-4 h-4" />} label="All Prompts" active count={42} />
              <SidebarItem icon={<FolderOpen className="w-4 h-4" />} label="Categories" />
              <SidebarItem icon={<FileText className="w-4 h-4" />} label="Tags" />
            </div>
          </div>
          
          {/* Section 2: Filters */}
          <div>
            <div className="px-2 mb-2 text-xs uppercase tracking-wider text-[#666]">
              // ──── filters ────
            </div>
            <div className="space-y-0.5">
              <SidebarItem icon={<GitBranch className="w-4 h-4" />} label="By Category" />
              <SidebarItem icon={<Settings className="w-4 h-4" />} label="By Tag" />
            </div>
          </div>
          
          {/* Section 3: System */}
          <div>
            <div className="px-2 mb-2 text-xs uppercase tracking-wider text-[#666]">
              // ──── system ────
            </div>
            <div className="space-y-0.5">
              <SidebarItem icon={<TerminalIcon className="w-4 h-4" />} label="Export Data" />
              <SidebarItem icon={<Settings className="w-4 h-4" />} label="Settings" />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  count?: number
}

function SidebarItem({ icon, label, active, count }: SidebarItemProps) {
  return (
    <button
      className={cn(
        'w-full flex items-center justify-between gap-3 px-3 py-2 text-xs transition-colors',
        'hover:bg-[#1a1a1a] hover:text-white',
        active ? 'bg-[#1a1a1a] text-[#00d4ff] border-l-2 border-[#00d4ff]' : 'text-[#a0a0a0]'
      )}
    >
      <div className="flex items-center gap-3">
        <span className="shrink-0">{icon}</span>
        <span>{label}</span>
      </div>
      {count !== undefined && (
        <span className="text-[10px] text-[#666]">[{count}]</span>
      )}
    </button>
  )
}
