import * as React from 'react'
import { memo } from 'react'

import { Language } from '@/feature/translate/model/helpers/get-languages'

import { LanguageSelection } from './language-selection'

type Props = {
  sidebarItems: Language[]
}

export const LangSelectSwitcher = memo(({ sidebarItems }: Props) => {
  return <LanguageSelection sidebarItems={sidebarItems} />
})
