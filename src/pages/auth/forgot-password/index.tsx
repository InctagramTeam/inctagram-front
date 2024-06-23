import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form'

import { ForgotPasswordForm, ForgotPasswordFormValues, SentEmailModal } from '@/feature'
import {
  PageWrapper,
  RECAPTCHA_PUBLIK_KEY,
  UseFormRef,
  getAuthLayout,
  useTranslation,
  MD_BREAKPOINT,
  useResponsive,
  ReturnComponent,
} from '@/shared'
import Script from 'next/script'

type ForgotPasswordFormRef = UseFormRef<
  ForgotPasswordFormValues,
  {
    clearErrors: UseFormClearErrors<ForgotPasswordFormValues>
    setValue: UseFormSetValue<ForgotPasswordFormValues>
  }
>

const ForgotPasswordPage = (): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()
  const [open, setOpen] = useState(true)
  const ref = useRef<ForgotPasswordFormRef>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null)

  if (width === null) {
    return null
  }

  const isMobile = width < MD_BREAKPOINT
  const handleSubmitForm = (formData: ForgotPasswordFormValues) => {
    setRecaptchaValue(recaptchaRef.current?.getValue() ?? null)

    if (recaptchaValue) {
      ref?.current?.clearErrors?.('recaptcha')
    } else {
      ref?.current?.setError('recaptcha', {
        message: t.validation.recaptcha,
        type: 'onChange',
      })
    }
  }

  const recaptchaChangeHandler = (value: null | string) => {
    if (value) {
      setRecaptchaValue(value)
      ref?.current?.clearErrors('recaptcha')
      ref?.current?.setValue('recaptcha', true)
    }
  }

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_PUBLIK_KEY}`} />
      <PageWrapper
        description={t.pages.forgotPassword.metaDescription}
        paddingBlock={isMobile ? '12px' : '72px'}
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
