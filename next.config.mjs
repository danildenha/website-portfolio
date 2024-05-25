/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/your-repo-name',
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
