import Link from 'next/link';

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="border-b-[2px] border-ink">
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 py-3 flex items-center justify-between ff-mono text-[11px] uppercase tracking-[0.24em]">
          <div>Cover — A Software Studio in New York</div>
          <div className="hidden md:flex items-center gap-2 text-red">
            <span className="inline-block w-1.5 h-1.5 bg-red" />
            Studio open · Q3 2026
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-6">
          {/* Metadata column */}
          <aside className="col-span-12 md:col-span-3 md:pt-3 order-2 md:order-1">
            <div className="border-t-[2px] border-ink pt-4 ff-mono text-[10.5px] uppercase tracking-[0.22em] leading-[2]">
              <div className="text-neutral-500">Established</div>
              <div className="mb-3">2024</div>
              <div className="text-neutral-500">Based in</div>
              <div className="mb-3">NYC + NJ</div>
              <div className="text-neutral-500">Studio of</div>
              <div className="mb-3">Two</div>
              <div className="text-neutral-500">Current issue</div>
              <div>Q3 2026</div>
            </div>
          </aside>

          {/* Headline — FIX 1: reduced ~17% from 180px→150px to fit within ~90vh on 1440×900.
               FIX 2: leading-[0.92] (was 0.90) gives descenders of "moving" clearance above "New York." */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2 overflow-hidden">
            <h1 className="ff-fraunces font-black leading-[0.92] tracking-[-0.045em] text-[52px] sm:text-[78px] md:text-[132px] lg:text-[150px]">
              We build digital products for the people{' '}
              <em
                className="not-italic"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <span className="italic text-red">moving</span>
                <span
                  className="absolute left-0 right-0"
                  style={{ bottom: '0.04em', height: '0.09em', backgroundColor: '#D63B27' }}
                />
              </em>{' '}
              New York.
            </h1>
          </div>
        </div>

        {/* Subhead + CTAs + sidebar number */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-3" />
          <div className="col-span-12 md:col-span-7">
            <p className="ff-archivo text-[18px] sm:text-[22px] md:text-[26px] leading-[1.18] tracking-[-0.012em] font-medium uppercase">
              Web apps, PWAs, and bespoke software for community organizations, labor groups, and
              operators building from inside the industries they know.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap items-stretch gap-4">
              <Link
                href="/work"
                className="text-white px-6 md:px-7 py-4 ff-mono text-[12px] uppercase tracking-[0.24em] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#D63B27' }}
              >
                View the work →
              </Link>
              <Link
                href="/contact"
                className="px-6 md:px-7 py-4 ff-mono text-[12px] uppercase tracking-[0.24em] border-[2px] border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                Book a 30-min intro →
              </Link>
            </div>
            <div className="mt-5 ff-mono text-[11px] uppercase tracking-[0.24em] flex items-center gap-2 text-red">
              <span className="inline-block w-1.5 h-1.5 bg-red" />
              Currently accepting 3 projects · Q3 2026
            </div>
          </div>
          {/* FIX 8: enlarged from 140px→220px so it reads as a proper magazine issue-number moment */}
          <div
            className="hidden md:flex col-span-12 md:col-span-2 ff-fraunces text-[220px] leading-[0.8] font-black tracking-[-0.05em] justify-end items-end"
            style={{ color: '#1F2D5C' }}
          >
            '26
          </div>
        </div>
      </div>
    </section>
  );
}
