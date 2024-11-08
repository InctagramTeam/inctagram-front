import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const token = request.cookies.get('accessToken')?.value
  const userId = request.cookies.get('userId')?.value
  const { pathname } = request.nextUrl

  // // Проверка авторизации: если защищённый маршрут и нет токена, перенаправить на страницу логина
  // if (pathname.startsWith('/my-profile') && pathname.includes('/settings') && !token) {
  //   return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  // }

  // Логика проверки, что пользователь не может зайти в настройки чужого профиля
  if (pathname.includes('/settings')) {
    const profileId = pathname.split('/')[2] // Извлекаем ID профиля из URL

    // Если userId не совпадает с profileId, перенаправляем на страницу профиля
    if (userId !== profileId) {
      return NextResponse.redirect(new URL(`/my-profile/${profileId}`, request.url))
    }
  }

  // Продолжаем загрузку страницы, если все проверки пройдены
  return NextResponse.next()
}

export const config = {
  matcher: ['/my-profile/:id/settings/:path*'],
}
