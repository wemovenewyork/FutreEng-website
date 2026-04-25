'use client';

import { useState } from 'react';
import Link from 'next/link';

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Studio', href: '/studio' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b-[2px] border-ink bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <Link href="/" className="ff-fraunces text-[28px] md:text-[32px] font-black tracking-[-0.025em] leading-none">
            FutreEng<span className="text-red">.</span>
          </Link>
          <span className="hidden md:inline ff-mono text-[10.5px] uppercase tracking-[0.24em] text-neutral-500">
            Issue 01 / Q3 '26
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 ff-mono text-[11px] uppercase tracking-[0.22em]">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-red transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-white px-5 py-3 ml-2 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#D63B27' }}
          >
            Book a call →
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden ff-mono text-[11px] uppercase tracking-[0.22em] border-[2px] border-ink px-4 py-2"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-[2px] border-ink">
          <div className="px-8 py-6 ff-archivo uppercase font-bold text-[28px] leading-[1.2] tracking-[-0.01em]">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-1 hover:text-red transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block mt-3 text-white px-5 py-3 ff-mono text-[12px] tracking-[0.24em]"
              style={{ backgroundColor: '#D63B27' }}
            >
              Book a call →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
