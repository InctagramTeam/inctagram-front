'use client'

import { ReturnComponent } from '@/shared'
import { Gallery, GalleryImage } from '@/widgets'
import { GalleryImageType } from '@/widgets/gallery'

const items: GalleryImageType[] = []

for (let i = 0; i < 8; i++) {
  items.push({ src: '/man.png', alt: 'photo' })
}

export const ProfileGallery = (): ReturnComponent => {
  return (
    <Gallery className={'profile-bottom-gallery_'}>
      {items.map((item, index) => (
        <li key={index}>
          <GalleryImage {...item} />
        </li>
      ))}
    </Gallery>
  )
}
