export type AccountType = 'business' | 'personal'
export type AccountTypeOption = {
  label: 'Business' | 'Personal'
  value: AccountType
}
export type SubscriptionCostValue = '1 day' | '7 days' | '30 days'
export type SubscriptionCostsOption = {
  label: '$10 per 1 Day' | '$50 per 7 Day' | '$100 per month'
  value: SubscriptionCostValue
}
export type PaymentSystem = 'paypal' | 'stripe'
export type CreatePaymentRequest = {
  paymentSystem: PaymentSystem
  subscriptionName: SubscriptionCostValue
}

export type ApiError = {
  response?: {
    data?: {
      errorsMessages?: Array<{ message: string }>
    }
  }
}
