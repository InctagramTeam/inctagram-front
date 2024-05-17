import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'
import {
  ComponentPropsWithoutRef,
  createContext,
  CSSProperties,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { clsx } from 'clsx'
import { Text } from '@/components/ui/text'

// local context type
type DropdownContext = { open: boolean; setOpen: (open: boolean) => void }

/** Контекст с локальными данными этого файла */
const DropdownContext = createContext<DropdownContext>({ open: false, setOpen: () => {} })

// props-type
type DropdownProps = {
  className?: string
  children: ReactNode
  /**
   * Модальность выпадающего меню. Если установлено значение true, взаимодействие свнешними
   * элементами будет отключено, и читателям экрана будет видно только содержимое меню.
   */
  modal?: boolean
} & ComponentPropsWithoutRef<typeof DropdownRadix.Root>

// --------------------------------------------> Dropdown <-----------------------------------------------------------------
export const Dropdown = ({ children, modal, className, ...rest }: DropdownProps) => {
  let [open, setOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <DropdownRadix.Root open={open} onOpenChange={setOpen} modal={modal} {...rest}>
        {children}
      </DropdownRadix.Root>
    </DropdownContext.Provider>
  )
}
// ----------------------------------------> DropdownButton <-----------------------------------------------------------------
type DropdownButton = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownRadix.Trigger>

function DropdownButton({ children, className, ...rest }: DropdownButton) {
  return (
    <DropdownRadix.Trigger
      asChild
      className={clsx(
        `_Trigger_ cursor-pointer select-none rounded text-regular-text-16 bg-Dark-700
        hover:transition-all duration-150 ease-in-out
        focus-visible:outline-none`,
        className
      )}
      {...rest}
    >
      {children}
    </DropdownRadix.Trigger>
  )
}
Dropdown.Button = DropdownButton
// --------------------------------------->  DropdownMenu <-----------------------------------------------------------------
/* context */
let DropdownMenuContext = createContext({ closeMenu: () => {} })

/* type */
type DropdownMenu = {
  children: ReactNode
  /**
   * onPointerDownOutside - Обработчик события мыши или "касание" пальцем экрана,
   * вызываемый при возникновении события с указателем за пределами компонента.
   * Его можно предотвратить, вызвав event.preventDefault.
   */
  portal?: boolean
  /** Выравнивание относительно триггера (кнопки) */
  align?: 'center' | 'end' | 'start'
  /** Расстояние в "px" от trigger-a */
  sideOffset?: number
  className?: string
} & ComponentPropsWithoutRef<typeof DropdownRadix.Content>

/* Component */
function DropdownMenu({
  children,
  portal = true,
  align = 'start',
  className,
  sideOffset = 8,
  ...rest
}: DropdownMenu) {
  const { open, setOpen } = useContext(DropdownContext)

  async function closeMenu() {
    setOpen(false)
  }

  return (
    <DropdownMenuContext.Provider value={{ closeMenu }}>
      {open && (
        <DropdownRadix.Portal forceMount>
          <DropdownRadix.Content
            sideOffset={sideOffset}
            align={align}
            className={clsx(
              `relative z-10 bg-Dark-500 border-1 border-Dark-100 rounded will-change-transform mt-1
                overflow-hidden p-2 text-left shadow-sm shadow-Dark-500 backdrop-blur
                data-[side=top]:animate-[slide-down-and-fade_150ms]
                data-[side=right]:animate-[slide-left-and-fade_150ms]
                data-[side=bottom]:animate-[slide-up-and-fade_150ms]
                data-[side=left]:animate-[slide-right-and-fade_150ms]
                hover:ring-1 hover:ring-Dark-100
                focus:outline-none focus:ring-2 focus:ring-Dark-100 focus:ring-opacity-50
                focus-visible:outline-none focus-visible:ring-1 focus-visible:offset-1
                focus-visible:ring-opacity-50
                `
            )}
            {...rest}
            onPointerDownOutside={e => {
              if (!portal) {
                e.detail.originalEvent.preventDefault()
              }
            }}
          >
            {/*<DropdownRadix.Arrow*/}
            {/*  className={`relative text-Dark-300 stroke-1 stroke-Dark-500 fill-current-Dark-700`}*/}
            {/*  height={0}*/}
            {/*  width={0}*/}
            {/*/>*/}
            {/*<DropdownRadix.Arrow*/}
            {/*  className={`relative z-1 -top-1 left-0 text-Dark-300 fill-current-Dark-700 stroke-1 stroke-Dark-500`}*/}
            {/*  height={0}*/}
            {/*  width={0}*/}
            {/*/>*/}
            {/*<DropdownRadix.Arrow*/}
            {/*  className={`absolute -top-[0.4rem] left-1/2 rotate-45 w-4 h-4 bg-Dark-700 border-2 border-Dark-100*/}
            {/*  border-t-0 border-left-0 fill-Dark-700`}*/}
            {/*/>*/}
            <DropdownRadix.Arrow
              className={`relative z-1 -top-1 left-0 fill-Primary-100 stroke-1 stroke-Dark-500`}
              height={15}
              width={10}
            />
            {children}
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      )}
    </DropdownMenuContext.Provider>
  )
}
Dropdown.Menu = DropdownMenu
// -------------------------------------> DropdownMenuItem <-----------------------------------------------------------------
type DropdownMenuItem = {
  children: ReactNode
  onSelect?: () => void
  endIcon?: ReactNode
  startIcon?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownRadix.Item>

function DropdownItem({ children, onSelect, endIcon, startIcon, ...rest }: DropdownMenuItem) {
  let { closeMenu } = useContext(DropdownMenuContext)
  return (
    <DropdownRadix.Item
      onSelect={async e => {
        e.preventDefault()
        await sleep(0.075)
        await closeMenu()
        if (onSelect) {
          onSelect()
        }
      }}
      className="cursor-pointer bg-Dark-500 flex gap-[6px] items-center p-[0.75rem] outline-none
      w-40 select-none rounded px-2 py-1.5 text-Light-100 data-[highlighted]:bg-Dark-100 data-[highlighted]:text-Light-100
       data-[highlighted]:focus:outline-none transition-all duration-150 ease-linear hover:bg-Dark-100"
      {...rest}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </DropdownRadix.Item>
  )
}

/**
 * data-[highlighted]:bg-sky-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none
 * используется для выделения элемента в выпадающем меню, когда он находится в активном, выделенном состоянии.
 */

/**
 * Для создания задержки перед выполнением операций в асинхронном коде.
 */
const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))
Dropdown.Item = DropdownItem

