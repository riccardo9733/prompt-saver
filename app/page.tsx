'use client'

import { useState } from 'react'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { usePrompts } from '@/hooks/use-prompts'
import { Prompt } from '@/types/prompt'
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Star, 
  Copy, 
  Download, 
  Upload,
  X,
  Check,
  Terminal,
  Save,
  Star as StarFill,
  Settings,
  Filter
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [isCreating, setIsCreating] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [showImport, setShowImport] = useState(false)
  const [importText, setImportText] = useState('')
  const [showFilters, setShowFilters] = useState(true)

  const {
    prompts,
    allPrompts,
    categories,
    filter,
    loading,
    setFilter,
    addPrompt,
    editPrompt,
    removePrompt,
    toggleFavoritePrompt,
  } = usePrompts()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tagsInput: '',
  })

  const resetForm = () => {
    setFormData({ title: '', content: '', category: '', tagsInput: '' })
    setIsCreating(false)
    setEditingId(null)
  }

  const handleCreate = () => {
    resetForm()
    setIsCreating(true)
  }

  const handleEdit = (prompt: Prompt) => {
    setFormData({
      title: prompt.title,
      content: prompt.content,
      category: prompt.category,
      tagsInput: prompt.tags.join(', '),
    })
    setEditingId(prompt.id)
  }

  const handleSave = () => {
    const tags = formData.tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0)

    if (!formData.title.trim() || !formData.content.trim()) {
      return
    }

    if (editingId) {
      editPrompt(editingId, {
        title: formData.title,
        content: formData.content,
        category: formData.category || 'General',
        tags,
      })
    } else {
      addPrompt(
        formData.title,
        formData.content,
        formData.category || 'General',
        tags
      )
    }

    resetForm()
  }

  const handleCopy = async (prompt: Prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.content)
      setCopiedId(prompt.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleExport = () => {
    const data = localStorage.getItem('cli-ui-prompts') || '[]'
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `prompts-export-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    try {
      const imported = JSON.parse(importText)
      if (Array.isArray(imported)) {
        const existing = JSON.parse(localStorage.getItem('cli-ui-prompts') || '[]')
        const existingIds = new Set(existing.map((p: Prompt) => p.id))
        
        imported.forEach((prompt: Prompt) => {
          if (!existingIds.has(prompt.id)) {
            existing.push(prompt)
          }
        })
        
        localStorage.setItem('cli-ui-prompts', JSON.stringify(existing))
        window.location.reload()
      }
    } catch (error) {
      alert('Invalid JSON format')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'General': '#00d4ff',
      'Work': '#00ff88',
      'Personal': '#ffcc00',
      'Code': '#8888ff',
      'Writing': '#ff4444',
    }
    return colors[category] || '#666666'
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ffffff]">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-[#00d4ff] mb-4">
              <Terminal className="w-12 h-12 mx-auto animate-pulse" />
            </div>
            <p className="text-[#a0a0a0] font-mono text-sm">Loading prompts...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#ffffff]">
      {/* Sticky Control Section */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#2a2a2a] shadow-lg">
        <div className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 space-y-4">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#00d4ff]">
                {`>_`} Prompt Manager
              </h1>
              <p className="text-xs text-[#666] font-mono mt-1">
                // {allPrompts.length} prompts total
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="default" 
                size="sm" 
                onClick={handleExport}
                className="text-xs px-3"
                title="Export all prompts to JSON"
              >
                <Download className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">EXPORT</span>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => setShowImport(!showImport)}
                className="text-xs px-3"
                title="Import prompts from JSON"
              >
                <Upload className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">IMPORT</span>
              </Button>
              <Button 
                variant="accent" 
                size="sm" 
                onClick={handleCreate}
                className="text-xs px-4"
              >
                <Plus className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">NEW PROMPT</span>
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search prompts by title, content, or tags..."
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#3a3a3a] px-4 py-3 text-sm text-[#ffffff] placeholder:text-[#666] focus:outline-none focus:border-[#00d4ff] sharp font-mono"
            />
          </div>

          {/* Filters Toggle & Actions */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs text-[#666] hover:text-[#00d4ff] transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="uppercase">Filters</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#666] font-mono">
                {prompts.length} shown
              </span>
            </div>
          </div>

          {/* Filter Categories - Scrollable */}
          {showFilters && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-cli">
              <button
                onClick={() => setFilter({ ...filter, category: '', favoritesOnly: false })}
                className={cn(
                  'px-4 py-2 text-xs whitespace-nowrap sharp border transition-colors uppercase font-mono',
                  filter.category === '' && !filter.favoritesOnly
                    ? 'bg-[#1a1a1a] border-[#00d4ff] text-[#00d4ff]' 
                    : 'bg-[#0a0a0a] border-[#3a3a3a] text-[#a0a0a0] hover:bg-[#1a1a1a]'
                )}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter({ ...filter, category: cat, favoritesOnly: false })}
                  className={cn(
                    'px-4 py-2 text-xs whitespace-nowrap sharp border transition-colors uppercase font-mono',
                    filter.category === cat 
                      ? 'bg-[#1a1a1a] border-[#00d4ff] text-[#00d4ff]' 
                      : 'bg-[#0a0a0a] border-[#3a3a3a] text-[#a0a0a0] hover:bg-[#1a1a1a]'
                  )}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={() => setFilter({ ...filter, favoritesOnly: !filter.favoritesOnly })}
                className={cn(
                  'px-4 py-2 text-xs whitespace-nowrap sharp border transition-colors flex items-center gap-2 uppercase font-mono',
                  filter.favoritesOnly 
                    ? 'bg-[#1a1a1a] border-[#ffcc00] text-[#ffcc00]' 
                    : 'bg-[#0a0a0a] border-[#3a3a3a] text-[#a0a0a0] hover:bg-[#1a1a1a]'
                )}
              >
                <StarFill className={cn(
                  'w-3.5 h-3.5',
                  filter.favoritesOnly ? 'fill-[#ffcc00]' : ''
                )} />
                Favorites
              </button>
            </div>
          )}

          {/* Import Section */}
          {showImport && (
            <Card className="sharp bg-[#0f0f0f] border-[#2a2a2a]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xs uppercase text-[#666] font-mono">
                    // Import Prompts
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowImport(false)}
                    className="p-1 h-auto"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder="Paste JSON data here..."
                  className="w-full h-32 bg-[#0a0a0a] border border-[#3a3a3a] p-3 text-xs text-[#a0a0a0] font-mono focus:outline-none focus:border-[#00d4ff] sharp resize-none"
                />
                <div className="flex justify-end mt-2">
                  <Button variant="accent" size="sm" onClick={handleImport}>
                    IMPORT DATA
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Create/Edit Form */}
          {(isCreating || editingId) && (
            <Card className="sharp bg-[#0f0f0f] border-[#2a2a2a]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xs uppercase text-[#666] font-mono">
                    // {editingId ? 'Edit Prompt' : 'Create New Prompt'}
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetForm}
                    className="p-1 h-auto"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#3a3a3a] px-4 py-2 text-sm text-[#ffffff] focus:outline-none focus:border-[#00d4ff] sharp font-mono"
                    placeholder="Enter prompt title..."
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#3a3a3a] px-4 py-2 text-sm text-[#ffffff] focus:outline-none focus:border-[#00d4ff] sharp font-mono"
                    placeholder="e.g., Work, Code, Writing..."
                    list="category-suggestions"
                  />
                  <datalist id="category-suggestions">
                    {categories.map(cat => (
                      <option key={cat} value={cat} />
                    ))}
                  </datalist>
                </div>
                
                <div>
                  <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
                    Tags <span className="text-[#333333]">(comma separated)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.tagsInput}
                    onChange={(e) => setFormData({ ...formData, tagsInput: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#3a3a3a] px-4 py-2 text-sm text-[#ffffff] focus:outline-none focus:border-[#00d4ff] sharp font-mono"
                    placeholder="e.g., python, automation, review..."
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
                    Content *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full h-48 bg-[#0a0a0a] border border-[#3a3a3a] p-4 text-sm text-[#ffffff] font-mono focus:outline-none focus:border-[#00d4ff] sharp resize-none"
                    placeholder="Enter your prompt content..."
                  />
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" onClick={resetForm} size="sm">
                    CANCEL
                  </Button>
                  <Button variant="accent" onClick={handleSave} size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    SAVE
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Main Content - Prompts List */}
      <main className="flex-1 p-4 sm:p-6 max-w-[1200px] mx-auto w-full space-y-4 scrollbar-cli">
        {prompts.length === 0 ? (
          <Card className="sharp bg-[#0f0f0f] border-[#2a2a2a]">
            <CardContent className="py-12 text-center px-4">
              <Terminal className="w-12 h-12 mx-auto text-[#666] mb-4" />
              <h3 className="text-lg font-bold uppercase text-[#a0a0a0] mb-2">
                No prompts found
              </h3>
              <p className="text-sm text-[#666] mb-4">
                Create your first prompt to get started
              </p>
              <Button 
                variant="accent" 
                size="sm" 
                onClick={handleCreate}
                className="text-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                CREATE PROMPT
              </Button>
            </CardContent>
          </Card>
        ) : (
          prompts.map(prompt => (
            <Card 
              key={prompt.id} 
              className="sharp bg-[#0f0f0f] border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-sm font-bold uppercase truncate text-[#ffffff]">
                        {prompt.title}
                      </CardTitle>
                      {prompt.favorite && (
                        <StarFill className="w-4 h-4 fill-[#ffcc00] text-[#ffcc00] shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge 
                        variant="outline" 
                        className="text-[10px] sharp font-mono"
                        style={{ 
                          borderColor: getCategoryColor(prompt.category),
                          color: getCategoryColor(prompt.category)
                        }}
                      >
                        {prompt.category}
                      </Badge>
                      {prompt.tags.slice(0, 3).map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-[10px] sharp text-[#666] border-[#3a3a3a] font-mono"
                        >
                          #{tag}
                        </Badge>
                      ))}
                      {prompt.tags.length > 3 && (
                        <span className="text-[10px] text-[#666] font-mono">
                          +{prompt.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavoritePrompt(prompt.id)}
                      className="p-2 h-auto"
                      title={prompt.favorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Star className={cn(
                        'w-4 h-4',
                        prompt.favorite ? 'fill-[#ffcc00] text-[#ffcc00]' : 'text-[#666]'
                      )} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(prompt)}
                      className="p-2 h-auto"
                      title="Copy to clipboard"
                    >
                      {copiedId === prompt.id ? (
                        <Check className="w-4 h-4 text-[#00ff88]" />
                      ) : (
                        <Copy className="w-4 h-4 text-[#666]" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(prompt)}
                      className="p-2 h-auto"
                      title="Edit prompt"
                    >
                      <Edit2 className="w-4 h-4 text-[#666]" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        if (confirm('Delete this prompt?')) {
                          removePrompt(prompt.id)
                        }
                      }}
                      className="p-2 h-auto"
                      title="Delete prompt"
                    >
                      <Trash2 className="w-4 h-4 text-[#ff4444]" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-xs text-[#a0a0a0] font-mono whitespace-pre-wrap mb-3">
                  {prompt.content}
                </p>
                <div className="text-xs text-[#666] font-mono">
                  Updated: {formatDate(prompt.updatedAt)}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </main>
      
      <Footer />
    </div>
  )
}
