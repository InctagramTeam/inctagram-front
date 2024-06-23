'use client'

import { SearchUsers } from '@/feature'
import {
  PageWrapper,
  getBaseAppLayout,
  useTranslation,
  MD_BREAKPOINT,
  useResponsive,
  ReturnComponent,
} from '@/shared'

const Search = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()

  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT

  return (
    <PageWrapper
      description={t.pages.search.metaDescription}
      paddingBlock={isMobile ? '12px' : '35px'}
      title={t.pages.search.metaTitle}
    >
      <SearchUsers />
    </PageWrapper>
  )
}

Search.getLayout = getBaseAppLayout
export default Search