// -------------------------------------> DropdownMenuItemWithIcon <-----------------------------------------------------------------
export type DropdownItemWithIconProps = Omit<DropdownMenuItemProps, 'children'> & {
  icon: ReactNode
  text?: string
  disabled?: boolean
  onSelect: () => void
  className?: string
  style: CSSProperties
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon = ({
  icon,
  text,
  disabled,
  onSelect,
  className,
  style,
  ...rest
}: DropdownItemWithIconProps) => {
  const classNames = {
    item: clsx(
      `cursor-pointer flex gap-[6px] items-center p-[12px_0] text-regular-text-14 outline-none`,
      className
    ),
    itemIcon: clsx(
      `flex items-center justify-center w-6 h-6 disabled:opacity-20`,
      disabled && `disabled:opacity-20 opacity-20`
    ),
  }

  return (
    <DropdownRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <div>
        <div className={classNames.itemIcon}>{icon}</div>
        <Text variant="regular_text_16">{text}</Text>
      </div>
    </DropdownRadix.Item>
  )
}
Dropdown.ItemWithIcon = DropdownItemWithIcon

// -------------------------------------> Separator <-----------------------------------------------------------------
/**
 * Разделяет элементы меню - Необязателен, вместо него можно:
 * <RadixDropdownMenuItem присвоить className="w-40 select-none rounded px-2 py-1.5 text-Dark-100
 * data-[highlighted]:bg-Primary-500 data-[highlighted]:text-white data-[highlighted]:focus:outline-none">
 */

type SeparatorProps = ComponentPropsWithoutRef<typeof DropdownRadix.Separator>

export const Separator = ({ className, ...rest }: SeparatorProps) => {
  return (
    <DropdownRadix.Separator
      className={clsx(`h-[0.5px] bg-Light-900/50 shadow-sm shadow-Dark-100`, className)}
      {...rest}
    />
  )
}
Dropdown.Separator = Separator

/**
 * Пример использования:
 *   let [text, setText] = useState('Select an item')
 *
 * <Dropdown>
 *         <Dropdown.Button>
 *           <MoreIcon />
 *         </Dropdown.Button>
 *         <Dropdown.Menu>
 *            <Dropdown.Item onSelect={() => setText('Click_1')}>Item 1</Dropdown.Item>
 *            <Dropdown.Separator />
 *            <Dropdown.Item onSelect={() => setText('Click_2')}>Item 2</Dropdown.Item>
 *            <Dropdown.Separator />
 *            <Dropdown.Item onSelect={() => setText('Click_3')}>Item 3</Dropdown.Item>
 *         </Dropdown.Menu>
 *  </Dropdown>
        <div className="px-6 py-8 text-right">
 *         <p>{text}</p>
 *      </div>
 *
 */
