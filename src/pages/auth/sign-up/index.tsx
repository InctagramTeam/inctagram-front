import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { SignUpForm } from '../../../feature/auth/ui/sign-up-form/sign-up-form'
import { SignUpFormValues } from '../../../feature/auth/model/utils/validators/signUpValidationSchema'
import { UseFormRef } from '@/shared/types/form'
import { useRef } from 'react'

type Props = {}

const SignUp = ({}: Props): ReturnComponent => {
  const ref = useRef<UseFormRef<SignUpFormValues> | null>(null)

  const handleSubmit = ({ accept, passwordConfirm, ...formData }: SignUpFormValues) => {
    console.log(formData, ref, passwordConfirm, accept)
  }
  return (
    <PageWrapper title={'SignUp | Instagram'}>
      <SignUpForm
        // disabled={isLoading}
        onSubmit={handleSubmit}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignUp.getLayout = getLayout
export default SignUp
