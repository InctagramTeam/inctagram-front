import * as React from 'react'
import { ReactNode } from 'react'

import { EnIcon, RuIcon } from '@/shared/assets/lang'
import { useTranslation } from '@/shared/lib/hooks/use-translation'

export type Language = {
  icon: ReactNode
  textValue: string
  value: string
}

export const getLanguages = (): Language[] => {
  const { t } = useTranslation()

  return [
    {
      icon: <RuIcon />,
      textValue: t.lang.en,
      value: 'en',
    },
    {
      icon: <EnIcon />,
      textValue: t.lang.ru,
      value: 'ru',
    },
  ]
}
