import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'

const TermOfService = () => {
  return (
    <PageWrapper paddingTop={'72px'} title={'TermOfService | Instagram'}>
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfService.getLayout = getAuthLayout
export default TermOfService
