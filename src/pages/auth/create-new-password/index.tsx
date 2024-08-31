'use client'
import React, { useEffect, useRef } from 'react'

import { CreateNewPasswordFormValues, CreatePasswordForm } from '@/feature'
import { ReturnComponent, UseFormRef, getAuthLayout, useResponsive, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import { useCreateNewPassword } from '@/feature/auth/api/hooks/useCreateNewPassword'
import { useSearchParams } from 'next/navigation'

const CreateNewPasswordPage = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  const ref = useRef<UseFormRef<CreateNewPasswordFormValues>>(null)

  const searchParams = useSearchParams()

  const { mutate, isSuccess, data } = useCreateNewPassword()

  const handleSubmitForm = (formData: CreateNewPasswordFormValues) => {
    const code = searchParams?.get('code')

    if (!code) {
      return
    }

    mutate({ code, newPassword: formData.password })
  }

  useEffect(() => {
    console.log('changed password')
  }, [isSuccess])

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
