import type { Metadata } from 'next';
import Link from 'next/link';
import { FullRule } from '@/components/ui/FullRule';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Plain-language privacy policy for futreeng.com. We collect very little. We sell nothing.',
  openGraph: { title: 'Privacy — FutreEng', url: 'https://futreeng.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
          Section IX — Privacy
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[120px]">
          Privacy.
        </h1>
        <p className="mt-6 ff-archivo font-medium uppercase text-[18px] md:text-[22px] leading-[1.18] tracking-[-0.012em] max-w-[44ch] text-neutral-700">
          Plain-language version: we don&apos;t sell your data. We collect very little of it.
        </p>
      </div>

      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What we collect
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                When you visit futreeng.com, our hosting platform (Vercel) records standard web traffic
                information — IP address, browser, referring page, time of visit. This is normal for any
                website on the internet. We use Vercel Analytics, which is a privacy-respecting analytics
                tool that does NOT use cookies, does NOT track you across sites, and does NOT collect
                personal data.
              </p>
              <p>
                When you fill out our contact form, we collect the information you submit — name, email,
                organization, project details. We use that information only to respond to your inquiry.
                We don&apos;t add you to any marketing list, sell it, or share it with anyone outside
                the studio.
              </p>
              <p>
                When you email us directly, we keep that email — same as you&apos;d keep an email from
                anyone else.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              What we don&apos;t do
            </div>
            <div className="col-span-12 md:col-span-8 space-y-3 text-[16px] leading-[1.75] text-neutral-700">
              <p>We don&apos;t run advertising.</p>
              <p>We don&apos;t use cookies for tracking.</p>
              <p>We don&apos;t sell or share data with third parties.</p>
              <p>We don&apos;t have a marketing database.</p>
              <p>We don&apos;t profile visitors.</p>
              <p>We don&apos;t send unsolicited email.</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Your rights
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                You can email{' '}
                <a
                  href="mailto:hello@futreeng.com"
                  className="border-b border-current hover:text-red transition-colors"
                >
                  hello@futreeng.com
                </a>{' '}
                at any time and ask us to delete any information we have about you. We&apos;ll do it.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Children
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                This site is not directed at children under 13. We don&apos;t knowingly collect
                information from children.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-6 border-t-[2px] border-ink pt-10">
            <div className="col-span-12 md:col-span-3 ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              Changes
            </div>
            <div className="col-span-12 md:col-span-8 text-[16px] leading-[1.75] text-neutral-700">
              <p>
                If this policy changes, we&apos;ll update it here. The date below tells you when it was
                last revised.
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
