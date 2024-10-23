'use client'

import React, { ReactNode, useState } from 'react'

import { Button } from '@/shared'
import { AppImage } from '@/shared/ui/app-image'
import clsx from 'clsx'

import s from './post.module.scss'

type Props = {
  children: ReactNode
}

const Post = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={clsx(s.post)}>
      <AppImage alt={'post'} className={s.image} src={'/images/post1.png'} />

      <Button className={s.open} variant={'text'}>
        <AppImage alt={'post'} className={s.avatar} src={'/images/post1.png'} />
        <h3>URLProfile</h3>
      </Button>

      <p className={s.time}>22 min ago</p>
      <div className={s.description}>
        <span className={clsx(s.container, { [s.expanded]: isExpanded })}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <button className={s.toggle} onClick={handleToggle} type={'button'}>
          {isExpanded ? 'Hide' : 'Show more'}
        </button>
      </div>
    </div>
  )
}

export { Post }
