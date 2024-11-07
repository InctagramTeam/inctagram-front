import { NextRequest, NextResponse } from 'next/server'

// Маршруты, доступные только авторизованным пользователям
const protectedRoutes = ['/my-profile/:id/settings']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value
  const userId = request.cookies.get('userId')?.value
  const { pathname } = request.nextUrl

  // Проверка авторизации: если защищённый маршрут и нет токена, перенаправить на страницу логина
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    const signInUrl = new URL('/auth/sign-in', request.url)

    return NextResponse.redirect(signInUrl)
  }

  // Логика проверки, что пользователь не может зайти в настройки чужого профиля
  if (pathname.includes('/settings')) {
    const profileId = pathname.split('/')[2] // Получаем ID профиля из URL

    // Если userId не совпадает с profileId, перенаправляем на страницу профиля
    if (userId !== profileId) {
      const profileUrl = new URL(`/my-profile/${profileId}`, request.url)

      return NextResponse.redirect(profileUrl)
    }
  }

  // Позволяем продолжить загрузку страницы, если нет проблем
  return NextResponse.next()
}

export const config = {
  matcher: ['/my-profile/:id/settings/:path*'],
}
