import React, { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react'

import {
  AppRoutes,
  BaseAppLayout,
  LayoutContextProvider,
  ReturnComponent,
  SettingsTabs,
  TabSwitcher,
  useTranslation,
} from '@/shared'
import { TABS_VARIANTS } from '@/shared/constants/base'
import { getSettingsTabs, getStoreLocalStorage } from '@/shared/lib/utils'
import { PageWrapper } from '@/widgets'
import { useRouter } from 'next/router'

export const SettingsLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [userId, setUserId] = useState<null | string>(null)
  const { t } = useTranslation()
  const initialTab = router.pathname.split('/').at(-1)
  const [activeTab, setActiveTab] = useState<SettingsTabs>(initialTab)

  useEffect(() => {
    const user = getStoreLocalStorage('user')

    if (user) {
      setUserId(user.id)
    }
  }, [])

  const tabs = useMemo(() => getSettingsTabs(t), [t])

  const handleTabChange = (value: string) => {
    if (userId) {
      setActiveTab(value as SettingsTabs)
      router.push(AppRoutes.PROFILE + userId + AppRoutes.PROFILE_SETTINGS + `/${value}`)
    }
  }

  return (
    <PageWrapper paddingBlock={'36px'} title={'Settings | Instagram'}>
      <TabSwitcher
        defaultValue={TABS_VARIANTS.general}
        onValueChange={handleTabChange}
        rootClassName={'min-w-full'}
        tabs={tabs}
        value={activeTab}
      >
        {children}
      </TabSwitcher>
    </PageWrapper>
  )
}

export const getSettingsLayout = (pageComponent: ReactElement): ReturnComponent => {
  return (
    <LayoutContextProvider>
      <BaseAppLayout>
        <SettingsLayout>{pageComponent}</SettingsLayout>
      </BaseAppLayout>
    </LayoutContextProvider>
  )
}
