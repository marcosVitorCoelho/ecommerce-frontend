/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseAPI: "http://localhost:5000/api",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
