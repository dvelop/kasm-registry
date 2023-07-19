/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'VLC Kasm Registry',
    description: 'Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://dvelop.github.io//kasm-registry/',
    contactUrl: 'https://github.com/dvelop/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

