export const metadata = { title: 'Enterprise - PromptHire', description: 'Scalable AI talent solutions for enterprises.' };
export default function EnterprisePage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20 px-6 text-center">
        <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">ENTERPRISE</div>
        <h1 className="text-5xl font-bold mb-4">AI Talent at Scale</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Dedicated account management, bulk hiring, and custom contracts for teams of all sizes.</p>
        <button className="mt-8 bg-indigo-500 text-white font-bold px-8 py-4 rounded-full hover:bg-indigo-600 transition text-lg">Contact Sales</button>
      </section>
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {icon:'👥',t:'Dedicated Account Manager',d:'A single point of contact for all your hiring needs, available 24/7.'},
            {icon:'⚡',t:'Fast Matching',d:'Get matched with qualified specialists within 24 hours, guaranteed.'},
            {icon:'📄',t:'Custom Contracts',d:'Tailored NDAs, IP agreements, and payment terms for your legal team.'},
            {icon:'🔒',t:'Vetted Talent',d:'All freelancers pass rigorous skills tests and background checks.'},
            {icon:'📊',t:'Analytics Dashboard',d:'Track project progress, spending, and freelancer performance in real-time.'},
            {icon:'💳',t:'Consolidated Billing',d:'One invoice for all your freelancers. Net-30 payment terms available.'},
          ].map(f=>(
            <div key={f.t} className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{f.t}</h3>
              <p className="text-gray-600 text-sm">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-indigo-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Talk to Our Enterprise Team</h2>
          <p className="text-indigo-200 mb-8">Custom pricing for teams of 5+ projects per month.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <input type="email" placeholder="Work email" className="px-5 py-3 rounded-xl text-gray-800 w-64 focus:outline-none" />
            <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition">Request Demo</button>
          </div>
        </div>
      </section>
    </main>
  );
}
