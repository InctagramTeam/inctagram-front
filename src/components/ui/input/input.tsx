import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import { Close, Eye, EyeOff, Search } from '@/assets/icons'
import * as LabelPrimitive from '@radix-ui/react-label'
import { clsx } from 'clsx'

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
    type = 'search',
    value,
    ...rest
  } = props
  const [isVisible, setIsVisible] = useState(false)

  const classes = {
    input: clsx(
      `flex w-full text-regular-text-16 h-[36px] bg-Dark-900 placeholder-Light-900 text-Light-900
      rounded-sm border-none ring-1 px-6 shadow-sm shadow-Dark-300 ring-Dark-100
      transition-colors duration-150 file:border-0 file:bg-transparent file:font-inter
      disabled:cursor-not-allowed disabled:opacity-50
      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
      focus:ring-offset-Primary-500 focus:opacity-60 focus:shadow-sm focus:shadow-Primary-500
      focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
      focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-500
      disabled:bg-Dark-700 disabled:text-Light-900 active:bg-Dark-500`,
      error && 'text-Light-100 outline outline-1 outline-offset-1 outline-Danger-500'
    ),
    label: clsx(
      `text-regular-text-14 text-Light-900`,
      disabled && `text-Dark-100 cursor-not-allowed`
    ),
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
    <div
      className={
        'InputWrapper w-full max-w-[330px] relative flex flex-col border-bottom justify-between'
      }
    >
      <LabelPrimitive.Root className={classes.label} htmlFor={id} asChild={false}>
        {label}
      </LabelPrimitive.Root>
      <div
        className={`relative w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-opacity-50
          focus:ring-offset-Primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1 active:bg-Dark-500
          focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300 disabled:bg-Primary-900 disabled:text-Light-900`}
      >
        {!!rest.startIcon ? (
          <span
            className={clsx(
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
            className={clsx(`absolute left-0 flex items-center pl-3 py-[11px] pointer-events-none text-Dark-100
                focus:focus-within:text-Light-900
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
        {error && <div className={`text-regular-text-14 text-Danger-500 mt-[2px]`}>{error}</div>}
      </div>
      {type === 'password' &&
        (isVisible ? (
          <button
            className={clsx(
              type === 'password' && error && `top-1/2`,
              type === 'password' && error && !label && `top-1/4`,
              type === 'password' &&
                !error &&
                label &&
                `text-Light-100/60
                  focus:focus-within:text-Light-900
                  disabled:text-Dark-100`
            )}
            disabled={disabled}
            onClick={onVisible}
          >
            <Eye
              className={clsx(
                error && label
                  ? `text-Light-100/90 w-7 h-7 mr-3 absolute right-0 top-[33%] z-1000`
                  : 'text-Light-100/90 w-7 h-7 mr-3 absolute right-0 top-[45%] z-1000'
              )}
            />
          </button>
        ) : (
          <button
            className={clsx(
              type === 'password' && error && `top-1/2`,
              type === 'password' && error && !label && `top-1/4`,
              type === 'password' &&
                !error &&
                label &&
                `text-Light-100/60 focus:focus-within:text-Light-900 disabled:text-Dark-100`
            )}
            disabled={disabled}
            onClick={onVisible}
          >
            <EyeOff
              className={clsx(
                error && label
                  ? `text-Light-100/90 w-7 h-7 mr-3 absolute right-0 top-[33%] z-1000`
                  : 'text-Light-100/90 w-7 h-7 mr-3 absolute right-0 top-[45%] z-1000'
              )}
            />
          </button>
        ))}
      {type === 'search' ||
        (type !== 'password' && type !== 'text' && type !== 'email' && value && (
          <button
            className={`cursor-pointer flex items-center text-Light-900 transition-colors ease-in-out delay-150
              absolute top-[50%] right-[12px] -translate-y-[50%]
              disabled:text-Dark-100`}
            disabled={disabled}
            onClick={clearFieldHandler}
            type="button"
          >
            <Close />
          </button>
        ))}
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
