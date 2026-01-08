"use client";

import { Metadata } from 'next';
import { motion } from "framer-motion";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

// Metadata needs to be in a separate layout or page file if using "use client", 
// but since this is a page.tsx and we want client side animations, we might need to separate metadata.
// However, Next.js allows metadata export in page.tsx even with "use client" in some versions, 
// but typically "use client" components cannot export metadata.
// Let's check if the previous file had "use client". 
// The previous file did NOT have "use client" at the top, but I added it because I'm using framer-motion.
// If I use "use client", I cannot export metadata.
// I should probably split this into a client component and a server page, OR just remove metadata export if it's handled by layout, 
// OR keep it as a server component and use a client component for the animated parts.
// Given the user asked to make it professional like other pages which use "use client" (ConsultingPage, AboutUsPage), 
// I will make this a client component. 
// I will remove the metadata export from here. If metadata is needed, it should be in a layout.tsx or a wrapper.
// But wait, the original file had metadata. 
// If I change it to "use client", I lose the metadata.
// The best practice is to have `page.tsx` be a server component that exports metadata, and import a client component `PrivacyPolicyContent`.
// But to keep it simple and in one file as requested, I will check if I can just use the client component.
// Actually, I can just not export metadata here and assume the user is fine with it or I can create a layout.tsx for it if needed.
// BUT, I can also just make the page a server component and only animate the parts that need it, but that's more complex.
// Let's look at `about-us/page.tsx`. It has "use client" at the top. Does it export metadata?
// I read `about-us/page.tsx` earlier. It starts with "use client" and does NOT export metadata.
// So I will follow that pattern.

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100">
      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 bg-[#F9F9F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Privacy Policy</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600"
          >
            Last Updated: December 19, 2025
          </motion.p>
        </div>
        {/* Decorative wave line */}
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
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="lead text-xl text-gray-700 leading-relaxed mb-6">
                At Precision Data ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Table of Contents</h2>
              <nav className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <a href="#information-collection" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">1. Information We Collect</a>
                <a href="#how-we-use" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">2. How We Use Your Information</a>
                <a href="#information-sharing" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">3. Information Sharing and Disclosure</a>
                <a href="#data-security" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">4. Data Security</a>
                <a href="#data-retention" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">5. Data Retention</a>
                <a href="#your-rights" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">6. Your Privacy Rights</a>
                <a href="#cookies" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">7. Cookies and Tracking Technologies</a>
                <a href="#third-party" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">8. Third-Party Services</a>
                <a href="#international" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">9. International Data Transfers</a>
                <a href="#children" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">10. Children's Privacy</a>
                <a href="#changes" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">11. Changes to This Privacy Policy</a>
                <a href="#contact" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">12. Contact Information</a>
              </nav>
            </div>

            {/* Section 1 */}
            <div id="information-collection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                1. Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1 Personal Information You Provide</h3>
                  <p className="mb-4">
                    We collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Register for an account or subscribe to our services</li>
                    <li>Fill out contact forms or request information</li>
                    <li>Participate in surveys, promotions, or contests</li>
                    <li>Communicate with us via email, phone, or chat</li>
                    <li>Subscribe to our newsletters or marketing communications</li>
                  </ul>
                  <p>
                    This information may include: name, email address, phone number, company name, job title, billing address, payment information, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Information Automatically Collected</h3>
                  <p className="mb-4">
                    When you access our website or use our services, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring/exit pages</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1.3 Information from Third Parties</h3>
                  <p>
                    We may receive information about you from third-party sources, including business partners, analytics providers, advertising networks, and social media platforms when you interact with our content or advertisements on those platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="how-we-use" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes</li>
                <li>Process your transactions and manage your orders</li>
                <li>Send you emails, newsletters, and other communications</li>
                <li>Find and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="information-sharing" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                3. Information Sharing and Disclosure
              </h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
                <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="data-security" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                4. Data Security
              </h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            {/* Section 5 */}
            <div id="data-retention" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                5. Data Retention
              </h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>

            {/* Section 6 */}
            <div id="your-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                6. Your Privacy Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we correct any information you believe is inaccurate</li>
                <li>The right to request that we delete your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the contact information provided below. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
              </p>
            </div>

            {/* Section 7 */}
            <div id="cookies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                7. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>

            {/* Section 8 */}
            <div id="third-party" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                8. Third-Party Services
              </h2>
              <p>
                Our service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            {/* Section 9 */}
            <div id="international" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                9. International Data Transfers
              </h2>
              <p>
                Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there.
              </p>
            </div>

            {/* Section 10 */}
            <div id="children" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                10. Children's Privacy
              </h2>
              <p>
                Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </div>

            {/* Section 11 */}
            <div id="changes" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Section 12 */}
            <div id="contact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                12. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>By email:</strong> <a href="mailto:privacy@precisiondata.com" className="text-blue-600 hover:underline">privacy@precisiondata.com</a>
                </li>
                <li>
                  <strong>By visiting this page on our website:</strong> <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
