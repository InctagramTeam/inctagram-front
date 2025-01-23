import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  // const userId = request.cookies.get('userId')?.value
  //
  // const { pathname } = request.nextUrl
  //
  // if (pathname.includes('/settings')) {
  //   const profileId = pathname.split('/')[2]
  //
  //   if (!userId || userId !== profileId) {
  //     return NextResponse.redirect(new URL(`/my-profile/${profileId}`, request.url))
  //   }
  // }

  return NextResponse.next()
}

// export const config = {
//   matcher: ['/my-profile/:id/settings/:path*'],
// }
