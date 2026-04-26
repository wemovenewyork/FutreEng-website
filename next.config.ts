import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Original slug corrections from prior pass
      { source: '/work/fe-003-tramell-thompson', destination: '/work/fe-002-tramell-thompson', permanent: true },
      { source: '/work/fe-005-lowkey-studios', destination: '/work/fe-003-lowkey-studios', permanent: true },

      // Deleted case study — redirect old URL to work index
      { source: '/work/fe-007-twu-local-100-prototype', destination: '/work', permanent: true },

      // PHAmily Classic: old slug numbers → current slug
      { source: '/work/fe-004-phamily-classic', destination: '/work/fe-009-phamily-classic', permanent: true },
      { source: '/work/fe-010-phamily-classic', destination: '/work/fe-009-phamily-classic', permanent: true },

      // WMNY Depot Check-In: old slug numbers → current slug
      { source: '/work/fe-002-we-move-new-york', destination: '/work/fe-012-we-move-new-york', permanent: true },
      { source: '/work/fe-013-we-move-new-york', destination: '/work/fe-012-we-move-new-york', permanent: true },
    ];
  },
};

export default nextConfig;
