import { ElementRef, ElementType, forwardRef, ReactNode } from 'react'

import clsx from 'clsx'
import { PolymorphComponentPropsWithRef } from '@/common/types/polymorph'

type CustomProps = {
  className?: string
  endIcon?: ReactNode
  fullWidth?: boolean
  startIcon?: ReactNode
  variant?: 'outline' | 'primary' | 'secondary' | 'text' | 'ghost' | 'link' | 'destructive'
  disabled?: boolean
}

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, CustomProps>

type ButtonComponent = <T extends ElementType = 'button'>(props: Props<T>) => ReactNode

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    {
      asComponent,
      children,
      className,
      endIcon,
      fullWidth,
      startIcon,
      variant = 'primary',
      disabled,
      ...restProps
    }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component = asComponent || 'button'

    const classNames = {
      btn: clsx(
        `w-full h-9 inline-flex gap-[12px] items-center justify-center border-box 
        text-regular-text-16 text-Light-100 border-none rounded outline-none transition-all
        duration-150 ease-in-out`,
        [variant],
        fullWidth && `w-full`,
        variant === 'primary' &&
          !disabled &&
          `bg-Primary-500
          hover:bg-Primary-100 hover:transition-all duration-150 ease-in-out
          active:text-Light-100 active:bg-Primary-700 active:transition-all duration-150 ease-in-out
          hover:text-Light-100 hover:bg-Primary-300 hover:-translate-y-px transform
          focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
          disabled:bg-Primary-900 disabled:text-Light-900 disabled:cursor-not-allowed`,
        variant === 'primary' &&
          disabled &&
          `bg-Primary-900 text-Light-900 cursor-not-allowed
          disabled:bg-Primary-900 disabled:text-Light-900 disabled:cursor-not-allowed
        `,
        variant === 'secondary' &&
          !disabled &&
          `bg-Dark-100 rounded-[2px] shadow-sm shadow-Dark-300 
           active:bg-[#212121] transition-all duration-150 ease-in-out
           hover:text-Light-100 hover:bg-Dark-100/90 hover:-translate-y-px transform
           hover:transition-all duration-150 ease-in-out
           focus:bg-Dark-300 focus:outline-none focus:ring-2
           focus:ring-Primary-300 focus:ring-offset-1
           focus:ring-opacity-50 focus:ring-offset-Primary-300
           focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
           focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
           disabled:bg-Dark-500 disabled:text-Light-900 disabled:cursor-not-allowed`,
        variant === 'secondary' &&
          disabled &&
          `bg-Dark-300 text-Light-900 cursor-not-allowed
          disabled:bg-Dark-300 disabled:text-Light-900 disabled:cursor-not-allowed`,
        variant === 'outline' &&
          !disabled &&
          `bg-Dark-300 text-Primary-500 p-[5px_24px] bg-transparent border-1 border-Primary-300
          rounded-[2px] shadow-sm shadow-Primary-900 
          active:bg-Dark-700 active:text-Primary-700 active:border-Primary-700
          active:transition-all duration-150 ease-in-out
          hover:text-Primary-100 hover:bg-Dark-500/60 hover:ring-1 hover:ring-Primary-100
          hover:transition-all duration-150 ease-in-out hover:-translate-y-px transform
          focus:bg-Dark-700 focus:bg-Dark-700 focus:outline-none
          focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-700
          focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
          disabled:bg-Dark-900 disabled:text-Primary-900 border-Primary-900 disabled:cursor-not-allowed`,
        variant === 'outline' &&
          disabled &&
          `bg-Dark-500 text-Primary-900 ring-1 ring-Primary-900 cursor-not-allowed`,
        variant === 'link' &&
          !disabled &&
          `text-Primary-500 underline-offset-4
          border-b-2 border-transparent hover:border-text-Primary-300/50
          transition-all duration-150 ease-in-out 
          hover:underline hover:text-[rgb(106_156_243)] hover:-translate-y-px transform
          hover:transition-all duration-150 ease-in-out
          focus:outline-none focus:text-[rgb(106_156_243)] focus:underline
          focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300`,
        variant === 'link' && disabled && `text-Primary-900/50 cursor-not-allowed`,
        variant === 'ghost' &&
          !disabled &&
          `bg-[#AEB2B6]
          font-inter font-semi_bold-600 text-H3-16 text-Light-300
          active:bg-Dark-700 active:text-Primary-700
          active:transition-all duration-150 ease-in-out
          hover:text-Light-300 hover:-translate-y-px transform
          hover:transition-all duration-150 ease-in-out
          focus:bg-Dark-500 focus:bg-Dark-700 focus:outline-none
          focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-700
          focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300 focus-visible:[#AEB2B6]
          focus-visible:transition-all duration-150 ease-in-out
          disabled:bg-[#AEB2B6] disabled:text-Light-300 disabled:cursor-not-allowed`,
        variant === 'ghost' && disabled && `bg-[#8D9094] text-Light-500 cursor-not-allowed`,
        variant === 'ghost' && disabled && `bg-Dark-500 text-Primary-900 cursor-not-allowed`,
        variant === 'destructive' &&
          !disabled &&
          `bg-[#ff3f3f] text-Light-100 shadow-sm 
           hover:bg-red-400 transition-all duration-150 ease-in-out
           hover:-translate-y-px transform hover:transition-all duration-150 ease-in-out
           focus:outline-none focus:ring-1 focus:ring-Primary-700
           focus:ring-offset-1 focus:ring-opacity-50 focus:ring-offset-Primary-700
           focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
           focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300
           disabled:cursor-not-allowed disabled:bg-destructive/50 disabled:text-Primary-900/50`,
        variant === 'destructive' &&
          disabled &&
          `bg-red-700/20 text-white-100/10 cursor-not-allowed`,
        className
      ),
    }

    return (
      <Component className={classNames.btn} {...restProps} ref={ref}>
        {startIcon}
        {children}
        {endIcon}
      </Component>
    )
  }
)
