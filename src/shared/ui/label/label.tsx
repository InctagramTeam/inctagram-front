'use client'

import * as React from 'react'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

type Props = {
  className?: string
} & React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, Props>(
  ({ className, ...rest }, ref) => (
    <LabelPrimitive.Root {...rest} className={cn(labelVariants(), className)} ref={ref} />
  )
)

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
