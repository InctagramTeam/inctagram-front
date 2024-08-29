'use client'
import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form'

import { ForgotPasswordForm, ForgotPasswordFormValues, SentEmailModal } from '@/feature'
import {
  RECAPTCHA_PUBLIK_KEY,
  ReturnComponent,
  UseFormRef,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import Script from 'next/script'
import { usePasswordRecovery } from '@/feature/auth/api/hooks/usePasswordRecovery'

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
  const ref = useRef<ForgotPasswordFormRef>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null)

  const { mutate, data, isPending, isSuccess } = usePasswordRecovery()

  const recaptchaChangeHandler = (value: null | string) => {
    if (value) {
      setRecaptchaValue(value)
      ref?.current?.clearErrors('recaptcha')
      ref?.current?.setValue('recaptcha', true)
    }
  }
  const handleSubmitForm = (formData: ForgotPasswordFormValues) => {
    setRecaptchaValue(recaptchaRef.current?.getValue() ?? null)

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
          onSubmit={handleSubmitForm}
          recaptchaChangeHandler={recaptchaChangeHandler}
          recaptchaRef={recaptchaRef}
          // disabled={}
          // isSent={}
          ref={ref}
        />
        <SentEmailModal email={'example@gmail.com'} onOpenChange={setOpen} open={open} />
      </PageWrapper>
    </>
  )
}

ForgotPasswordPage.getLayout = getAuthLayout
export default ForgotPasswordPage
