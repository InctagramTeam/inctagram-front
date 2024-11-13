import { getBaseAppLayout } from '@/shared'
import { AddPhotoForm } from '@/shared/ui/add-post-photo/add-post-photo-form'
import { PageWrapper } from '@/widgets'

const Create = () => {
  return (
    <PageWrapper title={'Create | Instagram'}>
      <AddPhotoForm />
    </PageWrapper>
  )
}

Create.getLayout = getBaseAppLayout
export default Create
