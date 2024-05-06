'use client'
import { ChangeEvent, ComponentPropsWithoutRef, KeyboardEvent, forwardRef, useState } from 'react'
import { cn } from '@/utils/merge-cn'
import { Close, Eye, EyeOff, Search } from '@/assets/icons'
import * as LabelPrimitive from '@radix-ui/react-label'

export type Props = {
  classNameInput?: string
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  type?: 'email' | 'password' | 'search' | 'text'
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    classNameInput,
    disabled,
    error = true,
    id,
    label = 'Some text',
    onKeyDown,
    onValueChange,
    type = 'search',
    value,
    ...restProps
  } = props
  const [isVisible, setIsVisible] = useState(false)

  const classes = {
    input: cn(
      `flex w-full h-[36px] bg-Dark-900 font-sm-reg-14 placeholder-Dark-100 text-Light-100 rounded-md border-none ring-2
      pr-3 pl-10 shadow-sm ring-Dark-100 focus:ring-Dark-100 
      transition-colors file:border-0 file:bg-transparent file:font-sm-reg-14 
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
      disabled:cursor-not-allowed disabled:opacity-50
      `,
      type === 'text' &&
        `flex w-full h-[36px] bg-Dark-900 font-sm-reg-14 placeholder-Dark-100 text-Light-100 rounded-xl border-none ring-2
      pr-3 pl-5 shadow-sm ring-Dark-100 focus:ring-Dark-100 
      transition-colors file:border-0 file:bg-transparent file:font-sm-reg-14 
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
      disabled:cursor-not-allowed disabled:opacity-50`,
      type === 'text' && 'pr-[15px]',
      error && 'text-Light-100 outline outline-1 outline-offset-1 outline-Danger-500',
      classNameInput
    ),
    label: cn(
      `font-sm-reg-14 mt-10 absolute inset-0`,
      disabled && `text-Dark-100`,
      error && `text-Danger-500`
    ),
    textField: cn(`flex flex-col`, className),
  }

  const onVisible = () => {
    setIsVisible(prevState => !prevState)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    restProps.onChange?.(e)
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
    <div className={classes.textField}>
      <div className={'flex justify-between py-3 px-6 space-x-6'}>
        <form action="" className={`w-full max-w-md h-[36px]`}>
          <div
            className={`relative w-full max-w-[280px] items-center focus:focus-within:text-Dark-300`}
          >
            <input
              className={classes.input}
              disabled={disabled}
              id={id}
              onChange={onChangeHandler}
              onKeyDown={onKeydownHandler}
              ref={ref}
              placeholder={'Search'}
              autoComplete={'off'}
              aria-label={'search talk'}
              type={!isVisible ? type : 'text'}
              value={value}
              {...restProps}
            />
            {label && (
              <LabelPrimitive.Root className={classes.label} htmlFor={id} asChild={false}>
                {label}
              </LabelPrimitive.Root>
            )}
            {type === 'search' && (
              <div
                className={`absolute inset-2 text-Dark-100 focus:focus-within:text-Dark-300 pointer-events-none`}
              >
                <Search className={`w-5 h-5 absolute ml-3 `} />
              </div>
            )}
            {type === 'password' &&
              (isVisible ? (
                <button
                  className={`cursor-pointer flex items-center text-Light-100 transition-colors ease-in-out delay-150
               absolute top-[50%] right-[12px] -translate-y-[50%]
               disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500
               `}
                  disabled={disabled}
                  onClick={onVisible}
                  type="button"
                >
                  <Eye />
                </button>
              ) : (
                <button
                  className={`cursor-pointer flex items-center text-Light-100 transition-colors ease-in-out delay-150
               absolute top-[50%] right-[12px] -translate-y-[50%]
               disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500
               `}
                  disabled={disabled}
                  onClick={onVisible}
                  type="button"
                >
                  <EyeOff />
                </button>
              ))}
            {type === 'search' && value && (
              <button
                className={`cursor-pointer flex items-center text-Light-100 transition-colors ease-in-out delay-150
               absolute top-[50%] right-[12px] -translate-y-[50%]
               disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500
               `}
                disabled={disabled}
                onClick={clearFieldHandler}
                type="button"
              >
                <div className={``}>
                  <Close />
                </div>
              </button>
            )}
            {type === 'search' && value && (
              <button
                className={`cursor-pointer flex items-center text-Light-100 transition-colors ease-in-out delay-150
               absolute top-[50%] right-[12px] -translate-y-[50%]
               disabled:text-Dark-100 focus:outline outline-1 focus:outline-offset-1 focus:outline-Primary-500
               `}
                disabled={disabled}
                onClick={clearFieldHandler}
                type="button"
              >
                <div className={``}>
                  <Close />
                </div>
              </button>
            )}
          </div>
        </form>
      </div>
      {error && <span className={`font-xs-12 text-Danger-500`}>{error}</span>}
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
