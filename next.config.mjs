/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.prismic.io",
//       },
//     ],
//   },
//   // images: {
//   //   loader: "custom",
//   //   loaderFile: "./my/image/loader.js",
//   // },
// };

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Next.js image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

export default nextConfig;
