require('dotenv').config();


module.exports ={
  reactStrictMode: true,
  images: {
    domains: ["reqres.in"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // ...other config

 
 

  // Use the CDN in production and localhost for development.
  // assetPrefix: process.env.PRODUCTION_API_URL ? 'https://cdn.solidityonsolana.one' : undefined,

  env: {
    LOCAL_API_URL: process.env.LOCAL_API_URL,
    PRODUCTION_API_URL: process.env.PRODUCTION_API_URL,
  },

};

// const withMDX = require("@next/mdx")({
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
//   extension: /\.(md|mdx)$/,
// });

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
// });
