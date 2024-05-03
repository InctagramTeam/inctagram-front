import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/merge-cn'

// How to use Button: https://ui.shadcn.com/docs/components/button
const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap
  disabled:pointer-events-none disabled:opacity-90`,
  {
    variants: {
      variant: {
        primary: `w-[182px] h-[36px] py-[6px] px-[24px] bg-Primary-500 font-inter
    font-semi_bold-600 text-md-H3-16 text-Light-100 border-2 border-Primary-700
    rounded-[4px] shadow-lg shadow-Primary-700
    transition-all duration-150 ease-in-out
    active:bg-Primary-700 
    hover:text-Light-100 hover:bg-Primary-100
    focus:outline-none focus:ring-inset focus:ring-1 focus:ring-Primary-700
    focus:ring-offset-1 focus:ring-opacity-50 focus:ring-offset-Primary-700 
    disabled:bg-Primary-900 disabled:text-Light-900`,
        outline: `w-[182px] h-[36px] py-[6px] px-[24px] bg-Dark-500
    font-inter font-semi_bold-600 text-md-H3-16 text-Primary-500
    border-2 border-Primary-500 rounded-[2px] shadow-sm shadow-Primary-500 
    active:bg-Dark-700 active:text-Primary-700 active:border-Primary-700
    transition-all duration-150 ease-in-out
    hover:text-Primary-100 hover:bg-Dark-700/60 hover:border-Primary-100
    focus:bg-Dark-700 focus:bg-Dark-700 focus:outline-none focus:ring-inset
    focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
    focus:ring-offset-Primary-700 
    disabled:bg-Dark-900 disabled:text-Primary-900 border-Primary-900`,
        secondary: `w-[182px] h-[36px] py-[6px] px-[24px] bg-Dark-300 font-inter font-semi_bold-600
    text-md-H3-16 text-Light-100 rounded-[2px] shadow-lg shadow-Dark-300 
    active:bg-[#212121] transition-all duration-150 ease-in-out
    hover:text-Light-100 hover:bg-Dark-100/90
    focus:bg-Dark-300 focus:outline-none focus:ring-inset focus:ring-1
    focus:ring-Primary-300 focus:ring-offset-1
    focus:ring-opacity-50 focus:ring-offset-Primary-300 
    disabled:bg-Dark-500 disabled:text-Light-900`,
        ghost: `w-[182px] h-[36px] py-[6px] px-[24px] bg-Dark-700
    font-inter font-semi_bold-600 text-md-H3-16 text-Primary-500
    active:bg-Dark-700 active:text-Primary-700
    transition-all duration-150 ease-in-out
    hover:text-Primary-100 hover:bg-Dark-700/60
    focus:bg-Dark-700 focus:bg-Dark-700 focus:outline-none focus:ring-inset
    focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
    focus:ring-offset-Primary-700 
    disabled:bg-Dark-700 disabled:text-Primary-900`,
        link: `text-primary underline-offset-4 hover:underline transition-all duration-150 ease-in-out`,
      },
      size: {
        default: 'w-[182px] h-[36px] py-[6px] px-[24px]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
