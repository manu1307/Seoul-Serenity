/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["parks.seoul.go.kr", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "parks.seoul.go.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
