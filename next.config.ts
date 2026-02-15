import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 성능 최적화
  reactStrictMode: true,

  // 번들 분석 최적화
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
    ],
  },

  // 이미지 최적화 (필요시 도메인 추가)
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // 보안 헤더
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
