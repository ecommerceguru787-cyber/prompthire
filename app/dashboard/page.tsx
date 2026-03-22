import React from 'react';
import Link from 'next/link';

export default function FreelancerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b">
          <p className="font-bold text-lg text-indigo-600">PromptHire</p>
          <p className="text-xs text-gray-400">Freelancer Portal</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 bg-indigo-50 text-indigo-600 rounded-lg font-medium">
            <span>📊</span> Dashboard
          </Link>
          <Link href="/dashboard/jobs" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            <span>💼</span> Browse Jobs
          </Link>
          <Link href="/dashboard/earnings" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            <span>💰</span> Earnings
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            <span>💬</span> Messages
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg transition">
            <span>⚙️</span> Settings
          </Link>
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">JD</div>
            <div>
              <p className="text-sm font-bold text-gray-800">John Doe</p>
              <p className="text-xs text-green-500 font-medium">Online</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
            <p className="text-gray-500">You have 3 active projects and 12 new job matches.</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
            Withdraw Funds ($450.00)
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 mb-1">Active Proposals</p>
            <p className="text-3xl font-bold text-gray-800">8</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 mb-1">Total Earned</p>
            <p className="text-3xl font-bold text-gray-800">$2,840.00</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-400 mb-1">Success Score</p>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-green-600">98%</p>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Top Rated</span>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Active Projects</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-800">Stable Diffusion Custom LoRA Training</h3>
                <p className="text-sm text-gray-500">Client: TechCreative Hub • Due in 2 days</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-bold text-gray-800">$1,200.00</p>
                  <p className="text-xs text-gray-400">Milestone 2/3</p>
                </div>
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Update Status</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-800">3D Character Animation for VR Game</h3>
                <p className="text-sm text-gray-500">Client: PixelPlay Studios • Ongoing</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-bold text-gray-800">$850.00</p>
                  <p className="text-xs text-gray-400">Awaiting Feedback</p>
                </div>
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">Message Client</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
