import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'

const StatisticPage = () => {
  return (
    <PageWrapper title={'Statistics | Instagram'}>
      <h1>Statistics</h1>
    </PageWrapper>
  )
}

StatisticPage.getLayout = getBaseAppLayout
export default StatisticPage
