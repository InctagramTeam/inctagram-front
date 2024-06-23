'use client'

import { MD_BREAKPOINT, ReturnComponent, Text, useResponsive, useTranslation } from '@/shared'
import { clsx } from 'clsx'

export const RequestEmpty = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()

  const classes = {
    text: 'text-center block  text-Light-900',
  }

  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT

  return (
    <div className={isMobile ? 'mt-[25px]' : 'mt-[84px]'}>
      <Text asComponent={'h2'} className={clsx(classes.text, 'mb-[6px]')} variant={'bold_text_14'}>
        {t.pages.search.empty}
      </Text>
      <Text className={classes.text} variant={'small-text-12'}>
        {t.pages.search.noRequests}
      </Text>
    </div>
  )
}
