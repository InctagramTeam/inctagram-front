import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { TypeComponentAuthFields } from '../../model/type/role-type'
import { ReactNode, useEffect } from 'react'
import { useUser } from '@/entities/user'

type Props = TypeComponentAuthFields & { children: ReactNode }

const DynamicCheckRole = dynamic(() => import('../check-role/check-role'), {
  /**
   - Компонент чтобы грузился асинхронно только на клиенте, отключаем ssr, кроме траниц с ролями: isOnlyAdmin, isOnlyUser
   - Отключаем ssr для тех, кто требует авторизвации
   * */
  ssr: false,
})

const AuthProvider = (props: Props) => {
  const {
    children,
    Component: { isOnlyAdmin, isOnlyUser },
  } = props

  // забираем авторизованного юзера
  const { user } = useUser()

  /* todo: получить -> authMe, logout */
  // const { authMe, logout } = useActions()
  const { pathname } = useRouter()

  /** При первом запуске Арр */
  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    // if (accessToken) authMe()
  }, [])

  /** Проверка на рефреш-токен при переходе на др.страницу - если его нет, то logout() */
  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    // if (!refreshToken && user) logout()
  }, [pathname])

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
