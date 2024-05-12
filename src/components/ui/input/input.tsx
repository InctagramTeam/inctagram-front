import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { CloseIcon, EyeIcon, EyeOffIcon, SearchIcon } from '@/assets/icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import clsx from 'clsx'

export type InputProps = {
  classNameInput?: string
  disabled?: boolean
  /**
   * Показ иконки внутри инпута: слева или справа от текста Инпута
   */
  endIcon?: ReactNode
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  startIcon?: ReactNode
  type?: 'email' | 'password' | 'search' | 'text'
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNameInput,
      disabled,
      error = '',
      id,
      label = '',
      onKeyDown,
      onValueChange,
      type = 'search',
      value,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)

    const classes = {
      input: clsx(
        `Input relative w-full p-[6px_42px_6px_12px] text-regular-text-16 text-Light-900 bg-transparent border-none 
        rounded-sm ring-1 px-[40px] shadow-sm shadow-Dark-300 ring-Dark-100 outline-1 outline-Dark-100
        transition-all duration-150 easy-in-out
        focus:outline-none
        focus:ring-1 focus:ring-offset-1 focus:ring-opacity-50 focus:text-Light-900
        focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500
        focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
        focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-500
        active:not:disabled:text-Light-100 active:not:disabled:outline
        active:not:disabled:outline-1 active:not:disabled:outline-Light-100
        hover:not:disabled:outline hover:not:disabled:outline-1
        hover:not:disabled:outline-text-Light-900
        hover:not:focus-visible:outline-1 hover:not:focus-visible:outline-text-Light-900
        file:border-0 file:bg-transparent file:font-inter disabled:cursor-not-allowed disabled:opacity-50
        `,
        disabled && `text-Dark-100`,
        error && 'ring-2 ring-Danger-500',
        [type],
        type === 'text' || (type === 'email' && `pr-3`),
        {
          [`text-Light-100 outline outline-Danger-500 hover:not:disabled-visible:outline
          hover:not:disabled-visible:outline-1 hover:not:disabled-visible:outline-text-Light-900`]:
            error,
        },
        classNameInput
      ),
      label: clsx(`text-medium-text-14 text-Light-900`, { [`text-Dark-100`]: disabled }),
      textField: clsx(`flex flex-col`, className),
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
      <div className={classes.textField}>
        {label && (
          <LabelPrimitive.Root className={classes.label} htmlFor={id}>
            {label}
          </LabelPrimitive.Root>
        )}
        <div className={`_InputWrapper_ relative`}>
          <input
            className={classes.input}
            disabled={disabled}
            id={id}
            onChange={onChangeHandler}
            onKeyDown={onKeydownHandler}
            ref={ref}
            type={!isVisible ? type : 'text'}
            value={value}
            {...rest}
          />
          {rest.startIcon ? (
            <span
              className={clsx(
                `absolute top-1/2 text-Light-900 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]`,
                error &&
                  label &&
                  'absolute top-[18px] text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]',
                error &&
                  !label &&
                  'absolute top-[19px] text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]',
                disabled &&
                  `absolute top-[19px] text-Dark-100 left-[12px] transform -translate-y-1/2 grid items-center w-[18px] h-[18px]
                  cursor-not-allowed`
              )}
            >
              {rest.startIcon}
            </span>
          ) : type === 'search' ? (
            <div
              className={clsx(
                `_DivWrapper_ absolute top-1/2 left-[12px] transform -translate-y-1/2 text-Light-900
                focus-visible:text-Light-100 focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-Primary-500
                active:not:disabled:text-Light-100`,
                disabled && `text-Dark-100`
              )}
            >
              <SearchIcon />
            </div>
          ) : null}
          {!!rest.endIcon && (
            <span
              className={clsx(
                `absolute text-Light-900 top-[25%] right-[12px] transform grid items-center w-[18px] h-[18px]`,
                error
                  ? 'absolute text-Light-900 top-[16%] right-[12px] transform grid items-center w-[18px] h-[18px]'
                  : null
              )}
            >
              {rest.endIcon}
            </span>
          )}
          {type === 'password' &&
            (isVisible ? (
              <button
                className={clsx(
                  `_RightBtn_ absolute flex items-center text-Light-100/80 unset cursor-pointer top-1/2
                 right-[12px] transform -translate-y-1/2 transition-colors ease-in-out delay-150
                 focus:outline-none
                 focus:ring-1 focus:ring-offset-1 focus:ring-opacity-70
                 focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500
                 `,
                  disabled && `text-Dark-100 active:not:disabled:text-Light-100`
                )}
                disabled={disabled}
                onClick={onVisible}
                type={'button'}
              >
                <EyeIcon />
              </button>
            ) : (
              <button
                className={clsx(
                  `_RightBtn_ absolute flex items-center text-Light-100/80 unset cursor-pointer top-1/2
                right-[12px] transform -translate-y-1/2 transition-colors ease-in-out delay-150
                focus:ring-1 focus:ring-offset-1 focus:ring-opacity-70
                focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500`,
                  disabled && `text-Dark-100/60 cursor-not-allowed`
                )}
                disabled={disabled}
                onClick={onVisible}
                type={'button'}
              >
                <EyeOffIcon />
              </button>
            ))}
          {type === 'search' && value && (
            <button
              className={clsx(
                `_RightBtn_ absolute flex items-center text-Light-100 unset cursor-pointer top-1/2
                right-[12px] transform -translate-y-1/2 transition-colors ease-in-out delay-150
                focus:ring-1 focus:ring-offset-1 focus:ring-opacity-70
                focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500`,
                disabled && `text-Dark-100`
              )}
              disabled={disabled}
              onClick={clearFieldHandler}
              type={'button'}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        {error && <span className={`text-small-text-12 text-Danger-500 mt-1`}>{error}</span>}
      </div>
    )
  }
)
