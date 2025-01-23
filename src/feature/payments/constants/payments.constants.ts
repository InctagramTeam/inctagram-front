import { AccountTypeOption, SubscriptionCostsOption } from '@/feature/payments/types/payments.types'

export const getAccountTypeOptions = (t: any): AccountTypeOption[] =>
  [
    {
      label: t.pages.profile.settings.managementTab.accountTypeOptions.personal,
      value: 'personal',
    },
    {
      label: t.pages.profile.settings.managementTab.accountTypeOptions.business,
      value: 'business',
    },
  ] as AccountTypeOption[]

export const getSubscriptionCostsOptions = (t: any): SubscriptionCostsOption[] =>
  [
    {
      label: `$10 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.day}`,
      value: '1 day',
    },
    {
      label: `$50 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.week}`,
      value: '7 days',
    },
    {
      label: `$100 ${t.pages.profile.settings.managementTab.subscriptionCostsOptions.month}`,
      value: '30 days',
    },
  ] as SubscriptionCostsOption[]
