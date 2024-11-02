'use client'

import React from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { PostImageSlider } from '@/entities/posts/ui/post-image-slider'
import { Button } from '@/shared'
import defaultAvatar from '@/shared/assets/images/avatar.svg'
import { AppImage } from '@/shared/ui/app-image'
import { CollapsingText } from '@/shared/ui/collapsing-text/collapsing-text'
import clsx from 'clsx'

import 'swiper/swiper-bundle.css'

import s from './post.module.scss'

export const Post = (props: PostItem) => {
  const { description, postImages } = props

  const slides = postImages.map(el => el.url)

  return (
    <div className={clsx(s.post)}>
      <PostImageSlider images={slides} />

      <Button className={s.openProfile} variant={'text'}>
        <AppImage alt={'post'} className={s.avatar} src={defaultAvatar} />
        <h3>URLProfile</h3>
      </Button>

      <p className={s.time}>22 min ago</p>

      <CollapsingText value={description} />
    </div>
  )
}
