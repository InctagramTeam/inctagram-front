'use client'
import { getLayout } from '@/components/Layout/Layout'
import Link from 'next/link'
import { PageWrapper } from 'src/components/ui/page-wrapper'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import EditIcon from '@/assets/icons/EditIcon'
import MoreIcon from '@/assets/icons/MoreIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { Dropdown } from '@/components/ui/sam-selikoff_dropdown-menu/dropdown'

function Public() {
  let [text, setText] = useState('Select an item')

  return (
    <PageWrapper title={'Main | Instagram'}>
      {/*<nav className={'navbar'}>*/}
      {/*  <Link href={'/home'}>Home</Link>*/}
      {/*  <Link href={'/profile'}>Profile</Link>*/}
      {/*  <Link href={'/messenger'}>Messenger</Link>*/}
      {/*  <Link href={'/statistics'}>Statistics</Link>*/}
      {/*  <Link href={'/search'}>Search</Link>*/}
      {/*  <Link href={'/favorites'}>Favorites</Link>*/}
      {/*</nav>*/}
      <div></div>
      {/*<Dropdown.Menu*/}
      {/*  align="center"*/}
      {/*  modal*/}
      {/*  trigger={*/}
      {/*    <Button style={{ padding: '0' }} variant="text">*/}
      {/*      <MoreIcon />*/}
      {/*    </Button>*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Dropdown.Item startIcon={<EditIcon />}>*/}
      {/*    <Text variant="regular-text-14">Hello</Text>*/}
      {/*  </Dropdown.Item>*/}
      {/*  <Dropdown.Item startIcon={<TrashIcon />}>*/}
      {/*    <Text variant="regular-text-14">Hello</Text>*/}
      {/*  </Dropdown.Item>*/}
      {/*</Dropdown.Menu>*/}

      <Dropdown>
        <Dropdown.Button>
          <MoreIcon />
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.MenuItem onSelect={() => setText('Click_1')}>Item 1</Dropdown.MenuItem>
          <Dropdown.MenuItem onSelect={() => setText('Click_2')}>Item 2</Dropdown.MenuItem>
          <Dropdown.MenuItem onSelect={() => setText('Click_3')}>Item 3</Dropdown.MenuItem>
        </Dropdown.Menu>
      </Dropdown>
      <div className="px-6 py-8 text-right">
        <p>{text}</p>
      </div>
    </PageWrapper>
  )
}

Public.getLayout = getLayout
export default Public
