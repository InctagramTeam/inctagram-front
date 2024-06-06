import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Statistics = () => {
  return (
    <PageWrapper title={'Statistics | Instagram'}>
      <h1>Statistics</h1>
    </PageWrapper>
  )
}

Statistics.getLayout = getLayout
export default Statistics
