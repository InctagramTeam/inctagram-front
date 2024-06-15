import { PageWrapper, getAuthLayout } from '@/shared'

const TermOfService = () => {
  return (
    <PageWrapper paddingBlock={'72px'} title={'TermOfService | Instagram'}>
      <h1>TermOfService</h1>
    </PageWrapper>
  )
}

TermOfService.getLayout = getAuthLayout
export default TermOfService
