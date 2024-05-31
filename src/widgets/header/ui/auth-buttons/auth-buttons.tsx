import * as React from 'react'

import { useTranslation } from '@/shared/lib/hooks/use-translation'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui/button'
import Link from 'next/link'

export const AuthButtons = (): ReturnComponent => {
  const { t } = useTranslation()

  const classes = {
    button: `py-[6px] text-center !text-H3-16`,
    loginLink: `px-[26px] !text-Primary-500 duration-300
      hover:no-underline hover:!text-Primary-100
      active:!text-Primary-700
      focus:no-underline`,
    signupLink: `px-[20px]`,
  }

  return (
    <>
      <Button
        asComponent={Link}
        className={`${classes.button} ${classes.loginLink}`}
        href={'/auth/sign-in'}
        variant={'link'}
      >
        {t.button.signIn}
      </Button>
      <Button
        asComponent={Link}
        className={`${classes.button} ${classes.signupLink}`}
        href={'/auth/sign-up'}
      >
        {t.button.signUp}
      </Button>
    </>
  )
}
