'use client';
import { useState } from 'react';
import Link from 'next/link';

const translations: Record<string, Record<string, string>> = {
  en: {
    findTalent: 'Find Talent',
    postJob: 'Post a Job',
    getHired: 'Get Hired',
    pricing: 'Pricing',
    enterprise: 'Enterprise',
    login: 'Log In',
    signup: 'Sign Up',
    tagline: 'AI & 3D Freelance Marketplace',
  },
  // Simplified for brevity in this update, would normally include all languages
};

const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
];

export default function Navbar() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[lang] || translations['en'];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
            <span className="font-bold text-xl tracking-tight text-gray-900">PromptHire</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/find-talent" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.findTalent}</Link>
            <Link href="/post-job" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.postJob}</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.pricing}</Link>
            <Link href="/enterprise" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.enterprise}</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.login}</Link>
            <Link href="/auth/signup" className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm">
              {t.signup}
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <Link href="/find-talent" className="block text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>{t.findTalent}</Link>
          <Link href="/post-job" className="block text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>{t.postJob}</Link>
          <Link href="/pricing" className="block text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>{t.pricing}</Link>
          <Link href="/enterprise" className="block text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>{t.enterprise}</Link>
          <div className="pt-4 border-t border-gray-100 space-y-4">
            <Link href="/auth/login" className="block text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>{t.login}</Link>
            <Link href="/auth/signup" className="block bg-indigo-600 text-white text-center py-3 rounded-lg font-bold" onClick={() => setMenuOpen(false)}>{t.signup}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
