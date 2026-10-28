/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const repo = "restaurant-demo-1";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
  trailingSlash: true,
};

export default nextConfig;
