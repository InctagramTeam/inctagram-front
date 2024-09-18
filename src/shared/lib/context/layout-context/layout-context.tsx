import { createContext, ReactNode, useContext, useState } from 'react'

// types
type Props = {
  isAuth?: boolean
  isCollapsed?: boolean
  toggleSidebar?: () => void
}

// default values
export const LayoutContext = createContext<Props>({
  isAuth: false,
  isCollapsed: false,
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
