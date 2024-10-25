'use client'

import React, { useState } from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { SwiperSlider } from '@/shared/ui/swiper-slider'
import clsx from 'clsx'

import 'swiper/swiper-bundle.css'

import s from './post.module.scss'

const Post = (props: PostItem) => {
  const { description, postImages, id, isDraft } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const slides = postImages.map(el => el.url)

  return (
    <div className={clsx(s.post)}>
      {/*<AppImage alt={'post'} className={s.image} src={src} />*/}
      <SwiperSlider images={slides} />
      {/*<Button className={s.open} variant={'text'}>*/}
      {/*  <AppImage alt={'post'} className={s.avatar} src={src} />*/}
      {/*  <h3>URLProfile</h3>*/}
      {/*</Button>*/}
      {/*<p className={s.time}>22 min ago</p>*/}
      {/*<div className={s.description}>*/}
      {/*  <span className={clsx(s.container, { [s.expanded]: isExpanded })}>{description}</span>*/}
      {/*  <button className={s.toggle} onClick={handleToggle} type={'button'}>*/}
      {/*    {isExpanded ? 'Hide' : 'Show more'}*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  )
}

export { Post }
