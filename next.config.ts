module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/google-maps/:path*',
        destination: 'https://maps.googleapis.com/maps/api/place/details/:path*',
      },
    ];
  },
};