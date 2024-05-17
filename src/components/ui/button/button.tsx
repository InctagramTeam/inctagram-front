import { ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { ReturnComponent } from '@/common/types'
import { PolymorphComponentPropsWithRef } from '@/common/types/polymorph'
import clsx from 'clsx'

type CustomProps = {
  className?: string
  disabled?: boolean
  endIcon?: ReactNode
  /** Увеличивает кнопку на всю свободную ширину */
  fullWidth?: boolean
  /** Размеры кнопки */
  size?: '2xl' | 'lg' | 'md' | 'sm' | 'xl'
  /** Флаг, делающий кнопку квадратной */
  square?: boolean
  startIcon?: ReactNode
  /** Вариант кнопки. Отвечает за визуал кнопки */
  variant?: 'destructive' | 'link' | 'outline' | 'primary' | 'secondary' | 'text'
}

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, CustomProps>

type ButtonComponent = <T extends ElementType = 'button'>(props: Props<T>) => ReactNode

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    {
      asComponent,
      children,
      className,
      disabled,
      endIcon,
      fullWidth,
      size,
      square = false,
      startIcon,
      variant = 'primary',
      ...restProps
    }: Props<T>,
    ref: ElementRef<T>
  ): ReturnComponent => {
    const Component = asComponent || 'button'

    const classes = {
      btn: clsx(
        `w-full h-9 inline-flex gap-[12px] items-center justify-center border-box 
        text-regular-text-16 text-Light-100 border-none rounded outline-none transition-all
        duration-150 ease-in-out`,
        [variant],
        fullWidth && `w-full`,
        variant === 'primary' &&
          !disabled &&
          `bg-Primary-500
          hover:transition-all duration-150 ease-in-out
          active:text-Light-100 active:bg-Primary-700 
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
           active:bg-[#212121]
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
          `bg-Dark-300 text-Primary-500 p-[5px_24px] bg-transparent ring-1 ring-Primary-300
          rounded-[2px] shadow-sm shadow-Primary-900 
          active:bg-Dark-700 active:text-Primary-700 active:border-Primary-700
          hover:text-Primary-100 hover:bg-Dark-500/60 hover:ring-1 hover:ring-Primary-100
          hover:transition-all duration-150 ease-in-out hover:-translate-y-px transform
          focus:bg-Dark-700 focus:outline-none
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
        variant === 'text' &&
          !disabled &&
          `shrink bg-Dark-700 h-[4px] py-3 
          font-inter font-semi_bold-600 text-H3-16 text-Light-300 transition-colors duration-150 ease-in-out
          active:bg-Dark-700 active:text-Primary-700
          active:transition-all duration-150 ease-in-out
          hover:text-Primary-100 hover:transition-colors duration-150 ease-in-out hover:-translate-y-px transform
          focus:bg-Dark-500 focus:bg-Dark-700 focus:outline-none
          focus:ring-1 focus:ring-Primary-700 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-700
          focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300 focus-visible:Dark-700
          focus-visible:transition-all duration-150 ease-in-out
          disabled:bg-Dark-700 disabled:text-Light-300 disabled:cursor-not-allowed`,
        variant === 'text' && disabled && `bg-Dark-700 text-Light-500 cursor-not-allowed`,
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
        size === 'sm' && `w-[100px] h-[36px]`,
        size === 'md' && `w-[182px] h-[36px]`,
        size === 'lg' && `w-[180px] h-[36px]`,
        size === 'xl' && `w-[220px] h-[36px]`,
        size === '2xl' && `w-[260px] h-[36px]`,
        className,
        square && `rounded-none`
      ),
    }

    return (
      <Component className={classes.btn} {...restProps} ref={ref}>
        {startIcon}
        {children}
        {endIcon}
      </Component>
    )
  }
)
