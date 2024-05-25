'use client'

import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils/merge-cn'
import { ReturnComponent } from '@/shared/types'
import * as SelectRadix from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Select: typeof SelectRadix.Root = SelectRadix.Root
const SelectGroup: typeof SelectRadix.Group = SelectRadix.Group
const SelectValue: typeof SelectRadix.Value = SelectRadix.Value

type Option = { disabled?: boolean; label: string; value: string }

type SelectProps = {
  disabled?: boolean
  label?: string
  name?: string
  onChange?: (value: string) => void
  options: Option[]
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  required?: boolean
  value?: string
}

const classNames = {
  content: cn(
    `relative z-50 w-full border border-t-0 border-Dark-100 bg-Dark-700 m-0 p-0' +
      max-h-96 min-w-[8rem]
      overflow-hidden text-popover-foreground`
  ),

  item: `w-[210px] h-[36px] flex cursor-default select-none items-center pl-2 pr-2
  text-base font-normal text-Light-100 outline-none 
  focus:bg-Dark-100/30 focus:text-Light-100 focus:shadow-sm`,

  label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',

  trigger: `w-[210px] h-[36px] flex items-center justify-between 
  bg-Dark-700 px-2 py-2 text-base font-normal outline-none border rounded-none
  data-[state=closed]:border-Dark-100 data-[state=open]:border-Dark-100
  data-[state=open]:text-Light-100 ' +
  hover:text-Light-900 focus:border-Light-900 shadow-sm
  focus:text-Light-900 focus:border-Primary-500/60 focus:border-[1px]
  focus:rounded-sm
  disabled:cursor-not-allowed disabled:text-Dark-100/60`,

  value: '',
}

const SelectLabel = forwardRef<
  ElementRef<typeof SelectRadix.Label>,
  ComponentPropsWithoutRef<typeof SelectRadix.Label>
>(({ children, className, ...props }, ref) => (
  <SelectRadix.Label className={classNames.label} ref={ref} {...props}>
    {children}
  </SelectRadix.Label>
))

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectRadix.Trigger>,
  { icon?: ReactNode } & ComponentPropsWithoutRef<typeof SelectRadix.Trigger>
>(({ children, className, icon, ...props }, ref) => {
  return (
    <SelectRadix.Trigger className={classNames.trigger} ref={ref} {...props}>
      {children}
      <SelectRadix.Icon asChild>{icon}</SelectRadix.Icon>
    </SelectRadix.Trigger>
  )
})

const SelectContent = forwardRef<
  ElementRef<typeof SelectRadix.Content>,
  ComponentPropsWithoutRef<typeof SelectRadix.Content>
>(({ children, className, position = 'popper', ...props }, ref) => (
  <SelectRadix.Portal>
    <SelectRadix.Content className={classNames.content} position={position} ref={ref} {...props}>
      <SelectRadix.Viewport className={cn('p-0', position === 'popper' && 'min-h-fit w-full')}>
        {children}
      </SelectRadix.Viewport>
    </SelectRadix.Content>
  </SelectRadix.Portal>
))

const SelectItem = forwardRef<
  ElementRef<typeof SelectRadix.Item>,
  ComponentPropsWithoutRef<typeof SelectRadix.Item>
>(({ children, className, ...props }, ref) => (
  <SelectRadix.Item className={classNames.item} ref={ref} {...props}>
    <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
  </SelectRadix.Item>
))

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectRadix.Separator>,
  ComponentPropsWithoutRef<typeof SelectRadix.Separator>
>(({ className, ...props }, ref) => (
  <SelectRadix.Separator
    className={cn('-mx-1 my-1 h-px bg-Dark-100/40 shadow-sm', className)}
    ref={ref}
    {...props}
  />
))

// export const LabelWrap: FC<PropsType> = ({ children, title }) => {
//   return (
//     <div className={'flex flex-col w-[210px] h-[60px]'}>
//       {title && (
//         <div
//           className={'w-[75px] h-[24px] flex items-center text-[14px] font-normal text-Light-900'}
//         >
//           {title}
//         </div>
//       )}
//       {children}
//     </div>
//   )
// }

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectRadix.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectRadix.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronUp className={'h-4 w-4'} />
  </SelectRadix.ScrollUpButton>
))

const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectRadix.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectRadix.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectRadix.ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    ref={ref}
    {...props}
  >
    <ChevronDown className={'h-4 w-4'} />
  </SelectRadix.ScrollDownButton>
))

const SelectBox = ({
  disabled,
  label,
  name,
  onChange,
  options,
  placeholder,
  position,
  required,
  value,
}: SelectProps): ReturnComponent => {
  return (
    <Select
      disabled={disabled}
      name={name}
      onValueChange={onChange}
      required={required}
      value={value}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position={position}>
        {label && <SelectLabel>{label}</SelectLabel>}

        {options.map(option => (
          <SelectItem disabled={option.disabled} key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export {
  Select,
  SelectBox,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
