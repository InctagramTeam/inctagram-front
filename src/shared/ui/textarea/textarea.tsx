import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useId,
  useState,
} from 'react'

import { ReturnComponent, Text, cn } from '@/shared'

export type TextareaProps = {
  containerClassName?: string
  defaultCounter?: number
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  textareaClassName?: string
} & ComponentPropsWithoutRef<'textarea'>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      containerClassName,
      disabled,
      errorMessage,
      id,
      label,
      onChange,
      onValueChange,
      maxLength,
      defaultCounter,
      ...rest
    },
    ref
  ): ReturnComponent => {
    const classes = {
      error: `block !text-Danger-500`,
      label: cn(`block text-Light-900`, disabled && `text-Dark-100`),
      textarea: cn(
        `bg-Dark-500 placeholder-Light-900 px-[12px] py-[6px] outline-none rounded-[2px] border-[1px] border-Dark-100 resize-none w-full h-[84px] 
        transition-color duration-300 ease-in-out transition-border-color 
        disabled:placeholder-Dark-100
        active:border-Light-100`,
        errorMessage && `border-Danger-500 `,
        className
      ),
      bottomWrapper: 'flex items-center justify-between gap-[20px]',
      counter: 'text-right text-Light-900',
    }

    const generatedId = useId()
    const finalId = id ?? generatedId
    const errorId = `${finalId}-error`
    const counterId = `${finalId}-counter`
    const ariaDescribedby = `${errorMessage && errorId} ${maxLength && counterId}`

    const changeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
      maxLength && setCounter(e.currentTarget.value.length)
    }

    const [counter, setCounter] = useState<number>(defaultCounter || 0)

    return (
      <div className={containerClassName}>
        {label && (
          <Text
            asComponent={'label'}
            className={classes.label}
            htmlFor={finalId}
            variant={'regular-text-14'}
          >
            {label}
          </Text>
        )}
        <textarea
          aria-describedby={ariaDescribedby}
          className={classes.textarea}
          disabled={disabled}
          id={finalId}
          onChange={changeValueHandler}
          ref={ref}
          {...rest}
        />
        <div className={classes.bottomWrapper}>
          {errorMessage && (
            <Text className={classes.error} id={errorId} role={'alert'} variant={'regular-text-14'}>
              {errorMessage}
            </Text>
          )}
          {maxLength && (
            <Text className={classes.counter} id={counterId} variant={'small-text-12'}>
              {counter} / {maxLength}
            </Text>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export { Textarea }
