'use client'

import React from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { PostImageSlider } from '@/entities/posts/ui/post-image-slider'
import { Button, useTranslation } from '@/shared'
import defaultAvatar from '@/shared/assets/images/avatar.svg'
import { AppImage } from '@/shared/ui/app-image'
import { CollapsingText } from '@/shared/ui/collapsing-text/collapsing-text'
import clsx from 'clsx'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { enUS, ru } from 'date-fns/locale'

import 'swiper/swiper-bundle.css'

import s from './post.module.scss'

export const Post = (props: PostItem) => {
  const { description, postImages, createdAt } = props

  const { locale: localeFromUseTranslation } = useTranslation()

  const locale = localeFromUseTranslation === 'ru' ? ru : enUS

  const slides = postImages.map(el => el.url)
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale })

  return (
    <div className={clsx(s.post)}>
      <PostImageSlider images={slides} />

      <Button className={s.openProfile} variant={'text'}>
        <AppImage alt={'post'} className={s.avatar} src={defaultAvatar} />
        <h3>URLProfile</h3>
      </Button>

      <p className={s.time}>{timeAgo}</p>

      <CollapsingText value={description} />
    </div>
  )
}
