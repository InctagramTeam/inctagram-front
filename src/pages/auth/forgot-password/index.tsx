import { useState } from 'react'

import { ForgotPasswordForm } from '@/feature/auth/ui/forgot-password-form'
import { SentEmailModal } from '@/feature/auth/ui/sent-email-modal'
import { useForgotPassword } from '@/pages/auth/forgot-password/hooks'
import { RECAPTCHA_PUBLIK_KEY } from '@/shared/constants'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import Script from 'next/script'

const ForgotPassword = () => {
  const { handleSubmitForm, recaptchaChangeHandler, recaptchaRef, ref, t } = useForgotPassword()
  const [open, setOpen] = useState(true)

  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_PUBLIK_KEY}`} />
      <PageWrapper
        description={t.pages.forgotPassword.metaDescription}
        paddingBlock={'72px'}
        title={t.pages.forgotPassword.metaTitle}
      >
        <ForgotPasswordForm
          onSubmit={handleSubmitForm}
          recaptchaChangeHandler={recaptchaChangeHandler}
          recaptchaRef={recaptchaRef}
          // isSent={}
          ref={ref}
        />
        <SentEmailModal email={'example@gmail.com'} onOpenChange={setOpen} open={open} />
      </PageWrapper>
    </>
  )
}

ForgotPassword.getLayout = getAuthLayout
export default ForgotPassword
