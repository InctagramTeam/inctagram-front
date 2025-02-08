import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import postsApi from '@/entities/posts/api/posts-api'
import { ButtonSpinner, ReturnComponent, Text } from '@/shared'
import { Gallery, GalleryImage } from '@/widgets'
import { useInfiniteQuery } from '@tanstack/react-query'

export const ProfileGallery = ({ userId }: { userId: number }): ReturnComponent => {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, status } = useInfiniteQuery({
    queryKey: ['posts', { userId }],
    queryFn: ({ pageParam = 1 }) => postsApi.getPublicPostsByUserId(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: lastPage => lastPage.nextOffset ?? undefined,
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <>
      <Gallery className={'profile-bottom-gallery_ grid grid-cols-4 gap-[12px]'}>
        {status === 'pending' ? (
          <ButtonSpinner height={30} width={30} />
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          data.pages.map(page => (
            <Fragment key={page.nextOffset}>
              {page.data.map(post => (
                <li key={post.id}>
                  <GalleryImage postData={post} />
                </li>
              ))}
            </Fragment>
          ))
        )}
      </Gallery>
      <div className={'mt-4 flex justify-center'} ref={ref}>
        {isFetchingNextPage ? (
          <ButtonSpinner height={30} width={30} />
        ) : (
          <Text textColor={'lightDark'} variant={'small-text-12'}>
            No more posts
          </Text>
        )}
      </div>
    </>
  )
}
