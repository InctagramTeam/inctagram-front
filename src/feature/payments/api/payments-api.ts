import { CreatePaymentRequest } from '@/feature/payments/types/payments.types'
import { axiosWithAuth } from '@/shared/api/interceptors'
import { AxiosResponse } from 'axios'

export class PaymentsApi {
  async createPayment({ paymentSystem, subscriptionName }: CreatePaymentRequest) {
    return await axiosWithAuth
      .post<
        { url: string },
        AxiosResponse<{ url: string }>,
        CreatePaymentRequest
      >('payments/premium', { paymentSystem, subscriptionName })
      .then(res => res.data.url)
  }
}

const paymentsApi = new PaymentsApi()

export default paymentsApi
