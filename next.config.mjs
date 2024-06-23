/** @types {import('next').NextConfig} */
const nextConfig = {
  images: {
  },
  poweredByHeader: false,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API,
    GITHUB_OAUTH2_URL: process.env.NEXT_PUBLIC_GITHUB_OAUTH2,
    GOOGLE_OAUTH2_URL: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2,
    RECAPTCHA_API_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["ru","en",],
    defaultLocale: "en",
    localeDetection: false,
  },
}

export default nextConfig
