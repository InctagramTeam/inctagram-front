'use client'

import React from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { PostImageSlider } from '@/entities/posts/ui/post-image-slider'
import { AppRoutes, Button, useTranslation } from '@/shared'
import defaultAvatar from '@/shared/assets/images/avatar.svg'
import { AppImage } from '@/shared/ui/app-image'
import { CollapsingText } from '@/shared/ui/collapsing-text/collapsing-text'
import { formatDistanceToNow } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/swiper-bundle.css'

export const Post = (props: PostItem) => {
  const { description, postImages, createdAt, userId } = props

  const { locale: localeFromUseTranslation } = useTranslation()
  const locale = localeFromUseTranslation === 'ru' ? ru : enUS

  const slides = postImages.map(el => el.url)
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale })

  const isSlides = slides.length > 1

  return (
    <div className={'flex h-[391px] w-[234px] flex-col'}>
      {isSlides ? (
        <PostImageSlider images={slides} userId={userId} />
      ) : (
        <Button asChild className={'h-full max-h-60'}>
          <Link href={AppRoutes.PROFILE + userId}>
            <Image
              alt={'post-image'}
              className={'h-full w-full object-cover'}
              height={240}
              src={slides[0]}
              width={234}
            />
          </Link>
        </Button>
      )}

      <Link
        className={'group my-3 flex h-auto w-full items-center justify-start gap-3 text-left'}
        href={AppRoutes.PROFILE + userId}
      >
        <AppImage
          alt={'post'}
          className={
            'max-h-[36px] max-w-[36px] rounded-full bg-white transition-all duration-150 ease-in-out group-hover:bg-Primary-500'
          }
          src={defaultAvatar}
        />
        <h3 className={'text-lg font-semibold leading-6 group-hover:text-Primary-500'}>
          URLProfile
        </h3>
      </Link>

      <p className={'mb-1 text-sm font-normal leading-4 text-Light-900'}>{timeAgo}</p>

      <CollapsingText value={description} />
    </div>
  )
}
