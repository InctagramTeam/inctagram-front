import clsx from 'clsx'
import Link from 'next/link'
import React, { ReactNode } from 'react'

export type LinkOwnProps = {
  children?: ReactNode
} & Parameters<typeof Link>[0]

export const AppLink = ({ children, className, ...rest }: LinkOwnProps) => (
  <Link
    {...rest}
    className={clsx(
      className,
      `text-regular-text-16
      text-Primary-500 underline-offset-4
      border-b-2 border-transparent hover:border-text-Primary-300/50
      transition-all duration-150 ease-in-out 
      hover:underline hover:text-Primary-100 cursor-pointer 
      focus:outline-none focus:text-[rgb(106_156_243)] focus:underline
      focus-visible:outline-none focus-visible:ring-2 focus-visible:offset-1
      focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300`
    )}
  >
    {children}
  </Link>
)
