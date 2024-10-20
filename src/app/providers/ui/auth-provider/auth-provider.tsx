import { ReactNode, useEffect } from 'react'

import { TypeComponentAuthFields } from '@/app/providers/model/types/role-type'
import { useUser } from '@/entities/user'
import { getAuthUrl } from '@/shared/config/url/api.config'
import { getStoreLocalStorage } from '@/shared/lib/utils'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

type Props = { children: ReactNode } & TypeComponentAuthFields

const DynamicCheckRole = dynamic(() => import('../check-role/check-role'), {
  /**
   - Компонент чтобы грузился асинхронно только на клиенте, отключаем ssr, кроме страниц с ролями: isOnlyAdmin, isOnlyUser
   - Отключаем ssr для тех, кто требует авторизвации
   * */
  ssr: false,
})

const AuthProvider = (props: Props) => {
  const {
    Component: { isOnlyAdmin, isOnlyUser },
    children,
  } = props

  // забираем авторизованного юзера
  const { user } = useUser()
  const router = useRouter()

  /* todo: получить -> authMe, logout */
  // const { authMe, logout } = useActions()

  /** При первом запуске Арр */
  useEffect(() => {
    const accessToken = getStoreLocalStorage('accessToken')

    // if (!accessToken) {
    //   router.push(getAuthUrl('/sign-in'))
    // }
    // if (accessToken) authMe()
  }, [])
  /** Проверка на рефреш-токен при переходе на др.страницу - если его нет, то logout() */
  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    // if (!refreshToken && user) logout()
  }, [router.pathname])

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
