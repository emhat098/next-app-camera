/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'camera=(*), microphone=(*)',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
