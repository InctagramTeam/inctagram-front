import { AddPhotoContainer, getBaseAppLayout } from '@/shared'
import { PageWrapper } from '@/widgets'

const Create = () => {
  return (
    <PageWrapper title={'Create | Instagram'}>
      <h1>Create</h1>
      <AddPhotoContainer />
    </PageWrapper>
  )
}

Create.getLayout = getBaseAppLayout
export default Create
