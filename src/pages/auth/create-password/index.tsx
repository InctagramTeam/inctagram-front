import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useTranslation } from '@/shared/lib/hooks'
import { ReturnComponent, UseFormRef } from '@/shared/types'
import { CreatePasswordForm } from '@/feature/auth/ui/create-password-form'
import { CreatePasswordFormValues } from '@/feature/auth/model/utils/validators'
import { useRef } from 'react'

const CreatePassword = (): ReturnComponent => {
  const { t } = useTranslation()
  const ref = useRef<UseFormRef<CreatePasswordFormValues>>(null)
  const handleSubmitForm = (formData: CreatePasswordFormValues) => {}

  return (
    <PageWrapper
      description={t.pages.createPassword.metaDescription}
      paddingBlock={'60px'}
      title={t.pages.createPassword.metaTitle}
    >
      <CreatePasswordForm ref={ref} onSubmit={handleSubmitForm} disabled={false} />
    </PageWrapper>
  )
}

CreatePassword.getLayout = getAuthLayout
export default CreatePassword
