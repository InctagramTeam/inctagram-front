import { getBaseAppLayout } from '@/shared'
import { AddPost } from '@/shared/ui/add-photo/AddPost'
import { PageWrapper } from '@/widgets'

const Create = () => {
  return (
    <PageWrapper title={'Create | Instagram'}>
      <AddPost />
    </PageWrapper>
  )
}

Create.getLayout = getBaseAppLayout
export default Create
