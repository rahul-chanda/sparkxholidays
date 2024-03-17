/** @type {import('next').NextConfig} */
import pkg from 'webpack';
const { webpack } = pkg;

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // trailingSlash: true,
  images: { unoptimized: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  }
};

export default nextConfig;
