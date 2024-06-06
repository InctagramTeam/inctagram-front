import { getBaseAppLayout } from '@/shared/layouts/base-app-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Statistics = () => {
  return (
    <PageWrapper title={'Statistics | Instagram'}>
      <h1>Statistics</h1>
    </PageWrapper>
  )
}

Statistics.getLayout = getBaseAppLayout
export default Statistics
