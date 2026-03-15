import { MetadataRoute } from 'next';
import { supabase } from 'lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aarohcomputerclasses.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about-aaroh',
    '/contact-us',
    '/blogs',
    '/terms',
    '/thank-you',
    '/courses/advance-excel',
    '/courses/ai-automation',
    '/courses/coding-language',
    '/courses/data-analyst',
    '/courses/digital-marketing',
    '/courses/rscit',
    '/courses/tally-prime',
    '/courses/video-editing',
    '/courses/web-development',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const { data: blogs } = await supabase
    .from('blogs')
    .select('slug, created_at');

  const blogRoutes = (blogs || []).map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
