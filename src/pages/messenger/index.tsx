import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'

const Messenger = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

Messenger.getLayout = getLayout
export default Messenger
