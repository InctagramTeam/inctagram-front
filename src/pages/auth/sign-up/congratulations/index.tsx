'use client'
import { SignUpBroIllustration } from '@/shared/assets/illustrations'
import {
  AuthRoutes,
  XS_BREAKPOINT,
  getAuthLayout,
  PageWrapper,
  useResponsive,
  useTranslation,
  cn,
  ReturnComponent,
  Button,
  InformationBlock,
} from '@/shared'
import Link from 'next/link'

const SignUpCongratulations = (): ReturnComponent => {
  const { t } = useTranslation()
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    button: cn('py-[6px]', !isMobile && 'mb-[72px] px-[60px]', isMobile && 'order-1 px-[20px]'),
    illustration: cn('max-w-[432px] w-full h-[300px]', isMobile && 'h-[230px] mb-[48px]'),
  }

  return (
    <PageWrapper
      description={t.pages.congratulations.metaDescription}
      paddingBlock={'35px'}
      title={t.pages.congratulations.title}
    >
      <InformationBlock
        action={
          <Button
            asComponent={Link}
            className={classes.button}
            fullWidth={isMobile}
            href={AuthRoutes.SIGN_IN}
          >
            {t.button.signIn}
          </Button>
        }
        illustration={<SignUpBroIllustration aria-hidden className={classes.illustration} />}
        isMobile={isMobile}
        text={t.pages.congratulations.text}
        title={t.pages.congratulations.title}
      />
    </PageWrapper>
  )
}

SignUpCongratulations.getLayout = getAuthLayout

export default SignUpCongratulations
