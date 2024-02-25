// /** @type {import('next').NextConfig} */


import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
export default withMDX()({
  output: 'export',
  images: {
    unoptimized: true,
        remotePatterns: [
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
        port: '',
      },
      {hostname: 'media1.giphy.com'},
        {hostname: 'youtube.com'}
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack(config) {
    // Grab the existing rule that handles SVG imports

   

    return config;
  },
});