import type { NextConfig } from "next";

// Static export for GitHub Pages. Works at the site root, so name the repo
// <username>.github.io (khaidirm5.github.io). A project repo would need basePath.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
