import { AddPhotoContainer, ReturnComponent, getBaseAppLayout, useTranslation } from '@/shared'
import { PageWrapper } from '@/widgets'

const Create = (): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <PageWrapper
      description={t.pages.createPost.metaDescription}
      title={t.pages.createPost.metaTitle}
    >
      <h1 className={'sr-only'}>{t.pages.createPost.pageTitle}</h1>
      <AddPhotoContainer />
    </PageWrapper>
  )
}

Create.getLayout = getBaseAppLayout
export default Create
