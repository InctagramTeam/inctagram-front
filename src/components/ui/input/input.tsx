'use client'

import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import { cn } from '@/utils/merge-cn'
import { Close, Eye, EyeOff, Search } from '@/assets/icons'
import * as LabelPrimitive from '@radix-ui/react-label'

export type Props = {
  classNameInput?: string
  /**
   * Показ иконки внутри инпута: слева или справа от текста placeholder_a
   */
  endIcon?: ReactNode
  startIcon?: ReactNode
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  type?: 'email' | 'password' | 'search' | 'text'
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

const Input = forwardRef<HTMLInputElement, Props>((props, ref): ReactElement => {
  const {
    className,
    placeholder = '',
    classNameInput,
    disabled,
    error = '',
    id,
    label = '',
    onKeyDown,
    onValueChange,
    type = 'text',
    value,
    ...rest
  } = props
  const [isVisible, setIsVisible] = useState(false)

  const classes = {
    input: cn(
      `flex w-full regular-text-16 h-[36px] bg-Dark-900 placeholder-Dark-100 text-Light-100
      rounded-sm border-none ring-1 px-6 shadow-sm shadow-Dark-300 ring-Dark-100
      transition-colors duration-150 file:border-0 file:bg-transparent file:font-inter
      disabled:cursor-not-allowed disabled:opacity-50
      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
      focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500
      focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
      focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-500
      disabled:bg-Dark-700 disabled:text-Light-900 active:bg-Dark-500`,
      error && 'text-Light-100 outline outline-1 outline-offset-1 outline-Danger-500',
      classNameInput
    ),
    label: cn(
      `font-regular-text-14 text-Light-900`,
      disabled && `text-Dark-100 cursor-not-allowed`
    ),
    textField: cn(`flex flex-col`, className),
  }

  const onVisible = () => {
    setIsVisible(prevState => !prevState)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    rest.onChange?.(e)
    onValueChange?.(e.target.value)
  }
  const clearFieldHandler = () => {
    onValueChange?.('')
  }

  const onKeydownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onKeyDown && onKeyDown(e)
    }
  }

  return (
    <div className={'InputWrapper flex border-bottom justify-between py-3 px-6 space-x-6'}>
      <div
        className={`relative w-full max-w-[280px] items-center focus:focus-within:text-Dark-300 active:bg-Dark-500`}
      >
        <LabelPrimitive.Root className={classes.label} htmlFor={id} asChild={false}>
          {label}
        </LabelPrimitive.Root>
        <div
          className={`relative shadow-sm shadow-Dark-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1 active:bg-Dark-500
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300 disabled:bg-Primary-900 disabled:text-Light-900`}
        >
          {!!rest.startIcon ? (
            <span
              className={cn(
                `absolute top-1/2 text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]`,
                error &&
                  label &&
                  'absolute top-[18px] text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]',
                error &&
                  !label &&
                  'absolute top-[19px] text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]'
              )}
            >
              {rest.startIcon}
            </span>
          ) : type === 'search' ? (
            <div
              className={cn(`absolute left-0 flex items-center pl-3 py-[11px] pointer-events-none text-Dark-100
                focus:focus-within:text-Dark-300
                transition-all duration-150`)}
            >
              <Search className={`w-[20px] h-[20px] ml-3`} />
            </div>
          ) : null}
          <input
            className={classes.input}
            disabled={disabled}
            id={id}
            onChange={onChangeHandler}
            onKeyDown={onKeydownHandler}
            ref={ref}
            placeholder={placeholder}
            autoComplete={'off'}
            aria-label={'search'}
            type={!isVisible ? type : 'search'}
            value={value}
            {...rest}
          />
          {!!rest.endIcon && (
            <span
              className={cn(
                `absolute text-Dark-100 top-[25%] right-[12px] transform grid items-center w-[18px] h-[18px]`,
                error
                  ? 'absolute text-Dark-100 top-[16%] right-[12px] transform grid items-center w-[18px] h-[18px]'
                  : null
              )}
            >
              {rest.endIcon}
            </span>
          )}
          {error && (
            <div
              className={`font-small-text-12 text-Danger-500 flex items-center w-full h-[20px] m-[4px_0]`}
            >
              {error}
            </div>
          )}
        </div>
        {type === 'password' &&
          (isVisible ? (
            <button
              className={cn(
                ` text-Light-100/60
                  focus:focus-within:text-Dark-300
                  disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500`,
                type === 'password' && error && `top-1/2`,
                type === 'password' && error && !label && `top-1/4`,
                type === 'password' &&
                  !error &&
                  label &&
                  `text-Light-100/60
                  focus:focus-within:text-Dark-300
                  disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500`
              )}
              disabled={disabled}
              onClick={onVisible}
            >
              <Eye className={`w-7 h-7 mr-3 absolute right-0 top-[33%]`} />
            </button>
          ) : (
            <button
              className={cn(
                `text-Light-100/60
                  focus:focus-within:text-Dark-300
                  disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500`,
                type === 'password' && error && `top-1/2`,
                type === 'password' && error && !label && `top-1/4`,
                type === 'password' &&
                  !error &&
                  label &&
                  `text-Light-100/60
                  focus:focus-within:text-Dark-300
                  disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500`
              )}
              disabled={disabled}
              onClick={onVisible}
            >
              <EyeOff className={`w-7 h-7 mr-3 absolute right-0 top-[33%]`} />
            </button>
          ))}
        {type === 'search' ||
          (type !== 'password' && value && (
            <button
              className={`cursor-pointer flex items-center text-Light-100 transition-colors ease-in-out delay-150
       absolute top-[50%] right-[12px] -translate-y-[50%]
       disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500`}
              disabled={disabled}
              onClick={clearFieldHandler}
              type="button"
            >
              <Close />
            </button>
          ))}
      </div>
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
