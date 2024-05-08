'use client'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import CheckIcon from '@/assets/icons/CheckIcon'
import { cn } from '@/utils/merge-cn'
import { AnimatePresence, motion } from 'framer-motion'

type CheckboxPrimitiveElement = ElementRef<typeof CheckboxPrimitive.Root>

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  position?: 'right' | 'left'
  onValueChange?: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'checked' | 'onCheckedChange'>

const Checkbox = forwardRef<CheckboxPrimitiveElement, CheckboxProps>((props, ref): ReactElement => {
  const {
    checked = true,
    className,
    disabled,
    id,
    name,
    position = 'right',
    label = '',
    onValueChange,
    ...rest
  } = props

  const commonClasses = {
    label: cn(
      '',
      checked && disabled && `cursor-default flex gap-[0_15px] opacity-60 text-Light-700 shadow-sm`,
      checked &&
        !disabled &&
        `cursor-pointer flex gap-[0_15px] text-Light-100 hover:-translate-y-[1px] hover:text-Primary-300/90`,
      !checked &&
        disabled &&
        `cursor-default flex gap-[0_15px] opacity-60 text-Light-700 shadow-sm`,
      !checked &&
        !disabled &&
        `cursor-pointer flex gap-[0_15px] text-Light-700 hover:-translate-y-[1px] shadow-sm hover:text-Primary-500 hover:animate-[wiggle_1s_ease-in-out_infinite] `,
      className && className
    ),
    divWrapper: cn(
      `flex items-center justify-center w-[18px] h-[18px] rounded-[50%]
         hover:not-disabled:bg-Dark-500 hover:active:not-disabled:bg-Dark-500`,
      disabled && 'cursor-default text-Dark-100',
      position === 'left' && '-ml-[10px]'
    ),
    checkboxPrimitiveRoot: cn(
      checked &&
        !disabled &&
        `cursor-pointer relative w-[18px] h-[18px] before:content-[''] before:absolute
          before:block before:scale-0 hover:before:scale-100
          hover:before:-tran slate-x-1 hover:before:-translate-y-3 hover:before:-translate-x-1 hover:before:opacity-60 hover:before:z-1
          before:w-[26px] before:h-[26px] before:bg-Dark-100 before:rounded-[50%]
          before:transition-all duration-150 ease-in-out
          hover:active:before:scale-100 hover:active:before:bg-Dark-100
          hover:focus-visible:before:scale-100
          focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:rounded-[4px] focus:border-Light-100
          focus:ring-offset-Primary-300`,
      !checked &&
        !disabled &&
        `peer data-[state=checked]:text-Light-100  cursor-pointer relative w-[18px] h-[18px] before:content-[''] before:absolute
          before:block before:t-[-50%] before:l-[-50%] before:scale-0 hover:before:scale-100
          hover:before:-translate-x-1 hover:before:-translate-y-1/2
          before:w-[26px] before:h-[26px] before:bg-Dark-100 before:rounded-[50%]
          before:transition-all transition duration-150 ease-in-out
          hover:active:before:scale-100 hover:active:before:bg-Dark-100
          hover:focus-visible:before:scale-100
          hover:focus-visible:before:bg-Dark-100
          focus-visible:outline-none focus-visible:before:block focus-visible:before:t-[-50%]
          focus-visible:before:l-[-50%] focus-visible:before:scale-100 focus-visible:before:w-[26px]
          focus-visible:before:h-[26px] focus-visible:before:-translate-y-3 focus-visible:before:-translate-x-1
          focus-visible:before:bg-Dark-500`,
      checked && disabled && `cursor-default rounded relative w-[18px] h-[18px] bg-Light-100/50`,
      !checked &&
        disabled &&
        'cursor-default rounded relative w-[18px] h-[18px] bg-Dark-900 opacity-60 border-2 border-bg-Dark-100'
    ),
    divDisabled: cn(
      disabled
        ? `absolute z-0 inset-0 rounded`
        : `absolute z-0 inset-0 border-2 border-Light-100 rounded`
    ),
    icon: cn(
      disabled && `fill-[#fff]-100 border border-2 border-Light-100 rounded text-Light-100`,
      checked &&
        !disabled &&
        `fill-[#fff-100] absolute z-0 inset-0 border-2 border-Light-100 rounded
           hover:before:
          `
    ),
    // span над svg
    indicator: cn(
      disabled &&
        checked &&
        `text-Light-100 appearance-none border-2 border-Light-100 rounded w-[18px] h-[18px] bg-Light-100/50`,
      !disabled && checked && 'fill-Light-100'
    ),
  }

  return (
    <LabelPrimitive.Root htmlFor={id} className={commonClasses.label} asChild={false}>
      <div className={commonClasses.divWrapper}>
        <CheckboxPrimitive.Root
          ref={ref}
          name={name}
          checked={checked}
          className={commonClasses.checkboxPrimitiveRoot}
          disabled={disabled}
          defaultChecked
          id={id}
          asChild={false}
          onCheckedChange={onValueChange}
          {...rest}
        >
          <div className={commonClasses.divDisabled}></div>
          <CheckboxPrimitive.Indicator className={commonClasses.indicator} forceMount>
            {checked && (
              <AnimatePresence initial={false}>
                <motion.div
                  animate={'checked'}
                  exit={'unchecked'}
                  initial={'unchecked'}
                  variants={{
                    checked: { scale: 1 },
                    unchecked: { scale: 0.5 },
                  }}
                >
                  <motion.div
                    variants={{
                      checked: {
                        opacity: 1,
                        strokeDashoffset: 0,
                        transition: { duration: 0.1 },
                      },
                      unchecked: {
                        opacity: 0,
                        transition: { duration: 0.1 },
                      },
                    }}
                  >
                    <CheckIcon className={commonClasses.icon} />
                  </motion.div>
                </motion.div>
                <div></div>
              </AnimatePresence>
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </div>
      {label}
    </LabelPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
