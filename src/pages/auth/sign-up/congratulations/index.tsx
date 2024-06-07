'use client'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getAuthLayout } from '@/shared/layouts/auth-layout/auth-layout'
import { ReturnComponent } from '@/shared/types'
import { InformationBlock } from '@/shared/ui/information-block'
import { cn } from '@/shared/lib/utils'
import { useResponsive } from '@/shared/lib/hooks'
import { AuthRoutes, XS_BREAKPOINT } from '@/shared/constants'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { SignUpBroIllustration } from '@/shared/assets/illustrations'

const SignUpCongratulations = (): ReturnComponent => {
  const { width } = useResponsive()

  if (!width) {
    return null
  }

  const isMobile = width < XS_BREAKPOINT

  const classes = {
    illustration: cn('max-w-[432px] w-full h-[300px]', isMobile && 'h-[230px] mb-[48px]'),
    button: cn('py-[6px]', !isMobile && 'mb-[72px] px-[60px]', isMobile && 'order-1 px-[20px]'),
  }

  return (
    <PageWrapper paddingTop={'35px'} title={'Congratulations! | Instagram'}>
      <InformationBlock
        title={'Congratulations'}
        text={'Your email has been confirmed'}
        isMobile={isMobile}
        action={
          <Button
            className={classes.button}
            asComponent={Link}
            href={AuthRoutes.SIGN_IN}
            fullWidth={isMobile}
          >
            Sign In
          </Button>
        }
        illustration={<SignUpBroIllustration className={classes.illustration} />}
      />
    </PageWrapper>
  )
}

SignUpCongratulations.getLayout = getAuthLayout

export default SignUpCongratulations
