'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer'
import { cn } from '@/lib/utils'

const Drawer = DrawerPrimitive.Root

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerClose = DrawerPrimitive.Close

const DrawerPortal = DrawerPrimitive.Portal

const DrawerVirtualKeyboard = DrawerPrimitive.VirtualKeyboardProvider

const DrawerBackdrop = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Backdrop
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/70',
      'transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]',
      'data-starting-style:opacity-0 data-ending-style:opacity-0',
      className
    )}
    {...props}
  />
))
DrawerBackdrop.displayName = 'DrawerBackdrop'

const DrawerViewport = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Viewport
    ref={ref}
    className={cn('fixed inset-0 z-50 flex', className)}
    {...props}
  />
))
DrawerViewport.displayName = 'DrawerViewport'

const DrawerPopup = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Popup>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Popup
    ref={ref}
    className={cn(
      'bg-[#0f0f0f] text-[#ffffff] outline-none overscroll-contain',
      className
    )}
    {...props}
  />
))
DrawerPopup.displayName = 'DrawerPopup'

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Content
    ref={ref}
    className={cn(
      'min-h-0 overflow-y-auto overscroll-contain touch-auto',
      className
    )}
    {...props}
  />
))
DrawerContent.displayName = 'DrawerContent'

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
DrawerTitle.displayName = 'DrawerTitle'

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DrawerDescription.displayName = 'DrawerDescription'

function DrawerHandle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto h-1 w-12 rounded-full bg-[#3a3a3a]', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerPortal,
  DrawerVirtualKeyboard,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerHandle,
}
