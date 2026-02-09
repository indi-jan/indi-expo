import { MetadataRoute } from 'next';
import { varieties } from '@/lib/varieties';

const URL = 'https://indiranienterprises.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/facilities',
    '/services',
    '/contact',
    '/spices',
    '/pulses',
    '/seeds',
    '/coconut-products',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const varietyRoutes = varieties.map((variety) => ({
    url: `${URL}/varieties/${variety.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...varietyRoutes];
}
