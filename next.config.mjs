/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
