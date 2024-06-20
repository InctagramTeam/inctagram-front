import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { Text } from '@/shared/ui/text'
import { AppRoutes, Button, EMPTY_STRING, Flex, useTranslation } from '@/shared'
import Image from 'next/image'
import { UserAvatar } from '@/entities/ui/user'
import Link from 'next/link'

const Profile = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper title={'User | Instagram'} paddingBlock={'36px'}>
      <section className={`_Profile_ w-full pl-6`}>
        <div className={`_Profile-top_ flex w-full justify-start`}>
          <div className={`_Avatar-photo_ min-h-[160px] max-w-[160px]`}>
            <UserAvatar classname={`w-full min-w-[200px] min-h-[200px]`} />
          </div>
          <div className={`_Profile-statistics-block_ ml-[36px] w-full max-w-[744px] pl-[36px]`}>
            <Flex
              className={`Header_ flex w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}
            >
              <Text className={`title`} asComponent="h2" variant="H1">
                URL_Profile
              </Text>
              <Button
                href={
                  {
                    // todo: данные с сервера для редиректа на страницу настроек конкретного профиля
                    // pathname: AppRoutes.PROFILE + `/${data?.id}/settings`,
                  }
                }
                asComponent={Link}
                variant={'secondary'}
                className={`px-6 py-[6px]`}
              >
                Profile Settings
              </Button>
            </Flex>
            <Flex className={`_Followers-block_ w-full max-w-[396px]`}>
              <ul className={`_Followers-block-list_ flex w-full gap-[100px]`}>
                <li className={`flex flex-col items-center`}>
                  <span className={`inline-block w-full text-left`}>2218</span>
                  <span>{t.pages.profile.following}</span>
                </li>
                <li className={`flex flex-col items-center`}>
                  <span className={`inline-block w-full text-left`}>2218</span>
                  <span>{t.pages.profile.followers}</span>
                </li>
                <li className={`flex flex-col items-center`}>
                  <span className={`inline-block w-full text-left`}>2764</span>
                  <span>{t.pages.profile.publications}</span>
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
                asComponent={`a`}
                className={`pl-1.5 text-Primary-500 underline hover:cursor-pointer`}
                variant={'regular_text_16'}
              >
                laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </div>
          </div>
        </div>
        <ul
          className={`profile-bottom-gallery_ grid grid-cols-[repeat(4,228px)] grid-rows-[repeat(2,234px)] gap-x-2`}
        >
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`contain-content`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={228}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`contain-content`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={228}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={228}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={228}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={72}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={72}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={72}
              src={`/man.png`}
              width={234}
            />
          </li>
          <li className="photo-item -z-1 max-w-[234px] overflow-hidden">
            <Image
              className={`bg-cover`}
              alt={`photo` ?? EMPTY_STRING}
              aria-hidden
              height={72}
              src={`/man.png`}
              width={234}
            />
          </li>
        </ul>
      </section>
    </PageWrapper>
  )
}
//  <Image
//           alt={currentTextValue ?? EMPTY_STRING}
//           aria-hidden
//           className={classes.flag}
//           height={24}
//           src={`/flags/${currentValue}.png`}
//           width={24}
//         />

Profile.getLayout = getBaseAppLayout
export default Profile
