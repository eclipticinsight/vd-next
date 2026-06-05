"use client";

import React, { useEffect, useState } from 'react';

/**
 * Full-width Cookies Policy page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy and Terms of Service pages.
 */
const CookiesPolicy = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st March 2025";

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
      "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Cookies Policy</h1>
          <p className="text-xl md:text-2xl text-gray-200">Effective Date: {effectiveDate}</p>
        </div>
      </div>

      {/* Main content area – full width with padding */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="w-full max-w-none mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-200">
          
          {/* Content – simple stacked sections, full width */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            {/* Introduction */}
            <p>
              At Visionary Dynamics, we use cookies and similar tracking technologies to enhance your experience on our website visionarydynamicsas.com. This Cookies Policy explains what cookies are, how we use them, and your choices regarding their use.
            </p>

            {/* 1. What Are Cookies */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
            </div>

            {/* 2. How We Use Cookies */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Essential Cookies:</span> These are necessary for the website to function properly and cannot be switched off.</li>
                <li><span className="font-medium">Performance Cookies:</span> These help us understand how visitors interact with our website by collecting anonymous information.</li>
                <li><span className="font-medium">Functional Cookies:</span> These remember your preferences to provide a personalized experience.</li>
                <li><span className="font-medium">Targeting/Advertising Cookies:</span> These track your browsing habits to deliver relevant advertisements.</li>
              </ul>
            </div>

            {/* 3. Types of Cookies We Use */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Cookie Type</th>
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Purpose</th>
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Strictly Necessary</td>
                      <td className="py-2 px-4 border-b">Essential for site navigation and security</td>
                      <td className="py-2 px-4 border-b">Session / Persistent</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Performance</td>
                      <td className="py-2 px-4 border-b">Analyze site usage and improve performance</td>
                      <td className="py-2 px-4 border-b">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Functional</td>
                      <td className="py-2 px-4 border-b">Remember user preferences</td>
                      <td className="py-2 px-4 border-b">Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Targeting/Advertising</td>
                      <td className="py-2 px-4 border-b">Deliver personalized ads</td>
                      <td className="py-2 px-4 border-b">Up to 90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Third-Party Cookies</h2>
              <p>We may also use third-party cookies from services such as Google Analytics, Facebook Pixel, or other analytics providers. These cookies are governed by the respective third-party privacy policies.</p>
            </div>

            {/* 5. Your Choices Regarding Cookies */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Your Choices Regarding Cookies</h2>
              <p>You have the right to accept or reject cookies. You can manage your cookie preferences through:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Browser Settings:</span> Most browsers allow you to block or delete cookies. Check your browser's help section for instructions.</li>
                <li><span className="font-medium">Opt-Out Links:</span> You can opt out of certain third-party cookies using tools like the Network Advertising Initiative opt-out page.</li>
                <li><span className="font-medium">Cookie Consent Banner:</span> When you first visit our site, you can adjust your cookie preferences via our cookie consent banner.</li>
              </ul>
              <p className="mt-2">Please note that disabling cookies may affect the functionality of our website.</p>
            </div>

            {/* 6. Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Updates to This Policy</h2>
              <p>We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
            </div>

            {/* 7. Contact Us */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us at:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                <a href="mailto:connect@visionarydynamicsas.com" className="text-blue-600 hover:underline">connect@visionarydynamicsas.com</a>
              </p>
            </div>

            {/* Additional information about SMS consent (as per your previous requests) */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm text-blue-800">
                <span className="font-bold">Note:</span> Our use of cookies is separate from our SMS communications. No mobile opt-in or text message consent is tracked via cookies or shared with third parties.
              </p>
            </div>

            {/* Closing consent line */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;