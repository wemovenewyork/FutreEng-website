import Link from 'next/link';
import { POSTS } from '@/lib/journal';
import { JournalRow } from '@/components/JournalRow';

export function JournalSection({ limit = 4 }: { limit?: number }) {
  const posts = POSTS.slice(0, limit);
  return (
    <div id="journal" className="border-t-[2px] border-ink bg-cream">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] mb-4 text-red">
              Section VI — Journal
            </div>
            <h2 className="ff-fraunces font-black tracking-[-0.035em] leading-[0.94] text-[56px] sm:text-[80px] md:text-[110px]">
              From the{' '}
              <em className="italic" style={{ color: '#1F2D5C' }}>
                studio.
              </em>
            </h2>
          </div>
          <Link
            href="/journal"
            className="ff-mono text-[11px] uppercase tracking-[0.24em] border-[2px] border-ink px-5 py-3 hover:bg-ink hover:text-cream transition-colors"
          >
            All entries →
          </Link>
        </div>

        <ul className="mt-12 border-t-[2px] border-ink">
          {posts.map((post) => (
            <JournalRow key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
