import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

type DropdownProps = {
  className?: string
  children: ReactNode
  /**
   * Если true, взаимодействие с внешними элементами будет отключено, будет видно только содержимое меню */
  modal?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & ComponentPropsWithoutRef<typeof DropdownRadix.Root>

export const Dropdown = (props: DropdownProps) => {
  const { children, modal, className, open, onOpenChange, ...rest } = props

  return (
    <DropdownRadix.Root open={open} onOpenChange={onOpenChange} modal={modal} {...rest}>
      {children}
    </DropdownRadix.Root>
  )
}

/**
 * Пример использования:
 *       <Dropdown.Menu
 *         align="end"
 *         trigger={
 *           <Button style={{ padding: '0' }} variant="text">
 *             <MoreIcon />
 *           </Button>
 *         }
 *       >
 *         <Dropdown.Item startIcon={<EditIcon />}>
 *           <Text variant="regular-text-14">Hello</Text>
 *         </Dropdown.Item>
 *         <Dropdown.Item startIcon={<TrashIcon />}>
 *           <Text variant="regular-text-14">Hello</Text>
 *         </Dropdown.Item>
 *       </Dropdown.Menu>
 */
