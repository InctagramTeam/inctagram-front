import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form'

import { ForgotPasswordFormValues } from '@/feature/auth/model/utils/validators'
import { useTranslation } from '@/shared/lib/hooks'
import { UseFormRef } from '@/shared/types'

type ForgotPasswordFormRef = UseFormRef<
  ForgotPasswordFormValues,
  {
    clearErrors: UseFormClearErrors<ForgotPasswordFormValues>
    setValue: UseFormSetValue<ForgotPasswordFormValues>
  }
>
export const useForgotPassword = () => {
  const { t } = useTranslation()
  const ref = useRef<ForgotPasswordFormRef>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null)
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

  return { handleSubmitForm, recaptchaChangeHandler, recaptchaRef, ref, t }
}
