'use client'

/**
 * <SelectBox title={'....'} disabled={false} />
 */

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { FC } from 'react'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'w-[210px] h-[36px] flex items-center justify-between ' +
        ' bg-Dark-700 px-2 py-2 text-base font-normal outline-none border rounded-none' +
        ' data-[state=closed]:border-Dark-100 data-[state=open]:border-Light-100 data-[state=open]:text-Light-100 ' +
        ' hover:text-Light-900 focus:border-Light-900' +
        ' focus:text-Light-900 focus:border-Primary-500 focus:border-2 focus:rounded-sm' +
        ' disabled:cursor-not-allowed disabled:text-Dark-100',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 w-[210px] border border-t-0 border-Light-100 bg-Dark-700 m-0 p-0 max-h-96 min-w-[8rem] overflow-hidden text-popover-foreground ',
        // position === 'popper' &&
        // 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-0',
          position === 'popper' && 'min-h-fit w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'w-[210px] h-[36px] flex cursor-default select-none items-center pl-2 pr-2 text-base font-normal text-Light-100 outline-none ' +
        'focus:bg-Dark-300 focus:text-Primary-500',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

type PropsType = {
  title?: string
  disabled?: boolean
  children?: React.ReactNode
}

export const LabelWrap: FC<PropsType> = ({ title, children }) => {
  return (
    <div className={'flex flex-col w-[210px] h-[60px]'}>
      {title && (
        <div
          className={'w-[75px] h-[24px] flex items-center text-[14px] font-normal text-Light-900'}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

export const SelectBox: FC<PropsType> = ({ title, disabled }) => {
  return (
    <LabelWrap title={title}>
      <Select disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder="Select-box" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Select-box1">Select-box-1</SelectItem>
            <SelectItem value="Select-box2">Select-box-2</SelectItem>
            <SelectItem value="Select-box3">Select-box-3</SelectItem>
            <SelectItem value="Select-box4">Select-box-4</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </LabelWrap>
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
