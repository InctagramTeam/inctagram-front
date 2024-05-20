import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Messenger = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

Messenger.getLayout = getLayout
export default Messenger
