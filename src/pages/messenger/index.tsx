import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const Messenger = () => {
  return (
    <Page>
      <HeadMeta title={'Messenger'} />
      <h1>Messenger</h1>
    </Page>
  )
}

Messenger.getLayout = getLayout
export default Messenger
