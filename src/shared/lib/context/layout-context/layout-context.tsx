import { ReactNode, createContext, useContext, useState } from 'react'

// type
type Props = {
  isCollapsed?: boolean
  isAuth?: boolean
  toggleSidebar?: () => void
}

// default values
export const LayoutContext = createContext<Props>({
  isCollapsed: false,
  isAuth: false,
  toggleSidebar: () => {},
})

// custom hook
export const useLayoutContext = () => {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error('Context error!')
  }

  return context
}

// layout-layout-context-wrapper
export const LayoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(prevState => !prevState)
  }

  return (
    <LayoutContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  )
}
