import React from 'react'

import { Button, Card, getSettingsLayout, TabContent, TABS_VARIANTS, Text } from '@/shared'
import Link from 'next/link'

const Management = () => {
  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.management}>
      <div className={'mt-[20px] flex w-full flex-col'}>
        <div>
          <Text asComponent={'p'} variant={'H3'}>
            Account type:
          </Text>
          <Card className={'w-full'}>
            <div>Radiobutton1</div>
            <div>Radiobutton2</div>
          </Card>
        </div>
        <div className={'mt-[42px]'}>
          <Text asComponent={'p'} variant={'H3'}>
            Your subscription costs:
          </Text>
          <Card className={'w-full'}>
            <div>Radiobutton1</div>
            <div>Radiobutton2</div>
            <div>Radiobutton3</div>
          </Card>
        </div>
        <div className={'mt-[24px] flex items-center justify-end gap-x-[54px]'}>
          <Button asChild className={'p-3'}>
            <Link href={''}>IconPayPal</Link>
          </Button>

          <Text>Or</Text>

          <Button asChild className={'p-3'}>
            <Link href={''}>IconStripe</Link>
          </Button>
        </div>
      </div>
    </TabContent>
  )
}

Management.getLayout = getSettingsLayout
export default Management
