import { useState } from 'react'

import { getLayout } from '@/components/Layout/Layout'
import { Alert } from '@/components/ui/alert'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
      <Alert text={'test'} variant={'danger'}></Alert>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
