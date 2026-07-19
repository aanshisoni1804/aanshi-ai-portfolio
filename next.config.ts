import type { NextConfig } from "next";

const repo = "aanshi-ai-portfolio";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? `/${repo}` : "",
  assetPrefix: isProduction ? `/${repo}/` : "",
};

export default nextConfig;
