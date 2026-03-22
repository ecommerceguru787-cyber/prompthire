import Link from 'next/link';

export const metadata = {
  title: 'PromptHire - Freelance Marketplace for AI Prompt Engineers & 3D Animators',
  description: 'Find top AI prompt engineers and 3D animators for your projects. PromptHire connects specialized creative professionals with businesses worldwide.',
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The #1 Platform for <span className="text-yellow-400">AI Prompt Engineers</span> &amp; <span className="text-pink-400">3D Animators</span>
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
            PromptHire connects specialized AI and creative professionals with businesses who need cutting-edge talent. No generic freelancers — only the best specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/find-talent" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition">
              Find Talent
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
            <div key={stat.label}>
              <div className="text-4xl font-bold text-indigo-600">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Specialized Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AI Image Prompts', desc: 'Midjourney, DALL-E, Stable Diffusion specialists', icon: '🎨', color: 'bg-purple-100' },
              { title: 'AI Text & GPT Prompts', desc: 'ChatGPT, Claude, Gemini prompt engineers', icon: '✍️', color: 'bg-blue-100' },
              { title: '3D Character Animation', desc: 'Game-ready characters and cinematic animations', icon: '🎭', color: 'bg-pink-100' },
              { title: 'AI Video Generation', desc: 'Sora, Runway, Pika prompt specialists', icon: '🎬', color: 'bg-red-100' },
              { title: '3D Product Visualization', desc: 'Photorealistic renders for e-commerce', icon: '📦', color: 'bg-green-100' },
              { title: 'AI Workflow Automation', desc: 'LangChain, AutoGPT, n8n experts', icon: '⚙️', color: 'bg-yellow-100' },
            ].map((cat) => (
              <div key={cat.title} className={`${cat.color} rounded-2xl p-6 hover:shadow-lg transition cursor-pointer`}>
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
                <p className="text-gray-600">{cat.desc}</p>
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
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find world-class AI &amp; 3D talent?</h2>
          <p className="text-xl mb-8 text-indigo-200">Join 50,000+ companies already using PromptHire to power their creative AI workflows.</p>
          <Link href="/signup" className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition">
            Start for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">PromptHire</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For Clients</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/find-talent" className="hover:text-white">Find Talent</Link></li>
                <li><Link href="/post-job" className="hover:text-white">Post a Job</Link></li>
                <li><Link href="/enterprise" className="hover:text-white">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/join" className="hover:text-white">Join as Freelancer</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2024 PromptHire.io — The Specialized Freelance Marketplace for AI &amp; 3D Professionals</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
