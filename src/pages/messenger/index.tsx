import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const MessengerPage = () => {
  return (
    <PageWrapper title={'Messenger | Instagram'}>
      <h1>Messenger</h1>
    </PageWrapper>
  )
}

MessengerPage.getLayout = getBaseAppLayout
export default MessengerPage
