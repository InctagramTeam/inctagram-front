import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'

const Messenger = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

Messenger.getLayout = getBaseAppLayout
export default Messenger
