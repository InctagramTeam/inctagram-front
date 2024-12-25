export type PaymentSystem = 'paypal' | 'stripe'
export type SubscriptionName = '1 day' | '7 days' | '30 days'
export type CreatePaymentRequest = {
  paymentSystem: PaymentSystem
  subscriptionName: SubscriptionName
}
export type ErrorType = {
  field: 'string'
  message: 'string'
}
export type ErrorsType = {
  errorsMessages: ErrorType[]
}
