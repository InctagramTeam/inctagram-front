'use client'

import { Skeleton } from '@/shared/ui/skeleton'
import { Flex } from '@/shared'

export const ProfileCardSkeleton = () => {
  return (
    <section className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <div>
          <Skeleton circle height={200} width={200} />
        </div>
        <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
          <Flex
            className={`Header_ flex w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}
          >
            <Skeleton width={140} height={30} />
            <Skeleton height={30} width={160} />
          </Flex>
          <div className={`_description_ w-full text-balance pb-[53px] pt-[23px]`}>
            <Skeleton maxWidth height={100} />
          </div>
        </div>
      </div>
      <ul
        className={`profile-bottom-gallery_ grid grid-cols-[repeat(4,228px)] grid-rows-[repeat(2,234px)] gap-1`}
      >
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
        <li className={'photo-item max-w-[234px] overflow-hidden'}>
          <Skeleton className={'h-[234px] w-[228px]'} />
        </li>
      </ul>
    </section>
  )
}