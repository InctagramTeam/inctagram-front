import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ForgotPasswordForm } from '@/feature/auth/ui/forgot-password-form'
import Head from 'next/head'
import { RECAPTCHA_PUBLIK_KEY } from '@/shared/constants'
import Script from 'next/script'
import { useForgotPassword } from '@/pages/auth/forgot-password/hooks'

const ForgotPassword = () => {
  const { t, ref, recaptchaRef, recaptchaChangeHandler, handleSubmitForm } = useForgotPassword()

  return (
    <>
      <Head>
        <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_PUBLIK_KEY}`} />
      </Head>
      <PageWrapper
        paddingBlock={'72px'}
        title={t.pages.forgotPassword.metaTitle}
        description={t.pages.forgotPassword.metaDescription}
      >
        <ForgotPasswordForm
          recaptchaRef={recaptchaRef}
          recaptchaChangeHandler={recaptchaChangeHandler}
          onSubmit={handleSubmitForm}
          // disabled={}
          // isSent={}
          ref={ref}
        />
      </PageWrapper>
    </>
  )
}

ForgotPassword.getLayout = getAuthLayout
export default ForgotPassword
