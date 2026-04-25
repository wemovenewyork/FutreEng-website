import Link from 'next/link';
import Image from 'next/image';
import { CASES } from '@/lib/cases';

export function FeatureCase() {
  const c = CASES[0];
  return (
    <div className="border-t-[2px] border-ink">
      <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7 relative">
            <div
              className="ff-mono font-medium tracking-[-0.02em] leading-[0.85] text-[28vw] md:text-[280px] absolute -top-10 -left-4 select-none pointer-events-none"
              style={{ color: '#D63B27', opacity: 0.1 }}
            >
              FE.001
            </div>
            {c.imagePath ? (
              <div className="aspect-[5/4] w-full relative overflow-hidden">
                <Image
                  src={c.imagePath}
                  alt={`${c.title} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-[5/4] w-full relative" style={{ backgroundColor: '#D63B27' }}>
                <div className="absolute inset-0 flex items-end p-5">
                  <figcaption className="ff-mono text-[10.5px] uppercase tracking-[0.22em] text-white opacity-85">
                    {c.caption}
                  </figcaption>
                </div>
              </div>
            )}
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="ff-mono text-[10.5px] uppercase tracking-[0.28em] text-red">
              {c.no} / {c.cat} — {c.year}
            </div>
            <h3 className="ff-fraunces mt-4 font-black tracking-[-0.03em] leading-[0.95] text-[40px] md:text-[68px]">
              {c.title}{' '}
              <em className="italic text-red">{c.italicWord}</em>
            </h3>
            <p className="mt-6 text-[16px] leading-[1.65]">{c.desc}</p>
            <div
              className="mt-8 grid grid-cols-3 gap-4 ff-mono text-[10.5px] uppercase tracking-[0.22em] border-t-[2px] border-ink pt-5"
            >
              <div>
                <div className="text-neutral-500 mb-2">Duration</div>
                {c.duration}
              </div>
              <div>
                <div className="text-neutral-500 mb-2">Stack</div>
                {c.stack}
              </div>
              <div>
                <div className="text-neutral-500 mb-2">Role</div>
                {c.role}
              </div>
            </div>
            <Link
              href={`/work/${c.slug}`}
              className="mt-8 inline-flex items-center gap-3 text-white px-6 py-3.5 ff-mono text-[12px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1A1715' }}
            >
              Read the full case →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
