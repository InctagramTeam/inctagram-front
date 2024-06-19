import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { Text } from '@/shared/ui/text'
import Avatar from '@/shared/ui/avatar/avatar'
import { Button, Flex } from '@/shared'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'} paddingBlock={'36xp'}>
      <div className={`Profile_ w-full`}>
        <div className={`profile-top_ w-full`}>
          <div className={`avatar-photo_ h-[160px] w-[160px]`}>
            {' '}
            {/* todo work style images */}
            <Avatar
              avatarUrl={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgfxEvMOnkyKFQ4qc5Po77Rmoi99154CXJ9LyMonLJ7TG72Vpcj07b2B9Nw1UxWtRJcc&usqp=CAU`}
              circle
              className={`object-cover`}
              wrapperSize={200}
            />
          </div>
          <div className={`profile-statistics-block_ w-full max-w-[726px] `}>
            <Flex className={`header_ w-full`}>
              <Text asComponent="h2" variant="H1">
                URL_Profile
              </Text>
              <Button variant={'secondary'}>Profile Settings</Button>
            </Flex>
            <Flex className={`followers-block_`}>
              <span>2218</span>
              <span>Following</span>
              <span>2358</span>
              <span>Following</span>
              <span>2764</span>
              <span>Following</span>
            </Flex>
            <p className={`profile-statistics-block_description`}>
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
