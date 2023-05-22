/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: false,
  },
  devServer: {
    hot: true,
  },
}

module.exports = nextConfig
