'use client'

import { useState } from 'react'

import { useTranslation } from '@/shared'
import clsx from 'clsx'

import s from './collapsing-text.module.scss'

type Props = {
  className?: string
  maxLength?: number
  minLength?: number
  value: string
}

export const CollapsingText = (props: Props) => {
  const { value, className, minLength = 83, maxLength = 158 } = props

  const [collapsed, setCollapsed] = useState(true)
  const { t } = useTranslation()

  const isNeedCollapse = value.length > minLength

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  const text = collapsed
    ? value.slice(0, minLength) + '…'
    : value.slice(0, maxLength) + (value.length > maxLength - 5 ? '…' : '')

  const togglingText = collapsed ? t.posts.showMore : t.posts.hide

  return (
    <div className={clsx(s.block, className)}>
      {isNeedCollapse ? (
        <>
          <span> {text} </span>
          <span className={s.toggler} onClick={handleToggle}>
            {togglingText}
          </span>
        </>
      ) : (
        <span> {value} </span>
      )}
    </div>
  )
}
