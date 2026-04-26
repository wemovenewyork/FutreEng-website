import type { Metadata } from 'next';
import { FullRule } from '@/components/ui/FullRule';
import { FeatureCase } from '@/components/FeatureCase';
import { CaseCard } from '@/components/CaseCard';
import { CASES } from '@/lib/cases';

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Twelve projects shipped across NYC and NJ. Web apps, PWAs, and digital products for community organizations, labor groups, and operators.',
  openGraph: {
    title: 'Selected Work — FutreEng',
    description:
      'Twelve projects shipped across NYC and NJ. Web apps, PWAs, and digital products for community organizations, labor groups, and operators.',
    url: 'https://futreeng.com/work',
  },
  twitter: {
    title: 'Selected Work — FutreEng',
    description:
      'Twelve projects shipped across NYC and NJ. Web apps, PWAs, and digital products for community organizations, labor groups, and operators.',
  },
};

export default function WorkPage() {
  const secondary = CASES.slice(1);
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4 text-red">
          Section I — Selected Work
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          Twelve projects.{' '}
          <em className="italic" style={{ color: '#1F2D5C' }}>
            One studio.
          </em>
        </h1>
        <p className="mt-7 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch]">
          Live work for clients across NYC and NJ. Each engagement begins with a conversation and
          ends with something we&apos;d put our names on.
        </p>
      </div>
      <FeatureCase />
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-20">
          <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-10 text-red">
            All work — continued
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {secondary.map((c) => (
              <CaseCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
