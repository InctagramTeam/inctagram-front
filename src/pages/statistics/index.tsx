import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Statistics = () => {
  return (
    <PageWrapper title={'Statistics | Instagram'}>
      <h1>Statistics</h1>
    </PageWrapper>
  )
}

Statistics.getLayout = getLayout
export default Statistics
