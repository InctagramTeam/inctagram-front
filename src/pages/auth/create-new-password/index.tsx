'use client'
import React, { useEffect, useRef } from 'react'

import { CreateNewPasswordFormValues, CreatePasswordForm } from '@/feature'
import {
  AuthRoutes,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import { useCreateNewPassword } from '@/feature/auth/api/hooks/useCreateNewPassword'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

const CreateNewPasswordPage = (): ReturnComponent => {
  const { sm } = useResponsive()
  const { t } = useTranslation()

  const ref = useRef<UseFormRef<CreateNewPasswordFormValues>>(null)

  const searchParams = useSearchParams()
  const router = useRouter()

  const { mutate, isSuccess, isPending } = useCreateNewPassword()

  const handleSubmitForm = (formData: CreateNewPasswordFormValues) => {
    const code = searchParams?.get('code')

    if (!code) {
      return
    }

    mutate({ code, newPassword: formData.password })
  }

  useEffect(() => {
    if (isSuccess) {
      router.replace(AuthRoutes.CREATE_NEW_PASSWORD + AuthRoutes.CONGRATULATIONS)
    }
  }, [isSuccess])

  return (
    <PageWrapper
      description={t.pages.createPassword.metaDescription}
      paddingBlock={sm ? '12px' : '60px'}
      title={t.pages.createPassword.metaTitle}
    >
      <CreatePasswordForm disabled={isPending} onSubmit={handleSubmitForm} ref={ref} />
    </PageWrapper>
  )
}

CreateNewPasswordPage.getLayout = getAuthLayout
export default CreateNewPasswordPage
