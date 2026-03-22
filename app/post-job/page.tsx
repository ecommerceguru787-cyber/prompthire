export const metadata = { title: 'Post a Job - PromptHire', description: 'Post a job and hire top AI prompt engineers and 3D animators.' };
export default function PostJobPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">Post a Job</h1>
        <p className="text-indigo-200">Describe your project and get proposals from top AI & 3D specialists within hours</p>
      </section>
      <section className="max-w-2xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell us about your project</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Title</label>
              <input type="text" placeholder="e.g. Need Midjourney prompts for product catalog" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-indigo-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600 focus:outline-none focus:border-indigo-400">
                <option>AI Image Prompts</option>
                <option>AI Text & GPT Prompts</option>
                <option>3D Character Animation</option>
                <option>AI Video Generation</option>
                <option>3D Product Visualization</option>
                <option>AI Workflow Automation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
              <textarea rows={5} placeholder="Describe your project in detail..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-indigo-400 resize-none"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600">
                  <option>Under $100</option>
                  <option>$100 - $500</option>
                  <option>$500 - $2,000</option>
                  <option>$2,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600">
                  <option>Less than 1 week</option>
                  <option>1-2 weeks</option>
                  <option>1 month</option>
                  <option>Ongoing</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition text-lg">Post Job &mdash; It&apos;s Free</button>
            <p className="text-center text-gray-400 text-sm">By posting, you agree to our Terms of Service. No credit card required.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
