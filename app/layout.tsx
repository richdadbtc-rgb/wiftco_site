import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wiftco — Chat. Send. Connect.',
  description: 'The all-in-one Nigerian super-app for messaging, digital wallet, eSIM management, and AI assistant. Built for Lagos speed.',
  keywords: ['Wiftco', 'Nigeria', 'fintech', 'super-app', 'messaging', 'wallet', 'eSIM'],
  icons: {
    icon: [{ url: '/wiftco%20icon.png', type: 'image/png' }],
    shortcut: '/wiftco%20icon.png',
    apple: '/wiftco%20icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
