import Link from 'next/link';
export const metadata = { title: 'Blog - PromptHire', description: 'Tips, guides, and insights for AI prompt engineers and 3D animators.' };
const posts = [
  { slug: '1', title: 'How to Write Perfect Midjourney Prompts in 2024', category: 'AI Prompts', date: 'Dec 10, 2024', read: '5 min', emoji: '🎨' },
  { slug: '2', title: 'Top 10 ChatGPT Prompt Engineering Techniques', category: 'GPT Prompts', date: 'Dec 5, 2024', read: '7 min', emoji: '🤖' },
  { slug: '3', title: 'How to Price Your 3D Animation Services', category: '3D Animation', date: 'Nov 28, 2024', read: '6 min', emoji: '🎥' },
  { slug: '4', title: 'Getting Started with Stable Diffusion Prompts', category: 'AI Prompts', date: 'Nov 20, 2024', read: '8 min', emoji: '✨' },
  { slug: '5', title: 'Building a Winning Freelance Portfolio as an AI Specialist', category: 'Career', date: 'Nov 15, 2024', read: '5 min', emoji: '💼' },
  { slug: '6', title: 'The Rise of AI Video Prompt Engineers', category: 'AI Video', date: 'Nov 8, 2024', read: '4 min', emoji: '🎬' },
];
export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">PromptHire Blog</h1>
        <p className="text-indigo-200 max-w-xl mx-auto">Insights, tips and guides for the AI and 3D creative community</p>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden">
              <div className="bg-indigo-50 h-32 flex items-center justify-center text-6xl">{p.emoji}</div>
              <div className="p-5">
                <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-2 py-1 rounded-full">{p.category}</span>
                <h2 className="font-bold text-gray-800 mt-3 mb-2 leading-tight">{p.title}</h2>
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
