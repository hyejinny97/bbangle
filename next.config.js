/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'k.kakaocdn.net',
  //       port: '443',
  //       pathname: '/dn/**'
  //     }
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com'
      },
      { hostname: 'k.kakaocdn.net' }
    ]
  },
  experimental: {
    // appDir: true,
    turbo: {
      rules: {
        // Option format
        '*.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              format: 'md'
            }
          }
        ],
        // Option-less format
        '*.mdx': ['@mdx-js/loader']
      },
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
