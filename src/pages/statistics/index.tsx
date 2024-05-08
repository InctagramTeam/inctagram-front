import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const Statistics = () => {
  return (
    <Page>
      <HeadMeta title={'Statistics'} />
      <h1>Statistics</h1>
    </Page>
  )
}

Statistics.getLayout = getLayout
export default Statistics
