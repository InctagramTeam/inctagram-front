import * as React from 'react'

import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { ReturnComponent } from '@/shared/types'

export const AuthButtons = (): ReturnComponent => {
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
        Log&nbsp;in
      </Button>
      <Button
        asComponent={Link}
        className={`${classes.button} ${classes.signupLink}`}
        href={'/auth/sign-up'}
      >
        Sign&nbsp;up
      </Button>
    </>
  )
}
