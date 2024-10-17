import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'
import { AddProfilePhotoWithCrop } from '@/shared/ui/add-profile-photo/add-profile-photo-with-crop'

const Home = () => {
  return (
    <PageWrapper title={'Home | Instagram'}>
      <h1>Home</h1>
      <AddProfilePhotoWithCrop />
    </PageWrapper>
  )
}

Home.getLayout = getBaseAppLayout
export default Home
