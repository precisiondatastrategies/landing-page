"use client";

import { motion } from "framer-motion";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 bg-[#F9F9F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Terms of Service</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Terms of Service
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
                Welcome to Precision Data Strategies. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="mb-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Key Points</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You must be at least 18 years old to use our services.</li>
                <li>You are responsible for maintaining the confidentiality of your account.</li>
                <li>Our services are for your personal and non-commercial use.</li>
              </ul>
            </div>

            <h2 id="use-of-services" className="text-3xl font-bold text-gray-900 mb-4">1. Use of Our Services</h2>
            <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.</p>

            <h2 id="intellectual-property" className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Intellectual Property</h2>
            <p>All content included on the site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Precision Data Strategies or its suppliers and protected by copyright and other laws.</p>

            <h2 id="termination" className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Termination</h2>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2 id="disclaimer" className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. Disclaimer of Warranties</h2>
            <p>Our services are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied. We do not warrant that the services will be uninterrupted, secure, or error-free.</p>

            <h2 id="limitation-of-liability" className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. Limitation of Liability</h2>
            <p>In no event shall Precision Data Strategies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>

            <h2 id="governing-law" className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

            <h2 id="changes" className="text-3xl font-bold text-gray-900 mt-12 mb-4">7. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.</p>

            <h2 id="contact" className="text-3xl font-bold text-gray-900 mt-12 mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@precisiondatastrategies.com" className="text-blue-600 hover:underline">info@precisiondatastrategies.com</a>.</p>

          </motion.div>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
