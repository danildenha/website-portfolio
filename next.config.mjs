/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // This exports the index page
      // Add more paths as needed
    };
  },
};

export default nextConfig;
