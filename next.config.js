/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config'); // 导入 i18n 配置

const nextConfig = {
  i18n, // 添加 i18n 配置
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.builder.io'],
  },
}

module.exports = nextConfig 