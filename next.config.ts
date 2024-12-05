/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/api/google-maps/:path*',
        destination: 'https://maps.googleapis.com/maps/api/place/details/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
