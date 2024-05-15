import { getLayout } from '@/components/Layout/Layout'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import MoreIcon from '@/assets/icons/MoreIcon'
import { Dropdown } from '@/components/ui/DropDownMenu'
import { Text } from '@/components/ui/text'
import TrashIcon from '@/assets/icons/TrashIcon'
import EditIcon from '@/assets/icons/EditIcon'

function Public() {
  const [editMode, setEditMode] = useState(false)
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false)

  const openEditModal = () => {
    const handleActivateEditMode = () => setEditMode(true)
  }

  return (
    <Dropdown.Menu
      align="end"
      modal={false}
      trigger={
        <Button style={{ padding: '0' }} variant="text">
          <MoreIcon />
        </Button>
      }
    >
      <Dropdown.Item onClick={openEditModal} startIcon={<EditIcon />}>
        <Text variant="regular-text-14">Редактировать</Text>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setOpenConfirmDelete(true)} startIcon={<TrashIcon />}>
        <Text variant="regular-text-14">Удалить</Text>
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
Public.getLayout = getLayout
export default Public
