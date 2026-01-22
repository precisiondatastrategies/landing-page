import Link from 'next/link';
import { getAllPosts } from '@/lib/wordpress';
import Image from 'next/image';

// Helper to strip HTML tags for excerpt
function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '');
}

export const metadata = {
  title: 'Blog | Precision Data',
  description: 'Latest updates and insights from Precision Data.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights on AI automation, data precision, and business efficiency.
          </p>
        </div>
        
        {posts.length === 0 ? (
           <div className="mt-16 text-center text-gray-500">
             <p>No posts found.</p>
           </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => {
              let featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

              if (!featuredImage && post.content?.rendered) {
                const imgMatch = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/);
                if (imgMatch) {
                  featuredImage = imgMatch[1];
                }
              }
              
              return (
                <article key={post.id} className="flex flex-col items-start">
                  <div className="relative w-full">
                    {featuredImage ? (
                       <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 sm:aspect-2/1 lg:aspect-3/2">
                         <Image
                           src={featuredImage}
                           alt={post.title.rendered}
                           fill
                           className="object-cover"
                         />
                       </div>
                    ) : (
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 sm:aspect-2/1 lg:aspect-3/2 flex items-center justify-center text-gray-400">
                           <span>No Image</span>
                        </div>
                    )}
                  </div>
                  <div className="max-w-xl mt-4">
                    <div className="group relative">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/${post.slug}`}>
                          <span className="absolute inset-0" />
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </h3>
                      <div className="flex items-center gap-x-4 text-xs mt-2">
                        <time dateTime={post.date} className="text-gray-500">
                          {new Date(post.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div 
                        className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
