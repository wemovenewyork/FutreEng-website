import Link from 'next/link';
import type { JournalPost } from '@/lib/journal';

export function JournalRow({ post }: { post: JournalPost }) {
  return (
    <li className="grid grid-cols-12 gap-4 py-7 border-b items-baseline" style={{ borderColor: '#1A171533' }}>
      <div className="col-span-2 md:col-span-1 ff-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.24em] text-red">
        {post.no}
      </div>
      <div className="col-span-10 md:col-span-2 ff-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.22em] text-neutral-500">
        {post.date}
      </div>
      <div className="col-span-12 md:col-span-2 ff-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.22em]">
        {post.cat}
      </div>
      <div className="col-span-12 md:col-span-6 ff-fraunces text-[24px] md:text-[34px] tracking-[-0.018em] leading-[1.1] font-black">
        <Link href={`/journal/${post.slug}`} className="hover:text-red transition-colors">
          {post.title}
        </Link>
      </div>
      <div className="col-span-12 md:col-span-1 ff-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.22em] text-neutral-500 md:text-right">
        {post.read}
      </div>
    </li>
  );
}
