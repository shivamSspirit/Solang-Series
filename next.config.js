/** @type {import('next').NextConfig} */

//require("dotenv").config();

// import  pkg  from 'dotenv';

//import { withContentlayer } from 'next-contentlayer'
// const {dotenv} = pkg;
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["reqres.in"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/ddwkxn8ak/image/upload/t_sol/v1698823073/solangsol/**",
      },
    ],
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
    // LOCAL_API_URL: process.env.LOCAL_API_URL,
    PRODUCTION_API_URL: process.env.PRODUCTION_API_URL,
  },
};

module.exports = withContentlayer({ ...nextConfig });
