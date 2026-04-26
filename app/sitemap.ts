import { MetadataRoute } from 'next';
import { CASES } from '@/lib/cases';
import { POSTS } from '@/lib/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://futreeng.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const journalRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...journalRoutes];
}
