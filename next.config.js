/** @type {import('next').NextConfig} */
const path = require("path");
const withLess = require("next-with-less");
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
};

module.exports = withLess(nextConfig);
