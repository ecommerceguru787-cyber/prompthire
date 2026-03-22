import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prompthire.vercel.app'),
  title: {
    default: 'PromptHire - Hire AI Prompt Engineers & 3D Animators',
    template: '%s | PromptHire',
  },
  description: 'PromptHire is the #1 specialized freelance marketplace to hire verified AI prompt engineers and 3D animators.',
  keywords: ['hire AI prompt engineer', 'prompt engineer freelance', 'ChatGPT expert for hire', '3D animator freelance'],
  openGraph: {
    title: 'PromptHire - Freelance Marketplace for AI & 3D Specialists',
    description: 'Hire top AI prompt engineers and 3D animators on demand.',
    url: 'https://prompthire.vercel.app',
    siteName: 'PromptHire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PromptHire - AI Prompt Engineer & 3D Animator Marketplace',
    description: 'Find and hire the best AI prompt engineers and 3D animators.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
