import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { useTranslation, cn } from '@/shared/lib'
import { useAlert } from './hooks'
import { type VariantProps, cva } from 'class-variance-authority'

type Props = {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

const alertVariants = cva(
  'relative w-full rounded-[2px] border px-[1.5rem] py-[0.8rem] pr-[4.4rem]',
  {
    variants: {
      variant: {
        danger: 'bg-Danger-900 border-Danger-500',
        success: 'bg-Success-900 border-Success-500',
      },
    },
  }
)

export const Alert = ({
  className,
  icon,
  text,
  variant,
  ...rest
}: Props & VariantProps<typeof alertVariants>) => {
  const { t } = useTranslation()
  const classes = {
    closeButton: cn(
      `flex justify-center items-center absolute w-[1.5rem] h-[1.5rem] right-[1.5rem] top-[0.8rem]`,
      `rounded-[4px] border-2 border-transparent outline-none`,
      `transition-opacity transition-transform duration-300`,
      `hover:translate-y-[-4px] active:opacity-50`,
      `focus-visible:border-Light-100`
    ),
    error: `font-bold`,
  }

  const { closeHandler, modalRef, open } = useAlert()

  return open ? (
    <div
      className={cn(alertVariants({ variant }), className)}
      ref={modalRef}
      role={'alert'}
      {...rest}
    >
      {variant === 'danger' && <span className={classes.error}>{t.layout.alert.error}</span>}
      {text}
      <button
        aria-label={t.layout.alert.close}
        className={classes.closeButton}
        onClick={closeHandler}
        type={'button'}
      >
        {icon}
      </button>
    </div>
  ) : (
    <></>
  )
}

Alert.displayName = 'Alert'
