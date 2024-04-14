/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  images: {
    domains: ['localhost', 'https://i.postimg.cc' ],
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
