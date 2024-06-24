import { SearchUsers } from '@/feature'
import {
  PageWrapper,
  ReturnComponent,
  getBaseAppLayout,
  useResponsive,
  useTranslation,
} from '@/shared'

const Search = (): ReturnComponent => {
  const { xs } = useResponsive()
  const { t } = useTranslation()

  return (
    <PageWrapper
      description={t.pages.search.metaDescription}
      paddingBlock={xs ? '12px' : '35px'}
      title={t.pages.search.metaTitle}
    >
      <SearchUsers />
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
