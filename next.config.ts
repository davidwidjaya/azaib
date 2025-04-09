import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MY_API_KEY: process.env.MY_API_KEY,
  },
  reactStrictMode: true,
};

export default nextConfig;
