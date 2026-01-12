export const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/example.wordpress.com';

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    // Check if we are using the example URL, if so, return empty list or mock data effectively to avoid error crashing page
    if (WORDPRESS_API_URL.includes('example.wordpress.com')) {
       return [];
    }
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
     if (WORDPRESS_API_URL.includes('example.wordpress.com')) {
       return null;
    }
    throw new Error('Failed to fetch post');
  }

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}
