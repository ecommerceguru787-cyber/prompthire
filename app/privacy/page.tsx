import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PromptHire',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: March 23, 2026</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p>PromptHire ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our freelance marketplace platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and contact details</li>
              <li>Profile information (skills, portfolio, work history)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication data between users on the platform</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information and IP address</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and actions taken on our platform</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send transaction notifications</li>
              <li>Improve our platform and user experience</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Other Users:</strong> Profile information visible to facilitate hiring</li>
              <li><strong>Service Providers:</strong> Payment processors, hosting providers, analytics services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure payment processing through PCI-DSS compliant providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your account and data</li>
              <li>Object to processing of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential functionality and authentication</li>
              <li>Analytics and performance monitoring</li>
              <li>Personalization and preferences</li>
              <li>Marketing and advertising</li>
            </ul>
            <p className="mt-4">You can control cookies through your browser settings. See our Cookie Policy for more details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Data Retention</h2>
            <p>We retain your information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data for legal compliance, fraud prevention, and legitimate business purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Children's Privacy</h2>
            <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or platform notification.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contact Us</h2>
            <p>For privacy-related questions or to exercise your rights, contact us at:</p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@prompthire.com<br />
              <strong>Address:</strong> PromptHire Privacy Team<br />
              123 Market Street, San Francisco, CA 94103, USA
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
