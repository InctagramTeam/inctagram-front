import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Messenger = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

Messenger.getLayout = getLayout
export default Messenger
