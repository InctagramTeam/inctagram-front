'use client'

import React from 'react'

import { ReturnBack, ReturnComponent, Text, cn, useResponsive, useTranslation } from '@/shared'
import { Gallery } from '@/widgets'

export const FavoritePosts = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  return (
    <section className={'w-full'}>
      {sm && <ReturnBack text={t.button.back} />}
      <Text
        asComponent={'h1'}
        className={sm ? 'text-center' : undefined}
        mb={'13px'}
        variant={'H1'}
      >
        {t.pages.favorites.title}
      </Text>
      <Gallery
        className={cn(
          'grid-cols-ideal-unset grid grid-cols-4 gap-[12px]',
          sm && 'grid-cols-3 gap-[3px]'
        )}
      >
        Галлерея избранных постов
      </Gallery>
    </section>
  )
}
