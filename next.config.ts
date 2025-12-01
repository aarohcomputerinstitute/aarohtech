import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // UNCOMMENT TO ENABLE STATIC EXPORT.
  // images: { unoptimized: true }, // UNCOMMENT TO ENABLE STATIC EXPORT.
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx']
};

export default nextConfig;
