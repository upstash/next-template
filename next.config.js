/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    packageName: process.env.npm_package_name,
    packageUrl: process.env.npm_package_url,
  },
};
