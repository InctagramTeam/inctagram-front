import { Text } from '@/shared'

export const ProfileInfoDescription = () => {
  return (
    <>
      <Text variant={'regular_text_16'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Text>
      <Text
        asComponent={`a`}
        className={`pl-1.5 text-Primary-500 underline hover:cursor-pointer`}
        variant={'regular_text_16'}
      >
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    </>
  )
}
