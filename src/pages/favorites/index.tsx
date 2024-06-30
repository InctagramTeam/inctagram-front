import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'
import { ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { FavoritePosts } from '@/feature'

const FavoritesPage = (): ReturnComponent => {
  const { t } = useTranslation()
  const { xs } = useResponsive()
  return (
    <PageWrapper
      className={'w-full'}
      paddingBlock={xs ? '16px' : '36px'}
      title={t.pages.favorites.metaTitle}
      description={t.pages.favorites.metaDescription}
    >
      <FavoritePosts />
    </PageWrapper>
  )
}

FavoritesPage.getLayout = getBaseAppLayout
export default FavoritesPage
