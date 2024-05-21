import logo from '@/assets/images/logo.svg'
import { cn } from '@/utils/merge-cn'
import Image from 'next/image'
import Link from 'next/link'
export const Logo = () => {
  const classes = {
    img: `w-full h-full object-contain`,
    link: cn(
      `inline-block max-w-[128px] w-full h-[36px] rounded-[4px] border-[2px] border-transparent outline-none`,
      `transition-colors transition-opacity duration-300`,
      `hover:opacity-70 active:opacity-30 focus:outline-none focus-visible:border-Primary-500`
    ),
  }

  return (
    <Link className={classes.link} href={'/home'}>
      <Image alt={'Logo'} className={classes.img} height={36} src={logo} width={128} />
    </Link>
  )
}
