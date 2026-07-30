'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

interface LogEntry {
  timestamp: string
  level: 'INFO' | 'WARN' | 'ERROR' | 'SUCCESS'
  message: string
}

interface TerminalOutputProps {
  logs: LogEntry[]
  className?: string
  autoScroll?: boolean
}

export function TerminalOutput({ logs, className, autoScroll = true }: TerminalOutputProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [logs, autoScroll])
  
  const getLevelStyles = (level: LogEntry['level']) => {
    switch (level) {
      case 'INFO':
        return 'text-[#00d4ff]'
      case 'WARN':
        return 'text-[#ffcc00]'
      case 'ERROR':
        return 'text-[#ff4444]'
      case 'SUCCESS':
        return 'text-[#00ff88]'
      default:
        return 'text-[#a0a0a0]'
    }
  }
  
  return (
    <div className={cn(
      'bg-[#0f0f0f] border border-[#2a2a2a] overflow-hidden',
      className
    )}>
      {/* Header */}
      <div className="px-4 py-2 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <span className="text-xs uppercase tracking-wider text-[#666]">
          // output ────────────────────
        </span>
      </div>
      
      {/* Logs */}
      <div 
        ref={containerRef}
        className="p-4 font-mono text-sm h-96 overflow-y-auto scrollbar-cli"
      >
        {logs.map((log, index) => (
          <div key={index} className="flex items-start gap-2 mb-1">
            <span className="text-[#666] shrink-0">{log.timestamp} |</span>
            <span className={cn(
              'shrink-0 font-bold w-14',
              getLevelStyles(log.level)
            )}>
              [{log.level}]
            </span>
            <span className="text-[#a0a0a0] break-all">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
