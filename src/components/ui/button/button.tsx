import * as React from 'react'
import { ButtonHTMLAttributes } from 'react'

import { cn } from '@/utils/merge-cn'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  /**
   * Общие стили кнопки.
   */
  `inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-90`,
  {
    defaultVariants: {
      /**
       * Размер кнопки в соответствии с дизайн системой
       */
      size: 'default',
      /**
       * Вариант кнопки. Отвечает за визуал кнопки.
       */
      variant: 'primary',
    },
    variants: {
      size: {
        default: 'w-[182px] h-[36px] py-[6px] px-[24px] gap-[8px] rounded-md',
        icon: 'h-9 w-9',
        lg: 'h-11 rounded-md px-8 gap-[8px] ',
        sm: 'h-9 rounded-md px-3 gap-[8px] ',
      },
      variant: {
        primary: `bg-Primary-500 font-inter 
    font-semi_bold-600 text-H3-16 text-Light-100 border-2 border-Primary-700
    rounded-[4px] shadow-sm shadow-Primary-700
    transition-all duration-150 ease-in-out
    active:bg-Primary-700 active:transition-all duration-150 ease-in-out
    hover:text-Light-100 hover:bg-Primary-300 hover:-translate-y-px transform
    hover:transition-all duration-150 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
    focus:ring-offset-Primary-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
    disabled:bg-Primary-900 disabled:text-Light-900`,
        secondary: `bg-Dark-300 font-inter font-semi_bold-600
    text-H3-16 text-Light-100 rounded-[2px] shadow-sm shadow-Dark-300 
    active:bg-[#212121] transition-all duration-150 ease-in-out
    hover:text-Light-100 hover:bg-Dark-100/90 hover:-translate-y-px transform
    hover:transition-all duration-150 ease-in-out
    focus:bg-Dark-300 focus:outline-none focus:ring-2
    focus:ring-Primary-300 focus:ring-offset-1
    focus:ring-opacity-50 focus:ring-offset-Primary-300
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
    disabled:bg-Dark-500 disabled:text-Light-900`,
        outline: `bg-Dark-500
    font-inter font-semi_bold-600 text-H3-16 text-Primary-500
    border-2 border-Primary-500 rounded-[2px] shadow-sm shadow-Primary-500 
    active:bg-Dark-700 active:text-Primary-700 active:border-Primary-700
    transition-all duration-150 ease-in-out
    hover:text-Primary-100 hover:bg-Dark-700/60 hover:border-Primary-100
    hover:transition-all duration-150 ease-in-out hover:-translate-y-px transform
    focus:bg-Dark-700 focus:bg-Dark-700 focus:outline-none
    focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
    focus:ring-offset-Primary-700
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
    disabled:bg-Dark-900 disabled:text-Primary-900 border-Primary-900`,
        ghost: `bg-Dark-700
    font-inter font-semi_bold-600 text-H3-16 text-Primary-500
    active:bg-Dark-700 active:text-Primary-700
    transition-all duration-150 ease-in-out
    hover:text-Primary-100 hover:bg-Dark-700/60 hover:-translate-y-px transform
    hover:transition-all duration-150 ease-in-out
    focus:bg-Dark-700 focus:bg-Dark-700 focus:outline-none
    focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
    focus:ring-offset-Primary-700
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
    disabled:bg-Dark-700 disabled:text-Primary-900`,
        link: `text-Primary-500 underline-offset-4
    border-b-2 border-transparent hover:border-text-Primary-500
    transition-all duration-150 ease-in-out 
    hover:underline hover:text-[rgb(106_156_243)] hover:-translate-y-px transform
    hover:transition-all duration-150 ease-in-out
    focus:outline-none focus:text-[rgb(106_156_243)] focus:underline
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300`,
        destructive: `bg-destructive text-Light-100 shadow-sm
    hover:bg-destructive/90 transition-all duration-150 ease-in-out
    hover:-translate-y-px transform hover:transition-all duration-150 ease-in-out
    focus:outline-none focus:ring-1 focus:ring-Primary-700
    focus:ring-offset-1 focus:ring-opacity-50 focus:ring-offset-Primary-700
    focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
    focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300`,
      },
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Флаг - возвращает первый дочерний элемент, удаляется из DOM (дерева если asChild === true)
   * родительский элемент (тэг) передав дочернему все атрибуты
   */
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    /**
     * Если asChild === false вернется Slot === Comp (родительский компонент), иначе родитель удалится из ДОМ
     * дерева передав класс и др.атрибуты дочернему элементу
     */
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props} />
    )
  }
)

Button.displayName = 'Button'
export { Button, buttonVariants }
