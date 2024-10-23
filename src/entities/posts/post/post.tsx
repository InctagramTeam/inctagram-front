'use client'

import React, { ReactNode, useState } from 'react'

import { PostItem } from '@/entities/posts/model/types/posts.types'
import { Button } from '@/shared'
import { AppImage } from '@/shared/ui/app-image'
import clsx from 'clsx'

import s from './post.module.scss'

const Post = (props: PostItem) => {
  const { description, postImages, id, isDraft } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const src = postImages[0].url
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={clsx(s.post)}>
      <h1>{src}</h1>
      <AppImage alt={'post'} className={s.image} src={src} />

      <Button className={s.open} variant={'text'}>
        <AppImage alt={'post'} className={s.avatar} src={src} />
        <h3>URLProfile</h3>
      </Button>

      <p className={s.time}>22 min ago</p>
      <div className={s.description}>
        <span className={clsx(s.container, { [s.expanded]: isExpanded })}>{description}</span>
        <button className={s.toggle} onClick={handleToggle} type={'button'}>
          {isExpanded ? 'Hide' : 'Show more'}
        </button>
      </div>
    </div>
  )
}

export { Post }
