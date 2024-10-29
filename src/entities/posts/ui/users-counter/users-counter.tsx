'use client'

import React from 'react'

import { useTranslation } from '@/shared'
import { Counter } from '@/shared/ui/counter'
import clsx from 'clsx'

import s from './users-counter.module.scss'

export const UsersCounter = () => {
  const { t } = useTranslation()

  return (
    <div className={clsx(s.block)}>
      <h2>{t.posts.registeredUsers}</h2>

      <Counter value={9213} />
    </div>
  )
}
