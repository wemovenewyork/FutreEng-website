import Link from 'next/link';
import Image from 'next/image';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import type { CaseStudy } from '@/lib/cases';

export function CaseCard({ c }: { c: CaseStudy }) {
  // FIX 9: tagType drives italic word color.
  // 'subtitle' (descriptive name/series) → blue; 'status'/'version' (delivery state) → red
  const italicColor = c.tagType === 'subtitle' ? '#1F2D5C' : '#D63B27';

  return (
    <article className="relative">
      {c.imagePath ? (
        <div className="aspect-[4/3] w-full relative overflow-hidden">
          <Image
            src={c.imagePath}
            alt={`${c.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <ImagePlaceholder bg={c.bg} caption={c.caption} ratio="aspect-[4/3]" />
      )}

      {/* FIX 5: ghost number is inside the text section, behind the title at low opacity.
           Previously used absolute -top-3 -left-2 which bled above the card boundary. */}
      <div className="relative mt-5">
        <div
          className="ff-mono font-medium tracking-[-0.02em] leading-[0.85] text-[80px] md:text-[120px] absolute -top-2 left-0 select-none pointer-events-none"
          style={{ color: '#D63B27', opacity: 0.08 }}
        >
          {c.no}
        </div>

        <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
          {c.no} / {c.cat}
        </div>
        <h4 className="ff-fraunces mt-2 font-black tracking-[-0.025em] leading-[0.98] text-[34px] md:text-[42px]">
          {c.title}{' '}
          <em className="italic" style={{ color: italicColor }}>
            {c.italicWord}
          </em>
        </h4>
        <p className="mt-3 text-[15px] leading-[1.6] text-neutral-700">{c.desc}</p>
        <div
          className="mt-5 grid grid-cols-3 gap-3 ff-mono text-[10.5px] uppercase tracking-[0.22em] border-t pt-3"
          style={{ borderColor: '#1A171555' }}
        >
          <div>{c.duration}</div>
          <div>{c.stack}</div>
          <div>{c.role}</div>
        </div>
        <Link
          href={`/work/${c.slug}`}
          className="mt-5 inline-block ff-mono text-[11px] uppercase tracking-[0.24em] pb-1 border-b-[2px] border-ink hover:text-red hover:border-red transition-colors"
        >
          Read case →
        </Link>
      </div>
    </article>
  );
}
