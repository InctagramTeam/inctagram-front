import paymentsApi from '@/feature/payments/api/payments-api'
import { CreatePaymentRequest } from '@/feature/payments/types/payments.types'
import { SubscriptionCostValue } from '@/pages/my-profile/[id]/settings/management'
import { Button, Text, toast } from '@/shared'
import { PaypalIcon } from '@/shared/assets/icons/paypal-icon'
import { StripeIcon } from '@/shared/assets/icons/stripe-icon'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'

type Props = {
  currentValueSubscriptionCost: SubscriptionCostValue
}

export const ManagementButtons = ({ currentValueSubscriptionCost }: Props) => {
  const { mutate: createPayment } = useMutation({
    mutationFn: async ({ paymentSystem, subscriptionName }: CreatePaymentRequest) => {
      return paymentsApi.createPayment({ paymentSystem, subscriptionName })
    },
    mutationKey: ['create-payment'],
    onError: (error: any) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: 'Error',
          variant: 'destructive',
        })
      } else {
        toast({
          description: 'Произошла ошибка при создании платежа',
          title: 'Error',
          variant: 'destructive',
        })
      }
    },
    onSuccess: url => {
      if (url) {
        window.location.assign(url)
      } else {
        toast({
          description: 'Redirect URL отсутствует',
          title: 'Error',
          variant: 'destructive',
        })
      }
    },
  })

  const buttonClasses = `h-16 w-24 border !border-solid border-Dark-300 bg-Dark-500 rounded-[5px]`

  return (
    <div className={'mt-[24px] flex items-center justify-end gap-x-[54px]'}>
      <Button
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

      <Button
        asChild
        className={buttonClasses}
        onClick={() =>
          createPayment({ paymentSystem: 'stripe', subscriptionName: currentValueSubscriptionCost })
        }
        variant={'secondary'}
      >
        <Link href={'#'}>
          <StripeIcon />
        </Link>
      </Button>
    </div>
  )
}
