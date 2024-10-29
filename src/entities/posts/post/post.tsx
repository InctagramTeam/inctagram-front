'use client'

import React from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { Button } from '@/shared'
import { AppImage } from '@/shared/ui/app-image'
import { CollapsingText } from '@/shared/ui/collapsing-text/collapsing-text'
import { SwiperSlider } from '@/shared/ui/swiper-slider'
import clsx from 'clsx'

import 'swiper/swiper-bundle.css'

import s from './post.module.scss'

export const Post = (props: PostItem) => {
  const { description, postImages, id, isDraft } = props

  const slides = postImages.map(el => el.url)

  return (
    <div className={clsx(s.post)}>
      {/*<AppImage alt={'post'} className={s.image} src={slides[0]} />*/}
      <SwiperSlider images={slides} />
      <Button className={s.openProfile} variant={'text'}>
        <AppImage alt={'post'} className={s.avatar} src={'/src'} />
        <h3>URLProfile</h3>
      </Button>

      <p className={s.time}>22 min ago</p>

      <CollapsingText value={description} />
    </div>
  )
}
