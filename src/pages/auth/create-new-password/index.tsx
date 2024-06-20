import React, { useRef } from 'react'

import { CreateNewPasswordFormValues } from '@/feature/auth/model/utils/validators'
import { CreatePasswordForm } from '@/feature/auth/ui/create-password-form'
import { PageWrapper, ReturnComponent, UseFormRef, getAuthLayout, useTranslation } from '@/shared'

const CreateNewPassword = (): ReturnComponent => {
  const { t } = useTranslation()

  const ref = useRef<UseFormRef<CreateNewPasswordFormValues>>(null)

  const handleSubmitForm = (formData: CreateNewPasswordFormValues) => {}

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

CreateNewPassword.getLayout = getAuthLayout
export default CreateNewPassword
