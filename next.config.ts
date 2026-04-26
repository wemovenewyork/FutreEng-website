import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/work/fe-003-tramell-thompson', destination: '/work/fe-002-tramell-thompson', permanent: true },
      { source: '/work/fe-005-lowkey-studios', destination: '/work/fe-003-lowkey-studios', permanent: true },
      { source: '/work/fe-004-phamily-classic', destination: '/work/fe-010-phamily-classic', permanent: true },
      { source: '/work/fe-002-we-move-new-york', destination: '/work/fe-013-we-move-new-york', permanent: true },
    ];
  },
};

export default nextConfig;
