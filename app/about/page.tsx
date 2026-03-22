import Link from 'next/link';
export const metadata = { title: 'About Us - PromptHire', description: 'Learn about PromptHire, the specialized freelance marketplace for AI prompt engineers and 3D animators.' };
export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About PromptHire</h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">We built the marketplace we always wished existed &mdash; one that truly understands the needs of AI and 3D creative professionals.</p>
      </section>
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">PromptHire was founded in 2024 with a single mission: to create the most specialized, trusted, and efficient marketplace for AI prompt engineers and 3D animation professionals worldwide.</p>
            <p className="text-gray-600">We recognized that generic freelance platforms couldn&apos;t serve the unique needs of these emerging professions. AI prompt engineering requires specialized vetting, portfolio evaluation, and client-matching that general platforms simply don&apos;t offer.</p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[{n:'2024',l:'Founded'},{n:'50K+',l:'Active Users'},{n:'4,200+',l:'Vetted Freelancers'},{n:'30+',l:'Countries'}].map(s=>(
                <div key={s.l}><div className="text-3xl font-bold text-indigo-600">{s.n}</div><div className="text-gray-600 text-sm mt-1">{s.l}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:'🎯',t:'Specialization',d:'We focus exclusively on AI and 3D creative talent, ensuring deep domain expertise in our vetting process.'},
              {icon:'🛡️',t:'Trust & Safety',d:'Every freelancer is background-checked, skill-verified, and portfolio-reviewed before joining.'},
              {icon:"🌍",t:'Global Access',d:'Connect with top talent from 30+ countries, bringing diverse creative perspectives to your projects.'},
            ].map(v=>(
              <div key={v.t} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{v.t}</h3>
                <p className="text-gray-600 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-indigo-200 mb-8">Whether you&apos;re a business looking for AI talent or a creative professional seeking opportunities, PromptHire is your home.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/find-talent" className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">Find Talent</Link>
            <Link href="/join" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition">Join as Freelancer</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
