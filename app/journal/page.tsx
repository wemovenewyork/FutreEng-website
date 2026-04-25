import type { Metadata } from 'next';
import { FullRule } from '@/components/ui/FullRule';
import { JournalRow } from '@/components/JournalRow';
import { POSTS } from '@/lib/journal';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Field notes, process writing, and case studies from FutreEng.',
};

export default function JournalPage() {
  return (
    <>
      <FullRule />
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
        <div className="ff-mono text-[11px] uppercase tracking-[0.3em] mb-4 text-red">
          Section VI — Journal
        </div>
        <h1 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[88px] md:text-[140px]">
          From the{' '}
          <em className="italic" style={{ color: '#1F2D5C' }}>
            studio.
          </em>
        </h1>
        <p className="mt-7 text-[16px] md:text-[18px] leading-[1.55] max-w-[58ch]">
          Field notes, process writing, and case studies. Published when there&apos;s something worth saying.
        </p>
      </div>
      <div className="border-t-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 pb-16">
          <ul>
            {POSTS.map((post) => (
              <JournalRow key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
