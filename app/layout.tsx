import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SwiftCom — Chat. Send. Connect.',
  description: 'The all-in-one Nigerian super-app for messaging, digital wallet, eSIM management, and AI assistant. Built for Lagos speed.',
  keywords: ['SwiftCom', 'Nigeria', 'fintech', 'super-app', 'messaging', 'wallet', 'eSIM'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
