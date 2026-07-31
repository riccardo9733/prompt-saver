'use client'

import { useSyncExternalStore } from 'react'
import { X, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerPortal,
  DrawerVirtualKeyboard,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerContent,
  DrawerTitle,
  DrawerHandle,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

export interface PromptFormData {
  title: string
  content: string
  tagsInput: string
}

interface PromptFormProps {
  open: boolean
  editingId: string | null
  formData: PromptFormData
  onChange: (data: PromptFormData) => void
  onSave: () => void
  onClose: () => void
}

const DESKTOP_QUERY = '(min-width: 640px)'

function subscribe(query: string) {
  return (callback: () => void) => {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', callback)
    return () => mql.removeEventListener('change', callback)
  }
}

const inputClass =
  'w-full bg-[#0a0a0a] border border-[#3a3a3a] px-4 py-2 text-sm text-[#ffffff] focus:outline-none focus:border-[#00d4ff] sharp font-mono'

function FormFields({
  formData,
  onChange,
}: {
  formData: PromptFormData
  onChange: (data: PromptFormData) => void
}) {
  return (
    <>
      <div>
        <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
          Title *
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
          className={inputClass}
          placeholder="Enter prompt title..."
        />
      </div>

      <div>
        <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
          Tags <span className="text-[#333333]">(comma separated)</span>
        </label>
        <input
          type="text"
          value={formData.tagsInput}
          onChange={(e) => onChange({ ...formData, tagsInput: e.target.value })}
          className={inputClass}
          placeholder="e.g., python, automation, review..."
        />
      </div>

      <div>
        <label className="block text-xs uppercase text-[#666] mb-1 font-mono">
          Content *
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => onChange({ ...formData, content: e.target.value })}
          className="w-full h-48 bg-[#0a0a0a] border border-[#3a3a3a] p-4 text-sm text-[#ffffff] font-mono focus:outline-none focus:border-[#00d4ff] sharp resize-none"
          placeholder="Enter your prompt content..."
        />
      </div>
    </>
  )
}

export function PromptForm({
  open,
  editingId,
  formData,
  onChange,
  onSave,
  onClose,
}: PromptFormProps) {
  const isDesktop = useSyncExternalStore(
    subscribe(DESKTOP_QUERY),
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false
  )

  const title = editingId ? 'Edit Prompt' : 'Create New Prompt'
  const actionSize = isDesktop ? 'sm' : 'md'

  return (
    <Drawer
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose()
      }}
      swipeDirection={isDesktop ? 'right' : 'down'}
    >
      <DrawerVirtualKeyboard>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerViewport
            className={cn(
              isDesktop ? 'items-stretch justify-end' : 'items-end justify-center'
            )}
          >
            <DrawerPopup
              className={cn(
                'relative z-1 flex flex-col',
                'transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform',
                'data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
                isDesktop
                  ? 'h-full w-[min(28rem,100vw)] border-l border-[#2a2a2a] [transform:translateX(var(--drawer-swipe-movement-x))] data-starting-style:[transform:translateX(100%)] data-ending-style:[transform:translateX(100%)]'
                  : 'h-[92dvh] w-full touch-none border-t border-[#2a2a2a] pb-[env(safe-area-inset-bottom,0px)] mb-[var(--drawer-keyboard-inset,0px)] [transform:translateY(var(--drawer-swipe-movement-y))] data-starting-style:[transform:translateY(100%)] data-ending-style:[transform:translateY(100%)]'
              )}
            >
              {/* Header */}
              {isDesktop ? (
                <div className="flex items-center justify-between border-b border-[#2a2a2a] px-5 py-4 shrink-0">
                  <DrawerTitle className="text-xs uppercase text-[#666] font-mono">
                    {`// ${title}`}
                  </DrawerTitle>
                  <Button variant="ghost" size="sm" onClick={onClose} className="p-1 h-auto">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="shrink-0 border-b border-[#2a2a2a] px-4 pb-3 pt-4">
                  <DrawerHandle className="mb-3" />
                  <div className="flex items-center justify-between">
                    <DrawerTitle className="text-xs uppercase text-[#666] font-mono">
                      {`// ${title}`}
                    </DrawerTitle>
                    <Button variant="ghost" size="sm" onClick={onClose} className="p-1 h-auto">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              <DrawerContent className="flex-1 px-4 py-4 sm:px-5 scrollbar-cli">
                <div className="mx-auto w-full max-w-[32rem] space-y-4">
                  <FormFields formData={formData} onChange={onChange} />
                </div>
              </DrawerContent>

              <div className="flex justify-end gap-2 border-t border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3 shrink-0 sm:px-5">
                <Button variant="ghost" onClick={onClose} size={actionSize}>
                  CANCEL
                </Button>
                <Button variant="accent" onClick={onSave} size={actionSize}>
                  <Save className="w-4 h-4 mr-2" />
                  SAVE
                </Button>
              </div>
            </DrawerPopup>
          </DrawerViewport>
        </DrawerPortal>
      </DrawerVirtualKeyboard>
    </Drawer>
  )
}
