'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IcoBot } from '@/components/icons';

export default function BenFloatingButton() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) return null;

  return (
    <Link
      href="/help?chat=ben"
      className="ben-floating-button"
      aria-label="Chat with Ben, Wiftco's assistant"
    >
      <span className="ben-floating-icon" aria-hidden="true">
        <IcoBot size={23} />
      </span>
      <span>Chat with Ben</span>
      <span className="ben-online-dot" aria-hidden="true" />
    </Link>
  );
}
