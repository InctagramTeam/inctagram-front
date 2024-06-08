'use client'
import { SignUpBroIllustration } from '@/shared/assets/illustrations'
import { AuthRoutes, XS_BREAKPOINT } from '@/shared/constants'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { useResponsive, useTranslation } from '@/shared/lib/hooks'
import { cn } from '@/shared/lib/utils'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import { InformationBlock } from '@/shared/ui/information-block'
import Link from 'next/link'

const SignUpCongratulations = (): ReturnComponent => {
  const { t } = useTranslation()
  const { width } = useResponsive()

  if (!width) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    button: cn('py-[6px]', !isMobile && 'mb-[72px] px-[60px]', isMobile && 'order-1 px-[20px]'),
    illustration: cn('max-w-[432px] w-full h-[300px]', isMobile && 'h-[230px] mb-[48px]'),
  }

  return (
    <PageWrapper
      paddingBlock={'35px'}
      title={t.pages.congratulations.title}
      description={t.pages.congratulations.metaDescription}
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