import type { Metadata } from 'next';
import Link from 'next/link';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'FutreEng accessibility statement. We aim for WCAG 2.1 Level AA. If something is broken, we want to know.',
  openGraph: { title: 'Accessibility — FutreEng', url: 'https://futreeng.com/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section XI — Accessibility
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[120px]">
          Accessibility.
        </h1>
        <p className="mt-6 ff-archivo font-medium uppercase text-[18px] md:text-[22px] leading-[1.18] tracking-[-0.012em] max-w-[44ch] text-neutral-700">
          Software is infrastructure. It should work for everyone.
        </p>
      </div>

      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What we commit to
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p className="mb-5">
                FutreEng builds and maintains its website with accessibility in mind. We aim for
                WCAG 2.1 Level AA conformance. That means:
              </p>
              <ul className="space-y-2">
                {[
                  'Sufficient color contrast for text and interactive elements',
                  'Keyboard navigation throughout the site',
                  'Screen reader compatible markup',
                  'Respect for user motion preferences (reduced motion)',
                  'Alt text on meaningful images',
                  'Form labels and error messages',
                  'Resizable text up to 200% without breaking layout',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red shrink-0 mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Where we fall short
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                We&apos;re a small studio and we ship continuously. If something is broken, we want
                to know.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              How to tell us
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                If you find an accessibility issue on this site — anything that makes it harder to
                use — email{' '}
                <a
                  href="mailto:hello@futreeng.com"
                  className="border-b border-current hover:text-red transition-colors"
                >
                  hello@futreeng.com
                </a>
                . Tell us what you encountered and what tool you were using. We&apos;ll fix it.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Our client work
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                Accessibility commitments on the projects we build for clients are governed by those
                projects&apos; specifications and contracts. We default to WCAG 2.1 AA unless the
                client requires otherwise.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t-[2px] border-ink pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.24em] text-neutral-500">
              Last updated: April 26, 2026 · Questions?{' '}
              <a
                href="mailto:hello@futreeng.com"
                className="hover:text-red transition-colors border-b border-current"
              >
                hello@futreeng.com
              </a>
            </div>
            <Link
              href="/"
              className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors"
            >
              ← Back to studio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
