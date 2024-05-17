import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/merge-cn'
import { ComponentPropsWithoutRef, forwardRef, useEffect, useRef, useState } from 'react'
import { CrossIcon } from '@/assets/icons'

const alertVariants = cva('relative w-full rounded-[2px] border px-[1.5rem] py-[0.8rem]', {
  variants: {
    variant: {
      success: 'bg-Success-900 border-Success-500',
      danger: 'bg-Danger-900 border-Danger-500',
    },
  },
})

type Props = {
  text: string
} & ComponentPropsWithoutRef<'div'>

export const Alert = forwardRef<HTMLDivElement, Props & VariantProps<typeof alertVariants>>(
  ({ variant, text, className, ...rest }, ref) => {
    const classes = {
      error: ``,
      closeButton: `flex justify-center items-center absolute w-[24px] h-[24px] right-[1.5rem] top-[0.7rem]`,
    }

    const modalRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    const [open, setOpen] = useState(true)

    return open ? (
      <div
        ref={modalRef}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...rest}
      >
        {variant === 'danger' && <span>Error! </span>}
        {text}
        <button className={classes.closeButton} onClick={() => setOpen(false)}>
          <CrossIcon />
        </button>
      </div>
    ) : (
      <></>
    )
  }
)

Alert.displayName = 'Alert'
