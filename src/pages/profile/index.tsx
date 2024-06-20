import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { Text } from '@/shared/ui/text'
import Avatar from '@/shared/ui/avatar/avatar'
import { Button, Flex, useTranslation } from '@/shared'

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
              <ul className={`flex w-full gap-[100px]`}>
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
            <p className={`_Profile-statistics-block_description_ pb-[53px] pt-[23px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={`profile-bottom-gallery_ grid`}></div>
      </div>
    </PageWrapper>
  )
}

Profile.getLayout = getBaseAppLayout
export default Profile
