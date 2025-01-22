import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, Textarea } from '@/shared'

import { AvatarUser } from './user-avatar'

export const PostDescription = (): ReturnComponent => {
  const setDescription = useAddPostPhotoStore(state => state.setDescription)
  const description = useAddPostPhotoStore(state => state.description)

  return (
    <div className={'w-full max-w-[480px] self-start p-[24px]'}>
      <AvatarUser />
      <Textarea
        className={'h-[120px]'}
        defaultCounter={description?.length}
        id={'publication-post'}
        label={'Add publication descriptions'}
        maxLength={500}
        name={'post-description'}
        onChange={event => setDescription(event.currentTarget.value)}
        placeholder={'Text-area'}
        value={description}
      />
    </div>
  )
}
