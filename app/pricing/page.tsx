import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pricing - PromptHire' };

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">No subscriptions, no surprises. PromptHire earns only when you do.</p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Freelancer Card */}
        <div className="border-2 border-indigo-600 rounded-3xl overflow-hidden shadow-xl flex flex-col">
          <div className="bg-indigo-600 p-8 text-white">
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="text-2xl font-bold">For Freelancers</h2>
            <p className="text-indigo-200 text-sm mt-1">AI Prompt Engineers & 3D Animators</p>
          </div>
          <div className="p-8 flex-grow text-gray-700">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-6xl font-extrabold text-gray-900">10%</span>
            </div>
            <p className="text-gray-500 mb-6">Deducted from your earnings per completed job. <strong>Zero upfront cost.</strong></p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Free to join — no monthly fee</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Unlimited bids & proposals</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Escrow-protected payments</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Verified badge on your profile</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Withdraw anytime via Stripe/PayPal</span></div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-4 text-sm text-indigo-700 mb-6">
              <strong>Example:</strong> You earn $1,000 → PromptHire takes $100 → <strong>You receive $900</strong>
            </div>
            <Link href="/auth/signup?role=freelancer" className="block w-full text-center py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
              Join as Freelancer — It&apos;s Free
            </Link>
          </div>
        </div>

        {/* Customer Card */}
        <div className="border-2 border-pink-500 rounded-3xl overflow-hidden shadow-xl flex flex-col">
          <div className="bg-pink-500 p-8 text-white">
            <div className="text-4xl mb-3">💼</div>
            <h2 className="text-2xl font-bold">For Customers</h2>
            <p className="text-pink-100 text-sm mt-1">Startups, Agencies & Teams</p>
          </div>
          <div className="p-8 flex-grow text-gray-700">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-6xl font-extrabold text-gray-900">3%</span>
            </div>
            <p className="text-gray-500 mb-6">Added on top of each payment you make. <strong>Free to post jobs.</strong></p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Post unlimited jobs for free</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Access 1,200+ verified specialists</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Milestone-based secure payments</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Dispute resolution & money-back guarantee</span></div>
              <div className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span><span>Pay via Stripe, card, or wire</span></div>
            </div>
            <div className="bg-pink-50 rounded-2xl p-4 text-sm text-pink-700 mb-6">
              <strong>Example:</strong> Project is $1,000 → You pay $1,030 total → <strong>$30 goes to platform</strong>
            </div>
            <Link href="/auth/signup?role=customer" className="block w-full text-center py-4 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition">
              Post a Job — It&apos;s Free
            </Link>
          </div>
        </div>
      </div>

      {/* Enterprise Banner */}
      <div className="bg-gray-900 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Need a custom deal?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Enterprise teams get volume discounts, dedicated account managers, and custom SLAs.</p>
        <Link href="/enterprise" className="inline-block py-4 px-10 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition">
          Talk to Our Enterprise Team
        </Link>
      </div>
    </div>
  );
}
