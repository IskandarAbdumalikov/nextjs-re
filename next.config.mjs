/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.dummyjson.com",
      "assets.dummyjson.com",
      "s3-alpha-sig.figma.com",
      "i.pinimg.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

export default nextConfig;
