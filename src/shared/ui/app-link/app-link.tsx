import { ReactNode } from 'react'

import { UrlObject } from 'url'

import clsx from 'clsx'
import Link from 'next/link'

export type AppLinkVariant = 'primary' | 'red'

export type AppLinkProps = {
  activeLink?: string
  children?: ReactNode
  href?: UrlObject | string
  variant?: AppLinkVariant
} & Parameters<typeof Link>[0]

/** Обёртка над дефолтным Link от Next.js */
export function AppLink(props: AppLinkProps) {
  const { activeLink, children, className, href, variant = 'primary', ...rest } = props

  return (
    <Link
      href={href}
      {...rest}
      className={clsx(
        className,
        'cursor-pointer p-1 text-Light-100 hover:text-Primary-100',
        variant === 'red' && `text-Danger-500`,
        activeLink && `text-Primary-500 underline underline-offset-2`
      )}
    >
      {children}
    </Link>
  )
}
