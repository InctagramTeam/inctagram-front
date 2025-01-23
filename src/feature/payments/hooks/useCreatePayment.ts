import { useMutation } from '@tanstack/react-query'
import paymentsApi from '@/feature/payments/api/payments-api'
import { ApiError, CreatePaymentRequest } from '@/feature/payments/types/payments.types'
import { toast } from '@/shared'

export const useCreatePayment = () => {
  return useMutation({
    mutationFn: async ({ paymentSystem, subscriptionName }: CreatePaymentRequest) => {
      return paymentsApi.createPayment({ paymentSystem, subscriptionName })
    },
    mutationKey: ['create-payment'],
    onError: (error: ApiError) => {
      const errorMessage =
        error.response?.data?.errorsMessages?.[0]?.message ||
        'Произошла ошибка при создании платежа'

      toast({
        description: errorMessage,
        title: 'Error',
        variant: 'destructive',
      })
    },
    onSuccess: (url: string | undefined) => {
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
}
