import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import { Modal } from '@/components/ui/modal/modal'
import { Button } from '@/components/ui/button'

function Public() {
  return (
    <PageWrapper title={'Main | Instagram'}>
      <nav className={'navbar'}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/messenger'}>Messenger</Link>
        <Link href={'/statistics'}>Statistics</Link>
        <Link href={'/search'}>Search</Link>
        <Link href={'/favorites'}>Favorites</Link>
      </nav>
      <div></div>
      <Modal>
        <Modal.Button asChild className={'w-full max-w-[150px]'}>
          <Button className={'w-full max-w-[150px]'}>Follow</Button>
        </Modal.Button>
        <Modal.Content title={'Slim'}>Hello</Modal.Content>
      </Modal>
    </PageWrapper>
  )
}

Public.getLayout = getLayout
export default Public
