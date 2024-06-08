import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const TermOfService = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'TermOfService | Instagram'}>
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfService.getLayout = getAuthLayout
export default TermOfService
