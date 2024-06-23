'use client'
import {
  AuthRoutes,
  Button,
  InformationBlock,
  PageWrapper,
  ReturnComponent,
  cn,
  getAuthLayout,
  useResponsive,
  useTranslation,
} from '@/shared'
import { SignUpBroIllustration } from '@/shared/assets/illustrations'
import Link from 'next/link'

const SignUpCongratulations = (): ReturnComponent => {
  const { t } = useTranslation()
  const { xs } = useResponsive()

  const classes = {
    button: cn('py-[6px]', !xs && 'mb-[72px] px-[60px]', xs && 'order-1 px-[20px]'),
    illustration: cn('max-w-[432px] w-full h-[300px]', xs && 'h-[230px] mb-[48px]'),
  }

  return (
    <PageWrapper
      description={t.pages.congratulations.metaDescription}
      paddingBlock={xs ? '16px' : '36px'}
      title={t.pages.congratulations.title}
    >
      <InformationBlock
        action={
          <Button
            asComponent={Link}
            className={classes.button}
            fullWidth={xs}
            href={AuthRoutes.SIGN_IN}
          >
            {t.button.signIn}
          </Button>
        }
        illustration={<SignUpBroIllustration aria-hidden className={classes.illustration} />}
        isMobile={xs}
        text={t.pages.congratulations.text}
        title={t.pages.congratulations.title}
      />
    </PageWrapper>
  )
}

SignUpCongratulations.getLayout = getAuthLayout

export default SignUpCongratulations
