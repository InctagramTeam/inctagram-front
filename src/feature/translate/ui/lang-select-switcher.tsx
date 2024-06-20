import * as React from 'react'

import { LanguageSelection } from './language-selection'
import { Nullable } from '@/shared'
import { Language } from '@/feature/translate/model/helpers/get-languages'
import { memo } from 'react'

type Props = {
  sidebarItems: Language[]
  width: Nullable<number>
}

export const LangSelectSwitcher = memo(({ width, sidebarItems }: Props) => {
  return <LanguageSelection width={width} sidebarItems={sidebarItems} />
})
