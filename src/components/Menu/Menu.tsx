import {
  Home,
  HomeOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  SearchOutline,
} from '@/assets/icons'

export const Menu = () => {
  return (
    <div
      className={
        'flex items-center justify-around w-[360px] h-[60px] border border-Dark-300 bg-Dark-700 '
      }
    >
      <Home color={'#397DF6'} />
      <HomeOutline />
      <PlusSquareOutline />
      <MessageCircleOutline />
      <SearchOutline />
      <PersonOutline />
    </div>
  )
}
