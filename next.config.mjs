/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/website-portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  }
};

export default nextConfig;
