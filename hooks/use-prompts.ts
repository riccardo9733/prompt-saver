'use client'

import { useState, useEffect, useCallback } from 'react'
import { Prompt, FilterState, SortOption } from '@/types/prompt'
import * as storage from '@/lib/storage'

export function usePrompts() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [filter, setFilter] = useState<FilterState>({
    search: '',
    favoritesOnly: false,
    sort: 'newest',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = storage.getStoredPrompts()
    setPrompts(stored)
    setLoading(false)
  }, [])

  const refreshPrompts = useCallback(() => {
    setPrompts(storage.getStoredPrompts())
  }, [])

  const addPrompt = useCallback((title: string, content: string, tags: string[]) => {
    const newPrompt = storage.createPrompt(title, content, tags)
    setPrompts(prev => [...prev, newPrompt])
    return newPrompt
  }, [])

  const editPrompt = useCallback((id: string, updates: Partial<Prompt>) => {
    const updated = storage.updatePrompt(id, updates)
    if (updated) {
      setPrompts(prev => prev.map(p => p.id === id ? updated : p))
    }
    return updated
  }, [])

  const removePrompt = useCallback((id: string) => {
    const success = storage.deletePrompt(id)
    if (success) {
      setPrompts(prev => prev.filter(p => p.id !== id))
    }
    return success
  }, [])

  const toggleFavoritePrompt = useCallback((id: string) => {
    const updated = storage.toggleFavorite(id)
    if (updated) {
      setPrompts(prev => prev.map(p => p.id === id ? updated : p))
    }
    return updated
  }, [])

  const filteredPrompts = prompts.filter(prompt => {
    if (filter.favoritesOnly && !prompt.favorite) return false
    if (filter.search) {
      const search = filter.search.toLowerCase()
      return (
        prompt.title.toLowerCase().includes(search) ||
        prompt.content.toLowerCase().includes(search) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(search))
      )
    }
    return true
  }).sort((a, b) => {
    switch (filter.sort) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case 'oldest':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const allTags = Array.from(new Set(prompts.flatMap(p => p.tags))).sort()

  return {
    prompts: filteredPrompts,
    allPrompts: prompts,
    allTags,
    filter,
    loading,
    setFilter,
    addPrompt,
    editPrompt,
    removePrompt,
    toggleFavoritePrompt,
    refreshPrompts,
  }
}
