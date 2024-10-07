const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@packagename/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
};
