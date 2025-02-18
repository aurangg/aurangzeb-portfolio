/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./my/image/loader.js",
  // },
};

export default nextConfig;
