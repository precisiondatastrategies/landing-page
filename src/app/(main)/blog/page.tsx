"use client";

import { motion } from "framer-motion";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is reshaping the landscape of business operations and what it means for your company's future.",
    date: "January 5, 2026",
    author: "Sarah Johnson",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    slug: "future-of-ai-automation"
  },
  {
    id: 2,
    title: "5 Ways to Streamline Your Customer Service",
    excerpt: "Learn actionable strategies to improve your customer support efficiency while maintaining a personal touch using modern tools.",
    date: "December 28, 2025",
    author: "Michael Chen",
    category: "Customer Success",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    slug: "streamline-customer-service"
  },
  {
    id: 3,
    title: "Why Data Precision Matters More Than Ever",
    excerpt: "In the age of big data, accuracy is king. Explore why precision in your data collection and analysis is crucial for decision making.",
    date: "December 15, 2025",
    author: "Alex Rivera",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    slug: "why-data-precision-matters"
  },
  {
    id: 4,
    title: "Implementing AI Chatbots: A Guide for Beginners",
    excerpt: "A step-by-step guide on how to successfully integrate AI chatbots into your existing website and workflow.",
    date: "November 30, 2025",
    author: "Sarah Johnson",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    slug: "implementing-ai-chatbots"
  },
  {
    id: 5,
    title: "The ROI of Business Process Automation",
    excerpt: "We break down the numbers to show you exactly how much time and money you can save by automating repetitive tasks.",
    date: "November 12, 2025",
    author: "David Smith",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    slug: "roi-business-process-automation"
  },
  {
    id: 6,
    title: "Security Best Practices for AI Integration",
    excerpt: "How to ensure your data remains secure while leveraging the power of third-party AI tools and integrations.",
    date: "October 25, 2025",
    author: "Emily Davis",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    slug: "security-best-practices-ai"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#F9F9F7] overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Insights & <span className="text-blue-600">Updates</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Latest news, tips, and strategies from the world of AI automation and data precision.
          </motion.p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                    >
                      Read Article 
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
