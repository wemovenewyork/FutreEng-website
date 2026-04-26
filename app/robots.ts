import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://futreeng.com/sitemap.xml',
    host: 'https://futreeng.com',
  };
}
