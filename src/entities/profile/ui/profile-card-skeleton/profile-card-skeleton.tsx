'use client'

import { Skeleton } from '@/shared/ui/skeleton'
import { Flex } from '@/shared'

export const ProfileCardSkeleton = () => {
  return (
    <section className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <div>
          <Skeleton className={`min-h-[200px] w-full min-w-[200px] rounded-full`} />
        </div>
        <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
          <Flex
            className={`Header_ flex w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}
          >
            <Skeleton className={'h-[30px] w-[140px] rounded-xl'} />
            <Skeleton className={'h-[30px] w-[160px] rounded-xl'} />
          </Flex>
          <div className={`_description_ w-full text-balance pb-[53px] pt-[23px]`}>
            <Skeleton className={'h-[100px] w-full rounded-xl'} />
          </div>
        </div>
      </div>
      <ul
        className={`profile-bottom-gallery_ grid grid-cols-[repeat(4,228px)] grid-rows-[repeat(2,234px)] gap-1`}
      >
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px] rounded-xl'} />
        </li>
      </ul>
    </section>
  )
}
