'use client'

import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CommandInput } from '@/components/cli/command-input'
import { TerminalOutput } from '@/components/cli/terminal-output'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Play, Download, Trash2, Settings, Terminal, Wifi } from 'lucide-react'

export default function ComponentsShowcase() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-[#ffffff]">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wider mb-2">
                Component Showcase
              </h1>
              <p className="text-sm text-[#a0a0a0] font-mono">
                // All available CLI-styled components
              </p>
            </div>
            
            {/* Buttons Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [1] Buttons
              </h2>
              <div className="flex flex-wrap gap-4 p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
                <Button variant="default">DEFAULT</Button>
                <Button variant="accent">ACCENT</Button>
                <Button variant="ghost">GHOST</Button>
                <Button variant="default" size="sm">SMALL</Button>
                <Button variant="accent" size="lg">LARGE</Button>
                <Button variant="default" disabled>DISABLED</Button>
                <Button variant="accent">
                  <Play className="w-4 h-4 mr-2" />
                  WITH ICON
                </Button>
              </div>
            </section>
            
            {/* Badges Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [2] Badges
              </h2>
              <div className="flex flex-wrap gap-4 p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
                <Badge variant="default">&lt;DEFAULT&gt;</Badge>
                <Badge variant="outline">&lt;OUTLINE&gt;</Badge>
                <Badge variant="success">&lt;SUCCESS&gt;</Badge>
                <Badge variant="warning">&lt;WARNING&gt;</Badge>
                <Badge variant="error">&lt;ERROR&gt;</Badge>
                <Badge variant="info">&lt;INFO&gt;</Badge>
              </div>
            </section>
            
            {/* Progress Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [3] Progress Indicators
              </h2>
              <div className="space-y-4 p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
                <div>
                  <div className="flex justify-between text-xs text-[#666] uppercase mb-2">
                    <span>Standard Progress</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-[#666] uppercase mb-2">
                    <span>Custom Color</span>
                    <span>50%</span>
                  </div>
                  <Progress value={50} indicatorClassName="bg-[#00ff88]" />
                </div>
                <div>
                  <div className="flex justify-between text-xs text-[#666] uppercase mb-2">
                    <span>ASCII Style</span>
                    <span>60%</span>
                  </div>
                  <div className="text-xs font-mono text-[#a0a0a0]">
                    [████████████░░░░░░░░] 60%
                  </div>
                </div>
              </div>
            </section>
            
            {/* Command Input Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [4] Command Input
              </h2>
              <div className="p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
                <CommandInput placeholder="Type a command..." />
              </div>
            </section>
            
            {/* Terminal Output Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [5] Terminal Output
              </h2>
              <TerminalOutput
                logs={[
                  { timestamp: '14:20:01', level: 'INFO', message: 'Application started successfully' },
                  { timestamp: '14:20:02', level: 'SUCCESS', message: 'Database connection established' },
                  { timestamp: '14:20:03', level: 'WARN', message: 'Cache miss rate above threshold' },
                  { timestamp: '14:20:04', level: 'ERROR', message: 'Failed to load configuration file' },
                ]}
              />
            </section>
            
            {/* Layout Components Section */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [6] Layout Components
              </h2>
              <div className="space-y-4 p-4 bg-[#0f0f0f] border border-[#2a2a2a]">
                <div className="text-sm text-[#a0a0a0] mb-2">
                  <p>The application uses three main layout components:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-[#666]">
                    <li><span className="text-[#00d4ff]">Header</span> - Top navigation bar with tabs and status</li>
                    <li><span className="text-[#00d4ff]">Sidebar</span> - Left navigation panel with categorized menus</li>
                    <li><span className="text-[#00d4ff]">Footer</span> - Status bar with path, shortcuts, and clock</li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#666]">
                    <Terminal className="w-4 h-4" />
                    <span>Header: 48px height</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#666]">
                    <Wifi className="w-4 h-4" />
                    <span>Sidebar: 240px width</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#666]">
                    <Settings className="w-4 h-4" />
                    <span>Footer: 32px height</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Usage Examples */}
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 text-[#00d4ff]">
                [7] Usage Examples
              </h2>
              <div className="p-4 bg-[#0f0f0f] border border-[#2a2a2a] space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#666] mb-2">
                    Action Toolbar
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="accent" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      RUN
                    </Button>
                    <Button variant="default" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      EXPORT
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      CLEAR
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold uppercase text-[#666] mb-2">
                    Status Display
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="success">RUNNING</Badge>
                    <Badge variant="info">v2.1.0</Badge>
                    <Badge variant="warning">LOAD: 85%</Badge>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}
