'use client'
import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { SignUpForm } from '../../../feature/auth/ui/sign-up-form/sign-up-form'
import { SignUpFormValues } from '../../../feature/auth/model/utils/validators/signUpValidationSchema'
import { UseFormRef } from '@/shared/types/form'
import { useRef } from 'react'

type Props = {}

const SignUp = ({}: Props): ReturnComponent => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)

  const handleSubmitForm = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    // console.log(formData, ref, passwordConfirm, accept)
  }
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <SignUpForm
        // disabled={isLoading}
        onSubmit={handleSubmitForm}
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? ''}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? ''}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
