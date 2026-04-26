'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FullRule } from '@/components/ui/FullRule';

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Studio', href: '/studio' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

function ManageCookies() {
  function reset() {
    localStorage.removeItem('futreeng_banner_dismissed');
    window.location.reload();
  }
  return (
    <button
      onClick={reset}
      className="hover:text-red transition-colors"
    >
      Cookie preferences
    </button>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  return (
    <footer style={{ backgroundColor: '#F2EDE4', color: '#1A1715' }}>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
        <div className="overflow-hidden">
          <div className="ff-fraunces text-[88px] sm:text-[140px] md:text-[200px] lg:text-[240px] font-black tracking-[-0.045em] leading-[0.85] whitespace-nowrap">
            FutreEng<span style={{ color: '#D63B27' }}>.</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-8 border-t-[2px] border-ink pt-10">
          <div className="col-span-12 md:col-span-4">
            <div className="ff-archivo uppercase font-bold text-[18px] md:text-[22px] tracking-[-0.01em] max-w-[24ch] leading-[1.15]">
              A boutique software studio for the people moving New York.
            </div>
            <div className="mt-5 ff-mono text-[12px] uppercase tracking-[0.24em]">
              NYC Tri-State · hello@futreeng.com
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4" style={{ color: '#D63B27' }}>
              Index
            </div>
            <ul className="ff-mono uppercase text-[12px] tracking-[0.22em] leading-[2.1]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-red transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4" style={{ color: '#D63B27' }}>
              Legal
            </div>
            <ul className="ff-mono uppercase text-[12px] tracking-[0.22em] leading-[2.1]">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-red transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4" style={{ color: '#D63B27' }}>
              Newsletter
            </div>
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.22em] text-neutral-500 leading-[1.7] mb-3">
              Quarterly. No marketing fluff.
            </div>
            {!subbed ? (
              <div className="flex items-center gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-transparent border-b-[2px] border-ink py-1 px-1 flex-1 min-w-0 ff-mono text-[11px] uppercase tracking-[0.22em] focus:outline-none"
                />
                <button
                  onClick={() => email && setSubbed(true)}
                  className="ff-mono text-[10.5px] uppercase tracking-[0.24em] border-[2px] border-ink px-3 py-1.5 shrink-0 hover:bg-ink hover:text-cream transition-colors"
                >
                  Subscribe →
                </button>
              </div>
            ) : (
              <div className="ff-mono text-[10.5px] uppercase tracking-[0.22em]" style={{ color: '#D63B27' }}>
                You&apos;re in. Talk soon.
              </div>
            )}
          </div>
        </div>

        <div
          className="mt-12 pt-5 border-t-[2px] border-ink flex flex-col md:flex-row justify-between gap-3 ff-mono text-[10.5px] uppercase tracking-[0.24em]"
        >
          <div>© 2026 FutreEng. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-neutral-500">
            <span>Typeset in Fraunces & Archivo Condensed / Built in New York / Issue 01 · Q3 2026</span>
            <ManageCookies />
          </div>
        </div>
      </div>
    </footer>
  );
}
