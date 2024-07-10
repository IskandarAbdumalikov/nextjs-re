/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.dummyjson.com",
      "assets.dummyjson.com",
      "s3-alpha-sig.figma.com",
    ],
  },
};

export default nextConfig;
