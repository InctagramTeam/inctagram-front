import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/utils/merge-cn'

export type TextareaProps = {
  className?: string
  error?: string
  label?: string
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'className'>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, id, label, ...rest }, ref) => {
    const classes = {
      error: cn(`!text-regular-text-14 block text-Danger-500`),
      label: cn(`block text-Light-900`, disabled && `text-Dark-100`),
      textarea: cn(
        `bg-Dark-500 placeholder-Light-900 px-[12px] py-[6px] rounded-[2px] border-[1px] border-Dark-100 resize-none h-[84px] 
        transition-color duration-300 ease-in-out transition-border-color 
        disabled:placeholder-Dark-100
        active:border-Light-100`,
        error && `border-Danger-500 `
      ),
      wrapper: cn(className),
    }

    return (
      <div className={classes.wrapper}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
          </label>
        )}
        <textarea className={classes.textarea} disabled={disabled} id={id} ref={ref} {...rest} />
        {error && <span className={classes.error}> {error} </span>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export { Textarea }
