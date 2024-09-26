'use client'
import { useEffect, useRef, useState } from 'react'
import { default as ReCAPTCHA } from 'react-google-recaptcha'
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form'

import { ForgotPasswordForm, ForgotPasswordFormValues, SentEmailModal } from '@/feature'
import { usePasswordRecovery } from '@/feature/auth/api/hooks/usePasswordRecovery'
import { ReturnComponent, UseFormRef, getAuthLayout, useResponsive, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'

type ForgotPasswordFormRef = UseFormRef<
  ForgotPasswordFormValues,
  {
    clearErrors: UseFormClearErrors<ForgotPasswordFormValues>
    setValue: UseFormSetValue<ForgotPasswordFormValues>
  }
>

const ForgotPasswordPage = (): ReturnComponent => {
  const { xs } = useResponsive()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [emailUser, setEmailUser] = useState('')
  const ref = useRef<ForgotPasswordFormRef>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null)

  const { isPending, isSuccess, mutate } = usePasswordRecovery()

  const recaptchaChangeHandler = (value: null | string) => {
    if (value) {
      setRecaptchaValue(value)
      ref?.current?.clearErrors('recaptcha')
      ref?.current?.setValue('recaptcha', true)
    }
  }
  const handleSubmitForm = (formData: ForgotPasswordFormValues) => {
    setRecaptchaValue(recaptchaRef.current?.getValue() ?? null)
    setEmailUser(formData.email)

    mutate({ email: formData.email, recaptchaValue: recaptchaValue ?? '' })

    if (recaptchaValue) {
      ref?.current?.clearErrors?.('recaptcha')
    } else {
      ref?.current?.setError('recaptcha', {
        message: t.validation.recaptcha,
        type: 'onChange',
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(true)
      ref?.current?.clearErrors?.('recaptcha')

      recaptchaRef.current?.reset()
    }
  }, [isSuccess])

  return (
    <>
      <PageWrapper
        description={t.pages.forgotPassword.metaDescription}
        paddingBlock={xs ? '12px' : '72px'}
        title={t.pages.forgotPassword.metaTitle}
      >
        <ForgotPasswordForm
          disabled={isPending}
          isSent={isSuccess}
          onSubmit={handleSubmitForm}
          recaptchaChangeHandler={recaptchaChangeHandler}
          recaptchaRef={recaptchaRef}
          ref={ref}
        />
        <SentEmailModal email={emailUser} onOpenChange={setOpen} open={open} />
      </PageWrapper>
    </>
  )
}

ForgotPasswordPage.getLayout = getAuthLayout
export default ForgotPasswordPage
