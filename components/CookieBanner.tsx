'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'futreeng_banner_dismissed';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage not available (SSR guard)
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <div
      role="region"
      aria-label="Analytics disclosure"
      style={{ backgroundColor: '#1A1715', color: '#F2EDE4', borderTop: '2px solid #D63B27' }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p
          className="text-[14px] leading-[1.55] max-w-[60ch]"
          style={{ color: '#F2EDE4CC' }}
        >
          We use Vercel Analytics — privacy-respecting, no cookies, no tracking across sites.
          We don&apos;t run advertising or sell data.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/privacy"
            className="ff-mono text-[11px] uppercase tracking-[0.22em] hover:text-red transition-colors"
            style={{ color: '#F2EDE499', borderBottom: '1px solid currentColor' }}
          >
            Read more →
          </Link>
          <button
            onClick={dismiss}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dismiss();
              }
            }}
            className="ff-mono text-[11px] uppercase tracking-[0.22em] px-4 py-2 hover:opacity-85 transition-opacity"
            style={{ backgroundColor: '#F2EDE4', color: '#1A1715' }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
