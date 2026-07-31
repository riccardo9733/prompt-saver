export interface Prompt {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
  favorite: boolean
}

export type SortOption = 'newest' | 'oldest' | 'title'

export interface FilterState {
  search: string
  favoritesOnly: boolean
  sort: SortOption
}
