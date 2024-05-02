import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Messenger = () => {
  return (
    <>
      <HeadMeta title={'Messenger'} />
      <h1>Messenger</h1>
    </>
  )
}

Messenger.getLayout = getLayout
export default Messenger
