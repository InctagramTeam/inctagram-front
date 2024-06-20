import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { Text } from '@/shared/ui/text'
import Avatar from '@/shared/ui/avatar/avatar'
import { Button, Flex, useTranslation } from '@/shared'
import Link from 'next/link'

const Profile = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper title={'User | Instagram'} paddingBlock={'36px'}>
      <div className={`_Profile_ w-full`}>
        <div className={`_Profile-top_ ] flex w-full`}>
          <div className={`_Avatar-photo_ h-[160px] w-[160px]`}>
            {/* todo: not hardcode avatarUrl */}
            <Avatar
              avatarUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgfxEvMOnkyKFQ4qc5Po77Rmoi99154CXJ9LyMonLJ7TG72Vpcj07b2B9Nw1UxWtRJcc&usqp=CAU`}
              circle
              /* todo: styles img */
              className={`object-cover]`}
              wrapperSize={200}
            />
          </div>
          <div className={`_Profile-statistics-block_ w-full max-w-[726px] pl-[38px] `}>
            <Flex className={`Header_ flex w-full justify-between gap-[100px] p-[0_0_20px_38px]`}>
              <Text asComponent="h2" variant="H1">
                URL_Profile
              </Text>
              <Button variant={'secondary'} className={`px-6 py-[6px]`}>
                Profile Settings
              </Button>
            </Flex>
            <Flex className={`_Followers-block_ w-full max-w-[396px]`}>
              <ul className={`_Followers-block-list_ flex w-full gap-[100px]`}>
                <li className={`flex flex-col items-center`}>
                  <span>2 218</span> {t.pages.profile.following}
                </li>
                <li className={`flex flex-col items-center`}>
                  <span>2218 </span> {t.pages.profile.followers}
                </li>
                <li className={`flex flex-col items-center`}>
                  <span>2 764</span> {t.pages.profile.publications}
                </li>
              </ul>
            </Flex>
            {/* todo: Text - aboutMe текст что с сервера должен прийти.. */}
            <div
              className={`_Profile-statistics-block_description_ w-full text-balance pb-[53px] pt-[23px]`}
            >
              <Text variant="regular_text_16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco
              </Text>
              <Text
                asComponent={`span`}
                className={`pl-1.5 text-Primary-500 underline`}
                variant={'regular_text_16'}
              >
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </div>
          </div>
        </div>
        <div className={`profile-bottom-gallery_ grid`}></div>
      </div>
    </PageWrapper>
  )
}

Profile.getLayout = getBaseAppLayout
export default Profile
