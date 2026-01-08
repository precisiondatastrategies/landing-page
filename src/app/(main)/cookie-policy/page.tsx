"use client";

import { motion } from "framer-motion";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 bg-[#F9F9F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Cookie Policy</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Last Updated: January 8, 2026
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <svg className="absolute top-20 right-10 w-64 h-64 text-gray-200 opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 100 C 50 100, 50 50, 100 50 C 150 50, 150 100, 190 100" stroke="currentColor" strokeWidth="2" fill="none" />
             </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-blue max-w-none text-gray-600"
          >
            
            <div className="mb-12">
              <p className="lead text-xl text-gray-700 leading-relaxed mb-6">
                This Cookie Policy explains how Precision Data Strategies ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our websites. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>

            <h2 id="what-are-cookies" className="text-3xl font-bold text-gray-900 mb-4">1. What are cookies?</h2>
            <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

            <h2 id="why-we-use-cookies" className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Why do we use cookies?</h2>
            <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes.</p>

            <h2 id="types-of-cookies" className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Types of cookies we use</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.</li>
                <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use.</li>
                <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are.</li>
                <li><strong>Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
            </ul>

            <h2 id="how-to-control" className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. How can you control cookies?</h2>
            <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>
            <p>You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

            <h2 id="changes" className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. Changes to this Cookie Policy</h2>
            <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

            <h2 id="contact" className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@precisiondatastrategies.com" className="text-blue-600 hover:underline">info@precisiondatastrategies.com</a>.</p>

          </motion.div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
