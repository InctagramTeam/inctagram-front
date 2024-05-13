import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const TermOfService = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'TermOfService | Instagram'}>
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfService.getLayout = getLayout
export default TermOfService
