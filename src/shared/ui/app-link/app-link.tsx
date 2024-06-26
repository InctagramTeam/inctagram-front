import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'
import { UrlObject } from "url";

export type AppLinkVariant = 'primary' | 'red'

export type AppLinkProps = {
  variant?: AppLinkVariant
  children?: ReactNode
  activeLink?: string
  href?: string | UrlObject
} & Parameters<typeof Link>[0]

/** Обёртка над дефолтным Link от Next.js */
export function AppLink(props: AppLinkProps) {
  const { className, variant = 'primary', children, activeLink, href, ...rest } = props
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
