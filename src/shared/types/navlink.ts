import { ReactNode } from 'react'

export type NavLink = {
  icon?: ReactNode
  className?: string
  disabled?: boolean
  handleClick?: () => void
  href: string
  name: string
}
