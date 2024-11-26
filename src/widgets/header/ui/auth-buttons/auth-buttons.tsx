import * as React from 'react'

import { AuthRoutes, Button, ReturnComponent, useTranslation } from '@/shared'
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
      <Button asChild className={`${classes.button} ${classes.loginLink}`} variant={'link'}>
        <Link href={AuthRoutes.SIGN_IN}>{t.button.signIn}</Link>
      </Button>
      <Button asChild className={`${classes.button} ${classes.signupLink}`}>
        <Link href={AuthRoutes.SIGN_UP}>{t.button.signUp}</Link>
      </Button>
    </>
  )
}
