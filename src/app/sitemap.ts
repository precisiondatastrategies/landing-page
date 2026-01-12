import { MetadataRoute } from 'next';
import { getAllPosts, Post } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://precisiondatastrategies.com';
  
  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/blog',
    '/consulting',
    '/contact',
    '/cookie-policy',
    '/privacy-policy',
    '/services',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes (posts)
  let posts: Post[] = [];
  try {
     posts = await getAllPosts();
  } catch (error) {
     console.error('Sitemap: Failed to fetch posts', error);
  }

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
