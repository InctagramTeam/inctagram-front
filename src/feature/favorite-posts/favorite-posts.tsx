'use client'

import React from 'react'

import { ReturnBack, ReturnComponent, Text, cn, useResponsive, useTranslation } from '@/shared'
import { Gallery, GalleryImage, GalleryImageType } from '@/widgets'

const items: GalleryImageType[] = []

for (let i = 0; i < 12; i++) {
  items.push({ alt: 'photo', src: '/man.png' })
}
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
        {items.map((item, index) => (
          <li className={'aspect-square'} key={index}>
            <GalleryImage {...item} />
          </li>
        ))}
      </Gallery>
    </section>
  )
}
