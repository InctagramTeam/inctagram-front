'use client'
import React from 'react'

import { useTranslation } from '@/shared'
import { Counter } from '@/shared/ui/counter'

type Props = {
  value?: number
}

export const UsersCounter = (props: Props) => {
  const { value = 0 } = props
  const { t } = useTranslation()

  return (
    <div
      className={
        'flex items-center justify-between gap-2.5 rounded-md border border-Dark-300 bg-Dark-700 px-6 py-3'
      }
    >
      <h2 className={'text-left text-lg font-bold leading-6'}>{t.posts.registeredUsers}</h2>
      <Counter value={value} />
    </div>
  )
}
