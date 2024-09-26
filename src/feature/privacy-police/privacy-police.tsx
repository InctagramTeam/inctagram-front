import React from 'react'

import { Flex, ReturnBack, ReturnComponent, Text, useTranslation } from '@/shared'

export const PrivacyPolice = (): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <section className={'w-full'}>
      <ReturnBack text={t.button.backToSignUp} />
      <Flex className={'mx-auto w-full max-w-[958px]'} direction={'column'} gap={'14'}>
        <Text asComponent={'h1'} variant={'H1'}>
          {t.pages.privacyPolice.title}
        </Text>
        <Text asComponent={'p'} variant={'regular-text-14'}>
          Текст с сервера
        </Text>
      </Flex>
    </section>
  )
}
