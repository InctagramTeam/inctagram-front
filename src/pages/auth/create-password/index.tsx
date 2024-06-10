import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { ReturnComponent } from '@/shared/types'
import { useTranslation } from '@/shared/lib/hooks'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const CreatePassword = (): ReturnComponent => {
  const { t } = useTranslation()
  return (
    <PageWrapper
      description={t.pages.createPassword.metaDescription}
      paddingBlock={'60px'}
      title={t.pages.createPassword.metaTitle}
    ></PageWrapper>
  )
}

CreatePassword.getLayout = getAuthLayout
export default CreatePassword
