/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures trailing slashes are added to URLs
  basePath: '/mycanadianuni', // Replace with your repository name
  assetPrefix: '/mycanadianuni', // Replace with your repository name
};

export default nextConfig;
