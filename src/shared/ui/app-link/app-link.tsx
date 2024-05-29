'use client'
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
      `hover:border-text-Primary-300/50
      focus-visible:offset-1 cursor-pointer
      border-b-2 border-transparent text-regular-text-16
      text-Primary-500 underline-offset-4 transition-all 
      duration-150 ease-in-out hover:text-Primary-100 
      hover:underline focus:text-[rgb(106_156_243)] focus:underline
      focus:outline-none focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-opacity-50 focus-visible:ring-offset-Primary-300`
    )}
  >
    {children}
  </Link>
)
