import {
  SubscriptionCostValue,
  SubscriptionCostsOption,
} from '@/pages/my-profile/[id]/settings/management'
import { Card, Text } from '@/shared'
import { CustomRadioGroup } from '@/shared/ui/radio-group/radio-group'

type Props = {
  currentValueSubscriptionCost: SubscriptionCostValue
  handleChangeCurrentRadio: (radioValue: SubscriptionCostValue) => void
  subscriptionCostsOptions: SubscriptionCostsOption[]
}

export const SubscriptionCostsCard = ({
  handleChangeCurrentRadio,
  subscriptionCostsOptions,
  currentValueSubscriptionCost,
}: Props) => {
  return (
    <div className={'mt-[42px]'}>
      <Text asComponent={'p'} variant={'H3'}>
        Your subscription costs:
      </Text>
      <Card className={'mt-1.5 w-full pb-1.5 pl-3 pt-1.5'}>
        <CustomRadioGroup
          onValueChange={handleChangeCurrentRadio}
          options={subscriptionCostsOptions}
          value={currentValueSubscriptionCost}
        />
      </Card>
    </div>
  )
}
