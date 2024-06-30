import { ReturnComponent, Text, useResponsive, useTranslation } from '@/shared'
import { Gallery, GalleryImage } from '@/widgets'
import { GalleryImageType } from '@/widgets/gallery'

const items: GalleryImageType[] = []

for (let i = 0; i < 12; i++) {
  items.push({ src: '/man.png', alt: 'photo' })
}
export const FavoritePosts = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  return (
    <section className={'w-full'}>
      <Text asComponent={'h1'} mb={'13px'} variant={'H1'}>
        {t.pages.favorites.title}
      </Text>
      <Gallery>
        {items.map((item, index) => (
          <li key={index}>
            <GalleryImage {...item} />
          </li>
        ))}
      </Gallery>
    </section>
  )
}
