"use client";

import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

/**
 * Full-width Complaint & Grievance Policy page with a hero section.
 * Hero includes a background image, dark overlay, and the page title.
 * Styled to match the Privacy Policy, Terms of Service, Cookies Policy, and Data Security Policy pages.
 */
const ComplaintGrievancePolicy = () => {
  const [mounted, setMounted] = useState(false);
  const effectiveDate = "1st August 2025";

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
      "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
    {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Hero content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Complaint & Grievance Policy</h1>
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
              At Visionary Dynamics, we are committed to providing exceptional service and maintaining the trust of our clients and users. This Complaint & Grievance Policy outlines our process for addressing and resolving any concerns, complaints, or grievances you may have regarding our services, data handling practices, or any other aspect of your interaction with us.
            </p>

            {/* 1. Purpose and Scope */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">1. Purpose and Scope</h2>
              <p>This policy applies to all clients, users, and visitors of Visionary Dynamics' website and services. It covers complaints related to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Quality of services provided</li>
                <li>Billing and payment issues</li>
                <li>Data privacy and security concerns</li>
                <li>Communication and support experiences</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Any other aspect of our operations</li>
              </ul>
            </div>

            {/* 2. How to File a Complaint */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">2. How to File a Complaint</h2>
              <p>You can submit a complaint through any of the following channels:</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">📧 Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:grievances@visionarydynamicsas.com" className="text-blue-600 hover:underline">grievances@visionarydynamicsas.com</a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Please include "Complaint" in the subject line.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">📞 Phone</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm EST</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">📝 Online Form</h3>
                  <p className="text-gray-600">Visit our website and complete the Complaint Form</p>
                  <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">✉️ Postal Mail</h3>
                  <p className="text-gray-600">
                    Visionary Dynamics Consulting Inc.<br />
                    Attn: Grievance Officer<br />
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Information to Include */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">3. Information to Include in Your Complaint</h2>
              <p>To help us address your concern efficiently, please provide:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your full name and contact information</li>
                <li>Account details (if applicable)</li>
                <li>Clear description of the issue or grievance</li>
                <li>Date(s) when the issue occurred</li>
                <li>Any relevant documentation or evidence</li>
                <li>Desired resolution (if any)</li>
                <li>Previous correspondence related to the issue</li>
              </ul>
            </div>

            {/* 4. Complaint Handling Process */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">4. Complaint Handling Process</h2>
              
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                  <div>
                    <h3 className="font-medium text-gray-800">Acknowledgment</h3>
                    <p className="text-gray-600">We will acknowledge receipt of your complaint within 2 business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                  <div>
                    <h3 className="font-medium text-gray-800">Initial Review</h3>
                    <p className="text-gray-600">Your complaint will be assigned to a grievance officer who will conduct an initial review within 3 business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                  <div>
                    <h3 className="font-medium text-gray-800">Investigation</h3>
                    <p className="text-gray-600">A thorough investigation will be conducted. We may contact you for additional information during this phase.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                  <div>
                    <h3 className="font-medium text-gray-800">Resolution</h3>
                    <p className="text-gray-600">We will provide a written response with our findings and proposed resolution within 15 business days of acknowledgment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">5</div>
                  <div>
                    <h3 className="font-medium text-gray-800">Escalation</h3>
                    <p className="text-gray-600">If you are unsatisfied with the resolution, you may request escalation to senior management within 7 days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Timelines */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">5. Resolution Timelines</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Complaint Type</th>
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Initial Response</th>
                      <th className="py-2 px-4 border-b text-left font-medium text-gray-700">Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Service Quality</td>
                      <td className="py-2 px-4 border-b">2 business days</td>
                      <td className="py-2 px-4 border-b">10 business days</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Billing/Financial</td>
                      <td className="py-2 px-4 border-b">2 business days</td>
                      <td className="py-2 px-4 border-b">7 business days</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Data Privacy/Security</td>
                      <td className="py-2 px-4 border-b">1 business day</td>
                      <td className="py-2 px-4 border-b">15 business days</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">General Concerns</td>
                      <td className="py-2 px-4 border-b">3 business days</td>
                      <td className="py-2 px-4 border-b">10 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Grievance Officer */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">6. Grievance Officer</h2>
              <p>We have appointed a dedicated Grievance Officer to oversee the complaint resolution process:</p>
              <div className="mt-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-800">Sarah Johnson</p>
                <p className="text-gray-600">Grievance Officer</p>
                <p className="text-gray-600 mt-2">
                  Email: <a href="mailto:sarah.johnson@visionarydynamicsas.com" className="text-blue-600 hover:underline">sarah.johnson@visionarydynamicsas.com</a><br />
                  Phone: {CONTACT_INFO.phone}<br />
                  Address: {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* 7. Escalation Matrix */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">7. Escalation Matrix</h2>
              <p>If your complaint is not resolved satisfactorily at the initial level, you may escalate as follows:</p>
              
              <div className="mt-4 space-y-3">
                <div className="border-l-4 border-indigo-400 pl-4 py-2">
                  <p className="font-medium text-gray-800">Level 1: Grievance Officer</p>
                  <p className="text-sm text-gray-600">Initial review and resolution attempt</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                  <p className="font-medium text-gray-800">Level 2: Operations Manager</p>
                  <p className="text-sm text-gray-600">Review of unresolved complaints within 5 business days</p>
                </div>
                
                <div className="border-l-4 border-indigo-600 pl-4 py-2">
                  <p className="font-medium text-gray-800">Level 3: Senior Management</p>
                  <p className="text-sm text-gray-600">Final internal review within 7 business days</p>
                </div>
                
                <div className="border-l-4 border-indigo-700 pl-4 py-2">
                  <p className="font-medium text-gray-800">Level 4: External Mediation</p>
                  <p className="text-sm text-gray-600">If internal resolution fails, you may pursue external mediation or legal remedies as permitted by law</p>
                </div>
              </div>
            </div>

            {/* 8. Confidentiality */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">8. Confidentiality</h2>
              <p>All complaints and related information will be handled with strict confidentiality. Access to complaint details is limited to personnel directly involved in the resolution process. We will not disclose your personal information to third parties without your consent, except as required by law.</p>
            </div>

            {/* 9. No Retaliation Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">9. No Retaliation Policy</h2>
              <p>Visionary Dynamics strictly prohibits retaliation against any individual who files a complaint or grievance in good faith. If you believe you have experienced retaliation, please report it immediately to our Grievance Officer.</p>
            </div>

            {/* 10. Regulatory Authorities */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">10. Regulatory Authorities</h2>
              <p>If you are not satisfied with our resolution, you have the right to file a complaint with relevant regulatory authorities:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Federal Trade Commission (FTC)</li>
                <li>Florida Department of Agriculture and Consumer Services</li>
                <li>Better Business Bureau (BBB)</li>
                <li>Data protection authorities (for privacy-related grievances)</li>
              </ul>
            </div>

            {/* 11. Record Keeping */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">11. Record Keeping</h2>
              <p>We maintain detailed records of all complaints and their resolution for a minimum of 3 years. These records are used to identify trends, improve our services, and ensure compliance with regulatory requirements.</p>
            </div>

            {/* 12. Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">12. Updates to This Policy</h2>
              <p>We may update this Complaint & Grievance Policy periodically to reflect changes in our practices or legal requirements. The latest version will always be available on our website with the effective date.</p>
            </div>

            {/* 13. Contact Information */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">13. Contact Information</h2>
              <p>For questions about this policy or the complaint process, please contact:</p>
              <p className="mt-2">
                Visionary Dynamics Consulting Inc.<br />
                Attn: Compliance Department<br />
                <a href="mailto:compliance@visionarydynamicsas.com" className="text-blue-600 hover:underline">compliance@visionarydynamicsas.com</a><br />
                Phone: {CONTACT_INFO.phone}
              </p>
            </div>

            {/* SMS/Communication Note */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-yellow-800">
                <span className="font-bold">Important:</span> For complaints related to SMS communications or marketing messages, please include "SMS Complaint" in your email subject line to ensure prompt handling by our specialized team.
              </p>
            </div>

            {/* Closing statement */}
            <p className="text-sm text-gray-500 pt-5 border-t border-gray-200">
              We value your feedback and are committed to resolving any concerns fairly and promptly. Your trust is important to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintGrievancePolicy;