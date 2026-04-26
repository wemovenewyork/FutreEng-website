import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: '404 — Page Not Found — FutreEng' },
  description: "The page you were looking for isn't in this issue.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-24">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Error — Page Not Found
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          <em className="italic text-red">404</em>
          {' '}— Page not found.
        </h1>
        <p className="mt-8 ff-archivo font-medium uppercase text-[18px] md:text-[22px] leading-[1.18] tracking-[-0.012em] max-w-[46ch] text-neutral-700">
          The page you were looking for isn&apos;t in this issue. It may have been moved, renumbered, or never written.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            → Selected work
          </Link>
          <Link
            href="/studio"
            className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            → Studio
          </Link>
          <Link
            href="/contact"
            className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            → Contact
          </Link>
        </div>

        <div className="mt-8 ff-mono text-[11px] uppercase tracking-[0.24em] text-neutral-500">
          Or return to the cover:{' '}
          <Link href="/" className="hover:text-red transition-colors border-b border-current">
            futreeng.com
          </Link>
        </div>
      </div>
    </div>
  );
}
