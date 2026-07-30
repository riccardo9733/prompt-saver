export interface Prompt {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  createdAt: string
  updatedAt: string
  favorite: boolean
}

export interface PromptCategory {
  id: string
  name: string
  color: string
  count: number
}

export type SortOption = 'newest' | 'oldest' | 'title' | 'category'

export interface FilterState {
  search: string
  category: string
  favoritesOnly: boolean
  sort: SortOption
}
