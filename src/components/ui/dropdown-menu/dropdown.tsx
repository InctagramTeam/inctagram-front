import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// Context - local for this file
type DropdownContextType = { open: boolean; setOpen: (open: boolean) => void }

const DropdownContext = createContext<DropdownContextType>({
  open: false,
  setOpen: () => {},
})

type DropdownPropsType = {
  children: ReactNode
}

// Dropdown
export default function Dropdown({ children }: { children: ReactNode }) {
  let [open, setOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  )
}

// Dropdown.Button = DropdownButton;
function DropdownButton({ children }: { children: ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger className="cursor-default select-none rounded px-4 text-2xl hover:bg-gray-200/50 focus-visible:outline-none data-[state=open]:bg-gray-200/75">
      {children}
    </RadixDropdownMenu.Trigger>
  )
}
Dropdown.Button = DropdownButton

let DropdownMenuContext = createContext({ closeMenu: () => {} })

// Dropdown.Menu = DropdownMenu;
function DropdownMenu({ children }: { children: ReactNode }) {
  let { open, setOpen } = useContext(DropdownContext)
  let controls = useAnimationControls()

  async function closeMenu() {
    await controls.start('closed')
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      controls.start('open')
    }
  }, [controls, open])

  return (
    <DropdownMenuContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.Content
              align="start"
              className="mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur"
              // asChild -- для перенаправляения всех пропсов родителя (align, className) в дочерний элемент
              asChild
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: 'easeOut', duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.2 },
                  },
                }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuContext.Provider>
  )
}
Dropdown.Menu = DropdownMenu

// DropdownMenu.Item === DropdownMenuItem
function DropdownMenuItem({
  children,
  onSelect = () => {},
}: {
  children: ReactNode
  onSelect?: () => void
}) {
  let controls = useAnimationControls()
  let { closeMenu } = useContext(DropdownMenuContext)
  // console.log(closeMenu);

  return (
    <RadixDropdownMenu.Item
      onSelect={async e => {
        e.preventDefault()

        await controls.start({
          backgroundColor: '#fff',
          color: '#000',
          transition: { duration: 0.04 },
        })
        await controls.start({
          backgroundColor: '#38bdf8',
          color: '#fff',
          transition: { duration: 0.04 },
        })
        await sleep(0.075)

        await closeMenu()
        onSelect()
      }}
      className=" w-40 select-none rounded px-2 py-1.5 text-gray-700 data-[highlighted]:bg-sky-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none"
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </RadixDropdownMenu.Item>
  )
}
Dropdown.MenuItem = DropdownMenuItem

const sleep = (s: number) => new Promise(resolve => setTimeout(resolve, s * 1000))
