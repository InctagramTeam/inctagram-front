import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
} from "react";

import { ReturnComponent } from "@/shared/types";
import * as DropdownRadix from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";

export type MenuProps = {
  /** Выравнивание относительно триггера (кнопки) */
  align?: "center" | "end" | "start";
  className?: string;
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  /**
   * onPointerDownOutside - Обработчик события мыши или "касание" пальцем экрана,
   * вызываемый при возникновении события с указателем за пределами компонента.
   * Его можно предотвратить, вызвав event.preventDefault.
   */
  portal?: boolean;
  /** Расстояние в "px" от trigger-a */
  sideOffset?: number;
  style?: CSSProperties;
  trigger: ReactNode;
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>;

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (props, ref): ReturnComponent => {
    const {
      align = "end",
      children,
      className,
      modal,
      onOpenChange,
      open,
      portal = true,
      sideOffset = 2,
      style,
      trigger,
      ...rest
    } = props;

    const menuContent = (
      <DropdownRadix.Content
        align={align}
        className={clsx(
          `before:rounded-xs relative
         overflow-visible rounded-[10px] border border-Dark-100 bg-Dark-500 p-[5px] pb-0 text-Light-100
         shadow-sm before:absolute before:-top-[6px] before:left-[10px] before:z-1 before:h-[10px]
         before:w-[10px] before:rotate-45 before:border-l-[1px] before:border-t-[1px]
         before:border-Dark-100
         before:bg-Dark-500 before:shadow-[0_07px_Dark-500] before:content-['']`,
          className,
        )}
        ref={ref}
        sideOffset={sideOffset}
        style={style}
        {...rest}
        onPointerDownOutside={(e) => {
          if (!portal) {
            e.detail.originalEvent.preventDefault();
          }
        }}
      >
        {children}
      </DropdownRadix.Content>
    );

    return (
      <DropdownRadix.Root modal={modal} onOpenChange={onOpenChange} open={open}>
        <DropdownRadix.Trigger asChild className={"outline-none"} style={style}>
          {trigger}
        </DropdownRadix.Trigger>
        {portal ? (
          <DropdownRadix.Portal>{menuContent}</DropdownRadix.Portal>
        ) : (
          menuContent
        )}
      </DropdownRadix.Root>
    );
  },
);

Menu.displayName = "Menu";
export { Menu };
