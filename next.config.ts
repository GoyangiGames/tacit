import type { NextConfig } from "next";

// Check if running in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// Fallback for local development
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "your-repo-name";

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: "export", // Generate static HTML files
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;