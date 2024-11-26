import { SettingsTabs } from '@/shared'
import { TABS_VARIANTS } from '@/shared/constants/base'

import { LocaleType } from '../../../../locales'

type Tab = {
  disabled: boolean
  title: string
  value: SettingsTabs
}

export const getSettingsTabs = (t: LocaleType): Tab[] => {
  return [
    {
      disabled: false,
      title: t.pages.profile.settings.tabs.general,
      value: TABS_VARIANTS.general,
    },
    {
      disabled: false,
      title: t.pages.profile.settings.tabs.devices,
      value: TABS_VARIANTS.devices,
    },
    {
      disabled: false,
      title: t.pages.profile.settings.tabs.management,
      value: TABS_VARIANTS.management,
    },
    {
      disabled: false,
      title: t.pages.profile.settings.tabs.payments,
      value: TABS_VARIANTS.payments,
    },
  ]
}
