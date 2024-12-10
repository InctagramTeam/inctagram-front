import React from 'react'

import { Button, Text } from '@/shared'
import { PaypalIcon } from '@/shared/assets/icons/paypal-icon'
import { StripeIcon } from '@/shared/assets/icons/stripe-icon'
import Link from 'next/link'

export const ManagementButtons = () => {
  const buttonClasses = `h-16 w-24 border !border-solid border-Dark-300 bg-Dark-500 rounded-[5px]`

  return (
    <div className={'mt-[24px] flex items-center justify-end gap-x-[54px]'}>
      <Button asChild className={buttonClasses} variant={'secondary'}>
        <Link href={'#'}>
          <PaypalIcon />
        </Link>
      </Button>

      <Text>Or</Text>

      <Button asChild className={buttonClasses} variant={'secondary'}>
        <Link href={'#'}>
          <StripeIcon />
        </Link>
      </Button>
    </div>
  )
}
