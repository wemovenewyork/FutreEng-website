import type { Metadata } from 'next';
import Link from 'next/link';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of use for futreeng.com. Plain language, short, honest.',
  openGraph: { title: 'Terms — FutreEng', url: 'https://futreeng.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section X — Terms
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[120px]">
          Terms.
        </h1>
        <p className="mt-6 ff-archivo font-medium uppercase text-[18px] md:text-[22px] leading-[1.18] tracking-[-0.012em] max-w-[44ch] text-neutral-700">
          By using futreeng.com, you agree to a few things. Most of them are common sense.
        </p>
      </div>

      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What this site is
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                futreeng.com is the website of FutreEng, a software studio in New York. The content
                here is for informational purposes — describing our work, our process, and how to
                reach us.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What you can do
            </div>
            <div className="col-span-12 md:col-span-8 space-y-3 text-[16px] leading-[1.75] text-neutral-700">
              <p>Read the site. Share links. Reach out about a project.</p>
              <p>Quote us, with attribution.</p>
              <p>Use the journal posts as reference, with attribution.</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What you can&apos;t do
            </div>
            <div className="col-span-12 md:col-span-8 space-y-3 text-[16px] leading-[1.75] text-neutral-700">
              <p>Copy substantial portions of the site as your own.</p>
              <p>Republish our case studies or journal entries without permission.</p>
              <p>Scrape the site for commercial purposes.</p>
              <p>Misrepresent yourself when contacting us.</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Our work
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                When we engage with a client, that engagement is governed by a separate signed
                agreement, not by these terms. These terms apply to the website only.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Limitation of liability
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                The information on this site is provided as-is. We make our best effort for accuracy
                but don&apos;t guarantee it. We&apos;re not liable for decisions you make based on
                information here.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Governing law
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                Disputes related to this site are governed by the laws of the State of New York.
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
