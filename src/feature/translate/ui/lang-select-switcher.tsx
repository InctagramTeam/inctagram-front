import * as React from 'react'
import { memo } from 'react'

import { Language } from '@/feature/translate/model/helpers/get-languages'
import { Nullable } from '@/shared'

import { LanguageSelection } from './language-selection'

type Props = {
  sidebarItems: Language[]
  width: Nullable<number>
}

export const LangSelectSwitcher = memo(({ sidebarItems, width }: Props) => {
  return <LanguageSelection sidebarItems={sidebarItems} width={width} />
})
