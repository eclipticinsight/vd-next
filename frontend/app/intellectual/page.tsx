"use client";

import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

/**
 * Full-width Intellectual Property Policy page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy, Terms of Service, and other policy pages.
 */
const IntellectualPropertyPolicy = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st September 2025";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section with background image and dark overlay */}
     <div
  className="relative w-full h-64 md:h-80"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
    {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Intellectual Property Policy</h1>
          <p className="text-xl md:text-2xl text-gray-200">Effective Date: {effectiveDate}</p>
        </div>
      </div>

      {/* Main content area – full width with padding */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="w-full max-w-none mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-200">
          
          {/* Content – simple stacked sections, full width */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            {/* Introduction */}
            <p className="text-lg">
              At Visionary Dynamics, we respect intellectual property rights and are committed to protecting our own intellectual property while also respecting the rights of others. This Intellectual Property Policy outlines the ownership, permitted use, and protection of intellectual property related to our website, services, and brand.
            </p>

            {/* 1. Ownership of Intellectual Property */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. Ownership of Intellectual Property</h2>
              <p>All intellectual property rights in and to our website, services, content, and brand are owned by Visionary Dynamics Consulting Inc. or our licensors. This includes, but is not limited to:</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">© Copyrights</h3>
                  <p className="text-sm text-gray-600">Website content, blog posts, articles, whitepapers, case studies, marketing materials, software code, and documentation.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">® Trademarks</h3>
                  <p className="text-sm text-gray-600">The Visionary Dynamics name, logo, slogans, product names, and brand identifiers.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">℠ Service Marks</h3>
                  <p className="text-sm text-gray-600">Names and logos associated with our services including Accounting, Taxation, Business Analytics, and others.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">🔒 Trade Secrets</h3>
                  <p className="text-sm text-gray-600">Proprietary methodologies, algorithms, client lists, and business processes.</p>
                </div>
              </div>
            </div>

            {/* 2. Our Intellectual Property */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. Our Intellectual Property</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mt-3 mb-2">2.1 Copyrighted Works</h3>
              <p>All original content created by Visionary Dynamics, including but not limited to:</p>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                <li>Website design, layout, and structure</li>
                <li>Written content, articles, and blog posts</li>
                <li>Graphics, images, videos, and multimedia</li>
                <li>Software, applications, and code</li>
                <li>Reports, analyses, and methodologies</li>
                <li>Marketing and promotional materials</li>
              </ul>
              <p className="mt-2">is protected by copyright laws and international treaties.</p>

              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.2 Trademarks</h3>
              <p>The following are registered or unregistered trademarks of Visionary Dynamics:</p>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-2">
                <li><span className="font-medium">Visionary Dynamics</span> and the Visionary Dynamics logo</li>
                <li><span className="font-medium">Visionary Accounting Suite</span></li>
                <li><span className="font-medium">Visionary Analytics Platform</span></li>
                <li><span className="font-medium">VD Insight</span></li>
                <li>All product and service names, slogans, and taglines used in connection with our services</li>
              </ul>
              <p className="mt-2">These trademarks may not be used without our prior written permission.</p>

              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.3 Patents</h3>
              <p>Certain aspects of our technology and methodologies may be protected by pending or issued patents. Unauthorized use of patented technology is strictly prohibited.</p>
            </div>

            {/* 3. User-Generated Content */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. User-Generated Content</h2>
              <p>When you submit, post, or share content on our website or through our services (such as reviews, comments, feedback, or suggestions):</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>You retain ownership of your content.</li>
                <li>You grant Visionary Dynamics a worldwide, royalty-free, perpetual, irrevocable, non-exclusive license to use, reproduce, modify, adapt, publish, and distribute such content for business purposes.</li>
                <li>You represent and warrant that you own or have the necessary rights to the content you submit.</li>
                <li>You agree not to submit content that infringes on third-party intellectual property rights.</li>
              </ul>
            </div>

            {/* 4. Permitted Use */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Permitted Use</h2>
              <p>You may access and use our website and content for personal, non-commercial purposes in accordance with these Terms. Limited exceptions may include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Downloading or printing content for personal reference.</li>
                <li>Sharing links to our content with proper attribution.</li>
                <li>Using our trademarks in referential terms (e.g., "as used by Visionary Dynamics") without implying endorsement.</li>
              </ul>
              <p className="mt-2">Any use beyond these limited purposes requires our explicit written consent.</p>
            </div>

            {/* 5. Prohibited Use */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Prohibited Use</h2>
              <p>Without our prior written permission, you may NOT:</p>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Copy, reproduce, or redistribute our content</li>
                  <li>Modify, adapt, or create derivative works</li>
                  <li>Use our trademarks or logos</li>
                  <li>Frame or mirror our website</li>
                  <li>Reverse engineer our software</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sell or license our intellectual property</li>
                  <li>Remove copyright or proprietary notices</li>
                  <li>Use our content for competitive analysis</li>
                  <li>Automated scraping or data mining</li>
                  <li>Imply endorsement without authorization</li>
                </ul>
              </div>
            </div>

            {/* 6. Copyright Infringement Claims (DMCA) */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Copyright Infringement Claims (DMCA)</h2>
              <p>We respect the intellectual property rights of others and comply with the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:</p>
              
              <div className="mt-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <ol className="list-decimal list-inside space-y-2">
                  <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                  <li>Identification of the copyrighted work claimed to have been infringed.</li>
                  <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to locate it.</li>
                  <li>Your contact information, including address, telephone number, and email.</li>
                  <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
                  <li>A statement, made under penalty of perjury, that the information provided is accurate and that you are authorized to act on behalf of the copyright owner.</li>
                </ol>
              </div>

              <p className="mt-3 font-medium">Copyright Agent Contact Information:</p>
              <p className="mt-1">
                Visionary Dynamics Consulting Inc.<br />
                Attn: Copyright Agent<br />
                <a href="mailto:copyright@visionarydynamicsas.com" className="text-blue-600 hover:underline">copyright@visionarydynamicsas.com</a><br />
                Phone: {CONTACT_INFO.phone}
              </p>
            </div>

            {/* 7. Trademark Infringement Claims */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Trademark Infringement Claims</h2>
              <p>If you believe that any content on our website infringes on your trademark rights, please provide our Trademark Agent with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your trademark registration information.</li>
                <li>Description of the infringing material and its location.</li>
                <li>Explanation of how your rights are being violated.</li>
                <li>Your contact information.</li>
              </ul>
              <p className="mt-2">Send trademark infringement claims to: <a href="mailto:trademarks@visionarydynamicsas.com" className="text-blue-600 hover:underline">trademarks@visionarydynamicsas.com</a></p>
            </div>

            {/* 8. Licensing and Permissions */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Licensing and Permissions</h2>
              <p>If you wish to use our intellectual property beyond the limited permitted uses, you must obtain explicit written permission. Requests for licensing or permissions should be directed to:</p>
              <p className="mt-2">
                <a href="mailto:licensing@visionarydynamicsas.com" className="text-blue-600 hover:underline">licensing@visionarydynamicsas.com</a>
              </p>
              <p className="mt-2">Please include detailed information about the proposed use, duration, and context.</p>
            </div>

            {/* 9. Third-Party Intellectual Property */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">9. Third-Party Intellectual Property</h2>
              <p>Our website and services may include content, software, or materials owned by third parties. All third-party intellectual property is the property of their respective owners. Use of such materials is subject to their terms and conditions.</p>
              <p className="mt-2">We are not responsible for any third-party intellectual property infringements by our users. If you believe third-party content on our site infringes your rights, please notify us as provided in Section 6.</p>
            </div>

            {/* 10. Confidential Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">10. Confidential Information</h2>
              <p>Certain information shared through our services, including business strategies, client data, and proprietary methodologies, constitutes confidential information and trade secrets. You agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maintain the confidentiality of such information.</li>
                <li>Not disclose confidential information to third parties without authorization.</li>
                <li>Use confidential information only for the purpose for which it was provided.</li>
                <li>Return or destroy confidential information upon request.</li>
              </ul>
            </div>

            {/* 11. Reporting Infringement by Users */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">11. Reporting Infringement by Users</h2>
              <p>If you believe that a Visionary Dynamics user is infringing on your intellectual property rights through our services, please report it to us with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Identification of the intellectual property claimed to be infringed.</li>
                <li>Identification of the infringing user and content.</li>
                <li>Evidence of your ownership or authorization.</li>
                <li>A statement of good faith belief that the use is not authorized.</li>
              </ul>
              <p className="mt-2">Send reports to: <a href="mailto:abuse@visionarydynamicsas.com" className="text-blue-600 hover:underline">abuse@visionarydynamicsas.com</a></p>
            </div>

            {/* 12. Consequences of Infringement */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">12. Consequences of Infringement</h2>
              <p>Violation of our intellectual property rights or these terms may result in:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Immediate termination or suspension of your access to our services.</li>
                <li>Removal of infringing content.</li>
                <li>Legal action, including claims for damages and injunctive relief.</li>
                <li>Reporting to relevant authorities for criminal prosecution where applicable.</li>
              </ul>
            </div>

            {/* 13. Repeat Infringer Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">13. Repeat Infringer Policy</h2>
              <p>In accordance with the DMCA and other applicable laws, we maintain a policy of terminating, in appropriate circumstances, the accounts of users who are repeat infringers of intellectual property rights. We also reserve the right to terminate accounts even for a single infringement in egregious circumstances.</p>
            </div>

            {/* 14. Indemnification */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">14. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Visionary Dynamics, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your infringement of any intellectual property rights or your violation of this Intellectual Property Policy.</p>
            </div>

            {/* 15. Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">15. Updates to This Policy</h2>
              <p>We may update this Intellectual Property Policy periodically to reflect changes in our practices, legal requirements, or to address new types of intellectual property. The latest version will always be available on our website with the effective date.</p>
            </div>

            {/* 16. Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">16. Contact Information</h2>
              <p>For general inquiries regarding intellectual property, please contact:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                Attn: Legal Department<br />
                <a href="mailto:legal@visionarydynamicsas.com" className="text-blue-600 hover:underline">legal@visionarydynamicsas.com</a><br />
                Phone: {CONTACT_INFO.phone}
              </p>
            </div>

            {/* Intellectual Property Note */}
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <p className="text-sm text-purple-800">
                <span className="font-bold">Note:</span> All intellectual property displayed on our website, including but not limited to text, graphics, logos, and software, is the exclusive property of Visionary Dynamics Consulting Inc. or its content suppliers and is protected by international copyright laws. Unauthorized use is strictly prohibited.
              </p>
            </div>

            {/* Closing statement */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              By using our services, you acknowledge and agree to respect our intellectual property rights and those of third parties. We appreciate your cooperation in maintaining the integrity of our intellectual property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntellectualPropertyPolicy;