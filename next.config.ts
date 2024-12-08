import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',  // This configures the app for static export
  reactStrictMode: true,  
};

export default nextConfig;
