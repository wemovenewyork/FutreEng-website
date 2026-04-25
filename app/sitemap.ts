import { MetadataRoute } from 'next';
import { CASES } from '@/lib/cases';
import { POSTS } from '@/lib/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://futreng.com';

  const staticRoutes = ['', '/work', '/journal', '/studio', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const caseRoutes = CASES.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const journalRoutes = POSTS.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...journalRoutes];
}
