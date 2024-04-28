import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Statistics = () => {
  return (
    <>
      <HeadMeta title={'Statistics'} />
      <h1>Statistics</h1>
    </>
  )
}

Statistics.getLayout = getLayout
export default Statistics
