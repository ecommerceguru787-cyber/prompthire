'use client';
import { useState } from 'react';

export default function EnterprisePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/enterprise-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to send request. Please try again later.');
    }
  };

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Enterprise Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Talent at Scale</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Dedicated account management, custom contracts, and high-volume hiring for the world's most ambitious teams.
          </p>
          <a href="#contact" className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition shadow-lg">
            Talk to Our Team
          </a>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Dedicated Account Manager</h3>
            <p className="text-gray-600">A single point of contact for all your hiring needs, available 24/7.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Priority Matching</h3>
            <p className="text-gray-600">Get matched with top-tier, verified specialists within 24 hours.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Contracts</h3>
            <p className="text-gray-600">Tailored NDAs, IP agreements, and payment terms for your legal team.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl text-center border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Request a Demo</h2>
          <p className="text-gray-600 mb-8">Enter your work email and we'll reach out to discuss your custom AI talent needs.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
            <input 
              type="email" 
              placeholder="name@company.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
              disabled={status === 'loading'}
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Request Demo'}
            </button>
          </form>

          {status === 'success' && (
            <div className="p-4 bg-green-50 text-green-700 rounded-xl font-medium border border-green-100">
              {message}
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 rounded-xl font-medium border border-red-100">
              {message}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
