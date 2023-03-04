/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // allowed hostnames
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
