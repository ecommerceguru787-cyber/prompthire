'use client';
import { useState } from 'react';
import Link from 'next/link';

const translations: Record<string, Record<string, string>> = {
  en: {
    findTalent: 'Find Talent',
    postJob: 'Post a Job',
    getHired: 'Get Hired',
    login: 'Log In',
    signup: 'Sign Up',
    tagline: 'AI & 3D Freelance Marketplace',
  },
  ur: {
    findTalent: 'ہنرمند تلاش کریں',
    postJob: 'کام پوسٹ کریں',
    getHired: 'ملازمت پائیں',
    login: 'لاگ ان',
    signup: 'سائن اپ',
    tagline: 'AI اور 3D فری لانس مارکیٹ',
  },
  es: {
    findTalent: 'Buscar Talento',
    postJob: 'Publicar Trabajo',
    getHired: 'Ser Contratado',
    login: 'Iniciar sesión',
    signup: 'Registrarse',
    tagline: 'Mercado Freelance de AI y 3D',
  },
  fr: {
    findTalent: 'Trouver des Talents',
    postJob: 'Publier un Job',
    getHired: 'Être Embauché',
    login: 'Connexion',
    signup: 'S\'inscrire',
    tagline: 'Marché Freelance IA & 3D',
  },
  ar: {
    findTalent: 'ابحث عن موهبة',
    postJob: 'انشر وظيفة',
    getHired: 'احصل على عمل',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    tagline: 'سوق مستقل للذكاء الاصطناعي و3D',
  },
  zh: {
    findTalent: '寻找人才',
    postJob: '发布工作',
    getHired: '求职',
    login: '登录',
    signup: '注册',
    tagline: 'AI与3D自由职业市场',
  },
};

const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ur', label: 'UR', name: 'اردو' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'AR', name: 'العربية' },
  { code: 'zh', label: 'ZH', name: '中文' },
];

export default function Navbar() {
  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[lang];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
              P
            </div>
            <div>
              <span className="text-xl font-extrabold text-indigo-700 tracking-tight">PromptHire</span>
              <span className="hidden sm:block text-xs text-gray-400 leading-none">{t.tagline}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/find-talent" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition">{t.findTalent}</Link>
            <Link href="/post-job" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition">{t.postJob}</Link>
            <Link href="/join" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition">{t.getHired}</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-indigo-400 hover:text-indigo-600 transition"
              >
                <span>🌐</span>
                <span>{LANGS.find(l => l.code === lang)?.label}</span>
                <span className="text-xs">▾</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                  {LANGS.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition ${
                        lang === l.code ? 'text-indigo-600 font-semibold bg-indigo-50' : 'text-gray-700'
                      }`}
                    >
                      {l.name} <span className="text-gray-400 text-xs">({l.label})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition">{t.login}</Link>
            <Link href="/signup" className="bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-indigo-700 transition shadow">{t.signup}</Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-gray-600"></span>
                <span className="block w-5 h-0.5 bg-gray-600"></span>
                <span className="block w-5 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            <Link href="/find-talent" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>{t.findTalent}</Link>
            <Link href="/post-job" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>{t.postJob}</Link>
            <Link href="/join" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>{t.getHired}</Link>
            <Link href="/login" className="text-gray-700 font-medium px-2 py-1" onClick={() => setMenuOpen(false)}>{t.login}</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
