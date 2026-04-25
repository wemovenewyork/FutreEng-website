import { FullRule } from '@/components/ui/FullRule';

export function PullQuote() {
  return (
    <>
      <FullRule />
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A1715', color: '#F2EDE4' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 pt-14 pb-10 w-full flex items-center justify-between ff-mono text-[11px] uppercase tracking-[0.28em]">
          <div className="text-red">Section V — Testimonial — FE Client</div>
          <div className="text-neutral-500">Pull quote / p. 14</div>
        </div>
        <div className="flex-1 flex items-center max-w-[1440px] mx-auto px-8 md:px-10 pb-12 w-full">
          <blockquote className="ff-archivo italic font-bold uppercase text-[44px] sm:text-[72px] md:text-[120px] leading-[0.95] tracking-[-0.02em]">
            <span className="text-red">&ldquo;</span>The site looks like it cost five times what we
            paid.{' '}
            <span style={{ color: '#F2EDE4' }}>Genuinely</span> proud to show
            it.<span className="text-red">&rdquo;</span>
          </blockquote>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 md:px-10 pb-16 w-full ff-mono text-[12px] uppercase tracking-[0.28em] flex flex-wrap gap-x-6 gap-y-2 text-red">
          <span>— Low.Key Studios, Photography Studio</span>
          <span className="text-neutral-500">[01] Quoted from FE archive, 2025.</span>
        </div>
      </div>
      <FullRule />
    </>
  );
}
