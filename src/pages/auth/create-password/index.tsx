import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent } from '@/shared/types'

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
