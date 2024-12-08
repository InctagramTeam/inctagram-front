import React from 'react'

import { ReturnComponent } from '@/shared'

import { PhotoCarousel } from './photo-carousel'
import { PostDescription } from './post-description'

export const PublicationPost = (): ReturnComponent => {
  return (
    <div className={'flex items-start'}>
      <PhotoCarousel />
      <PostDescription />
    </div>
  )
}
