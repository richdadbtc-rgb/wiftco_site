/** @type {import('next').NextConfig} */
const adminBackend = process.env.ADMIN_BACKEND_URL || 'http://127.0.0.1:8000';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: `${adminBackend}/admin/`,
      },
      {
        source: '/admin/:path*',
        destination: `${adminBackend}/admin/:path*`,
      },
      {
        source: '/static/admin/:path*',
        destination: `${adminBackend}/static/admin/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
