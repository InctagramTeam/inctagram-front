import { ComponentPropsWithoutRef, ReactNode } from "react";

import * as DropdownRadix from "@radix-ui/react-dropdown-menu";

type DropdownProps = {
  children: ReactNode;
  className?: string;
  /**
   * Если true, взаимодействие с внешними элементами будет отключено, будет видно только содержимое меню */
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
} & ComponentPropsWithoutRef<typeof DropdownRadix.Root>;

export const Dropdown = (props: DropdownProps) => {
  const { children, className, modal, onOpenChange, open, ...rest } = props;

  return (
    <DropdownRadix.Root
      {...rest}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      {children}
    </DropdownRadix.Root>
  );
};

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
