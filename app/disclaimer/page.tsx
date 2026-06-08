"use client";

import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

/**
 * Full-width Disclaimer page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy, Terms of Service, and other policy pages.
 */
const Disclaimer = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st October 2025";

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
      "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Disclaimer</h1>
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
              This Disclaimer governs your use of the Visionary Dynamics website (visionarydynamicsas.com) and the services provided by Visionary Dynamics Consulting Inc. By accessing or using our website and services, you acknowledge and agree to the terms of this Disclaimer. If you do not agree with any part of this Disclaimer, please refrain from using our website and services.
            </p>

            {/* 1. General Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. General Information</h2>
              <p>The information provided on our website and through our services is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.</p>
            </div>

            {/* 2. Professional Advice Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. Professional Advice Disclaimer</h2>
              <p>Visionary Dynamics provides services including but not limited to accounting, taxation, business analytics, new business formation, financial planning, IT asset management, and marketing services. However:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>The information and materials provided through our services are not a substitute for professional advice tailored to your specific circumstances.</li>
                <li>We recommend consulting with qualified professionals (e.g., attorneys, accountants, financial advisors) before making any decisions based on the information provided.</li>
                <li>Any financial, legal, or business information provided should not be construed as professional advice.</li>
                <li>Your use of our services does not create a professional-client relationship unless explicitly established through a separate agreement.</li>
              </ul>
            </div>

            {/* 3. Financial and Tax Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. Financial and Tax Disclaimer</h2>
              <p>Our taxation and financial planning services are intended to provide guidance and support. However:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Tax laws and regulations are complex and subject to change. We cannot guarantee that all information is current or applicable to your specific situation.</li>
                <li>You are ultimately responsible for the accuracy of information provided to us and for compliance with applicable tax laws.</li>
                <li>Any projections or estimates provided are for planning purposes only and should not be guaranteed outcomes.</li>
                <li>We recommend consulting with a certified public accountant (CPA) or tax attorney for specific tax advice.</li>
              </ul>
            </div>

            {/* 4. No Warranties */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. No Warranties</h2>
              <p>Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. To the fullest extent permitted by law, Visionary Dynamics disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</li>
                <li>Warranties that the website or services will be uninterrupted, error-free, secure, or free from viruses or other harmful components.</li>
                <li>Warranties regarding the accuracy, completeness, or reliability of any content.</li>
              </ul>
            </div>

            {/* 5. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, Visionary Dynamics and its officers, directors, employees, agents, affiliates, and licensors shall not be liable for any:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Direct, indirect, incidental, special, consequential, or punitive damages.</li>
                <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses.</li>
                <li>Damages resulting from:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Your use or inability to use our website or services.</li>
                    <li>Any conduct or content of any third party.</li>
                    <li>Unauthorized access, use, or alteration of your content or data.</li>
                    <li>Any errors, omissions, or inaccuracies in content.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">This limitation applies regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise), even if we have been advised of the possibility of such damages.</p>
            </div>

            {/* 6. External Links Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. External Links Disclaimer</h2>
              <p>Our website may contain links to external websites that are not provided or maintained by Visionary Dynamics. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not imply endorsement or approval by Visionary Dynamics. You acknowledge and agree that we are not responsible for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>The content, privacy practices, or terms of use of third-party websites.</li>
                <li>Any damages or losses caused by or in connection with your use of or reliance on any third-party content, goods, or services.</li>
              </ul>
            </div>

            {/* 7. Testimonials and Reviews Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Testimonials and Reviews Disclaimer</h2>
              <p>Our website may contain testimonials, reviews, or case studies from clients or users. These testimonials reflect the real-life experiences and opinions of those individuals. However:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Results are not typical and individual results may vary.</li>
                <li>Testimonials are not intended to guarantee that current or future clients will achieve the same results.</li>
                <li>Some testimonials may have been edited for clarity or brevity with the consent of the individual.</li>
                <li>Compensation may have been provided to individuals for their testimonials, and such relationships will be disclosed where required by law.</li>
              </ul>
            </div>

            {/* 8. Forward-Looking Statements Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Forward-Looking Statements Disclaimer</h2>
              <p>Our website and services may contain forward-looking statements, including projections, estimates, or expectations about future events or performance. These statements are based on current expectations and assumptions and involve risks and uncertainties that could cause actual results to differ materially. We undertake no obligation to update any forward-looking statements.</p>
            </div>

            {/* 9. Investment and Financial Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">9. Investment and Financial Disclaimer</h2>
              <p>Any information provided regarding investments, financial planning, or wealth management is for informational purposes only and does not constitute investment advice. We are not registered as an investment advisor or broker-dealer. Before making any investment decisions, you should:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Consult with a qualified financial advisor or investment professional.</li>
                <li>Consider your financial situation, investment objectives, and risk tolerance.</li>
                <li>Understand that all investments carry risk, and past performance does not guarantee future results.</li>
              </ul>
            </div>

            {/* 10. SMS and Communications Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">10. SMS and Communications Disclaimer</h2>
              <p>By providing your phone number and consenting to receive SMS messages from Visionary Dynamics, you understand and agree that:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Message frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>We are not liable for any delays, failures, or errors in the transmission of SMS messages.</li>
                <li>Opting out of SMS messages may affect your ability to receive certain service-related notifications.</li>
                <li>Standard mobile carrier terms and conditions apply.</li>
              </ul>
            </div>

            {/* 11. No Endorsement Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">11. No Endorsement Disclaimer</h2>
              <p>References on our website to any third-party products, services, or organizations do not constitute endorsement or recommendation by Visionary Dynamics. We are not responsible for the quality, accuracy, or reliability of any third-party products or services.</p>
            </div>

            {/* 12. Jurisdiction and Governing Law Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">12. Jurisdiction and Governing Law Disclaimer</h2>
              <p>The information provided on our website may not be appropriate or available for use in all jurisdictions. Those who access our website do not do so on their own initiative and are responsible for compliance with applicable local laws. This Disclaimer and any disputes arising out of or related to your use of our website or services shall be governed by the laws of the State of Florida, without regard to its conflict of law provisions.</p>
            </div>

            {/* 13. Errors and Omissions Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">13. Errors and Omissions Disclaimer</h2>
              <p>While we endeavor to ensure the accuracy and completeness of the information on our website, we do not warrant or guarantee that the information is error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
            </div>

            {/* 14. Fair Use Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">14. Fair Use Disclaimer</h2>
              <p>Our website may contain copyrighted material whose use has not been specifically authorized by the copyright owner. We are making such material available for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. We believe this constitutes a "fair use" of any such copyrighted material as provided for in Section 107 of the US Copyright Law. If you wish to use copyrighted material from our site for purposes beyond fair use, you must obtain permission from the copyright owner.</p>
            </div>

            {/* 15. AI and Automated Content Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">15. AI and Automated Content Disclaimer</h2>
              <p>Some content on our website or generated through our services may utilize artificial intelligence or automated tools. While we strive for accuracy, AI-generated content may contain errors, omissions, or inaccuracies. You should independently verify any such content before relying on it.</p>
            </div>

            {/* 16. Changes to This Disclaimer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">16. Changes to This Disclaimer</h2>
              <p>We reserve the right to modify, update, or change this Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on this page with an updated effective date. Your continued use of our website and services after any such changes constitutes your acceptance of the revised Disclaimer.</p>
            </div>

            {/* 17. Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">17. Contact Information</h2>
              <p>If you have any questions, concerns, or comments about this Disclaimer, please contact us:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                <a href="mailto:disclaimers@visionarydynamicsas.com" className="text-blue-600 hover:underline">disclaimers@visionarydynamicsas.com</a><br />
                Phone: {CONTACT_INFO.phone}<br />
                Address: {CONTACT_INFO.address}
              </p>
            </div>

            {/* Important Disclaimer Notice */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-sm text-red-800">
                <span className="font-bold">IMPORTANT:</span> This Disclaimer limits our liability and is legally binding. By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Disclaimer. If you do not agree with any part of this Disclaimer, you must immediately cease use of our website and services.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 flex items-start">
                <span className="font-bold mr-2">✓</span>
                I HAVE READ THIS DISCLAIMER AND AGREE TO ALL OF THE PROVISIONS CONTAINED ABOVE.
              </p>
            </div>

            {/* Closing statement */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              This Disclaimer was last updated on {effectiveDate}. Please review it periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;