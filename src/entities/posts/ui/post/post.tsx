'use client'

import React from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { PostImageSlider } from '@/entities/posts/ui/post-image-slider'
import { Button, useTranslation } from '@/shared'
import defaultAvatar from '@/shared/assets/images/avatar.svg'
import { AppImage } from '@/shared/ui/app-image'
import { CollapsingText } from '@/shared/ui/collapsing-text/collapsing-text'
import { formatDistanceToNow } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import Link from 'next/link'

import 'swiper/swiper-bundle.css'

export const Post = (props: PostItem) => {
  const { description, postImages, createdAt } = props

  const { locale: localeFromUseTranslation } = useTranslation()
  const locale = localeFromUseTranslation === 'ru' ? ru : enUS

  const slides = postImages.map(el => el.url)
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale })

  const isSlides = slides.length > 1

  return (
    <div className={'flex h-[391px] w-[234px] flex-col'}>
      {isSlides ? (
        <PostImageSlider images={slides} />
      ) : (
        <Button asComponent={Link} href={'/'}>
          <AppImage alt={'post-image'} className={'h-full w-full object-cover'} src={slides[0]} />
        </Button>
      )}

      <Button
        className={'group my-3 flex h-auto w-full items-start justify-start p-0 text-left'}
        style={{ justifyContent: 'start' }}
        variant={'text'}
      >
        <AppImage
          alt={'post'}
          className={
            'max-h-[36px] max-w-[36px] rounded-full bg-white transition-all duration-150 ease-in-out group-hover:bg-Primary-500 hover:bg-Primary-500'
          }
          src={defaultAvatar}
        />
        <h3 className={'text-lg font-semibold leading-6'}>URLProfile</h3>
      </Button>

      <p className={'mb-1 text-sm font-normal leading-4 text-Light-900'}>{timeAgo}</p>

      <CollapsingText value={description} />
    </div>
  )
}
