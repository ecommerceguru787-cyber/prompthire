'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [role, setRole] = useState<'customer' | 'freelancer'>('customer');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <Link href="/" className="inline-block text-3xl font-bold text-indigo-600 mb-4">PromptHire</Link>
        <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
        </p>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-gray-100">
          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setRole('customer')}
              className={`flex flex-col items-center p-4 border-2 rounded-xl transition ${role === 'customer' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
            >
              <span className="text-2xl mb-1">💼</span>
              <span className="text-xs font-bold uppercase">I need Talent</span>
              <span className="text-xs text-gray-400 mt-1">Customer</span>
            </button>
            <button
              onClick={() => setRole('freelancer')}
              className={`flex flex-col items-center p-4 border-2 rounded-xl transition ${role === 'freelancer' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
            >
              <span className="text-2xl mb-1">🚀</span>
              <span className="text-xs font-bold uppercase">I want Work</span>
              <span className="text-xs text-gray-400 mt-1">Freelancer</span>
            </button>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <input type="email" placeholder="Email address" required className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <input type="password" placeholder="Password" required className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            <p className="text-xs text-gray-500">
              By signing up, you agree to our{' '}
              <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
            </p>
            <button type="submit" className="w-full py-3 rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 font-bold">
              Create Account as {role === 'customer' ? 'Customer' : 'Freelancer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
