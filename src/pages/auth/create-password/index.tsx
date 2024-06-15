import React, { useRef } from 'react'

import { CreatePasswordFormValues } from '@/feature/auth/model/utils/validators'
import { CreatePasswordForm } from '@/feature/auth/ui/create-password-form'
import { PageWrapper, ReturnComponent, UseFormRef, getAuthLayout, useTranslation } from '@/shared'

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
      <CreatePasswordForm disabled={false} onSubmit={handleSubmitForm} ref={ref} />
    </PageWrapper>
  )
}

CreatePassword.getLayout = getAuthLayout
export default CreatePassword
