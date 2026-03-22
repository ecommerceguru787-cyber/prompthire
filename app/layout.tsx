import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prompthire.vercel.app'),
  title: {
    default: 'PromptHire - Hire AI Prompt Engineers & 3D Animators',
    template: '%s | PromptHire',
  },
  description: 'PromptHire is the #1 specialized freelance marketplace to hire verified AI prompt engineers, ChatGPT experts, Midjourney specialists, and 3D animators. Post a job free today.',
  keywords: ['hire AI prompt engineer','prompt engineer freelance','ChatGPT expert for hire','Midjourney freelancer','3D animator for hire','AI freelance marketplace'],
  openGraph: {
    type: 'website',
    url: 'https://prompthire.vercel.app',
    title: 'PromptHire - Hire AI Prompt Engineers & 3D Animators',
    description: 'The only specialized freelance marketplace for AI prompt engineers and 3D animators.',
    siteName: 'PromptHire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptHire - AI Prompt Engineer & 3D Animator Marketplace',
    description: 'Hire vetted AI prompt engineers and 3D animators.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PromptHire',
          url: 'https://prompthire.vercel.app',
          description: 'Specialized freelance marketplace for AI prompt engineers and 3D animators',
        }) }} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
