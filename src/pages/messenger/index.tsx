import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Messenger = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

Messenger.getLayout = getLayout
export default Messenger
