import React, { useRef } from 'react'

import { CreateNewPasswordFormValues, CreatePasswordForm } from '@/feature'
import {
  getAuthLayout,
  PageWrapper,
  ReturnComponent,
  UseFormRef,
  useResponsive,
  useTranslation,
} from '@/shared'

const CreateNewPasswordPage = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  const ref = useRef<UseFormRef<CreateNewPasswordFormValues>>(null)

  const handleSubmitForm = (formData: CreateNewPasswordFormValues) => {}

  return (
    <PageWrapper
      description={t.pages.createPassword.metaDescription}
      paddingBlock={sm ? '12px' : '60px'}
      title={t.pages.createPassword.metaTitle}
    >
      <CreatePasswordForm disabled={false} onSubmit={handleSubmitForm} ref={ref} />
    </PageWrapper>
  )
}

CreateNewPasswordPage.getLayout = getAuthLayout
export default CreateNewPasswordPage
