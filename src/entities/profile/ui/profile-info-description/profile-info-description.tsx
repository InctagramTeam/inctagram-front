import { Text, useTranslation } from '@/shared'

type Props = {
  aboutMe: string
}

export const ProfileInfoDescription = ({ aboutMe }: Props) => {
  return (
    <div className={`_description_ w-full text-balance pb-[53px] pt-[23px]`}>
      <Text variant={'regular_text_16'}>{aboutMe}</Text>
    </div>
  )
}
