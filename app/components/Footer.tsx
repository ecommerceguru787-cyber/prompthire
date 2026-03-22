import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-white font-bold text-lg">PromptHire</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">The #1 specialized freelance marketplace for AI prompt engineers and 3D animators.</p>
            <div className="flex gap-3">
              <a href="https://twitter.com" className="text-gray-500 hover:text-white transition" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-white transition" target="_blank" rel="noopener noreferrer">in</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">PromptHire</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Clients</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/find-talent" className="hover:text-white transition">Find Talent</Link></li>
              <li><Link href="/post-job" className="hover:text-white transition">Post a Job</Link></li>
              <li><Link href="/enterprise" className="hover:text-white transition">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">For Freelancers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/join" className="hover:text-white transition">Join as Freelancer</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2024 PromptHire.io &mdash; All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
