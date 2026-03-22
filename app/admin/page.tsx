import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-indigo-600">$12,450</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Active Freelancers</p>
          <p className="text-2xl font-bold text-gray-800">1,240</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Pending Jobs</p>
          <p className="text-2xl font-bold text-gray-800">84</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">New Signups (24h)</p>
          <p className="text-2xl font-bold text-green-600">+12</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Recent Platform Fees</h2>
          <button className="text-indigo-600 font-medium text-sm">View All</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-4">Transaction ID</th>
              <th className="px-6 py-4">Freelancer</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Platform Fee (10%)</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-600">#TXN-9021</td>
              <td className="px-6 py-4 text-sm text-gray-800">Alex R. (Prompt Eng)</td>
              <td className="px-6 py-4 text-sm text-gray-800">TechCorp Inc.</td>
              <td className="px-6 py-4 text-sm text-gray-800">$500.00</td>
              <td className="px-6 py-4 text-sm font-bold text-green-600">$50.00</td>
              <td className="px-6 py-4 text-xs font-semibold uppercase text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-600">#TXN-9022</td>
              <td className="px-6 py-4 text-sm text-gray-800">Sarah M. (3D Animator)</td>
              <td className="px-6 py-4 text-sm text-gray-800">GameStudio X</td>
              <td className="px-6 py-4 text-sm text-gray-800">$1,200.00</td>
              <td className="px-6 py-4 text-sm font-bold text-green-600">$120.00</td>
              <td className="px-6 py-4 text-xs font-semibold uppercase text-yellow-500">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Fee Structure Management</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
              <span className="text-sm font-medium">Freelancer Service Fee</span>
              <span className="text-indigo-700 font-bold">10%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
              <span className="text-sm font-medium">Customer Payment Fee</span>
              <span className="text-pink-700 font-bold">3%</span>
            </div>
            <button className="w-full mt-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium">Update Pricing Structure</button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Moderation Queue</h2>
          <p className="text-sm text-gray-500 mb-4">You have 5 new profiles awaiting verification.</p>
          <div className="space-y-2">
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span className="text-sm font-medium">David K. - AI Prompt Specialist</span>
              <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded">Review</button>
            </div>
            <div className="p-3 border rounded-lg flex justify-between items-center">
              <span className="text-sm font-medium">Marta S. - 3D Character Rigger</span>
              <button className="text-xs bg-indigo-600 text-white px-3 py-1 rounded">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
