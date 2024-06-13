import { useRef, useState } from 'react'
import { UseFormRef } from '@/shared/types'
import { ForgotPasswordFormValues } from '@/feature/auth/model/utils/validators'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslation } from '@/shared/lib/hooks'
import { UseFormClearErrors, UseFormSetValue } from 'react-hook-form'

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
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const handleSubmitForm = (formData: ForgotPasswordFormValues) => {
    setRecaptchaValue(recaptchaRef.current?.getValue() ?? null)

    if (recaptchaValue) {
      ref?.current?.clearErrors?.('recaptcha')
    } else {
      ref?.current?.setError('recaptcha', {
        type: 'onChange',
        message: t.validation.recaptcha,
      })
    }
  }

  const recaptchaChangeHandler = (value: string | null) => {
    if (value) {
      setRecaptchaValue(value)
      ref?.current?.clearErrors('recaptcha')
      ref?.current?.setValue('recaptcha', true)
    }
  }

  return { t, ref, recaptchaRef, recaptchaChangeHandler, handleSubmitForm }
}
