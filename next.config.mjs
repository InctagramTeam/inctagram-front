/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru","en",],
    defaultLocale: "en",
    localeDetection: false,
  },
}

export default nextConfig
