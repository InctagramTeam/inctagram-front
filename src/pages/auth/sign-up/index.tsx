'use client'
import { useRef } from 'react'

import { SignUpFormValues } from '@/feature/auth/model/utils/validators/sign-up-validation-schema'
import { SignUpForm } from '@/feature/auth/ui/sign-up-form/sign-up-form'
import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'

type Props = {}

const SignUp = ({}: Props): ReturnComponent => {
  const ref = useRef<UseFormRef<SignUpFormValues>>(null)

  const handleSubmitForm = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    // ref?.current?.reset()
  }

  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <SignUpForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? ''}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? ''}
        // disabled={isLoading}
        onSubmit={handleSubmitForm}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
