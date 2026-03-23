import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join as Freelancer - PromptHire',
};

export default function JoinFreelancerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Join as a Freelancer</h1>
          <p className="text-xl mb-8 text-indigo-100">
            Connect with businesses seeking AI Prompt Engineers & 3D Animators worldwide
          </p>
          <Link 
            href="/auth/signup"
            className="inline-block bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Join PromptHire?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">High-Paying Projects</h3>
            <p className="text-gray-600">
              Access premium projects from startups and enterprises. Average project value: $500-$5,000+
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Specialized Platform</h3>
            <p className="text-gray-600">
              Unlike generic platforms, we focus exclusively on AI & 3D creative professionals
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Fast Payments</h3>
            <p className="text-gray-600">
              Get paid within 24 hours of project completion. No waiting weeks for your money
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">Secure Escrow</h3>
            <p className="text-gray-600">
              Payment protection for every project. Your earnings are guaranteed
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Build Your Reputation</h3>
            <p className="text-gray-600">
              Showcase your work, earn reviews, and grow your profile to attract better clients
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is always here to help you succeed on the platform
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">
                  Sign up in minutes, showcase your skills, portfolio, and set your rates
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Browse & Apply to Jobs</h3>
                <p className="text-gray-600">
                  Find projects that match your expertise. Send proposals to interested clients
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get Hired & Start Working</h3>
                <p className="text-gray-600">
                  Once hired, deliver great work using our collaboration tools and milestone system
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Get Paid Securely</h3>
                <p className="text-gray-600">
                  Receive payment directly to your account. Keep 90% of your earnings (10% platform fee)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">No monthly fees. Only pay when you earn</p>
        
        <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-8 text-center">
          <div className="text-6xl font-bold text-indigo-600 mb-4">10%</div>
          <p className="text-xl text-gray-700 mb-6">Service fee per project</p>
          <div className="bg-white rounded-lg p-6 text-left">
            <p className="text-gray-600 mb-2">✓ No subscription fees</p>
            <p className="text-gray-600 mb-2">✓ No listing fees</p>
            <p className="text-gray-600 mb-2">✓ You keep 90% of what you earn</p>
            <p className="text-gray-600">✓ Example: Earn $1,000, keep $900</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of AI and 3D professionals earning on PromptHire
          </p>
          <Link 
            href="/auth/signup"
            className="inline-block bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition"
          >
            Sign Up as Freelancer
          </Link>
        </div>
      </div>
    </div>
  );
}
