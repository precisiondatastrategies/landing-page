import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/wordpress';
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

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="py-24 sm:py-32">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
              <Link href="/blog" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                ← Back to Blog
              </Link>
              
              <article className="mt-10">
                <header className="flex flex-col items-start">
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

                <div 
                  className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-600 space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </article>
          </div>
       </div>
    </div>
  );
}
