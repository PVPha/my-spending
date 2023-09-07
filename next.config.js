/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
