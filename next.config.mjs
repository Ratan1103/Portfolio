import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "maath"],

  // Fix workspace root warning
  turbopack: {
    root: __dirname,
  },

  // Allow access from any device on the local network
  allowedDevOrigins: [
    "192.168.1.3",
    "192.168.1.*",
    "localhost",
    "127.0.0.1",
  ],
}

export default nextConfig
