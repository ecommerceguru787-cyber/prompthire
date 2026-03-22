import Link from 'next/link';
export const metadata = { title: 'Find AI Talent - PromptHire', description: 'Browse and hire top AI prompt engineers and 3D animators on PromptHire.' };
const freelancers = [
  { name: 'Sarah Chen', role: 'AI Prompt Engineer', rating: '4.9', jobs: 142, rate: '$85/hr', avatar: '👩‍💻', tags: ['Midjourney','DALL-E','ChatGPT'], badge: 'Top Rated' },
  { name: 'Marcus Rivera', role: '3D Character Animator', rating: '5.0', jobs: 98, rate: '$120/hr', avatar: '👨‍🎨', tags: ['Blender','Maya','Cinema 4D'], badge: 'Pro' },
  { name: 'Aisha Patel', role: 'Midjourney Specialist', rating: '4.8', jobs: 211, rate: '$65/hr', avatar: '👩‍🎨', tags: ['Midjourney','Stable Diffusion'], badge: 'Expert' },
  { name: 'Liu Wei', role: 'GPT Prompt Engineer', rating: '4.9', jobs: 87, rate: '$75/hr', avatar: '🧑‍💻', tags: ['GPT-4','Claude','Gemini'], badge: 'Rising' },
  { name: 'Sofia Rossi', role: 'AI Video Specialist', rating: '4.7', jobs: 64, rate: '$95/hr', avatar: '👩‍🎥', tags: ['Runway','Sora','Pika'], badge: 'Expert' },
  { name: 'Ahmed Hassan', role: '3D Product Visualizer', rating: '4.9', jobs: 176, rate: '$80/hr', avatar: '👨‍🎨', tags: ['KeyShot','Blender','3ds Max'], badge: 'Top Rated' },
];
export default function FindTalentPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-center">Find Specialized AI & 3D Talent</h1>
          <p className="text-indigo-200 text-center mb-8">Browse {freelancers.length}00+ vetted professionals ready to work on your project</p>
          <div className="bg-white rounded-xl p-3 flex gap-3">
            <input type="text" placeholder="Search by skill (e.g. Midjourney, 3D Animation...)" className="flex-1 px-4 py-2 text-gray-800 outline-none" />
            <button className="bg-indigo-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-indigo-700 transition">🔍 Search</button>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">600+ Freelancers Available</h2>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600">
            <option>Sort: Top Rated</option>
            <option>Sort: Lowest Rate</option>
            <option>Sort: Most Jobs</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map(f => (
            <div key={f.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{f.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-800">{f.name}</div>
                    <div className="text-sm text-indigo-600">{f.role}</div>
                  </div>
                </div>
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">{f.badge}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {f.tags.map(t => <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{t}</span>)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">⭐ {f.rating} ({f.jobs} jobs)</span>
                <span className="font-bold text-gray-800">{f.rate}</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition text-sm">View Profile</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
