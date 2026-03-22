export const metadata = { title: 'Careers - PromptHire', description: 'Join the PromptHire team and help shape the future of AI freelancing.' };
const jobs = [
  { t: 'Senior Product Designer', d: 'Remote', type: 'Full-time' },
  { t: 'AI/ML Engineer', d: 'Remote', type: 'Full-time' },
  { t: 'Content Strategist', d: 'Remote', type: 'Part-time' },
  { t: 'Community Manager', d: 'Remote', type: 'Full-time' },
  { t: 'Frontend Engineer (Next.js)', d: 'Remote', type: 'Full-time' },
];
export default function CareersPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">Help us build the future of specialized AI freelancing. We&apos;re a remote-first team with big ambitions.</p>
      </section>
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[{icon:'🏡',t:'100% Remote',d:'Work from anywhere'},{icon:'💰',t:'Competitive Pay',d:'Top market rates'},{icon:'🌱',t:'Growth',d:'Rapid career growth'}].map(b=>(
            <div key={b.t} className="bg-indigo-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">{b.icon}</div>
              <div className="font-bold text-gray-800">{b.t}</div>
              <div className="text-gray-500 text-sm">{b.d}</div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map(j => (
            <div key={j.t} className="border border-gray-200 rounded-xl p-6 flex items-center justify-between hover:border-indigo-400 hover:shadow-sm transition">
              <div>
                <div className="font-bold text-gray-800">{j.t}</div>
                <div className="text-gray-500 text-sm mt-1">{j.d} • {j.type}</div>
              </div>
              <button className="bg-indigo-600 text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-indigo-700 transition">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
