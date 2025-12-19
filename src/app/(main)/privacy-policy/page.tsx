import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Precision Data',
  description: 'Privacy Policy for Precision Data - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last Updated: December 19, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Precision Data ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-12 bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#information-collection" className="block text-blue-600 hover:text-blue-800 hover:underline">1. Information We Collect</a>
              <a href="#how-we-use" className="block text-blue-600 hover:text-blue-800 hover:underline">2. How We Use Your Information</a>
              <a href="#information-sharing" className="block text-blue-600 hover:text-blue-800 hover:underline">3. Information Sharing and Disclosure</a>
              <a href="#data-security" className="block text-blue-600 hover:text-blue-800 hover:underline">4. Data Security</a>
              <a href="#data-retention" className="block text-blue-600 hover:text-blue-800 hover:underline">5. Data Retention</a>
              <a href="#your-rights" className="block text-blue-600 hover:text-blue-800 hover:underline">6. Your Privacy Rights</a>
              <a href="#cookies" className="block text-blue-600 hover:text-blue-800 hover:underline">7. Cookies and Tracking Technologies</a>
              <a href="#third-party" className="block text-blue-600 hover:text-blue-800 hover:underline">8. Third-Party Services</a>
              <a href="#international" className="block text-blue-600 hover:text-blue-800 hover:underline">9. International Data Transfers</a>
              <a href="#children" className="block text-blue-600 hover:text-blue-800 hover:underline">10. Children's Privacy</a>
              <a href="#changes" className="block text-blue-600 hover:text-blue-800 hover:underline">11. Changes to This Privacy Policy</a>
              <a href="#contact" className="block text-blue-600 hover:text-blue-800 hover:underline">12. Contact Information</a>
            </nav>
          </section>

          {/* Section 1 */}
          <section id="information-collection" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              1. Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information You Provide</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  We collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Register for an account or subscribe to our services</li>
                  <li>Fill out contact forms or request information</li>
                  <li>Participate in surveys, promotions, or contests</li>
                  <li>Communicate with us via email, phone, or chat</li>
                  <li>Subscribe to our newsletters or marketing communications</li>
                </ul>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  This information may include: name, email address, phone number, company name, job title, billing address, payment information, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Information Automatically Collected</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  When you access our website or use our services, we automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring/exit pages</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Information from Third Parties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may receive information about you from third-party sources, including business partners, analytics providers, advertising networks, and social media platforms when you interact with our content or advertisements on those platforms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-we-use" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              2. How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Service Delivery:</strong>
                    <span className="text-gray-700"> To provide, maintain, and improve our services, process transactions, and fulfill your requests</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Communication:</strong>
                    <span className="text-gray-700"> To communicate with you about your account, respond to inquiries, and provide customer support</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Marketing:</strong>
                    <span className="text-gray-700"> To send you promotional materials, newsletters, and information about products or services that may interest you (with your consent where required)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Personalization:</strong>
                    <span className="text-gray-700"> To personalize your experience and deliver content and features tailored to your interests</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Analytics and Improvement:</strong>
                    <span className="text-gray-700"> To analyze usage patterns, conduct research, and improve our website, products, and services</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Security and Fraud Prevention:</strong>
                    <span className="text-gray-700"> To detect, prevent, and address technical issues, fraudulent activities, and security threats</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-blue-900 mr-3">•</span>
                  <div>
                    <strong className="text-blue-900">Legal Compliance:</strong>
                    <span className="text-gray-700"> To comply with legal obligations, enforce our terms and policies, and protect our rights and property</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="information-sharing" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              3. Information Sharing and Disclosure
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with trusted third-party service providers who perform services on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. These providers are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                  In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, government investigations), or to protect the rights, property, or safety of our company, our users, or others.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 With Your Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with third parties when we have your explicit consent to do so.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="data-security" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              4. Data Security
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Encryption of data in transit and at rest using SSL/TLS protocols</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security best practices</li>
                <li>Secure data centers with physical and environmental safeguards</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                <p className="text-amber-900 leading-relaxed">
                  <strong>Please note:</strong> While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, and you acknowledge that you provide information at your own risk.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-retention" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              5. Data Retention
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Providing our services to you</li>
              <li>Complying with legal, accounting, or reporting obligations</li>
              <li>Resolving disputes and enforcing our agreements</li>
              <li>Maintaining business records for legitimate business purposes</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              When we no longer need your information, we will securely delete or anonymize it in accordance with applicable laws and our data retention policies.
            </p>
          </section>

          {/* Section 6 */}
          <section id="your-rights" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              6. Your Privacy Rights
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Access</h4>
                  <p className="text-gray-700">Request a copy of the personal information we hold about you</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Rectification</h4>
                  <p className="text-gray-700">Request correction of inaccurate or incomplete information</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Erasure</h4>
                  <p className="text-gray-700">Request deletion of your personal information under certain circumstances</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Restriction</h4>
                  <p className="text-gray-700">Request restriction of processing of your personal information</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Data Portability</h4>
                  <p className="text-gray-700">Request transfer of your data to another service provider</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Object</h4>
                  <p className="text-gray-700">Object to processing of your personal information for certain purposes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Right to Withdraw Consent</h4>
                  <p className="text-gray-700">Withdraw your consent to processing at any time (where processing is based on consent)</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6">
                To exercise any of these rights, please contact us using the information provided in the "Contact Information" section below. We will respond to your request within the timeframe required by applicable law.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="cookies" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              7. Cookies and Tracking Technologies
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us recognize you and remember your preferences.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                    <p className="text-gray-700">Required for the website to function properly and cannot be disabled</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Performance Cookies</h4>
                    <p className="text-gray-700">Help us understand how visitors interact with our website by collecting anonymous information</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Functionality Cookies</h4>
                    <p className="text-gray-700">Remember your preferences and settings to provide personalized features</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                    <p className="text-gray-700">Track your activity to deliver relevant advertisements and measure campaign effectiveness</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, or set preferences for certain websites. Please note that disabling cookies may affect the functionality of our website and limit your access to certain features.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="third-party" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              8. Third-Party Services
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites, applications, or services that are not owned or controlled by us. This Privacy Policy does not apply to such third-party services.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not responsible for the privacy practices of third-party websites or services. We encourage you to review the privacy policies of any third-party services you access through our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you interact with third-party services, they may collect information about you in accordance with their own privacy policies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party services.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="international" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              9. International Data Transfers
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to, stored, and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.
              </p>

              <p className="text-gray-700 leading-relaxed">
                When we transfer your personal information internationally, we take appropriate safeguards to ensure that your information remains protected in accordance with this Privacy Policy and applicable data protection laws. These safeguards may include:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Data processing agreements with service providers</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section id="children" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              10. Children's Privacy
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us immediately. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to delete that information from our servers.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="changes" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              11. Changes to This Privacy Policy
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Material Changes:</strong> If we make material changes to this Privacy Policy, we will notify you by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Posting a prominent notice on our website</li>
                  <li>Sending you an email notification (if you have provided your email address)</li>
                  <li>Other appropriate means as required by applicable law</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="contact" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
              12. Contact Information
            </h2>
            
            <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="shrink-0 w-32 font-semibold text-gray-900">Email:</div>
                  <div className="text-gray-700">
                    <a href="mailto:privacy@precisiondata.com" className="text-blue-600 hover:text-blue-800 hover:underline">
                      privacy@precisiondata.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-32 font-semibold text-gray-900">Phone:</div>
                  <div className="text-gray-700">+1 (555) 123-4567</div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-32 font-semibold text-gray-900">Mail:</div>
                  <div className="text-gray-700">
                    Precision Data<br />
                    Privacy Department<br />
                    123 Business Avenue<br />
                    Suite 500<br />
                    New York, NY 10001<br />
                    United States
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-32 font-semibold text-gray-900">Response Time:</div>
                  <div className="text-gray-700">We aim to respond to all inquiries within 5 business days</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Data Protection Officer (DPO):</strong> For EU/EEA residents, you may contact our Data Protection Officer at <a href="mailto:dpo@precisiondata.com" className="text-blue-600 hover:underline">dpo@precisiondata.com</a> for matters related to your personal data and privacy rights under the General Data Protection Regulation (GDPR).
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <p className="text-center text-sm text-gray-500">
              This Privacy Policy was last updated on December 19, 2025, and is effective as of this date.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
