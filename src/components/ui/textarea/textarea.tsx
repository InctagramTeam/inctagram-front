import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '@/utils/merge-cn'

export type TextareaProps = {
  label?: string
  error?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'className'>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, disabled, error, className, id, ...rest }, ref) => {
    const classes = {
      wrapper: cn(className),
      label: cn(`block text-Light-900`, disabled && `text-Dark-100`),
      textarea: cn(
        `bg-Dark-500 placeholder-Light-900 px-[12px] py-[6px] rounded-[2px] border-[1px] border-Dark-100 resize-none h-[84px] 
        transition-color duration-300 ease-in-out transition-border-color 
        disabled:placeholder-Dark-100
        active:border-Light-100`,
        error && `border-Danger-500 `
      ),
      error: cn(`text-sm-reg-14 block text-Danger-500`),
    }

    return (
      <div className={classes.wrapper}>
        {label && (
          <label htmlFor={id} className={classes.label}>
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
