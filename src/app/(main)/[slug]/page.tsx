import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title.rendered} | Precision Data`,
    description: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts();

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <div className="py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full">
            <div className="mx-auto max-w-3xl">
              <Link href="/blog" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                ← Back to Blog
              </Link>
            </div>
            
            <article className="mt-10">
              <header className="flex flex-col">
                <div className="mx-auto max-w-3xl w-full">
                  <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-4">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                  </div>
                  <h1 
                      className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
                
                {featuredImage && (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-gray-100">
                    <Image
                      src={featuredImage}
                      alt={post.title.rendered}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
              </header>

              <div className="mx-auto max-w-3xl w-full">
                <div 
                  className="prose prose-lg prose-indigo text-gray-600 space-y-6 max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </article>
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-start">
                  <span className="bg-white pr-3 text-lg font-bold leading-6 text-gray-900">Related Posts</span>
                </div>
            </div>

            <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 pt-0 sm:mt-12 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {otherPosts.map((related) => {
                let relatedImage = related._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                
                if (!relatedImage && related.content?.rendered) {
                   const imgMatch = related.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/);
                   if (imgMatch) relatedImage = imgMatch[1];
                }

                return (
                  <article key={related.id} className="flex max-w-xl flex-col items-start justify-between group">
                    <div className="relative w-full">
                        {relatedImage ? (
                          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 sm:aspect-2/1 lg:aspect-3/2">
                            <Image 
                              src={relatedImage} 
                              alt={related.title.rendered} 
                              fill 
                              className="object-cover group-hover:opacity-90 transition-opacity" 
                            />
                          </div>
                        ) : (
                          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-200 sm:aspect-2/1 lg:aspect-3/2 flex items-center justify-center text-gray-400">
                            No Image
                          </div>
                        )}
                    </div>
                    <div className="mt-4 flex items-center gap-x-4 text-xs">
                        <time dateTime={related.date} className="text-gray-500">
                             {new Date(related.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                        </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/${related.slug}`}>
                          <span className="absolute inset-0" />
                          <span dangerouslySetInnerHTML={{ __html: related.title.rendered }} />
                        </Link>
                      </h3>
                      <div 
                        className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: related.excerpt.rendered }}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
       </div>
    </div>
  );
}
