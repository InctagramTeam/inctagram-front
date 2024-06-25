'use client'
import {
  AuthRoutes,
  Button,
  cn,
  getAuthLayout,
  InformationBlock,
  ReturnComponent,
  useResponsive,
  useTranslation,
  XS_BREAKPOINT,
} from '@/shared'
import { SignUpBroIllustration } from '@/shared/assets/illustrations'
import { AppLink } from '@/shared/ui/app-link/app-link'
import { PageWrapper } from '@/widgets/page-wrapper'

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
            asComponent={AppLink}
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
