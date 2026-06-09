"use client";

import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

/**
 * Full-width Privacy Policy page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 */
const PrivacyPolicy = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st April 2024";

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
      "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-base md:text-lg text-gray-200">Effective Date: {effectiveDate}</p>
        </div>
      </div>

      {/* Main content area – full width with padding */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="w-full max-w-none mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-200">
          
          {/* Content – simple stacked sections, full width */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            {/* Intro */}
            <p>
              At Visionary Dynamics, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website visionarydynamicsas.com and use our services.
            </p>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Personal Information:</span> Name, email, phone, billing details, and other identifiers you provide.</li>
                <li><span className="font-medium">Non-Personal Information:</span> Browser type, IP address, device info, usage data.</li>
                <li><span className="font-medium">Cookies & Tracking:</span> We use cookies to enhance experience and track activity.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. How We Use Your Information</h2>
              <p>We use collected data to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide, improve, and personalize services.</li>
                <li>Process transactions and manage accounts.</li>
                <li>Send updates, promotions, and service notifications.</li>
                <li>Ensure legal and regulatory compliance.</li>
              </ul>
            </div>

            {/* 3. How We Share Your Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. How We Share Your Information</h2>
              <p>We do not sell or rent personal data. We may share with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Service Providers:</span> Partners for payment, analytics, etc.</li>
                <li><span className="font-medium">Legal Authorities:</span> When required by law or to protect rights.</li>
              </ul>
              <p className="mt-3 text-sm bg-gray-100 p-3 rounded">No mobile opt-in or text consent is shared with third parties or affiliates.</p>
            </div>

            {/* 4. Data Security */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Data Security</h2>
              <p>We use industry-standard security to protect your information from unauthorized access.</p>
            </div>

            {/* 5. Your Rights & Choices */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Your Rights & Choices</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="font-medium">Opt-Out:</span> Unsubscribe from marketing emails anytime.</li>
                <li><span className="font-medium">Access & Update:</span> Request access or updates to your data.</li>
                <li><span className="font-medium">Cookie Control:</span> Manage via browser settings.</li>
              </ul>
            </div>

            {/* 6. Third-Party Links */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Third-Party Links</h2>
              <p>Our site may contain links to external sites. We aren't responsible for their privacy practices.</p>
            </div>

            {/* 7. Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Changes to This Policy</h2>
              <p>We may update this policy periodically. Changes will be posted here with a revised effective date.</p>
            </div>

            {/* 8. Contact Us */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Contact Us</h2>
              <p>For questions, contact us at:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                Email: privacy@visionarydynamicsas.com<br />
                Phone: {CONTACT_INFO.phone}
              </p>
            </div>

            {/* Consent */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              By using our website or services, you consent to the terms outlined in this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;