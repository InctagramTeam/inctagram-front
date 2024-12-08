import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, Textarea } from '@/shared'

export const PostDescription = (): ReturnComponent => {
  const setDescription = useAddPostPhotoStore(state => state.setDescription)

  return (
    <div className={'w-full max-w-[480px] self-start p-[24px]'}>
      <Textarea
        className={'h-[120px]'}
        id={'publication-post'}
        label={'Add publication descriptions'}
        name={'post-description'}
        onChange={event => setDescription(event.currentTarget.value)}
        placeholder={'Text-area'}
      />
    </div>
  )
}
