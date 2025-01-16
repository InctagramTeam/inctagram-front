import { PublicPost } from '@/entities/posts/model/types/posts.types'
import { ReturnComponent } from '@/shared'
import { Gallery, GalleryImage } from '@/widgets'

type Props = {
  posts: PublicPost[]
}

export const ProfileGallery = ({ posts }: Props): ReturnComponent => {
  return (
    <Gallery className={'profile-bottom-gallery_ grid grid-cols-4 gap-[12px]'}>
      {posts.map((item, index) => (
        <li key={index}>
          <GalleryImage postData={item} />
        </li>
      ))}
    </Gallery>
  )
}
