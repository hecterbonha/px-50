module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/design",
        destination: "/design/instead",
        permanent: true,
      },
    ];
  },
};
