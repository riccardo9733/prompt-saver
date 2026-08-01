'use client'

import { Prompt } from '@/types/prompt'

const STORAGE_KEY = 'cli-ui-prompts'

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

function migratePrompt(prompt: Prompt): Prompt {
  const legacy = prompt as Prompt & { category?: string }
  if (legacy.category === undefined) return prompt

  const tags = Array.isArray(prompt.tags) ? [...prompt.tags] : []
  const category = legacy.category
  if (category.trim() && category !== 'General' && !tags.includes(category)) {
    tags.push(category)
  }

  return {
    id: prompt.id,
    title: prompt.title,
    content: prompt.content,
    tags,
    createdAt: prompt.createdAt,
    updatedAt: prompt.updatedAt,
    favorite: prompt.favorite,
  }
}

export function getStoredPrompts(): Prompt[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []

    let migrated = false
    const prompts = parsed.map((prompt: Prompt) => {
      const cleaned = migratePrompt(prompt)
      if (cleaned !== prompt) migrated = true
      return cleaned
    })
    if (migrated) savePrompts(prompts)
    return prompts
  } catch (error) {
    console.error('Error reading prompts from storage:', error)
    return []
  }
}

export function savePrompts(prompts: Prompt[]): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts))
  } catch (error) {
    console.error('Error saving prompts to storage:', error)
  }
}

export function createPrompt(title: string, content: string, tags: string[]): Prompt {
  const now = new Date().toISOString()
  const prompt: Prompt = {
    id: generateId(),
    title,
    content,
    tags,
    createdAt: now,
    updatedAt: now,
    favorite: false,
  }
  
  const prompts = getStoredPrompts()
  prompts.push(prompt)
  savePrompts(prompts)
  
  return prompt
}

export function updatePrompt(id: string, updates: Partial<Prompt>): Prompt | null {
  const prompts = getStoredPrompts()
  const index = prompts.findIndex(p => p.id === id)
  
  if (index === -1) return null
  
  prompts[index] = {
    ...prompts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  
  savePrompts(prompts)
  return prompts[index]
}

export function deletePrompt(id: string): boolean {
  const prompts = getStoredPrompts()
  const filtered = prompts.filter(p => p.id !== id)
  
  if (filtered.length === prompts.length) return false
  
  savePrompts(filtered)
  return true
}

export function toggleFavorite(id: string): Prompt | null {
  const prompts = getStoredPrompts()
  const index = prompts.findIndex(p => p.id === id)
  
  if (index === -1) return null
  
  prompts[index].favorite = !prompts[index].favorite
  prompts[index].updatedAt = new Date().toISOString()
  
  savePrompts(prompts)
  return prompts[index]
}

export function getAllTags(): string[] {
  const prompts = getStoredPrompts()
  const tags = new Set(prompts.flatMap(p => p.tags))
  return Array.from(tags).sort()
}

export function exportPrompts(): string {
  const prompts = getStoredPrompts()
  return JSON.stringify(prompts, null, 2)
}

export function importPrompts(jsonData: string): { success: boolean; count: number; error?: string } {
  try {
    const imported = JSON.parse(jsonData)
    
    if (!Array.isArray(imported)) {
      return { success: false, count: 0, error: 'Invalid format: expected an array' }
    }
    
    const existing = getStoredPrompts()
    const existingIds = new Set(existing.map(p => p.id))
    let count = 0
    
    for (const prompt of imported) {
      if (prompt.id && !existingIds.has(prompt.id)) {
        existing.push(prompt)
        count++
      } else {
        prompt.id = generateId()
        existing.push(prompt)
        count++
      }
    }
    
    savePrompts(existing)
    return { success: true, count }
  } catch (error) {
    return { 
      success: false, 
      count: 0, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}
