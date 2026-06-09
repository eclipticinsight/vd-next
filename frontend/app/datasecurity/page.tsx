"use client";

import React, { useEffect, useState } from 'react';

/**
 * Full-width Data Security Policy page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy, Terms of Service, and Cookies Policy pages.
 */
const DataSecurityPolicyPage = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st June 2025";

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
      "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
    {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Data Security Policy</h1>
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
              At Visionary Dynamics, we take the security of your data seriously. This Data Security Policy outlines our commitment to protecting your information and the measures we implement to safeguard it against unauthorized access, alteration, disclosure, or destruction.
            </p>

            {/* 1. Our Commitment */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. Our Commitment to Data Security</h2>
              <p>We are committed to ensuring the confidentiality, integrity, and availability of all personal and sensitive information entrusted to us. Our security practices are designed to protect data throughout its lifecycle—from collection to deletion.</p>
            </div>

            {/* 2. Security Measures */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. Security Measures We Implement</h2>
              <p>We employ a combination of technical, administrative, and physical safeguards to protect your data, including:</p>
              
              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.1 Technical Safeguards</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-medium">Encryption:</span> All data transmitted between your browser and our servers is encrypted using TLS (Transport Layer Security) protocols. Sensitive data stored on our systems is encrypted at rest using industry-standard algorithms.</li>
                <li><span className="font-medium">Firewalls & Intrusion Detection:</span> We maintain firewalls and intrusion detection/prevention systems to monitor and block unauthorized access attempts.</li>
                <li><span className="font-medium">Secure Authentication:</span> Multi-factor authentication (MFA) is required for access to administrative systems and sensitive data.</li>
                <li><span className="font-medium">Regular Patching:</span> We regularly update and patch all systems to protect against known vulnerabilities.</li>
                <li><span className="font-medium">Backup & Recovery:</span> Automated, encrypted backups are performed daily to ensure data can be restored in case of loss or corruption.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.2 Administrative Safeguards</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-medium">Access Controls:</span> Strict role-based access controls (RBAC) ensure that only authorized personnel can access sensitive information.</li>
                <li><span className="font-medium">Security Training:</span> All employees undergo regular security awareness training and sign confidentiality agreements.</li>
                <li><span className="font-medium">Vendor Risk Management:</span> Third-party vendors who process data on our behalf are carefully vetted and contractually obligated to maintain equivalent security standards.</li>
                <li><span className="font-medium">Incident Response Plan:</span> We have a documented incident response plan to quickly address any security breaches or data incidents.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">2.3 Physical Safeguards</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-medium">Data Center Security:</span> Our servers are hosted in SSAE-18 certified data centers with 24/7 surveillance, biometric access controls, and environmental protections.</li>
                <li><span className="font-medium">Office Security:</span> Access to our physical offices is restricted to authorized personnel only.</li>
                <li><span className="font-medium">Device Security:</span> Company-issued devices are encrypted, password-protected, and can be remotely wiped if lost or stolen.</li>
              </ul>
            </div>

            {/* 3. Data Breach Response */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. Data Breach Response</h2>
              <p>In the unlikely event of a data breach, we have a comprehensive response plan that includes:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Immediate containment and assessment of the breach.</li>
                <li>Notification to affected individuals and relevant authorities as required by applicable laws (within 72 hours for GDPR, etc.).</li>
                <li>Thorough investigation to determine the root cause.</li>
                <li>Implementation of additional safeguards to prevent recurrence.</li>
              </ul>
            </div>

            {/* 4. Your Responsibilities */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Your Responsibilities</h2>
              <p>While we implement strong security measures, you also play a role in protecting your data:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Use strong, unique passwords for your accounts.</li>
                <li>Never share your login credentials with others.</li>
                <li>Log out of your account when using shared devices.</li>
                <li>Report any suspicious activity or potential security incidents to us immediately.</li>
              </ul>
            </div>

            {/* 5. Compliance & Certifications */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Compliance & Certifications</h2>
              <p>Our security practices align with industry standards and regulations, including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>GDPR (General Data Protection Regulation)</li>
                <li>CCPA (California Consumer Privacy Act)</li>
                <li>ISO/IEC 27001:2022 (Information Security Management)</li>
                <li>SOC 2 Type II (Service Organization Control)</li>
                <li>PCI DSS (Payment Card Industry Data Security Standard) where applicable</li>
              </ul>
            </div>

            {/* 6. Data Retention & Deletion */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Data Retention & Deletion</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required or permitted by law. When data is no longer needed, it is securely deleted or anonymized.</p>
              <p className="mt-2">Our deletion process ensures that:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Electronic data is overwritten or cryptographically erased.</li>
                <li>Physical media is shredded or destroyed.</li>
                <li>Backup copies are purged according to our retention schedule.</li>
              </ul>
            </div>

            {/* 7. Security Audits & Assessments */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Security Audits & Assessments</h2>
              <p>We regularly conduct:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><span className="font-medium">Vulnerability Assessments:</span> Weekly automated scans to identify potential weaknesses.</li>
                <li><span className="font-medium">Penetration Testing:</span> Annual third-party security tests to simulate real-world attacks.</li>
                <li><span className="font-medium">Internal Audits:</span> Quarterly reviews of our security controls and policies.</li>
                <li><span className="font-medium">Third-Party Audits:</span> Independent audits to maintain our certifications.</li>
              </ul>
            </div>

            {/* 8. Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Updates to This Policy</h2>
              <p>We may update this Data Security Policy periodically to reflect changes in our practices, technologies, or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.</p>
            </div>

            {/* 9. Contact Us */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">9. Contact Us</h2>
              <p>If you have any questions about our data security practices or wish to report a security concern, please contact our Security Team:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                <a href="mailto:security@visionarydynamicsas.com" className="text-blue-600 hover:underline">security@visionarydynamicsas.com</a><br />
                <span className="text-sm text-gray-500">For urgent security issues, please include "URGENT" in the subject line.</span>
              </p>
            </div>

            {/* SMS Security Note */}
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-sm text-green-800">
                <span className="font-bold">SMS Security:</span> All SMS communications are protected using industry-standard encryption. Message content is not stored longer than necessary, and we never share opt-in data with third parties.
              </p>
            </div>

            {/* Closing statement */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              By entrusting us with your data, you acknowledge our commitment to its protection. We continuously work to maintain the highest security standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSecurityPolicyPage;