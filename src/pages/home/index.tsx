import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import * as React from 'react'
import { SelectBox } from '@/components/ui/select/select'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
      <SelectBox title={'select'} disabled={false} />
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
