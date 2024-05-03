import { FC, ReactNode } from 'react'

import { cn } from '@/utils/merge-cn'

type PropsType = {
  children?: ReactNode
}

export const Container: FC<PropsType> = ({ children }) => {
  return (
    <div className={cn(`container mx-auto min-h-screen max-w-[1280px] px-[15px] py-0`)}>
      {children}
    </div>
  )
}
