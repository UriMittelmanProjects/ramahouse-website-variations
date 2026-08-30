import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/menu', '/gallery', '/about', '/contact', '/order'];
  return pages.map((path) => ({
    url: `https://ramahousebothell.com${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/menu' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/menu' ? 0.9 : 0.7,
  }));
}
