import { Text, useTranslation } from '@/shared'

type Props = {
  aboutMe?: string
}

export const ProfileInfoDescription = ({ aboutMe }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={`_description_ w-full text-balance pb-[53px] pt-[23px]`}>
      <Text variant={'regular_text_16'}>{aboutMe ? aboutMe : 'Not information'}</Text>
      {/*<Text*/}
      {/*  asComponent={`a`}*/}
      {/*  className={`pl-1.5 text-Primary-500 underline hover:cursor-pointer`}*/}
      {/*  variant={'regular_text_16'}*/}
      {/*>*/}
      {/*  laboris nisi ut aliquip ex ea commodo consequat.*/}
      {/*</Text>*/}
    </div>
  )
}
