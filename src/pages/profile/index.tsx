import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { Text } from '@/shared/ui/text'
import Avatar from '@/shared/ui/avatar/avatar'
import { Button, Flex } from '@/shared'

const Profile = () => {
  return (
    <PageWrapper title={'User | Instagram'} paddingBlock={'36px'}>
      <div className={`_Profile_ w-full`}>
        <div className={`_Profile-top_ ] flex w-full`}>
          <div className={`_Avatar-photo_ h-[160px] w-[160px]`}>
            {/* todo work style images */}
            <Avatar
              avatarUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgfxEvMOnkyKFQ4qc5Po77Rmoi99154CXJ9LyMonLJ7TG72Vpcj07b2B9Nw1UxWtRJcc&usqp=CAU`}
              circle
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
            <Flex className={`_Followers-block_ flex w-full max-w-[396px] gap-[100px]`}>
              <div>
                <p>2218</p>
                <p>Following</p>
              </div>
              <div>
                <p>2358</p>
                <p>Followers</p>
              </div>
              <div>
                <p>2764</p>
                <p>Publications</p>
              </div>
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
