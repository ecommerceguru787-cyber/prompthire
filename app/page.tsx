import Link from 'next/link';

export const metadata = {
  title: 'PromptHire - Freelance Marketplace for AI Prompt Engineers & 3D Animators',
  description: 'Find top AI prompt engineers and 3D animators for your projects. PromptHire connects specialized creative professionals with businesses worldwide.',
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            #1 Specialized AI Freelance Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hire the World&apos;s Best <span className="text-yellow-400">AI Prompt Engineers</span> &amp; <span className="text-pink-400">3D Animators</span>
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
            PromptHire connects specialized AI and creative professionals with businesses who need cutting-edge talent. No generic freelancers &mdash; only verified specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/find-talent" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition shadow-lg">
              Find Talent →
            </Link>
            <Link href="/join" className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-black transition">
              Get Hired
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '2,400+', label: 'AI Prompt Engineers' },
            { number: '1,800+', label: '3D Animators' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '$45M+', label: 'Earned by Freelancers' },
          ].map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-4xl font-bold text-indigo-600">{stat.number}</div>
              <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Specialized Categories</h2>
          <p className="text-center text-gray-500 mb-12">Expert talent across the most in-demand AI and 3D disciplines</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AI Image Prompts', desc: 'Midjourney, DALL-E, Stable Diffusion specialists', icon: '🎨', color: 'bg-purple-50 border-purple-200' },
              { title: 'AI Text & GPT Prompts', desc: 'ChatGPT, Claude, Gemini prompt engineers', icon: '✍️', color: 'bg-blue-50 border-blue-200' },
              { title: '3D Character Animation', desc: 'Game-ready characters and cinematic animations', icon: '🎭', color: 'bg-pink-50 border-pink-200' },
              { title: 'AI Video Generation', desc: 'Sora, Runway, Pika prompt specialists', icon: '🎬', color: 'bg-red-50 border-red-200' },
              { title: '3D Product Visualization', desc: 'Photorealistic renders for e-commerce', icon: '📦', color: 'bg-green-50 border-green-200' },
              { title: 'AI Workflow Automation', desc: 'LangChain, AutoGPT, n8n experts', icon: '⚙️', color: 'bg-yellow-50 border-yellow-200' },
            ].map((cat) => (
              <div key={cat.title} className={`${cat.color} border rounded-2xl p-6 hover:shadow-md transition cursor-pointer`}>
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
                <div className="mt-4 text-indigo-600 font-medium text-sm">Browse experts →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How PromptHire Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Post Your Project', desc: 'Describe your AI or 3D animation needs. Our smart matching system finds the perfect specialist.' },
              { step: '2', title: 'Review Proposals', desc: 'Browse portfolios, compare rates, and chat with pre-vetted professionals before hiring.' },
              { step: '3', title: 'Pay Securely', desc: 'Use our escrow payment system. Funds released only when you approve the work.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Top Rated Professionals</h2>
          <p className="text-center text-gray-500 mb-12">Handpicked experts with proven track records</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', role: 'AI Prompt Engineer', rating: '4.9', reviews: '142', rate: '$85/hr', avatar: '👩‍💻', badge: 'Top Rated' },
              { name: 'Marcus Rivera', role: '3D Character Animator', rating: '5.0', reviews: '98', rate: '$120/hr', avatar: '👨‍🎨', badge: 'Pro' },
              { name: 'Aisha Patel', role: 'Midjourney Specialist', rating: '4.8', reviews: '211', rate: '$65/hr', avatar: '👩‍🎨', badge: 'Expert' },
            ].map((pro) => (
              <div key={pro.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{pro.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-800">{pro.name}</div>
                    <div className="text-sm text-indigo-600">{pro.role}</div>
                  </div>
                  <span className="ml-auto bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">{pro.badge}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⭐ {pro.rating} ({pro.reviews} reviews)</span>
                  <span className="font-bold text-gray-800">{pro.rate}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/find-talent" className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition">
              Browse All Talent
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find world-class AI &amp; 3D talent?</h2>
          <p className="text-xl mb-8 text-indigo-200">Join 50,000+ companies already using PromptHire to power their creative AI workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition">
              Start for Free
            </Link>
            <Link href="/enterprise" className="border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-indigo-600 transition">
              Enterprise Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
