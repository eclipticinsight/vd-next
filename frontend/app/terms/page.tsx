"use client";

import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

/**
 * Full-width Terms of Service page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy page design.
 */
const TermsOfService = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st January 2025";

  // Placeholder for the "past [X] months" – adjust as needed
  const liabilityPeriod = "6";

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
      "url('https://intersys.co.uk/wp-content/uploads/cyber-security-featured-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
    {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl text-gray-200">Effective Date: {effectiveDate}</p>
        </div>
      </div>

      {/* Main content area – full width with padding */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="w-full max-w-none mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-sm border border-gray-200">
          
          {/* Content – simple stacked sections, full width */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            
            {/* Welcome paragraph */}
            <p>
              Welcome to Visionary Dynamics. By accessing or using our website visionarydynamicsas.com and services, you agree to comply with and be bound by these Terms of Service (“Terms”). Please read them carefully.
            </p>

            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. Acceptance of Terms</h2>
              <p>By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree, please do not use our services.</p>
            </div>

            {/* 2. Services Provided */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. Services Provided</h2>
              <p>We offer the following services:</p>
              <ul className="list-disc list-inside mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                <li>Accounting</li>
                <li>Taxation</li>
                <li>Business Analytics</li>
                <li>New Business Formation</li>
                <li>Financial Planning</li>
                <li>IT Asset Management</li>
                <li>Marketing Services</li>
              </ul>
              <p className="mt-2">We reserve the right to modify, suspend, or discontinue any aspect of our services without prior notice.</p>
            </div>

            {/* 3. User Responsibilities */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. User Responsibilities</h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide accurate and complete information.</li>
                <li>Use our services only for lawful purposes.</li>
                <li>Not engage in fraudulent, abusive, or harmful activities.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
              </ul>
              <p className="mt-2">We reserve the right to suspend or terminate accounts violating these Terms.</p>
            </div>

            {/* 4. Payments & Billing */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Payments & Billing</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Some services require payment. Fees, billing cycles, and payment methods will be clearly outlined.</li>
                <li>Non-payment may result in service suspension or termination.</li>
                <li>Payments are non-refundable unless explicitly stated.</li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>All content, including logos, text, images, and software, belongs to Visionary Dynamics or its licensors.</li>
                <li>You may not copy, modify, distribute, or use our intellectual property without prior written permission.</li>
              </ul>
            </div>

            {/* 6. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Limitation of Liability</h2>
              <p>We strive to provide accurate and reliable services, but we are not liable for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Errors, delays, or service interruptions.</li>
                <li>Losses resulting from your reliance on our services.</li>
                <li>Any indirect, incidental, or consequential damages.</li>
              </ul>
              <p className="mt-2">Our total liability, if any, shall not exceed the amount paid for our services in the past {liabilityPeriod} months.</p>
            </div>

            {/* 7. Privacy Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Privacy Policy</h2>
              <p>Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.</p>
            </div>

            {/* 8. Third-Party Links */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Third-Party Links</h2>
              <p>Our website may include links to third-party sites. We are not responsible for their content or privacy practices.</p>
            </div>

            {/* 9. Termination of Services */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">9. Termination of Services</h2>
              <p>We may terminate or suspend access to our services at any time for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Violation of these Terms.</li>
                <li>Legal or regulatory reasons.</li>
                <li>Business operational needs.</li>
              </ul>
            </div>

            {/* 10. Changes to Terms */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">10. Changes to Terms</h2>
              <p>We may update these Terms periodically. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.</p>
            </div>

            {/* 11. Governing Law */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">11. Governing Law</h2>
              <p>These Terms are governed by the laws of Florida's Constitution, and any disputes shall be resolved in the Florida Courts.</p>
            </div>

            {/* 12. SMS Terms of Service */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">12. SMS Terms of Service (Updated & Compliant)</h2>
              <p>If you consent to receive conversational, informational, and promotional SMS messages from Visionary Dynamics Consulting Inc., you agree to receive these SMS communications on the phone number you provide. These messages may include updates, reminders, service notifications, and promotional offers related to our services.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Messaging frequency may vary.</li>
                <li>Message & data rates may apply.</li>
                <li>Reply STOP to opt-out at any time.</li>
                <li>Reply HELP for support.</li>
              </ul>
              <p className="mt-2 font-medium text-indigo-600">We do not share or sell your mobile opt-in information or SMS consent with any third parties or affiliates.</p>
            </div>

            {/* 13. Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">13. Contact Information</h2>
              <p>For any questions regarding these Terms, please contact us at:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">{CONTACT_INFO.email}</a>
              </p>
            </div>

            {/* Closing consent line */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              By using our services, you agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;