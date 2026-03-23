import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - PromptHire',
};

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Getting Started',
      items: [
        { title: 'How to Create a Winning Profile', description: 'Tips for showcasing your skills and portfolio effectively' },
        { title: 'Writing Proposals That Get Accepted', description: 'Best practices for submitting winning project proposals' },
        { title: 'Setting Your Rates', description: 'Guide to pricing your services competitively' },
      ]
    },
    {
      category: 'AI & Prompt Engineering',
      items: [
        { title: 'Prompt Engineering Best Practices', description: 'Advanced techniques for crafting effective AI prompts' },
        { title: 'ChatGPT & GPT-4 Use Cases', description: 'Real-world applications and project examples' },
        { title: 'Midjourney Mastery Guide', description: 'Creating stunning AI art and designs' },
        { title: 'DALL-E Prompt Templates', description: 'Ready-to-use templates for image generation' },
      ]
    },
    {
      category: '3D Animation',
      items: [
        { title: 'Blender for Beginners', description: 'Getting started with 3D modeling and animation' },
        { title: 'Cinema 4D Workflows', description: 'Professional animation pipelines' },
        { title: 'Character Animation Fundamentals', description: 'Rigging, skinning, and movement principles' },
      ]
    },
    {
      category: 'Business & Growth',
      items: [
        { title: 'Building Client Relationships', description: 'How to retain clients and get repeat business' },
        { title: 'Time Management for Freelancers', description: 'Balancing multiple projects effectively' },
        { title: 'Scaling Your Freelance Business', description: 'Growing from solo to team operations' },
      ]
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-indigo-100">
            Guides, tutorials, and tools to help you succeed on PromptHire
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-12">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold mb-2 text-indigo-600">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help Center CTA */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit our Help Center or contact our support team
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/help"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Visit Help Center
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
