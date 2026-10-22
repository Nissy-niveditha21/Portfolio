/** @type {import('next').NextConfig} */

// The site is published as a GitHub Pages project site, so it is served from
// https://nissy-niveditha21.github.io/Portfolio/ rather than the domain root.
// basePath is only applied for production builds so `next dev` stays at "/".
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Portfolio' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Required for `output: 'export'` — no server-side image optimiser exists.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
