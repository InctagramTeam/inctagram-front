import { Text, useTranslation } from '@/shared'

type Props = {
  followers: number
  following: number
  publication: number
}

export const ProfileInfoUserStats = ({ following, followers, publication }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={`flex items-center gap-x-[88px]`}>
      <div className={`flex flex-col`}>
        <Text variant={'bold_text_14'}>{following}</Text>
        <Text variant={'regular-text-14'}>{t.pages.profile.following}</Text>
      </div>
      <div className={`flex flex-col`}>
        <Text variant={'bold_text_14'}>{followers}</Text>
        <Text variant={'regular-text-14'}>{t.pages.profile.followers}</Text>
      </div>
      <div className={`flex flex-col`}>
        <Text variant={'bold_text_14'}>{publication}</Text>
        <Text variant={'regular-text-14'}>{t.pages.profile.publications}</Text>
      </div>
    </div>
  )
}
