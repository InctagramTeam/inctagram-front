import { ReturnComponent, Text, useTranslation } from '@/shared'
import { clsx } from 'clsx'

export const RequestEmpty = (): ReturnComponent => {
  const { t } = useTranslation()

  const classes = {
    text: 'text-center block  text-Light-900',
  }

  return (
    <div className={'mt-[84px]'}>
      <Text asComponent={'h2'} className={clsx(classes.text, 'mb-[6px]')} variant={'bold_text_14'}>
        {t.pages.search.empty}
      </Text>
      <Text className={classes.text} variant={'small-text-12'}>
        {t.pages.search.noRequests}
      </Text>
    </div>
  )
}
