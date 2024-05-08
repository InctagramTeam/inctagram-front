import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const TermOfService = () => {
  return (
    <Page paddingTop={'72px'}>
      <HeadMeta title={'TermOfService'} />
      <h1>TermOfService</h1>
    </Page>
  )
}

TermOfService.getLayout = getLayout
export default TermOfService
