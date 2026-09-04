import type { Metadata } from 'next';
import './globals.css';
import BenFloatingButton from '@/components/BenFloatingButton';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wiftco.com'),
  title: 'Wiftco — Communication, Connectivity & Digital Services',
  description: 'Wiftco Tech Services develops digital platforms that simplify access to communication, payments and everyday digital services.',
  keywords: ['Wiftco', 'Nigeria', 'communications', 'connectivity', 'messaging', 'voice calling', 'eSIM'],
  alternates: { canonical: '/' },
  openGraph: { title:'Wiftco — Communication, Connectivity & Digital Services', description:'One app for the way you connect.', url:'https://www.wiftco.com', siteName:'Wiftco', type:'website', images:[{url:'/wiftco%20icon.png',width:512,height:512,alt:'Wiftco'}] },
  twitter: { card:'summary_large_image', title:'Wiftco — Communication, Connectivity & Digital Services', description:'One app for the way you connect.', images:['/wiftco%20icon.png'] },
  icons: {
    icon: [{ url: '/wiftco%20icon.png', type: 'image/png' }],
    shortcut: '/wiftco%20icon.png',
    apple: '/wiftco%20icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <CookieConsent />
        <BenFloatingButton />
      </body>
    </html>
  );
}
