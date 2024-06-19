/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // temp -> todo: after -> delete this setting
  },
  poweredByHeader: false,
  env: {
    NEXT_API_URL: process.env.NEXT_PUBLIC_API_URL,
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
