import * as React from 'react'

import { LanguageSelection } from './language-selection'
import { Nullable } from '@/shared'
import { Language } from '@/feature/translate/model/helpers/get-languages'

type Props = {
  sidebarItems: Language[]
  width: Nullable<number>
}

export const LangSelectSwitcher = ({ width, sidebarItems }: Props) => {
  return <LanguageSelection width={width} sidebarItems={sidebarItems} />
}
