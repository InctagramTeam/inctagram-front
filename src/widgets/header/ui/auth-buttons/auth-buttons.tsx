import * as React from 'react'

import { AuthRoutes } from '@/shared/constants'
import { useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Button } from '@/shared/ui'
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
        href={AuthRoutes.SIGN_IN}
        variant={'link'}
      >
        {t.button.signIn}
      </Button>
      <Button
        asComponent={Link}
        className={`${classes.button} ${classes.signupLink}`}
        href={AuthRoutes.SIGN_UP}
      >
        {t.button.signUp}
      </Button>
    </>
  )
}
