import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const StatisticPage = () => {
  return (
    <PageWrapper title={'Statistics | Instagram'}>
      <h1>Statistics</h1>
    </PageWrapper>
  )
}

StatisticPage.getLayout = getBaseAppLayout
export default StatisticPage
