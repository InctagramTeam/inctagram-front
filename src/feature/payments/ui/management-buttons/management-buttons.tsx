import { SubscriptionCostValue } from '@/feature/payments/types/payments.types'
import { Button } from '@/shared'
import { StripeIcon } from '@/shared/assets/icons/stripe-icon'
import Link from 'next/link'
import { useCreatePayment } from '@/feature/payments/hooks/useCreatePayment'

type Props = {
  currentValueSubscriptionCost: SubscriptionCostValue
}

export const ManagementButtons = ({ currentValueSubscriptionCost }: Props) => {
  const { mutate: createPayment } = useCreatePayment()
  const buttonClasses = `h-16 w-24 border !border-solid border-Dark-300 bg-Dark-500 rounded-[5px]`

  return (
    <div className={'mt-[24px] flex items-center justify-end gap-x-[54px]'}>
      {/*      <Button
        asChild
        className={buttonClasses}
        onClick={() =>
          createPayment({ paymentSystem: 'paypal', subscriptionName: currentValueSubscriptionCost })
        }
        variant={'secondary'}
      >
        <Link href={'#'}>
          <PaypalIcon />
        </Link>
      </Button>

      <Text>Or</Text>
      */}

      <Button
        asChild
        className={buttonClasses}
        onClick={() =>
          createPayment({ paymentSystem: 'stripe', subscriptionName: currentValueSubscriptionCost })
        }
        variant={'secondary'}
      >
        <Link href={''}>
          <StripeIcon />
        </Link>
      </Button>
    </div>
  )
}
