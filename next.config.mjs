/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['valt.pro', 'www.valt.pro'],
        path: '/_next/image',
    }
};

export default nextConfig;
